import { Component, OnInit, ViewChild, AfterViewInit,Input, Output,EventEmitter} from '@angular/core';
import { trigger,state,style,animate, transition } from '@angular/animations';
import { Router, ActivatedRoute } from '@angular/router';

import { DataService } from '../shared/services/data.service';
import { ItemsService } from '../shared/utils/items.service';
import { NotificationService } from '../shared/utils/notification.service';
import { IUser } from '../shared/interfaces';
import { UserCardComponent } from './user-card.component';

@Component({
    selector: 'users',
    templateUrl: 'user-list.component.html'
})
export class UserListComponent implements OnInit {

    users: IUser[];
    addingUser: boolean = false;

    constructor(private dataService: DataService,
        private route: ActivatedRoute,
        private router: Router,
        private itemsService: ItemsService,
        private notificationService: NotificationService) { }

    ngOnInit() {

        this.users=[

            {id: 1, name:'Lola',firstname:'Sampayo',email:'lola@yahoo.fr',birthdate:'2012-04-01',
            adress:{city:'Lyon',pobox:'69000', country:'France',streetType:'rue',
            streetNumber: 23,streetName:'lagadere'},registerdate:'2017-05-01',
            profession:'vendeur',avatar:'user.jpg'},

             {id: 2, name:'Lola',firstname:'Sampayo',email:'lola@yahoo.fr',birthdate:'2012-04-01',
            adress:{city:'Lyon',pobox:'69000', country:'France',streetType:'rue',
            streetNumber:12 ,streetName:'lagadere'},registerdate:'2017-05-01',
            profession:'vendeur', avatar:'user.jpg'}

        ] ;
 
    }

    removeUser(user: any) {
        var _user: IUser = this.itemsService.getSerialized<IUser>(user.value);
        this.itemsService.removeItemFromArray<IUser>(this.users, _user);
        // inform user
        this.notificationService.printSuccessMessage(_user.name + ' has been removed');
    }

    userCreated(user: any) {
        var _user: IUser = this.itemsService.getSerialized<IUser>(user.value);
        this.addingUser = false;
        // inform user
        this.notificationService.printSuccessMessage(_user.name + ' has been created');
        console.log(_user.id);
        this.itemsService.setItem<IUser>(this.users, (u) => u.id == -1, _user);
        // todo fix user with id:-1
    }

    addUser() {
        this.addingUser = true;
        //var newUser = { id: -1, name: '', avatar: 'avatar_05.png', profession: '', schedulesCreated: 0 };
        //this.itemsService.addItemToStart<IUser>(this.users, newUser);
        //this.users.splice(0, 0, newUser);
        this.router.navigate(['users/edit']);
    }

    cancelAddUser() {
        this.addingUser = false;
        this.itemsService.removeItems<IUser>(this.users, x => x.id < 0);
    }
}