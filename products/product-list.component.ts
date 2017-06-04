import { Component, OnInit, ViewChild, AfterViewInit,Input, Output,EventEmitter} from '@angular/core';
import { trigger,state,style,animate, transition } from '@angular/animations';

import { IProduct, ISchedule } from '../shared/interfaces';
import { DataService } from '../shared/services/data.service';
import { ItemsService } from '../shared/utils/items.service';
import { NotificationService } from '../shared/utils/notification.service';
import { ProductCardComponent } from './product-card.component';

@Component({
    selector: 'products',
    templateUrl: 'product-list.component.html'
})
export class ProductListComponent implements OnInit {

    products: IProduct[];
    addingProduct: boolean = false;

    constructor(private dataService: DataService,
        private itemsService: ItemsService,
        private notificationService: NotificationService) { }

    ngOnInit() {

        this.products=[

            {id: 1,name:'produit1',reference:'abc',stock:2,expiredate: new Date('2012-04-01'), category:[{id:1,name:'aliment'}] ,price:34,avatar:'prod.jpg'}
        ] ;
        
    }

   removeProduct(product: any) {
        var _product: IProduct = this.itemsService.getSerialized<IProduct>(product.value);
        this.itemsService.removeItemFromArray<IProduct>(this.products, _product);
        // inform product
        this.notificationService.printSuccessMessage(_product.name + ' has been removed');
    }

    productCreated(product: any) {
        var _product: IProduct = this.itemsService.getSerialized<IProduct>(product.value);
        this.addingProduct = false;
        // inform product
        this.notificationService.printSuccessMessage(_product.name + ' has been created');
        console.log(_product.id);
        this.itemsService.setItem<IProduct>(this.products, (u) => u.id == -1, _product);
        // todo fix product with id:-1
    }

    addProduct() {
        this.addingProduct = true;
        var newProduct = { id: -1, name: '', avatar: 'avatar_05.png', profession: '', schedulesCreated: 0 };
        this.itemsService.addItemToStart<IProduct>(this.products, newProduct);
        //this.products.splice(0, 0, newProduct);
    }

    cancelAddProduct() {
        this.addingProduct = false;
        this.itemsService.removeItems<IProduct>(this.products, x => x.id < 0);
    }
}