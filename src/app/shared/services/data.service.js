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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var DataService = (function () {
    function DataService(http) {
        this.http = http;
        this._baseUrl = 'https://api-2445581154346.apicast.io/positions';
    }
    //recuperations de la liste des orders
    DataService.prototype.getPositions = function () {
        return this.http.get(this._baseUrl + '?user_key=c3526fae1b3eaf162d3ae2b596e844e6')
            .map(function (res) {
            return res.json();
        })
            .catch(this.handleError);
    };
    DataService.prototype.createPosition = function (position) {
        var headers = new http_1.Headers();
        headers.append('Access-Control-Allow-Origin', '*');
        return this.http.post(this._baseUrl + '/', JSON.stringify(position), {
            headers: headers
        })
            .map(function (res) {
            return res.json();
        })
            .catch(this.handleError);
    };
    DataService.prototype.updatePosition = function (position) {
        return this.http.put(this._baseUrl + '/' + position.id, JSON.stringify(position))
            .map(function (res) {
            return;
        })
            .catch(this.handleError);
    };
    DataService.prototype.deletePosition = function (position) {
        return this.http.put(this._baseUrl + '/' + position.id, JSON.stringify(position))
            .map(function (res) {
            return;
        })
            .catch(this.handleError);
    };
    DataService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    return DataService;
}());
DataService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], DataService);
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map