import { Component, OnInit, ViewChild, AfterViewInit,Input, Output,EventEmitter} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup ,FormBuilder,Validators  } from '@angular/forms';
import { trigger,state,style,animate, transition } from '@angular/animations';
import { Http, Response, Headers , RequestOptions, URLSearchParams,RequestOptionsArgs} from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { CustomerService } from '../shared/services/customer.service';
import { NotificationService } from '../shared/utils/notification.service';
import { ICustomer} from '../shared/interfaces';
import { DateFormatPipe } from '../shared/pipes/date-format.pipe';

@Component({
    selector: 'customer-create',
    templateUrl: 'customer-create.component.html',

     animations: [
        trigger('flyInOut', [
            state('in', style({ opacity: 1, transform: 'translateX(0)' })),
            transition('void => *', [
                style({
                    opacity: 0,
                    transform: 'translateX(-100%)'
                }),
                animate('0.5s ease-in')
            ]),
            transition('* => void', [
                animate('0.2s 10 ease-out', style({
                    opacity: 0,
                    transform: 'translateX(100%)'
                }))
            ])
        ])
    ]

})
export class CustomerCreateComponent implements OnInit {
     
    
    customerCreate:FormGroup;
    imageSrc: string = '';
    file:File;
    files:any[];
    constructor(private fb:FormBuilder,
                private route: ActivatedRoute,
                private router: Router,
                private customerService: CustomerService,
                private notificationService: NotificationService){

       this.customerCreate = this.fb.group({

            gender: ['',Validators.required],
            lastname: ['',Validators.required],
            firstname: ['',Validators.required],
            username: 'user',
            birthdate: ['2017-05-31T19:37:55.507Z',Validators.required],
            email : '',
            phone : '',
            adress: this.fb.group({
                suite : '',
                state:'',
                city   : '',
                zip: ''
            }),
            password: 'not used',
            enabled: 'true',
            lastPasswordResetDate: '2017-05-31T19:37:55.507Z',
            authorities: [[{name: 'ROLE_USER'}]],
            company : '',
            profession : ''
       });
    }

    ngOnInit() {}
   
    onCustomerCreateSubmit() {
        this.createCustomer();
        this.back();  
    }

   
    createCustomer() {
        this.customerService.createCustomer(this.files,this.customerCreate.value)
             .subscribe(data =>  this.notificationService.printSuccessMessage('le client a été crée avec succes'),
                 error => this.notificationService.printErrorMessage('Failed to created Customer'+ error)
              )
    }

  
    onChange(event) {
        
        this.files = event.srcElement.files;
        this.file = event.dataTransfer ? event.dataTransfer.files[0] : event.target.files[0];
        var pattern = /image-*/;
        var reader = new FileReader();
        if (!this.file.type.match(pattern)) {
            alert('invalid format');
            return;
        }
        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsDataURL(this.file);
       
    }

    _handleReaderLoaded(e) {
        var reader = e.target;
        this.imageSrc = reader.result;
    }

    back() {
        this.router.navigate(['customers']);
    }

}