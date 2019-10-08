(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-admin-admin-module"],{

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<admin-header></admin-header>\n<section class=\"adminbody\">\n    <div class=\"col-md-12 section-base admin-base\">\n        <div class=\"container admin-contaienr\">\n            <div class=\"col-md-12 section-inner\">\n                <router-outlet></router-outlet>\n            </div>\n        </div>\n    </div>\n</section>\n<app-footer></app-footer>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<p-confirmDialog header=\"Confirmation\" icon=\"pi pi-exclamation-triangle\" width=\"425\"></p-confirmDialog>\n<p-toast [style]=\"{marginTop: '80px'}\"></p-toast>"

/***/ }),

/***/ "./src/app/admin/admin.component.scss":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../providers */ "./src/app/providers/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ "./src/app/constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminComponent = /** @class */ (function () {
    function AdminComponent(_authenticationService, _shareService, _headerService, router) {
        this._authenticationService = _authenticationService;
        this._shareService = _shareService;
        this._headerService = _headerService;
        this.router = router;
    }
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        var admindata = this._authenticationService.getUser('admin');
        this._shareService.getData(_constants__WEBPACK_IMPORTED_MODULE_3__["constants"].roles + admindata.role).subscribe(function (res) {
            localStorage.setItem('adminroles', JSON.stringify(res['roles'][0].privilages));
            if (res['roles'][0].privilages.includes('View_Users_List')) {
                _this.router.navigateByUrl('admin/users');
            }
            else if (res['roles'][0].privilages.includes('View_Billing_List')) {
                _this.router.navigateByUrl('admin/billing');
            }
            else if (res['roles'][0].privilages.includes('View_Request_List')) {
                _this.router.navigateByUrl('admin/request');
            }
            else if (res['roles'][0].privilages.includes('View_Android_List')) {
                _this.router.navigateByUrl('admin/android');
            }
            else if (res['roles'][0].privilages.includes('View_subadmin_List')) {
                _this.router.navigateByUrl('admin/subadmin');
            }
            else {
                _this.router.navigateByUrl('admin/users');
            }
        });
        this._shareService.postData(_constants__WEBPACK_IMPORTED_MODULE_3__["constants"].getivr + 'filter', { status: 'pending', viewed: false }).subscribe(function (res) {
            _this.ivrlength = res['ivr'].length;
            _this._headerService._ivrcount.next(_this.ivrlength);
        });
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.scss */ "./src/app/admin/admin.component.scss")]
        }),
        __metadata("design:paramtypes", [_providers__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"],
            _providers__WEBPACK_IMPORTED_MODULE_1__["ShareService"],
            _providers__WEBPACK_IMPORTED_MODULE_1__["HeaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: options, AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return options; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _share_share_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../share/share.module */ "./src/app/share/share.module.ts");
/* harmony import */ var _admin_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin.routing */ "./src/app/admin/admin.routing.ts");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _core_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/header/header.component */ "./src/app/admin/core/header/header.component.ts");
/* harmony import */ var _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/footer/footer.component */ "./src/app/admin/core/footer/footer.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/admin/dashboard/dashboard.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/admin/login/login.component.ts");
/* harmony import */ var _core_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/sidebar/sidebar.component */ "./src/app/admin/core/sidebar/sidebar.component.ts");
/* harmony import */ var _core_breadcrum_breadcrum_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/breadcrum/breadcrum.component */ "./src/app/admin/core/breadcrum/breadcrum.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var options;
var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _share_share_module__WEBPACK_IMPORTED_MODULE_2__["ShareModule"],
                _admin_routing__WEBPACK_IMPORTED_MODULE_3__["AdminRouting"],
            ],
            declarations: [
                _admin_component__WEBPACK_IMPORTED_MODULE_4__["AdminComponent"],
                _core_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _core_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__["SidebarComponent"],
                _core_breadcrum_breadcrum_component__WEBPACK_IMPORTED_MODULE_10__["BreadcrumComponent"]
            ]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/app/admin/admin.routing.ts":
/*!****************************************!*\
  !*** ./src/app/admin/admin.routing.ts ***!
  \****************************************/
/*! exports provided: AdminRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRouting", function() { return AdminRouting; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../providers */ "./src/app/providers/index.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../admin/dashboard/dashboard.component */ "./src/app/admin/dashboard/dashboard.component.ts");
/* harmony import */ var _admin_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../admin/login/login.component */ "./src/app/admin/login/login.component.ts");
/* harmony import */ var _share_createivr_createivr_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../share/createivr/createivr.component */ "./src/app/share/createivr/createivr.component.ts");
/* harmony import */ var _share_calllog_calllog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../share/calllog/calllog.component */ "./src/app/share/calllog/calllog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








//  canActivate: [AuthGuardService],
var routes = [
    { path: 'login', component: _admin_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    {
        path: '', canActivate: [_providers__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"]], component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"],
        children: [
            { path: 'dashboard', component: _admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"] },
            //{ path: '', redirectTo: 'users', pathMatch: 'full' },
            { path: 'users', data: { roles: ['View_Users_List'] }, canActivate: [_providers__WEBPACK_IMPORTED_MODULE_2__["RolesGuardService"]], loadChildren: './users/users.module#UsersModule' },
            { path: 'request', data: { roles: ['View_Request_List'] }, canActivate: [_providers__WEBPACK_IMPORTED_MODULE_2__["RolesGuardService"]], loadChildren: './request/request.module#RequestModule' },
            { path: 'android', data: { roles: ['View_Android_List'] }, canActivate: [_providers__WEBPACK_IMPORTED_MODULE_2__["RolesGuardService"]], loadChildren: './android/companylist.module#CompanylistModule' },
            { path: 'billing', data: { roles: ['View_Billing_List'] }, canActivate: [_providers__WEBPACK_IMPORTED_MODULE_2__["RolesGuardService"]], loadChildren: './billing/billing.module#BillingModule' },
            { path: 'subadmin', data: { roles: ['View_subadmin_List'] }, canActivate: [_providers__WEBPACK_IMPORTED_MODULE_2__["RolesGuardService"]], loadChildren: './subadmin/subadmin.module#SubadminModule' },
            { path: 'createivr', component: _share_createivr_createivr_component__WEBPACK_IMPORTED_MODULE_6__["CreateivrComponent"] },
            { path: 'calllog/:id', component: _share_calllog_calllog_component__WEBPACK_IMPORTED_MODULE_7__["CalllogComponent"] },
            { path: 'createivr/:userid', component: _share_createivr_createivr_component__WEBPACK_IMPORTED_MODULE_6__["CreateivrComponent"] },
            { path: 'editivr/:id/:userid', component: _share_createivr_createivr_component__WEBPACK_IMPORTED_MODULE_6__["CreateivrComponent"] },
        ]
    }
];
var AdminRouting = /** @class */ (function () {
    function AdminRouting() {
    }
    AdminRouting = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)]
        })
    ], AdminRouting);
    return AdminRouting;
}());



/***/ }),

/***/ "./src/app/admin/core/breadcrum/breadcrum.component.html":
/*!***************************************************************!*\
  !*** ./src/app/admin/core/breadcrum/breadcrum.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumb-base col-md-12 col-sm-12 col-lg-12 col-xs-12\">\n    <ul class=\"breadcrumb\">\n        <li><a routerLink=\"/admin/users\">User List</a></li>\n        <li><a href=\"#\">Cuserve</a></li>\n    </ul>\n</div>"

/***/ }),

/***/ "./src/app/admin/core/breadcrum/breadcrum.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/admin/core/breadcrum/breadcrum.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/core/breadcrum/breadcrum.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/admin/core/breadcrum/breadcrum.component.ts ***!
  \*************************************************************/
/*! exports provided: BreadcrumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumComponent", function() { return BreadcrumComponent; });
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

var BreadcrumComponent = /** @class */ (function () {
    function BreadcrumComponent() {
    }
    BreadcrumComponent.prototype.ngOnInit = function () {
    };
    BreadcrumComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-breadcrum',
            template: __webpack_require__(/*! ./breadcrum.component.html */ "./src/app/admin/core/breadcrum/breadcrum.component.html"),
            styles: [__webpack_require__(/*! ./breadcrum.component.scss */ "./src/app/admin/core/breadcrum/breadcrum.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BreadcrumComponent);
    return BreadcrumComponent;
}());



/***/ }),

/***/ "./src/app/admin/core/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/admin/core/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n    <div class=\"col-md-12 col-sm-12 col-xs-12 col-lg-12 footer-base\">\n        <p class=\"footer-copy\">Copyright © 2018 Cuserve</p>\n        <p class=\"conditions-terms\"><a href=\"#\">Terms and Conditions & Privacy Policy</a></p>\n    </div>\n</footer>"

/***/ }),

/***/ "./src/app/admin/core/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/admin/core/footer/footer.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/core/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/admin/core/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/admin/core/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/admin/core/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/admin/core/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/admin/core/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <header>\n    <div class=\"admin__menu\">\n        <div class=\"menu__left\">\n\n            <span class=\"menuicon\">\n                <i class=\"mdi mdi-menu\"></i>\n           </span>\n\n            <input placeholder=\"Search\" class=\"searchheader\" type=\"text\">\n            \n        </div>\n        <ul class=\"menu__right\"> \n            <li><a class=\"roundico\" (click)=\"logout()\"><i class=\"mdi mdi-account-outline\"></i></a></li>\n        </ul>\n    </div>\n</header> -->\n\n\n<header>\n    <div class=\"col-md-12 col-sm-12 col-lg-12 col-xs-12 head-base\">\n        <div class=\"container\">\n            <div class=\"head-inner col-md-12 col-sm-12 col-xs-12  col-lg-12\">\n\n                <nav *ngIf=\"roles\" class=\"navbar navbar-default menu-base\">\n                    <div class=\"container-fluid\">\n                        <!-- Brand and toggle get grouped for better mobile display -->\n                        <div class=\"navbar-header\">\n                            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n                                                  <span class=\"sr-only\">Toggle navigation</span>\n                                                  <span class=\"icon-bar\"></span>\n                                                  <span class=\"icon-bar\"></span>\n                                                  <span class=\"icon-bar\"></span>\n                                                </button>\n                            <span class=\"navbar-brand\"><img src=\"../../../assets/images/logo.png\" alt=\"logo\"></span>\n                        </div>\n\n                        <!-- Collect the nav links, forms, and other content for toggling -->\n                        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n\n                            <ul *ngIf=\"roles\" class=\"nav navbar-nav nav-tabs\" role=\"tablist\">\n                                <li role=\"presentation\" *ngIf=\"roles.includes('View_Users_List')\" routerLinkActive=\"active\" routerLink=\"/admin/users\"><a>Users</a></li>\n\n                                <li role=\"presentation\" *ngIf=\"roles.includes('View_Billing_List')\" routerLinkActive=\"active\" routerLink=\"/admin/billing\"><a>Billing \n                                     </a></li>\n                                <li role=\"presentation\" *ngIf=\"roles.includes('View_Request_List')\" routerLinkActive=\"active\" routerLink=\"/admin/request\"><a>Requests \n                             \n                                    <span  *ngIf=\"ivrlength && ivrlength > 0\" class=\"count-indicator\">{{ivrlength}}</span>\n                                     </a></li>\n                                <li role=\"presentation\" *ngIf=\"roles.includes('View_Android_List')\" routerLinkActive=\"active\" routerLink=\"/admin/android\"><a>Android \n                                    </a></li>\n                            </ul>\n                            <ul class=\"list-inline pull-right account-head-ul\">\n                                <li> <a routerLinkActive=\"active\" *ngIf=\"roles?.includes('View_subadmin_List')\" routerLink=\"/admin/subadmin\" class=\"themebtn\">SUB-ADMINS</a> </li>\n                                <li><a (click)=\"logout()\" class=\"themebtn\">Logout</a></li>\n                                <!-- <li role=\"presentation\" class=\"dropdown\">\n                                    <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                        <span class=\"account-img\"><img src=\"../../../assets/images/acc.png\" alt=\"Accountcurserve\"></span> <span class=\"drop-icon\"></span>\n                                    </a>\n                                    <ul class=\"dropdown-menu\">\n                                        <li><a (click)=\"logout()\">Logout</a></li>\n                                    </ul>\n                                </li> -->\n                            </ul>\n                        </div>\n                        <!-- /.navbar-collapse -->\n                    </div>\n                    <!-- /.container-fluid -->\n                </nav>\n            </div>\n        </div>\n    </div>\n</header>\n\n<app-loader *ngIf=\"!roles\"></app-loader>"

/***/ }),

/***/ "./src/app/admin/core/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/admin/core/header/header.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-inline > li {\n  float: left; }\n"

/***/ }),

/***/ "./src/app/admin/core/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/admin/core/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../providers */ "./src/app/providers/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(auth, headerService, shareService) {
        this.auth = auth;
        this.headerService = headerService;
        this.shareService = shareService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.roles = localStorage.getItem('adminroles') ? JSON.parse(localStorage.getItem('adminroles')) : null;
        setTimeout(function () {
            _this.roles = JSON.parse(localStorage.getItem('adminroles'));
        }, 500);
        // this.shareService.postData(constants.getivr +'filter' , {status: 'pending', viewed: false}).subscribe(res => {  
        //   this.ivrlength = res['ivr'].length;    
        // });
        this.headerService.ivrcount$.subscribe(function (res) {
            _this.ivrlength = res;
        });
    };
    HeaderComponent.prototype.logout = function () {
        this.auth.logout();
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'admin-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/admin/core/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/admin/core/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_providers__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"],
            _providers__WEBPACK_IMPORTED_MODULE_1__["HeaderService"],
            _providers__WEBPACK_IMPORTED_MODULE_1__["ShareService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/admin/core/sidebar/sidebar.component.html":
/*!***********************************************************!*\
  !*** ./src/app/admin/core/sidebar/sidebar.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"adminSidebar--fixed\">\n    <div class=\"adminLogo\">\n        <a href=\"#\">Admin Logo</a>\n    </div>\n    <ul class=\"sidebar__menu\">\n        <li>\n            <a routerLink=\"/admin/\">\n                <i class=\"mdi mdi-laptop-chromebook\"></i>Dashboard\n            </a>\n        </li>\n\n        <li>\n            <a routerLink=\"/admin/createivr/\">\n                <i class=\"mdi mdi-laptop-chromebook\"></i>IVR\n            </a>\n        </li>\n\n\n        \n        <!-- User Menu start -->\n        <li data-target=\"#roles\" data-toggle=\"collapse\" aria-expanded=\"true\">\n            <a>\n                <i class=\"mdi mdi-sitemap\"></i>Roles & Responsible\n                <span class=\"mdi mdi-chevron-down\"></span>\n            </a>\n        </li>\n        <ul class=\"sub-menu collapse \" id=\"roles\" aria-expanded=\"true\" style=\"\">\n            <li routerLinkActive=\"active\">\n                <a routerLink=\"/admin/addsubadmin\">\n                    <i class=\"fa fa-circle\"></i>Add Subadmin\n                </a>\n            </li>\n            <li routerLinkActive=\"active\">\n                <a routerLink=\"/admin/subadminlist\">\n                    <i class=\"fa fa-circle\"></i>Subadmin List</a>\n            </li>\n        </ul>\n\n        <!-- User Menu start -->\n        <li routerLinkActive=\"active\">\n            <a routerLink=\"/admin/userslist\"><i class=\"fa fa-user-o\"></i>Customer</a>\n        </li>\n        <!-- User Menu start -->\n        <!-- Driver Menu start -->\n        <li data-target=\"#category\" data-toggle=\"collapse\" aria-expanded=\"true\">\n            <a>\n                <i class=\"mdi mdi-food-variant\"></i>Categories\n                <span class=\"mdi mdi-chevron-down\"></span>\n            </a>\n        </li>\n        <ul class=\"sub-menu collapse\" id=\"category\" aria-expanded=\"true\" style=\"\">\n            <li routerLinkActive=\"active\">\n                <a routerLink=\"/admin/categorylist\">\n                    <i class=\"fa fa-circle\"></i>category</a>\n            </li>\n            <li routerLinkActive=\"active\">\n                <a routerLink=\"/admin/subcategorylist\">\n                    <i class=\"fa fa-circle\"></i> Sub Category\n                </a>\n            </li>\n        </ul>\n        <li data-target=\"#subcategory\" data-toggle=\"collapse\" aria-expanded=\"true\">\n            <a>\n                <i class=\"mdi mdi-food\"></i>Dishes\n                <span class=\"mdi mdi-chevron-down\"></span>\n            </a>\n        </li>\n        <ul class=\"sub-menu collapse\" id=\"subcategory\" aria-expanded=\"true\" style=\"\">\n            <li routerLinkActive=\"active\">\n                <a routerLink=\"/admin/dishesList\">\n                    <i class=\"fa fa-circle\"></i>Dishes List</a>\n            </li>\n            <li routerLinkActive=\"active\">\n                <a routerLink=\"/admin/adddishes\">\n                    <i class=\"fa fa-circle\"></i>Add New Dish</a>\n            </li>\n        </ul>\n\n        <li routerLinkActive=\"active\">\n            <a routerLink=\"/admin/orders\">\n                <i class=\"mdi mdi-clipboard-outline\"></i>orders\n            </a>\n        </li>\n\n        <li data-target=\"#fare\" data-toggle=\"collapse\" aria-expanded=\"true\">\n            <a>\n                <i class=\"mdi mdi-currency-usd\"></i>Fare and Tax\n                <span class=\"mdi mdi-chevron-down\"></span>\n            </a>\n        </li>\n        <ul class=\"sub-menu collapse\" id=\"fare\" aria-expanded=\"true\" style=\"\">\n            <li routerLinkActive=\"active\">\n                <a routerLink=\"/admin/fareclasses\">\n                    <i class=\"fa fa-circle\"></i>Fare Classes</a>\n            </li>\n            <li routerLinkActive=\"active\">\n                <a routerLink=\"/admin/farerate\">\n                    <i class=\"fa fa-circle\"></i>Fare Rate</a>\n            </li>\n        </ul>\n\n        <li data-target=\"#reports\" data-toggle=\"collapse\" aria-expanded=\"true\">\n            <a>\n                <i class=\"mdi mdi-file-document-box\"></i>Reports\n                <span class=\"mdi mdi-chevron-down\"></span>\n            </a>\n        </li>\n        <ul class=\"sub-menu collapse\" id=\"reports\" aria-expanded=\"true\">\n            <li>\n                <a routerLink=\"/admin/product\">\n                    <i class=\"fa fa-circle\"></i>Overall Ride Reports\n                </a>\n            </li>\n            <li>\n                <a routerLink=\"/admin/product\">\n                    <i class=\"fa fa-circle\"></i>Provider Reports\n                </a>\n            </li>\n            <li>\n                <a routerLink=\"/admin/product\">\n                    <i class=\"fa fa-circle\"></i>Daily Reports\n                </a>\n            </li>\n        </ul>\n\n        <li data-target=\"#drivers\" data-toggle=\"collapse\" aria-expanded=\"true\">\n            <a>\n                <i class=\"mdi mdi-motorbike\"></i>Delivery\n                <span class=\"mdi mdi-chevron-down\"></span>\n            </a>\n        </li>\n        <ul class=\"sub-menu collapse\" id=\"drivers\" aria-expanded=\"true\" style=\"\">\n            <li routerLinkActive=\"active\">\n                <a routerLink=\"/admin/driverslist\">\n                    <i class=\"fa fa-circle\"></i>Drivers List</a>\n            </li>\n            <li routerLinkActive=\"active\">\n                <a routerLink=\"/admin/adddriver\">\n                    <i class=\"fa fa-circle\"></i>Add Driver</a>\n            </li>\n            <li routerLinkActive=\"active\">\n                <a routerLink=\"/admin/driverdashboard\">\n                    <i class=\"fa fa-circle\"></i>Delivery Dashboard\n                </a>\n            </li>\n        </ul>\n        <!-- Driver Menu End -->\n        <li routerLinkActive=\"active\">\n            <a routerLink=\"/admin/coupons\">\n                <i class=\"mdi mdi-barcode\"></i>Coupons</a>\n        </li>\n        <li routerLinkActive=\"active\">\n            <a routerLink=\"/admin/paymentMethod\">\n                <i class=\"mdi mdi-barcode\"></i>Payments\n            </a>\n        </li>\n        <li data-target=\"#settings\" data-toggle=\"collapse\" aria-expanded=\"true\">\n            <a>\n                <i class=\"mdi mdi-motorbike\"></i>Settings\n                <span class=\"mdi mdi-chevron-down\"></span>\n            </a>\n        </li>\n        <ul class=\"sub-menu collapse\" id=\"settings\" aria-expanded=\"true\" style=\"\">\n            <li routerLinkActive=\"active\">\n                <a routerLink=\"/admin/sitesetting\">\n                    <i class=\"fa fa-circle\"></i>Site Settings</a>\n            </li>\n            <li routerLinkActive=\"active\">\n                <a routerLink=\"/admin/banner\">\n                    <i class=\"fa fa-circle\"></i>Banner Setting</a>\n            </li>\n            <li routerLinkActive=\"active\">\n                <a routerLink=\"/admin/adddriver\">\n                    <i class=\"fa fa-circle\"></i>Social Media Settings</a>\n            </li>\n        </ul>\n        <li>\n            <a href=\"#\">\n                <i class=\"mdi mdi-access-point\"></i>Language\n            </a>\n        </li>\n    </ul>\n</div>"

/***/ }),

/***/ "./src/app/admin/core/sidebar/sidebar.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/admin/core/sidebar/sidebar.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/core/sidebar/sidebar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/admin/core/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
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

var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/admin/core/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/admin/core/sidebar/sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/admin/dashboard/dashboard.component.html":
/*!**********************************************************!*\
  !*** ./src/app/admin/dashboard/dashboard.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-panel>\n    <p-header>\n        Header content here\n    </p-header>\n    Body Content\n</p-panel>"

/***/ }),

/***/ "./src/app/admin/dashboard/dashboard.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/admin/dashboard/dashboard.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
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

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/admin/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/admin/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/admin/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/admin/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"login-container\">\n        <div class=\"inner-container\">\n            <div id=\"output\"></div>\n            <div class=\"avatar\"></div>\n            <div class=\"form-box\">\n                <form>\n                    <input type=\"text\" name=\"email\" placeholder=\"Email\" [(ngModel)]=\"credentials.email\">\n                    <input type=\"password\" name=\"password\" placeholder=\"Password\" [(ngModel)]=\"credentials.password\">\n                    <button class=\"btn btn-info btn-block login\" type=\"submit\" (click)=\"login()\">Login</button>\n                    <p *ngIf=\"errormessage\" class=\"info-error\"> {{errormessage}}</p>\n                </form>\n            </div>\n        </div>\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/admin/login/login.component.scss":
/*!**************************************************!*\
  !*** ./src/app/admin/login/login.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background: #c31432;\n  /* fallback for old browsers */\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to right, #240b36, #c31432);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */ }\n\nhtml,\nbody {\n  position: relative;\n  height: 100%;\n  overflow: hidden; }\n\n.login-container {\n  position: relative;\n  width: 300px;\n  z-index: 9;\n  margin: 150px auto 0;\n  padding: 20px 20px 40px;\n  text-align: left;\n  background: #fff;\n  border: 1px solid #ccc; }\n\n.login-container::before,\n.login-container::after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 3.5px;\n  left: 0;\n  background: #fff;\n  z-index: -1;\n  -webkit-transform: rotateZ(4deg);\n  -moz-transform: rotateZ(4deg);\n  -ms-transform: rotateZ(4deg);\n  border: 1px solid #ccc; }\n\n.login-container::after {\n  top: 5px;\n  z-index: -1;\n  -webkit-transform: rotateZ(-2deg);\n  -moz-transform: rotateZ(-2deg);\n  -ms-transform: rotateZ(-2deg); }\n\n.avatar {\n  width: 100px;\n  height: 100px;\n  margin: 10px auto 30px;\n  border-radius: 100%;\n  border: 2px solid #aaa;\n  background-size: cover; }\n\n.form-box input {\n  width: 100%;\n  text-transform: none;\n  padding: 10px;\n  text-align: left;\n  font-size: 15px;\n  margin: 10px 0;\n  height: 40px;\n  border: 1px solid #ccc;\n  background: #fafafa;\n  transition: 0.2s ease-in-out; }\n\n.form-box input:focus {\n  outline: 0;\n  background: #eee; }\n\n.form-box button.login {\n  margin-top: 15px;\n  padding: 10px 20px;\n  background: #EB3349;\n  /* fallback for old browsers */\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to right, #F45C43, #EB3349);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n  color: #fff;\n  box-shadow: none;\n  border: none;\n  outline: none; }\n\n.form-box button.login:hover,\n.form-box button.login:active {\n  box-shadow: none;\n  border: none;\n  outline: none; }\n\n.animated {\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both; }\n\n.inner-container {\n  width: 100%;\n  display: inline-block;\n  z-index: 9999; }\n\n@-webkit-keyframes fadeInUp {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(20px);\n    transform: translateY(20px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    transform: translateY(0); } }\n\n@keyframes fadeInUp {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(20px);\n    transform: translateY(20px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    transform: translateY(0); } }\n\n.fadeInUp {\n  -webkit-animation-name: fadeInUp;\n  animation-name: fadeInUp; }\n\np.info-error {\n  color: red;\n  font-size: 12px;\n  margin: 0;\n  padding: 0; }\n"

/***/ }),

/***/ "./src/app/admin/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/admin/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_share_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../providers/share.service */ "./src/app/providers/share.service.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants */ "./src/app/constants.ts");
/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers */ "./src/app/providers/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(shareService, router, auth) {
        this.shareService = shareService;
        this.router = router;
        this.auth = auth;
        this.credentials = {
            email: '',
            password: ''
        };
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.shareService.postData(_constants__WEBPACK_IMPORTED_MODULE_3__["constants"].login, this.credentials).subscribe(function (res) {
            _this.auth.saveToken(res.user, res.token);
            _this.router.navigateByUrl('/admin');
        }, function (err) {
            _this.errormessage = err.error.message;
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/admin/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/admin/login/login.component.scss")],
        }),
        __metadata("design:paramtypes", [_providers_share_service__WEBPACK_IMPORTED_MODULE_2__["ShareService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _providers__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ })

}]);
//# sourceMappingURL=app-admin-admin-module.js.map