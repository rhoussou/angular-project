import { Component, OnInit, ViewChild, AfterViewInit,Input, Output,
    trigger,
    state,
    style,
    animate,
    transition } from '@angular/core';

import { DataService } from '../shared/services/data.service';
import { NotificationService } from '../shared/utils/notification.service';
import {OrderEditComponent} from "./order-edit.component";

@Component({
    moduleId: module.id,
    selector: 'app-order',
    templateUrl: 'order-list.component.html',

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
export class OrderListComponent implements OnInit ,AfterViewInit{


    @ViewChild(OrderEditComponent)
    private formComponent: OrderEditComponent;

    positions: any[];


    constructor(
        private dataService: DataService,
        private notificationService: NotificationService) {this.positions=[] ;}

    ngAfterViewInit() {}

    ngOnInit(){

        this.dataService.
        getPositions().
        subscribe((data)=> {
            
                if(data.error) this.positions.push(data);
                else this.positions = data;
          },
          error => {
            this.notificationService.printErrorMessage('Failed to load orders. ' + error);
          });

    }

    onEdit(position:any) {

        alert(position.Order.Symbol);
        this.formComponent.formGroupEditOrder.patchValue({

            Symbol: position.Order.Symbol,
            OrderQty: position.Order.OrderQty,
            OrderId: position.Order.OrderId,
            Side: position.Order.Side

        })


    }

}