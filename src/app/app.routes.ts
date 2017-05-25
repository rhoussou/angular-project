import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerListComponent } from './customers/customer-list.component';
import { ProductListComponent } from './products/product-list.component';
import { UserListComponent } from './users/user-list.component';
import { UserEditComponent } from './users/user-edit.component';


const appRoutes: Routes = [

    { path: 'clients', component: CustomerListComponent },
    { path: 'produits', component: ProductListComponent },
    { path: 'users', component: UserListComponent },
    { path: 'users/edit', component: UserEditComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);