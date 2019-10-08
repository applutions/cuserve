(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["android-companylist-module"],{

/***/ "./src/app/admin/android/addcompany/addcompany.component.html":
/*!********************************************************************!*\
  !*** ./src/app/admin/android/addcompany/addcompany.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumb-base col-md-12 col-sm-12 col-lg-12 col-xs-12\">\n    <ul class=\"breadcrumb\">\n        <li><a routerLink=\"/admin/android\">Android List</a></li>\n        <li><a>Add Company  </a></li>\n    </ul>\n</div>\n<div class=\"tab-content\">\n    <div role=\"tabpanel\" class=\"tab-pane active\" id=\"user\">\n        <div class=\"col-md-12  myaccount-base\">\n            <h2 class=\"main-title\"> Add Company</h2>\n            <div class=\"col-md-12  myaccount-inner\">\n\n                <div class=\"tab-content\">\n                    <form (ngSubmit)=\"onSubmitForm(registerForm);\" #registerForm=\"ngForm\">\n                        <div class=\"col-md-12  account-section-input\">\n                            <div class=\"col-md-12    account-section-input-inner\">\n                                <h3 class=\"sub-title\">Company Details</h3>\n                                <div class=\"col-md-12  input-container-base nopadd\">\n                                    <div class=\"col-md-6 input-container \">\n                                        <input type=\"text\" required class=\"input-control\" [(ngModel)]=\"register.name\" #name=\"ngModel\" name=\"name\" id=\"name\" placeholder=\"Name\">\n                                        <div *ngIf=\"name.touched && name.invalid\" class=\"invalid-feedback\">\n                                            <div *ngIf=\"name.errors.required\">Name is required</div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-6 input-container\">\n                                        <input type=\"text\" required class=\"input-control\" [(ngModel)]=\"register.ivrName\" #ivrName=\"ngModel\" name=\"ivrName\" id=\"ivrName\" placeholder=\"IVR Name\">\n                                        <div *ngIf=\"ivrName.touched && ivrName.invalid\" class=\"invalid-feedback\">\n                                            <div *ngIf=\"ivrName.errors.required\">IVR Name is required</div>\n                                        </div>\n                                    </div>\n\n                                </div>\n                                <div class=\"col-md-12  input-container-base nopadd\">\n                                    <div class=\"col-md-6 input-container \">\n                                        <input type=\"text\" required class=\"input-control\" [(ngModel)]=\"register.baseKeyCode\" #baseKeyCode=\"ngModel\" name=\"baseKeyCode\" id=\"baseKeyCode\" placeholder=\"Basekey code\">\n                                        <div *ngIf=\"baseKeyCode.touched && baseKeyCode.invalid\" class=\"invalid-feedback\">\n                                            <div *ngIf=\"baseKeyCode.errors.required\">BaseKey code is required</div>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"col-md-6 input-container\">\n                                        <input required type=\"text\" class=\"input-control\" [(ngModel)]=\"register.logoUrl\" #logoUrl=\"ngModel\" name=\"logoUrl\" id=\"logoUrl\" placeholder=\"Logo Url\">\n                                        <div *ngIf=\"logoUrl.touched && logoUrl.invalid\" class=\"invalid-feedback\">\n                                            <div *ngIf=\"logoUrl.errors.required\">Logo URL is required</div>\n                                        </div>\n                                    </div>\n                                </div>\n\n\n\n                                <div class=\"col-md-12 input-container-base nopadd\">\n                                    <div class=\"col-md-6  input-container \">\n                                        <p-dropdown required class=\"input-control\" required [options]=\"categorylist\" [(ngModel)]=\"register.category\" #category=\"ngModel\" name=\"category\" id=\"category\"></p-dropdown>\n                                        <div *ngIf=\"category.touched && category.invalid\" class=\"invalid-feedback\">\n                                            <div *ngIf=\"category.errors.required\">Category is required</div>\n                                        </div>\n                                    </div>\n\n\n                                    <div class=\"col-md-6  input-container \">\n                                        <input type=\"text\" required class=\"input-control\" [(ngModel)]=\"register.displayName\" #displayName=\"ngModel\" name=\"displayName\" id=\"displayName\" placeholder=\"Display Name\">\n\n                                        <div *ngIf=\"displayName.touched && displayName.invalid\" class=\"invalid-feedback\">\n                                            <div *ngIf=\"displayName.errors.required\">Display Name is required</div>\n                                        </div>\n                                    </div>\n\n                                </div>\n\n\n                                <div class=\"col-md-12 input-container-base nopadd\">\n                                    <div class=\"col-md-6 input-container \">\n                                        <input type=\"text\" required class=\"input-control\" [(ngModel)]=\"register.customerCare\" #customerCare=\"ngModel\" name=\"customerCare\" id=\"customerCare\" placeholder=\"Customer Care\">\n                                        <div *ngIf=\"customerCare.touched && customerCare.invalid\" class=\"invalid-feedback\">\n                                            <div *ngIf=\"customerCare.errors.required\">Customer Care is required</div>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"col-md-6 input-container \">\n                                        <input type=\"text\" class=\"input-control\" [(ngModel)]=\"register.tagline\" #tagline=\"ngModel\" name=\"customerCare\" id=\"Tagline\" placeholder=\"Tagline (optional)\">\n\n                                    </div>\n\n                                </div>\n\n                                <div class=\"col-md-12 input-container-base nopadd\">\n\n\n\n                                    <div class=\"col-md-6  input-container \">\n                                        <label class=\"formtit\">Upload CSV</label>\n                                        <p-fileUpload accept=\".csv\" name=\"csv[]\" [url]=\"uploadcsv\" (onUpload)=\"onUpload($event , 'csv')\" (onSelect)=\"select($event)\" mode=\"basic\" auto=\"auto\"></p-fileUpload>\n                                        <input type=\"text\" class=\"hide\" hidden [(ngModel)]=\"register.cuservejson\" #cuservejson=\"ngModel\" name=\"cuservejson\" id=\"cuservejson\" required>\n                                        <label style=\"\n                                        margin: 7px 0 0 10px;\n                                    \" *ngIf=\"uploadedfilename\">{{uploadedfilename}}</label>\n                                        <div *ngIf=\"cuservejson.touched && cuservejson.invalid\" class=\"invalid-feedback\">\n                                            <div *ngIf=\"cuservejson.errors.required\">CSV is required</div>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <!-- \n                                <div class=\"col-md-12 input-container-base nopadd\">\n                                    <div class=\"col-md-12  input-container \">\n                                        <label class=\"formtit\"> Company Logo</label>\n                                        <p-fileUpload name=\"companylogo[]\" [url]=\"companylogoapi\" (onUpload)=\"onUpload($event , 'companylogo')\" mode=\"basic\" auto=\"auto\" accept=\"image/*\"></p-fileUpload>\n\n                                        <input type=\"text\" class=\"hide\" hidden [(ngModel)]=\"register.companylogo\" #companylogo=\"ngModel\" name=\"companylogo\" id=\"companylogo\" required>\n                                        <div *ngIf=\"register.companylogo\" class=\"buttonholder\">\n                                            <button type=\"button\" (click)=\"viewImage(register.companylogo)\" class=\"btn\">View</button>\n                                            <button type=\"button\" (click)=\"removeImage(register.companylogo, 'companylogo' )\" class=\"btn\">Remove</button>\n                                        </div>\n                                        <div *ngIf=\"previewImage\" class=\"imagePreview\">\n                                            <h4>Preview</h4>\n                                            <img [src]=\"previewImage\">\n                                        </div>\n                                    </div>\n                                </div> -->\n\n\n\n\n\n\n\n                            </div>\n\n                            <div class=\"col-md-12  account-btn-container-base\">\n                                <div class=\"col-md-12  account-btn-container\">\n                                    <button type=\"submit\" [disabled]=\"!registerForm.valid\" class=\"themebtn\">SUBMIT</button>\n                                </div>\n                                <div *ngIf=\"edittype\" class=\"col-md-12  account-btn-container\">\n                                    <!-- <a href=\"#\" class=\"themebtn1\">DEACTIVATE THE ACCOUNT</a> -->\n                                </div>\n                            </div>\n                        </div>\n\n                    </form>\n\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/android/addcompany/addcompany.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/admin/android/addcompany/addcompany.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".formtit {\n  float: left;\n  width: 100%;\n  margin: -15px 0 5px 0; }\n"

/***/ }),

/***/ "./src/app/admin/android/addcompany/addcompany.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/admin/android/addcompany/addcompany.component.ts ***!
  \******************************************************************/
/*! exports provided: AddcompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddcompanyComponent", function() { return AddcompanyComponent; });
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





var AddcompanyComponent = /** @class */ (function () {
    function AddcompanyComponent(route, shareService, router, messageService) {
        this.route = route;
        this.shareService = shareService;
        this.router = router;
        this.messageService = messageService;
        this.register = {};
        this.filetoremove = [];
        this.categorylist = [
            { label: 'Select Category', value: null },
            { label: 'Banking', value: 'banking' },
            { label: 'Telecom', value: 'telecom' },
            { label: 'Finance', value: 'finance' },
            { label: 'other', value: 'other' }
        ];
    }
    AddcompanyComponent.prototype.ngOnInit = function () {
        this.uploadcsv = _constants__WEBPACK_IMPORTED_MODULE_3__["constants"].uploadcsv;
    };
    AddcompanyComponent.prototype.onSubmitForm = function (formvalue) {
        var _this = this;
        console.log(formvalue);
        // this.userId ? this.update(formvalue) : this.save(formvalue)
        var payload = {
            company: this.register.name,
            name: this.register.ivrName,
            tree: JSON.parse(this.register.cuservejson),
            populateCheckpoints: true
        };
        this.shareService.postData(_constants__WEBPACK_IMPORTED_MODULE_3__["constants"].addIvr, payload).subscribe(function (res) {
            _this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Cuserve Json Uploaded sucessfully' });
            _this.save(formvalue);
        }, function (err) {
            _this.messageService.add({ severity: 'error', summary: 'Error Message', detail: err.message });
        });
    };
    AddcompanyComponent.prototype.save = function (formvalue) {
        var _this = this;
        this.shareService.postData(_constants__WEBPACK_IMPORTED_MODULE_3__["constants"].addcompany, this.register).subscribe(function (res) {
            _this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Company created sucessfully' });
            _this.router.navigate(['/admin/android']);
            formvalue.reset();
            _this.removeUnusedFiles();
        }, function (err) {
            _this.messageService.add({ severity: 'error', summary: 'Error Message', detail: err.message });
        });
    };
    AddcompanyComponent.prototype.update = function (formvalue) {
        var _this = this;
        this.shareService.update(_constants__WEBPACK_IMPORTED_MODULE_3__["constants"].getcustomer + this.userId, this.register).subscribe(function (res) {
            _this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'user uptated sucessfully' });
            _this.removeUnusedFiles();
        }, function (err) {
            _this.messageService.add({ severity: 'error', summary: 'Error Message', detail: err.message });
        });
    };
    AddcompanyComponent.prototype.onUpload = function (event, fieldname) {
        console.log(event);
        this.uploadedfilename = event.files[0].name;
        var response = JSON.parse(event.xhr.response);
        this.register.cuservejson = response.file;
        // if (this.register[fieldname] === '' || this.register[fieldname] === undefined) {
        //   this.register[fieldname] = constants.companyImagepath + response.file[0].filename;
        // } else {
        //   this.filetoremove = [...this.filetoremove, constants.companyImagepath + this.register[fieldname]];
        //   this.register[fieldname] = constants.companyImagepath + response.file[0].filename;
        // }
    };
    AddcompanyComponent.prototype.select = function (event) {
        console.log(event);
    };
    AddcompanyComponent.prototype.viewImage = function (image) {
        this.previewImage = this.register.companylogo;
    };
    AddcompanyComponent.prototype.removeImage = function (id, fieldname) {
        this.register[fieldname] = '';
        this.filetoremove = this.filetoremove.concat([_constants__WEBPACK_IMPORTED_MODULE_3__["constants"].companyImagepath + id]);
    };
    AddcompanyComponent.prototype.removeUnusedFiles = function () {
        var _this = this;
        this.shareService.postData(_constants__WEBPACK_IMPORTED_MODULE_3__["constants"].deletefile, this.filetoremove).subscribe(function (result) {
            console.log(result['message']);
            _this.filetoremove = [];
        });
    };
    AddcompanyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-addcompany',
            template: __webpack_require__(/*! ./addcompany.component.html */ "./src/app/admin/android/addcompany/addcompany.component.html"),
            styles: [__webpack_require__(/*! ./addcompany.component.scss */ "./src/app/admin/android/addcompany/addcompany.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _providers_share_service__WEBPACK_IMPORTED_MODULE_2__["ShareService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"]])
    ], AddcompanyComponent);
    return AddcompanyComponent;
}());



/***/ }),

/***/ "./src/app/admin/android/companylist.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/admin/android/companylist.module.ts ***!
  \*****************************************************/
/*! exports provided: CompanylistModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanylistModule", function() { return CompanylistModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _companylist_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./companylist.routing */ "./src/app/admin/android/companylist.routing.ts");
/* harmony import */ var _companylist_companylist_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./companylist/companylist.component */ "./src/app/admin/android/companylist/companylist.component.ts");
/* harmony import */ var _share_share_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../share/share.module */ "./src/app/share/share.module.ts");
/* harmony import */ var _addcompany_addcompany_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addcompany/addcompany.component */ "./src/app/admin/android/addcompany/addcompany.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var CompanylistModule = /** @class */ (function () {
    function CompanylistModule() {
    }
    CompanylistModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _companylist_routing__WEBPACK_IMPORTED_MODULE_2__["CompanyRouting"],
                _share_share_module__WEBPACK_IMPORTED_MODULE_4__["ShareModule"],
            ],
            declarations: [
                _companylist_companylist_component__WEBPACK_IMPORTED_MODULE_3__["CompanylistComponent"], _addcompany_addcompany_component__WEBPACK_IMPORTED_MODULE_5__["AddcompanyComponent"]
            ]
        })
    ], CompanylistModule);
    return CompanylistModule;
}());



/***/ }),

/***/ "./src/app/admin/android/companylist.routing.ts":
/*!******************************************************!*\
  !*** ./src/app/admin/android/companylist.routing.ts ***!
  \******************************************************/
/*! exports provided: CompanyRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyRouting", function() { return CompanyRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _companylist_companylist_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./companylist/companylist.component */ "./src/app/admin/android/companylist/companylist.component.ts");
/* harmony import */ var _addcompany_addcompany_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addcompany/addcompany.component */ "./src/app/admin/android/addcompany/addcompany.component.ts");



var routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: _companylist_companylist_component__WEBPACK_IMPORTED_MODULE_1__["CompanylistComponent"]
            },
            {
                path: 'addcompany',
                component: _addcompany_addcompany_component__WEBPACK_IMPORTED_MODULE_2__["AddcompanyComponent"]
            }
        ]
    }
];
// path: ' ',
// component: LandingComponent,  
var CompanyRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/admin/android/companylist/companylist.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/admin/android/companylist/companylist.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 col-sm-12 col-xs-12 col-lg-12 billhist-base ivr-base nopadd\">\n    <div class=\"col-md-12 col-sm-12 col-xs-12 col-lg-12 billhist-generatebill text-right nopadd\">\n        <h2 class=\"main-title\">Android Lists</h2>\n    </div>\n    <div class=\"col-md-12 col-sm-12 col-xs-12 col-lg-12 searchbar-container nopadd\">\n        <input type=\"text\" (input)=\"dt.filterGlobal($event.target.value, 'contains')\" class=\"searchbar\" placeholder=\"Search\">\n\n        <div class=\"col-md-12 col-sm-12 col-xs-12 col-lg-12 billhist-generatebill text-right nopadd\">\n            <a routerLink=\"/admin/android/addcompany\" class=\"themebtn1\"><span class=\"plus-icon-bill\">+</span>ADD COMPANY</a>\n        </div>\n        <div class=\"col-md-12 col-sm-12 col-xs-12 col-lg-12 billhist-generatebill text-right nopadd\">\n\n            <div class=\"theme-table\">\n\n                <p-table #dt class=\"table table-striped\" [columns]=\"cols\" [value]=\"datasource\" [paginator]=\"true\" [rows]=\"10\" [totalRecords]=\"totalRecords\">\n                    <ng-template pTemplate=\"header\" let-columns>\n                        <tr>\n                            <th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\">\n                                {{col.header}}\n                            </th>\n                            <th style=\"width: 95px\">\n                                Action\n                            </th>\n                        </tr>\n                    </ng-template>\n                    <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n                        <tr>\n                            <td>{{rowData.displayName}}</td>\n                            <td>{{rowData.ivrName }}</td>\n                            <td>{{rowData.baseKeyCode}}</td>\n                            <td>{{rowData.customerCare}}</td>\n                            <td><img src=\"{{rowData.logoUrl}}\" width=\"50\" /></td>\n                            <!--  <td>{{rowData.tagline}}</td>-->\n                            <td>{{rowData.category}}</td>\n                            <td>\n                                <p> <a (click)=\"showjson_ivr(rowData.name, rowData.ivrName)\" class=\"custom-red\">View Json</a></p>\n                            </td>\n                        </tr>\n                    </ng-template>\n                </p-table>\n\n\n            </div>\n        </div>\n    </div>\n\n</div>\n<div *ngIf=\"jsondata\" class=\"login-modal modal fade \" id=\"myModal\">\n    <i class=\"mdi mdi-close\" (click)=\"closemodal()\"></i>\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content col-md-12 nopadd\">\n            <div style=\"padding: 30px\" class=\"modal-body col-md-12  \">\n\n                <!-- <ngx-json-viewer [json]=\"jsondata\"></ngx-json-viewer>-->\n                <pre>{{jsondata | json}}</pre>\n            </div>\n        </div>\n    </div>\n</div>\n\n<app-loader *ngIf=\"!datasource\"></app-loader>"

/***/ }),

/***/ "./src/app/admin/android/companylist/companylist.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/admin/android/companylist/companylist.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".themebtn1 {\n  margin: 25px 0 -20px 0; }\n\n.main-title {\n  margin-bottom: 0; }\n\n.modal {\n  opacity: 1; }\n\n.login-modal .modal-dialog {\n  width: 1030px; }\n\n.login-modal .modal-dialog td {\n    overflow: hidden;\n    text-overflow: ellipsis; }\n\n.modal-body {\n  position: relative;\n  padding: 15px;\n  min-height: 300px; }\n\n.mdi.mdi-close {\n  float: right;\n  color: #fff;\n  font-size: 50px;\n  margin: 0 20px 0 0;\n  position: fixed;\n  right: 20px; }\n\npre {\n  background: none !important;\n  border: none !important; }\n"

/***/ }),

/***/ "./src/app/admin/android/companylist/companylist.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/admin/android/companylist/companylist.component.ts ***!
  \********************************************************************/
/*! exports provided: CompanylistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanylistComponent", function() { return CompanylistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../providers */ "./src/app/providers/index.ts");
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





var CompanylistComponent = /** @class */ (function () {
    function CompanylistComponent(http, shareService, confirmationService, messageService) {
        this.http = http;
        this.shareService = shareService;
        this.confirmationService = confirmationService;
        this.messageService = messageService;
        this.activepagination = 0;
    }
    CompanylistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.shareService.getData(_constants__WEBPACK_IMPORTED_MODULE_3__["constants"].android_get_company).subscribe(function (res) {
            _this.datasource = res['info'];
            console;
            _this.totalRecords = _this.datasource.length;
        });
        this.cols = [
            { field: 'displayName', header: 'Company Name' },
            { field: 'ivrName', header: 'IVR Name' },
            { field: 'baseKeyCode', header: 'Base Key Code' },
            { field: 'customerCare', header: 'Customer Care' },
            { field: 'logoUrl', header: 'Logo' },
            /*{ field: 'tagline', header: 'Tag Line' },*/
            { field: 'category', header: 'category' },
        ];
        sessionStorage.getItem('activeivrpagination') ? this.activepagination = JSON.parse(sessionStorage.getItem('activeivrpagination')) : null;
    };
    CompanylistComponent.prototype.showjson_ivr = function (company, name) {
        var _this = this;
        this.shareService.getData(_constants__WEBPACK_IMPORTED_MODULE_3__["constants"].android_get_ivr + "?company=" + company + "&name=" + name).subscribe(function (res) {
            _this.json_array = res['info'];
            console.log(_this.json_array);
            _this.jsondata = res['info'];
            document.body.classList.add("modal-open");
        });
    };
    CompanylistComponent.prototype.closemodal = function () {
        this.jsondata = null;
        document.body.classList.remove("modal-open");
    };
    CompanylistComponent.prototype.pagechange = function (ev) {
        sessionStorage.setItem('activeivrpagination', ev.first);
    };
    CompanylistComponent.prototype.uploadtocuserve = function (data) {
        var _this = this;
        var payload = {
            name: data.companyname,
            ivrName: data.companyname + '-ivr-1',
            baseKeyCode: data.companyivrnumber,
            displayName: data.companyname.replace(/\s+/g, '-').toLowerCase(),
            logoUrl: data.companylogo,
            tagline: '',
            category: data.category,
            customerCare: data.companyivrnumber
        };
        this.shareService.postData(_constants__WEBPACK_IMPORTED_MODULE_3__["constants"].addcompany, payload).subscribe(function (res) {
            _this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Company detail uploaded sucessfully' });
        }, function (err) {
            _this.messageService.add({ severity: 'error', summary: 'Error Message', detail: err.message });
        });
    };
    CompanylistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-companylist',
            template: __webpack_require__(/*! ./companylist.component.html */ "./src/app/admin/android/companylist/companylist.component.html"),
            styles: [__webpack_require__(/*! ./companylist.component.scss */ "./src/app/admin/android/companylist/companylist.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _providers__WEBPACK_IMPORTED_MODULE_2__["ShareService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_4__["ConfirmationService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"]])
    ], CompanylistComponent);
    return CompanylistComponent;
}());



/***/ })

}]);
//# sourceMappingURL=android-companylist-module.js.map