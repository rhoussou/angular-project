import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule }  from '@angular/forms';
import { HttpModule } from '@angular/http';

import {BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import {Ng2PaginationModule} from 'ng2-pagination';
import { Ng2BootstrapModule } from 'ng2-bootstrap';
import { PaginationModule } from 'ng2-bootstrap';
import { DatepickerModule } from 'ng2-bootstrap';
import { ModalModule } from 'ng2-bootstrap';
import { ProgressbarModule } from 'ng2-bootstrap';
import { SlimLoadingBarService, SlimLoadingBarComponent } from 'ng2-slim-loading-bar';
import { TimepickerModule } from 'ng2-bootstrap';

import { routing } from './app.routes';

import { DataService } from './shared/services/data.service';
import { NotificationService } from './shared/utils/notification.service';
import { ItemsService } from './shared/utils/items.service';
import { DateFormatPipe } from './shared/pipes/date-format.pipe';

import { AppComponent }  from './app.component';
import { CustomerListComponent } from './customers/customer-list.component';
import { ProductCardComponent } from './products/product-card.component';
import { ProductListComponent } from './products/product-list.component';
import { UserCardComponent } from './users/user-card.component';
import { UserListComponent } from './users/user-list.component';
import {UserEditComponent } from './users/user-edit.component';





@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    ProductCardComponent,
    ProductListComponent,
    UserCardComponent,
    UserListComponent,
    UserEditComponent,
    DateFormatPipe
  ],

  imports: [
    BrowserModule,
    HttpModule,
    routing,
    BrowserAnimationsModule,

    Ng2BootstrapModule,
    ModalModule.forRoot(),
    ProgressbarModule.forRoot(),
    PaginationModule.forRoot(),
    routing,
    TimepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    ReactiveFormsModule,
    Ng2PaginationModule,
    MultiselectDropdownModule


  ],
  providers: [
    DataService,
    NotificationService,
    ItemsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
