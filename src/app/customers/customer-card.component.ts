import { Component, OnInit, ViewChild, AfterViewInit,Input, Output,EventEmitter} from '@angular/core';
import { trigger,state,style,animate, transition } from '@angular/animations';

import { ICustomer, ISchedule } from '../shared/interfaces';
import { DataService } from '../shared/services/data.service';
import { ItemsService } from '../shared/utils/items.service';
import { NotificationService } from '../shared/utils/notification.service';

import { ModalDirective } from 'ngx-bootstrap';

@Component({
    selector: 'customer-card',
    templateUrl: 'customer-card.component.html',
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
    @ViewChild('childModal') public childModal: ModalDirective;
    @Input() customer: ICustomer;
    @Output() removeCustomer = new EventEmitter();
    @Output() customerCreated = new EventEmitter();

    edittedCustomer: ICustomer;
    onEdit: boolean = false;
    
    modal: any;
    items: string[] = ['item1', 'item2', 'item3'];
    selected: string;
    output: string;
    customerSchedules: ISchedule[];
    customerSchedulesLoaded: boolean = false;
    index: number = 0;
    backdropOptions = [true, false, 'static'];
    animation: boolean = true;
    keyboard: boolean = true;
    backdrop: string | boolean = true;

    constructor(private itemsService: ItemsService,
        private notificationService: NotificationService,
        private dataService: DataService) { }

    ngOnInit() {
        
        this.edittedCustomer = this.itemsService.getSerialized<ICustomer>(this.customer);
        if (this.customer.id == null)
            this.editCustomer();
    }

    editCustomer() {
        this.onEdit = !this.onEdit;
        this.edittedCustomer = this.itemsService.getSerialized<ICustomer>(this.customer);
    }

    createCustomer() {
        
    }

    updateCustomer() {
        
    }

    openRemoveModal() {
        
    }

    viewSchedules(customer: ICustomer) {
        console.log(customer);
        
        
    }

    public hideChildModal(): void {
        this.childModal.hide();
    }

    opened() {
        
        this.output = '(opened)';
    }

    isCustomerValid(): boolean {
        return false;
    }

}