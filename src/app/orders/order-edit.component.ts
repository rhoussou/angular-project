import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormBuilder,Validators  } from '@angular/forms';
import { DataService } from '../shared/services/data.service';
import { NotificationService } from '../shared/utils/notification.service';


@Component({
    moduleId: module.id,
    selector: 'order-edit-form',
    templateUrl: 'order-edit.component.html',

})

export class OrderEditComponent implements OnInit{

    formGroupEditOrder:FormGroup;
    updateData:string;

    constructor(private fb:FormBuilder,
                private dataService: DataService,
                private notificationService: NotificationService){

        this.formGroupEditOrder = this.fb.group({

            user_key: ['c3526fae1b3eaf162d3ae2b596e844e6'],
            Symbol: ['',Validators.required],
            OrderQty:['',Validators.required],
            Side: ['',Validators.required],
            update_value: [''],
            update_field: [''],
            OrderId: ['']

        });

    }

    ngOnInit(){}


    onOrderEditSubmit(){

        this.updatePosition();
    }


    updatePosition() {

        this.dataService.createPosition(this.formGroupEditOrder.value)
            .subscribe((positionUpdated) => {
                    this.updateData= JSON.stringify(positionUpdated);
                    console.log(this. updateData);
                },
                error => {

                    this.notificationService.printErrorMessage('Failed to updated Position'+ error);
                });

    }


}