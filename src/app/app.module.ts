import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule }  from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { PaginationModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap';

import { routing } from './app.routes';
import { CustomerService } from './shared/services/customer.service';
import { NotificationService } from './shared/utils/notification.service';
import { DateFormatPipe } from './shared/pipes/date-format.pipe';
import { ConfigService } from './shared/utils/config.service';

import { AppComponent }  from './app.component';
import { CustomerListComponent } from './customers/customer-list.component';
import { CustomerCardComponent } from './customers/customer-card.component';
import { FileUploadComponent } from './components/file-upload.component';
import { CustomerEditComponent } from './customers/customer-edit.component';
import { CustomerCreateComponent } from './customers/customer-create.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    FileUploadComponent,
    CustomerCardComponent,
    CustomerEditComponent,
    CustomerCreateComponent,
    DateFormatPipe
  ],

  imports: [
    BrowserModule,
    HttpModule,
    routing,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    PaginationModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    MultiselectDropdownModule
  ],
  providers: [
    CustomerService,
    NotificationService,
    
    ConfigService
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
