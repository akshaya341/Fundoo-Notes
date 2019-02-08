(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_forget_forget_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/forget/forget.component */ "./src/app/components/forget/forget.component.ts");
/* harmony import */ var _components_reset_reset_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/reset/reset.component */ "./src/app/components/reset/reset.component.ts");








var routes = [
    {
        path: '',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, {
        path: 'login',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: 'register',
        component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]
    },
    {
        path: 'dashboard',
        component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"]
    },
    {
        path: 'forget',
        component: _components_forget_forget_component__WEBPACK_IMPORTED_MODULE_6__["ForgetComponent"]
    },
    {
        path: 'resetpassword/:token',
        component: _components_reset_reset_component__WEBPACK_IMPORTED_MODULE_7__["ResetComponent"]
    },
    {
        path: 'resetpassword',
        component: _components_reset_reset_component__WEBPACK_IMPORTED_MODULE_7__["ResetComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Fundoo-Notes';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.material.module.ts":
/*!****************************************!*\
  !*** ./src/app/app.material.module.ts ***!
  \****************************************/
/*! exports provided: AppMaterial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppMaterial", function() { return AppMaterial; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");












var AppMaterial = /** @class */ (function () {
    function AppMaterial() {
    }
    AppMaterial = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["FlexLayoutModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
                // MatFormFieldModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"],
                _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["A11yModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_4__["CdkTreeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["DragDropModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTreeModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollingModule"],
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
                // MatFormFieldModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"],
                _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["A11yModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_4__["CdkTreeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["DragDropModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTreeModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollingModule"],
            ]
        })
    ], AppMaterial);
    return AppMaterial;
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _app_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.material.module */ "./src/app/app.material.module.ts");
/* harmony import */ var _components_forget_forget_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/forget/forget.component */ "./src/app/components/forget/forget.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_reset_reset_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/reset/reset.component */ "./src/app/components/reset/reset.component.ts");












// import { HttpClientModule, HttpClient } from '@angular/common/http';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"],
                _components_forget_forget_component__WEBPACK_IMPORTED_MODULE_9__["ForgetComponent"],
                _components_reset_reset_component__WEBPACK_IMPORTED_MODULE_11__["ResetComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _app_material_module__WEBPACK_IMPORTED_MODULE_8__["AppMaterial"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <mat-toolbar class=\"example-toolbar\">\n    <!-- <div> -->\n    <button mat-icon-button (click)=\"snav.toggle()\">\n      <mat-icon>menu</mat-icon>\n    </button>\n    <!-- <img src=\"../../../assets/image/logo.svg\"/> -->\n    <h1 class=\"example-app-name\">Keep</h1>\n\n    <div class=\"settings\">\n        <button mat-icon-button [matMenuTriggerFor]=\"menu\" colour=\"basic\">\n          <mat-icon>settings</mat-icon>\n          </button>\n          <mat-menu #menu=\"matMenu\">\n            <button mat-menu-item>Settings</button>\n            <button mat-menu-item>Send feedback</button>\n            <button mat-menu-item>App downloads</button>\n            <button mat-menu-item>Keyboard Shaortcuts</button>\n          </mat-menu>\n      <button mat-icon-button color=\"basic\">\n        <mat-icon></mat-icon>\n      </button>\n\n      <button mat-icon-button color=\"basic\" id=\"refresh\">\n        <mat-icon>refresh</mat-icon>\n      </button>\n\n      <button mat-icon-button color=\"basic\" id=\"grid\">\n        <mat-icon>border_all</mat-icon>\n      </button>\n    </div>\n\n    <!-- <div class=\"apps\"> -->\n    <button mat-icon-button color=\"basic\">\n      <mat-icon>apps</mat-icon>\n    </button>\n    <!-- <button mat-mini-fab color  (click)=\"openDialog()\" color=\"primary\">A</button> -->\n\n    <!-- </div> -->\n    <button mat-icon-button [matMenuTriggerFor]=\"menu1\"  colour=\"basic\">A\n      \n    </button>\n    <mat-menu #menu1=\"matMenu\">\n      <button mat-fab disabled id=\"imagebutton\">\n      </button>\n      \n        <p>Akshaya M I</p>\n      \n      <button mat-menu-item></button>\n      <mat-divider></mat-divider>\n      <div>\n        <button mat-flat-button (click)=\"addAccount()\">Add account</button>\n        <button mat-flat-button>Sign out</button>\n      </div>\n    </mat-menu>\n\n\n  </mat-toolbar>\n  <mat-divider></mat-divider>\n\n  <mat-sidenav-container class=\"example-sidenav-container\">\n    <mat-sidenav #snav [mode]=\"mobileQuery.matches ? 'over' : 'side'\">\n      <mat-nav-list>\n        <!-- <a mat-list-item routerLink=\".\" *ngFor=\"let nav of fillerNav\">{{nav}}</a> -->\n        <mat-list role=\"List\">\n\n          <!-- <mat-icon>note</mat-icon> -->\n          <mat-list-item role=\"listitem\" id=\"note\">\n            <img id=\"img1\" src=\"../../../assets/image/note.svg\" />\n            Note</mat-list-item>\n\n          <mat-list-item role=\"listitem\" id=\"rem\">\n            <img id=\"img2\" src=\"../../../assets/image/remainder.svg\" />\n            Remainder</mat-list-item>\n\n          <mat-divider></mat-divider>\n          <p id=\"para\">labels</p>\n          <mat-list-item role=\"listitem\" id=\"lable\">\n            <mat-icon id=\"edit\">edit</mat-icon>\n            Edit lable\n          </mat-list-item>\n\n          <mat-divider></mat-divider>\n          <mat-list-item role=\"listitem\" id=\"arch\">\n            <img id=\"img4\" src=\"../../../assets/image/archieve.svg\" />\n            Archive</mat-list-item>\n\n          <mat-list-item role=\"listitem\" id=\"bin\">\n            <img id=\"img5\" src=\"../../../assets/image/bin.svg\" />\n            Trash</mat-list-item>\n        </mat-list>\n      </mat-nav-list>\n    </mat-sidenav>\n    <div class=\"NoteMenu\">\n      <mat-accordion>\n        <mat-expansion-panel [expanded]=\"step === 1\" (opened)=\"setStep(1)\" hideToggle>\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              note..\n            </mat-panel-title>\n            <mat-panel-description>\n\n              <mat-icon id=\"newlist\" (click)=\"check(1)\" matTooltip=\"New list \">check_box</mat-icon>\n\n              <mat-icon id=\"brush\" matTooltip=\"Drawing is not available\" aria-disabled=\"true\">brush</mat-icon>\n              <mat-icon id=\"insert\" matTooltip=\"New note with image\">insert_photo</mat-icon>\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n          <mat-form-field id=\"note\">\n              <input matInput placeholder=\"Take a note\" autocomplete=\"off\">\n            </mat-form-field>\n           \n            <div>\n              <button matTooltip=\"Remaind me\" mat-icon-button>\n                <mat-icon>notification_important</mat-icon> </button>\n                \n                <button matTooltip=\"collaborator\" mat-icon-button>\n                  <mat-icon>person_add</mat-icon>\n                </button>\n\n                <button matTooltip=\"change color\" mat-icon-button>\n                  <mat-icon>color_lens</mat-icon>\n                </button>\n \n                 <button matTooltip=\"add image\" mat-icon-button>\n                   <mat-icon>insert_photo</mat-icon>\n                 </button>\n                 \n                 <!-- <img id=\"undo\" src=\"../../../assets/image/undo.svg\"/> -->\n                <button matTooltip=\"Archive\" mat-icon-button  disabled=true>\n                  <mat-icon>undo</mat-icon>\n                </button>\n\n                <button matTooltip=\"undo\" mat-icon-button disabled=true>\n                  <mat-icon>redo</mat-icon>\n                </button>\n                <button mat-icon-button [matMenuTriggerFor]=\"menu2\" matTooltip=\"more\">\n                    <mat-icon>more_vert</mat-icon>\n                  </button>\n                  <mat-menu #menu2=\"matMenu\">\n                    <button mat-menu-item>\n                      <span>Delete note</span>\n                    </button>\n                    <button mat-menu-item >\n                      <span>Add label</span>\n                    </button>\n                    <button mat-menu-item disabled>\n                      <span>Add drawing</span>\n                    </button>\n                    <button mat-menu-item>\n                      <span>Make a copy</span>\n                    </button>\n                    <button mat-menu-item>\n                      <span>Show checkboxes</span>\n                    </button>\n                    <button mat-menu-item>\n                      <span>Copy to google docs</span>\n                    </button>\n                  </mat-menu>\n    \n                 \n                  <button  mat-button (click)=\"close(0)\">close</button>\n            </div>\n        </mat-expansion-panel>\n      </mat-accordion>\n    </div>\n  </mat-sidenav-container>\n  \n</div>"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#rema {\n  font-size: 20px;\n  font-family: sans-serif; }\n\nmat-sidenav {\n  width: 250px; }\n\n.search {\n  margin-left: 25%;\n  border: 1px; }\n\n#img1 {\n  margin-right: 10%; }\n\n#img2 {\n  margin-right: 10%; }\n\n#edit {\n  margin-right: 10%; }\n\n#img4 {\n  margin-right: 10%; }\n\n#img5 {\n  margin-right: 10%; }\n\n.container {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: white; }\n\n.example-is-mobile .example-toolbar {\n  position: fixed;\n  z-index: 2; }\n\nh1.example-app-name {\n  margin-left: 2%; }\n\n.example-sidenav-container {\n  flex: 20; }\n\n.example-is-mobile .example-sidenav-container {\n  flex: 1 0 auto; }\n\n#para {\n  margin-left: 9%; }\n\n.settings {\n  display: flex;\n  flex-direction: row; }\n\n.apps {\n  display: flex;\n  flex-direction: row;\n  width: 4%; }\n\n.example-toolbar {\n  display: flex;\n  flex-direction: row; }\n\n#username {\n  font: bold;\n  margin-left: 40%; }\n\n.matMenu {\n  width: 10px; }\n\n.mat-raised-button:not([class*=mat-elevation-z]) {\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  margin-left: 36%; }\n\n.mat-stroked-button:not([class*=mat-elevation-z]) {\n  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.2), 0 0 0 0 rgba(0, 0, 0, 0.14), 0 0 0 0 rgba(0, 0, 0, 0.12);\n  width: 140px; }\n\n.NoteMenu {\n  margin-left: 25%;\n  margin-bottom: 15%;\n  width: 50%; }\n\n.NoteMenu #newlist {\n    margin-left: 350px; }\n\n.NoteMenu #insert {\n    margin-left: 20px; }\n\n.NoteMenu #brush {\n    margin-left: 20px; }\n\n.NoteMenu #note {\n    width: 80%;\n    margin-bottom: 5%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JyaWRnZWl0L0Frc2hheWEvRnVuZG9vLU5vdGVzL0Z1bmRvby1Ob3Rlcy9zcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQWU7RUFDZix1QkFBdUIsRUFBQTs7QUFFM0I7RUFDSSxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksZ0JBQWdCO0VBRWhCLFdBQVcsRUFBQTs7QUFFZjtFQUNJLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLGlCQUFnQixFQUFBOztBQUVwQjtFQUNJLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLGlCQUFnQixFQUFBOztBQUdwQjtFQUNJLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVE7RUFDUix1QkFBdUIsRUFBQTs7QUFHekI7RUFDRSxlQUFlO0VBQ2YsVUFBVSxFQUFBOztBQUdaO0VBQ0UsZUFBZSxFQUFBOztBQUlqQjtFQUVFLFFBQVEsRUFBQTs7QUFJVjtFQUVFLGNBQWMsRUFBQTs7QUFJaEI7RUFDSSxlQUFlLEVBQUE7O0FBR25CO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQixFQUFBOztBQUV2QjtFQUNJLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUyxFQUFBOztBQUliO0VBQ0ksYUFBYTtFQUNiLG1CQUFtQixFQUFBOztBQUlyQjtFQUNJLFVBQVU7RUFDVixnQkFBZ0IsRUFBQTs7QUFHckI7RUFDRyxXQUFXLEVBQUE7O0FBR2Q7RUFDRywrR0FBbUc7RUFDbkcsZ0JBQWdCLEVBQUE7O0FBR25CO0VBQ0csZ0dBQW9GO0VBQ3BGLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFVBQVUsRUFBQTs7QUFIZDtJQU1RLGtCQUFrQixFQUFBOztBQU4xQjtJQVNRLGlCQUFpQixFQUFBOztBQVR6QjtJQWFRLGlCQUFpQixFQUFBOztBQWJ6QjtJQWdCUSxVQUFVO0lBQ1YsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcmVtYXtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7ICAgXG59XG5tYXQtc2lkZW5hdntcbiAgICB3aWR0aDogMjUwcHg7XG59XG5cbi5zZWFyY2h7XG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgXG4gICAgYm9yZGVyOiAxcHg7XG59XG4jaW1nMXtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcbn1cbiNpbWcye1xuICAgIG1hcmdpbi1yaWdodDogMTAlO1xufVxuI2VkaXR7XG4gICAgbWFyZ2luLXJpZ2h0OjEwJTtcbn1cbiNpbWc0e1xuICAgIG1hcmdpbi1yaWdodDogMTAlO1xufVxuI2ltZzV7XG4gICAgbWFyZ2luLXJpZ2h0OjEwJTtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIH1cbiAgXG4gIC5leGFtcGxlLWlzLW1vYmlsZSAuZXhhbXBsZS10b29sYmFyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogMjtcbiAgfVxuICBcbiAgaDEuZXhhbXBsZS1hcHAtbmFtZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xuICAgIFxuICB9XG4gIFxuICAuZXhhbXBsZS1zaWRlbmF2LWNvbnRhaW5lciB7XG4gICAgXG4gICAgZmxleDogMjA7XG4gICAgLy93aWR0aDogMTAwMHB4O1xuICB9XG4gIFxuICAuZXhhbXBsZS1pcy1tb2JpbGUgLmV4YW1wbGUtc2lkZW5hdi1jb250YWluZXIge1xuICAgIFxuICAgIGZsZXg6IDEgMCBhdXRvO1xuICAgIFxuICB9XG4gICBcbiAgI3BhcmF7XG4gICAgICBtYXJnaW4tbGVmdDogOSU7XG4gIH1cblxuICAuc2V0dGluZ3N7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB9XG4uYXBwc3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgd2lkdGg6IDQlO1xufVxuXG5cbi5leGFtcGxlLXRvb2xiYXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgXG59XG5cbiAgI3VzZXJuYW1le1xuICAgICAgZm9udDogYm9sZDtcbiAgICAgIG1hcmdpbi1sZWZ0OiA0MCU7XG4gIH1cbiBcbiAubWF0TWVudXtcbiAgICB3aWR0aDogMTBweDtcbiB9XG5cbiAubWF0LXJhaXNlZC1idXR0b246bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSkge1xuICAgIGJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwwLDAsLjIpLCAwIDJweCAycHggMCByZ2JhKDAsMCwwLC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwwLDAsLjEyKTtcbiAgICBtYXJnaW4tbGVmdDogMzYlO1xuIH1cblxuIC5tYXQtc3Ryb2tlZC1idXR0b246bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSkge1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSgwLDAsMCwuMiksIDAgMCAwIDAgcmdiYSgwLDAsMCwuMTQpLCAwIDAgMCAwIHJnYmEoMCwwLDAsLjEyKTtcbiAgICB3aWR0aDogMTQwcHg7XG59XG5cbi5Ob3RlTWVudXtcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xuICAgIG1hcmdpbi1ib3R0b206IDE1JTtcbiAgICB3aWR0aDogNTAlO1xuICBcbiAgICAjbmV3bGlzdHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDM1MHB4O1xuICAgIH1cbiAgICAjaW5zZXJ0e1xuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICB9XG4gICAgI2JydXNoe1xuICAgICAgIFxuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICB9XG4gICAgI25vdGV7XG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUlO1xuICAgIH1cbn1cblxuXG5cblxuLy8gfSJdfQ== */"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _service_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/http.service */ "./src/app/components/service/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/************************************************************************************************
* Execution : 1. default node cmd> dashboard.ts
*
* Purpose :dashboard to fundoo
*
* @file : dashboard.ts
* @module : dashboard.ts - This is optional if expeclictly its an npm or local package
* @author : Akshaya M I <akshayakumarmi97@gmail.com>
* @since : 2-2-2019
*
*************************************************************************************************/





/**
 * @title Injecting data when opening a dialog
 */
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(changeDetectorRef, media, httpService, router) {
        this.httpService = httpService;
        this.router = router;
        this.panelOpenState = false;
        this.fillerNav = Array.from({ length: 5 }, function (_, i) { return "Nav Item " + (i + 1); });
        this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)akshaya\.io$/].some(function (h) { return h.test(window.location.host); });
        this.step = 0;
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = function () { return changeDetectorRef.detectChanges(); };
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    DashboardComponent.prototype.ngOnDestroy = function () {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    };
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.isclick = function () {
        return false;
    };
    DashboardComponent.prototype.setStep = function (index) {
        this.step = index;
    };
    DashboardComponent.prototype.nextStep = function () {
        this.step++;
    };
    DashboardComponent.prototype.prevStep = function () {
        this.step--;
    };
    DashboardComponent.prototype.close = function (num) {
        this.setStep(num);
    };
    DashboardComponent.prototype.check = function (num) {
        this.setStep(num);
    };
    DashboardComponent.prototype.addAccount = function () {
        this.router.navigate(['register']);
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/components/dashboard/dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["MediaMatcher"], _service_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/forget/forget.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/forget/forget.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayoutAlign=\"center center\" fxFlex=\"100\">\n<mat-card  class=\"card\" fxFlex=\"50\">\n  <mat-card-title class=\"header\">Recover your account</mat-card-title>\n  <mat-card-subtitle class=header1><p>We can help you reset your password and security info.</p> \n    <p>you will recieve a link to create a new password.</p>\n  </mat-card-subtitle>\n  <div><mat-error fxLayoutAlign=\"center\">{{message}}</mat-error></div>\n    <mat-form-field appearance=\"fill\" class=\"mail\">\n        <mat-label>Email id</mat-label>\n        <input matInput placeholder=\"Please enter email\" [formControl]=\"email\" >\n        <mat-icon matSuffix>email</mat-icon>\n        <mat-hint id=\"hint\">make sure you have right one</mat-hint>\n      </mat-form-field>\n      <div class=\"buttons\">\n          <button id=\"sbutton\" mat-raised-button color=\"primary\" (click)=\"next()\" >Next</button>\n          <button id=\"cbutton\" mat-button (click)=\"redirect()\">Cancel</button>\n      </div>\n     \n     \n</mat-card>\n</div>"

/***/ }),

/***/ "./src/app/components/forget/forget.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/forget/forget.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mail {\n  width: 54%;\n  margin-left: 23%;\n  margin-right: 10%; }\n\n#sbutton {\n  font-family: sans-serif;\n  width: 10%;\n  margin-left: 23%; }\n\n#cbutton {\n  width: 10%;\n  margin-left: 5%; }\n\n.buttons {\n  padding-top: 3%; }\n\n.card {\n  width: 60%; }\n\n.header {\n  text-align: center; }\n\n.header1 {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JyaWRnZWl0L0Frc2hheWEvRnVuZG9vLU5vdGVzL0Z1bmRvby1Ob3Rlcy9zcmMvYXBwL2NvbXBvbmVudHMvZm9yZ2V0L2ZvcmdldC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQVM7RUFDVCxnQkFBZTtFQUNmLGlCQUFnQixFQUFBOztBQUlwQjtFQUNFLHVCQUF1QjtFQUN2QixVQUFVO0VBQ1YsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0ksVUFBVTtFQUNWLGVBQWUsRUFBQTs7QUFHbkI7RUFDRyxlQUFlLEVBQUE7O0FBRWxCO0VBQ0csVUFBVSxFQUFBOztBQUdiO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2ZvcmdldC9mb3JnZXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbHtcbiAgICB3aWR0aDo1NCU7XG4gICAgbWFyZ2luLWxlZnQ6MjMlO1xuICAgIG1hcmdpbi1yaWdodDoxMCU7XG4gICBcbn1cblxuI3NidXR0b257XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICB3aWR0aDogMTAlO1xuICBtYXJnaW4tbGVmdDogMjMlO1xuIFxufVxuI2NidXR0b257XG4gICAgd2lkdGg6IDEwJTtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgXG59XG4uYnV0dG9uc3tcbiAgIHBhZGRpbmctdG9wOiAzJTtcbn1cbi5jYXJke1xuICAgd2lkdGg6IDYwJTtcbiAgXG59XG4uaGVhZGVye1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5oZWFkZXIxe1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/forget/forget.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/forget/forget.component.ts ***!
  \*******************************************************/
/*! exports provided: ForgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetComponent", function() { return ForgetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/http.service */ "./src/app/components/service/http.service.ts");
/************************************************************************************************
* Execution : 1. default node cmd> forgot.ts
*
* Purpose :forgot to fundoo
*
* @file : forgot.ts
* @module : forgot.ts - This is optional if expeclictly its an npm or local package
* @author : Akshaya M I <akshayakumarmi97@gmail.com>
* @since : 31-1-2019
*
*************************************************************************************************/





var ForgetComponent = /** @class */ (function () {
    function ForgetComponent(httpService, router) {
        this.httpService = httpService;
        this.router = router;
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]);
        this.message = '';
    }
    ForgetComponent.prototype.ngOnInit = function () {
    };
    ForgetComponent.prototype.next = function () {
        var _this = this;
        try {
            this.model = {
                "email": this.email.value
            };
            console.log("model", this.model);
            if (this.email.value == '') {
                this.message = "Field missing ";
            }
            else {
                this.httpService.postRequest('user/reset', this.model).subscribe(function (data) {
                    console.log(data);
                    _this.responce = data;
                    _this.message = _this.responce.message;
                    // this.router.navigate(['resetpassword']);
                }, function (err) {
                    alert('Something went wrong');
                });
            }
        }
        catch (err) {
            alert('Error occured');
        }
    };
    ForgetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forget',
            template: __webpack_require__(/*! ./forget.component.html */ "./src/app/components/forget/forget.component.html"),
            styles: [__webpack_require__(/*! ./forget.component.scss */ "./src/app/components/forget/forget.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ForgetComponent);
    return ForgetComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayoutAlign=\"center center\" fxFlex=\"100\">\n  <mat-card fxFlex=\"50\">\n    <div>\n\n      <mat-card-header class=\"header\">\n        <mat-card-title class=\"note\" fxLayoutAlign=\"center\">Fundoo </mat-card-title>\n      </mat-card-header>\n\n      <mat-card-header class=\"header1\">\n        <mat-card-title class=\"note1\" fxLayoutAlign=\"center\">Sign In</mat-card-title>\n        <mat-card-subtitle fxLayoutAlign=\"center\">Welcome to Fundoo</mat-card-subtitle>\n      </mat-card-header>\n\n      <div class=\"form\">\n        <mat-form-field appearance=\"outline\" color=\"accent\">\n          <mat-label for=\"Email\">Email</mat-label>\n          <input matInput placeholder=\"Enter your email\" [formControl]=\"email\" autocomplete=\"on\" required>\n          <mat-icon matSuffix>email</mat-icon>\n          <mat-error *ngIf=\"email.hasError('required')\">Please, enter the email id</mat-error>\n        </mat-form-field>\n      </div>\n\n      <div>\n        <mat-form-field appearance=\"outline\" color=\"accent\">\n          <mat-label for=\"password\">Password</mat-label>\n          <input matInput placeholder=\"Enter your password\" minlength=\"8\" maxlength=\"15\" [type]=\"hide ? 'password' : 'text'\" [formControl]=\"password\" autocomplete=\"off\"\n            required>\n          <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n          <mat-error *ngIf=\"password.hasError('required')\">Enter your password</mat-error>\n          <mat-error *ngIf=\"!minlength\">Password must be of length 8-15</mat-error>\n        </mat-form-field>\n      </div>\n\n      <div class=\"button\">\n        <button class=\"loginbtn\" mat-button (click)=\"login()\"  >Login</button>\n      </div>\n\n      <div><mat-error >{{message}}</mat-error></div>\n    \n      <a  class=\"pass\" href=\"/forget\"  id=\"Forgot-password\">Forgotten password..?</a>\n      <p class=\"para\" >Don't have account</p> \n      <mat-icon class=\" icon\" matSuffix>create</mat-icon>\n      <a class=\"create\" href=\"/register\" id=\"create account\">create one! </a> \n    </div>\n    \n    \n  </mat-card>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/components/login/login.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  color: black;\n  text-align: center;\n  padding-bottom: 15px;\n  padding: 2%;\n  font-family: sans-serif; }\n\n.header1 {\n  text-align: center;\n  font-family: sans-serif;\n  margin: -1%; }\n\n.password {\n  display: flex;\n  flex-direction: column;\n  padding: 5px;\n  text-align-last: auto; }\n\n.password > * {\n  width: 20%;\n  padding-bottom: 5px; }\n\n.loginbtn {\n  background-color: slateblue;\n  color: white;\n  width: 30%; }\n\n.button {\n  padding: 10px;\n  text-align: left; }\n\n.mat-form-field {\n  width: 60%; }\n\n.mat-card .mat-divider-horizontal {\n  width: 40%; }\n\n.para {\n  color: #d42749;\n  text-align: right; }\n\na.create {\n  color: #4432bb;\n  float: right;\n  padding-top: 5px; }\n\na.pass {\n  float: left;\n  padding-top: 2%;\n  margin: 1%; }\n\n.icon {\n  float: right;\n  padding-bottom: 10%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JyaWRnZWl0L0Frc2hheWEvRnVuZG9vLU5vdGVzL0Z1bmRvby1Ob3Rlcy9zcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFFSSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gsdUJBQXVCLEVBQUE7O0FBRzNCO0VBQ0ksa0JBQWtCO0VBQ25CLHVCQUF1QjtFQUN2QixXQUFXLEVBQUE7O0FBR1o7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixxQkFBcUIsRUFBQTs7QUFHdkI7RUFDSSxVQUFVO0VBQ1YsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0csMkJBQTJCO0VBQzNCLFlBQVk7RUFDWixVQUFVLEVBQUE7O0FBS2Y7RUFDSSxhQUFhO0VBQ2IsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0csVUFBVSxFQUFBOztBQUViO0VBQ0ksVUFBVSxFQUFBOztBQUdkO0VBQ0ksY0FBdUI7RUFDdkIsaUJBQWlCLEVBQUE7O0FBSXJCO0VBQ0MsY0FBdUI7RUFDeEIsWUFBWTtFQUNaLGdCQUFnQixFQUFBOztBQUdoQjtFQUNJLFdBQVc7RUFDWCxlQUFlO0VBQ2YsVUFBVSxFQUFBOztBQUVkO0VBQ0ksWUFBWTtFQUNaLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmhlYWRlcntcbiAgICAvL2JhY2tncm91bmQtY29sb3I6IHJnYigxMTMsIDk1LCAyMzYpO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gICAgcGFkZGluZzogMiU7XG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgXG59XG4uaGVhZGVyMXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgIG1hcmdpbjogLTElO1xufVxuXG4gIC5wYXNzd29yZHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZzogNXB4O1xuICAgIHRleHQtYWxpZ24tbGFzdDogYXV0bztcbiAgfVxuICBcbiAgLnBhc3N3b3JkPip7XG4gICAgICB3aWR0aDogMjAlO1xuICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgfVxuXG4gIC5sb2dpbmJ0bntcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogc2xhdGVibHVlO1xuICAgICBjb2xvcjogd2hpdGU7XG4gICAgIHdpZHRoOiAzMCU7XG4gICAgIFxuXG4gIH1cblxuLmJ1dHRvbntcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgXG59XG4ubWF0LWZvcm0tZmllbGQge1xuICAgd2lkdGg6IDYwJTsgXG59XG4ubWF0LWNhcmQgLm1hdC1kaXZpZGVyLWhvcml6b250YWwgIHtcbiAgICB3aWR0aDogNDAlO1xufVxuXG4ucGFyYXtcbiAgICBjb2xvcjogcmdiKDIxMiwgMzksIDczKTtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgIFxuICAgIFxufVxuYS5jcmVhdGV7XG4gY29sb3I6IHJnYig2OCwgNTAsIDE4Nyk7IFxuZmxvYXQ6IHJpZ2h0O1xucGFkZGluZy10b3A6IDVweDtcbn1cblxuYS5wYXNze1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHBhZGRpbmctdG9wOiAyJTtcbiAgICBtYXJnaW46IDElO1xufVxuLmljb257XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/http.service */ "./src/app/components/service/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/************************************************************************************************
* Execution : 1. default node cmd> login.ts
*
* Purpose : Login to fundoo
*
* @file : login.ts
* @module : login.ts - This is optional if expeclictly its an npm or local package
* @author : Akshaya M I <akshayakumarmi97@gmail.com>
* @since : 27-1-2019
*
*************************************************************************************************/





var LoginComponent = /** @class */ (function () {
    function LoginComponent(httpService, router) {
        this.httpService = httpService;
        this.router = router;
        this.message = '';
        this.hide = true;
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]);
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.model = {
            "email": this.email.value,
            "password": this.password.value
        };
        if (this.email.value == '' || this.password.value == '') {
            this.message = "Field cannot be empty";
        }
        else {
            this.httpService.postRequest('user/login', this.model).subscribe(function (data) {
                console.log(_this.model);
                //var result  = {};
                console.log("data", data);
                _this.response = data;
                localStorage.setItem('token', _this.response.userId);
                var token = localStorage.getItem('token');
                console.log("token id ", token);
                if (token != _this.response.id) {
                    _this.message = "User not found";
                    return;
                }
                else if (_this.password.value != _this.response.password) {
                    _this.message = "Incorrect Password";
                    return;
                }
                else {
                    _this.router.navigate(['dashboard']);
                }
            }, function (err) {
                _this.message = "User not found";
                alert('Something went wrong');
            });
        }
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/components/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mainForm\" fxLayoutAlign=\"center center\" fxFlex=\"100\">\n    <mat-card class=\"mainDiv\" fxFlex=\"88\">\n    \n        <mat-card-header>\n            <div><mat-error>{{message1}}</mat-error></div>\n    \n          <mat-card-title>Fundoo-Notes</mat-card-title>\n    \n        </mat-card-header>\n    \n        <form class=\"inputForm\">\n         \n          <mat-form-field appearance=\"outline\" class=\"firstName\" color=\"accent\">\n            <mat-label>First name</mat-label>\n            <input matInput placeholder=\"First name\" [formControl]=\"firstname\"  required>\n          </mat-form-field>\n          <mat-form-field appearance=\"outline\" class=\"lastName\" color=\"accent\">\n            <mat-label>Last name</mat-label>\n            <input matInput placeholder=\"Last name\"  [formControl]=\"lastname\"  required >\n            <!-- <mat-hint>Hint</mat-hint> -->\n          </mat-form-field>\n          <mat-form-field appearance=\"outline\" class=\"gmail\" color=\"accent\">\n            <mat-label>username</mat-label>\n            <input matInput placeholder=\"user name\"  [formControl]=\"username\" required>\n            <p matSuffix>@gmail.com</p>\n            <mat-hint>You can use letters and numbers</mat-hint>\n            \n          </mat-form-field>\n          <div class=\"password\">\n            <mat-form-field appearance=\"outline\" class=\"pass\" color=\"accent\">\n              <mat-label>Password</mat-label>\n              <input matInput placeholder=\"Password\" [type]=\"hide ? 'password' : 'text'\"  [formControl]=\"password\" minlength=\"8\" maxlength=\"15\" >\n              <mat-error *ngIf=\"password.hasError('required')\">mandatory</mat-error>\n              <!-- <mat-hint>Hint</mat-hint> -->\n            </mat-form-field>\n            <mat-form-field appearance=\"outline\" class=\"confirm\" color=\"accent\">\n              <mat-label>Confirm</mat-label>\n              <input matInput placeholder=\"Password\" [type]=\"hide ? 'password' : 'text'\"   [formControl]=\"confirm\" minlength=\"8\" maxlength=\"15\" >\n              <mat-error *ngIf=\"password.hasError('required')\">mandatory</mat-error>\n              <!-- <mat-hint>Hint</mat-hint> -->\n            </mat-form-field>\n            <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n            <br>\n            <mat-hint>Use 8 or more characters with a mix of letters, numbers & symbols</mat-hint>\n          </div>\n\n            <p>Account Type: </p>\n            <mat-button-toggle-group name=\"fontStyle\" aria-label=\"Font Style\" [formControl]=\"service\">\n              <mat-button-toggle value=\"Basic\" >Basic</mat-button-toggle >\n              <mat-button-toggle value=\"Advance\">Advance</mat-button-toggle>\n            </mat-button-toggle-group>\n         \n          <!-- <p>You choosed : {{selected}}</p> -->\n        \n          <div class=\"button\">\n              <button mat-raised-button class=\"primary\" (click)=\"register()\">Register</button>\n          </div>\n            <div> <mat-error>{{message}}</mat-error></div>\n        </form>\n      </mat-card>\n      </div>\n    "

/***/ }),

/***/ "./src/app/components/register/register.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mainForm {\n  display: flex;\n  flex-direction: column;\n  padding: 5%;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin-left: 10%; }\n\n.button {\n  margin-left: 70%; }\n\n.button .primary {\n    background-color: #3399ff;\n    color: white;\n    font-style: italic; }\n\n.fundoo {\n  display: inline-block; }\n\n.inputForm {\n  align-self: center; }\n\n.inputForm .firstName {\n    width: 40%;\n    margin-right: 2%; }\n\n.inputForm .lastName {\n    width: 40%; }\n\n.inputForm .gmail {\n    width: 82%; }\n\n.inputForm .pass {\n    margin-right: 2%; }\n\n.inputForm .confirm {\n    margin-right: 3%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JyaWRnZWl0L0Frc2hheWEvRnVuZG9vLU5vdGVzL0Z1bmRvby1Ob3Rlcy9zcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFhO0VBQ2Isc0JBQXNCO0VBR3RCLFdBQVc7RUFDWCwwQkFBa0I7RUFBbEIsdUJBQWtCO0VBQWxCLGtCQUFrQjtFQUNwQixnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFEcEI7SUFHUSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGtCQUFrQixFQUFBOztBQUkxQjtFQUNJLHFCQUFvQixFQUFBOztBQUd4QjtFQUNJLGtCQUFrQixFQUFBOztBQUR0QjtJQUtJLFVBQVU7SUFDVixnQkFBZ0IsRUFBQTs7QUFOcEI7SUFTSSxVQUFVLEVBQUE7O0FBVGQ7SUFZSSxVQUFVLEVBQUE7O0FBWmQ7SUFlSSxnQkFBZ0IsRUFBQTs7QUFmcEI7SUFrQkksZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5Gb3Jte1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAvLyBib3JkZXI6MnB4IHJpZGdlO1xuICAgIC8vIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgcGFkZGluZzogNSU7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBtYXJnaW4tbGVmdDogMTAlO1xufVxuLmJ1dHRvbntcbiAgICBtYXJnaW4tbGVmdDogNzAlO1xuICAgIC5wcmltYXJ5e1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzM5OWZmO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICB9XG4gICAvLyBmbG9hdDpyaWdodDtcbn1cbi5mdW5kb297XG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG59XG5cbi5pbnB1dEZvcm17XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgXG4gICAgXG4uZmlyc3ROYW1le1xuICAgIHdpZHRoOiA0MCU7XG4gICAgbWFyZ2luLXJpZ2h0OiAyJTtcbn1cbi5sYXN0TmFtZXtcbiAgICB3aWR0aDogNDAlO1xufVxuLmdtYWlse1xuICAgIHdpZHRoOiA4MiU7XG59XG4ucGFzc3tcbiAgICBtYXJnaW4tcmlnaHQ6IDIlO1xufVxuLmNvbmZpcm17XG4gICAgbWFyZ2luLXJpZ2h0OiAzJTtcbn1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/http.service */ "./src/app/components/service/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/************************************************************************************************
* Execution : 1. default node cmd> register.ts
*
* Purpose : Registration to fundoo
*
* @file : register.ts
* @module : register.ts - This is optional if expeclictly its an npm or local package
* @author : Akshaya M I <akshayakumarmi97@gmail.com>
* @since : 28-1-2019
*
*************************************************************************************************/





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(httpService, router) {
        this.httpService = httpService;
        this.router = router;
        this.message = '';
        this.hide = true;
        this.message1 = '';
        this.firstname = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
        this.lastname = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
        this.username = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]);
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
        this.confirm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
        this.service = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        try {
            this.model = {
                "firstName": this.firstname.value,
                "lastName": this.lastname.value,
                "phoneNumber": '',
                "imageUrl": '',
                "service": this.service.value,
                "email": this.username.value,
                "confirm": this.confirm.value,
                "cardId": '',
                "password": this.password.value,
            };
            if (this.firstname.value == '' || this.lastname.value == '' || this.username.value == '' || this.password.value == '' || this.confirm.value == '' || this.service.value == '') {
                this.message = "Fields are missing";
                // console.log("Fields are missing");
                return;
            }
            else {
                this.httpService.postRequest('/user/userSignUp', this.model).subscribe(function (data) {
                    _this.responce = data;
                    _this.message1 = _this.responce.message;
                    console.log(data);
                    //this.router.navigate(['']);
                }, function (err) {
                    alert('Something went wrong ');
                });
            }
        }
        catch (err) {
            this.message = "Something bad happened";
        }
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/components/register/register.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/reset/reset.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/reset/reset.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayoutAlign=\"center center\" fxFlex=\"100\">\n  <mat-card fxFlex=\"50\">\n    <mat-card-title id=\"header\">Reset Password</mat-card-title>\n    <div>\n      <mat-error fxLayoutAlign=\"center \">{{message}}</mat-error>\n    </div>\n    <form>\n      <div class=\"first\">\n        <mat-form-field appearance=\"outline\">\n          <mat-label>password</mat-label>\n          <input matInput placeholder=\" Password\" [type]=\"hide ? 'password' \n    : 'text'\" [formControl]=\"password\"\n            required>\n          <!-- <mat-icon matSuffix>visibility_off</mat-icon> -->\n        </mat-form-field>\n\n      </div>\n      <div class=\"second\">\n        <mat-form-field appearance=\"outline\">\n          <mat-label>Re-enter password</mat-label>\n          <input matInput placeholder=\" password\" [type]=\"hide ? 'password' \n  : 'text'\" [formControl]=\"cpassword\"\n            required>\n        </mat-form-field>\n      </div>\n      <button id=\"button\" mat-raised-button color=\"primary\" (click)=\"update()\">Update</button>\n    </form>\n\n  </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/components/reset/reset.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/reset/reset.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#button {\n  width: 20%;\n  font: bold;\n  margin-left: 35%; }\n\n.first {\n  margin-left: 35%;\n  margin-right: 20%; }\n\n.second {\n  margin-left: 35%;\n  margin-right: 20; }\n\n#header {\n  text-align: center;\n  font: bold;\n  padding: 5%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JyaWRnZWl0L0Frc2hheWEvRnVuZG9vLU5vdGVzL0Z1bmRvby1Ob3Rlcy9zcmMvYXBwL2NvbXBvbmVudHMvcmVzZXQvcmVzZXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFVO0VBQ1YsVUFBVTtFQUNYLGdCQUNILEVBQUE7O0FBQ0E7RUFDSSxnQkFBZ0I7RUFDaEIsaUJBQ0osRUFBQTs7QUFDQTtFQUVJLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxrQkFBa0I7RUFDbkIsVUFBVTtFQUNWLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVzZXQvcmVzZXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYnV0dG9ue1xuICAgIHdpZHRoOiAyMCU7XG4gICAgZm9udDogYm9sZDtcbiAgIG1hcmdpbi1sZWZ0OiAzNSVcbn1cbi5maXJzdHtcbiAgICBtYXJnaW4tbGVmdDogMzUlO1xuICAgIG1hcmdpbi1yaWdodDogMjAlXG59XG4uc2Vjb25ke1xuICAgIFxuICAgIG1hcmdpbi1sZWZ0OiAzNSU7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMDtcbiAgXG59XG4jaGVhZGVye1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgIGZvbnQ6IGJvbGQ7XG4gICBwYWRkaW5nOiA1JTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/reset/reset.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/reset/reset.component.ts ***!
  \*****************************************************/
/*! exports provided: ResetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetComponent", function() { return ResetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/http.service */ "./src/app/components/service/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/************************************************************************************************
* Execution : 1. default node cmd> reset.ts
*
* Purpose : Reset to fundoo
*
* @file : reset.ts
* @module : reset.ts - This is optional if expeclictly its an npm or local package
* @author : Akshaya M I <akshayakumarmi97@gmail.com>
* @since : 1-2-2019
*
*************************************************************************************************/





//import { create } from 'domain';
var ResetComponent = /** @class */ (function () {
    //  checkPassword(group:FormGroup)
    //  {
    //    let pass=group.controls.password.value;
    //    let cpass=group.controls.cpassword.value;
    //    return pass === cpass ? null : { notSame: true }
    //  }
    function ResetComponent(httpService, router) {
        this.httpService = httpService;
        this.router = router;
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(15)]);
        this.cpassword = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(15)]);
        this.hide = true;
        this.message = '';
    }
    ResetComponent.prototype.ngOnInit = function () {
    };
    ResetComponent.prototype.update = function () {
        var payload = new FormData;
        var mytoken = localStorage.getItem('token');
        console.log("my token", mytoken);
        if (this.password.value == '' || this.cpassword.value == '') {
            this.message = " you must fill both Fields ";
        }
        else if (this.password.value !== this.cpassword.value) {
            this.message = "password doesn't match";
        }
        else 
        // if(this.password.value === this.cpassword.value)
        {
            // console.log("mytoken.value: ",mytoken)
            this.model =
                {
                    "newPassword": payload.append('newPassword', this.cpassword.value),
                    "token": payload.append('token', mytoken)
                };
            //console.log("mytoken.value: ",this.mytoken.value)
            this.httpService.postRequest('user/reset-password', this.model).subscribe(function (data) {
                console.log("data at 75-----", data);
            }, function (err) {
                alert('Something went wrong ');
            });
            //this.message="Your password is updated "
        }
    };
    ResetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reset',
            template: __webpack_require__(/*! ./reset.component.html */ "./src/app/components/reset/reset.component.html"),
            styles: [__webpack_require__(/*! ./reset.component.scss */ "./src/app/components/reset/reset.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ResetComponent);
    return ResetComponent;
}());



/***/ }),

/***/ "./src/app/components/service/http.service.ts":
/*!****************************************************!*\
  !*** ./src/app/components/service/http.service.ts ***!
  \****************************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
        this.baseUrl = "http://34.213.106.173/api/";
    }
    HttpService.prototype.postRequest = function (url, data) {
        console.log("Datasssss");
        console.log(data);
        return this.http.post(this.baseUrl + url, data);
    };
    HttpService.prototype.getRequest = function (url, data) {
        console.log("get request");
        console.log(data);
        return this.http.get(this.baseUrl + url, data);
    };
    HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HttpService);
    return HttpService;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




// const electron =require('electron');
if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/bridgeit/Akshaya/Fundoo-Notes/Fundoo-Notes/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map



const { app, BrowserWindow } = require('electron')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({ width: 800, height: 600 })

  // and load the index.html of the app.
  win.loadFile('index.html')

  // Open the DevTools.
  win.webContents.openDevTools()

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.