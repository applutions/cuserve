(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["users-users-module"],{

/***/ "./src/app/admin/users/landing/landing.component.html":
/*!************************************************************!*\
  !*** ./src/app/admin/users/landing/landing.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/admin/users/landing/landing.component.scss":
/*!************************************************************!*\
  !*** ./src/app/admin/users/landing/landing.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/users/landing/landing.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/admin/users/landing/landing.component.ts ***!
  \**********************************************************/
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
            template: __webpack_require__(/*! ./landing.component.html */ "./src/app/admin/users/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.scss */ "./src/app/admin/users/landing/landing.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/admin/users/userlanding/userlanding.component.html":
/*!********************************************************************!*\
  !*** ./src/app/admin/users/userlanding/userlanding.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/admin/users/userlanding/userlanding.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/admin/users/userlanding/userlanding.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/users/userlanding/userlanding.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/admin/users/userlanding/userlanding.component.ts ***!
  \******************************************************************/
/*! exports provided: UserlandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserlandingComponent", function() { return UserlandingComponent; });
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

var UserlandingComponent = /** @class */ (function () {
    function UserlandingComponent() {
    }
    UserlandingComponent.prototype.ngOnInit = function () {
    };
    UserlandingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-userlanding',
            template: __webpack_require__(/*! ./userlanding.component.html */ "./src/app/admin/users/userlanding/userlanding.component.html"),
            styles: [__webpack_require__(/*! ./userlanding.component.scss */ "./src/app/admin/users/userlanding/userlanding.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UserlandingComponent);
    return UserlandingComponent;
}());



/***/ }),

/***/ "./src/app/admin/users/userlists/userlists.component.html":
/*!****************************************************************!*\
  !*** ./src/app/admin/users/userlists/userlists.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 col-sm-12 col-xs-12 col-lg-12 billhist-base ivr-base nopadd\">\n    <div class=\"col-md-12 col-sm-12 col-xs-12 col-lg-12 billhist-generatebill text-right nopadd\">\n        <h2 class=\"main-title\">User Lists</h2>\n    </div>\n    <div class=\"col-md-12 col-sm-12 col-xs-12 col-lg-12 searchbar-container nopadd\">\n        <input type=\"text\" (input)=\"dt.filterGlobal($event.target.value, 'contains')\" class=\"searchbar\" placeholder=\"Search\">\n\n        <div class=\"col-md-12 col-sm-12 col-xs-12 col-lg-12 billhist-generatebill text-right nopadd\">\n            <a routerLink=\"/admin/users/account\" class=\"themebtn1\"><span class=\"plus-icon-bill\">+</span>CREATE USER</a>\n        </div>\n        <div class=\"col-md-12 col-sm-12 col-xs-12 col-lg-12 billhist-generatebill text-right nopadd\">\n\n            <div class=\"theme-table\">\n\n                <p-table #dt class=\"table table-striped\" [columns]=\"cols\" [value]=\"datasource\" [paginator]=\"true\" [rows]=\"10\" [totalRecords]=\"totalRecords\">\n                    <ng-template pTemplate=\"header\" let-columns>\n                        <tr>\n                            <th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\">\n                                {{col.header}}\n                            </th>\n                            <th style=\"width: 95px\">\n                                Action\n                            </th>\n                        </tr>\n                    </ng-template>\n                    <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n                        <tr>\n                            <td>{{rowData.companyname}}</td>\n                            <td><img class=\"imglogo\" src=\"{{rowData.companylogo}}\"></td>\n\n                            <td>{{rowData.createdAt | date :'dd.MM.yyyy'}}</td>\n                            <td>{{rowData.name}}</td>\n                            <td>{{rowData.email}}</td>\n                            <td>{{rowData.phone}}</td>\n                            <td>\n                                <p> <a routerLink=\"/admin/users/ivr/{{rowData._id}}\" class=\"custom-red\">More</a></p>\n                            </td>\n                        </tr>\n                    </ng-template>\n                </p-table>\n\n\n            </div>\n        </div>\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/admin/users/userlists/userlists.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/admin/users/userlists/userlists.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".themebtn1 {\n  margin: 25px 0 -20px 0; }\n\n.main-title {\n  margin-bottom: 0; }\n"

/***/ }),

/***/ "./src/app/admin/users/userlists/userlists.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/users/userlists/userlists.component.ts ***!
  \**************************************************************/
/*! exports provided: UserlistsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserlistsComponent", function() { return UserlistsComponent; });
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





var UserlistsComponent = /** @class */ (function () {
    function UserlistsComponent(http, shareService, confirmationService, messageService) {
        this.http = http;
        this.shareService = shareService;
        this.confirmationService = confirmationService;
        this.messageService = messageService;
        this.activepagination = 0;
    }
    UserlistsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.shareService.getData(_constants__WEBPACK_IMPORTED_MODULE_3__["constants"].getcustomer).subscribe(function (res) {
            _this.datasource = res['customer'];
            _this.totalRecords = _this.datasource.length;
        });
        this.cols = [
            { field: 'companyname', header: 'Company Name' },
            { field: 'Logo', header: 'Company Logo' },
            { field: 'createdAt', header: 'Joining Date' },
            { field: 'name', header: 'Name' },
            { field: 'email', header: 'Email Address' },
            { field: 'phone', header: 'Phone Number' },
        ];
        sessionStorage.getItem('activeivrpagination') ? this.activepagination = JSON.parse(sessionStorage.getItem('activeivrpagination')) : null;
    };
    UserlistsComponent.prototype.pagechange = function (ev) {
        sessionStorage.setItem('activeivrpagination', ev.first);
    };
    UserlistsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-userlists',
            template: __webpack_require__(/*! ./userlists.component.html */ "./src/app/admin/users/userlists/userlists.component.html"),
            styles: [__webpack_require__(/*! ./userlists.component.scss */ "./src/app/admin/users/userlists/userlists.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _providers__WEBPACK_IMPORTED_MODULE_2__["ShareService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_4__["ConfirmationService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"]])
    ], UserlistsComponent);
    return UserlistsComponent;
}());



/***/ }),

/***/ "./src/app/admin/users/users.module.ts":
/*!*********************************************!*\
  !*** ./src/app/admin/users/users.module.ts ***!
  \*********************************************/
/*! exports provided: UsersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _users_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users.routing */ "./src/app/admin/users/users.routing.ts");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/admin/users/landing/landing.component.ts");
/* harmony import */ var _userlists_userlists_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./userlists/userlists.component */ "./src/app/admin/users/userlists/userlists.component.ts");
/* harmony import */ var _userlanding_userlanding_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./userlanding/userlanding.component */ "./src/app/admin/users/userlanding/userlanding.component.ts");
/* harmony import */ var _share_share_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../share/share.module */ "./src/app/share/share.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var UsersModule = /** @class */ (function () {
    function UsersModule() {
    }
    UsersModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _users_routing__WEBPACK_IMPORTED_MODULE_2__["UsersRouting"],
                _share_share_module__WEBPACK_IMPORTED_MODULE_6__["ShareModule"],
            ],
            declarations: [
                _landing_landing_component__WEBPACK_IMPORTED_MODULE_3__["LandingComponent"],
                _userlists_userlists_component__WEBPACK_IMPORTED_MODULE_4__["UserlistsComponent"],
                _userlanding_userlanding_component__WEBPACK_IMPORTED_MODULE_5__["UserlandingComponent"],
            ]
        })
    ], UsersModule);
    return UsersModule;
}());



/***/ }),

/***/ "./src/app/admin/users/users.routing.ts":
/*!**********************************************!*\
  !*** ./src/app/admin/users/users.routing.ts ***!
  \**********************************************/
/*! exports provided: UsersRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersRouting", function() { return UsersRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account/account.component */ "./src/app/admin/users/account/account.component.ts");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/admin/users/landing/landing.component.ts");
/* harmony import */ var _billing_billing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./billing/billing.component */ "./src/app/admin/users/billing/billing.component.ts");
/* harmony import */ var _userlists_userlists_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./userlists/userlists.component */ "./src/app/admin/users/userlists/userlists.component.ts");
/* harmony import */ var _ivrlist_ivrlist_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ivrlist/ivrlist.component */ "./src/app/admin/users/ivrlist/ivrlist.component.ts");






var routes = [
    {
        path: '',
        component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_2__["LandingComponent"],
        children: [
            {
                path: '',
                component: _userlists_userlists_component__WEBPACK_IMPORTED_MODULE_4__["UserlistsComponent"]
            },
            {
                path: 'account',
                component: _account_account_component__WEBPACK_IMPORTED_MODULE_1__["AccountComponent"]
            },
            {
                path: 'account/:userid',
                component: _account_account_component__WEBPACK_IMPORTED_MODULE_1__["AccountComponent"]
            },
            {
                path: 'billing/:userid',
                component: _billing_billing_component__WEBPACK_IMPORTED_MODULE_3__["BillingComponent"]
            },
            {
                path: 'ivr/:userid',
                component: _ivrlist_ivrlist_component__WEBPACK_IMPORTED_MODULE_5__["IvrlistComponent"]
            }
        ]
    }
];
// path: ' ',
// component: LandingComponent,  
var UsersRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=users-users-module.js.map