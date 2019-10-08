(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["billing-billing-module"],{

/***/ "./src/app/admin/billing/billing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/admin/billing/billing.module.ts ***!
  \*************************************************/
/*! exports provided: BillingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillingModule", function() { return BillingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/admin/billing/landing/landing.component.ts");
/* harmony import */ var _billinglists_billinglists_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./billinglists/billinglists.component */ "./src/app/admin/billing/billinglists/billinglists.component.ts");
/* harmony import */ var _billingdetail_billingdetail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./billingdetail/billingdetail.component */ "./src/app/admin/billing/billingdetail/billingdetail.component.ts");
/* harmony import */ var _billing_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./billing.routing */ "./src/app/admin/billing/billing.routing.ts");
/* harmony import */ var _share_share_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../share/share.module */ "./src/app/share/share.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var BillingModule = /** @class */ (function () {
    function BillingModule() {
    }
    BillingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _billing_routing__WEBPACK_IMPORTED_MODULE_5__["BillingRouting"],
                _share_share_module__WEBPACK_IMPORTED_MODULE_6__["ShareModule"]
            ],
            declarations: [_landing_landing_component__WEBPACK_IMPORTED_MODULE_2__["LandingComponent"], _billinglists_billinglists_component__WEBPACK_IMPORTED_MODULE_3__["BillinglistsComponent"], _billingdetail_billingdetail_component__WEBPACK_IMPORTED_MODULE_4__["BillingdetailComponent"]]
        })
    ], BillingModule);
    return BillingModule;
}());



/***/ }),

/***/ "./src/app/admin/billing/billing.routing.ts":
/*!**************************************************!*\
  !*** ./src/app/admin/billing/billing.routing.ts ***!
  \**************************************************/
/*! exports provided: BillingRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillingRouting", function() { return BillingRouting; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/admin/billing/landing/landing.component.ts");
/* harmony import */ var _billinglists_billinglists_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./billinglists/billinglists.component */ "./src/app/admin/billing/billinglists/billinglists.component.ts");
/* harmony import */ var _billingdetail_billingdetail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./billingdetail/billingdetail.component */ "./src/app/admin/billing/billingdetail/billingdetail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//  canActivate: [AuthGuardService],
var routes = [
    {
        path: '', component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_2__["LandingComponent"],
        children: [
            { path: 'list', component: _billinglists_billinglists_component__WEBPACK_IMPORTED_MODULE_3__["BillinglistsComponent"] },
            { path: '', component: _billinglists_billinglists_component__WEBPACK_IMPORTED_MODULE_3__["BillinglistsComponent"] },
            { path: 'detail/:id', component: _billingdetail_billingdetail_component__WEBPACK_IMPORTED_MODULE_4__["BillingdetailComponent"] },
        ]
    }
];
var BillingRouting = /** @class */ (function () {
    function BillingRouting() {
    }
    BillingRouting = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)]
        })
    ], BillingRouting);
    return BillingRouting;
}());



/***/ }),

/***/ "./src/app/admin/billing/billingdetail/billingdetail.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/admin/billing/billingdetail/billingdetail.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumb-base col-md-12 col-sm-12 col-lg-12 col-xs-12\">\n    <ul class=\"breadcrumb\">\n        <li><a routerLink=\"/admin/billing\">Billing List</a></li>\n        <li><a> {{datasource[0]?.billto?.companyname}}  </a></li>\n    </ul>\n</div>\n<div style=\"margin: 0; padding: 0\" class=\"col-md-12 col-sm-12 col-xs-12 col-lg-12 billhist-base ivr-base nopadd\">\n    <div class=\"col-md-12 col-sm-12 col-xs-12 col-lg-12 billhist-generatebill text-right nopadd\">\n        <h2 class=\"main-title\">Billing </h2>\n    </div>\n    <div class=\"col-md-12 col-sm-12 col-xs-12 col-lg-12 searchbar-container nopadd\">\n        <input type=\"text\" (input)=\"da.filterGlobal($event.target.value, 'contains')\" class=\"searchbar\" placeholder=\"Search\">\n        <div class=\"col-md-12 col-sm-12 col-xs-12 col-lg-12 billhist-generatebill text-right nopadd\">\n            <a (click)=\"generatebillDisplay = true\" class=\"themebtn1\"><span class=\"plus-icon-bill\">+</span>Generate bills</a>\n        </div>\n        <div class=\"col-md-12 col-sm-12 col-xs-12 col-lg-12 billhist-generatebill text-right nopadd\">\n\n            <div class=\"theme-table\">\n\n                <p-table class=\"table table-striped\" #da [columns]=\"cols\" [value]=\"datasource\" [paginator]=\"true\" [rows]=\"10\" [totalRecords]=\"totalRecords\">\n                    <ng-template pTemplate=\"header\" let-columns>\n                        <tr>\n                            <th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\">\n                                {{col.header}}\n                            </th>\n\n                            <th>\n                                Action\n                            </th>\n                        </tr>\n                    </ng-template>\n                    <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n                        <tr>\n                            <td>{{rowData.createdAt | date}}</td>\n                            <td>{{rowData.billId}}</td>\n                            <td>$ {{rowData.total}}</td>\n                            <td [class]=\"rowData.paymentstatus\">{{rowData.paymentstatus}}</td>\n\n\n                            <td>\n                                <p>\n                                    <a (click)=\"viewbilling(rowData)\" class=\"custom-black\">view</a>\n                                    <a *ngIf=\"rowData.paymentstatus == 'unpaid'\" (click)=\"remind(rowData)\" class=\"custom-red\">Remind({{rowData.remind}})</a>\n                                    <!-- <a *ngIf=\"rowData.paymentstatus == 'paid'\" class=\"custom-red\">Download</a> -->\n                                </p>\n                            </td>\n                        </tr>\n                    </ng-template>\n                </p-table>\n\n\n            </div>\n        </div>\n    </div>\n\n</div>\n\n<app-generatebills [data]=\"selectedbill\" (generatebillmodaldispay)=\"generatebillmodaldispay($event)\" *ngIf=\"generatebillDisplay\"></app-generatebills>"

/***/ }),

/***/ "./src/app/admin/billing/billingdetail/billingdetail.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/admin/billing/billingdetail/billingdetail.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".billhist-generatebill a.themebtn1 {\n  margin: 30px 0 0 0; }\n"

/***/ }),

/***/ "./src/app/admin/billing/billingdetail/billingdetail.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/admin/billing/billingdetail/billingdetail.component.ts ***!
  \************************************************************************/
/*! exports provided: BillingdetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillingdetailComponent", function() { return BillingdetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../providers */ "./src/app/providers/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants */ "./src/app/constants.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BillingdetailComponent = /** @class */ (function () {
    function BillingdetailComponent(http, route, shareService, confirmationService, messageService) {
        this.http = http;
        this.route = route;
        this.shareService = shareService;
        this.confirmationService = confirmationService;
        this.messageService = messageService;
        this.activepagination = 0;
    }
    BillingdetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.billId = params['id'];
            _this.shareService.getData(_constants__WEBPACK_IMPORTED_MODULE_3__["constants"].bills + _this.billId).subscribe(function (res) {
                _this.datasource = res['bills'];
                _this.totalRecords = _this.datasource.length;
            });
        });
        this.cols = [
            { field: 'createdAt', header: 'Bill Date' },
            { field: 'billId', header: 'Bill No' },
            { field: 'total', header: 'Amount' },
            { field: 'paymentstatus', header: 'Payment Status' },
        ];
        sessionStorage.getItem('activeivrpagination') ? this.activepagination = JSON.parse(sessionStorage.getItem('activeivrpagination')) : null;
    };
    BillingdetailComponent.prototype.pagechange = function (ev) {
        sessionStorage.setItem('activeivrpagination', ev.first);
    };
    BillingdetailComponent.prototype.generatebillmodaldispay = function (ev) {
        this.generatebillDisplay = ev.value;
        this.selectedbill = null;
    };
    BillingdetailComponent.prototype.remind = function (data) {
        var _this = this;
        data.remind++;
        this.shareService.update(_constants__WEBPACK_IMPORTED_MODULE_3__["constants"].bills + data._id, data).subscribe(function (res) {
            _this.messageService.add({ severity: 'sucess', summary: 'Sucess Message', detail: 'Reminder to the customer sent sucessfully' });
        }, function (err) {
            _this.messageService.add({ severity: 'error', summary: 'Error Message', detail: err.message });
        });
        this.shareService.postData(_constants__WEBPACK_IMPORTED_MODULE_3__["constants"].bills + 'sendreminder', data).subscribe(function (res) {
        }, function (err) {
            _this.messageService.add({ severity: 'error', summary: 'Error Message', detail: err.message });
        });
    };
    BillingdetailComponent.prototype.viewbilling = function (data) {
        this.selectedbill = data;
        this.selectedbill ? this.generatebillDisplay = true : null;
    };
    BillingdetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-billingdetail',
            template: __webpack_require__(/*! ./billingdetail.component.html */ "./src/app/admin/billing/billingdetail/billingdetail.component.html"),
            styles: [__webpack_require__(/*! ./billingdetail.component.scss */ "./src/app/admin/billing/billingdetail/billingdetail.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _providers__WEBPACK_IMPORTED_MODULE_2__["ShareService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_4__["ConfirmationService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"]])
    ], BillingdetailComponent);
    return BillingdetailComponent;
}());



/***/ }),

/***/ "./src/app/admin/billing/billinglists/billinglists.component.html":
/*!************************************************************************!*\
  !*** ./src/app/admin/billing/billinglists/billinglists.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12    billhist-base ivr-base nopadd\">\n    <div class=\"col-md-12    billhist-generatebill text-right nopadd\">\n        <h2 class=\"main-title\">Billing List</h2>\n    </div>\n    <div class=\"col-md-12    searchbar-container nopadd\">\n        <div class=\"col-md-12    billhist-generatebill text-right nopadd\">\n            <a (click)=\"generatebillDisplay = true\" class=\"themebtn1\"><span class=\"plus-icon-bill\">+</span>Generate bills</a>\n        </div>\n\n        <input type=\"text\" (input)=\"dt.filterGlobal($event.target.value, 'contains')\" class=\"searchbar\" placeholder=\"Search\">\n\n        <div class=\"col-md-12 billhist-generatebill text-right nopadd\">\n\n            <div class=\"theme-table\">\n\n                <p-table [first]=\"activepagination\" (onPage)=\"pagechange($event)\" class=\"table table-striped\" #dt [columns]=\"cols\" [value]=\"datasource\" [paginator]=\"true\" [rows]=\"10\" [totalRecords]=\"totalRecords\">\n                    <ng-template pTemplate=\"header\" let-columns>\n                        <tr>\n                            <th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\">{{col.header}} </th>\n                            <th>Action</th>\n                        </tr>\n                    </ng-template>\n                    <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n                        <tr>\n                            <td>{{rowData.billto.companyname}}</td>\n                            <td>{{rowData.billto.name}}</td>\n                            <td>\n                                <p> <a routerLink=\"/admin/billing/detail/{{rowData.billto._id}}\" class=\"custom-red\">View Details</a></p>\n                            </td>\n                        </tr>\n                    </ng-template>\n                </p-table>\n            </div>\n        </div>\n    </div>\n</div>\n\n<app-generatebills (generatebillmodaldispay)=\"generatebillmodaldispay($event)\" *ngIf=\"generatebillDisplay\"></app-generatebills>"

/***/ }),

/***/ "./src/app/admin/billing/billinglists/billinglists.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/admin/billing/billinglists/billinglists.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".billhist-generatebill a.themebtn1 {\n  margin: 0 0 30px 0; }\n"

/***/ }),

/***/ "./src/app/admin/billing/billinglists/billinglists.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/admin/billing/billinglists/billinglists.component.ts ***!
  \**********************************************************************/
/*! exports provided: BillinglistsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillinglistsComponent", function() { return BillinglistsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../providers */ "./src/app/providers/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants */ "./src/app/constants.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BillinglistsComponent = /** @class */ (function () {
    function BillinglistsComponent(http, shareService, confirmationService, messageService) {
        this.http = http;
        this.shareService = shareService;
        this.confirmationService = confirmationService;
        this.messageService = messageService;
        this.activepagination = 0;
    }
    BillinglistsComponent.prototype.ngOnInit = function () {
        this.getdata();
        this.cols = [
            { field: 'billto.companyname', header: 'Company Name' },
            { field: 'billto.name', header: 'Account Holder' }
        ];
        sessionStorage.getItem('activeivrpagination') ? this.activepagination = JSON.parse(sessionStorage.getItem('activeivrpagination')) : null;
    };
    BillinglistsComponent.prototype.pagechange = function (ev) {
        sessionStorage.setItem('activeivrpagination', ev.first);
    };
    BillinglistsComponent.prototype.generatebillmodaldispay = function (ev) {
        var _this = this;
        this.generatebillDisplay = ev.value;
        setTimeout(function () {
            _this.getdata();
        }, 1000);
    };
    BillinglistsComponent.prototype.getdata = function () {
        var _this = this;
        this.shareService.getData(_constants__WEBPACK_IMPORTED_MODULE_3__["constants"].bills).subscribe(function (res) {
            _this.datasource = res['bills'];
            _this.totalRecords = _this.datasource.length;
        });
    };
    BillinglistsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-billinglists',
            template: __webpack_require__(/*! ./billinglists.component.html */ "./src/app/admin/billing/billinglists/billinglists.component.html"),
            styles: [__webpack_require__(/*! ./billinglists.component.scss */ "./src/app/admin/billing/billinglists/billinglists.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _providers__WEBPACK_IMPORTED_MODULE_2__["ShareService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_4__["ConfirmationService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"]])
    ], BillinglistsComponent);
    return BillinglistsComponent;
}());



/***/ }),

/***/ "./src/app/admin/billing/landing/landing.component.html":
/*!**************************************************************!*\
  !*** ./src/app/admin/billing/landing/landing.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/admin/billing/landing/landing.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/admin/billing/landing/landing.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/billing/landing/landing.component.ts":
/*!************************************************************!*\
  !*** ./src/app/admin/billing/landing/landing.component.ts ***!
  \************************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LandingComponent = /** @class */ (function () {
    function LandingComponent() {
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    LandingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! ./landing.component.html */ "./src/app/admin/billing/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.scss */ "./src/app/admin/billing/landing/landing.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ })

}]);
//# sourceMappingURL=billing-billing-module.js.map