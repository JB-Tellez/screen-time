webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_time_helper_service__ = __webpack_require__("../../../../../src/app/services/time-helper.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store_screen_effects__ = __webpack_require__("../../../../../src/app/store/screen-effects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_backend_service__ = __webpack_require__("../../../../../src/app/services/backend.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_movies_service__ = __webpack_require__("../../../../../src/app/services/movies.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap_timepicker__ = __webpack_require__("../../../../ngx-bootstrap/timepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_bootstrap_dropdown__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ngx_bootstrap_carousel__ = __webpack_require__("../../../../ngx-bootstrap/carousel/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_movies_movies_component__ = __webpack_require__("../../../../../src/app/components/movies/movies.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_kid_time_kid_time_component__ = __webpack_require__("../../../../../src/app/components/kid-time/kid-time.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_movie_movie_component__ = __webpack_require__("../../../../../src/app/components/movie/movie.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_landing_landing_component__ = __webpack_require__("../../../../../src/app/components/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_landing_family_login_link_family_login_link_component__ = __webpack_require__("../../../../../src/app/components/landing/family-login-link/family-login-link.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_landing_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/landing/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ngrx_router_store__ = __webpack_require__("../../../../@ngrx/router-store/@ngrx/router-store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__store_model__ = __webpack_require__("../../../../../src/app/store/model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_family_login_family_login_component__ = __webpack_require__("../../../../../src/app/components/family-login/family-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_family_home_family_home_component__ = __webpack_require__("../../../../../src/app/components/family-home/family-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_family_dashboard_family_dashboard_component__ = __webpack_require__("../../../../../src/app/components/family-dashboard/family-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_family_signup_family_signup_component__ = __webpack_require__("../../../../../src/app/components/family-signup/family-signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_kid_home_kid_home_component__ = __webpack_require__("../../../../../src/app/components/kid-home/kid-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_admin_admin_component__ = __webpack_require__("../../../../../src/app/components/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__store_app_reducer__ = __webpack_require__("../../../../../src/app/store/app-reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_kid_home_interactive_wrapper_interactive_wrapper_component__ = __webpack_require__("../../../../../src/app/components/kid-home/interactive-wrapper/interactive-wrapper.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_bedtime_list_bedtime_list_component__ = __webpack_require__("../../../../../src/app/components/bedtime-list/bedtime-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__components_viewing_list_viewing_list_component__ = __webpack_require__("../../../../../src/app/components/viewing-list/viewing-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__components_kid_card_kid_card_component__ = __webpack_require__("../../../../../src/app/components/kid-card/kid-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__components_movie_screentimer_screentimer_component__ = __webpack_require__("../../../../../src/app/components/movie/screentimer/screentimer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__components_family_dashboard_kid_settings_kid_settings_component__ = __webpack_require__("../../../../../src/app/components/family-dashboard/kid-settings/kid-settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__components_kid_chart_kid_chart_component__ = __webpack_require__("../../../../../src/app/components/kid-chart/kid-chart.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_movies_movies_component__["a" /* MoviesComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_kid_time_kid_time_component__["a" /* KidTimeComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_movie_movie_component__["a" /* MovieComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_landing_landing_component__["a" /* LandingComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_landing_family_login_link_family_login_link_component__["a" /* FamilyLoginLinkComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_landing_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_28__components_family_login_family_login_component__["a" /* FamilyLoginComponent */],
            __WEBPACK_IMPORTED_MODULE_29__components_family_home_family_home_component__["a" /* FamilyHomeComponent */],
            __WEBPACK_IMPORTED_MODULE_30__components_family_dashboard_family_dashboard_component__["a" /* FamilyDashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_31__components_family_signup_family_signup_component__["a" /* FamilySignupComponent */],
            __WEBPACK_IMPORTED_MODULE_32__components_kid_home_kid_home_component__["a" /* KidHomeComponent */],
            __WEBPACK_IMPORTED_MODULE_33__components_admin_admin_component__["a" /* AdminComponent */],
            __WEBPACK_IMPORTED_MODULE_35__components_kid_home_interactive_wrapper_interactive_wrapper_component__["a" /* InteractiveWrapperComponent */],
            __WEBPACK_IMPORTED_MODULE_36__components_bedtime_list_bedtime_list_component__["a" /* BedtimeListComponent */],
            __WEBPACK_IMPORTED_MODULE_37__components_viewing_list_viewing_list_component__["a" /* ViewingListComponent */],
            __WEBPACK_IMPORTED_MODULE_38__components_kid_card_kid_card_component__["a" /* KidCardComponent */],
            __WEBPACK_IMPORTED_MODULE_39__components_movie_screentimer_screentimer_component__["a" /* ScreentimerComponent */],
            __WEBPACK_IMPORTED_MODULE_40__components_family_dashboard_kid_settings_kid_settings_component__["a" /* KidSettingsComponent */],
            __WEBPACK_IMPORTED_MODULE_41__components_kid_chart_kid_chart_component__["a" /* KidChartComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_router__["e" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_27__app_routes__["a" /* routes */]),
            __WEBPACK_IMPORTED_MODULE_24__ngrx_store__["c" /* StoreModule */].forRoot({ app: __WEBPACK_IMPORTED_MODULE_34__store_app_reducer__["a" /* appReducer */] }, { initialState: __WEBPACK_IMPORTED_MODULE_25__store_model__["c" /* initialState */] }),
            __WEBPACK_IMPORTED_MODULE_26__ngrx_effects__["c" /* EffectsModule */].forRoot([
                __WEBPACK_IMPORTED_MODULE_1__store_screen_effects__["a" /* ScreenEffects */]
            ]),
            __WEBPACK_IMPORTED_MODULE_23__ngrx_router_store__["b" /* StoreRouterConnectingModule */],
            __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap_timepicker__["a" /* TimepickerModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_11_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_12_ngx_bootstrap_carousel__["a" /* CarouselModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_14_ngx_bootstrap_modal__["b" /* ModalModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_22_ng2_charts__["ChartsModule"],
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_4__services_movies_service__["a" /* MoviesService */], __WEBPACK_IMPORTED_MODULE_3__services_backend_service__["a" /* BackendService */], __WEBPACK_IMPORTED_MODULE_1__store_screen_effects__["a" /* ScreenEffects */], __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_0__services_time_helper_service__["a" /* TimeHelperService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_movie_movie_component__ = __webpack_require__("../../../../../src/app/components/movie/movie.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_movie_screentimer_screentimer_component__ = __webpack_require__("../../../../../src/app/components/movie/screentimer/screentimer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_movies_movies_component__ = __webpack_require__("../../../../../src/app/components/movies/movies.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_admin_admin_component__ = __webpack_require__("../../../../../src/app/components/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_kid_home_kid_home_component__ = __webpack_require__("../../../../../src/app/components/kid-home/kid-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_family_dashboard_family_dashboard_component__ = __webpack_require__("../../../../../src/app/components/family-dashboard/family-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_family_signup_family_signup_component__ = __webpack_require__("../../../../../src/app/components/family-signup/family-signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_family_home_family_home_component__ = __webpack_require__("../../../../../src/app/components/family-home/family-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_family_login_family_login_component__ = __webpack_require__("../../../../../src/app/components/family-login/family-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_landing_landing_component__ = __webpack_require__("../../../../../src/app/components/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_family_dashboard_kid_settings_kid_settings_component__ = __webpack_require__("../../../../../src/app/components/family-dashboard/kid-settings/kid-settings.component.ts");











var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_9__components_landing_landing_component__["a" /* LandingComponent */] },
    { path: 'family/:id', component: __WEBPACK_IMPORTED_MODULE_7__components_family_home_family_home_component__["a" /* FamilyHomeComponent */] },
    { path: 'family/1', component: __WEBPACK_IMPORTED_MODULE_7__components_family_home_family_home_component__["a" /* FamilyHomeComponent */] },
    { path: 'family/:id/dashboard', component: __WEBPACK_IMPORTED_MODULE_5__components_family_dashboard_family_dashboard_component__["a" /* FamilyDashboardComponent */] },
    { path: 'family/:family_id/kid/:kid_id', component: __WEBPACK_IMPORTED_MODULE_4__components_kid_home_kid_home_component__["a" /* KidHomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_8__components_family_login_family_login_component__["a" /* FamilyLoginComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_6__components_family_signup_family_signup_component__["a" /* FamilySignupComponent */] },
    { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_3__components_admin_admin_component__["a" /* AdminComponent */] },
    { path: 'movies', component: __WEBPACK_IMPORTED_MODULE_2__components_movies_movies_component__["a" /* MoviesComponent */] },
    { path: 'movie/:id', component: __WEBPACK_IMPORTED_MODULE_0__components_movie_movie_component__["a" /* MovieComponent */] },
    { path: 'screentimer', component: __WEBPACK_IMPORTED_MODULE_1__components_movie_screentimer_screentimer_component__["a" /* ScreentimerComponent */] },
    { path: 'kidsettings', component: __WEBPACK_IMPORTED_MODULE_10__components_family_dashboard_kid_settings_kid_settings_component__["a" /* KidSettingsComponent */] }
];
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin/admin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"btn-group\" dropdown>\n  <button dropdownToggle type=\"button\" class=\"btn btn-primary dropdown-toggle\">\n    Select Family <span class=\"caret\"></span>\n  </button>\n  <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\n    <li *ngFor=\"let family of families$ | async\" (click)=\"familySelected(family)\">\n      {{ family.name }}\n    </li>\n  </ul>\n</div>\n\n<button class=\"btn btn-warning\" (click)=\"createFamily()\">Create Family</button>\n\n<div *ngIf=\"family$ | async as family\">\n\n  <div *ngIf=\"family.name\">\n\n    <h1 (click)=\"familyClicked()\">Current family: {{ (family$ | async).name }}</h1>\n\n    <h2>Kids:</h2>\n\n    <div class=\"btn-group\" dropdown>\n      <button dropdownToggle type=\"button\" class=\"btn btn-primary dropdown-toggle\">\n    Select Kid <span class=\"caret\"></span>\n  </button>\n      <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\n        <li *ngFor=\"let kid of family.kids\" (click)=\"kidSelected(kid)\">\n          {{ kid.name }}\n        </li>\n      </ul>\n    </div>\n\n    <button class=\"btn btn-warning\" (click)=\"createKid(family)\">Create Kid</button>\n    <ul *ngIf=\" kid$ | async as kid\">\n      <!-- <li *ngFor=\"let kid of (family$ | async).kids\"> -->\n      <div *ngIf=\"kid.name\">\n        <p (click)=\"kidClicked(kid)\">{{ kid.name }}</p>\n        <button class=\"btn btn-warning\" (click)=\"deleteKid(kid)\">delete</button>\n        <p>Bed times</p>\n        <ul>\n          <li *ngFor=\"let bedTime of kid.bedTimes\">\n            {{ bedTime | date : 'mediumTime'}}\n          </li>\n        </ul>\n        <p>Viewings</p>\n        <ul>\n          <li *ngFor=\"let viewing of kid.viewings\" (click)=\"viewingClicked(viewing)\">\n            <p>{{ viewing.title }}</p>\n            <p>time spent: {{ getTimeSpent(viewing)}}</p>\n          </li>\n        </ul>\n      </div>\n      <!-- </li> -->\n    </ul>\n  </div>\n</div>\n<!-- <h1>Current kid: {{ (kid$ | async).name }}</h1> -->\n<!-- <h2>Families:</h2>\n<button (click)=\"createFamily()\">Create Family</button>\n<ul>\n  <li *ngFor=\"let family of families$ | async\" >\n    <p (click)=\"familyClicked(family)\">{{ family.name }}</p>\n    <ul>\n      <p>Kids:</p>\n      <button (click)=\"createKid(family)\">Create Kid</button>\n      <li *ngFor=\"let kid of family.kids\">\n        <p (click)=\"kidClicked(family, kid)\">{{ kid.name }}</p>\n        <button class=\"btn btn-warning\" (click)=\"deleteKid(kid)\">delete</button>\n        <p>Bed times</p>\n        <ul>\n          <li *ngFor=\"let bedTime of kid.bedTimes\">\n            {{ bedTime | date : 'mediumTime'}}\n          </li>\n        </ul>\n        <p>Viewings</p>\n        <ul>\n          <li *ngFor=\"let viewing of kid.viewings\" (click)=\"viewingClicked(viewing)\">\n            <p>{{ viewing.title }}</p>\n            <p>time spent: {{ getTimeSpent(viewing)}}</p>\n          </li>\n        </ul>\n      </li>\n    </ul>\n  </li>\n</ul> -->\n"

/***/ }),

/***/ "../../../../../src/app/components/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_actions__ = __webpack_require__("../../../../../src/app/store/actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminComponent = (function () {
    function AdminComponent(store, router) {
        this.store = store;
        this.router = router;
    }
    AdminComponent.prototype.ngOnInit = function () {
        this.families$ = this.store.select('app', 'families');
        this.kid$ = this.store.select('app', 'kid');
        this.family$ = this.store.select('app', 'family');
    };
    AdminComponent.prototype.familySelected = function (family) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_0__store_actions__["e" /* FamilySelectedAction */](family));
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_0__store_actions__["g" /* KidSelectedAction */](null));
    };
    AdminComponent.prototype.kidSelected = function (kid) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_0__store_actions__["g" /* KidSelectedAction */](kid));
    };
    AdminComponent.prototype.familyClicked = function () {
        this.router.navigate(["/family/" + this.getFamilyId()]);
    };
    AdminComponent.prototype.getFamilyId = function () {
        var familyId;
        this.family$.take(1).subscribe(function (f) { return familyId = f._id; });
        return familyId;
    };
    AdminComponent.prototype.createFamily = function () {
        var name = 'family_' + Math.floor(Math.random() * 1000);
        var password = 'pass';
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_0__store_actions__["i" /* SignUpFamilyAction */]({ name: name, password: password }));
    };
    AdminComponent.prototype.createKid = function () {
        var kidName = 'kid_' + Math.floor(Math.random() * 1000);
        var bedTimes = [new Date(), new Date(), new Date(), new Date(), new Date(), new Date(), new Date()];
        var viewings = []; // WARNING: no viewings yet because back end errors
        var family;
        this.family$.take(1).subscribe(function (f) { return family = f; }).unsubscribe();
        var kid = { _id: undefined, name: kidName, password: 'pass',
            minutesPerWeek: 400,
            age: 10,
            avatar: 0,
            family: family,
            viewings: viewings,
            bedTimes: bedTimes,
            currentViewing: undefined };
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_0__store_actions__["b" /* CreateKidAction */](kid));
    };
    AdminComponent.prototype.kidClicked = function (kid) {
        console.log('kid clicked', kid);
        this.router.navigate(["/family/" + this.getFamilyId() + "/kid/" + kid._id]);
    };
    AdminComponent.prototype.viewingClicked = function (viewing) {
        console.log('viewing', viewing);
    };
    AdminComponent.prototype.getTimeSpent = function (viewing) {
        return +viewing.endTime - +viewing.startTime;
    };
    AdminComponent.prototype.deleteKid = function (kid) {
        // alert('delete kid ' + kid.name);
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_0__store_actions__["d" /* DeleteKidAction */](kid));
    };
    return AdminComponent;
}());
AdminComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'app-admin',
        template: __webpack_require__("../../../../../src/app/components/admin/admin.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin/admin.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]) === "function" && _b || Object])
], AdminComponent);

var _a, _b;
//# sourceMappingURL=admin.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/bedtime-list/bedtime-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/bedtime-list/bedtime-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <h2>Bedtimes:</h2>\n  <ul>\n    <li *ngFor=\"let bedTime of bedtimes; let i = index\">\n      {{ getDay(i) }}\n      <timepicker [(ngModel)]=\"bedtimes[i]\" minuteStep=\"1\"></timepicker>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/bedtime-list/bedtime-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BedtimeListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BedtimeListComponent = (function () {
    function BedtimeListComponent() {
    }
    BedtimeListComponent.prototype.ngOnInit = function () {
    };
    BedtimeListComponent.prototype.getDay = function (index) {
        return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][index];
    };
    return BedtimeListComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], BedtimeListComponent.prototype, "bedtimes", void 0);
BedtimeListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-bedtime-list',
        template: __webpack_require__("../../../../../src/app/components/bedtime-list/bedtime-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/bedtime-list/bedtime-list.component.css")]
    }),
    __metadata("design:paramtypes", [])
], BedtimeListComponent);

//# sourceMappingURL=bedtime-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/family-dashboard/family-dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\nName: Screen Time Web App\nDescription: Common Styles\nAuthors: Micaela Linda Villani & JBTellez\nTags: Ironhack Final Project - Full Stack Javascript App + Angularjs for the Front-end\n*/\n\n/* Fonts\n---headings\nfont-family: 'Montserrat Alternates', sans-serif;\nfont-family: 'Merriweather Sans', sans-serif;\n--paragraphs\nfont-family: 'Montserrat', sans-serif; \nfont-family: 'Merriweather', serif;\n*/\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-weight: 300;\n  overflow: hidden;\n}\n\n@font-face {\n    font-family: Godsown;\n    src: url(" + __webpack_require__("../../../../../src/assets/fonts/Godsownjunkyardfree.otf") + ");\n}\n\n/* ANIMATION */\n/*----------- Stars animation */\n@keyframes move-twink-back {\n    from {background-position:0 0;}\n    to {background-position:-10000px 5000px;}\n}\n@-webkit-keyframes move-twink-back {\n    from {background-position:0 0;}\n    to {background-position:-10000px 5000px;}\n}\n\n@keyframes move-clouds-back {\n    from {background-position:0 0;}\n    to {background-position:10000px 0;}\n}\n@-webkit-keyframes move-clouds-back {\n    from {background-position:0 0;}\n    to {background-position:10000px 0;}\n}\n\n.main-container {\n  height: 90vh;\n  margin: 0px;\n  padding: 0px;\n  width: 100vw;\n  overflow: hidden;\n}\n\n.stars, .twinkling, .clouds {\n  position:absolute;\n  top:0;\n  left:0;\n  right:0;\n  bottom:0;\n  width:100%;\n  height:100%;\n  display:block;\n  margin: 0px;\n  padding: 0px;\n}\n\n.stars {\n  background: #010E1D url(http://img4.hostingpics.net/pics/144421stars.png) repeat top center;\n  z-index:0;\n}\n\n.twinkling{\n  background:transparent url(" + __webpack_require__("../../../../../src/assets/images/blur.png") + ") repeat top center;\n  z-index:1;\n  -webkit-animation:move-twink-back 240s linear infinite;\n  animation:move-twink-back 240s linear infinite;\n}\n\n/* ---------------------------------------------------------BODY */\n/*  TITLES  */\n.title-div {\n    margin: 100px 50px 10px 50px;\n    padding: 30px 30px;\n    /* border: 2px solid white;  */\n    height: 20%;\n    width: 95vw;\n}\n\n.column1 {\n    float: left;\n    height: 200px;\n    /* border: 2px solid white; */\n}\n\n.title-name {\n    font-size: 40px;\n    text-transform: capitalize;\n    color: white;\n    margin-top: 20px;\n}\n\n.column2 {\n    float: right;\n    height: 200px;\n    width: auto;\n    /* border: 2px solid white; */\n    padding: 10px 20px;\n}\n\n.kid-img {\n    float: left;\n    padding: 10px;\n}\n\n.kid-icons {\n    height: 70px;\n}\n\n.add-btn {\n    height: 50px;\n    margin-top: 10px;\n}\n\n.kid-settings-link {\n    background-color: #F79432;\n    position: absolute;\n    top: 25%;\n    left: 87%;\n    height: 30px;\n    padding: 0 10px;\n}\n\n.kid-set-btn {\n    color: white;\n    padding-top: 4px;\n    text-transform: uppercase;\n    font-size: 15px;\n}\n\na.kid-set-anchor:hover {\n    text-decoration: none !important;\n    color: #EF4D7B;\n}\n\n\n\n\n\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/family-dashboard/family-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- ANIMATION CONTROLS -->\n<main class=\"container-fluid main-container jumbotron\">\n  <div class=\"stars\">\n    <div class=\"twinkling\">\n\n      <!-- NAVBAR ROW-->\n      <app-navbar></app-navbar>\n\n      <!-- TITLES ROW -->\n      <div class=\"container row title-div\" *ngIf=\"family$ | async as family\">\n        <!-- LEFT COLUMN - WELCOME FAMILY --> \n        <div class=\"column1 col-sm-12 col-md-4 col-lg-4\">\n          <h2 class=\"titles\"> Welcome, </h2>\n          <p class=\"title-name\"> The {{ family.name }}'s </p>\n        </div>\n        <!-- RIGHT COLUMN -->\n        <div class=\"column2 col-sm-12 col-md-8 col-lg-8\">\n          <!-- KIDS ICONS -->\n          <a class=\"kid-img\" *ngFor=\"let kid of family.kids\" (click)=\"kidSelected(kid)\">\n            <img src=\"../../../assets/images/girl-xs.png\" alt=\"small girl icon\" class=\"kid-icons\" >\n             <!-- {{ kid.name }}  -->\n            <!-- <p> kid.name </p> -->\n          </a>\n          <!-- ADD NEW KID ICON  -->\n          <a (click)=\"createKid()\" class=\"kid-img\">\n              <img src=\"../../../assets/images/add-btn.png\" alt=\"add button\" class=\"add-btn\">\n            <!-- <p> add new </p> -->\n            </a>\n        </div>\n      </div>\n\n      <app-kid-chart [kids]=\"(family$ | async).kids\"></app-kid-chart>\n\n      <div bsModal #settingsModal=\"bs-modal\" [config]=\"{backdrop: false}\" class=\"modal fade in\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\"\n        aria-hidden=\"true\">\n        <div class=\"modal-dialog modal-sm\">\n          <div class=\"modal-content\">\n            <div class=\"modal-body\">\n              <app-kid-settings [kid]=\"kid$ | async\" [family]=\"family$ | async\"></app-kid-settings>\n            </div>\n          </div>\n        </div>\n      </div>\n\n\n    </div>\n  </div>\n</main>\n"

/***/ }),

/***/ "../../../../../src/app/components/family-dashboard/family-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FamilyDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_actions__ = __webpack_require__("../../../../../src/app/store/actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FamilyDashboardComponent = (function () {
    function FamilyDashboardComponent(route, router, store) {
        this.route = route;
        this.router = router;
        this.store = store;
    }
    FamilyDashboardComponent.prototype.ngOnInit = function () {
        this.family$ = this.store.select('app', 'family');
        this.kid$ = this.store.select('app', 'kid');
    };
    FamilyDashboardComponent.prototype.kidSelected = function (kid) {
        console.log('kidSelected', kid);
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_0__store_actions__["g" /* KidSelectedAction */](kid));
        this.showSettingsModal();
    };
    FamilyDashboardComponent.prototype.gotoKidSettings = function () {
        // this.router.navigate['/kidsettings'];
        // this.showSettingsModal();
    };
    FamilyDashboardComponent.prototype.createKid = function () {
        this.showSettingsModal();
    };
    FamilyDashboardComponent.prototype.showSettingsModal = function () {
        this.settingsModal.show();
    };
    FamilyDashboardComponent.prototype.hideSettingsModal = function () {
        this.settingsModal.hide();
    };
    return FamilyDashboardComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewChild"])('settingsModal'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* ModalDirective */]) === "function" && _a || Object)
], FamilyDashboardComponent.prototype, "settingsModal", void 0);
FamilyDashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'app-family-dashboard',
        template: __webpack_require__("../../../../../src/app/components/family-dashboard/family-dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/family-dashboard/family-dashboard.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */]) === "function" && _d || Object])
], FamilyDashboardComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=family-dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/family-dashboard/kid-settings/kid-settings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\nName: Screen Time Web App\nDescription: Common Styles\nAuthors: Micaela Linda Villani & JBTellez\nTags: Ironhack Final Project - Full Stack Javascript App + Angularjs for the Front-end\n*/\n\n/* Fonts\n---headings\nfont-family: 'Godsown';\n--paragraphs\nfont-family: 'Montserrat', sans-serif; \nfont-family: 'Merriweather', serif;\n*/\n\n@font-face {\n    font-family: Godsown;\n    src: url(" + __webpack_require__("../../../../../src/assets/fonts/Godsownjunkyardfree.otf") + ");\n}\n\n/* KID SETTINGS */\n.kid-settings {\n    /* border: 2px solid red;   */\n    height: 100%;\n    width: 35vw; \n    margin: 0px; \n    /* padding: 7px 0px 0px 10px; */\n    background-color: #010F20;\n    /* opacity: 0.8; */\n    overflow: scroll;\n}\n\n.kid-title {\n    text-transform: uppercase;\n    font-family: 'Godsown';\n    color: RGBA(76, 193, 252, 1.00);\n    text-align: center;\n}\n\np.avatar {\n    color:#A166AB;\n    font-size: 22px !important;\n}\n\n.kid-avatar {\n    height: 70px;\n    float: left;\n    margin: 5px;\n}\n\n /* .checkMenu > input {\n    visibility: hidden;\n}  */\n\n.check-avatar {\n    display: inline;\n}\n\ninput:checked {\n  background-color: white;\n}\n\n.control-label {\n    margin: 10px;\n    font-size: 20px;\n    text-transform: uppercase;\n    font-family: 'Godsown';\n    color: #F37055;\n}\n\nlabel.age {\n    color: #EF4D7B;\n}\n\n/* SCREENTIME */\n.screentime {\n    width: 10%;\n    float: left;\n    margin: 20px 0px 0px 0px;\n}\n\n.screentime-input {\n    width: 10%;\n    float: left;\n    margin: 20px 0px 0px 130px;\n}\n\n/* BEDTIME */\n.bedtime-container {\n    /* border: 2px solid white;  */\n    height: 50px; \n}\n\n.bedtime-icn {\n    height: 30px;\n    margin: 0px;\n    float: left;\n}\n\n.bedtime-p {\n    float: left;\n    padding: 5px;\n    margin-left: 5px;\n    color: #F79432;\n    font-size: 20px;\n}\n\n/* TIMEPICK TABLE */\n.bedtime-sel-container {\n    border: 2px dotted #0CB49B;    \n    margin: 0 auto;\n    padding: 20px;\n}\n.timepick {\n    width: 200px;\n    /* border: 1px dotted #6CBC82;  */\n    margin: 0 auto;   \n    float: left;\n}\n\n.timepick-p {\n    color: #4CC1FC;\n}\n\n/* SUBMIT BUTTON */\n.submit-row {\n    padding: 20px 0px;\n}\n\n.submit-btn {\n    background-color: #EF4D7B;\n    color: white;\n    margin: 0 auto; \n    border: none;\n    font-style: 20px;\n    height: 30px;\n    text-transform: uppercase;\n    font-family: 'Godsown';\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/family-dashboard/kid-settings/kid-settings.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container row kid-settings\">\n  <h2 class=\"kid-title\">{{ kid?.name }}</h2>\n  <form class=\"form\" (ngSubmit)=\"submitForm(myForm)\" #myForm=\"ngForm\"> \n    <!-- LEFT COLUMN -->\n    <div class=\"col-sm-12 col-md-12 col-lg-12\">\n      <p class=\"control-label avatar\">Avatar</p>\n      <!-- FIRST AVATAR -->\n      <div class=\"form-group check-avatar\">\n        <label class=\"checkMenu\" for=\"icon-one\" id=\"icon-one\">\n          <input type=\"radio\" name=\"avatar\" value=\"icon_one\" id=\"icon-one\" [(ngModel)]=\"avatars[0]\">\n          <img src=\"../../../assets/images/100-icon.png\" alt=\"kid avatar\" class=\"kid-avatar\">\n        </label>\n      </div>\n      <!--SECOND AVATAR -->\n      <div class=\"form-group check-avatar\">\n        <label class=\"checkMenu\" for=\"icon-two\">\n          <input type=\"radio\" name=\"avatar\" value=\"icon_two\" id=\"icon-two\" [(ngModel)]=\"avatars[1]\">\n          <img src=\"../../../assets/images/teen-boy-icon.png\" alt=\"kid avatar\" class=\"kid-avatar\">\n        </label>\n      </div>\n      <!-- THIRD AVATAR -->\n      <div class=\"form-group check-avatar\">\n        <label class=\"checkMenu\" for=\"icon-three\">\n          <input type=\"radio\" name=\"avatar\" value=\"icon_three\" id=\"icon-three\" [(ngModel)]=\"avatars[2]\">\n          <img src=\"../../../../assets/images/heartlogo.png\" alt=\"kid avatar\" class=\"kid-avatar\">\n        </label>\n      </div>\n      <!-- FOURTH AVATAR -->\n      <div class=\"form-group check-avatar\">\n        <label class=\"checkMenu\" for=\"icon-four\">\n          <input type=\"radio\" name=\"avatar\" value=\"icon_four\" id=\"icon-four\" [(ngModel)]=\"avatars[3]\">\n          <img src=\"../../../assets/images/robot-green.png\" alt=\"kid avatar\" class=\"kid-avatar\">\n        </label>\n      </div>\n                  \n      <!-- NAME INPUT -->\n      <div class=\"text-form-container\">\n        <div class=\"form-group control\">\n          <label class=\"control-label\" for=\"Name\"> Name </label>\n          <input id=\"Name\" name=\"Name\" type=\"text\" placeholder=\"name\" class=\"form-control input-md\" [(ngModel)]=\"kid.name\">\n        </div>\n        <!-- AGE INPUT -->\n        <div class=\"form-group\">\n          <label class=\"control-label age\" for=\"Age\"> Age </label>\n          <input id=\"Age\" name=\"Age\" type=\"number\" placeholder=\"age\" class=\"form-control input-md\" [(ngModel)]=\"kid.age\">\n        </div>\n        <!-- SCREEN TIME  -->\n        <div class=\"form-group\">\n          <label class=\"control-label\" for=\"screentime\">\n            <img src=\"../../../../assets/images/xs-screentime-logo.png\" class=\"screentime-logo\">\n          </label>\n          <input id=\"screentime\" name=\"screentime\" type=\"number\" placeholder=\"minutes\" class=\"form-control input-md\" [(ngModel)]=\"kid.minutesPerWeek\">\n        </div>\n         <!-- BEDTIME --> \n         <div class=\"form-group bedtime-container\">\n          <label class=\"control-label bedtime-lbl\" for=\"bedtime\">\n            <img src=\"../../../assets/images/bedtime.png\" alt=\"bedtime icon\" class=\"bedtime bedtime-icn\"> \n            <p class=\"bedtime-p\"> bedtime </p>\n          </label>\n        </div>\n        \n        <!-- FIRST ROW -->\n        <div class=\"bedtime-sel-container\">\n          <div class=\"row first-row\">\n            <div class=\"timepick col-sm-4 col-md-4 col-lg-4\">\n              <p class=\"timepick-p\"> MONDAY </p>\n              <timepicker [(ngModel)]=\"kid.bedTimes[0]\" name=\"bedtime0\" [mousewheel]=\"true\"></timepicker> \n            </div>\n                      \n            <div class=\"timepick col-sm-4 col-md-4 col-lg-4\">\n              <p class=\"timepick-p\"> TUESDAY </p>\n              <timepicker [(ngModel)]=\"kid.bedTimes[1]\" name=\"bedtime1\" [mousewheel]=\"true\"></timepicker> \n            </div>\n          </div>\n          \n          <!-- SECOND ROW -->\n          <div class=\"row second-row\">\n            <div class=\"timepick col-sm-4 col-md-4 col-lg-4\">\n              <p class=\"timepick-p\"> WEDNESDAY </p>\n              <timepicker [(ngModel)]=\"kid.bedTimes[2]\" name=\"bedtime2\" [mousewheel]=\"true\"></timepicker> \n            </div>\n\n            <div class=\"timepick col-sm-4 col-md-4 col-lg-4\">\n              <p class=\"timepick-p\"> THURSDAY </p>\n              <timepicker [(ngModel)]=\"kid.bedTimes[3]\" name=\"bedtime3\" [mousewheel]=\"true\"></timepicker> \n            </div>\n          </div>          \n\n          <!-- THIRD ROW -->\n          <div class=\"row third-row\">\n            <div class=\"timepick col-sm-4 col-md-4 col-lg-4\">\n              <p class=\"timepick-p\"> FRIDAY </p>\n              <timepicker [(ngModel)]=\"kid.bedTimes[4]\" name=\"bedtime4\" [mousewheel]=\"true\"></timepicker> \n            </div>\n\n            <div class=\"timepick col-sm-4 col-md-4 col-lg-4\">\n              <p class=\"timepick-p\"> SATURDAY </p>\n              <timepicker [(ngModel)]=\"kid.bedTimes[5]\" name=\"bedtime5\" [mousewheel]=\"true\"></timepicker> \n            </div>\n          </div>\n\n            <!-- FOURTH ROW -->\n          <div class=\"row fourth-row\">\n            <div class=\"timepick ol-sm-4 col-md-4 col-lg-4\">\n              <p class=\"timepick-p\"> SUNDAY </p>\n              <timepicker [(ngModel)]=\"kid.bedTimes[6]\" name=\"bedtime6\" [mousewheel]=\"true\"></timepicker> \n            </div>\n          </div>\n        </div>\n        \n        <!-- SUBMIT BUTTON -->\n        <div class=\"form-group\">\n          <label class=\"col-md-4\" for=\"submit\"></label>\n            <div class=\"col-md-4 submit-row\">\n              <button id=\"submit\" name=\"submit\" class=\"submit-btn\">Submit</button>\n            </div>\n        </div>\n\n      </div>\n    </div>\n  </form>\n</div>\n              "

/***/ }),

/***/ "../../../../../src/app/components/family-dashboard/kid-settings/kid-settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KidSettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_actions__ = __webpack_require__("../../../../../src/app/store/actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_model__ = __webpack_require__("../../../../../src/app/store/model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var KidSettingsComponent = (function () {
    function KidSettingsComponent(store) {
        this.store = store;
        this.avatars = [0, 1, 2, 3];
    }
    KidSettingsComponent.prototype.ngOnInit = function () {
        this.kid = {
            _id: undefined,
            name: 'name',
            avatar: 0,
            age: 0,
            password: '',
            family: undefined,
            bedTimes: [new Date(), new Date(), new Date(), new Date(), new Date(), new Date(), new Date()],
            viewings: [],
            minutesPerWeek: 100,
            currentViewing: undefined
        };
    };
    KidSettingsComponent.prototype.submitForm = function (form) {
        this.kid.family = this.family;
        this.kid.avatar = ['icon_one', 'icon_two', 'icon_three', 'icon_four'].indexOf(form.value.avatar);
        console.log('submitForm', this.kid, form);
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_0__store_actions__["b" /* CreateKidAction */](this.kid));
    };
    return KidSettingsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__store_model__["Kid"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__store_model__["Kid"]) === "function" && _a || Object)
], KidSettingsComponent.prototype, "kid", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__store_model__["Family"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__store_model__["Family"]) === "function" && _b || Object)
], KidSettingsComponent.prototype, "family", void 0);
KidSettingsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-kid-settings',
        template: __webpack_require__("../../../../../src/app/components/family-dashboard/kid-settings/kid-settings.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/family-dashboard/kid-settings/kid-settings.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */]) === "function" && _c || Object])
], KidSettingsComponent);

var _a, _b, _c;
//# sourceMappingURL=kid-settings.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/family-home/family-home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\nName: Screen Time Web App\nDescription: Common Styles\nAuthors: Micaela Linda Villani & JBTellez\nTags: Ironhack Final Project - Full Stack Javascript App + Angularjs for the Front-end\n*/\n\n/* Fonts\n---headings\nfont-family: 'Montserrat Alternates', sans-serif;\nfont-family: 'Merriweather Sans', sans-serif;\n--paragraphs\nfont-family: 'Montserrat', sans-serif; \nfont-family: 'Merriweather', serif;\n*/\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-weight: 300;\n}\n\n@font-face {\n    font-family: Godsown;\n    src: url(" + __webpack_require__("../../../../../src/assets/fonts/Godsownjunkyardfree.otf") + ");\n}\n\n/* ANIMATION */\n/*----------- Stars animation */\n@keyframes move-twink-back {\n    from {background-position:0 0;}\n    to {background-position:-10000px 5000px;}\n}\n@-webkit-keyframes move-twink-back {\n    from {background-position:0 0;}\n    to {background-position:-10000px 5000px;}\n}\n\n@keyframes move-clouds-back {\n    from {background-position:0 0;}\n    to {background-position:10000px 0;}\n}\n@-webkit-keyframes move-clouds-back {\n    from {background-position:0 0;}\n    to {background-position:10000px 0;}\n}\n\n.main-container {\n  height: 90vh;\n  margin: 0px;\n  padding: 0px;\n  width: 100vw;\n  overflow: hidden;\n}\n\n.stars, .twinkling, .clouds {\n  position:absolute;\n  top:0;\n  left:0;\n  right:0;\n  bottom:0;\n  width:100%;\n  height:100%;\n  display:block;\n}\n\n.stars {\n  background: #010E1D url(http://img4.hostingpics.net/pics/144421stars.png) repeat top center;\n  z-index:0;\n}\n\n.twinkling{\n  background:transparent url(" + __webpack_require__("../../../../../src/assets/images/blur.png") + ") repeat top center;\n  z-index:1;\n  -webkit-animation:move-twink-back 240s linear infinite;\n  animation:move-twink-back 240s linear infinite;\n}\n\n/* BODY */\n/* TITLE */\n.title-row {\n    position: relative;\n    top: 27%;\n    text-align: center;\n}\n\nh1.title {\n    font-family: Godsown;\n    color: white;\n    z-index: 1;\n    font-size: 65px !important;\n    text-transform: uppercase;\n}\nspan.color {\n    color: #4CC1FC;\n}\n\n/* ICONS */\n.wrapper {\n    position: relative;\n    top: 34%;\n    text-align: center;\n    color: white;\n    background-color: #010F20;\n    opacity: 0.8;\n    z-index: 1;\n}\n\n.icon-col {\n    cursor: pointer;\n}\n\ndiv.icon-col:hover {\n    opacity: 1;\n    box-shadow: 0 8px 30px 3px #000000;\n    padding-top: 20px;\n}\n\n.icons {\n    height: 280px;\n    margin: 0 auto;\n    position: relative;\n}\n\n.icon-p {\n    font-family: 'Montserrat', sans-serif; \n    margin-bottom: 15px;\n    margin-top: 20px;\n    font-size: 25px;\n    font-weight: 200;\n    color: white;\n    text-transform: uppercase;\n}\n\na:hover {\n    text-decoration: none !important;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/family-home/family-home.component.html":
/***/ (function(module, exports) {

module.exports = "<main class=\"container-fluid main-container jumbotron\" *ngIf=\"family$ | async as family\">\n  <div class=\"stars\">\n    <div class=\"twinkling\">\n      <!-- NAVBAR -->\n      <app-navbar></app-navbar>\n\n      <!-- TITLE -->\n      <div class=\"row title-row\">\n      \n        <h1 class=\"title col-sm-12 col-md-12 col-lg-12\"> THE <span class=\"color\"> {{ family.name }} </span></h1>\n      </div>\n      <!-- ICONS -->\n      <div class=\"wrapper\">\n        <div class=\"row icons-row\">\n          <!-- FIRST ICON -->\n          <div class=\"col-sm-12 col-md-4 col-lg-4 icon-col\" >\n            <a (click)=\"gotoFamilyDashboard()\">\n              <img class=\"responsive-image icons\" src=\"../../../assets/images/family-icon-big.png\">\n            </a>\n            <p class=\"icon-p\"> Dashboard </p>\n            \n          </div>\n          <!-- KID ICONS -->\n          <div *ngFor=\"let kid of getKids(family); let i = index\" class=\"col-sm-12 col-md-4 col-lg-4 icon-col\" >\n            <a (click)=\"gotoKidHome(kid)\">\n              <img *ngIf=\"i == 0\" class=\"responsive-image icons\" src=\"../../../assets/images/little-girl-icon.png\">\n              <img *ngIf=\"i == 1\" class=\"responsive-image icons\" src=\"../../../assets/images/robot-big.png\">\n            </a>\n            <p class=\"icon-p\"> {{ kid.name }} </p>            \n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</main>\n"

/***/ }),

/***/ "../../../../../src/app/components/family-home/family-home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FamilyHomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FamilyHomeComponent = (function () {
    function FamilyHomeComponent(store, route, router) {
        this.store = store;
        this.route = route;
        this.router = router;
    }
    FamilyHomeComponent.prototype.ngOnInit = function () {
        this.family$ = this.store.select('app', 'family');
    };
    FamilyHomeComponent.prototype.getKids = function (family) {
        return family.kids ? family.kids.slice(0, 2) : [];
    };
    FamilyHomeComponent.prototype.gotoFamilyDashboard = function () {
        // WARNING: snapshot safe?
        var id = this.route.snapshot.params['id'];
        // TODO: got to be an easier way to just add /dashboard to current route
        this.router.navigate(["/family/" + id + "/dashboard"]);
    };
    FamilyHomeComponent.prototype.gotoKidHome = function (kid) {
        // WARNING: snapshot safe?
        var id = this.route.snapshot.params['id'];
        this.router.navigate(["/family/" + id + "/kid/" + kid._id]);
    };
    return FamilyHomeComponent;
}());
FamilyHomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-family-home',
        template: __webpack_require__("../../../../../src/app/components/family-home/family-home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/family-home/family-home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* Router */]) === "function" && _c || Object])
], FamilyHomeComponent);

var _a, _b, _c;
//# sourceMappingURL=family-home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/family-login/family-login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\nName: Screen Time Web App\nDescription: Common Styles\nAuthors: Micaela Linda Villani & JBTellez\nTags: Ironhack Final Project - Full Stack Javascript App + Angularjs for the Front-end\n*/\n\n/* Fonts\n---headings\nfont-family: 'Montserrat Alternates', sans-serif;\nfont-family: 'Merriweather Sans', sans-serif;\n--paragraphs\nfont-family: 'Montserrat', sans-serif; \nfont-family: 'Merriweather', serif;\n*/\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-weight: 300;\n  overflow: hidden;\n}\n/* ANIMATION */\n/*----------- Stars animation */\n@keyframes move-twink-back {\n    from {background-position:0 0;}\n    to {background-position:-10000px 5000px;}\n}\n@-webkit-keyframes move-twink-back {\n    from {background-position:0 0;}\n    to {background-position:-10000px 5000px;}\n}\n\n@keyframes move-clouds-back {\n    from {background-position:0 0;}\n    to {background-position:10000px 0;}\n}\n@-webkit-keyframes move-clouds-back {\n    from {background-position:0 0;}\n    to {background-position:10000px 0;}\n}\n\n.main-container {\n  height: 90vh;\n  margin: 0px;\n  padding: 0px;\n  width: 100vw;\n  overflow: hidden;\n}\n\n.stars, .twinkling, .clouds {\n  position:absolute;\n  top:0;\n  left:0;\n  right:0;\n  bottom:0;\n  width:100%;\n  height:100%;\n  display:block;\n}\n\n.stars {\n  background: #010E1D url(http://img4.hostingpics.net/pics/144421stars.png) repeat top center;\n  z-index:0;\n}\n\n.twinkling{\n  background:transparent url(" + __webpack_require__("../../../../../src/assets/images/blur.png") + ") repeat top center;\n  z-index:1;\n  -webkit-animation:move-twink-back 240s linear infinite;\n  animation:move-twink-back 240s linear infinite;\n}\n\nbody {\n  font-family: 'Montserrat', sans-serif; \n  color: white;\n  font-weight: 300;\n}\n\nbody ::-webkit-input-placeholder {\n  /* WebKit browsers */\n  font-family: 'Montserrat', sans-serif; \n  color: white;\n  font-weight: 300;\n}\n\nbody :-moz-placeholder {\n  /* Mozilla Firefox 4 to 18 */\n  font-family: 'Montserrat', sans-serif; \n  color: white;\n  opacity: 1;\n  font-weight: 300;\n}\n\nbody ::-moz-placeholder {\n  /* Mozilla Firefox 19+ */\n  font-family: 'Montserrat', sans-serif; \n  color: white;\n  opacity: 1;\n  font-weight: 300;\n}\n\nbody :-ms-input-placeholder {\n  /* Internet Explorer 10+ */\n  font-family: 'Montserrat', sans-serif; \n  color: white;\n  font-weight: 300;\n}\n\n.wrapper {\n  position: absolute;\n  top: 55%;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  margin-top: -200px;\n  overflow: hidden;\n}\n\n.wrapper.form-success .container h1 {\n  -webkit-transform: translateY(85px);\n          transform: translateY(85px);\n}\n\n.container {\n  max-width: 600px;\n  margin: 0 auto;\n  padding: 80px 0;\n  height: 400px;\n  text-align: center;\n}\n\n.container h1 {\n  font-size: 40px;\n  transition-duration: 1s;\n  transition-timing-function: ease-in-put;\n  font-weight: 200;\n}\n\n.img-responsive {\n  margin: 10% auto;\n}\n\nform {\n  padding: 20px 0;\n  position: relative;\n  z-index: 2;\n}\n\nform input {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n  outline: 0;\n  border: 1px solid rgba(255, 255, 255, 0.4);\n  background-color: rgba(255, 255, 255, 0.2);\n  width: 250px;\n  border-radius: 3px;\n  padding: 10px 15px;\n  margin: 0 auto 10px auto;\n  display: block;\n  text-align: center;\n  font-size: 18px;\n  color: white;\n  transition-duration: 0.25s;\n  font-weight: 300;\n}\n\nform input:hover {\n  background-color: rgba(255, 255, 255, 0.4);\n}\n\nform input:focus {\n  background-color: white;\n  width: 300px;\n  color: #2EF9A0;\n}\n\nform button {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n  outline: 0;\n  background-color: white;\n  border: 0;\n  padding: 10px 15px;\n  color: #2EF9A0;\n  border-radius: 3px;\n  width: 250px;\n  cursor: pointer;\n  font-size: 18px;\n  transition-duration: 0.25s;\n}\n\nform button:hover {\n  background-image: linear-gradient(to bottom right, #0cb49b 0%, #4CC1FC 100%);\n  text-decoration: none !important;\n}\n\np.signup {\n  color: white;\n  margin-top: 30px;\n  font-size: 16px;\n}\n\na.signup-link:hover{\n  color: #EF4D7B;\n  text-decoration: none !important;\n  cursor: pointer;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/family-login/family-login.component.html":
/***/ (function(module, exports) {

module.exports = "<main class=\"main-container jumbotron\">\n  <div class=\"stars\">\n    <div class=\"twinkling\">\n    <!-- NAVBAR -->\n    <app-navbar></app-navbar>\n    <img src=\"../../../assets/images/screentime_final.gif\" alt=\"screen time logo\" class=\"img-responsive\"> \n    <!-- LOGIN FORM -->\n      <div class=\"wrapper\">\n        <div class=\"container\">\n          <form class=\"form\" #loginForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n            <input type=\"text\" placeholder=\"Name\" [(ngModel)]=\"model.name\" name=\"name\">\n            <input type=\"password\" placeholder=\"Password\" [(ngModel)]=\"model.password\" name=\"password\">\n            <button type=\"submit\" id=\"login-button\">Login</button>\n            <p class=\"signup\"> If your family is not registered. <a (click)=\"gotoSignup()\" class=\"signup-link\">Sign Up Here</a></p>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</main>\n\t"

/***/ }),

/***/ "../../../../../src/app/components/family-login/family-login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FamilyLoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FamilyLoginComponent = (function () {
    function FamilyLoginComponent(router, auth) {
        this.router = router;
        this.auth = auth;
        this.model = { name: '', password: '' };
    }
    FamilyLoginComponent.prototype.gotoSignup = function () {
        this.router.navigate(['/signup']);
    };
    FamilyLoginComponent.prototype.onSubmit = function () {
        this.auth.login(this.model.name, this.model.password);
        return false;
    };
    return FamilyLoginComponent;
}());
FamilyLoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-family-login',
        template: __webpack_require__("../../../../../src/app/components/family-login/family-login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/family-login/family-login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], FamilyLoginComponent);

var _a, _b;
//# sourceMappingURL=family-login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/family-signup/family-signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\nName: Screen Time Web App\nDescription: Common Styles\nAuthors: Micaela Linda Villani & JBTellez\nTags: Ironhack Final Project - Full Stack Javascript App + Angularjs for the Front-end\n*/\n\n/* Fonts\n---headings\nfont-family: 'Montserrat Alternates', sans-serif;\nfont-family: 'Merriweather Sans', sans-serif;\n--paragraphs\nfont-family: 'Montserrat', sans-serif; \nfont-family: 'Merriweather', serif;\n*/\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-weight: 300;\n  overflow: hidden;\n\n}\n\n/* ANIMATION */\n/*----------- Stars animation */\n@keyframes move-twink-back {\n    from {background-position:0 0;}\n    to {background-position:-10000px 5000px;}\n}\n@-webkit-keyframes move-twink-back {\n    from {background-position:0 0;}\n    to {background-position:-10000px 5000px;}\n}\n\n@keyframes move-clouds-back {\n    from {background-position:0 0;}\n    to {background-position:10000px 0;}\n}\n@-webkit-keyframes move-clouds-back {\n    from {background-position:0 0;}\n    to {background-position:10000px 0;}\n}\n\n.main-container {\n  height: 90vh;\n  margin: 0px;\n  padding: 0px;\n  width: 100vw;\n  overflow: hidden;\n}\n\n.stars, .twinkling, .clouds {\n  position:absolute;\n  top:0;\n  left:0;\n  right:0;\n  bottom:0;\n  width:100%;\n  height:100%;\n  display:block;\n}\n\n.stars {\n  background: #010E1D url(http://img4.hostingpics.net/pics/144421stars.png) repeat top center;\n  z-index:0;\n}\n\n.twinkling{\n  background:transparent url(" + __webpack_require__("../../../../../src/assets/images/blur.png") + ") repeat top center;\n  z-index:1;\n  -webkit-animation:move-twink-back 240s linear infinite;\n  animation:move-twink-back 240s linear infinite;\n}\n\n\n\n\nbody {\n  font-family: 'Montserrat', sans-serif; \n  color: white;\n  font-weight: 300;\n}\nbody ::-webkit-input-placeholder {\n  /* WebKit browsers */\n  font-family: 'Montserrat', sans-serif; \n  color: white;\n  font-weight: 300;\n}\nbody :-moz-placeholder {\n  /* Mozilla Firefox 4 to 18 */\n  font-family: 'Montserrat', sans-serif; \n  color: white;\n  opacity: 1;\n  font-weight: 300;\n}\nbody ::-moz-placeholder {\n  /* Mozilla Firefox 19+ */\n  font-family: 'Montserrat', sans-serif; \n  color: white;\n  opacity: 1;\n  font-weight: 300;\n}\nbody :-ms-input-placeholder {\n  /* Internet Explorer 10+ */\n  font-family: 'Montserrat', sans-serif; \n  color: white;\n  font-weight: 300;\n}\n.wrapper {\n  position: absolute;\n  top: 55%;\n  left: 0;\n  width: 100%;\n  height: 400px;\n  margin-top: -200px;\n  overflow: hidden;\n}\n.wrapper.form-success .container h1 {\n  -webkit-transform: translateY(85px);\n          transform: translateY(85px);\n}\n.container {\n  max-width: 600px;\n  margin: 0 auto;\n  padding: 80px 0;\n  height: 400px;\n  text-align: center;\n}\n.container h1 {\n  font-size: 40px;\n  transition-duration: 1s;\n  transition-timing-function: ease-in-put;\n  font-weight: 200;\n}\n\n.img-responsive {\n  margin: 10% auto;\n}\n\nform {\n  padding: 20px 0;\n  position: relative;\n  z-index: 2;\n}\nform input {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  outline: 0;\n  border: 1px solid rgba(255, 255, 255, 0.4);\n  background-color: rgba(255, 255, 255, 0.2);\n  width: 250px;\n  border-radius: 3px;\n  padding: 10px 15px;\n  margin: 0 auto 10px auto;\n  display: block;\n  text-align: center;\n  font-size: 18px;\n  color: white;\n  transition-duration: 0.25s;\n  font-weight: 300;\n}\nform input:hover {\n  background-color: rgba(255, 255, 255, 0.4);\n}\nform input:focus {\n  background-color: white;\n  width: 300px;\n  color: #0CB49B;\n}\nform button {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  outline: 0;\n  background-color: white;\n  border: 0;\n  padding: 10px 15px;\n  color: #F37055;\n  border-radius: 3px;\n  width: 250px;\n  cursor: pointer;\n  font-size: 18px;\n  transition-duration: 0.25s;\n}\nform button:hover {\n  background-image: linear-gradient(to bottom right, #F79432 0%, #EF4D7B 100%);\n  text-decoration: none !important;\n  color: white;\n}\n\np.login {\n  color: white;\n  margin-top: 30px;\n  font-size: 16px;\n}\n\na.login-link:hover{\n  color: #EF4D7B;\n  text-decoration: none !important;\n  cursor: pointer;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/family-signup/family-signup.component.html":
/***/ (function(module, exports) {

module.exports = "<main class=\"main-container jumbotron\">\n  <div class=\"stars\">\n    <div class=\"twinkling\">\n    <!-- NAVBAR -->\n    <app-navbar></app-navbar>\n    <img src=\"../../../assets/images/screentime_final.gif\" alt=\"screen time logo\" class=\"img-responsive\"> \n    <!-- SIGNUP FORM -->\n      <div class=\"wrapper\">\n        <div class=\"container\">\n          <form class=\"form\" #signupForm = \"ngForm\" (ngSubmit)=\"onSubmit()\">\n            <input type=\"text\" placeholder=\"Name\" [(ngModel)]=\"model.name\" name=\"name\">\n            <input type=\"password\" placeholder=\"Password\" [(ngModel)]=\"model.password\" name=\"password\">\n            <button type=\"submit\" id=\"login-button\">Signup</button>\n            <p class=\"login\"> If your family already registered. <a (click)=\"gotoLogin()\" class=\"login-link\">Login Here</a></p>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</main>\n\t\n\t"

/***/ }),

/***/ "../../../../../src/app/components/family-signup/family-signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FamilySignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FamilySignupComponent = (function () {
    function FamilySignupComponent(router, auth) {
        this.router = router;
        this.auth = auth;
        this.model = { name: '', password: '' };
    }
    FamilySignupComponent.prototype.ngOnInit = function () {
    };
    FamilySignupComponent.prototype.gotoLogin = function () {
        this.router.navigate(['/login']);
    };
    FamilySignupComponent.prototype.onSubmit = function () {
        this.auth.signup(this.model.name, this.model.password);
        return false;
    };
    return FamilySignupComponent;
}());
FamilySignupComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-family-signup',
        template: __webpack_require__("../../../../../src/app/components/family-signup/family-signup.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/family-signup/family-signup.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], FamilySignupComponent);

var _a, _b;
//# sourceMappingURL=family-signup.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/kid-card/kid-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/kid-card/kid-card.component.html":
/***/ (function(module, exports) {

module.exports = "<p>{{ kid.name }}</p>\n<p>{{ kid.minutesPerWeek }} minutes per week</p>\n<p>Minutes spent: {{getMinutesSpent(kid)}}</p>\n<button class=\"btn btn-primary\" (click)=\"showViewings = !showViewings\">viewings</button>\n\n<app-viewing-list *ngIf=\"showViewings\" [viewings]=\"kid.viewings\"></app-viewing-list>\n\n\n<button class=\"btn btn-primary\" (click)=\"showBedtimes = !showBedtimes\">bed times</button>\n\n<app-bedtime-list *ngIf=\"showBedtimes\" [bedtimes]=\"kid.bedTimes\"></app-bedtime-list>\n"

/***/ }),

/***/ "../../../../../src/app/components/kid-card/kid-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KidCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store_model__ = __webpack_require__("../../../../../src/app/store/model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var KidCardComponent = (function () {
    function KidCardComponent() {
        this.showViewings = false;
        this.showBedtimes = false;
    }
    KidCardComponent.prototype.ngOnInit = function () {
    };
    KidCardComponent.prototype.getMinutesSpent = function () {
        if (true)
            return 0; // DANGER
        // TODO: handle missing endTime
        var sunday = __WEBPACK_IMPORTED_MODULE_2_moment__().startOf('week');
        return this.kid.viewings.reduce(function (acc, cur) {
            var minutesSpent = 0;
            if (__WEBPACK_IMPORTED_MODULE_2_moment__(cur.startTime).isAfter(sunday)) {
                var secondsSpent = __WEBPACK_IMPORTED_MODULE_2_moment__(cur.endTime).diff(__WEBPACK_IMPORTED_MODULE_2_moment__(cur.startTime), 'seconds');
                minutesSpent = Math.floor(secondsSpent / 60);
            }
            return acc + minutesSpent;
        }, 0);
    };
    return KidCardComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__store_model__["Kid"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__store_model__["Kid"]) === "function" && _a || Object)
], KidCardComponent.prototype, "kid", void 0);
KidCardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-kid-card',
        template: __webpack_require__("../../../../../src/app/components/kid-card/kid-card.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/kid-card/kid-card.component.css")]
    }),
    __metadata("design:paramtypes", [])
], KidCardComponent);

var _a;
//# sourceMappingURL=kid-card.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/kid-chart/kid-chart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chart-box {\n  width: 75vw;\n  float: right;\n  margin: 0 2%; \n  /* border: 2px solid #0CB49B; */\n  padding: 10px;\n  background: RGBA(1, 9, 19, 1.00);\n  color: white;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/kid-chart/kid-chart.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"kids\" style=\"display: block;\" class=\"chart-box\">\n  <canvas baseChart width=\"600\" height=\"300\"\n            [datasets]=\"lineChartData\"\n            [labels]=\"lineChartLabels\"\n            [options]=\"lineChartOptions\"\n            [colors]=\"lineChartColors\"\n            [legend]=\"lineChartLegend\"\n            [chartType]=\"lineChartType\"\n            (chartHover)=\"chartHovered($event)\"\n            (chartClick)=\"chartClicked($event)\">\n  </canvas>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/kid-chart/kid-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KidChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var KidChartComponent = (function () {
    function KidChartComponent() {
        this.lineChartData = [
            { data: [0], label: '' }
        ];
        this.lineChartLabels = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        this.lineChartOptions = {
            responsive: true
        };
        this.lineChartColors = [
            {
                backgroundColor: 'rgba(76, 193, 252, 0.8)',
                borderColor: 'rgba(43, 142, 176,1)',
                pointBackgroundColor: 'rgba(43, 142, 176,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            },
            {
                backgroundColor: 'rgba(46, 249, 160, 0.8)',
                borderColor: 'RGBA(12, 180, 155, 1.00)',
                pointBackgroundColor: 'RGBA(12, 180, 155, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(77,83,96,1)'
            },
            {
                backgroundColor: 'RGBA(247, 148, 50, 0.8)',
                borderColor: 'RGBA(243, 112, 85, 1)',
                pointBackgroundColor: 'RGBA(247, 148, 50, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            },
            {
                backgroundColor: 'RGBA(239, 77, 123, 0.8)',
                borderColor: 'RGBA(243, 112, 85, 1)',
                pointBackgroundColor: 'RGBA(161, 102, 171, 1.00)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }
        ];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
    }
    KidChartComponent.prototype.ngOnInit = function () {
        console.log('kids', this.kids);
        // kids is undefined so wait to populate line chart until ngOnChanges fires
    };
    KidChartComponent.prototype.ngOnChanges = function (changes) {
        if (!this.kids || !this.kids.length)
            return;
        var _lineChartData = this.kids.map(function (kid) {
            var obj = {};
            obj.label = kid.name;
            obj.data = [
                Math.floor(Math.random() * 200),
                Math.floor(Math.random() * 200),
                Math.floor(Math.random() * 200),
                Math.floor(Math.random() * 200),
                Math.floor(Math.random() * 200),
                Math.floor(Math.random() * 200),
                Math.floor(Math.random() * 200),
            ];
            return obj;
        });
        console.log(_lineChartData);
        this.lineChartData = _lineChartData;
    };
    // events
    KidChartComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    KidChartComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    return KidChartComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], KidChartComponent.prototype, "kids", void 0);
KidChartComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-kid-chart',
        template: __webpack_require__("../../../../../src/app/components/kid-chart/kid-chart.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/kid-chart/kid-chart.component.css")]
    })
], KidChartComponent);

//# sourceMappingURL=kid-chart.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/kid-home/interactive-wrapper/interactive-wrapper.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\nName: Screen Time Web App\nDescription: Common Styles\nAuthors: Micaela Linda Villani & JBTellez\nTags: Ironhack Final Project - Full Stack Javascript App + Angularjs for the Front-end\n*/\n\n/* Fonts\n---headings\nfont-family: 'Montserrat Alternates', sans-serif;\nfont-family: 'Merriweather Sans', sans-serif;\n--paragraphs\nfont-family: 'Montserrat', sans-serif; \nfont-family: 'Merriweather', serif;\n*/\n@font-face {\n    font-family: Godsown;\n    src: url(" + __webpack_require__("../../../../../src/assets/fonts/Godsownjunkyardfree.otf") + ");\n}\n\n/* INTERACTIVE ROW  */\n.interactive-row {\n    background-color: #010F20;\n    position: absolute;\n    top: 40%;\n    height: 60vh;\n    width: 100%;\n    left: 0;\n    margin: 0;\n    opacity: 0.8;\n    text-align: center;\n}\n\n.icon-container {\n    margin: 50% auto;\n    text-align: center;\n\n\n}\n\n\n.choose-movie-p {\n    text-transform: uppercase;\n    font-family: Godsown;\n    float: left;\n}\n\nimg.movie {\n    height: auto;\n    margin: 5% auto;\n    \n}\n\n\nimg.movie:hover {opacity: 1;\n    box-shadow: 0 8px 30px 3px #000000;\n    padding-top: 20px;\n    cursor: pointer;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/kid-home/interactive-wrapper/interactive-wrapper.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper row interactive-row container-fluid\">\n  <div class=\"row\" *ngIf=\"!showMovies\">\n    <!-- <p class=\"choose-movie-p\">Start watching</p> -->\n    <a class=\"movie-selection\" (click)=\"gotoMovies()\">\n         <img src=\"../../../assets/images/movie.png\" class=\"movie img-select img-responsive\"> \n      </a>\n  </div>\n  <div *ngIf=\"showMovies\" class=\"row\">\n    <div class=\"col-md-12\">\n      <app-movies></app-movies>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/kid-home/interactive-wrapper/interactive-wrapper.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InteractiveWrapperComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_animate__ = __webpack_require__("../../../../ng-animate/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_animate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng_animate__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InteractiveWrapperComponent = (function () {
    function InteractiveWrapperComponent(router) {
        this.router = router;
        this.state = 'on-screen';
        this.movieState = 'off-screen';
        this.showMovies = false;
    }
    InteractiveWrapperComponent.prototype.ngOnInit = function () {
    };
    // startAnimation(){
    //   this.state = 'off-screen';
    // }
    // animDone() {
    //   // alert('yo');
    //   //this.state = 'off-screen';
    // }
    // startMovieAnim() {
    //   this.movieState = 'off-screen';
    // }
    InteractiveWrapperComponent.prototype.gotoMovies = function () {
        // this.router.navigate(['/movies']);
        this.showMovies = true;
    };
    return InteractiveWrapperComponent;
}());
InteractiveWrapperComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-interactive-wrapper',
        template: __webpack_require__("../../../../../src/app/components/kid-home/interactive-wrapper/interactive-wrapper.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/kid-home/interactive-wrapper/interactive-wrapper.component.css")],
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["trigger"])('bounceOutRight', [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["state"])('on-screen', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["style"])({ transform: 'translateX(0%)' })),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["state"])('off-screen', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["style"])({ transform: 'translateX(200%)' })),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["transition"])('on-screen => off-screen', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["useAnimation"])(__WEBPACK_IMPORTED_MODULE_3_ng_animate__["bounceOutRight"], {}))
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["trigger"])('movieAnim', [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["state"])('on-screen', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["style"])({ transform: 'translateY(0%)' })),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["state"])('off-screen', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["style"])({ transform: 'translateY(200%)' })),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["transition"])('on-screen => off-screen', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["useAnimation"])(__WEBPACK_IMPORTED_MODULE_3_ng_animate__["fadeIn"], {}))
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]) === "function" && _a || Object])
], InteractiveWrapperComponent);

var _a;
//# sourceMappingURL=interactive-wrapper.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/kid-home/kid-home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\nName: Screen Time Web App\nDescription: Common Styles\nAuthors: Micaela Linda Villani & JBTellez\nTags: Ironhack Final Project - Full Stack Javascript App + Angularjs for the Front-end\n*/\n\n/* Fonts\n---headings\nfont-family: 'Montserrat Alternates', sans-serif;\nfont-family: 'Merriweather Sans', sans-serif;\n--paragraphs\nfont-family: 'Montserrat', sans-serif; \nfont-family: 'Merriweather', serif;\n*/\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-weight: 300;\n  overflow: hidden;\n}\n\n@font-face {\n    font-family: Godsown;\n    src: url(" + __webpack_require__("../../../../../src/assets/fonts/Godsownjunkyardfree.otf") + ");\n}\n\n/* ANIMATION */\n/*----------- Stars animation */\n@keyframes move-twink-back {\n    from {background-position:0 0;}\n    to {background-position:-10000px 5000px;}\n}\n@-webkit-keyframes move-twink-back {\n    from {background-position:0 0;}\n    to {background-position:-10000px 5000px;}\n}\n\n@keyframes move-clouds-back {\n    from {background-position:0 0;}\n    to {background-position:10000px 0;}\n}\n@-webkit-keyframes move-clouds-back {\n    from {background-position:0 0;}\n    to {background-position:10000px 0;}\n}\n\n.main-container {\n  height: 90vh;\n  margin: 0px;\n  padding: 0px;\n  width: 100vw;\n  overflow: hidden;\n}\n\n.stars, .twinkling, .clouds {\n  position:absolute;\n  top:0;\n  left:0;\n  right:0;\n  bottom:0;\n  width:100%;\n  height:100%;\n  display:block;\n}\n\n.stars {\n  background: #010E1D url(http://img4.hostingpics.net/pics/144421stars.png) repeat top center;\n  z-index:0;\n}\n\n.twinkling{\n  background:transparent url(" + __webpack_require__("../../../../../src/assets/images/blur.png") + ") repeat top center;\n  z-index:1;\n  -webkit-animation:move-twink-back 240s linear infinite;\n  animation:move-twink-back 240s linear infinite;\n}\n\n/* --------------------------------------------BODY */\n.main-container {\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    margin: 0;\n    padding: 0;\n    width: 100vw;\n    height: 100vh;\n    z-index: 2;\n}\n\n.greeting-row {\n    color: #2EF9A0;\n}\n\n.kidname {\n    text-transform: uppercase;\n    color: #4CC1FC;\n    font-family: Godsown;\n}\n\n.greeting-p {\n    margin-top: 20px;\n    margin-left: 5px;\n    color:white;\n    font-family: 'Montserrat', sans-serif; \n}\n\n.left-col {\n    float: left;\n    width: 50%;\n    margin-top: 10%;\n    margin-left: 5%;\n}\n\n/* RIGHT COLUMN */\n.right-col {\n     border: 2px dotted #0CB49B; \n      padding: 15px 0px;  \n    width: 28%;\n    color: white;\n    position: absolute;\n    left: 68vw;\n    top: 15%;\n    /* text-align: center; */\n\n}\n\np.today {\n    font-size: 24px !important;\n}\n\n.recap {\n    font-size: 20px;\n}\n\nspan.date {\n    color: #4CC1FC;\n    font-weight: 500;\n}\n\n.small-icon {\n    width: 30px;\n    /* margin-right: 10px; */\n}\n\n.bedtime {\n    color: #4CC1FC;\n    font-weight: 500;\n}\n\n.logo-xs {\n    height: 15px;\n    width: auto;\n    float: left;\n}\n\n/* .screentime-recap {\n    position: absolute;\n    left: 24%;\n    top: 72%;\n} */\n\n.minutes-count {\n    color: #4CC1FC;\n    font-weight: 500;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/kid-home/kid-home.component.html":
/***/ (function(module, exports) {

module.exports = "<main class=\"container-fluid main-container jumbotron\">\n  <div class=\"stars\">\n    <div class=\"twinkling\">\n      <!-- NAVBAR -->\n      <app-navbar></app-navbar>\n      <!-- FUNCTIONALITIES -->\n      <div class=\"container main-container\" *ngIf=\"kid$|async as kid\">\n\n        <div class=\"row greeting-row\">\n          <!-- LEFT COLUMN  -->\n          <div class=\"container col-sm-12 col-md-6 col-lg-6 left-col\">\n            <h1 class=\"greet greeting\"> Hi,  <span class=\"kidname\"> {{ kid.name }} </span> </h1>\n            <p class=\"greet greeting-p\"> What would you like to watch ? </p>\n          </div>\n          <!-- RIGHT COLUMN -->\n          <!-- <div class=\"container col-sm-12 col-md-6 col-lg-6 right-col\">\n            <div class=\"row\">\n              <p class=\"recap-line-one col-sm-12 col-md-12 col-lg-12 today\"> Today is <span class=\"date\"> {{ today | date}}  </span></p>\n            </div>\n            <div class=\"row\">\n              <img src=\"../../../assets/images/bedtime.png\" class=\"small-icon col-sm-3 col-md-3 col-lg-3\">\n              <p class=\"recap col-sm-9 col-md-9 col-lg-9\"> Bedtime is at <span class=\"bedtime\"> {{ getBedtime(kid) | date :'shortTime' }} </span> </p>\n            </div>\n            <div class=\"row\">\n              <img src=\"../../../assets/images/xs-screentime-logo.png\" class=\"logo-xs col-sm-3 col-md-3 col-lg-3\">\n              <p class=\"screentime-recap col-sm-9 col-md-9 col-lg-9\"> <span class=\"minutes-count\"> {{ getRemainingTime(kid) }} </span> minutes</p>\n            </div>\n          </div> -->\n        </div>\n\n        <!-- interactive-wrapper here -->\n        <app-interactive-wrapper></app-interactive-wrapper>\n        \n      </div>\n    </div>\n  </div>\n</main>"

/***/ }),

/***/ "../../../../../src/app/components/kid-home/kid-home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KidHomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var KidHomeComponent = (function () {
    function KidHomeComponent(router, store) {
        this.router = router;
        this.store = store;
        this.currentComponent = "movies";
    }
    KidHomeComponent.prototype.ngOnInit = function () {
        this.kid$ = this.store.select('app', 'kid');
        this.today = new Date();
    };
    KidHomeComponent.prototype.gotoMovies = function () {
        this.router.navigate(['/movies']);
    };
    KidHomeComponent.prototype.gotoKidTime = function () {
        this.router.navigate(['/kid-time']);
    };
    KidHomeComponent.prototype.gotoParentSettings = function () {
        this.router.navigate(['/parent-settings']);
    };
    KidHomeComponent.prototype.getBedtime = function (kid) {
        return kid.bedTimes ? kid.bedTimes[__WEBPACK_IMPORTED_MODULE_3_moment__(this.today).day()] : null;
    };
    KidHomeComponent.prototype.getRemainingTime = function (kid) {
        return kid ? kid.minutesPerWeek - this.getMinutesSpent(kid) : 0;
    };
    KidHomeComponent.prototype.getMinutesSpent = function (kid) {
        if (!kid.viewings)
            return 0;
        var sunday = __WEBPACK_IMPORTED_MODULE_3_moment__().startOf('week');
        return kid.viewings.reduce(function (acc, cur) {
            var minutesSpent = 0;
            if (__WEBPACK_IMPORTED_MODULE_3_moment__(cur.startTime).isAfter(sunday)) {
                var secondsSpent = __WEBPACK_IMPORTED_MODULE_3_moment__(cur.endTime).diff(__WEBPACK_IMPORTED_MODULE_3_moment__(cur.startTime), 'seconds');
                minutesSpent = Math.floor(secondsSpent / 60);
            }
            return acc + minutesSpent;
        }, 0);
    };
    return KidHomeComponent;
}());
KidHomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-kid-home',
        template: __webpack_require__("../../../../../src/app/components/kid-home/kid-home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/kid-home/kid-home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */]) === "function" && _b || Object])
], KidHomeComponent);

var _a, _b;
//# sourceMappingURL=kid-home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/kid-time/kid-time.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/kid-time/kid-time.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  kid-time works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/kid-time/kid-time.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KidTimeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var KidTimeComponent = (function () {
    function KidTimeComponent() {
    }
    KidTimeComponent.prototype.ngOnInit = function () {
    };
    return KidTimeComponent;
}());
KidTimeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-kid-time',
        template: __webpack_require__("../../../../../src/app/components/kid-time/kid-time.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/kid-time/kid-time.component.css")]
    }),
    __metadata("design:paramtypes", [])
], KidTimeComponent);

//# sourceMappingURL=kid-time.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/landing/family-login-link/family-login-link.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* main logo */\n.img-responsive {\n  margin: 11% auto;\n  height: 550px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/landing/family-login-link/family-login-link.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- logo -->\n      <img src=\"../../../../assets/images/screentime_final.gif\" alt=\"screen time logo\" class=\"img-responsive\">\n"

/***/ }),

/***/ "../../../../../src/app/components/landing/family-login-link/family-login-link.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FamilyLoginLinkComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_animate_lib_flippers__ = __webpack_require__("../../../../ng-animate/lib/flippers.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_animate_lib_flippers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng_animate_lib_flippers__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FamilyLoginLinkComponent = (function () {
    function FamilyLoginLinkComponent(router) {
        this.router = router;
    }
    FamilyLoginLinkComponent.prototype.ngOnInit = function () {
    };
    FamilyLoginLinkComponent.prototype.runAnimation = function () {
        console.log('Animating bastard !!!! ');
    };
    FamilyLoginLinkComponent.prototype.gotoHome = function () {
        this.router.navigate(['/home']);
    };
    return FamilyLoginLinkComponent;
}());
FamilyLoginLinkComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-family-login-link',
        template: __webpack_require__("../../../../../src/app/components/landing/family-login-link/family-login-link.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/landing/family-login-link/family-login-link.component.css")],
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["trigger"])('flip', [Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["transition"])('* => *', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["useAnimation"])(__WEBPACK_IMPORTED_MODULE_3_ng_animate_lib_flippers__["flip"], {}))])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]) === "function" && _a || Object])
], FamilyLoginLinkComponent);

var _a;
//# sourceMappingURL=family-login-link.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/landing/landing.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\nName: Screen Time Web App\nDescription: Common Styles\nAuthors: Micaela Linda Villani & JBTellez\nTags: Ironhack Final Project - Full Stack Javascript App + Angularjs for the Front-end\n*/\n\n/* Fonts\n---headings\nfont-family: 'Montserrat Alternates', sans-serif;\nfont-family: 'Merriweather Sans', sans-serif;\n--paragraphs\nfont-family: 'Montserrat', sans-serif; \nfont-family: 'Merriweather', serif;\n*/\n\n/* ------------------------------------------- JUMBOTRON */\n/*----------- Stars animation */\n@keyframes move-twink-back {\n    from {background-position:0 0;}\n    to {background-position:-10000px 5000px;}\n}\n@-webkit-keyframes move-twink-back {\n    from {background-position:0 0;}\n    to {background-position:-10000px 5000px;}\n}\n\n@keyframes move-clouds-back {\n    from {background-position:0 0;}\n    to {background-position:10000px 0;}\n}\n@-webkit-keyframes move-clouds-back {\n    from {background-position:0 0;}\n    to {background-position:10000px 0;}\n}\n\n.main-container {\n  height: 90vh;\n  margin: 0px;\n  padding: 0px;\n  width: 100vw;\n}\n\n.stars, .twinkling, .clouds {\n  position:absolute;\n  top:0;\n  left:0;\n  right:0;\n  bottom:0;\n  width:100%;\n  height:100%;\n  display:block;\n}\n\n.stars {\n  background: #010E1D url(http://img4.hostingpics.net/pics/144421stars.png) repeat top center;\n  z-index:0;\n}\n\n.twinkling{\n  background:transparent url(" + __webpack_require__("../../../../../src/assets/images/blur.png") + ") repeat top center;\n  z-index:1;\n  -webkit-animation:move-twink-back 240s linear infinite;\n  animation:move-twink-back 240s linear infinite;\n}\n\n/* ------------------------------------------- FAMILY ICON */\n/* family scrolling icon */\na.family-anchor {\n  color: #337ab7;\n  opacity: 0.5;\n  position: absolute;\n  left: 47%;\n  bottom: 3%;\n  text-decoration: none;\n  height: 100px;\n  width: 100px;\n  text-align: center;\n}\n\na.family-anchor:hover {\n opacity: 1;\n}\n\n.arrow-circle {\n  background-color: white;\n  border-radius: 50% !important;\n  position: absolute;\n  left: 31px;  \n  top: 65px;\n  height: 40px;\n  width: 40px;\n}\n\n.arrow {\n  position: absolute;\n  right: 12px;\n  top: 10px;\n}\n\n/* ------------------------------------------- SECTION 1 */\n/* 1SECTION */\n div.jumbotron.first-section {\n  background-image: linear-gradient(to top, #15131B 0%, #01132A 50%, #010B17 100%);\n  height: 100vh;\n  margin-top: 90px;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  margin-bottom: -26px;\n  width: 100vw;\n  position: relative;\n  overflow: scroll;\n}\n\ndiv.section-one-col {\n    width: 25%;\n    float: left;\n    margin-left: 6%;\n}\n\n.screen-section {\n  position: absolute;\n  top: 50px;\n  width: 100%;\n  height: 95%;  \n  z-index: 2;\n}\n\ndiv.section-one-row-one {\n  margin: 40px 0 130px 0;\n  height: 100px;\n}\n\n.what-section-title {\n  color: #0CB49B;\n  text-transform: uppercase;\n  font-family: 'Montserrat', sans-serif; \n  font-weight: 300;\n  text-align: center;\n  font-size: 35px !important;\n}\n\n\np.what-section-p {\n  color: white;\n  font-family: 'Montserrat', sans-serif; \n  font-size: 30px !important;\n  font-weight: 500;\n  margin-top: 30px; \n  text-align: center;\n}\n\n/* -------------------------------- ICONS */\n.col-md-4 {\n  -webkit-column-span: all;\n  column-span: all;\n  margin-top: 50px;\n}\n\n.icons {\n  margin: 0 auto;\n}\n\n.icons-titles {\n  color: white;\n  font-family: 'Montserrat', sans-serif; \n  font-weight: 500;\n  text-transform: uppercase;\n  text-align: center;\n  padding: 20px 0;\n}\n\n.icons-p {\n  color: white;\n  font-family: 'Montserrat', sans-serif; \n  font-weight: 300;\n  text-align: center;\n  font-size: 18px !important;\n}\n\ndiv.robot-row{\n  height: 200px;\n  width: 100vw;\n}\n\n\na.robot-anchor {\n  border: none;\n  height: 100px;\n  opacity: 0.5;\n  margin: 0 auto;\n  line-height: 100px;\n  position: relative;\n  left: 47%;\n  top: 50%;\n  width: 100px;\n  z-index: 3;\n}\n\na.robot-anchor:hover {\n  opacity: 1;\n}\n\ndiv.arrow-circle-section1 {\n  background-color: white;\n  border-radius: 50% !important;\n  position: absolute;\n  left: 30px;\n  top: 60px;\n  height: 40px;\n  width: 40px;\n}\n\n.arrow-section1 {\n  position: absolute;\n  right: 12px;\n  top: 10px; \n}\n\n/* ------------------------------------------- SECTION 2 */\n.second-section {\n  background-image: linear-gradient(#15131b 0%, #1c0b2f 50%, #010913 100%);\n  height: 100vh;  \n  margin-top: 26px;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  width:100vw;\n  position: relative;\n  overflow: scroll;\n}\n\ndiv.section-two-row-one {\n  margin: 50px 0 60px 0;\n  height: 100px\n}\n\n.col-md-3 {\n  -webkit-column-span: all;\n  column-span: all;\n}\n\n.why-section-title {\n  color: #EF4D7B;\n  text-transform: uppercase;\n  font-family: 'Montserrat', sans-serif; \n  font-weight: 300;\n  text-align: center;\n  margin-top: 70px;\n  font-size: 35px !important;\n}\n\n.choose-first-row {\n  height: 250px;\n  width: 1000px;\n  text-align: center;\n  margin: 0 auto;\n  border: 2px dotted #EF4D7B;\n  padding: 40px 20px;\n  background: #130721;\n}\n\n.why-icons {\n  height: 100px;\n  width: auto;\n  margin: 0 40px;\n}\n\n.first-icon {\n  border: 2px dotted #2EF9A0;\n  padding: 20px;\n}\n\n.choose-second-row {\n  height: 250px;\n  width: 1000px;\n  text-align: center;\n  margin: 80px auto 40px auto;\n  border: 2px dotted #EF4D7B;\n  padding: 40px 20px;\n  background: #130721;\n}\n\n.why-icons-second-row {\n  height: 100px;\n  width: auto;\n  margin: 0 25px;\n}\n \n.first-icon-second-row {\n   border: 2px dotted #2EF9A0;\n   padding: 20px;\n}\n\n.why-icons-p {\n  color: white;\n  font-family: 'Montserrat', sans-serif; \n  font-weight: 300;\n  text-align: center;\n  margin-top: 20px;\n  font-size: 16px;\n}\n\n/* REGISTER BUTTON */\n.register-button {\n  margin: 0 auto;\n  border: 2px dotted #F37055;\n  width: 200px;;\n  height: 60px;\n  text-align: center;\n}\n\n.register-button:hover {\n  background-image: linear-gradient(to bottom right, #F79432 0%, #EF4D7B 100%);\n  color: white;\n  cursor: pointer;\n}\n\na.family-signup {\n  font-family: 'Montserrat', sans-serif; \n  text-transform: uppercase;\n  color: white;\n  font-weight: 500;\n  font-size: 18px !important;\n  margin-top: 18px;\n  text-decoration: none !important;\n}\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/landing/landing.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- NAVBAR -->\n<app-navbar></app-navbar>\n\n<!-- JUMBOTRON -->\n<main class=\"main-container unlock-logo jumbotron\">\n  <div class=\"stars\">\n    <div class=\"twinkling\">\n      <!-- LOGO -->\n      <app-family-login-link></app-family-login-link>\n      <!-- Scroll Family Anchor -->\n      <a class=\"family-anchor\" href=\"#section-one\">\n        <img class=\"family\" src=\"assets/images/family-icon.png\">\n        <div class=\"arrow-circle\">\n          <img class=\"arrow\" src=\"assets/images/arrow.png\"> \n        </div>\n      </a>\n    </div>\n  </div>\n</main>\n\n<!-- First Section-->\n<div class=\"jumbotron first-section\" id=\"section-one\">\n  <div class=\"container-fluid screen-section\">\n   <!-- titles -->\n    <div class=\"row section-one-row-one\">\n       <div class=\"col-md-12\">\n          <p class=\"what-section-title\"> What is ScreenTime ?</p>\n      </div>\n      <div class=\"col-md-12\">\n          <p class=\"what-section-p\"> We promote family communication by ensuring \n          <br> your children a secure and free experience in the web.</p>\n      </div>\n    </div>\n    <!-- Column Icons Descriptions -->\n    <div class=\"row section-one-row-two\">\n      <!-- First Column -->\n      <div class=\"section-one-col col-sm-12 col-md-4 col-lg-4\"> \n        <img src=\"../../../assets/images/shield-small.png\" class=\"img-responsive icons\" alt=\"child protection shield icon\">\n        <h3 class=\"icons-titles\"> Safe <br> Web Search </h3>\n        <p class=\"icons-p\">We care about our contents so <br> you don't have to worry about your kids using the web.</p>\n      </div>\n      <!-- Second Column -->\n      <div class=\"section-one-col col-sm-12 col-md-4 col-lg-4\"> \n        <img src=\"../../../assets/images/computer-small.png\" class=\"img-responsive icons\" alt=\"kids devices protection icon\">\n        <h3 class=\"icons-titles\"> computer <br> responsability </h3>\n        <p class=\"icons-p\"> Our platform is designed to be child-friendly, making it easier for them to <br> enjoy the experience.</p>\n      </div>\n      <!-- Third Column -->\n      <div class=\"section-one-col col-sm-12 col-md-4 col-lg-4\"> \n        <img src=\"../../../assets/images/family-small.png\" class=\"img-responsive icons\" alt=\"children protection family icon\">\n        <h3 class=\"icons-titles\"> Family <br> Communication </h3>\n        <p class=\"icons-p\"> We will help you interact with your kids, and make bedtime and screentime <br> easier to negotiate. </p>\n      </div>\n    </div>\n    <!-- Scroll Robot Anchor -->\n    <div class=\"row robot-row\">\n      <a class=\"robot-anchor col-sm-12 col-md-12 col-lg-12\" href=\"#section-two\">\n        <img class=\"robot img-responsive\" src=\"../../../assets/images/robot-icon.png\">\n        <div class=\"arrow-circle-section1\">\n          <img class=\"arrow-section1 img-responsive\" src=\"assets/images/arrow.png\"> \n        </div>\n      </a>\n    </div>\n  </div>\n</div>\n\n<!-- Second section  -->\n <div class=\"jumbotron second-section\" id=\"section-two\">\n  <!-- title -->\n    <div class=\"row section-two-row-one\">\n       <div class=\"col-md-12\">\n          <p class=\"why-section-title\"> Choose ScreenTime Because ...</p>\n      </div>\n    </div>\n  <!-- First row -->\n    <div class=\"row choose-first-row\">\n      <!-- first icon -->\n      <div class=\"col-sm-12 col-md-3 col-lg-3\"> \n        <img class=\"why-icons first-icon\" src=\"../../../assets/images/boy.png\">\n        <p class=\"why-icons-p\">Your children <br> will be able to :</p>\n      </div>\n      <!-- second icon -->\n      <div class=\"col-sm-12 col-md-3 col-lg-3\"> \n        <img class=\"why-icons\" src=\"../../../assets/images/bedtime.png\">\n        <p class=\"why-icons-p\"> Remember their <br> daily bedtime </p>\n      </div>\n      <!-- third icon -->\n       <div class=\"col-sm-12 col-md-3 col-lg-3\"> \n        <img class=\"why-icons\" src=\"../../../assets/images/timer.png\">\n        <p class=\"why-icons-p\"> Learn to <br> manage their time </p>\n      </div>\n      <!-- fourth icon -->\n       <div class=\"col-sm-12 col-md-3 col-lg-3\"> \n      <img class=\"why-icons\" src=\"../../../assets/images/reviews.png\">\n        <p class=\"why-icons-p\"> Leave reviews </p>\n      </div>\n    </div>\n  <!-- Second-row -->\n   <div class=\"row choose-second-row\">\n     <!-- first icon -->\n      <div class=\"col-sm-12 col-md-3 col-lg-3\"> \n        <img class=\"why-icons-second-row first-icon-second-row\" src=\"../../../assets/images/mom.png\">\n        <p class=\"why-icons-p\">You will <br> be able to :</p>\n      </div>\n      <!-- second icon -->\n      <div class=\"col-sm-12 col-md-3 col-lg-3\"> \n        <img class=\"why-icons-second-row\" src=\"../../../assets/images/house.png\">\n        <p class=\"why-icons-p\"> Manage your kid's <br> account in your <br> dashboard </p>\n      </div>\n      <!-- third icon -->\n       <div class=\"col-sm-12 col-md-3 col-lg-3\"> \n        <img class=\"why-icons-second-row\" src=\"../../../assets/images/calendar.png\">\n        <p class=\"why-icons-p\"> Set the weekly <br> Screen Time <br> & Bed Time </p>\n      </div>\n      <!-- fourth icon -->\n       <div class=\"col-sm-12 col-md-3 col-lg-3\"> \n        <img class=\"why-icons-second-row\" src=\"../../../assets/images/charts.png\">\n        <p class=\"why-icons-p\"> See your kid's <br> activity charts </p>\n      </div>\n    </div>\n    <div class=\"row register-button\" (click)=\"gotoSignup()\">\n      <a class=\"family-signup col-sm-12 col-md-12 col-md-12\"> Register Now ! </a>\n    </div>\n </div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/landing/landing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LandingComponent = (function () {
    function LandingComponent(router) {
        this.router = router;
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    LandingComponent.prototype.gotoSignup = function () {
        this.router.navigate(['/signup']);
    };
    return LandingComponent;
}());
LandingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-landing',
        template: __webpack_require__("../../../../../src/app/components/landing/landing.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/landing/landing.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]) === "function" && _a || Object])
], LandingComponent);

var _a;
//# sourceMappingURL=landing.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/landing/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* NAVBAR */\nnav {\n  background-image: linear-gradient(to right, #100c13 0%, #010e1d 50%, #100c13 100%);\n  box-shadow: 0 8px 30px 3px #000000;\n  border: 1px solid black;\n  height: 69px;\n  margin: 0px;\n  width: 100vw;\n  text-align: center;\n  position: fixed;\n  z-index: 4;\n}\n\na {\n  color: white;\n  font-size: 16px;\n  text-transform: uppercase;\n  cursor: pointer;\n}\n\n\n.logo-{\n  float: right;\n}\n\nul li {\n list-style-type: none;\n display: inline-block;\n}\n\na.navbar-landing {\n  float: left;\n  margin: 17px 40px;\n}\n\na.logo:hover {\n text-decoration: none !important;\n opacity: 1.3;\n}\n\na.login-btn {\n  margin: 17px 40px;\n  float: right;\n}\n\n.login-btn {\n  background-image: linear-gradient(to bottom right, #0cb49b 0%, #1d99ae 100%); \n  padding: 5px 20px;\n}\n\na.login-btn:hover {\n  background-image: linear-gradient(to bottom right, #0cb49b 0%, #4CC1FC 100%);\n  text-decoration: none !important;\n}\n\n/**** Navbar for Kid's Home ****/\n\nli {\n  margin: 0px 10px;\n  float: left;\n}\n\n.bedtime-logo {\n  height: 40px;\n}\n\n.logo-kidhome {\n  margin: 10px 0 0 61%;\n}\n\n.bedtime-icon-li {\n  margin-left: 10%;\n}\n\n.bedtime-li {\n  padding-top: 5px;\n}\n\n.bedtime-time {\n  font-size: 25px;\n}\n\n.screentime-li {\n  font-size: 25px;\n  padding-top: 5px;\n  margin-left: 20px;\n}\n\nli.center-bar {\n  position: absolute;\n  right: 55%;\n  margin: 10px;\n  color: white;\n  text-transform: uppercase;\n  margin-bottom: 2px;\n}\n\nli.center-bar-title {\n  position: absolute;\n  right: 38%;\n  margin-top: 4px; \n  \n}\n\np.center-bar-title-p {\n  background-image: linear-gradient(to bottom right, #0cb49b 0%, #1d99ae 100%); \n  color: white;\n  padding: 5px 20px;\n}\n\n.screentimer {\n  position: absolute;\n  bottom: -2px;\n  left: 64%;\n  background-image: linear-gradient(to bottom right, #F79432 0%, #EF4D7B 100%);\n  color: white;\n  padding: 5px 20px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/landing/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n    \n    <!-- NAVBAR FOR LANDING-->\n    <div class=\"landing-navbar\"  *ngIf=\"!family?.name\">\n      <!-- LOGO -->\n      <a (click)=\"gotoLanding()\" class=\"navbar-landing\">\n        <img src=\"../../../../assets/images/xs-screentime-logo.png\" alt=\"screentime logo\" class=\"logo-navbar-landing\">\n      </a>\n      <!-- LOGIN -->\n      <a (click)=\"gotoLogin()\" class=\"login-btn\">login</a>\n    </div>\n\n<!-- NAVBAR FOR KIDS HOME -->\n<div class=\"navbar-kids\" *ngIf=\"family?.name\">\n  <ul>\n   <!-- HOME -->\n    <li>\n      <a *ngIf=\"family?.name\" (click)=\"gotoFamilyHome()\" class=\"home-a\">\n        <img src=\"../../../../assets/images/xs-house.png\" alt=\"home logo\" class=\"home\">\n      </a>\n    </li>\n    <!-- BEDTIME -->\n    <li *ngIf=\"kid?.name\" class=\"bedtime-icon-li\">\n      <img src=\"../../../../assets/images/bedtime.png\" alt=\"bedtime logo\" class=\"bedtime-logo\">\n    </li>      \n    <li *ngIf=\"kid?.name\" class=\"bedtime-li\">\n      <span class=\"bedtime-time\"> {{ bedtime | date : 'shortTime'}} </span>\n    </li>\n    <!-- LOGO -->\n    <li class=\"logo-kidhome\" >\n      <a (click)=\"gotoLanding()\">\n        <img src=\"../../../../assets/images/xs-screentime-logo.png\" alt=\"screentime logo\">\n      </a>\n    </li>\n     <!-- SCREENTIME -->\n      <!-- <li *ngIf=\"kid?.name\" class=\"screentime-li\">\n      <span> {{ screenTimeMinutesRemaining }} / {{ screenTimeMinutes }} </span> \n    </li> -->\n\n  </ul>\n</div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/landing/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_actions__ = __webpack_require__("../../../../../src/app/store/actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_time_helper_service__ = __webpack_require__("../../../../../src/app/services/time-helper.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NavbarComponent = (function () {
    function NavbarComponent(router, store, timerHelper) {
        this.router = router;
        this.store = store;
        this.timerHelper = timerHelper;
        this.ticks = 0;
        this.minutesDisplay = 0;
        this.hoursDisplay = 0;
        this.secondsDisplay = 0;
        this.clockStarted = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.familySub = this.store.select('app', 'family').subscribe(function (family) {
            _this.family = family;
        });
        this.kidSub = this.store.select('app', 'kid').subscribe(function (kid) {
            console.log('kid update', kid);
            _this.kid = kid;
            if (_this.kid) {
                _this.minutesUntilBed = _this.timerHelper.getMinutesUntilBed(kid);
                _this.bedtime = _this.timerHelper.getBedtime(kid);
                _this.screenTimeMinutesRemaining = _this.timerHelper.getMinutesScreenTimeRemaining(kid);
                _this.screenTimeMinutes = kid.minutesPerWeek;
                if (kid.viewings) {
                    _this.currentViewing = _this.kid.viewings.find(function (viewing) { return _this.timerHelper.isEndTimeInFuture(viewing); });
                }
            }
        });
    };
    NavbarComponent.prototype.ngOnDestroy = function () {
        if (this.familySub)
            this.familySub.unsubscribe();
        if (this.kidSub)
            this.kidSub.unsubscribe();
    };
    NavbarComponent.prototype.gotoLogin = function () {
        this.router.navigate(['/login']);
    };
    NavbarComponent.prototype.gotoLanding = function () {
        this.router.navigate(['/']);
    };
    NavbarComponent.prototype.gotoFamilyHome = function () {
        this.router.navigate(["/family/" + this.family._id]);
    };
    NavbarComponent.prototype.gotoFamilyDashboard = function () {
        this.router.navigate(["/family/" + this.family._id + "/dashboard"]);
    };
    NavbarComponent.prototype.startTimer = function () {
        var _this = this;
        this.clockStarted = true;
        var timer = __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].timer(1, 1000);
        this.sub = timer.subscribe(function (t) {
            _this.ticks = t;
            _this.secondsDisplay = _this.getSeconds(_this.ticks);
            _this.minutesDisplay = _this.getMinutes(_this.ticks);
            _this.hoursDisplay = _this.getHours(_this.ticks);
        });
        // create viewing
        var viewing = { _id: undefined, movieId: this.movie.id, showId: undefined, kid: this.kid, title: this.movie.title, startTime: new Date(), endTime: undefined };
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_0__store_actions__["c" /* CreateViewingAction */](viewing));
    };
    NavbarComponent.prototype.getSeconds = function (ticks) {
        return this.pad(ticks % 60);
    };
    NavbarComponent.prototype.getMinutes = function (ticks) {
        return this.pad((Math.floor(ticks / 60)) % 60);
    };
    NavbarComponent.prototype.getHours = function (ticks) {
        return this.pad(Math.floor((ticks / 60) / 60));
    };
    NavbarComponent.prototype.pad = function (digit) {
        return digit <= 9 ? '0' + digit : digit;
    };
    NavbarComponent.prototype.stopTimer = function () {
        this.clockStarted = false;
        this.sub.unsubscribe();
    };
    return NavbarComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Input"])(),
    __metadata("design:type", Object)
], NavbarComponent.prototype, "movie", void 0);
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/components/landing/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/landing/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["d" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_time_helper_service__["a" /* TimeHelperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_time_helper_service__["a" /* TimeHelperService */]) === "function" && _c || Object])
], NavbarComponent);

var _a, _b, _c;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/movie/movie.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato:400,300,700);", ""]);
exports.push([module.i, "@import url(//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css);", ""]);

// module
exports.push([module.i, "/*\nName: Screen Time Web App\nDescription: Common Styles\nAuthors: Micaela Linda Villani & JBTellez\nTags: Ironhack Final Project - Full Stack Javascript App + Angularjs for the Front-end\n*/\n\n/* Fonts\n---headings\nfont-family: 'Montserrat Alternates', sans-serif;\nfont-family: 'Merriweather Sans', sans-serif;\n--paragraphs\nfont-family: 'Montserrat', sans-serif; \nfont-family: 'Merriweather', serif;\n*/\n\n/* .modal-content .modal-body {\n  padding: 0;\n} */\n*, *:before, *:after {\n  box-sizing: border-box;\n}\n\n/****** First Card Part *****/\n.movie-card {\n  font-family:  'Montserrat', sans-serif; \n  font-size: 16px;\n  color: white;\n  width: 40vw;\n  height: 60vh;\n  margin: 0 auto;\n}\n\n.container {\n  margin: 0 auto;\n  width: 100%;\n  height: 100%;\n  background: black;\n  border-radius: 1rem;\n  padding: 0px;\n}\n\n.hero {\n  height: 50%;\n  width: 100%;\n  margin: 0;\n  position: relative;\n  overflow: hidden;\n  z-index: 1;\n  border-top-left-radius: 5rem;\n  border-top-right-radius: 5rem; \n}\n\n.hero:before {\n  content: '';\n  width: 100%;\n  height: 90%;\n  margin: 0;\n  padding: 0;\n  position: absolute;\n  overflow: hidden;\n  top: 0;\n  left: 0;\n  background-color: #EF4D7B;\n  z-index: -1;\n  -webkit-transform: skewY(-2.2deg);\n          transform: skewY(-2.2deg);\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n}\n\n.back-btn {\n    vertical-align: middle;\n    position: absolute;\n    left: 2%;\n    top: 5%;\n    height: 3rem;\n}\n\n.back-btn:active {\n  background-color: #F37055; \n  -webkit-transform: translateY(4px); \n          transform: translateY(4px);\n}\n\n.cover {\n  position: absolute;\n  height: 50%;\n  top: 4%;\n  left: 20%;\n  z-index: 2;\n}\n\n.details {\n  height: 20%;\n  width: 50%;\n  position: absolute;\n  top: 30%;\n  left: 42%;\n  padding: 0;\n  margin: 0;\n}\n\n.movie-title {\n  float: left;\n  text-align: left;\n  width: 100%;\n  }\n\n/****** Style Star Rating *****/\n.rating {\n  border: none;\n  float: left;\n}\n\n.rating > input {\n  display: none;\n}\n\n.rating > label:before {\n  margin: 5px;\n  margin-top: 0;\n  font-size: 1em;\n  font-family: FontAwesome;\n  display: inline-block;\n  content: \"\\F005\";\n}\n\n.rating > .half:before {\n  content: \"\\F089\";\n  position: absolute;\n}\n\n.rating > label {\n  color: #ddd;\n  float: right;\n}\n\n/***** CSS Magic to Highlight Stars on Hover *****/\n.rating > input:checked ~ label,\n.rating:not(:checked) > label:hover,\n.rating:not(:checked) > label:hover ~ label {\n  color: #FFD700;\n}\n\n/* hover previous stars in list */\n.rating > input:checked + label:hover,\n.rating > input:checked ~ label:hover,\n.rating > label:hover ~ input:checked ~ label,\n.rating > input:checked ~ label:hover ~ label {\n  color: #FFED85;\n}\n\na[data-tooltip] {\n  position: relative;\n}\n\na[data-tooltip]::before,\na[data-tooltip]::after {\n  position: absolute;\n  display: none;\n  opacity: 0.85;\n}\n\na[data-tooltip]::before {\n  /*\n   * using data-tooltip instead of title so we \n   * don't have the real tooltip overlapping\n   */\n  content: attr(data-tooltip);\n  background: #000;\n  color: #fff;\n  font-size: 13px;\n  padding: 5px;\n  border-radius: 5px;\n  /* we don't want the text to wrap */\n  white-space: nowrap;\n  text-decoration: none;\n}\n\na[data-tooltip]::after {\n  width: 0;\n  height: 0;\n  border: 6px solid transparent;\n  content: '';\n}\n\na[data-tooltip]:hover::before,\na[data-tooltip]:hover::after {\n  display: block;\n}\n\n/** positioning **/\n/* top tooltip */\na[data-tooltip][data-placement=\"top\"]::before {\n  bottom: 100%;\n  left: 0;\n  margin-bottom: 40px;\n}\n\na[data-tooltip][data-placement=\"top\"]::after {\n  border-top-color: #000;\n  border-bottom: none;\n  bottom: 50px;\n  left: 20px;\n  margin-bottom: 4px;\n}\n\n/****** Second Card Part *****/\n.description {\n  text-align: left;\n  position: relative;\n  bottom: 0px;\n  left: 3%;\n  width: 90%;\n  height: 100%;\n  font-size: 14px !important;\n  line-height: 26px;\n  color: white;\n}\n\n.runtime {\n    color: #0CB49B;\n    position: relative;\n    font-weight: 500;\n    left: 45%; \n    bottom: 0%;  \n    margin: 10px;\n}\n\n/* ---------------- START  SCREENTIME BUTTON  */\n.startclock {\n  outline: 0;\n  background-color: white;\n  border: 0;\n  color: #F37055;\n  border-radius: 3px;\n  width: 250px;\n  cursor: pointer;\n  transition-duration: 0.25s;\n  padding: 3px 8px;\n  font-size: 14px;\n  line-height: 35px;\n  cursor: pointer;\n}\n\na:hover {\n  background-image: linear-gradient(to bottom right, #F79432 0%, #EF4D7B 100%);\n  color:white;\n  text-decoration: none !important;\n} ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/movie/movie.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"movie-card\">\n  <div class=\"container\">\n    <img [src]=\"getPosterPath(movie)\" alt=\"poster\" class=\"cover\"> \n    <div class=\"hero\">\n      <div class=\"details\">\n        <h2 class=\"movie-title\">{{ movie?.title}}</h2>\n            <fieldset class=\"rating\">\n              <input type=\"radio\" id=\"star5\" name=\"rating\" value=\"5\" /><label class = \"full\" for=\"star5\" title=\"Awesome - 5 stars\"></label>\n              <input type=\"radio\" id=\"star4half\" name=\"rating\" value=\"4 and a half\" /><label class=\"half\" for=\"star4half\" title=\"Pretty good - 4.5 stars\"></label>\n              <input type=\"radio\" id=\"star4\" name=\"rating\" value=\"4\" checked /><label class = \"full\" for=\"star4\" title=\"Pretty good - 4 stars\"></label>\n              <input type=\"radio\" id=\"star3half\" name=\"rating\" value=\"3 and a half\" /><label class=\"half\" for=\"star3half\" title=\"Meh - 3.5 stars\"></label>\n              <input type=\"radio\" id=\"star3\" name=\"rating\" value=\"3\" /><label class = \"full\" for=\"star3\" title=\"Meh - 3 stars\"></label>\n              <input type=\"radio\" id=\"star2half\" name=\"rating\" value=\"2 and a half\" /><label class=\"half\" for=\"star2half\" title=\"Kinda bad - 2.5 stars\"></label>\n              <input type=\"radio\" id=\"star2\" name=\"rating\" value=\"2\" /><label class = \"full\" for=\"star2\" title=\"Kinda bad - 2 stars\"></label>\n              <input type=\"radio\" id=\"star1half\" name=\"rating\" value=\"1 and a half\" /><label class=\"half\" for=\"star1half\" title=\"Meh - 1.5 stars\"></label>\n              <input type=\"radio\" id=\"star1\" name=\"rating\" value=\"1\" /><label class = \"full\" for=\"star1\" title=\"Sucks big time - 1 star\"></label>\n              <input type=\"radio\" id=\"starhalf\" name=\"rating\" value=\"half\" /><label class=\"half\" for=\"starhalf\" title=\"Sucks big time - 0.5 stars\"></label>\n            </fieldset>\n      </div> <!-- end details -->\n    </div> <!-- end hero -->\n    <div class=\"description\">\n      <p class=\"runtime\"> {{ movie?.runtime }} minutes</p>\n      <p class=\"overview\"> {{ movie?.overview }}</p>\n        <!-- <a class=\"startclock\" (click)=\"startTimer()\"> START SCREENTIME </a>  -->\n        <app-screentimer></app-screentimer>\n        <!-- <p>\n        {{hoursDisplay ? hoursDisplay : '00'}} : {{(minutesDisplay) && (minutesDisplay <= 59) ? minutesDisplay : '00'}} : {{(secondsDisplay) && (secondsDisplay <= 59) ? secondsDisplay : '00'}} \n      </p>     -->\n    </div> <!-- end description -->\n  </div> <!-- end container -->\n</div> <!-- end movie-card -->"

/***/ }),

/***/ "../../../../../src/app/components/movie/movie.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MovieComponent = (function () {
    function MovieComponent() {
        this.onStartMovie = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    MovieComponent.prototype.ngOnInit = function () {
        console.log('movie', this.movie);
    };
    MovieComponent.prototype.getPosterPath = function (movie) {
        if (!this.movie)
            return '';
        return "https://image.tmdb.org/t/p/w154/" + movie.poster_path;
    };
    MovieComponent.prototype.getBackdropPath = function (movie) {
        if (!this.movie)
            return '';
        return "https://image.tmdb.org/t/p/w154/" + movie.backdrop_path;
    };
    MovieComponent.prototype.startTimer = function () {
        this.onStartMovie.next(true);
    };
    MovieComponent.prototype.close = function () {
        // this.onStartMovie.next(true);
    };
    return MovieComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], MovieComponent.prototype, "movie", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], MovieComponent.prototype, "onStartMovie", void 0);
MovieComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-movie',
        template: __webpack_require__("../../../../../src/app/components/movie/movie.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/movie/movie.component.css")]
    })
], MovieComponent);

var _a;
//# sourceMappingURL=movie.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/movie/screentimer/screentimer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\nName: Screen Time Web App\nDescription: Common Styles\nAuthors: Micaela Linda Villani & JBTellez\nTags: Ironhack Final Project - Full Stack Javascript App + Angularjs for the Front-end\n*/\n\n/* Fonts\n---headings\nfont-family: 'Montserrat Alternates', sans-serif;\nfont-family: 'Merriweather Sans', sans-serif;\n--paragraphs\nfont-family: 'Montserrat', sans-serif; \nfont-family: 'Merriweather', serif;\n*/\n\na.startclock {\n  background-image: linear-gradient(to bottom right, #0cb49b 0%, #1d99ae 100%); \n  color: white;\n  padding: 5px 20px;\n list-style-type: none;\n display: inline-block;\n text-decoration: none;\n cursor: pointer;\n}\n\na.stopclock {\n  background-image: linear-gradient(to bottom right, #0cb49b 0%, #1d99ae 100%); \n  color: white;\n  padding: 5px 20px;\n  list-style-type: none;\n  display: inline-block;\n  text-decoration: none; \n  cursor: pointer;\n}\n\np.screentimer {\n  list-style-type: none;\n  display: inline-block;\n  text-decoration: none; \n  margin-left: 10px;\n  background-image: linear-gradient(to bottom right, #F79432 0%, #EF4D7B 100%);\n  color: white;\n  padding: 5px 20px;\n  cursor: pointer;\n}\n\n\np.screentimer:hover {\n  cursor: pointer;\n}\n\na.stopclock:hover {\n  cursor: pointer;\n}\n\n\nli.list-type {\n  list-style-type: none;\n  \n}\n\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/movie/screentimer/screentimer.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <li *ngIf=\"!clockStarted\" class=\"list-type\">\n    <a class=\"startclock\" (click)=\"startTimer()\"> START SCREENTIME </a>\n  </li>\n  <li *ngIf=\"clockStarted\" class=\"list-type\">\n    <a class=\"stopclock\" (click)=\"stopTimer()\"> STOP SCREENTIME\n      <p class=\"screentimer\">{{hoursDisplay ? hoursDisplay : '00'}} : {{(minutesDisplay) && (minutesDisplay <= 59) ? minutesDisplay : '00'}} : {{(secondsDisplay) && (secondsDisplay <= 59) ? secondsDisplay : '00'}} \n      </p>\n    </a>\n  </li>\n  <!-- <li *ngIf=\"clockStarted\">\n      <p>{{hoursDisplay ? hoursDisplay : '00'}} : {{(minutesDisplay) && (minutesDisplay <= 59) ? minutesDisplay : '00'}} : {{(secondsDisplay) && (secondsDisplay <= 59) ? secondsDisplay : '00'}} \n      </p>\n      </li> -->\n  <!-- <li>\n    <p> Your bedtime will be in </p>\n  </li>\n  <li>\n    <h3 class=\"minutes-countdown\">\n      <span>{{minutesUntilBed}}</span> \n    minutes</h3>\n  </li> -->\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/movie/screentimer/screentimer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScreentimerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_actions__ = __webpack_require__("../../../../../src/app/store/actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_time_helper_service__ = __webpack_require__("../../../../../src/app/services/time-helper.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ScreentimerComponent = (function () {
    function ScreentimerComponent(store, timerHelper) {
        this.store = store;
        this.timerHelper = timerHelper;
        this.ticks = 0;
        this.minutesDisplay = 0;
        this.hoursDisplay = 0;
        this.secondsDisplay = 0;
        this.clockStarted = false;
    }
    ScreentimerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appSub = this.store.select('app').subscribe(function (app) {
            _this.kid = app.kid;
            _this.family = app.family;
            _this.minutesUntilBed = _this.timerHelper.getMinutesUntilBed(_this.kid);
        });
    };
    ScreentimerComponent.prototype.ngOnDestroy = function () {
        if (this.appSub)
            this.appSub.unsubscribe();
        if (this.sub)
            this.sub.unsubscribe();
    };
    ScreentimerComponent.prototype.startTimer = function () {
        var _this = this;
        this.clockStarted = true;
        var timer = __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["Observable"].timer(1, 1000);
        this.sub = timer.subscribe(function (t) {
            _this.ticks = t;
            _this.secondsDisplay = _this.getSeconds(_this.ticks);
            _this.minutesDisplay = _this.getMinutes(_this.ticks);
            _this.hoursDisplay = _this.getHours(_this.ticks);
        });
        // create viewing
        var viewing = { _id: undefined, movieId: this.movie.id, showId: undefined, kid: this.kid, title: this.movie.title, startTime: new Date(), endTime: undefined };
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_0__store_actions__["c" /* CreateViewingAction */](viewing));
    };
    ScreentimerComponent.prototype.getSeconds = function (ticks) {
        return this.pad(ticks % 60);
    };
    ScreentimerComponent.prototype.getMinutes = function (ticks) {
        return this.pad((Math.floor(ticks / 60)) % 60);
    };
    ScreentimerComponent.prototype.getHours = function (ticks) {
        return this.pad(Math.floor((ticks / 60) / 60));
    };
    ScreentimerComponent.prototype.pad = function (digit) {
        return digit <= 9 ? '0' + digit : digit;
    };
    ScreentimerComponent.prototype.stopTimer = function () {
        // this.clockStarted = false;
        this.sub.unsubscribe();
    };
    return ScreentimerComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ScreentimerComponent.prototype, "movie", void 0);
ScreentimerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'app-screentimer',
        template: __webpack_require__("../../../../../src/app/components/movie/screentimer/screentimer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/movie/screentimer/screentimer.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_time_helper_service__["a" /* TimeHelperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_time_helper_service__["a" /* TimeHelperService */]) === "function" && _b || Object])
], ScreentimerComponent);

var _a, _b;
//# sourceMappingURL=screentimer.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/movies/movies.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\nName: Screen Time Web App\nDescription: Common Styles\nAuthors: Micaela Linda Villani & JBTellez\nTags: Ironhack Final Project - Full Stack Javascript App + Angularjs for the Front-end\n*/\n\n/* Fonts\n---headings\nfont-family: 'Montserrat Alternates', sans-serif;\nfont-family: 'Merriweather Sans', sans-serif;\n--paragraphs\nfont-family: 'Montserrat', sans-serif; \nfont-family: 'Merriweather', serif;\n*/\n/* CONTAINER */\n.well {\n  background-color: black;\n  border-color: black;\n}\n\n/* CAROUSEL */\ncarousel {\n  height: 500px;\n  }\n\n.carousel-control {\n  padding-top:10%;\n  width:5%;\n}\n\n.modal {\n   margin-top: 100px; \n   margin-right: 300px;\n}\n\n.modal-content .modal-body {\n  padding: 0;\n}\n\n:host >>>.carousel-control span {\n    font-size: 80px;\n    color: white;\n    display: block;\n    width: 50px;\n    height: 50px;\n    background: #010E1D;\n    top: 46%;\n    right: 30%;\n    border-radius: 50%;\n    line-height: 1;\n  }\n  \n  :host >>>.carousel-control span:before {\n    display: block;\n    line-height: 0.45;\n  }\n  :host >>> .carousel-indicators li {\n    width: 30px;\n    height: 30px;\n    border-radius: 50%;\n    transition: 0.3s;\n    margin: 1px;\n  }\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/movies/movies.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\n  <div class=\"well\">\n\n    <carousel [interval]=\"false\" id=\"myCarousel\" class=\"carousel slide\" *ngIf=\"movies\">\n      <div class=\"carousel-inner\">\n\n        <slide *ngFor=\"let slideIndex of [0,1,2,3,4]\">\n          <div class=\"item active\">\n            <div class=\"row\">\n              <div *ngFor=\"let colIndex of [0,1,2,3]\" class=\"col-sm-3\" (click)=\"movieClicked(slideIndex, colIndex)\">\n                <img [src]=\"getPosterPath(slideIndex, colIndex)\" alt=\"First slide\" class=\"img-responsive\">\n                <div class=\"carousel-caption\">\n                  <!-- <h3>{{getMovieTitle(slideIndex, colIndex)}}</h3> -->\n                </div>\n              </div>\n            </div>\n          </div>\n        </slide>\n       \n      </div>\n    </carousel>\n\n<div bsModal #childModal=\"bs-modal\" [config]=\"{backdrop: false}\" class=\"modal fade in\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\">\n         <app-movie [movie]=\"selectedMovie\" (onStartMovie)=\"onStartMovie()\"></app-movie> \n      </div>\n    </div>\n  </div>\n</div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/movies/movies.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoviesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_actions__ = __webpack_require__("../../../../../src/app/store/actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_movies_service__ = __webpack_require__("../../../../../src/app/services/movies.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MoviesComponent = (function () {
    function MoviesComponent(router, moviesService, store) {
        this.router = router;
        this.moviesService = moviesService;
        this.store = store;
    }
    MoviesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.moviesService.getMovies().subscribe(function (movies) { return _this.movies = movies; });
    };
    MoviesComponent.prototype.ngOnDestroy = function () {
        if (this.getMovieSub)
            this.getMovieSub.unsubscribe();
    };
    MoviesComponent.prototype.onStartMovie = function () {
        var kid;
        this.store.select('app', 'kid').subscribe(function (k) {
            console.log('k', k);
            kid = k;
        });
        var duration = this.selectedMovie.runtime * 60000;
        var endTime = new Date(Date.now() + duration);
        var viewing = {
            _id: undefined,
            title: this.selectedMovie.title,
            movieId: this.selectedMovie.id,
            showId: undefined,
            startTime: new Date(),
            endTime: endTime,
            kid: kid
        };
        console.log('onStartMovie', viewing, this.selectedMovie);
        // this.hideChildModal();
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_0__store_actions__["c" /* CreateViewingAction */](viewing));
    };
    MoviesComponent.prototype.getMovie = function (slideIndex, colIndex) {
        var movie;
        if (this.movies) {
            var index = slideIndex * 4 + colIndex;
            movie = this.movies[index];
        }
        return movie;
    };
    MoviesComponent.prototype.getMovieTitle = function (slideIndex, colIndex) {
        var movie = this.getMovie(slideIndex, colIndex);
        return movie ? movie.title : '';
    };
    MoviesComponent.prototype.getPosterPath = function (slideIndex, colIndex) {
        var path = '';
        if (this.movies) {
            var index = slideIndex * 4 + colIndex;
            var movie = this.movies[index];
            path = "https://image.tmdb.org/t/p/w780" + movie.poster_path;
            // tv eg path
            //path = 'https://image.tmdb.org/t/p/w600/knQW68IH5lFzN9D5gKVe2ScCKYu.jpg'
        }
        return path;
    };
    MoviesComponent.prototype.movieClicked = function (slideIndex, colIndex) {
        var _this = this;
        this.selectedMovie = this.getMovie(slideIndex, colIndex);
        console.log('selectedMovie', this.selectedMovie);
        this.getMovieSub = this.moviesService.getMovie(this.selectedMovie.id).subscribe(function (movie) {
            _this.selectedMovie.runtime = movie.runtime;
            _this.showChildModal();
        }, function (error) { return console.log(error); });
        // this.router.navigate(['/movie', movie.id])
    };
    MoviesComponent.prototype.showChildModal = function () {
        this.childModal.show();
    };
    MoviesComponent.prototype.hideChildModal = function () {
        this.childModal.hide();
    };
    return MoviesComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["ViewChild"])('childModal'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__["a" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__["a" /* ModalDirective */]) === "function" && _a || Object)
], MoviesComponent.prototype, "childModal", void 0);
MoviesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
        selector: 'app-movies',
        template: __webpack_require__("../../../../../src/app/components/movies/movies.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/movies/movies.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_movies_service__["a" /* MoviesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_movies_service__["a" /* MoviesService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */]) === "function" && _d || Object])
], MoviesComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=movies.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/viewing-list/viewing-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/viewing-list/viewing-list.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Viewings:</h2>\n<ul>\n  <li *ngFor=\"let viewing of viewings\">\n    <span>{{ viewing.title }}</span>\n    <span>{{ viewing.startTime | date }}</span>\n    <span>{{ getViewingDuration(viewing) }} minutes</span>\n  </li>\n</ul>\n"

/***/ }),

/***/ "../../../../../src/app/components/viewing-list/viewing-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewingListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ViewingListComponent = (function () {
    function ViewingListComponent() {
    }
    ViewingListComponent.prototype.ngOnInit = function () {
    };
    ViewingListComponent.prototype.getViewingDuration = function (viewing) {
        return 0; //Math.floor((viewing.endTime - viewing.startTime) / 60);
    };
    return ViewingListComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], ViewingListComponent.prototype, "viewings", void 0);
ViewingListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-viewing-list',
        template: __webpack_require__("../../../../../src/app/components/viewing-list/viewing-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/viewing-list/viewing-list.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ViewingListComponent);

//# sourceMappingURL=viewing-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_actions__ = __webpack_require__("../../../../../src/app/store/actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = (function () {
    function AuthService(store) {
        this.store = store;
    }
    AuthService.prototype.signup = function (name, password) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_0__store_actions__["i" /* SignUpFamilyAction */]({ name: name, password: password }));
    };
    AuthService.prototype.login = function (name, password) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_0__store_actions__["h" /* LogInFamilyAction */]({ name: name, password: password }));
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/backend.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackendService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BackendService = (function () {
    //'http://localhost:3000/';// 
    function BackendService(http) {
        this.http = http;
        this.API_URL = 'https://screen-time-api.herokuapp.com/';
    }
    BackendService.prototype.fetchFamilies = function () {
        return this.http.get(this.API_URL + "api/families").map(function (data) { return data.json(); });
    };
    BackendService.prototype.fetchFamily = function (id) {
        return this.http.get(this.API_URL + "api/families/" + id).map(function (data) { return data.json(); });
    };
    BackendService.prototype.addKid = function (kid) {
        // return this.http.post(`http://localhost:3000/kids`, kid).map(data => data.json());
        kid._id = '' + Math.floor(Math.random() * 100);
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].of(kid);
    };
    BackendService.prototype.signUpFamily = function (creds) {
        console.log('createFamily', creds);
        return this.http.post(this.API_URL + "auth/signup", creds).map(function (data) { return data.json(); });
    };
    BackendService.prototype.logInFamily = function (creds) {
        console.log('logInFamily', creds);
        creds.username = creds.name; // DANGER
        return this.http.post(this.API_URL + "auth/login", creds).map(function (data) { return data.json(); });
    };
    BackendService.prototype.createKid = function (kid) {
        var dto = __assign({}, kid);
        // server wants just the id
        dto.family = kid.family._id;
        return this.http.post(this.API_URL + "api/kids", dto).map(function (data) { return data.json(); });
    };
    BackendService.prototype.deleteKid = function (kid) {
        return this.http.delete(this.API_URL + "api/kids/" + kid._id).map(function (data) { return data.json(); });
    };
    BackendService.prototype.createViewing = function (viewing) {
        console.log('createViewing', viewing);
        var dto = __assign({}, viewing);
        // server wants just the id
        dto.viewing = viewing._id;
        return this.http.post(this.API_URL + "api/viewings", dto).map(function (data) { return data.json(); });
    };
    return BackendService;
}());
BackendService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]) === "function" && _a || Object])
], BackendService);

var _a;
//# sourceMappingURL=backend.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/movies.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoviesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MoviesService = (function () {
    function MoviesService(http) {
        this.http = http;
        // TODO: store in .env
        this.API_KEY = '3f3798b4fab8a9e67c465bd2347d06a6';
    }
    MoviesService.prototype.getMovies = function () {
        var url = "https://api.themoviedb.org/3/movie/283995/similar?api_key=" + this.API_KEY + "&language=en-US&page=1";
        // mock data
        // const url = './assets/movies.json';
        return this.http
            .get(url)
            .map(function (data) { return data.json().results; });
    };
    MoviesService.prototype.getMovie = function (id) {
        var url = "https://api.themoviedb.org/3/movie/" + id + "?api_key=" + this.API_KEY + "&language=en-US";
        return this.http.get(url).map(function (data) { return data.json(); });
    };
    return MoviesService;
}());
MoviesService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], MoviesService);

var _a;
//# sourceMappingURL=movies.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/time-helper.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeHelperService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TimeHelperService = (function () {
    function TimeHelperService() {
    }
    TimeHelperService.prototype.getBedtime = function (kid) {
        return kid && kid.bedTimes ? new Date(kid.bedTimes[__WEBPACK_IMPORTED_MODULE_1_moment__().day()]) : null;
    };
    TimeHelperService.prototype.getMinutesUntilBed = function (kid) {
        var todayBedtime = this.getBedtime(kid);
        if (todayBedtime) {
            var now = new Date();
            todayBedtime.setFullYear(now.getFullYear());
            return Math.round(__WEBPACK_IMPORTED_MODULE_1_moment__(todayBedtime).diff(now) / 1000 / 60);
        }
        else {
            return 0;
        }
    };
    TimeHelperService.prototype.isEndTimeInFuture = function (viewing) {
        return __WEBPACK_IMPORTED_MODULE_1_moment__(viewing.endTime).isAfter(__WEBPACK_IMPORTED_MODULE_1_moment__());
    };
    TimeHelperService.prototype.getMinutesScreenTimeRemaining = function (kid) {
        console.log('getMinutesScreenTimeRemaining', kid);
        var viewings = kid.viewings || [];
        // need to add up viewing end-start diffs and sum
        var sum = viewings.reduce(function (acc, cur) {
            var start = cur.startTime;
            var end = __WEBPACK_IMPORTED_MODULE_1_moment__(cur.endTime);
            var duration = __WEBPACK_IMPORTED_MODULE_1_moment__["duration"](end.diff(cur.startTime));
            var minutes = duration.asMinutes();
            return minutes;
        }, 0);
        return 0;
    };
    return TimeHelperService;
}());
TimeHelperService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], TimeHelperService);

//# sourceMappingURL=time-helper.service.js.map

/***/ }),

/***/ "../../../../../src/app/store/actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionTypes; });
/* unused harmony export KidUpdatedAction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return KidSelectedAction; });
/* unused harmony export KidAddedAction */
/* unused harmony export AddKidAction */
/* unused harmony export LoadFamilyAction */
/* unused harmony export FamilyLoadedAction */
/* unused harmony export FamiliesLoadedAction */
/* unused harmony export LoadFamiliesAction */
/* unused harmony export LoadFamilyAndSelectKidAction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return SignUpFamilyAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return LogInFamilyAction; });
/* unused harmony export FamilyLoggedInAction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return FamilySelectedAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CreateKidAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return DeleteKidAction; });
/* unused harmony export KidDeletedAction */
/* unused harmony export FamilySignedUpAction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return KidCreatedAction; });
/* unused harmony export GotoFamilyAction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CreateViewingAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return ViewingCreatedAction; });
var ActionTypes = {
    KID_SELECTED: 'KID_SELECTED',
    FAMILY_SELECTED: 'FAMILY_SELECTED',
    KID_UPDATED: 'KID_UPDATED',
    KID_ADDED: 'KID_ADDED',
    ADD_KID: 'ADD_KID',
    LOAD_FAMILY: 'LOAD_FAMILY',
    FAMILY_LOADED: 'FAMILY_LOADED',
    FAMILIES_LOADED: 'FAMILIES_LOADED',
    LOAD_FAMILIES: 'LOAD_FAMILIES',
    LOAD_FAMILY_AND_SELECT_KID: 'LOAD_FAMILY_AND_SELECT_KID',
    SIGN_UP_FAMILY: 'SIGN_UP_FAMILY',
    LOG_IN_FAMILY: 'LOG_IN_FAMILY',
    FAMILY_LOGGED_IN: 'FAMILY_LOGGED_IN',
    CREATE_KID: 'CREATE_KID',
    DELETE_KID: 'DELETE_KID',
    KID_DELETED: 'KID_DELETED',
    FAMILY_SIGNED_UP: 'FAMILY_SIGNED_UP',
    KID_CREATED: 'KID_CREATED',
    GOTO_FAMILY_ACTION: 'GOTO_FAMILY_ACTION',
    CREATE_VIEWING_ACTION: 'CREATE_VIEWING_ACTION',
    VIEWING_CREATED_ACTION: 'VIEWING_CREATED_ACTION',
};
var KidUpdatedAction = (function () {
    function KidUpdatedAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.KID_UPDATED;
    }
    return KidUpdatedAction;
}());

var KidSelectedAction = (function () {
    function KidSelectedAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.KID_SELECTED;
    }
    return KidSelectedAction;
}());

var KidAddedAction = (function () {
    function KidAddedAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.KID_ADDED;
    }
    return KidAddedAction;
}());

var AddKidAction = (function () {
    function AddKidAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.ADD_KID;
    }
    return AddKidAction;
}());

var LoadFamilyAction = (function () {
    function LoadFamilyAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.LOAD_FAMILY;
    }
    return LoadFamilyAction;
}());

var FamilyLoadedAction = (function () {
    function FamilyLoadedAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.FAMILY_LOADED;
    }
    return FamilyLoadedAction;
}());

var FamiliesLoadedAction = (function () {
    function FamiliesLoadedAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.FAMILIES_LOADED;
    }
    return FamiliesLoadedAction;
}());

var LoadFamiliesAction = (function () {
    function LoadFamiliesAction() {
        this.type = ActionTypes.LOAD_FAMILIES;
    }
    return LoadFamiliesAction;
}());

var LoadFamilyAndSelectKidAction = (function () {
    function LoadFamilyAndSelectKidAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.LOAD_FAMILY_AND_SELECT_KID;
    }
    return LoadFamilyAndSelectKidAction;
}());

var SignUpFamilyAction = (function () {
    function SignUpFamilyAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.SIGN_UP_FAMILY;
    }
    return SignUpFamilyAction;
}());

var LogInFamilyAction = (function () {
    function LogInFamilyAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.LOG_IN_FAMILY;
    }
    return LogInFamilyAction;
}());

var FamilyLoggedInAction = (function () {
    function FamilyLoggedInAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.FAMILY_LOGGED_IN;
    }
    return FamilyLoggedInAction;
}());

var FamilySelectedAction = (function () {
    function FamilySelectedAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.FAMILY_SELECTED;
    }
    return FamilySelectedAction;
}());

var CreateKidAction = (function () {
    function CreateKidAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.CREATE_KID;
    }
    return CreateKidAction;
}());

var DeleteKidAction = (function () {
    function DeleteKidAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.DELETE_KID;
    }
    return DeleteKidAction;
}());

var KidDeletedAction = (function () {
    function KidDeletedAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.KID_DELETED;
    }
    return KidDeletedAction;
}());

var FamilySignedUpAction = (function () {
    function FamilySignedUpAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.FAMILY_SIGNED_UP;
    }
    return FamilySignedUpAction;
}());

var KidCreatedAction = (function () {
    function KidCreatedAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.KID_CREATED;
    }
    return KidCreatedAction;
}());

var GotoFamilyAction = (function () {
    function GotoFamilyAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.GOTO_FAMILY_ACTION;
    }
    return GotoFamilyAction;
}());

var CreateViewingAction = (function () {
    function CreateViewingAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.CREATE_VIEWING_ACTION;
    }
    return CreateViewingAction;
}());

var ViewingCreatedAction = (function () {
    function ViewingCreatedAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.VIEWING_CREATED_ACTION;
    }
    return ViewingCreatedAction;
}());

//# sourceMappingURL=actions.js.map

/***/ }),

/***/ "../../../../../src/app/store/app-reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = appReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__("../../../../../src/app/store/actions.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

// reducer
function appReducer(state, action) {
    var kid;
    var family;
    var kids;
    var families;
    switch (action.type) {
        case 'RESET_STATE':
            family = null;
            kid = null;
            return __assign({}, state, { family: family, kid: kid });
        case __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* ActionTypes */].FAMILY_SIGNED_UP:
            console.log(action.type);
            var families_1 = state.families.slice();
            families_1.push(action.payload);
            family = action.payload;
            return __assign({}, state, { families: families_1, family: family });
        case __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* ActionTypes */].FAMILY_SIGNED_UP:
        case __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* ActionTypes */].FAMILY_LOGGED_IN:
        case __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* ActionTypes */].FAMILY_SELECTED:
            console.log(action.type);
            family = action.payload;
            console.log('family', family);
            kid = null;
            return __assign({}, state, { family: family, kid: kid });
        case __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* ActionTypes */].KID_CREATED:
            console.log(action.type);
            kid = action.payload;
            // TODO: best to do here or separate call
            // as long as the family stays up to date with kid changes
            family = __assign({}, state.family);
            family.kids.push(kid);
            return __assign({}, state, { kid: kid, family: family });
        case __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* ActionTypes */].KID_UPDATED:
            console.log(action.type);
            family = __assign({}, state.family);
            var newKid_1 = action.payload;
            var existingKid = family.kids.find(function (kid) { return kid._id === newKid_1._id; });
            existingKid = Object.assign(existingKid, newKid_1);
            return __assign({}, state, { family: family });
        case __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* ActionTypes */].KID_ADDED:
            console.log(action.type);
            family = __assign({}, state.family);
            family.kids.push(action.payload);
            return __assign({}, state, { family: family });
        case __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* ActionTypes */].KID_SELECTED:
            console.log(action.type);
            kid = action.payload;
            return __assign({}, state, { kid: kid });
        case __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* ActionTypes */].FAMILY_LOADED:
            console.log(action.type);
            family = action.payload;
            kid = null;
            return __assign({}, state, { family: family, kid: kid });
        case __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* ActionTypes */].FAMILIES_LOADED:
            console.log(action.type);
            families_1 = action.payload;
            return __assign({}, state, { families: families_1 });
        case __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* ActionTypes */].LOAD_FAMILY_AND_SELECT_KID:
            console.log(action.type);
            family = action.payload['family'];
            var kid_id_1 = action.payload['kid_id'];
            kid = family.kids.find(function (k) { return k['_id'] === kid_id_1; });
            return __assign({}, state, { family: family, kid: kid });
        case __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* ActionTypes */].VIEWING_CREATED_ACTION:
            console.log(action.type);
            // DANGER: watch for race condition
            // DANGER: safer to do fresh load of kid
            var viewing = action.payload;
            // TODO: best to do here or separate call
            // as long as the family stays up to date with kid changes
            kid = __assign({}, state.kid);
            kid.viewings.push(viewing);
            return __assign({}, state);
        default:
            console.log(action.type);
            return state;
    }
}
//# sourceMappingURL=app-reducer.js.map

/***/ }),

/***/ "../../../../../src/app/store/model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return initialState; });
var initialState = {
    app: {
        family: {},
        kid: {},
        // TODO: remove and/or move to adminState
        families: [],
    }
};
//# sourceMappingURL=model.js.map

/***/ }),

/***/ "../../../../../src/app/store/screen-effects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScreenEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_router_store__ = __webpack_require__("../../../../@ngrx/router-store/@ngrx/router-store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_backend_service__ = __webpack_require__("../../../../../src/app/services/backend.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions__ = __webpack_require__("../../../../../src/app/store/actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_withLatestFrom__ = __webpack_require__("../../../../rxjs/add/operator/withLatestFrom.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_withLatestFrom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_withLatestFrom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_concatMap__ = __webpack_require__("../../../../rxjs/add/operator/concatMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_concatMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_concatMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_rxjs_add_operator_concat__ = __webpack_require__("../../../../rxjs/add/operator/concat.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_rxjs_add_operator_concat___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_rxjs_add_operator_concat__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_rxjs_add_observable_forkJoin__ = __webpack_require__("../../../../rxjs/add/observable/forkJoin.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_rxjs_add_observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_rxjs_add_observable_forkJoin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var ScreenEffects = (function () {
    function ScreenEffects(actions, store, backend, router) {
        var _this = this;
        this.actions = actions;
        this.store = store;
        this.backend = backend;
        this.router = router;
        this.navigateToLanding = this.handleNavigation('', function (r, state) {
            return Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_observable_of__["of"])({ type: 'RESET_STATE' });
        });
        this.navigateToAdmin = this.handleNavigation('admin', function (r, state) {
            return Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_observable_of__["of"])({ type: 'LOAD_FAMILIES' }, { type: 'LOAD_KIDS' });
        });
        this.navigateToFamily = this.handleNavigation('family/:id', function (r, state) {
            // DANGER: not DRY with below
            var id = r.paramMap.get('id');
            if (state.app.family && state.app.family._id === id) {
                console.log('already got right family loaded');
                return Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_observable_of__["of"])({ type: __WEBPACK_IMPORTED_MODULE_3__actions__["a" /* ActionTypes */].FAMILY_SELECTED, payload: state.app.family });
            }
            return Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_observable_of__["of"])({ type: 'LOAD_FAMILY', payload: id });
        });
        this.navigateToFamilyDashboard = this.handleNavigation('family/:id/dashboard', function (r, state) {
            // DANGER: not DRY with above
            var id = r.paramMap.get('id');
            if (state.app.family && state.app.family._id === id) {
                console.log('already got right family loaded');
                return Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_observable_of__["of"])({ type: __WEBPACK_IMPORTED_MODULE_3__actions__["a" /* ActionTypes */].FAMILY_SELECTED, payload: state.app.family });
            }
            return Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_observable_of__["of"])({ type: 'LOAD_FAMILY', payload: id });
        });
        this.navigateToKid = this.handleNavigation('family/:family_id/kid/:kid_id', function (r, state) {
            var kid_id = r.paramMap.get('kid_id');
            var family_id = r.paramMap.get('family_id');
            console.log('navigateToKid', family_id, kid_id);
            // TODO: figure out how to conditionally load family if needed
            return _this.backend.fetchFamily(family_id).map(function (resp) { return ({ type: 'LOAD_FAMILY_AND_SELECT_KID', payload: { family: resp, kid_id: kid_id } }); });
        });
        this.addKid = this.actions.ofType('ADD_KID').
            concatMap(function (a) {
            return _this.backend.addKid(a.payload).
                map(function (resp) { return ({ type: 'KID_ADDED', payload: resp }); });
        });
        this.loadFamily = this.actions.ofType('LOAD_FAMILY').switchMap(function (a) {
            console.log('loadFamily action', a.payload);
            return _this.backend.fetchFamily(a.payload).map(function (resp) { return ({ type: 'FAMILY_LOADED', payload: resp }); });
        });
        this.loadFamilies = this.actions.ofType('LOAD_FAMILIES').switchMap(function (a) {
            console.log('loadFamilies action');
            return _this.backend.fetchFamilies().map(function (resp) { return ({ type: 'FAMILIES_LOADED', payload: resp }); });
        });
        this.signUpFamily = this.actions.ofType('SIGN_UP_FAMILY').switchMap(function (a) {
            console.log(a.type);
            return _this.backend.signUpFamily(a.payload).concatMap(function (resp) {
                return Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_observable_of__["of"])({ type: 'FAMILY_CREATED', payload: resp }, { type: 'GOTO_FAMILY_ACTION', payload: resp });
            });
        });
        this.logInFamily = this.actions.ofType('LOG_IN_FAMILY').switchMap(function (a) {
            console.log('logInFamily action');
            return _this.backend.logInFamily(a.payload).concatMap(function (resp) {
                console.log('loginFamily', resp);
                return Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_observable_of__["of"])({ type: 'FAMILY_LOGGED_IN', payload: resp }, { type: 'GOTO_FAMILY_ACTION', payload: resp });
            });
        });
        this.createViewing = this.actions.ofType(__WEBPACK_IMPORTED_MODULE_3__actions__["a" /* ActionTypes */].CREATE_VIEWING_ACTION).switchMap(function (a) {
            console.log('createViewing action', a.payload);
            return _this.backend.createViewing(a.payload).map(function (resp) { return new __WEBPACK_IMPORTED_MODULE_3__actions__["j" /* ViewingCreatedAction */](resp); });
        });
        this.createKid = this.actions.ofType('CREATE_KID').switchMap(function (a) {
            console.log('createKid action', a.payload);
            return _this.backend.createKid(a.payload).map(function (resp) { return new __WEBPACK_IMPORTED_MODULE_3__actions__["f" /* KidCreatedAction */](resp); });
        });
        this.deleteKid = this.actions.ofType(__WEBPACK_IMPORTED_MODULE_3__actions__["a" /* ActionTypes */].DELETE_KID).switchMap(function (a) {
            console.log('deleteKid action', a.payload);
            return _this.backend.deleteKid(a.payload).map(function (resp) { return ({ type: __WEBPACK_IMPORTED_MODULE_3__actions__["a" /* ActionTypes */].KID_DELETED, payload: resp }); });
        });
        this.gotoFamily = this.actions.ofType('GOTO_FAMILY_ACTION').switchMap(function (a) {
            console.log('goto family action payload', a.payload);
            _this.router.navigate(["/family/" + a.payload['_id']]);
            return Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_observable_of__["of"])();
        });
    }
    ScreenEffects.prototype.handleNavigation = function (segment, callback) {
        var nav = this.actions.ofType(__WEBPACK_IMPORTED_MODULE_0__ngrx_router_store__["a" /* ROUTER_NAVIGATION */]).
            map(firstSegment).
            filter(function (s) { return s.routeConfig.path === segment; });
        return nav.withLatestFrom(this.store).switchMap(function (a) { return callback(a[0], a[1]); }).catch(function (e) {
            console.log('Network error', e);
            return Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_observable_of__["of"])();
        });
    };
    return ScreenEffects;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], ScreenEffects.prototype, "navigateToLanding", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], ScreenEffects.prototype, "navigateToAdmin", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], ScreenEffects.prototype, "navigateToFamily", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], ScreenEffects.prototype, "navigateToFamilyDashboard", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], ScreenEffects.prototype, "navigateToKid", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], ScreenEffects.prototype, "addKid", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], ScreenEffects.prototype, "loadFamily", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], ScreenEffects.prototype, "loadFamilies", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], ScreenEffects.prototype, "signUpFamily", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], ScreenEffects.prototype, "logInFamily", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], ScreenEffects.prototype, "createViewing", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], ScreenEffects.prototype, "createKid", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], ScreenEffects.prototype, "deleteKid", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], ScreenEffects.prototype, "gotoFamily", void 0);
ScreenEffects = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["a" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["a" /* Actions */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_backend_service__["a" /* BackendService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_backend_service__["a" /* BackendService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["d" /* Router */]) === "function" && _d || Object])
], ScreenEffects);

function firstSegment(r) {
    return r.payload.routerState.root.firstChild;
}
var _a, _b, _c, _d;
// function createFilters(p: Params): Filters {
//   return {speaker: p['speaker'] || null, title: p['title'] || null, minRating: p['minRating'] ? +p['minRating'] : 0};
// } 
//# sourceMappingURL=screen-effects.js.map

/***/ }),

/***/ "../../../../../src/assets/fonts/Godsownjunkyardfree.otf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Godsownjunkyardfree.a837560c1d82751f7a4a.otf";

/***/ }),

/***/ "../../../../../src/assets/images/blur.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "blur.00ea1a5d51bd36c96e79.png";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../chart.js/node_modules/moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../chart.js/node_modules/moment/locale/af.js",
	"./af.js": "../../../../chart.js/node_modules/moment/locale/af.js",
	"./ar": "../../../../chart.js/node_modules/moment/locale/ar.js",
	"./ar-dz": "../../../../chart.js/node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../chart.js/node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "../../../../chart.js/node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../chart.js/node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "../../../../chart.js/node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../chart.js/node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "../../../../chart.js/node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../chart.js/node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "../../../../chart.js/node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../chart.js/node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "../../../../chart.js/node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../chart.js/node_modules/moment/locale/ar-tn.js",
	"./ar.js": "../../../../chart.js/node_modules/moment/locale/ar.js",
	"./az": "../../../../chart.js/node_modules/moment/locale/az.js",
	"./az.js": "../../../../chart.js/node_modules/moment/locale/az.js",
	"./be": "../../../../chart.js/node_modules/moment/locale/be.js",
	"./be.js": "../../../../chart.js/node_modules/moment/locale/be.js",
	"./bg": "../../../../chart.js/node_modules/moment/locale/bg.js",
	"./bg.js": "../../../../chart.js/node_modules/moment/locale/bg.js",
	"./bn": "../../../../chart.js/node_modules/moment/locale/bn.js",
	"./bn.js": "../../../../chart.js/node_modules/moment/locale/bn.js",
	"./bo": "../../../../chart.js/node_modules/moment/locale/bo.js",
	"./bo.js": "../../../../chart.js/node_modules/moment/locale/bo.js",
	"./br": "../../../../chart.js/node_modules/moment/locale/br.js",
	"./br.js": "../../../../chart.js/node_modules/moment/locale/br.js",
	"./bs": "../../../../chart.js/node_modules/moment/locale/bs.js",
	"./bs.js": "../../../../chart.js/node_modules/moment/locale/bs.js",
	"./ca": "../../../../chart.js/node_modules/moment/locale/ca.js",
	"./ca.js": "../../../../chart.js/node_modules/moment/locale/ca.js",
	"./cs": "../../../../chart.js/node_modules/moment/locale/cs.js",
	"./cs.js": "../../../../chart.js/node_modules/moment/locale/cs.js",
	"./cv": "../../../../chart.js/node_modules/moment/locale/cv.js",
	"./cv.js": "../../../../chart.js/node_modules/moment/locale/cv.js",
	"./cy": "../../../../chart.js/node_modules/moment/locale/cy.js",
	"./cy.js": "../../../../chart.js/node_modules/moment/locale/cy.js",
	"./da": "../../../../chart.js/node_modules/moment/locale/da.js",
	"./da.js": "../../../../chart.js/node_modules/moment/locale/da.js",
	"./de": "../../../../chart.js/node_modules/moment/locale/de.js",
	"./de-at": "../../../../chart.js/node_modules/moment/locale/de-at.js",
	"./de-at.js": "../../../../chart.js/node_modules/moment/locale/de-at.js",
	"./de-ch": "../../../../chart.js/node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "../../../../chart.js/node_modules/moment/locale/de-ch.js",
	"./de.js": "../../../../chart.js/node_modules/moment/locale/de.js",
	"./dv": "../../../../chart.js/node_modules/moment/locale/dv.js",
	"./dv.js": "../../../../chart.js/node_modules/moment/locale/dv.js",
	"./el": "../../../../chart.js/node_modules/moment/locale/el.js",
	"./el.js": "../../../../chart.js/node_modules/moment/locale/el.js",
	"./en-au": "../../../../chart.js/node_modules/moment/locale/en-au.js",
	"./en-au.js": "../../../../chart.js/node_modules/moment/locale/en-au.js",
	"./en-ca": "../../../../chart.js/node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "../../../../chart.js/node_modules/moment/locale/en-ca.js",
	"./en-gb": "../../../../chart.js/node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "../../../../chart.js/node_modules/moment/locale/en-gb.js",
	"./en-ie": "../../../../chart.js/node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "../../../../chart.js/node_modules/moment/locale/en-ie.js",
	"./en-nz": "../../../../chart.js/node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "../../../../chart.js/node_modules/moment/locale/en-nz.js",
	"./eo": "../../../../chart.js/node_modules/moment/locale/eo.js",
	"./eo.js": "../../../../chart.js/node_modules/moment/locale/eo.js",
	"./es": "../../../../chart.js/node_modules/moment/locale/es.js",
	"./es-do": "../../../../chart.js/node_modules/moment/locale/es-do.js",
	"./es-do.js": "../../../../chart.js/node_modules/moment/locale/es-do.js",
	"./es.js": "../../../../chart.js/node_modules/moment/locale/es.js",
	"./et": "../../../../chart.js/node_modules/moment/locale/et.js",
	"./et.js": "../../../../chart.js/node_modules/moment/locale/et.js",
	"./eu": "../../../../chart.js/node_modules/moment/locale/eu.js",
	"./eu.js": "../../../../chart.js/node_modules/moment/locale/eu.js",
	"./fa": "../../../../chart.js/node_modules/moment/locale/fa.js",
	"./fa.js": "../../../../chart.js/node_modules/moment/locale/fa.js",
	"./fi": "../../../../chart.js/node_modules/moment/locale/fi.js",
	"./fi.js": "../../../../chart.js/node_modules/moment/locale/fi.js",
	"./fo": "../../../../chart.js/node_modules/moment/locale/fo.js",
	"./fo.js": "../../../../chart.js/node_modules/moment/locale/fo.js",
	"./fr": "../../../../chart.js/node_modules/moment/locale/fr.js",
	"./fr-ca": "../../../../chart.js/node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../chart.js/node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "../../../../chart.js/node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../chart.js/node_modules/moment/locale/fr-ch.js",
	"./fr.js": "../../../../chart.js/node_modules/moment/locale/fr.js",
	"./fy": "../../../../chart.js/node_modules/moment/locale/fy.js",
	"./fy.js": "../../../../chart.js/node_modules/moment/locale/fy.js",
	"./gd": "../../../../chart.js/node_modules/moment/locale/gd.js",
	"./gd.js": "../../../../chart.js/node_modules/moment/locale/gd.js",
	"./gl": "../../../../chart.js/node_modules/moment/locale/gl.js",
	"./gl.js": "../../../../chart.js/node_modules/moment/locale/gl.js",
	"./gom-latn": "../../../../chart.js/node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../chart.js/node_modules/moment/locale/gom-latn.js",
	"./he": "../../../../chart.js/node_modules/moment/locale/he.js",
	"./he.js": "../../../../chart.js/node_modules/moment/locale/he.js",
	"./hi": "../../../../chart.js/node_modules/moment/locale/hi.js",
	"./hi.js": "../../../../chart.js/node_modules/moment/locale/hi.js",
	"./hr": "../../../../chart.js/node_modules/moment/locale/hr.js",
	"./hr.js": "../../../../chart.js/node_modules/moment/locale/hr.js",
	"./hu": "../../../../chart.js/node_modules/moment/locale/hu.js",
	"./hu.js": "../../../../chart.js/node_modules/moment/locale/hu.js",
	"./hy-am": "../../../../chart.js/node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "../../../../chart.js/node_modules/moment/locale/hy-am.js",
	"./id": "../../../../chart.js/node_modules/moment/locale/id.js",
	"./id.js": "../../../../chart.js/node_modules/moment/locale/id.js",
	"./is": "../../../../chart.js/node_modules/moment/locale/is.js",
	"./is.js": "../../../../chart.js/node_modules/moment/locale/is.js",
	"./it": "../../../../chart.js/node_modules/moment/locale/it.js",
	"./it.js": "../../../../chart.js/node_modules/moment/locale/it.js",
	"./ja": "../../../../chart.js/node_modules/moment/locale/ja.js",
	"./ja.js": "../../../../chart.js/node_modules/moment/locale/ja.js",
	"./jv": "../../../../chart.js/node_modules/moment/locale/jv.js",
	"./jv.js": "../../../../chart.js/node_modules/moment/locale/jv.js",
	"./ka": "../../../../chart.js/node_modules/moment/locale/ka.js",
	"./ka.js": "../../../../chart.js/node_modules/moment/locale/ka.js",
	"./kk": "../../../../chart.js/node_modules/moment/locale/kk.js",
	"./kk.js": "../../../../chart.js/node_modules/moment/locale/kk.js",
	"./km": "../../../../chart.js/node_modules/moment/locale/km.js",
	"./km.js": "../../../../chart.js/node_modules/moment/locale/km.js",
	"./kn": "../../../../chart.js/node_modules/moment/locale/kn.js",
	"./kn.js": "../../../../chart.js/node_modules/moment/locale/kn.js",
	"./ko": "../../../../chart.js/node_modules/moment/locale/ko.js",
	"./ko.js": "../../../../chart.js/node_modules/moment/locale/ko.js",
	"./ky": "../../../../chart.js/node_modules/moment/locale/ky.js",
	"./ky.js": "../../../../chart.js/node_modules/moment/locale/ky.js",
	"./lb": "../../../../chart.js/node_modules/moment/locale/lb.js",
	"./lb.js": "../../../../chart.js/node_modules/moment/locale/lb.js",
	"./lo": "../../../../chart.js/node_modules/moment/locale/lo.js",
	"./lo.js": "../../../../chart.js/node_modules/moment/locale/lo.js",
	"./lt": "../../../../chart.js/node_modules/moment/locale/lt.js",
	"./lt.js": "../../../../chart.js/node_modules/moment/locale/lt.js",
	"./lv": "../../../../chart.js/node_modules/moment/locale/lv.js",
	"./lv.js": "../../../../chart.js/node_modules/moment/locale/lv.js",
	"./me": "../../../../chart.js/node_modules/moment/locale/me.js",
	"./me.js": "../../../../chart.js/node_modules/moment/locale/me.js",
	"./mi": "../../../../chart.js/node_modules/moment/locale/mi.js",
	"./mi.js": "../../../../chart.js/node_modules/moment/locale/mi.js",
	"./mk": "../../../../chart.js/node_modules/moment/locale/mk.js",
	"./mk.js": "../../../../chart.js/node_modules/moment/locale/mk.js",
	"./ml": "../../../../chart.js/node_modules/moment/locale/ml.js",
	"./ml.js": "../../../../chart.js/node_modules/moment/locale/ml.js",
	"./mr": "../../../../chart.js/node_modules/moment/locale/mr.js",
	"./mr.js": "../../../../chart.js/node_modules/moment/locale/mr.js",
	"./ms": "../../../../chart.js/node_modules/moment/locale/ms.js",
	"./ms-my": "../../../../chart.js/node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "../../../../chart.js/node_modules/moment/locale/ms-my.js",
	"./ms.js": "../../../../chart.js/node_modules/moment/locale/ms.js",
	"./my": "../../../../chart.js/node_modules/moment/locale/my.js",
	"./my.js": "../../../../chart.js/node_modules/moment/locale/my.js",
	"./nb": "../../../../chart.js/node_modules/moment/locale/nb.js",
	"./nb.js": "../../../../chart.js/node_modules/moment/locale/nb.js",
	"./ne": "../../../../chart.js/node_modules/moment/locale/ne.js",
	"./ne.js": "../../../../chart.js/node_modules/moment/locale/ne.js",
	"./nl": "../../../../chart.js/node_modules/moment/locale/nl.js",
	"./nl-be": "../../../../chart.js/node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "../../../../chart.js/node_modules/moment/locale/nl-be.js",
	"./nl.js": "../../../../chart.js/node_modules/moment/locale/nl.js",
	"./nn": "../../../../chart.js/node_modules/moment/locale/nn.js",
	"./nn.js": "../../../../chart.js/node_modules/moment/locale/nn.js",
	"./pa-in": "../../../../chart.js/node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "../../../../chart.js/node_modules/moment/locale/pa-in.js",
	"./pl": "../../../../chart.js/node_modules/moment/locale/pl.js",
	"./pl.js": "../../../../chart.js/node_modules/moment/locale/pl.js",
	"./pt": "../../../../chart.js/node_modules/moment/locale/pt.js",
	"./pt-br": "../../../../chart.js/node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "../../../../chart.js/node_modules/moment/locale/pt-br.js",
	"./pt.js": "../../../../chart.js/node_modules/moment/locale/pt.js",
	"./ro": "../../../../chart.js/node_modules/moment/locale/ro.js",
	"./ro.js": "../../../../chart.js/node_modules/moment/locale/ro.js",
	"./ru": "../../../../chart.js/node_modules/moment/locale/ru.js",
	"./ru.js": "../../../../chart.js/node_modules/moment/locale/ru.js",
	"./sd": "../../../../chart.js/node_modules/moment/locale/sd.js",
	"./sd.js": "../../../../chart.js/node_modules/moment/locale/sd.js",
	"./se": "../../../../chart.js/node_modules/moment/locale/se.js",
	"./se.js": "../../../../chart.js/node_modules/moment/locale/se.js",
	"./si": "../../../../chart.js/node_modules/moment/locale/si.js",
	"./si.js": "../../../../chart.js/node_modules/moment/locale/si.js",
	"./sk": "../../../../chart.js/node_modules/moment/locale/sk.js",
	"./sk.js": "../../../../chart.js/node_modules/moment/locale/sk.js",
	"./sl": "../../../../chart.js/node_modules/moment/locale/sl.js",
	"./sl.js": "../../../../chart.js/node_modules/moment/locale/sl.js",
	"./sq": "../../../../chart.js/node_modules/moment/locale/sq.js",
	"./sq.js": "../../../../chart.js/node_modules/moment/locale/sq.js",
	"./sr": "../../../../chart.js/node_modules/moment/locale/sr.js",
	"./sr-cyrl": "../../../../chart.js/node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../chart.js/node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../chart.js/node_modules/moment/locale/sr.js",
	"./ss": "../../../../chart.js/node_modules/moment/locale/ss.js",
	"./ss.js": "../../../../chart.js/node_modules/moment/locale/ss.js",
	"./sv": "../../../../chart.js/node_modules/moment/locale/sv.js",
	"./sv.js": "../../../../chart.js/node_modules/moment/locale/sv.js",
	"./sw": "../../../../chart.js/node_modules/moment/locale/sw.js",
	"./sw.js": "../../../../chart.js/node_modules/moment/locale/sw.js",
	"./ta": "../../../../chart.js/node_modules/moment/locale/ta.js",
	"./ta.js": "../../../../chart.js/node_modules/moment/locale/ta.js",
	"./te": "../../../../chart.js/node_modules/moment/locale/te.js",
	"./te.js": "../../../../chart.js/node_modules/moment/locale/te.js",
	"./tet": "../../../../chart.js/node_modules/moment/locale/tet.js",
	"./tet.js": "../../../../chart.js/node_modules/moment/locale/tet.js",
	"./th": "../../../../chart.js/node_modules/moment/locale/th.js",
	"./th.js": "../../../../chart.js/node_modules/moment/locale/th.js",
	"./tl-ph": "../../../../chart.js/node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../chart.js/node_modules/moment/locale/tl-ph.js",
	"./tlh": "../../../../chart.js/node_modules/moment/locale/tlh.js",
	"./tlh.js": "../../../../chart.js/node_modules/moment/locale/tlh.js",
	"./tr": "../../../../chart.js/node_modules/moment/locale/tr.js",
	"./tr.js": "../../../../chart.js/node_modules/moment/locale/tr.js",
	"./tzl": "../../../../chart.js/node_modules/moment/locale/tzl.js",
	"./tzl.js": "../../../../chart.js/node_modules/moment/locale/tzl.js",
	"./tzm": "../../../../chart.js/node_modules/moment/locale/tzm.js",
	"./tzm-latn": "../../../../chart.js/node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../chart.js/node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../chart.js/node_modules/moment/locale/tzm.js",
	"./uk": "../../../../chart.js/node_modules/moment/locale/uk.js",
	"./uk.js": "../../../../chart.js/node_modules/moment/locale/uk.js",
	"./ur": "../../../../chart.js/node_modules/moment/locale/ur.js",
	"./ur.js": "../../../../chart.js/node_modules/moment/locale/ur.js",
	"./uz": "../../../../chart.js/node_modules/moment/locale/uz.js",
	"./uz-latn": "../../../../chart.js/node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../chart.js/node_modules/moment/locale/uz-latn.js",
	"./uz.js": "../../../../chart.js/node_modules/moment/locale/uz.js",
	"./vi": "../../../../chart.js/node_modules/moment/locale/vi.js",
	"./vi.js": "../../../../chart.js/node_modules/moment/locale/vi.js",
	"./x-pseudo": "../../../../chart.js/node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../chart.js/node_modules/moment/locale/x-pseudo.js",
	"./yo": "../../../../chart.js/node_modules/moment/locale/yo.js",
	"./yo.js": "../../../../chart.js/node_modules/moment/locale/yo.js",
	"./zh-cn": "../../../../chart.js/node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../chart.js/node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "../../../../chart.js/node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../chart.js/node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "../../../../chart.js/node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../chart.js/node_modules/moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../chart.js/node_modules/moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map