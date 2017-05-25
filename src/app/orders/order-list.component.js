"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var data_service_1 = require("../shared/services/data.service");
var notification_service_1 = require("../shared/utils/notification.service");
var order_edit_component_1 = require("./order-edit.component");
var OrderListComponent = (function () {
    function OrderListComponent(dataService, notificationService) {
        this.dataService = dataService;
        this.notificationService = notificationService;
        this.positions = [];
    }
    OrderListComponent.prototype.ngAfterViewInit = function () { };
    OrderListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.
            getPositions().
            subscribe(function (data) {
            if (data.error)
                _this.positions.push(data);
            else
                _this.positions = data;
        }, function (error) {
            _this.notificationService.printErrorMessage('Failed to load orders. ' + error);
        });
    };
    OrderListComponent.prototype.onEdit = function (position) {
        alert(position.Order.Symbol);
        this.formComponent.formGroupEditOrder.patchValue({
            Symbol: position.Order.Symbol,
            OrderQty: position.Order.OrderQty,
            OrderId: position.Order.OrderId,
            Side: position.Order.Side
        });
    };
    return OrderListComponent;
}());
__decorate([
    core_1.ViewChild(order_edit_component_1.OrderEditComponent),
    __metadata("design:type", order_edit_component_1.OrderEditComponent)
], OrderListComponent.prototype, "formComponent", void 0);
OrderListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app-order',
        templateUrl: 'order-list.component.html',
        animations: [
            core_1.trigger('flyInOut', [
                core_1.state('in', core_1.style({ opacity: 1, transform: 'translateX(0)' })),
                core_1.transition('void => *', [
                    core_1.style({
                        opacity: 0,
                        transform: 'translateX(-100%)'
                    }),
                    core_1.animate('0.5s ease-in')
                ]),
                core_1.transition('* => void', [
                    core_1.animate('0.2s 10 ease-out', core_1.style({
                        opacity: 0,
                        transform: 'translateX(100%)'
                    }))
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [data_service_1.DataService,
        notification_service_1.NotificationService])
], OrderListComponent);
exports.OrderListComponent = OrderListComponent;
//# sourceMappingURL=order-list.component.js.map