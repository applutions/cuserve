(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./../app/admin/admin.module": [
		"./src/app/admin/admin.module.ts",
		"android-companylist-module~app-admin-admin-module~app-cuserve-cuserve-module~billing-billing-module~~f5304fe1",
		"app-admin-admin-module"
	],
	"./../app/cuserve/cuserve.module": [
		"./src/app/cuserve/cuserve.module.ts",
		"android-companylist-module~app-admin-admin-module~app-cuserve-cuserve-module~billing-billing-module~~f5304fe1",
		"app-cuserve-cuserve-module"
	],
	"./android/companylist.module": [
		"./src/app/admin/android/companylist.module.ts",
		"android-companylist-module~app-admin-admin-module~app-cuserve-cuserve-module~billing-billing-module~~f5304fe1",
		"android-companylist-module"
	],
	"./billing/billing.module": [
		"./src/app/admin/billing/billing.module.ts",
		"android-companylist-module~app-admin-admin-module~app-cuserve-cuserve-module~billing-billing-module~~f5304fe1",
		"billing-billing-module"
	],
	"./dashboard/dashboard.module": [
		"./src/app/cuserve/dashboard/dashboard.module.ts",
		"android-companylist-module~app-admin-admin-module~app-cuserve-cuserve-module~billing-billing-module~~f5304fe1",
		"dashboard-dashboard-module"
	],
	"./request/request.module": [
		"./src/app/admin/request/request.module.ts",
		"android-companylist-module~app-admin-admin-module~app-cuserve-cuserve-module~billing-billing-module~~f5304fe1",
		"request-request-module"
	],
	"./subadmin/subadmin.module": [
		"./src/app/admin/subadmin/subadmin.module.ts",
		"android-companylist-module~app-admin-admin-module~app-cuserve-cuserve-module~billing-billing-module~~f5304fe1",
		"subadmin-subadmin-module"
	],
	"./users/users.module": [
		"./src/app/admin/users/users.module.ts",
		"android-companylist-module~app-admin-admin-module~app-cuserve-cuserve-module~billing-billing-module~~f5304fe1",
		"users-users-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.browser.module.ts":
/*!***************************************!*\
  !*** ./src/app/app.browser.module.ts ***!
  \***************************************/
/*! exports provided: AppBrowserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppBrowserModule", function() { return AppBrowserModule; });
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppBrowserModule = /** @class */ (function () {
    function AppBrowserModule() {
    }
    AppBrowserModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"].withServerTransition({ appId: 'app-root' }),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserTransferStateModule"],
                _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"],
            ]
        })
    ], AppBrowserModule);
    return AppBrowserModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(route, router) {
        this.route = route;
        this.router = router;
        this.title = 'Cuserve';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (e) { return e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["RoutesRecognized"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pairwise"])()).subscribe(function (e) {
            localStorage.setItem('previousurl', e[0].urlAfterRedirects);
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-toolkit/universal */ "./node_modules/@ng-toolkit/universal/fesm5/ng-toolkit-universal.js");
/* harmony import */ var _nguniversal_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nguniversal/common */ "./node_modules/@nguniversal/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _providers_intercept_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./providers/intercept.service */ "./src/app/providers/intercept.service.ts");
/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./providers */ "./src/app/providers/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./globals */ "./src/app/globals.ts");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/fesm5/ngx-permissions.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
                _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_0__["NgtUniversalModule"],
                _nguniversal_common__WEBPACK_IMPORTED_MODULE_1__["TransferHttpCacheModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                ngx_permissions__WEBPACK_IMPORTED_MODULE_12__["NgxPermissionsModule"].forRoot(),
                _app_routing__WEBPACK_IMPORTED_MODULE_5__["AppRouting"],
            ],
            providers: [
                _globals__WEBPACK_IMPORTED_MODULE_11__["Globals"],
                _providers__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"],
                _providers__WEBPACK_IMPORTED_MODULE_7__["AuthGuardService"],
                _providers__WEBPACK_IMPORTED_MODULE_7__["UserAuthGuardService"],
                _providers_intercept_service__WEBPACK_IMPORTED_MODULE_6__["InterceptService"],
                primeng_api__WEBPACK_IMPORTED_MODULE_10__["ConfirmationService"],
                primeng_api__WEBPACK_IMPORTED_MODULE_10__["MessageService"],
                _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"],
                _providers__WEBPACK_IMPORTED_MODULE_7__["RolesGuardService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"],
                    useClass: _providers_intercept_service__WEBPACK_IMPORTED_MODULE_6__["InterceptService"],
                    multi: true
                }
            ],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRouting", function() { return AppRouting; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
    {
        path: '',
        loadChildren: './../app/cuserve/cuserve.module#cuserveModule'
    },
    {
        path: 'home',
        loadChildren: './../app/cuserve/cuserve.module#cuserveModule'
    },
    {
        path: 'admin',
        loadChildren: './../app/admin/admin.module#AdminModule'
    },
];
var AppRouting = /** @class */ (function () {
    function AppRouting() {
    }
    AppRouting = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: []
        })
    ], AppRouting);
    return AppRouting;
}());



/***/ }),

/***/ "./src/app/globals.ts":
/*!****************************!*\
  !*** ./src/app/globals.ts ***!
  \****************************/
/*! exports provided: Globals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Globals", function() { return Globals; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Globals = /** @class */ (function () {
    function Globals() {
        this.totalAmount = 0;
        this.itemCount = 0;
    }
    Globals = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], Globals);
    return Globals;
}());



/***/ }),

/***/ "./src/app/providers/auth-guard.service.ts":
/*!*************************************************!*\
  !*** ./src/app/providers/auth-guard.service.ts ***!
  \*************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication.service */ "./src/app/providers/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (!this.auth.isLoggedIn('admin')) {
            this.router.navigateByUrl('/admin/login');
            return false;
        }
        return true;
    };
    AuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/providers/authentication.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/providers/authentication.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-toolkit/universal */ "./node_modules/@ng-toolkit/universal/fesm5/ng-toolkit-universal.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(window, localStorage, http, router) {
        this.window = window;
        this.localStorage = localStorage;
        this.http = http;
        this.router = router;
        this.isLogged = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
        this.userdetail = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
        this.$userdetail = this.userdetail.asObservable();
        this.admindetail = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
        this.$admindetail = this.admindetail.asObservable();
        this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]('default message');
        this.currentMessage = this.messageSource.asObservable();
    }
    AuthenticationService.prototype.saveToken = function (user, token) {
        if (user === 'customer') {
            this.localStorage.setItem('logged', user);
            this.localStorage.setItem('user-token', token);
            this.usertoken = token;
            this.changeState(true);
            this.localStorage.removeItem('admin-token');
            this.localStorage.removeItem('logged');
        }
        else if (user === 'admin') {
            this.localStorage.setItem('logged', user);
            this.localStorage.setItem('admin-token', token);
            this.admintoken = token;
            this.localStorage.removeItem('user-token');
            this.localStorage.removeItem('logged');
        }
    };
    AuthenticationService.prototype.getToken = function (type) {
        if (type === 'customer') {
            this.usertoken = this.localStorage.getItem('user-token');
            return this.usertoken;
        }
        if (type === 'admin') {
            this.admintoken = this.localStorage.getItem('admin-token');
            return this.admintoken;
        }
    };
    AuthenticationService.prototype.getExpiry = function (type) {
        var token = this.getToken(type);
        var payload;
        if (token) {
            payload = token.split('.')[1];
            payload = this.window.atob(payload);
            return JSON.parse(payload);
        }
        else {
            return null;
        }
    };
    AuthenticationService.prototype.getUser = function (type) {
        if (this.isLoggedIn) {
            this.userdetail.next(this.getExpiry(type));
            return this.getExpiry(type);
        }
        else {
            return false;
        }
    };
    AuthenticationService.prototype.isLoggedIn = function (type) {
        var user = this.getExpiry(type);
        if (user) {
            this.changeState(user.exp > Date.now() / 1000);
            return user.exp > Date.now() / 1000;
        }
        else {
            return false;
        }
    };
    AuthenticationService.prototype.getloginState = function (type) {
        this.getExpiry(type) ? this.changeState(this.getExpiry(type).exp > Date.now() / 1000) : this.changeState(false);
        return this.isLogged;
    };
    AuthenticationService.prototype.changeState = function (state) {
        this.isLogged.next(state);
    };
    AuthenticationService.prototype.customerlogout = function () {
        this.usertoken = '';
        this.localStorage.removeItem('user-token');
        this.localStorage.removeItem('logged');
        this.userdetail.next(null);
        this.router.navigateByUrl('/');
        this.changeState(false);
    };
    AuthenticationService.prototype.logout = function () {
        this.admintoken = '';
        this.localStorage.removeItem('admin-token');
        this.localStorage.removeItem('logged');
        this.router.navigateByUrl('/admin/login');
        localStorage.removeItem('adminroles');
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_0__["WINDOW"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_0__["LOCAL_STORAGE"])),
        __metadata("design:paramtypes", [Window, Object, _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/providers/header.service.ts":
/*!*********************************************!*\
  !*** ./src/app/providers/header.service.ts ***!
  \*********************************************/
/*! exports provided: HeaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderService", function() { return HeaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "./node_modules/rxjs-compat/_esm5/BehaviorSubject.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderService = /** @class */ (function () {
    function HeaderService() {
        this._billingcount = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
        this.billingcount$ = this._billingcount.asObservable();
        this._ivrcount = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
        this.ivrcount$ = this._ivrcount.asObservable();
    }
    HeaderService.prototype.setContent = function (data) {
        this._billingcount.next(data);
    };
    HeaderService.prototype.getdata = function () {
        return this.billingcount$;
    };
    HeaderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], HeaderService);
    return HeaderService;
}());



/***/ }),

/***/ "./src/app/providers/index.ts":
/*!************************************!*\
  !*** ./src/app/providers/index.ts ***!
  \************************************/
/*! exports provided: InterceptService, AuthenticationService, ShareService, UserAuthGuardService, AuthGuardService, RolesGuardService, HeaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _share_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./share.service */ "./src/app/providers/share.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShareService", function() { return _share_service__WEBPACK_IMPORTED_MODULE_0__["ShareService"]; });

/* harmony import */ var _intercept_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./intercept.service */ "./src/app/providers/intercept.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InterceptService", function() { return _intercept_service__WEBPACK_IMPORTED_MODULE_1__["InterceptService"]; });

/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication.service */ "./src/app/providers/authentication.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]; });

/* harmony import */ var _userauth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./userauth-guard.service */ "./src/app/providers/userauth-guard.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserAuthGuardService", function() { return _userauth_guard_service__WEBPACK_IMPORTED_MODULE_3__["UserAuthGuardService"]; });

/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth-guard.service */ "./src/app/providers/auth-guard.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return _auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]; });

/* harmony import */ var _roles_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./roles-guard.service */ "./src/app/providers/roles-guard.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RolesGuardService", function() { return _roles_guard_service__WEBPACK_IMPORTED_MODULE_5__["RolesGuardService"]; });

/* harmony import */ var _header_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header.service */ "./src/app/providers/header.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeaderService", function() { return _header_service__WEBPACK_IMPORTED_MODULE_6__["HeaderService"]; });










/***/ }),

/***/ "./src/app/providers/intercept.service.ts":
/*!************************************************!*\
  !*** ./src/app/providers/intercept.service.ts ***!
  \************************************************/
/*! exports provided: InterceptService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterceptService", function() { return InterceptService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication.service */ "./src/app/providers/authentication.service.ts");
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





var InterceptService = /** @class */ (function () {
    function InterceptService(auth, messageService) {
        this.auth = auth;
        this.messageService = messageService;
    }
    InterceptService.prototype.intercept = function (request, next) {
        var _this = this;
        request = request.clone({
            setHeaders: {
                Authorization: "Bearer " + this.auth.getToken('user')
            }
        });
        return next.handle(request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                // console.log(event);
            }
        }, function (error) {
            var errormessage;
            error.error.message ? errormessage = error.error.message : errormessage = error.message;
            _this.messageService.add({ severity: 'error', summary: error.status + ' -' + error.statusText, detail: errormessage });
        }));
    };
    ;
    InterceptService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])() // {providedIn: 'root'}
        ,
        __metadata("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"], primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"]])
    ], InterceptService);
    return InterceptService;
}());



/***/ }),

/***/ "./src/app/providers/roles-guard.service.ts":
/*!**************************************************!*\
  !*** ./src/app/providers/roles-guard.service.ts ***!
  \**************************************************/
/*! exports provided: RolesGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesGuardService", function() { return RolesGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication.service */ "./src/app/providers/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RolesGuardService = /** @class */ (function () {
    function RolesGuardService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    RolesGuardService.prototype.canActivate = function (route, state) {
        var roles = route && route.data["roles"] && route.data["roles"].length > 0 ? route.data["roles"] : null;
        var userpermission = localStorage.getItem('adminroles') ? JSON.parse(localStorage.getItem('adminroles')) : null;
        if (userpermission.includes(roles[0])) {
            return true;
        }
        return false;
    };
    RolesGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RolesGuardService);
    return RolesGuardService;
}());



/***/ }),

/***/ "./src/app/providers/share.service.ts":
/*!********************************************!*\
  !*** ./src/app/providers/share.service.ts ***!
  \********************************************/
/*! exports provided: ShareService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareService", function() { return ShareService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication.service */ "./src/app/providers/authentication.service.ts");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ShareService = /** @class */ (function () {
    function ShareService(http, auth) {
        this.http = http;
        this.auth = auth;
        this.loginDisplay = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    ShareService.prototype.getData = function (url) {
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            return data;
        }));
    };
    ShareService.prototype.postData = function (url, data) {
        return this.http.post(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            return data;
        }));
    };
    ShareService.prototype.update = function (url, data) {
        console.log(url + "====" + data);
        return this.http.put(url, data);
    };
    ShareService.prototype.delete = function (url) {
        return this.http.delete(url);
    };
    ShareService.prototype.getLoginModal = function () {
        return this.loginDisplay.asObservable();
    };
    ShareService.prototype.setLoginModal = function (val) {
        val ? document.body.classList.add('modalopen') : document.body.classList.remove('modalopen');
        this.loginDisplay.next(val);
    };
    ShareService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], ShareService);
    return ShareService;
}());



/***/ }),

/***/ "./src/app/providers/userauth-guard.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/providers/userauth-guard.service.ts ***!
  \*****************************************************/
/*! exports provided: UserAuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAuthGuardService", function() { return UserAuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication.service */ "./src/app/providers/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserAuthGuardService = /** @class */ (function () {
    function UserAuthGuardService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    UserAuthGuardService.prototype.canActivate = function () {
        if (!this.auth.isLoggedIn('customer')) {
            this.router.navigateByUrl('/home');
            return false;
        }
        return true;
    };
    UserAuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], UserAuthGuardService);
    return UserAuthGuardService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_app_app_browser_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .././src/app/app.browser.module */ "./src/app/app.browser.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
document.addEventListener('DOMContentLoaded', function () {
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])()
        .bootstrapModule(_src_app_app_browser_module__WEBPACK_IMPORTED_MODULE_0__["AppBrowserModule"])
        .catch(function (err) { return console.log(err); });
});


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ajmal/Desktop/playground/Cuservmod2frontend/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map