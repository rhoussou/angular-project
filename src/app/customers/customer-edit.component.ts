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
    selector: 'customer-edit-form',
    templateUrl: 'customer-edit.component.html',
    styleUrls: ['./customer.component.css']
})
export class CustomerEditComponent implements OnInit {
    apiHost: string;
    id: number;
    scheduleLoaded: boolean = false;
    statuses: string[];
    types: string[];
    private sub: any;

    formGroupCustomerEdit:FormGroup;

    postData:string;

    constructor(private fb:FormBuilder,
                private route: ActivatedRoute,
                private router: Router,
                private dataService: DataService,
                private itemsService: ItemsService,
                private notificationService: NotificationService){

       this.formGroupCustomerEdit = this.fb.group({

            name: ['',Validators.required],
            customername:['',Validators.required],
            email:['',Validators.required],
            adress: this.fb.group({
                street : '',
                suite : '',
                city   : '',
                zipcode: '',
                geo: this.fb.group({
                    lat: '',
                    lng: ''
                }),
            }),
            phone: '',
            website : '',
            company: this.fb.group({
                 name: '',
                 catchPhrase: '',
                 bs: ''

            })
     
       });

    }

    ngOnInit(){


    }

    onCustomerCreateSubmit(){
        this.createCustomer();
        this.back();
        
    }

    createCustomer() {

        this.dataService.createPosition(this.formGroupCustomerEdit.value)
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