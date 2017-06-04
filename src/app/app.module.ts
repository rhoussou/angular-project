import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule }  from '@angular/forms';
import { HttpModule } from '@angular/http';

import {BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { PaginationModule } from 'ngx-bootstrap';
import { DatepickerModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap';

import { routing } from './app.routes';
import { DataService } from './shared/services/data.service';
import { NotificationService } from './shared/utils/notification.service';
import { ItemsService } from './shared/utils/items.service';
import { DateFormatPipe } from './shared/pipes/date-format.pipe';

import { AppComponent }  from './app.component';
import { CustomerListComponent } from './customers/customer-list.component';
import { CustomerCardComponent } from './customers/customer-card.component';
import { CustomerCreateComponent } from './customers/customer-create.component';
import { CustomerEditComponent } from './customers/customer-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    CustomerEditComponent,
    CustomerCreateComponent,
    CustomerCardComponent,
    DateFormatPipe
  ],

  imports: [
    BrowserModule,
    HttpModule,
    routing,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    PaginationModule.forRoot(),
    DatepickerModule.forRoot(),
    ReactiveFormsModule,
    MultiselectDropdownModule,
  ],
  providers: [
    DataService,
    NotificationService,
    ItemsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
