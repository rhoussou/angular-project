import { Component, OnInit, ViewChild, AfterViewInit,Input, Output,EventEmitter} from '@angular/core';
import { trigger,state,style,animate, transition } from '@angular/animations';

import { IProduct, ISchedule } from '../shared/interfaces';
import { DataService } from '../shared/services/data.service';
import { ItemsService } from '../shared/utils/items.service';
import { NotificationService } from '../shared/utils/notification.service';
import { ModalDirective } from 'ng2-bootstrap';
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';

@Component({
    selector: 'product-card',
    templateUrl: 'product-card.component.html',
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
export class ProductCardComponent implements OnInit {
    @ViewChild('childModal') public childModal: ModalDirective;
    @Input() product: IProduct;
    @Output() removeProduct = new EventEmitter();
    @Output() productCreated = new EventEmitter();

    edittedProduct: IProduct;
    onEdit: boolean = false;
    apiHost: string;
    // Modal properties
    @ViewChild('modal')
    modal: any;
    items: string[] = ['item1', 'item2', 'item3'];
    selected: string;
    output: string;
    productSchedules: ISchedule[];
    productSchedulesLoaded: boolean = false;
    index: number = 0;
    backdropOptions = [true, false, 'static'];
    animation: boolean = true;
    keyboard: boolean = true;
    backdrop: string | boolean = true;
    myOptions: IMultiSelectOption[];

    constructor(private itemsService: ItemsService,
        private notificationService: NotificationService,
        private dataService: DataService) { }

    ngOnInit() {

       this.myOptions = [
            { id: 1, name: 'Option 1' },
            { id: 2, name: 'Option 2' }
        ];
        
        this.edittedProduct = this.itemsService.getSerialized<IProduct>(this.product);
        if (this.product.id < 0)
            this.editProduct();
    }

    editProduct() {
        this.onEdit = !this.onEdit;
    }

    createProduct() {
        
    }

    updateProduct() {
        
    }

    openRemoveModal() {
        this.notificationService.openConfirmationDialog('Are you sure you want to remove '
            + this.product.name + '?',
            () => {
               
            });
    }

    viewSchedules(product: IProduct) {
        console.log(product);
        
        
    }

    public hideChildModal(): void {
        this.childModal.hide();
    }

    opened() {
        
        this.output = '(opened)';
    }

    isProductValid(): boolean {
        return !(this.edittedProduct.name.trim() === "")
            && !(this.edittedProduct.stock == null);
    }

}