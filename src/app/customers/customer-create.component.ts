import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup ,FormBuilder,Validators  } from '@angular/forms';
import { trigger,state,style,animate, transition } from '@angular/animations';

import { DataService } from '../shared/services/data.service';
import { ItemsService } from '../shared/utils/items.service';
import { NotificationService } from '../shared/utils/notification.service';
import { ICustomer } from '../shared/interfaces';
import { DateFormatPipe } from '../shared/pipes/date-format.pipe';

@Component({
    selector: 'customer-create-form',
    templateUrl: 'customer-create.component.html',
    styleUrls: ['./customer.component.css'],
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
    

    formGroupCustomerCreate:FormGroup;

    postData:string;

    constructor(private fb:FormBuilder,
                private route: ActivatedRoute,
                private router: Router,
                private dataService: DataService,
                private itemsService: ItemsService,
                private notificationService: NotificationService){

       this.formGroupCustomerCreate = this.fb.group({

            gender: ['',Validators.required],
            lastname: ['',Validators.required],
            firstname: ['',Validators.required],
            username: ['',Validators.required],
            birthdate: ['',Validators.required],
            contact: this.fb.group({
                email : '',
                phone : '',
                website : '',
            }),
            adress: this.fb.group({
                street : '',
                suite : '',
                country:'',
                city   : '',
                zipcode: ''
            }),
            password: '',
            enabled: '',
            lastPasswordResetDate: '',
            authorities: this.fb.group({
                    name: 'ROLE_USER'
            }),
            company : '',
            profession : ''
       });

    }

    ngOnInit(){}

    onCustomerCreateSubmit(){
        this.createCustomer();
        this.back();
        
    }

    createCustomer() {

        this.dataService.createPosition(this.formGroupCustomerCreate.value)
            .subscribe((customerCreated) => {
                    this.postData= JSON.stringify(customerCreated);
                    console.log(this.postData);
                },
                error => {

                    this.notificationService.printErrorMessage('Failed to created Customer'+ error);
                });

    }

























    back() {
        this.router.navigate(['customers']);
    }

}