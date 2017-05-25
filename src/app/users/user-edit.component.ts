import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';



import { DataService } from '../shared/services/data.service';
import { ItemsService } from '../shared/utils/items.service';
import { NotificationService } from '../shared/utils/notification.service';
import { IUser } from '../shared/interfaces';
import { DateFormatPipe } from '../shared/pipes/date-format.pipe';

@Component({
    selector: 'app-user-edit',
    templateUrl: 'user-edit.component.html'
})
export class UserEditComponent implements OnInit {
    apiHost: string;
    id: number;
    scheduleLoaded: boolean = false;
    statuses: string[];
    types: string[];
    private sub: any;

    constructor(private route: ActivatedRoute,
        private router: Router,
        private dataService: DataService,
        private itemsService: ItemsService,
        private notificationService: NotificationService) { }

    ngOnInit() {
        
	    
    }

    loadScheduleDetails() {
        
    }

    updateUser() {
        
    }

    removeUser(attendee: IUser) {
       
    }

    back() {
        this.router.navigate(['/users']);
    }

}