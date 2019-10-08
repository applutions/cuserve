(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./src/app/cuserve/dashboard/account/account.component.html":
/*!******************************************************************!*\
  !*** ./src/app/cuserve/dashboard/account/account.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 col-sm-12 col-lg-12 col-xs-12 section-base\">\n    <div class=\"container\">\n        <div class=\"section-inner\">\n            <h2 class=\"main-title\">My Account</h2>\n            <app-account></app-account>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/cuserve/dashboard/account/account.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/cuserve/dashboard/account/account.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".section-inner {\n  margin: 0 -30px; }\n\nh2.main-title {\n  margin: 54px 0 0 0px; }\n"

/***/ }),

/***/ "./src/app/cuserve/dashboard/account/account.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/cuserve/dashboard/account/account.component.ts ***!
  \****************************************************************/
/*! exports provided: UserAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAccountComponent", function() { return UserAccountComponent; });
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

var UserAccountComponent = /** @class */ (function () {
    function UserAccountComponent() {
    }
    UserAccountComponent.prototype.ngOnInit = function () {
    };
    UserAccountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'user-account',
            template: __webpack_require__(/*! ./account.component.html */ "./src/app/cuserve/dashboard/account/account.component.html"),
            styles: [__webpack_require__(/*! ./account.component.scss */ "./src/app/cuserve/dashboard/account/account.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UserAccountComponent);
    return UserAccountComponent;
}());



/***/ }),

/***/ "./src/app/cuserve/dashboard/billing/billing.component.html":
/*!******************************************************************!*\
  !*** ./src/app/cuserve/dashboard/billing/billing.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 col-sm-12 col-lg-12 col-xs-12 section-base\">\n    <div class=\"container\">\n        <div class=\"section-inner\">\n            <h2 class=\"main-title\">Billing Info</h2>\n            <app-billing></app-billing>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/cuserve/dashboard/billing/billing.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/cuserve/dashboard/billing/billing.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".section-inner {\n  margin: 0 -30px; }\n\nh2.main-title {\n  margin: 54px 0 0 0px; }\n"

/***/ }),

/***/ "./src/app/cuserve/dashboard/billing/billing.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/cuserve/dashboard/billing/billing.component.ts ***!
  \****************************************************************/
/*! exports provided: UserBillingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserBillingComponent", function() { return UserBillingComponent; });
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

var UserBillingComponent = /** @class */ (function () {
    function UserBillingComponent() {
    }
    UserBillingComponent.prototype.ngOnInit = function () {
    };
    UserBillingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'user-billing',
            template: __webpack_require__(/*! ./billing.component.html */ "./src/app/cuserve/dashboard/billing/billing.component.html"),
            styles: [__webpack_require__(/*! ./billing.component.scss */ "./src/app/cuserve/dashboard/billing/billing.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UserBillingComponent);
    return UserBillingComponent;
}());



/***/ }),

/***/ "./src/app/cuserve/dashboard/dashboard.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/cuserve/dashboard/dashboard.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/cuserve/dashboard/dashboard/dashboard.component.ts");
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account/account.component */ "./src/app/cuserve/dashboard/account/account.component.ts");
/* harmony import */ var _billing_billing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./billing/billing.component */ "./src/app/cuserve/dashboard/billing/billing.component.ts");
/* harmony import */ var _ivr_ivr_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ivr/ivr.component */ "./src/app/cuserve/dashboard/ivr/ivr.component.ts");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/cuserve/dashboard/landing/landing.component.ts");
/* harmony import */ var _dashboard_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard.routing */ "./src/app/cuserve/dashboard/dashboard.routing.ts");
/* harmony import */ var _share_share_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../share/share.module */ "./src/app/share/share.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _dashboard_routing__WEBPACK_IMPORTED_MODULE_7__["dashboardRouting"],
                _share_share_module__WEBPACK_IMPORTED_MODULE_8__["ShareModule"]
            ],
            declarations: [
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["UserDashboardComponent"],
                _account_account_component__WEBPACK_IMPORTED_MODULE_3__["UserAccountComponent"],
                _billing_billing_component__WEBPACK_IMPORTED_MODULE_4__["UserBillingComponent"],
                _ivr_ivr_component__WEBPACK_IMPORTED_MODULE_5__["UserIvrComponent"],
                _landing_landing_component__WEBPACK_IMPORTED_MODULE_6__["UserLandingComponent"]
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/cuserve/dashboard/dashboard.routing.ts":
/*!********************************************************!*\
  !*** ./src/app/cuserve/dashboard/dashboard.routing.ts ***!
  \********************************************************/
/*! exports provided: dashboardRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dashboardRouting", function() { return dashboardRouting; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/cuserve/dashboard/dashboard/dashboard.component.ts");
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account/account.component */ "./src/app/cuserve/dashboard/account/account.component.ts");
/* harmony import */ var _billing_billing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./billing/billing.component */ "./src/app/cuserve/dashboard/billing/billing.component.ts");
/* harmony import */ var _ivr_ivr_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ivr/ivr.component */ "./src/app/cuserve/dashboard/ivr/ivr.component.ts");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/cuserve/dashboard/landing/landing.component.ts");
/* harmony import */ var _share_createivr_createivr_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../share/createivr/createivr.component */ "./src/app/share/createivr/createivr.component.ts");
/* harmony import */ var _share_calllog_calllog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../share/calllog/calllog.component */ "./src/app/share/calllog/calllog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '', component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_6__["UserLandingComponent"],
        children: [
            { path: '', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["UserDashboardComponent"] },
            { path: 'account/:userid', component: _account_account_component__WEBPACK_IMPORTED_MODULE_3__["UserAccountComponent"] },
            { path: 'billing/:userid', component: _billing_billing_component__WEBPACK_IMPORTED_MODULE_4__["UserBillingComponent"] },
            { path: 'ivr/:userid', component: _ivr_ivr_component__WEBPACK_IMPORTED_MODULE_5__["UserIvrComponent"] },
            { path: 'editivr/:id/:userid', component: _share_createivr_createivr_component__WEBPACK_IMPORTED_MODULE_7__["CreateivrComponent"] },
            { path: 'createivr/:userid', component: _share_createivr_createivr_component__WEBPACK_IMPORTED_MODULE_7__["CreateivrComponent"] },
            { path: 'landing', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["UserDashboardComponent"] },
            { path: 'calllog/:id', component: _share_calllog_calllog_component__WEBPACK_IMPORTED_MODULE_8__["CalllogComponent"] },
        ]
    }
];
var dashboardRouting = /** @class */ (function () {
    function dashboardRouting() {
    }
    dashboardRouting = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)]
        })
    ], dashboardRouting);
    return dashboardRouting;
}());



/***/ }),

/***/ "./src/app/cuserve/dashboard/dashboard/dashboard.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/cuserve/dashboard/dashboard/dashboard.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 col-sm-12 col-lg-12 col-xs-12 section-base\">\n    <div class=\"container\">\n        <div class=\"section-inner\">\n            <h2 class=\"main-title\">Dashboard</h2>\n\n\n            <div class=\"col-md-12  company-details-base\">\n                <div class=\"col-md-12  company-details-inner\">\n                    <h3 class=\"company-title\">IVR List <a *ngIf=\"ivrlist?.length > 0 \" routerLink=\"ivr/{{userdetail._id}}\" class=\"view-container\"><span >View All</span></a></h3>\n\n                    <div class=\"table-responsive theme-table theme-withtitle\">\n                        <table class=\"table table-striped\">\n\n                            <ng-template #nolist>\n                                <p> No List Found </p>\n                            </ng-template>\n\n                            <tbody *ngIf=\"ivrlist?.length > 0; else nolist\">\n                                <tr *ngFor=\"let list of  (ivrlist | slice:ivrlist.length - 4)\">\n                                    <td>{{list.ivrname}}</td>\n                                    <td>{{list.createdAt | date}}</td>\n                                    <td>{{list.createdby.name}}</td>\n                                    <td>\n                                        <p *ngIf=\"list.status\" [ngClass]=\"{\n                                            'custom-orange':list.status === 'pending',\n                                            'custom-green':list.status === 'approved',\n                                            'custom-red':list.status === 'declined',\n                                            'custom-ash':list.status === 'draft'\n                                          }\" class=\"bold text-lead  capitalize\">{{list.status}}</p>\n\n                                    </td>\n                                    <td>\n                                        <p>\n                                            <a class=\"capitalize\" routerLink=\"editivr/{{list._id}}/{{list.createdby._id}}\" [queryParams]=\"{ previousurl: 'dashboard'}\">View</a>\n                                        </p>\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n\n            <ng-container *ngIf=\"userdetail\">\n                <div class=\"col-md-12  company-details-base\">\n                    <div class=\"col-md-12  company-details-inner\">\n                        <h4 class=\"company-title\">Company Details\n                            <a routerLink=\"account/{{userdetail._id}}\" class=\"edit-iocn\"><img src=\"assets/images/edit-icon.png\"> <span>Edit</span></a>\n                        </h4>\n                        <div class=\"col-md-12   company-details-sections nopadd\">\n                            <div class=\"col-md-5  company-details-section-inner \">\n                                <h5>COMPANY NAME</h5>\n                                <p>{{userdetail.companyname}}</p>\n                            </div>\n                            <div class=\"col-md-5  company-details-section-inner \">\n                                <h5>Email Address</h5>\n                                <p>{{userdetail.companyemail}}</p>\n                            </div>\n                        </div>\n                        <div class=\"col-md-12   company-details-sections nopadd\">\n                            <div class=\"col-md-5  company-details-section-inner \">\n                                <h5>Address</h5>\n                                <p> {{userdetail.companyaddress1}} , {{userdetail.companyaddress2}} <span *ngIf=\"userdetail.companyaddress2\"> ,</span> {{userdetail.companycity}} , {{userdetail.companycountry}}</p>\n                            </div>\n                            <div class=\"col-md-5  company-details-section-inner \">\n                                <h5>Phone Number</h5>\n                                <p> {{userdetail.companyphone}}</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-12  company-details-base\">\n                    <div class=\"col-md-12  company-details-inner\">\n                        <h4 class=\"company-title\">Account Holder’s Details\n                            <a routerLink=\"account/{{userdetail._id}}\" class=\"edit-iocn\"><img src=\"assets/images/edit-icon.png\"> <span>Edit</span></a>\n                        </h4>\n                        <div class=\"col-md-12   company-details-sections nopadd\">\n                            <div class=\"col-md-5  company-details-section-inner \">\n                                <h5>NAME</h5>\n                                <p class=\"inputmodel\">{{userdetail.name}}</p>\n                            </div>\n                            <div class=\"col-md-5  company-details-section-inner \">\n                                <h5>Email Address</h5>\n                                <p class=\"inputmodel\">{{userdetail.email}}</p>\n                            </div>\n                        </div>\n                        <div class=\"col-md-12   company-details-sections nopadd\">\n                            <div class=\"col-md-5  company-details-section-inner \">\n                                <h5>Phone Number</h5>\n                                <p class=\"inputmodel\">{{userdetail.phone}}</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </ng-container>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/cuserve/dashboard/dashboard/dashboard.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/cuserve/dashboard/dashboard/dashboard.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a.edit-iocn img {\n  margin: 0 10px 0 0; }\n\n.theme-table table tbody td {\n  padding: 17px 20px;\n  background: none;\n  border: none; }\n\n.capitalize {\n  text-transform: capitalize; }\n"

/***/ }),

/***/ "./src/app/cuserve/dashboard/dashboard/dashboard.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/cuserve/dashboard/dashboard/dashboard.component.ts ***!
  \********************************************************************/
/*! exports provided: UserDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDashboardComponent", function() { return UserDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../providers */ "./src/app/providers/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants */ "./src/app/constants.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../providers/authentication.service */ "./src/app/providers/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserDashboardComponent = /** @class */ (function () {
    function UserDashboardComponent(http, shareService, route, auth, confirmationService, messageService) {
        this.http = http;
        this.shareService = shareService;
        this.route = route;
        this.auth = auth;
        this.confirmationService = confirmationService;
        this.messageService = messageService;
    }
    UserDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userinfo = this.auth.getUser('customer');
        this.shareService.getData(_constants__WEBPACK_IMPORTED_MODULE_3__["constants"].getivr + 'getbyuser/' + this.userinfo._id).subscribe(function (res) {
            _this.ivrlist = res['ivr'];
        });
        this.shareService.getData(_constants__WEBPACK_IMPORTED_MODULE_3__["constants"].getcustomer + this.userinfo._id).subscribe(function (res) {
            _this.userdetail = res['data'][0];
        });
    };
    UserDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'user-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/cuserve/dashboard/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/cuserve/dashboard/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _providers__WEBPACK_IMPORTED_MODULE_2__["ShareService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _providers_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_4__["ConfirmationService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"]])
    ], UserDashboardComponent);
    return UserDashboardComponent;
}());



/***/ }),

/***/ "./src/app/cuserve/dashboard/ivr/ivr.component.html":
/*!**********************************************************!*\
  !*** ./src/app/cuserve/dashboard/ivr/ivr.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 col-sm-12 col-lg-12 col-xs-12 section-base\">\n    <div class=\"container\">\n        <div class=\"section-inner\">\n\n\n            <div class=\"tab-content\">\n                <div role=\"tabpanel\" class=\"tab-pane active\" id=\"user\">\n                    <div class=\"col-md-12 myaccount-base\">\n                        <h2 class=\"main-title\">My IVR</h2>\n                        <div class=\"col-md-12 myaccount-inner\">\n\n                            <div class=\"tab-content\">\n\n                                <div class=\"col-md-12 col-sm-12 col-xs-12 col-lg-12 billhist-base ivr-base nopadd\">\n                                    <div class=\"col-md-12 col-sm-12 col-xs-12 col-lg-12 ivrbutton text-right nopadd\">\n                                        <a routerLink=\"/dashboard/createivr/{{userId}}\" class=\"themebtn1\"><span class=\"plus-icon-bill\">+</span>CREATE IVR</a>\n                                    </div>\n                                    <div class=\"col-md-12 col-sm-12 col-xs-12 col-lg-12 searchbar-container nopadd\">\n                                        <input type=\"text\" (input)=\"dt.filterGlobal($event.target.value, 'contains')\" class=\"searchbar\" placeholder=\"Search\">\n\n\n                                        <div class=\"table-responsive theme-table\">\n\n                                            <p-table class=\"table table-striped\" #dt [columns]=\"cols\" [first]=\"activepagination\" (onPage)=\"pagechange($event)\" [value]=\"datasource\" [paginator]=\"true\" [rows]=\"8\" [totalRecords]=\"totalRecords\">\n                                                <ng-template pTemplate=\"header\" let-columns>\n                                                    <tr>\n                                                        <th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\"> {{col.header}}</th>\n                                                        <th>Call Log</th>\n                                                        <th> Action </th>\n                                                    </tr>\n                                                </ng-template>\n                                                <ng-template pTemplate=\"body\" let-rowData let-rowindex=\"i\" let-columns=\"columns\">\n                                                    <tr>\n                                                        <td>{{rowData.ivrname}}</td>\n                                                        <td>{{rowData.createdAt | date}}</td>\n                                                        <td>{{rowData.createdby.name}}</td>\n\n                                                        <td>\n                                                            <p *ngIf=\"rowData.status\" [ngClass]=\"{\n                                                                'custom-orange':rowData.status === 'pending',\n                                                                'custom-green':rowData.status === 'approved',\n                                                                'custom-red':rowData.status === 'declined',\n                                                                'custom-ash':rowData.status === 'draft'\n                                                              }\">{{rowData.status}}</p>\n\n                                                            <p *ngIf=\"rowData.assignednumber\" class=\"\">Ivr Number: {{rowData.assignednumber}}</p>\n\n                                                        </td>\n                                                        <td>\n                                                            <p>\n                                                                <a *ngIf=\"rowData.twilionumber\" routerLink=\"/dashboard/calllog/{{rowData.twilionumber}}\" class=\"custom-red\">View</a>\n                                                            </p>\n                                                        </td>\n                                                        <td>\n                                                            <p>\n                                                                <!-- <a routerLink=\"/dashboard/editivr/{{rowData._id}}\">View</a> -->\n                                                                <a routerLink=\"/dashboard/editivr/{{rowData._id}}/{{rowData.createdby._id}}\">Edit</a>\n                                                                <a (click)=\"deleteivr(rowData , i)\" class=\"custom-red\">Delete</a>\n                                                            </p>\n                                                        </td>\n                                                    </tr>\n                                                </ng-template>\n                                            </p-table>\n\n\n                                        </div>\n\n                                    </div>\n\n                                </div>\n\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/cuserve/dashboard/ivr/ivr.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/cuserve/dashboard/ivr/ivr.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/cuserve/dashboard/ivr/ivr.component.ts":
/*!********************************************************!*\
  !*** ./src/app/cuserve/dashboard/ivr/ivr.component.ts ***!
  \********************************************************/
/*! exports provided: UserIvrComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserIvrComponent", function() { return UserIvrComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_share_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../providers/share.service */ "./src/app/providers/share.service.ts");
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





var UserIvrComponent = /** @class */ (function () {
    function UserIvrComponent(route, shareService, router, confirmationService, messageService) {
        this.route = route;
        this.shareService = shareService;
        this.router = router;
        this.confirmationService = confirmationService;
        this.messageService = messageService;
        this.register = {};
        this.totalRecords = 10;
        this.activepagination = 0;
    }
    UserIvrComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['userid'];
            _this.userId ? (_this.edittype = true, _this.getuserDetail()) : null;
        });
        this.cols = [
            { field: 'ivrname', header: 'IVR Name' },
            { field: 'createdAt', header: 'Created At' },
            { field: 'createdby.name', header: 'Created By' },
            { field: 'approved', header: 'Status' }
        ];
        sessionStorage.getItem('activeivrpagination') ? this.activepagination = JSON.parse(sessionStorage.getItem('activeivrpagination')) : null;
    };
    UserIvrComponent.prototype.pagechange = function (ev) {
        sessionStorage.setItem('activeivrpagination', ev.first);
    };
    UserIvrComponent.prototype.getuserDetail = function () {
        var _this = this;
        this.shareService.getData(_constants__WEBPACK_IMPORTED_MODULE_3__["constants"].getcustomer + this.userId).subscribe(function (res) {
            _this.register = res['data'][0];
        }, function (err) {
            _this.messageService.add({ severity: 'error', summary: 'Error Message', detail: err.message });
        });
        this.shareService.getData(_constants__WEBPACK_IMPORTED_MODULE_3__["constants"].getivr + 'getbyuser/' + this.userId).subscribe(function (res) {
            console.log(res['ivr']);
            _this.datasource = res['ivr'];
        }, function (err) {
            _this.messageService.add({ severity: 'error', summary: 'Error Message', detail: err.message });
        });
    };
    UserIvrComponent.prototype.deleteivr = function (data, i) {
        var _this = this;
        this.confirmationService.confirm({
            message: 'Are you sure want to delete?',
            accept: function () {
                _this.shareService.delete(_constants__WEBPACK_IMPORTED_MODULE_3__["constants"].getivr + data._id).subscribe(function (res) {
                    _this.getuserDetail();
                    _this.messageService.add({ severity: 'sucess', summary: 'Deleted Sucessfully', detail: res['message'] });
                });
            }
        });
    };
    UserIvrComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'user-ivr',
            template: __webpack_require__(/*! ./ivr.component.html */ "./src/app/cuserve/dashboard/ivr/ivr.component.html"),
            styles: [__webpack_require__(/*! ./ivr.component.scss */ "./src/app/cuserve/dashboard/ivr/ivr.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _providers_share_service__WEBPACK_IMPORTED_MODULE_2__["ShareService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            primeng_api__WEBPACK_IMPORTED_MODULE_4__["ConfirmationService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"]])
    ], UserIvrComponent);
    return UserIvrComponent;
}());



/***/ }),

/***/ "./src/app/cuserve/dashboard/landing/landing.component.html":
/*!******************************************************************!*\
  !*** ./src/app/cuserve/dashboard/landing/landing.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/cuserve/dashboard/landing/landing.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/cuserve/dashboard/landing/landing.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/cuserve/dashboard/landing/landing.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/cuserve/dashboard/landing/landing.component.ts ***!
  \****************************************************************/
/*! exports provided: UserLandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLandingComponent", function() { return UserLandingComponent; });
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

var UserLandingComponent = /** @class */ (function () {
    function UserLandingComponent() {
    }
    UserLandingComponent.prototype.ngOnInit = function () {
    };
    UserLandingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'user-landing',
            template: __webpack_require__(/*! ./landing.component.html */ "./src/app/cuserve/dashboard/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.scss */ "./src/app/cuserve/dashboard/landing/landing.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UserLandingComponent);
    return UserLandingComponent;
}());



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module.js.map