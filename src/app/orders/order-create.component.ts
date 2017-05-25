import { Component, OnInit, ViewChild, AfterViewInit,Input, Output,
    trigger,
    state,
    style,
    animate,
    transition } from '@angular/core';

import { DataService } from '../shared/services/data.service';
import { NotificationService } from '../shared/utils/notification.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup ,FormBuilder,Validators  } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'order-create-form',
    templateUrl: 'order-create.component.html',

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
export class OrderCreateComponent implements OnInit {

    formGroupAddOrder:FormGroup;

    postData:string;


    constructor(private fb:FormBuilder,
                private route: ActivatedRoute,
                private router: Router,
                private dataService: DataService,
                private notificationService: NotificationService){

        this.formGroupAddOrder = this.fb.group({

            user_key: ['c3526fae1b3eaf162d3ae2b596e844e6'],
            Symbol: ['',Validators.required],
            OrderQty:['',Validators.required],
            Side: ['',Validators.required],
            type: [''],
            Limit: [''],
            Stop: ['']

        });

    }

    ngOnInit(){}

    onOrderCreateSubmit(){
        this.createPosition();
        this.back();
        
    }

    back() {
        this.router.navigate(['/orders']);
    }

    createPosition() {


        this.dataService.createPosition(this.formGroupAddOrder.value)
            .subscribe((userCreated) => {
                    this.postData= JSON.stringify(userCreated);
                    console.log(this.postData);
                },
                error => {

                    this.notificationService.printErrorMessage('Failed to created Position'+ error);
                });

    }




}