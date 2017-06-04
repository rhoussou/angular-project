import { Component, OnInit, ViewChild, AfterViewInit,Input, Output,EventEmitter} from '@angular/core';
import { trigger,state,style,animate, transition } from '@angular/animations';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup ,FormBuilder,Validators  } from '@angular/forms';

import { DataService } from '../shared/services/data.service';
import { ItemsService } from '../shared/utils/items.service';
import { NotificationService } from '../shared/utils/notification.service';
import { ICustomer } from '../shared/interfaces';
import { CustomerCardComponent } from './customer-card.component';
import { ModalDirective } from 'ngx-bootstrap';
import { CustomerEditComponent } from './customer-edit.component';


@Component({
    selector: 'customers',
    templateUrl: 'customer-list.component.html'
})
export class CustomerListComponent implements OnInit {

    customers: ICustomer[];
    addingCustomer: boolean = false;
    formGroupCustomerEdit:FormGroup;

    constructor(private dataService: DataService,
        private fb:FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private itemsService: ItemsService,
        private notificationService: NotificationService
        ) {  }

    ngOnInit() {
    }

    removeCustomer(customer: any) {  
    }

    customerCreated(customer: any) {  
    }

    addCustomer() { 
       
    }

    cancelAddCustomer() {
       
    }
}