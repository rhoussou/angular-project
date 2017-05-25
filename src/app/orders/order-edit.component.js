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
var forms_1 = require("@angular/forms");
var data_service_1 = require("../shared/services/data.service");
var notification_service_1 = require("../shared/utils/notification.service");
var OrderEditComponent = (function () {
    function OrderEditComponent(fb, dataService, notificationService) {
        this.fb = fb;
        this.dataService = dataService;
        this.notificationService = notificationService;
        this.formGroupEditOrder = this.fb.group({
            user_key: ['c3526fae1b3eaf162d3ae2b596e844e6'],
            Symbol: ['', forms_1.Validators.required],
            OrderQty: ['', forms_1.Validators.required],
            Side: ['', forms_1.Validators.required],
            update_value: [''],
            update_field: [''],
            OrderId: ['']
        });
    }
    OrderEditComponent.prototype.ngOnInit = function () { };
    OrderEditComponent.prototype.onOrderEditSubmit = function () {
        this.updatePosition();
    };
    OrderEditComponent.prototype.updatePosition = function () {
        var _this = this;
        this.dataService.createPosition(this.formGroupEditOrder.value)
            .subscribe(function (positionUpdated) {
            _this.updateData = JSON.stringify(positionUpdated);
            console.log(_this.updateData);
        }, function (error) {
            _this.notificationService.printErrorMessage('Failed to updated Position' + error);
        });
    };
    return OrderEditComponent;
}());
OrderEditComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'order-edit-form',
        templateUrl: 'order-edit.component.html',
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        data_service_1.DataService,
        notification_service_1.NotificationService])
], OrderEditComponent);
exports.OrderEditComponent = OrderEditComponent;
//# sourceMappingURL=order-edit.component.js.map