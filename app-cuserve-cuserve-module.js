(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-cuserve-cuserve-module"],{

/***/ "./src/app/cuserve/cuserve.component.html":
/*!************************************************!*\
  !*** ./src/app/cuserve/cuserve.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<page-header [userLogged]='isLogged' [billinglength]=\"billinglength\" [logo]=\"logo\"></page-header>\n\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n\n<app-signup [view]=\"userLogin\"></app-signup>\n\n<p-confirmDialog header=\"Confirmation\" icon=\"pi pi-exclamation-triangle\"></p-confirmDialog>\n<p-toast class=\"toast\" [style]=\"{marginTop: '80px'}\"></p-toast>"

/***/ }),

/***/ "./src/app/cuserve/cuserve.component.scss":
/*!************************************************!*\
  !*** ./src/app/cuserve/cuserve.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toast {\n  z-index: 9; }\n"

/***/ }),

/***/ "./src/app/cuserve/cuserve.component.ts":
/*!**********************************************!*\
  !*** ./src/app/cuserve/cuserve.component.ts ***!
  \**********************************************/
/*! exports provided: cuserveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cuserveComponent", function() { return cuserveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../providers/ */ "./src/app/providers/index.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var cuserveComponent = /** @class */ (function () {
    function cuserveComponent(shareService, titleService, auth, headerService, meta) {
        this.shareService = shareService;
        this.titleService = titleService;
        this.auth = auth;
        this.headerService = headerService;
        this.meta = meta;
    }
    cuserveComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.getloginState('customer').subscribe(function (res) {
            _this.isLogged = res;
        });
        this.shareService.getLoginModal().subscribe(function (res) {
            _this.userLogin = res;
        });
        this.headerService.billingcount$.subscribe(function (res) {
            console.log('header', res);
            _this.billinglength = res;
        });
        // this.shareService.getData(constants.getsettings).subscribe(res => {
        //   const appData = res['data'][0];
        //   this.logo = constants.UploadedImage + appData.logo;
        //   this.titleService.setTitle(appData.title);
        //   this.meta.addTag({ name: 'description', content: appData.seo.title });
        //   this.meta.addTag({ name: 'metatag', content: appData.seo.metatag });
        //   this.meta.addTag({ name: 'keywords', content: appData.seo.keyword });
        //   this.meta.addTag({ name: 'description', content: appData.seo.description });
        //   const link = document.querySelector('link[rel*="icon"]') || document.createElement('link');
        //   link['type'] = 'image/x-icon';
        //   link['rel'] = 'shortcut icon';
        //   link['href'] = constants.UploadedImage + appData.favicon;
        //   document.getElementsByTagName('head')[0].appendChild(link);
        // });
    };
    cuserveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cuserve',
            template: __webpack_require__(/*! ./cuserve.component.html */ "./src/app/cuserve/cuserve.component.html"),
            styles: [__webpack_require__(/*! ./cuserve.component.scss */ "./src/app/cuserve/cuserve.component.scss")]
        }),
        __metadata("design:paramtypes", [_providers___WEBPACK_IMPORTED_MODULE_1__["ShareService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
            _providers___WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"],
            _providers___WEBPACK_IMPORTED_MODULE_1__["HeaderService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"]])
    ], cuserveComponent);
    return cuserveComponent;
}());



/***/ }),

/***/ "./src/app/cuserve/cuserve.module.ts":
/*!*******************************************!*\
  !*** ./src/app/cuserve/cuserve.module.ts ***!
  \*******************************************/
/*! exports provided: cuserveModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cuserveModule", function() { return cuserveModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _share_share_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../share/share.module */ "./src/app/share/share.module.ts");
/* harmony import */ var _cuserve_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cuserve.routing */ "./src/app/cuserve/cuserve.routing.ts");
/* harmony import */ var _cuserve_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cuserve.component */ "./src/app/cuserve/cuserve.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/cuserve/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/cuserve/footer/footer.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/cuserve/home/home.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/cuserve/signup/signup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var cuserveModule = /** @class */ (function () {
    function cuserveModule() {
    }
    cuserveModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _share_share_module__WEBPACK_IMPORTED_MODULE_2__["ShareModule"],
                _cuserve_routing__WEBPACK_IMPORTED_MODULE_3__["cuserveRouting"]
            ],
            declarations: [
                _cuserve_component__WEBPACK_IMPORTED_MODULE_4__["cuserveComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"],
            ]
        })
    ], cuserveModule);
    return cuserveModule;
}());



/***/ }),

/***/ "./src/app/cuserve/cuserve.routing.ts":
/*!********************************************!*\
  !*** ./src/app/cuserve/cuserve.routing.ts ***!
  \********************************************/
/*! exports provided: cuserveRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cuserveRouting", function() { return cuserveRouting; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers */ "./src/app/providers/index.ts");
/* harmony import */ var _cuserve_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cuserve.component */ "./src/app/cuserve/cuserve.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/cuserve/home/home.component.ts");
/* harmony import */ var _share_paymentsucess_paymentsucess_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../share/paymentsucess/paymentsucess.component */ "./src/app/share/paymentsucess/paymentsucess.component.ts");
/* harmony import */ var _share_resetpassword_resetpassword_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../share/resetpassword/resetpassword.component */ "./src/app/share/resetpassword/resetpassword.component.ts");
/* harmony import */ var _share_emailconfirmation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../share/emailconfirmation.component */ "./src/app/share/emailconfirmation.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '', component: _cuserve_component__WEBPACK_IMPORTED_MODULE_3__["cuserveComponent"],
        children: [
            { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
            { path: 'dashboard', canActivate: [_providers__WEBPACK_IMPORTED_MODULE_2__["UserAuthGuardService"]], loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'paymentsucess', component: _share_paymentsucess_paymentsucess_component__WEBPACK_IMPORTED_MODULE_5__["PaymentsucessComponent"] },
            { path: 'resetpass/:id', component: _share_resetpassword_resetpassword_component__WEBPACK_IMPORTED_MODULE_6__["ResetpasswordComponent"] },
            { path: 'verify/:id', component: _share_emailconfirmation_component__WEBPACK_IMPORTED_MODULE_7__["EmailConfirmationComponent"] },
        ]
    }
];
var cuserveRouting = /** @class */ (function () {
    function cuserveRouting() {
    }
    cuserveRouting = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)]
        })
    ], cuserveRouting);
    return cuserveRouting;
}());



/***/ }),

/***/ "./src/app/cuserve/footer/footer.component.html":
/*!******************************************************!*\
  !*** ./src/app/cuserve/footer/footer.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n    <div class=\"col-md-12 col-sm-12 col-xs-12 col-lg-12 footer-base\">\n        <p class=\"footer-copy\">Copyright © 2018 Cuserve</p>\n        <p class=\"conditions-terms\"><a href=\"#\">Terms and Conditions & Privacy Policy</a></p>\n    </div>\n</footer>"

/***/ }),

/***/ "./src/app/cuserve/footer/footer.component.scss":
/*!******************************************************!*\
  !*** ./src/app/cuserve/footer/footer.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/cuserve/footer/footer.component.ts":
/*!****************************************************!*\
  !*** ./src/app/cuserve/footer/footer.component.ts ***!
  \****************************************************/
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
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/cuserve/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/cuserve/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/cuserve/header/header.component.html":
/*!******************************************************!*\
  !*** ./src/app/cuserve/header/header.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n    <div class=\"col-md-12 col-sm-12 col-lg-12 col-xs-12 head-base\">\n        <div class=\"container\">\n            <div class=\"head-inner col-md-12 col-sm-12 col-xs-12  col-lg-12\">\n\n                <nav *ngIf=\"!userLogged\" class=\"navbar navbar-default menu-base login-menu\">\n                    <div class=\"container-fluid\">\n                        <a class=\"\" routerLink=\"/\"><img src=\"../../../assets/images/logo.png\" alt=\"logo\"></a>\n                    </div>\n                </nav>\n                <nav *ngIf=\"userLogged\" class=\"navbar navbar-default menu-base front-end\">\n                    <div class=\"container-fluid\">\n                        <!-- Brand and toggle get grouped for better mobile display -->\n                        <div class=\"navbar-header\">\n                            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n                          <span class=\"sr-only\">Toggle navigation</span>\n                          <span class=\"icon-bar\"></span>\n                          <span class=\"icon-bar\"></span>\n                          <span class=\"icon-bar\"></span>\n                        </button>\n                            <a class=\"navbar-brand\" routerLink=\"/\"><img src=\"assets/images/logo.png\" alt=\"logo\"></a>\n                        </div>\n\n                        <!-- Collect the nav links, forms, and other content for toggling -->\n                        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n\n\n                            <ul class=\"list-inline pull-right account-head-ul\">\n                                <li> <a routerLink=\"/dashboard/createivr/{{userinfo._id}}\" class=\"themebtn\">CREATE IVR</a> </li>\n                                <li> <a routerLink=\"/dashboard/\" class=\"themebtn\">DASHBOARD</a> </li>\n\n                                <li role=\"presentation\" class=\"dropdown\">\n                                    <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                        <span class=\"account-img\">\n                                            <img *ngIf=\"userinfo.companylogo; else userinitial\" src=\"{{userinfo.companylogo}}\" alt=\"Accountcurserve\">\n                                       <ng-template #userinitial>\n                                           <label class=\"initial\">{{userinfo.name | slice:0:1}}  </label>\n                                       </ng-template>\n                                        </span>\n                                        <span class=\"drop-icon\"></span>\n                                        <!-- <span class=\"notification-icon\"></span> -->\n                                    </a>\n                                    <ul class=\"dropdown-menu\">\n                                        <li><a routerLink=\"/dashboard/ivr/{{userinfo?._id}}\">My IVR</a></li>\n                                        <li><a routerLink=\"/dashboard/account/{{userinfo?._id}}\">My Account</a></li>\n                                        <li><a routerLink=\"/dashboard/billing/{{userinfo?._id}}\">Billing</a>\n                                            <span *ngIf=\"billinglength\" class=\"notification-icon\"></span>\n                                        </li>\n                                        <li><a (click)=\"signout()\" class=\"logout-link\"><span class=\"logout-icon\"><img src=\"assets/images/logout-icon.png\" alt=\"logout\"></span>LOGOUT</a></li>\n                                    </ul>\n                                </li>\n                            </ul>\n\n\n\n                        </div>\n                        <!-- /.navbar-collapse -->\n                    </div>\n                    <!-- /.container-fluid -->\n                </nav>\n            </div>\n        </div>\n    </div>\n</header>"

/***/ }),

/***/ "./src/app/cuserve/header/header.component.scss":
/*!******************************************************!*\
  !*** ./src/app/cuserve/header/header.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logout-link {\n  cursor: pointer; }\n\nlabel.initial {\n  border: 1px solid #ccc;\n  width: 40px;\n  height: 40px;\n  margin: 3px 0 0 0;\n  text-align: center;\n  border-radius: 50%;\n  vertical-align: middle;\n  padding: 4px 0 0 0;\n  font-size: 20px;\n  color: #827f7f; }\n\n.account-img {\n  width: 67px; }\n\n.account-img img {\n  margin: 3px 0 0 0;\n  width: 100%;\n  height: auto;\n  border-radius: 0; }\n"

/***/ }),

/***/ "./src/app/cuserve/header/header.component.ts":
/*!****************************************************!*\
  !*** ./src/app/cuserve/header/header.component.ts ***!
  \****************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../providers */ "./src/app/providers/index.ts");
/* harmony import */ var _providers_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../providers/authentication.service */ "./src/app/providers/authentication.service.ts");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../globals */ "./src/app/globals.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants */ "./src/app/constants.ts");
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
    function HeaderComponent(shareService, auth, headerService, globals) {
        this.shareService = shareService;
        this.auth = auth;
        this.headerService = headerService;
        this.globals = globals;
        this.itemCount = 0;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        // this.shareService.getData(constants.getcustomer + this.userinfo._id).subscribe(res => {
        //   console.log(this.userinfo) 
        //   this.userdetail = res['data'][0]; 
        // });
    };
    HeaderComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        this.userinfo = this.auth.getUser('customer');
        if (this.userinfo) {
            this.shareService.getData(_constants__WEBPACK_IMPORTED_MODULE_4__["constants"].getnewbills + this.userinfo._id).subscribe(function (res) {
                _this.headerService._billingcount.next(res['bills'].length);
            });
        }
    };
    HeaderComponent.prototype.signin = function () {
        this.shareService.setLoginModal(true);
    };
    HeaderComponent.prototype.signout = function () {
        this.auth.customerlogout();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "logo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "userLogged", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "billinglength", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            selector: 'page-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/cuserve/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/cuserve/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_providers__WEBPACK_IMPORTED_MODULE_1__["ShareService"],
            _providers_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _providers__WEBPACK_IMPORTED_MODULE_1__["HeaderService"],
            _globals__WEBPACK_IMPORTED_MODULE_3__["Globals"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/cuserve/home/home.component.html":
/*!**************************************************!*\
  !*** ./src/app/cuserve/home/home.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n    <div class=\"col-md-12 login-base\">\n        <div class=\"container\">\n            <div class=\"col-md-12 login-inner\">\n                <div class=\"col-md-7 login-text\">\n                    <h2>Make your Own IVR in CuServe</h2>\n                    <h3>Build conversations anywhere. Make, receive, and monitor calls around the world.</h3>\n                    <ul *ngIf=\"!isLogged\" class=\"list-inline\">\n                        <li><a class=\"registerbtn\" (click)=\"signindisplay('signup')\">REGISTER</a></li>\n                        <li><span>or</span></li>\n                        <li><a (click)=\"signindisplay('signin')\" class=\"themebtn\">LOGIN</a></li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/cuserve/home/home.component.scss":
/*!**************************************************!*\
  !*** ./src/app/cuserve/home/home.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".lr_header_navigation_main_wrapper.bannersection {\n  position: absolute; }\n\n:host .lr_header_navigation_main_wrapper {\n  background: none; }\n\n:host-context(.gr__localhost) .lr_header_navigation_main_wrapper {\n  background: none; }\n"

/***/ }),

/***/ "./src/app/cuserve/home/home.component.ts":
/*!************************************************!*\
  !*** ./src/app/cuserve/home/home.component.ts ***!
  \************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_share_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../providers/share.service */ "./src/app/providers/share.service.ts");
/* harmony import */ var _providers_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../providers/authentication.service */ "./src/app/providers/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(shareService, auth) {
        this.shareService = shareService;
        this.auth = auth;
    }
    HomeComponent.prototype.ngOnInit = function () {
        //     // localStorage.setItem('previousurl' , e[0].urlAfterRedirects);
        var _this = this;
        // this.imagepath  = constants.carImage;
        // this.shareService.getData(constants.getbanner).subscribe(res => { 
        //   this.bannerImage = res['data'];
        // });
        this.auth.getloginState('customer').subscribe(function (res) {
            console.log(res);
            _this.isLogged = res;
        });
        // this.auth.$userdetail.subscribe(res => {
        //   console.log(res);
        //   this.isLogged = res;
        // })
    };
    HomeComponent.prototype.signindisplay = function (view) {
        this.shareService.setLoginModal(view);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/cuserve/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/cuserve/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_providers_share_service__WEBPACK_IMPORTED_MODULE_1__["ShareService"], _providers_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/cuserve/signup/signup.component.html":
/*!******************************************************!*\
  !*** ./src/app/cuserve/signup/signup.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"view\" class=\"signUpOutter\">\n    <span (click)=\"close()\" class=\"iconclose\">x</span>\n    <div *ngIf=\"view === 'signin'\" class=\"login-modal modal fade \" id=\"myModal\">\n        <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content col-md-12 nopadd\">\n                <div class=\"modal-body col-md-12 nopadd\">\n                    <form (ngSubmit)=\"onLogin(loginForm);\" #loginForm=\"ngForm\">\n                        <h4 class=\"login-title\">Login</h4>\n                        <div class=\"col-md-12 login-modal-base\">\n                            <div class=\"col-md-12  input-container-base nopadd\">\n                                <div class=\"col-md-12input-container \">\n                                    <input type=\"email\" email required class=\"input-control login-email\" [(ngModel)]=\"userdetail.email\" #email=\"ngModel\" name=\"email\" id=\"email\" placeholder=\"Email Address\">\n                                </div>\n                                <div *ngIf=\"email.touched && email.invalid\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"email.errors.required\">Email is required</div>\n                                    <div *ngIf=\"email.errors.email\">Email must be a valid email address</div>\n                                </div>\n                            </div>\n                            <div class=\"col-md-12  input-container-base nopadd\">\n                                <div class=\"col-md-12input-container \">\n                                    <input type=\"password\" required class=\"input-control login-password\" [(ngModel)]=\"userdetail.password\" #password=\"ngModel\" name=\"password\" id=\"password\" placeholder=\"Password\">\n                                </div>\n                                <div *ngIf=\"password.touched && password.invalid\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"password.errors.required\">Password is required</div>\n                                </div>\n                            </div>\n                            <div class=\"col-md-12  input-container-base \">\n                                <div class=\"custom_check\">\n                                    <label class=\"control control--checkbox\"> \n                                  <input type=\"checkbox\" [(ngModel)]=\"userdetail.remember\" #remember=\"ngModel\" name=\"remember\" >Remember me\n                                  <div class=\"control__indicator\"></div>\n                                   </label>\n                                </div>\n                            </div>\n                            <div class=\"col-md-12  input-container-base \">\n                                <div class=\"col-md-12  login-btn-container nopadd\">\n                                    <button [disabled]=\"!loginForm.valid\" (click)=\"registerstep2 = true\" type=\"submit\" [class.disabled]=\"!loginForm.valid\" class=\"themebtn\">LOGIN</button>\n                                </div>\n                            </div>\n                            <div class=\"col-md-12  input-container-base  text-center\">\n                                <div class=\"col-md-12  forgot-container nopadd\">\n                                    <a class=\"cursor\" (click)=\"view =  'forgetpassword'\">Forgot Password?</a>\n                                </div>\n                            </div>\n                            <div class=\"col-md-12  input-container-base \">\n                                <div class=\"col-md-12  login-footer \">\n                                    <P>Don’t have an account?</P>\n                                    <a class=\"cursor\" (click)=\"view =  'signup'\" class=\"themebtn1\">Create one</a>\n                                </div>\n                            </div>\n\n                        </div>\n                    </form>\n                    <!-- <p class=\"errormessage\">{{errormessage}}</p> -->\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div *ngIf=\"view === 'signup'\" class=\"login-modal modal fade \" id=\"register\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n        <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content col-md-12 nopadd\">\n                <form (ngSubmit)=\"registerForm.form.valid && onRegister(registerForm)\" #registerForm=\"ngForm\" novalidate>\n                    <div class=\"modal-body col-md-12 nopadd\">\n\n                        <div *ngIf=\"!registerstep2\" class=\"col-md-12 login-modal-base\">\n                            <h4 class=\"login-title\">Register with your Email</h4>\n                            <div class=\"col-md-12 input-container-base nopadd\">\n                                <div class=\"col-md-12  input-container \">\n                                    <input type=\"text\" required class=\"input-control\" [(ngModel)]=\"registerdetail.name\" #name=\"ngModel\" name=\"name\" id=\"name\" placeholder=\"Name\">\n\n                                </div>\n                                <div *ngIf=\"name.touched && name.invalid\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"name.errors.required\">Name is required</div>\n                                </div>\n                            </div>\n                            <div class=\"col-md-12 input-container-base nopadd\">\n                                <div class=\"col-md-12  input-container \">\n                                    <input type=\"email\" (focusout)=\"checkemailvalidation(registerdetail.email , email.valid )\" email required class=\"input-control\" [(ngModel)]=\"registerdetail.email\" #email=\"ngModel\" name=\"email\" id=\"email\" placeholder=\"Email Address\">\n                                </div>\n                                <div *ngIf=\"emailvalidate\" class=\"invalid-feedback\">\n                                    <div>This Email ID is already exists </div>\n                                </div>\n                                <div *ngIf=\"email.touched && email.invalid\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"email.errors.required\">Email is required</div>\n                                    <div *ngIf=\"email.errors.email\">Email must be a valid email address</div>\n                                </div>\n                            </div>\n                            <div class=\"col-md-12 input-container-base nopadd\">\n                                <div class=\"col-md-12  input-container \">\n                                    <input type=\"password\" required class=\"input-control\" minlength=\"6\" [(ngModel)]=\"registerdetail.password\" #password=\"ngModel\" name=\"password\" id=\"password\" placeholder=\"Password\">\n                                </div>\n                                <div *ngIf=\"password.touched && password.invalid\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"password.errors.required\">Password is required</div>\n                                    <div *ngIf=\"password.errors.minlength\">Password must be at least 6 characters</div>\n                                </div>\n                            </div>\n                            <div class=\"col-md-12 input-container-base nopadd\">\n                                <div class=\"col-md-12  input-container \">\n                                    <input type=\"text\" pattern=\"^[0-9-+()]*$\" required class=\"input-control\" [(ngModel)]=\"registerdetail.phone\" #phone=\"ngModel\" name=\"phone\" id=\"phone\" placeholder=\"Phone Number\">\n                                </div>\n                                <div *ngIf=\"phone.touched && phone.invalid\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"phone.errors.required\">Phone Number is required</div>\n                                    <div *ngIf=\"phone.errors.pattern\">Phone Number must be valid</div>\n\n                                </div>\n                            </div>\n                            <div class=\"col-md-12 input-container-base\">\n                                <div class=\"custom_check agree-terms-login\">\n                                    <label class=\"control control--checkbox\">\n                                 <input type=\"checkbox\" required [(ngModel)]=\"registerdetail.accept\"  #accept=\"ngModel\" name=\"accept\" id=\"accept\"  class=\" \">\n                                  By signing up, I agree to CuServe’s <a href=\"#\">Terms and Conditions, and Privacy Policy.</a> \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control__indicator\"></div>\n                                 </label>\n                                </div>\n                            </div>\n                            <div class=\"col-md-12 input-container-base\">\n                                <div class=\"col-md-12 login-btn-container nopadd\">\n                                    <button [disabled]=\"!registerForm.valid && registerdetail.accept && emailvalidate\" (click)=\"registerstep2 = true\" type=\"button\" [class.disabled]=\"!registerForm.valid\" class=\"themebtn\">REGISTER</button>\n                                </div>\n                            </div>\n                            <div class=\"col-md-12 input-container-base \">\n                                <div class=\"col-md-12 login-footer \">\n                                    <P>Already have an account?</P>\n                                    <a (click)=\"view = 'signin'\" class=\"themebtn1\">LOGIN</a>\n                                </div>\n                            </div>\n                        </div>\n\n\n                        <div *ngIf=\"registerstep2\" class=\"col-md-12 login-modal-base\">\n                            <h4 class=\"login-title\">\n                                <i class=\"mdi mdi-arrow-left\" (click)=\"registerstep2 = false\" style=\"  float: left; margin: 0 0 0 10px; \"></i> Register: Final Step </h4>\n                            <div class=\"col-md-12 input-container-base nopadd\">\n                                <div class=\"col-md-12  input-container \">\n                                    <input type=\"text\" class=\"input-control\" [(ngModel)]=\"registerdetail.companyname\" #companyname=\"ngModel\" name=\"companyname\" id=\"companyname\" placeholder=\"Company Name\">\n                                </div>\n                            </div>\n                            <div class=\"col-md-12 input-container-base nopadd\">\n                                <div class=\"col-md-12  input-container \">\n                                    <input type=\"email\" email class=\"input-control\" [(ngModel)]=\"registerdetail.companyemail\" #companyemail=\"ngModel\" name=\"companyemail\" id=\"companyemail\" placeholder=\"Company Email Address\">\n                                </div>\n\n                                <div *ngIf=\"companyemail.touched && companyemail.invalid\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"companyemail.errors.email\">Email must be a valid email address</div>\n                                </div>\n                            </div>\n\n                            <div class=\"col-md-12 input-container-base nopadd\">\n                                <div class=\"col-md-12  input-container \">\n                                    <input type=\"text\" pattern=\"^[0-9-+()]*$\" class=\"input-control\" [(ngModel)]=\"registerdetail.companyphone\" #companyphone=\"ngModel\" name=\"companyphone\" id=\"companyphone\" placeholder=\"phone Number\">\n                                </div>\n                                <div *ngIf=\"companyphone.touched && companyphone.invalid\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"companyphone.errors.pattern\">Phone Number must be valid</div>\n                                </div>\n                            </div>\n\n                            <div class=\"col-md-12 input-container-base nopadd\">\n                                <div class=\"col-md-12  input-container \">\n                                    <p-dropdown class=\"input-control\" required [options]=\"categorylist\" [(ngModel)]=\"registerdetail.category\" #category=\"ngModel\" name=\"category\" id=\"category\"></p-dropdown>\n\n                                </div>\n                                <div *ngIf=\"companyphone.touched && companyphone.invalid\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"companyphone.errors.required\">Category must be valid</div>\n                                </div>\n                            </div>\n\n\n                            <div class=\"col-md-12 input-container-base nopadd\">\n                                <div class=\"col-md-12  input-container \">\n                                    <label class=\"formtit\"> Company Logo</label>\n                                    <p-fileUpload name=\"companylogo[]\" [url]=\"companylogoapi\" (onUpload)=\"onUpload($event , 'companylogo')\" mode=\"basic\" auto=\"auto\" accept=\"image/*\"></p-fileUpload>\n\n                                    <input type=\"text\" class=\"hide\" hidden [(ngModel)]=\"registerdetail.companylogo\" #companylogo=\"ngModel\" name=\"companylogo\" id=\"companylogo\" required>\n                                    <div *ngIf=\"registerdetail.companylogo\" class=\"buttonholder\">\n                                        <button type=\"button\" (click)=\"viewImage(registerdetail.companylogo)\" class=\"btn\">View</button>\n                                        <button type=\"button\" (click)=\"removeImage(registerdetail.companylogo, 'companylogo' )\" class=\"btn\">Remove</button>\n                                    </div>\n                                    <div *ngIf=\"previewImage\" class=\"imagePreview\">\n                                        <h4>Preview</h4>\n                                        <img [src]=\"previewImage\">\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"col-md-12 input-container-base nopadd\">\n                                <div class=\"col-md-12  input-container \">\n                                    <input type=\"text\" class=\"input-control\" [(ngModel)]=\"registerdetail.companyaddress1\" #companyaddress1=\"ngModel\" name=\"companyaddress1\" id=\"companyaddress1\" placeholder=\"Address Line 1\">\n                                </div>\n                            </div>\n                            <div class=\"col-md-12  input-container-base nopadd\">\n                                <div class=\"col-md-6 input-container \">\n                                    <input type=\"text\" class=\"input-control\" [(ngModel)]=\"registerdetail.companyaddress2\" #companyaddress2=\"ngModel\" name=\"companyaddress2\" id=\"companyaddress2\" placeholder=\"Address Line 2 (Optional)\">\n\n                                </div>\n                                <div class=\"col-md-6 input-container\">\n                                    <input type=\"text\" class=\"input-control\" [(ngModel)]=\"registerdetail.companycity\" #companycity=\"ngModel\" name=\"companycity\" id=\"companycity\" placeholder=\"City\">\n\n                                </div>\n                            </div>\n\n\n                            <div class=\"col-md-12  input-container-base nopadd\">\n                                <div class=\"col-md-6 input-container \">\n                                    <input type=\"text\" class=\"input-control\" [(ngModel)]=\"registerdetail.companystate\" #companystate=\"ngModel\" name=\"companystate\" id=\"companystate\" placeholder=\"State/province\">\n                                </div>\n                                <div class=\"col-md-6 input-container\">\n                                    <input type=\"text\" class=\"input-control\" [(ngModel)]=\"registerdetail.companycountry\" #companycountry=\"ngModel\" name=\"companycountry\" id=\"companycountry\" placeholder=\"Country\">\n                                </div>\n                            </div>\n\n\n\n\n\n                            <div class=\"col-md-12 input-container-base\">\n                                <div class=\"col-md-12 login-btn-container nopadd\">\n                                    <button [disabled]=\"!registerForm.valid && registerdetail.accept\" type=\"submit\" class=\"themebtn\">REGISTER</button>\n                                </div>\n                            </div>\n\n\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n\n\n    <div *ngIf=\"view === 'forgetpassword'\" class=\"login-modal modal fade \" id=\"myModal\">\n        <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content col-md-12 nopadd\">\n                <div class=\"modal-body col-md-12 nopadd\">\n                    <form (ngSubmit)=\"onforgetpass(ForgetpassForm);\" #ForgetpassForm=\"ngForm\">\n                        <h4 class=\"login-title\">RESET PASSWORD</h4>\n                        <div class=\"col-md-12 login-modal-base\">\n                            <div class=\"col-md-12  input-container-base nopadd\">\n                                <div class=\"col-md-12input-container \">\n                                    <input type=\"email\" email required class=\"input-control login-email\" [(ngModel)]=\"resetdetail.email\" #email=\"ngModel\" name=\"email\" id=\"email\" placeholder=\"Email Address\">\n                                </div>\n                                <div class=\"invalid-feedback\">{{errormessage}}</div>\n\n                                <div *ngIf=\"email.touched && email.invalid\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"email.errors.required\">Email is required</div>\n                                    <div *ngIf=\"email.errors.email\">Email must be a valid email address</div>\n                                </div>\n                            </div>\n\n                            <div class=\"col-md-12  input-container-base \">\n                                <div class=\"col-md-12  login-btn-container nopadd\">\n                                    <button [disabled]=\"!ForgetpassForm.valid\" type=\"submit\" [class.disabled]=\"!ForgetpassForm.valid\" class=\"themebtn\">SUBMIT</button>\n                                </div>\n                            </div>\n\n\n\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n\n\n    <div *ngIf=\"view === 'emailverification'\" class=\"login-modal modal fade \" id=\"myModal\">\n        <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content col-md-12 nopadd\">\n                <div class=\"modal-body col-md-12 nopadd\">\n                    <p class=\"verificationtext\">\n                        Verification link has been sent to your email account. Please verify to login\n                    </p>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/cuserve/signup/signup.component.scss":
/*!******************************************************!*\
  !*** ./src/app/cuserve/signup/signup.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal {\n  display: block;\n  opacity: 1;\n  z-index: 3; }\n\n.disabled {\n  pointer-events: none;\n  opacity: .5; }\n\n.formtit {\n  float: left;\n  width: 100%;\n  font-weight: normal; }\n\n.iconclose {\n  cursor: pointer;\n  position: fixed;\n  right: 40px;\n  top: 10px;\n  z-index: 99;\n  color: #fff;\n  font-size: 30px; }\n\n.verificationtext {\n  float: left;\n  width: 100%;\n  padding: 40px;\n  font-size: 19px; }\n\n.imagePreview {\n  float: left;\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/cuserve/signup/signup.component.ts":
/*!****************************************************!*\
  !*** ./src/app/cuserve/signup/signup.component.ts ***!
  \****************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_share_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../providers/share.service */ "./src/app/providers/share.service.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants */ "./src/app/constants.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers */ "./src/app/providers/index.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SignupComponent = /** @class */ (function () {
    function SignupComponent(shareService, auth, messageService, router, elementRef, renderer) {
        this.shareService = shareService;
        this.auth = auth;
        this.messageService = messageService;
        this.router = router;
        this.userdetail = {};
        this.registerdetail = {};
        this.resetdetail = {};
        this.registerstep2 = false;
        this.uploadedFiles = [];
        this.filetoremove = [];
        // renderer.listen(elementRef.nativeElement, 'click', (event) => {
        //   event.srcElement.classList.contains('modal') ? this.shareService.setLoginModal(false) : null
        // });
        this.categorylist = [
            { label: 'Select Category', value: null },
            { label: 'Banking', value: 'banking' },
            { label: 'Telecom', value: 'telecom' },
            { label: 'Finance', value: 'finance' },
            { label: 'other', value: 'other' }
        ];
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.forgetForm = false;
        this.companylogoapi = _constants__WEBPACK_IMPORTED_MODULE_2__["constants"].uploadcompanylogo;
        this.settinglogin();
    };
    SignupComponent.prototype.settinglogin = function () {
        if (localStorage.getItem('cuserveUserValue')) {
            var storeddata = JSON.parse(localStorage.getItem('cuserveUserValue'));
            this.userdetail = storeddata;
        }
    };
    SignupComponent.prototype.onRegister = function (val) {
        var _this = this;
        console.log(val);
        this.shareService.postData(_constants__WEBPACK_IMPORTED_MODULE_2__["constants"].userRegister, this.registerdetail).subscribe(function (res) {
            _this.view = 'emailverification';
            // this.messageService.add({ severity: 'success', summary: 'Sucess', detail: 'You have Sucessfull Register. Please Login using Email and password' });
            _this.removeUnusedFiles();
        }, function (err) {
            _this.errormessage = err.error.message;
            console.error(err, _this.errormessage);
        });
    };
    SignupComponent.prototype.onLogin = function () {
        var _this = this;
        console.log(this.userdetail);
        if (this.userdetail.remember) {
            console.log(this.userdetail.remember);
            localStorage.setItem('cuserveUserValue', JSON.stringify(this.userdetail));
        }
        else {
            localStorage.removeItem('cuserveUserValue');
        }
        this.shareService.postData(_constants__WEBPACK_IMPORTED_MODULE_2__["constants"].userLogin, this.userdetail).subscribe(function (res) {
            _this.auth.saveToken(res.user, res.token);
            _this.messageService.add({ severity: 'success', summary: 'Sucess', detail: 'You have Sucessfull Logged in' });
            _this.close();
            _this.router.navigateByUrl('/dashboard');
        }, function (err) {
            _this.errormessage = err.error.message;
            console.error(err, _this.errormessage);
        });
    };
    SignupComponent.prototype.onforgetpass = function () {
        var _this = this;
        this.shareService.postData(_constants__WEBPACK_IMPORTED_MODULE_2__["constants"].getcustomer + 'forgetpass', this.resetdetail).subscribe(function (res) {
            console.log(res);
            if (res['success']) {
                _this.messageService.add({ severity: 'success', summary: 'Sucess', detail: res['message'] });
                _this.close();
            }
            else {
                _this.errormessage = res['message'];
            }
        }, function (err) {
            _this.errormessage = err.error.message;
            console.error(err, _this.errormessage);
        });
    };
    // onUpload(ev){
    //   console.log(ev)
    //   for(let file of ev.files) {
    //     this.uploadedFiles.push(file);
    // }
    // }
    SignupComponent.prototype.onUpload = function (event, fieldname) {
        var response = JSON.parse(event.xhr.response);
        if (this.registerdetail[fieldname] === '' || this.registerdetail[fieldname] === undefined) {
            this.registerdetail[fieldname] = _constants__WEBPACK_IMPORTED_MODULE_2__["constants"].companyImagepath + response.file[0].filename;
        }
        else {
            this.filetoremove = this.filetoremove.concat([_constants__WEBPACK_IMPORTED_MODULE_2__["constants"].companyImagepath + this.registerdetail[fieldname]]);
            this.registerdetail[fieldname] = _constants__WEBPACK_IMPORTED_MODULE_2__["constants"].companyImagepath + response.file[0].filename;
        }
    };
    SignupComponent.prototype.checkemailvalidation = function (value, validation) {
        var _this = this;
        console.log(value, validation);
        if (validation) {
            this.shareService.postData(_constants__WEBPACK_IMPORTED_MODULE_2__["constants"].getcustomer + 'findcustomerexists', { email: value }).subscribe(function (res) {
                // console.log();
                _this.emailvalidate = res['exists'];
            });
        }
    };
    SignupComponent.prototype.viewImage = function (image) {
        console.log(image);
        this.previewImage = image;
    };
    SignupComponent.prototype.removeImage = function (id, fieldname) {
        this.registerdetail[fieldname] = '';
        this.previewImage = null;
        this.filetoremove = this.filetoremove.concat([_constants__WEBPACK_IMPORTED_MODULE_2__["constants"].companyImagepath + id]);
    };
    SignupComponent.prototype.removeUnusedFiles = function () {
        var _this = this;
        this.shareService.postData(_constants__WEBPACK_IMPORTED_MODULE_2__["constants"].deletefile, this.filetoremove).subscribe(function (result) {
            console.log(result['message']);
            _this.filetoremove = [];
        });
    };
    SignupComponent.prototype.close = function () {
        this.resetdetail = {};
        this.registerdetail = {};
        this.userdetail = {};
        this.shareService.setLoginModal(false);
        this.registerstep2 = false;
        this.settinglogin();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SignupComponent.prototype, "view", void 0);
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/cuserve/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/cuserve/signup/signup.component.scss")]
        }),
        __metadata("design:paramtypes", [_providers_share_service__WEBPACK_IMPORTED_MODULE_1__["ShareService"],
            _providers__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ })

}]);
//# sourceMappingURL=app-cuserve-cuserve-module.js.map