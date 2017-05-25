import { Component, OnInit, ViewChild, AfterViewInit,Input, Output,EventEmitter} from '@angular/core';
import { trigger,state,style,animate, transition } from '@angular/animations';

import { IUser, ISchedule } from '../shared/interfaces';
import { DataService } from '../shared/services/data.service';
import { ItemsService } from '../shared/utils/items.service';
import { NotificationService } from '../shared/utils/notification.service';

import { ModalDirective } from 'ng2-bootstrap';

@Component({
    moduleId: module.id,
    selector: 'user-card',
    templateUrl: 'user-card.component.html',
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
export class UserCardComponent implements OnInit {
    @ViewChild('childModal') public childModal: ModalDirective;
    @Input() user: IUser;
    @Output() removeUser = new EventEmitter();
    @Output() userCreated = new EventEmitter();

    edittedUser: IUser;
    onEdit: boolean = false;
    apiHost: string;
    // Modal properties
    @ViewChild('modal')
    modal: any;
    items: string[] = ['item1', 'item2', 'item3'];
    selected: string;
    output: string;
    userSchedules: ISchedule[];
    userSchedulesLoaded: boolean = false;
    index: number = 0;
    backdropOptions = [true, false, 'static'];
    animation: boolean = true;
    keyboard: boolean = true;
    backdrop: string | boolean = true;

    constructor(private itemsService: ItemsService,
        private notificationService: NotificationService,
        private dataService: DataService) { }

    ngOnInit() {
        
        this.edittedUser = this.itemsService.getSerialized<IUser>(this.user);
        if (this.user.id < 0)
            this.editUser();
    }

    editUser() {
        this.onEdit = !this.onEdit;
        this.edittedUser = this.itemsService.getSerialized<IUser>(this.user);
    }

    createUser() {
        
    }

    updateUser() {
        
    }

    openRemoveModal() {
        this.notificationService.openConfirmationDialog('Are you sure you want to remove '
            + this.user.name + '?',
            () => {
               
            });
    }

    viewSchedules(user: IUser) {
        console.log(user);
        
        
    }

    public hideChildModal(): void {
        this.childModal.hide();
    }

    opened() {
        
        this.output = '(opened)';
    }

    isUserValid(): boolean {
        return !(this.edittedUser.name.trim() === "")
            && !(this.edittedUser.profession.trim() === "");
    }

}