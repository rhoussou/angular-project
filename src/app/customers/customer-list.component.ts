import { Component, OnInit, ViewChild, AfterViewInit,Input, Output,EventEmitter} from '@angular/core';
import { trigger,state,style,animate, transition } from '@angular/animations';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomerService } from '../shared/services/customer.service';
import { NotificationService } from '../shared/utils/notification.service';
import { ICustomer} from '../shared/interfaces';
import { CustomerCardComponent } from './customer-card.component';
import { CustomerEditComponent } from './customer-edit.component';


@Component({
    selector: 'customers',
    templateUrl: 'customer-list.component.html',
   
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
export class CustomerListComponent implements OnInit {

    customers: ICustomer[];
    public itemsPerPage: number = 4;
    public totalItems: number = 0;
    public currentPage: number = 0;

    @ViewChild(CustomerEditComponent)
    private customerEditComponent: CustomerEditComponent;
    
    constructor(private customerService: CustomerService,
        private route: ActivatedRoute,
        private router: Router,
        private notificationService: NotificationService
        ) {  }

    ngOnInit() {
         this.loadCustomers();
    }

    loadCustomers() {
        this.customerService.getCustomers(this.currentPage, this.itemsPerPage)
            .subscribe((res) => {
                this.customers = res.content;
                this.totalItems = res.totalElements;
            },
            error => {
                this.notificationService.printErrorMessage('Failed to load Customers. ' + error);
            });
    }

    pageChanged(event: any): void {
        this.currentPage = event.page-1;
        this.loadCustomers();  
    };

    editCustomer(customer:any){
        this.customerEditComponent.OnEdit(customer);
    }

    
}