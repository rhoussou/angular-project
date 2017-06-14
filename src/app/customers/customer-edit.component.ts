import { Component, OnInit, ViewChild, AfterViewInit,Input, Output,EventEmitter} from '@angular/core';
import { trigger,state,style,animate, transition } from '@angular/animations';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup ,FormBuilder,Validators  } from '@angular/forms';
import { ICustomer } from '../shared/interfaces';
import { NotificationService } from '../shared/utils/notification.service';

import { CustomerService } from '../shared/services/customer.service';
import { FileUploadService } from '../shared/services/fileUpload.service';

@Component({
    selector: 'customer-edit-form',
    templateUrl: 'customer-edit.component.html', 
})

export class CustomerEditComponent implements OnInit {
   
    customerEditForm:FormGroup;
    imageSrc: string = '';
    file:File;
    editedCustomerId : string;
    constructor(private fb:FormBuilder,
                private route: ActivatedRoute,
                private router: Router,
                private customerService: CustomerService,
                private notificationService: NotificationService){


            this.customerEditForm = this.fb.group({
            gender: ['',Validators.required],
            lastname: ['',Validators.required],
            firstname: ['',Validators.required],
            username: 'not used',
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
            authorities: [{name: 'ROLE_USER'}],
            company : '',
            profession : ''
       });
    }

    ngOnInit() {}

    OnEdit(customer:any) {
        this.customerEditForm.patchValue(customer.value);
        this.editedCustomerId = customer.value.id;
     }


    onCustomerUpdateSubmit() {
        this.updateCustomer();
        this.back();  
    }

    updateCustomer() {
        this.customerService.updateCustomer(this.file, this.editedCustomerId, this.customerEditForm.value)
             .subscribe(data =>  this.notificationService.printSuccessMessage('le  client a été modifié avec succes'),
                 error => this.notificationService.printErrorMessage('Failed to created Customer'+ error)
              )
    }

    onChange(event) {
        
        var files = event.srcElement.files;
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