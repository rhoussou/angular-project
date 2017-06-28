import { Component, OnInit, ViewChild, AfterViewInit,Input, Output,EventEmitter} from '@angular/core';
import { trigger,state,style,animate, transition } from '@angular/animations';

import { ICustomer, ISchedule } from '../shared/interfaces';
import { CustomerService } from '../shared/services/customer.service';
import { NotificationService } from '../shared/utils/notification.service';



@Component({
    selector: 'customer-card',
    templateUrl: 'customer-card.component.html',
    styleUrls: ['customer-card.component.css'],
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
export class CustomerCardComponent implements OnInit {
    @Input() customer: ICustomer;
    @Output() editCustomer = new EventEmitter();
    @Output() customerCreated = new EventEmitter();

    editedcustomer: ICustomer;

    constructor(private notificationService: NotificationService,
        private customerService: CustomerService) { }

    ngOnInit() {
        this.editedcustomer = this.customer;
    }

    onEdit() {

      this.editCustomer.emit({ value: this.customer});
       
    }
    
}