(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["subadmin-subadmin-module"],{

/***/ "./src/app/admin/subadmin/addroles/addroles.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/admin/subadmin/addroles/addroles.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12    billhist-base ivr-base nopadd\">\n    <div class=\"col-md-12    billhist-generatebill text-right nopadd\">\n        <h2 class=\"main-title\">Add Roles</h2>\n    </div>\n    <div class=\"col-md-12 col-sm-12 col-xs-12 col-lg-12 searchbar-container nopadd\">\n\n        <div class=\"col-md-12 col-sm-12 col-xs-12 col-lg-12 billhist-generatebill text-right nopadd\">\n\n            <div class=\"theme-table\">\n                <form (ngSubmit)=\"addprivilage(addprivilageForm);\" #addprivilageForm=\"ngForm\">\n\n                    <div class=\"col-md-12 login-modal-base\">\n                        <div class=\"col-md-12  input-container-base nopadd\">\n                            <div class=\"col-md-12input-container \">\n                                <input type=\"text\" required class=\"input-control\" [(ngModel)]=\"roles.name\" #name=\"ngModel\" name=\"name\" id=\"name\" placeholder=\"Roles Name\">\n                            </div>\n                        </div>\n\n                        <table ngModelGroup=\"privilege\" class=\"table\">\n                            <thead>\n                                <tr>\n                                    <th>PAGES</th>\n                                    <th>ADD</th>\n                                    <th>VIEW</th>\n                                    <th>EDIT</th>\n                                    <th>DELETE</th>\n                                </tr>\n                            </thead>\n\n                            <tbody>\n                                <tr>\n                                    <td>Users</td>\n                                    <td>\n                                        <p-checkbox name=\"userlist\" value=\"add\" [(ngModel)]=\"roles.userlist\" #userlist=\"ngModel\" name=\"userlist\"></p-checkbox>\n                                    </td>\n                                    <td>\n                                        <p-checkbox name=\"userlist\" value=\"view\" [(ngModel)]=\"roles.userlist\" #userlist=\"ngModel\" name=\"userlist\"></p-checkbox>\n                                    </td>\n                                    <td>\n                                        <p-checkbox name=\"userlist\" value=\"edit\" [(ngModel)]=\"roles.userlist\" #userlist=\"ngModel\" name=\"userlist\"></p-checkbox>\n                                    </td>\n                                    <td>\n                                        <p-checkbox name=\"userlist\" value=\"delete\" [(ngModel)]=\"roles.userlist\" #userlist=\"ngModel\" name=\"userlist\"></p-checkbox>\n                                    </td>\n                                </tr>\n\n                                <tr>\n                                    <td>IVR</td>\n                                    <td>\n                                        <p-checkbox name=\"ivrlist\" value=\"add\" [(ngModel)]=\"roles.ivrlist\" #ivrlist=\"ngModel\" name=\"ivrlist\"></p-checkbox>\n                                    </td>\n                                    <td>\n                                        <p-checkbox name=\"ivrlist\" value=\"view\" [(ngModel)]=\"roles.ivrlist\" #ivrlist=\"ngModel\" name=\"ivrlist\"></p-checkbox>\n                                    </td>\n                                    <td>\n                                        <p-checkbox name=\"ivrlist\" value=\"edit\" [(ngModel)]=\"roles.ivrlist\" #ivrlist=\"ngModel\" name=\"ivrlist\"></p-checkbox>\n                                    </td>\n                                    <td>\n                                        <p-checkbox name=\"ivrlist\" value=\"delete\" [(ngModel)]=\"roles.ivrlist\" #ivrlist=\"ngModel\" name=\"ivrlist\"></p-checkbox>\n                                    </td>\n                                </tr>\n\n\n                                <tr>\n                                    <td>Billing</td>\n                                    <td>\n                                        <p-checkbox name=\"billing\" value=\"add\" [(ngModel)]=\"roles.billing\" #billing=\"ngModel\" name=\"billing\"></p-checkbox>\n                                    </td>\n                                    <td>\n                                        <p-checkbox name=\"billing\" value=\"view\" [(ngModel)]=\"roles.billing\" #billing=\"ngModel\" name=\"billing\"></p-checkbox>\n                                    </td>\n                                    <td>\n                                        <p-checkbox name=\"billing\" value=\"edit\" [(ngModel)]=\"roles.billing\" #billing=\"ngModel\" name=\"billing\"></p-checkbox>\n                                    </td>\n                                    <td>\n                                        <p-checkbox name=\"billing\" value=\"delete\" [(ngModel)]=\"roles.billing\" #billing=\"ngModel\" name=\"billing\"></p-checkbox>\n                                    </td>\n                                </tr>\n\n                                <tr>\n                                    <td>Request</td>\n                                    <td>\n                                        <p-checkbox name=\"request\" value=\"add\" [(ngModel)]=\"roles.request\" #request=\"ngModel\" name=\"request\"></p-checkbox>\n                                    </td>\n                                    <td>\n                                        <p-checkbox name=\"request\" value=\"view\" [(ngModel)]=\"roles.request\" #request=\"ngModel\" name=\"request\"></p-checkbox>\n                                    </td>\n                                    <td>\n                                        <p-checkbox name=\"request\" value=\"edit\" [(ngModel)]=\"roles.request\" #request=\"ngModel\" name=\"request\"></p-checkbox>\n                                    </td>\n                                    <td>\n                                        <p-checkbox name=\"request\" value=\"delete\" [(ngModel)]=\"roles.request\" #request=\"ngModel\" name=\"request\"></p-checkbox>\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n\n                        <button type=\"submit\" class=\"btn themebtn\">Submit</button>\n\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/subadmin/addroles/addroles.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/admin/subadmin/addroles/addroles.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".searchbar-container {\n  margin-top: 0; }\n"

/***/ }),

/***/ "./src/app/admin/subadmin/addroles/addroles.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/admin/subadmin/addroles/addroles.component.ts ***!
  \***************************************************************/
/*! exports provided: AddrolesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddrolesComponent", function() { return AddrolesComponent; });
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

var AddrolesComponent = /** @class */ (function () {
    function AddrolesComponent() {
        this.roles = {};
    }
    AddrolesComponent.prototype.ngOnInit = function () {
    };
    AddrolesComponent.prototype.submitroles = function () { };
    AddrolesComponent.prototype.addprivilage = function (val) {
        console.log(val);
    };
    AddrolesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-addroles',
            template: __webpack_require__(/*! ./addroles.component.html */ "./src/app/admin/subadmin/addroles/addroles.component.html"),
            styles: [__webpack_require__(/*! ./addroles.component.scss */ "./src/app/admin/subadmin/addroles/addroles.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AddrolesComponent);
    return AddrolesComponent;
}());



/***/ }),

/***/ "./src/app/admin/subadmin/roleslist/roleslist.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/admin/subadmin/roleslist/roleslist.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumb-base col-md-12 col-sm-12 col-lg-12 col-xs-12\">\n    <ul class=\"breadcrumb\">\n        <li><a routerLink=\"/admin/subadmin\">SubAdmin List</a></li>\n        <li><a> Roles List  </a></li>\n    </ul>\n</div>\n\n<div class=\"col-md-12 col-sm-12 col-xs-12 col-lg-12 billhist-base ivr-base nopadd\">\n    <div class=\"col-md-12 col-sm-12 col-xs-12 col-lg-12 billhist-generatebill text-right nopadd\">\n        <h2 class=\"main-title\">Roles Lists</h2>\n    </div>\n    <div class=\"col-md-12 col-sm-12 col-xs-12 col-lg-12 searchbar-container nopadd\">\n        <input style=\"margin: 0 0 30px 0\" type=\"text\" (input)=\"dt.filterGlobal($event.target.value, 'contains')\" class=\"searchbar\" placeholder=\"Search\">\n        <div class=\"col-md-12 col-sm-12 col-xs-12 col-lg-12 billhist-generatebill text-right nopadd\">\n            <a (click)=\"privilagevisible = true\" class=\"themebtn1\"><span class=\"plus-icon-bill\">+</span>CREATE ROLES</a>\n        </div>\n        <div class=\"col-md-12 col-sm-12 col-xs-12 col-lg-12 billhist-generatebill text-right nopadd\">\n\n            <div class=\"theme-table\">\n\n                <p-table *ngIf=\"datasource\" class=\"table table-striped\" #dt [columns]=\"cols\" [value]=\"datasource\" [paginator]=\"true\" [rows]=\"10\" [totalRecords]=\"totalRecords\">\n                    <ng-template pTemplate=\"header\" let-columns>\n                        <tr>\n                            <th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\">\n                                {{col.header}}\n                            </th>\n\n                            <th>\n                                Action\n                            </th>\n                            <th></th>\n                        </tr>\n                    </ng-template>\n                    <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n                        <tr>\n                            <td>{{rowData.rolename}}</td>\n\n                            <td>\n                                <p> <a [class.disabled]=\"rowData.rolename == 'Admin'\" (click)=\"editprivilage(rowData)\" class=\"custom-red\">Edit Privilages</a></p>\n                            </td>\n\n                            <td>\n                                <p> <a [class.disabled]=\"rowData.rolename == 'Admin'\" (click)=\"deletedprivilage(rowData._id)\" class=\"custom-red\">Delete Privilages</a></p>\n                            </td>\n                        </tr>\n                    </ng-template>\n                </p-table>\n\n\n            </div>\n        </div>\n    </div>\n\n</div>\n\n<div class=\"overlay\" *ngIf=\"privilagevisible\"></div>\n\n<p-dialog appendTo=\"body\" [(visible)]=\"privilagevisible\">\n    <p-header>\n        Privilage\n    </p-header>\n    <form (ngSubmit)=\"onSubmitprivilage(subadminsForm);\" #subadminsForm=\"ngForm\">\n        <div class=\"formgrop\">\n            <label>Role Name</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"privilage.rolename\" #rolename=\"ngModel\" name=\"rolename\">\n        </div>\n        <table class=\"privtable\">\n            <thead>\n                <tr>\n                    <th>\n                        <label>Privilages</label>\n                    </th>\n                    <th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <p-checkbox name=\"privilages\" value=\"View_Users_List\" label=\"Users List\" [(ngModel)]=\"privilage.privilages\" #privilages=\"ngModel\" name=\"privilages\"></p-checkbox>\n                </tr>\n                <tr>\n                    <p-checkbox name=\"privilages\" value=\"View_Billing_List\" label=\"Billing List\" [(ngModel)]=\"privilage.privilages\" #privilages=\"ngModel\" name=\"privilages\"></p-checkbox>\n                </tr>\n                <tr>\n                    <p-checkbox name=\"privilages\" value=\"View_Request_List\" label=\"Request List\" [(ngModel)]=\"privilage.privilages\" #privilages=\"ngModel\" name=\"privilages\"></p-checkbox>\n                </tr>\n                <tr>\n                    <p-checkbox name=\"privilages\" value=\"View_Android_List\" label=\"Android List\" [(ngModel)]=\"privilage.privilages\" #privilages=\"ngModel\" name=\"privilages\"></p-checkbox>\n                </tr>\n                <tr>\n                    <p-checkbox name=\"privilages\" value=\"View_subadmin_List\" label=\"Create Subadmin\" [(ngModel)]=\"privilage.privilages\" #privilages=\"ngModel\" name=\"privilages\"></p-checkbox>\n                </tr>\n\n            </tbody>\n        </table>\n        <button class=\"btn themebtn btn-primary\" type=\"submit\">Submit</button>\n    </form>\n</p-dialog>"

/***/ }),

/***/ "./src/app/admin/subadmin/roleslist/roleslist.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/admin/subadmin/roleslist/roleslist.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".privtable {\n  margin: 20px 0 20px 0;\n  float: left;\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/admin/subadmin/roleslist/roleslist.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/admin/subadmin/roleslist/roleslist.component.ts ***!
  \*****************************************************************/
/*! exports provided: RoleslistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleslistComponent", function() { return RoleslistComponent; });
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





var RoleslistComponent = /** @class */ (function () {
    function RoleslistComponent(http, shareService, confirmationService, messageService) {
        this.http = http;
        this.shareService = shareService;
        this.confirmationService = confirmationService;
        this.messageService = messageService;
        this.privilage = {};
        this.activepagination = 0;
    }
    RoleslistComponent.prototype.ngOnInit = function () {
        this.getData();
        this.cols = [
            { field: 'rolename', header: 'Roles' },
        ];
        sessionStorage.getItem('activeivrpagination') ? this.activepagination = JSON.parse(sessionStorage.getItem('activeivrpagination')) : null;
    };
    RoleslistComponent.prototype.pagechange = function (ev) {
        sessionStorage.setItem('activeivrpagination', ev.first);
    };
    RoleslistComponent.prototype.getData = function () {
        var _this = this;
        this.shareService.getData(_constants__WEBPACK_IMPORTED_MODULE_3__["constants"].roles).subscribe(function (res) {
            _this.datasource = res['roles'];
            _this.totalRecords = _this.datasource.length;
        });
    };
    RoleslistComponent.prototype.onSubmitprivilage = function (val) {
        var _this = this;
        if (this.editview) {
            console.log('in');
            this.shareService.update(_constants__WEBPACK_IMPORTED_MODULE_3__["constants"].roles, this.privilage).subscribe(function (res) {
                _this.messageService.add({ severity: 'success', summary: 'Success Message', detail: res['message'] });
                _this.privilagevisible = false;
                _this.privilage = {};
            });
        }
        else {
            this.shareService.postData(_constants__WEBPACK_IMPORTED_MODULE_3__["constants"].roles, val.value).subscribe(function (res) {
                _this.messageService.add({ severity: 'success', summary: 'Success Message', detail: res['message'] });
                _this.privilagevisible = false;
                _this.privilage = {};
            });
        }
        this.editview = false;
        this.getData();
    };
    RoleslistComponent.prototype.deletedprivilage = function (id) {
        var _this = this;
        this.confirmationService.confirm({
            message: 'Do you want to delete this?',
            accept: function () {
                _this.shareService.delete(_constants__WEBPACK_IMPORTED_MODULE_3__["constants"].roles + id).subscribe(function (res) {
                    _this.messageService.add({ severity: 'success', summary: 'Success Message', detail: res['message'] });
                    _this.privilagevisible = false;
                    _this.privilage = {};
                    _this.getData();
                });
            }
        });
    };
    RoleslistComponent.prototype.editprivilage = function (data) {
        this.privilage = data;
        this.privilagevisible = true;
        this.editview = true;
    };
    RoleslistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-roleslist',
            template: __webpack_require__(/*! ./roleslist.component.html */ "./src/app/admin/subadmin/roleslist/roleslist.component.html"),
            styles: [__webpack_require__(/*! ./roleslist.component.scss */ "./src/app/admin/subadmin/roleslist/roleslist.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _providers__WEBPACK_IMPORTED_MODULE_2__["ShareService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_4__["ConfirmationService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"]])
    ], RoleslistComponent);
    return RoleslistComponent;
}());



/***/ }),

/***/ "./src/app/admin/subadmin/subadmin.module.ts":
/*!***************************************************!*\
  !*** ./src/app/admin/subadmin/subadmin.module.ts ***!
  \***************************************************/
/*! exports provided: SubadminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubadminModule", function() { return SubadminModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _subadminlanding_subadminlanding_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subadminlanding/subadminlanding.component */ "./src/app/admin/subadmin/subadminlanding/subadminlanding.component.ts");
/* harmony import */ var _subadminlist_subadminlist_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subadminlist/subadminlist.component */ "./src/app/admin/subadmin/subadminlist/subadminlist.component.ts");
/* harmony import */ var _roleslist_roleslist_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./roleslist/roleslist.component */ "./src/app/admin/subadmin/roleslist/roleslist.component.ts");
/* harmony import */ var _subadmin_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subadmin.routing */ "./src/app/admin/subadmin/subadmin.routing.ts");
/* harmony import */ var _share_share_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../share/share.module */ "./src/app/share/share.module.ts");
/* harmony import */ var _addroles_addroles_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./addroles/addroles.component */ "./src/app/admin/subadmin/addroles/addroles.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var SubadminModule = /** @class */ (function () {
    function SubadminModule() {
    }
    SubadminModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _share_share_module__WEBPACK_IMPORTED_MODULE_6__["ShareModule"],
                _subadmin_routing__WEBPACK_IMPORTED_MODULE_5__["SubAdminRouting"]
            ],
            declarations: [
                _subadminlanding_subadminlanding_component__WEBPACK_IMPORTED_MODULE_2__["SubadminlandingComponent"],
                _subadminlist_subadminlist_component__WEBPACK_IMPORTED_MODULE_3__["SubadminlistComponent"],
                _roleslist_roleslist_component__WEBPACK_IMPORTED_MODULE_4__["RoleslistComponent"],
                _addroles_addroles_component__WEBPACK_IMPORTED_MODULE_7__["AddrolesComponent"]
            ]
        })
    ], SubadminModule);
    return SubadminModule;
}());



/***/ }),

/***/ "./src/app/admin/subadmin/subadmin.routing.ts":
/*!****************************************************!*\
  !*** ./src/app/admin/subadmin/subadmin.routing.ts ***!
  \****************************************************/
/*! exports provided: SubAdminRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubAdminRouting", function() { return SubAdminRouting; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _subadminlanding_subadminlanding_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subadminlanding/subadminlanding.component */ "./src/app/admin/subadmin/subadminlanding/subadminlanding.component.ts");
/* harmony import */ var _subadminlist_subadminlist_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subadminlist/subadminlist.component */ "./src/app/admin/subadmin/subadminlist/subadminlist.component.ts");
/* harmony import */ var _roleslist_roleslist_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./roleslist/roleslist.component */ "./src/app/admin/subadmin/roleslist/roleslist.component.ts");
/* harmony import */ var _addroles_addroles_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addroles/addroles.component */ "./src/app/admin/subadmin/addroles/addroles.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






//  canActivate: [AuthGuardService],
var routes = [
    {
        path: '', component: _subadminlanding_subadminlanding_component__WEBPACK_IMPORTED_MODULE_2__["SubadminlandingComponent"],
        children: [
            { path: '', component: _subadminlist_subadminlist_component__WEBPACK_IMPORTED_MODULE_3__["SubadminlistComponent"] },
            { path: 'roles', component: _roleslist_roleslist_component__WEBPACK_IMPORTED_MODULE_4__["RoleslistComponent"] },
            { path: 'addroles', component: _addroles_addroles_component__WEBPACK_IMPORTED_MODULE_5__["AddrolesComponent"] },
        ]
    }
];
var SubAdminRouting = /** @class */ (function () {
    function SubAdminRouting() {
    }
    SubAdminRouting = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)]
        })
    ], SubAdminRouting);
    return SubAdminRouting;
}());



/***/ }),

/***/ "./src/app/admin/subadmin/subadminlanding/subadminlanding.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/admin/subadmin/subadminlanding/subadminlanding.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/admin/subadmin/subadminlanding/subadminlanding.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/admin/subadmin/subadminlanding/subadminlanding.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/subadmin/subadminlanding/subadminlanding.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/admin/subadmin/subadminlanding/subadminlanding.component.ts ***!
  \*****************************************************************************/
/*! exports provided: SubadminlandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubadminlandingComponent", function() { return SubadminlandingComponent; });
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

var SubadminlandingComponent = /** @class */ (function () {
    function SubadminlandingComponent() {
    }
    SubadminlandingComponent.prototype.ngOnInit = function () {
    };
    SubadminlandingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-subadminlanding',
            template: __webpack_require__(/*! ./subadminlanding.component.html */ "./src/app/admin/subadmin/subadminlanding/subadminlanding.component.html"),
            styles: [__webpack_require__(/*! ./subadminlanding.component.scss */ "./src/app/admin/subadmin/subadminlanding/subadminlanding.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SubadminlandingComponent);
    return SubadminlandingComponent;
}());



/***/ }),

/***/ "./src/app/admin/subadmin/subadminlist/subadminlist.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/admin/subadmin/subadminlist/subadminlist.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 col-sm-12 col-xs-12 col-lg-12 billhist-base ivr-base nopadd\">\n    <div class=\"col-md-12 col-sm-12 col-xs-12 col-lg-12 billhist-generatebill text-right nopadd\">\n        <h2 class=\"main-title\">SubAdmin Lists</h2>\n    </div>\n    <div class=\"col-md-12 col-sm-12 col-xs-12 col-lg-12 searchbar-container nopadd\">\n        <input type=\"text\" (input)=\"ds.filterGlobal($event.target.value, 'contains')\" class=\"searchbar\" placeholder=\"Search\">\n        <div class=\"col-md-12 col-sm-12 col-xs-12 col-lg-12 billhist-generatebill text-right nopadd\">\n            <a routerLink=\"/admin/subadmin/roles\" class=\"themebtn1\"><span class=\"plus-icon-bill\">+</span>ADD NEW ROLES</a>\n\n            <a (click)=\"showDialog(null)\" class=\"themebtn1\"><span class=\"plus-icon-bill\">+</span>CREATE USER</a>\n        </div>\n        <div class=\"col-md-12 col-sm-12 col-xs-12 col-lg-12 billhist-generatebill text-right nopadd\">\n\n            <div class=\"theme-table\">\n\n                <p-table *ngIf=\"datasource\" class=\"table table-striped\" #ds [columns]=\"cols\" [value]=\"datasource\" [paginator]=\"true\" [rows]=\"10\" [totalRecords]=\"totalRecords\">\n                    <ng-template pTemplate=\"header\" let-columns>\n                        <tr>\n                            <th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\">\n                                {{col.header}}\n                            </th>\n\n                            <th style=\"width: 195px\">\n                                Action\n                            </th>\n                        </tr>\n                    </ng-template>\n                    <ng-template pTemplate=\"body\" let-rowData let-rowIndex=\"rowIndex\" let-columns=\"columns\">\n                        <tr>\n                            <td>{{rowData.name}}</td>\n\n                            <td>{{rowData.email}}</td>\n\n                            <td>{{rowData.createdAt | date :'dd.MM.yyyy'}}</td>\n                            <td>{{rowData.role.rolename}}</td>\n                            <td>\n                                <div *ngIf=\"rowData.role.rolename !== 'Admin'\">\n                                    <p> <a (click)=\"onDeleteCoupon(rowData , rowIndex)\" class=\"custom-red\">Delete</a>\n                                        <a (click)=\"showDialog(rowData)\" class=\"custom-red\">Edit</a></p>\n\n                                </div>\n                            </td>\n                        </tr>\n                    </ng-template>\n                </p-table>\n\n\n            </div>\n        </div>\n    </div>\n\n</div>\n\n\n<div class=\"overlay\" *ngIf=\"display\"></div>\n<p-dialog appendTo=\"body\" [(visible)]=\"display\">\n    <p-header>\n        Subadmin\n    </p-header>\n    <form (ngSubmit)=\"onSubmitCoupon(subadminsForm);\" #subadminsForm=\"ngForm\">\n        <div class=\"form-group bannerGroup\">\n            <label>Name:</label>\n            <input type=\"text\" [(ngModel)]=\"subadmins.name\" #name=\"ngModel\" class=\"form-control\" name=\"name\" id=\"name\" required />\n        </div>\n        <div class=\"form-group\">\n            <label>Email:</label>\n            <input type=\"email\" [(ngModel)]=\"subadmins.email\" #email=\"ngModel\" class=\"form-control\" name=\"email\" id=\"email\" required />\n        </div>\n        <div class=\"form-group\">\n            <label>Password:</label>\n            <input type=\"password\" [(ngModel)]=\"subadmins.password\" #password=\"ngModel\" class=\"form-control\" name=\"password\" id=\"password\" required />\n        </div>\n\n        <div class=\"form-group\">\n            <label>Roles:</label>\n            <p-dropdown #dd [options]=\"roleslist\" class=\"input-control\" [(ngModel)]=\"subadmins.role\" #role=\"ngModel\" name=\"role\" id=\"role\" required></p-dropdown>\n        </div>\n        <button type=\"submit\" [disabled]=\"!subadminsForm.form.valid\" class=\"btn btn-success themebtn btn-block\">Submit</button>\n    </form>\n</p-dialog>"

/***/ }),

/***/ "./src/app/admin/subadmin/subadminlist/subadminlist.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/admin/subadmin/subadminlist/subadminlist.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input.searchbar {\n  margin: 0 0 40px 0; }\n\na.themebtn1 {\n  margin: 0 0 0 10px; }\n"

/***/ }),

/***/ "./src/app/admin/subadmin/subadminlist/subadminlist.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/admin/subadmin/subadminlist/subadminlist.component.ts ***!
  \***********************************************************************/
/*! exports provided: SubadminlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubadminlistComponent", function() { return SubadminlistComponent; });
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





var SubadminlistComponent = /** @class */ (function () {
    function SubadminlistComponent(http, shareService, confirmationService, messageService) {
        this.http = http;
        this.shareService = shareService;
        this.confirmationService = confirmationService;
        this.messageService = messageService;
        this.activepagination = 0;
        this.subadmins = {};
        this.roleslist = [];
    }
    SubadminlistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cols = [
            { field: 'name', header: 'Name' },
            { field: 'email', header: 'Email Address' },
            { field: 'createdAt', header: 'Created' },
            { field: 'role', header: 'Roles' },
        ];
        this.roleslist = [
            { label: 'Select Roles', value: null }
        ];
        this.shareService.getData(_constants__WEBPACK_IMPORTED_MODULE_3__["constants"].roles).subscribe(function (res) {
            res['roles'].forEach(function (element) {
                if (element.rolename != 'Admin') {
                    _this.roleslist = _this.roleslist.concat([{ label: element.rolename, value: element._id }]);
                }
            });
        });
        this.getsubadmin();
        sessionStorage.getItem('activeivrpagination') ? this.activepagination = JSON.parse(sessionStorage.getItem('activeivrpagination')) : null;
    };
    SubadminlistComponent.prototype.pagechange = function (ev) {
        sessionStorage.setItem('activeivrpagination', ev.first);
    };
    SubadminlistComponent.prototype.getsubadmin = function () {
        var _this = this;
        this.shareService.getData(_constants__WEBPACK_IMPORTED_MODULE_3__["constants"].getusers).subscribe(function (res) {
            _this.datasource = res['data'];
            console.log(_this.datasource, res);
            _this.totalRecords = _this.datasource.length;
        });
    };
    SubadminlistComponent.prototype.showDialog = function (data) {
        if (data) {
            this.subadmins = data;
        }
        else {
            this.subadmins = {};
        }
        this.display = true;
    };
    SubadminlistComponent.prototype.onSubmitCoupon = function (_a) {
        var value = _a.value;
        var data = this.subadmins;
        this.display = false;
        if (data._id) {
            this.updatesubadmin(data);
        }
        else {
            this.addsubadmin(data);
        }
    };
    SubadminlistComponent.prototype.addsubadmin = function (_a) {
        var _this = this;
        var value = _a.value;
        var data = this.subadmins;
        this.display = false;
        this.shareService.postData(_constants__WEBPACK_IMPORTED_MODULE_3__["constants"].register, data).subscribe(function (res) {
            _this.getsubadmin();
            _this.messageService.add({ severity: 'sucess', summary: 'Sucess Message', detail: 'Added Sucessfuly' });
        });
    };
    SubadminlistComponent.prototype.updatesubadmin = function (data) {
        var _this = this;
        this.shareService.update(_constants__WEBPACK_IMPORTED_MODULE_3__["constants"].getusers, data).subscribe(function (res) {
            _this.messageService.add({ severity: 'sucess', summary: 'Sucess Message', detail: 'Updated Sucessfuly' });
        });
    };
    SubadminlistComponent.prototype.onDeleteCoupon = function (val, i) {
        var _this = this;
        console.log(val._id, i);
        this.shareService.delete(_constants__WEBPACK_IMPORTED_MODULE_3__["constants"].getusers + val._id).subscribe(function (res) {
            var index = i;
            _this.datasource = _this.datasource.filter(function (data, i) { return i !== index; });
            _this.messageService.add({ severity: 'sucess', summary: 'Sucess Message', detail: 'Deleted Sucessfuly' });
        });
    };
    SubadminlistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-subadminlist',
            template: __webpack_require__(/*! ./subadminlist.component.html */ "./src/app/admin/subadmin/subadminlist/subadminlist.component.html"),
            styles: [__webpack_require__(/*! ./subadminlist.component.scss */ "./src/app/admin/subadmin/subadminlist/subadminlist.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _providers__WEBPACK_IMPORTED_MODULE_2__["ShareService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_4__["ConfirmationService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"]])
    ], SubadminlistComponent);
    return SubadminlistComponent;
}());



/***/ })

}]);
//# sourceMappingURL=subadmin-subadmin-module.js.map