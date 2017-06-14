import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerListComponent } from './customers/customer-list.component';
import { CustomerEditComponent } from './customers/customer-edit.component';
import { CustomerCreateComponent } from './customers/customer-create.component';

const appRoutes: Routes = [

    { path: 'customers', component: CustomerListComponent },
    { path: 'customers/edit', component: CustomerEditComponent },
    { path: 'customers/create', component: CustomerCreateComponent }
    
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
