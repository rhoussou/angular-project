import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerListComponent } from './customers/customer-list.component';
import { CustomerCreateComponent } from './customers/customer-create.component';

const appRoutes: Routes = [

    { path: 'clients', component: CustomerListComponent },
    { path: 'clients/create', component: CustomerCreateComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
