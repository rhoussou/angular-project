import { Component, OnInit, ViewChild, AfterViewInit,Input, Output,EventEmitter} from '@angular/core';

import { trigger,state,style,animate, transition } from '@angular/animations';


import { DataService } from '../shared/services/data.service';
import { NotificationService } from '../shared/utils/notification.service';

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


export class CustomerListComponent implements OnInit ,AfterViewInit{


    customers: any[];


    constructor() {

        this.customers=[

            {name:'Lola',firstname:'Sampayo',email:'lola@yahoo.fr',birthdate:'2012-04-01',
            adress:{city:'Lyon',pobox:'69000', country:'France',streetType:'rue',streetNumber:'02',streetName:'lagadere'},registerdate:'2017-05-01'},

             {name:'Lola',firstname:'Sampayo',email:'lola@yahoo.fr',birthdate:'2012-04-01',country:'France',
            adress:{city:'Lyon',pobox:'69000',country:'France', streetType:'rue',streetNumber:'02',streetName:'lagadere'},registerdate:'2017-05-01'},

             {name:'Lola',firstname:'Sampayo',email:'lola@yahoo.fr',birthdate:'2012-04-01',country:'France',
            adress:{city:'Lyon',pobox:'69000', country:'France',streetType:'rue',streetNumber:'02',streetName:'lagadere'},registerdate:'2017-05-01'},

             {name:'Lola',firstname:'Sampayo',email:'lola@yahoo.fr',birthdate:'2012-04-01',country:'France',
            adress:{city:'Lyon',pobox:'69000', country:'France',streetType:'rue',streetNumber:'02',streetName:'lagadere'},registerdate:'2017-05-01'}


        ] ;
    }

    ngAfterViewInit() {}

    ngOnInit(){

       

    }

    onEdit(customer:any) {


    }

}