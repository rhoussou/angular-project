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
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var OrderCreateComponent = (function () {
    function OrderCreateComponent(fb, route, router, dataService, notificationService) {
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.dataService = dataService;
        this.notificationService = notificationService;
        this.formGroupAddOrder = this.fb.group({
            user_key: ['c3526fae1b3eaf162d3ae2b596e844e6'],
            Symbol: ['', forms_1.Validators.required],
            OrderQty: ['', forms_1.Validators.required],
            Side: ['', forms_1.Validators.required],
            type: [''],
            Limit: [''],
            Stop: ['']
        });
    }
    OrderCreateComponent.prototype.ngOnInit = function () { };
    OrderCreateComponent.prototype.onOrderCreateSubmit = function () {
        this.createPosition();
        this.back();
    };
    OrderCreateComponent.prototype.back = function () {
        this.router.navigate(['/orders']);
    };
    OrderCreateComponent.prototype.createPosition = function () {
        var _this = this;
        this.dataService.createPosition(this.formGroupAddOrder.value)
            .subscribe(function (userCreated) {
            _this.postData = JSON.stringify(userCreated);
            console.log(_this.postData);
        }, function (error) {
            _this.notificationService.printErrorMessage('Failed to created Position' + error);
        });
    };
    return OrderCreateComponent;
}());
OrderCreateComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'order-create-form',
        templateUrl: 'order-create.component.html',
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
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        router_1.ActivatedRoute,
        router_1.Router,
        data_service_1.DataService,
        notification_service_1.NotificationService])
], OrderCreateComponent);
exports.OrderCreateComponent = OrderCreateComponent;
//# sourceMappingURL=order-create.component.js.map