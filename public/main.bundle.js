webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_service_worker__ = __webpack_require__("./node_modules/@angular/service-worker/esm5/service-worker.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_question_service__ = __webpack_require__("./src/app/services/question.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_exam_service__ = __webpack_require__("./src/app/services/exam.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_result_service__ = __webpack_require__("./src/app/services/result.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_navbar_navbar_component__ = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_footer_footer_component__ = __webpack_require__("./src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_contact_contact_component__ = __webpack_require__("./src/app/components/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_services_services_component__ = __webpack_require__("./src/app/components/services/services.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_faq_faq_component__ = __webpack_require__("./src/app/components/faq/faq.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_uhome_uhome_component__ = __webpack_require__("./src/app/components/uhome/uhome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_register_register_component__ = __webpack_require__("./src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_fpassword_fpassword_component__ = __webpack_require__("./src/app/components/fpassword/fpassword.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_uhome_unavbar_unavbar_component__ = __webpack_require__("./src/app/components/uhome/unavbar/unavbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_uhome_udashboard_udashboard_component__ = __webpack_require__("./src/app/components/uhome/udashboard/udashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_uhome_tutorials_tutorials_component__ = __webpack_require__("./src/app/components/uhome/tutorials/tutorials.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_uhome_questions_questions_component__ = __webpack_require__("./src/app/components/uhome/questions/questions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_uhome_exams_exams_component__ = __webpack_require__("./src/app/components/uhome/exams/exams.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_uhome_ustatus_ustatus_component__ = __webpack_require__("./src/app/components/uhome/ustatus/ustatus.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_ahome_ahome_component__ = __webpack_require__("./src/app/components/ahome/ahome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_ahome_anavbar_anavbar_component__ = __webpack_require__("./src/app/components/ahome/anavbar/anavbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_ahome_upload_upload_component__ = __webpack_require__("./src/app/components/ahome/upload/upload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_alogin_alogin_component__ = __webpack_require__("./src/app/components/alogin/alogin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_ahome_adashboard_adashboard_component__ = __webpack_require__("./src/app/components/ahome/adashboard/adashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_ahome_extra_extra_component__ = __webpack_require__("./src/app/components/ahome/extra/extra.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_testboard_testboard_component__ = __webpack_require__("./src/app/components/testboard/testboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_testboard_intropage_intropage_component__ = __webpack_require__("./src/app/components/testboard/intropage/intropage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_testboard_mainpage_mainpage_component__ = __webpack_require__("./src/app/components/testboard/mainpage/mainpage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__components_testboard_resultpage_resultpage_component__ = __webpack_require__("./src/app/components/testboard/resultpage/resultpage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__components_examboard_examboard_component__ = __webpack_require__("./src/app/components/examboard/examboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__components_examboard_examintro_examintro_component__ = __webpack_require__("./src/app/components/examboard/examintro/examintro.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__components_examboard_examdash_examdash_component__ = __webpack_require__("./src/app/components/examboard/examdash/examdash.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__components_examboard_examresult_examresult_component__ = __webpack_require__("./src/app/components/examboard/examresult/examresult.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__components_errorpage_errorpage_component__ = __webpack_require__("./src/app/components/errorpage/errorpage.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//service worker


//services




//components
































var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_13__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'testboard', component: __WEBPACK_IMPORTED_MODULE_34__components_testboard_testboard_component__["a" /* TestboardComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_42__components_errorpage_errorpage_component__["a" /* ErrorpageComponent */] },
            { path: ':id', component: __WEBPACK_IMPORTED_MODULE_35__components_testboard_intropage_intropage_component__["a" /* IntropageComponent */] },
            { path: 'testpage', component: __WEBPACK_IMPORTED_MODULE_36__components_testboard_mainpage_mainpage_component__["a" /* MainpageComponent */] },
            { path: 'resultpage', component: __WEBPACK_IMPORTED_MODULE_37__components_testboard_resultpage_resultpage_component__["a" /* ResultpageComponent */] }
        ]
    },
    { path: 'examboard', component: __WEBPACK_IMPORTED_MODULE_34__components_testboard_testboard_component__["a" /* TestboardComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_42__components_errorpage_errorpage_component__["a" /* ErrorpageComponent */] },
            { path: ':id', component: __WEBPACK_IMPORTED_MODULE_39__components_examboard_examintro_examintro_component__["a" /* ExamintroComponent */] },
            { path: 'mainpage/:id', component: __WEBPACK_IMPORTED_MODULE_40__components_examboard_examdash_examdash_component__["a" /* ExamdashComponent */] },
            { path: 'exam/resultpage', component: __WEBPACK_IMPORTED_MODULE_41__components_examboard_examresult_examresult_component__["a" /* ExamresultComponent */] }
        ]
    },
    {
        path: 'uhome', component: __WEBPACK_IMPORTED_MODULE_18__components_uhome_uhome_component__["a" /* UhomeComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_23__components_uhome_udashboard_udashboard_component__["a" /* UdashboardComponent */] },
            { path: 'tutorials', component: __WEBPACK_IMPORTED_MODULE_24__components_uhome_tutorials_tutorials_component__["a" /* TutorialsComponent */] },
            { path: 'questions', component: __WEBPACK_IMPORTED_MODULE_25__components_uhome_questions_questions_component__["a" /* QuestionsComponent */] },
            { path: 'exams', component: __WEBPACK_IMPORTED_MODULE_26__components_uhome_exams_exams_component__["a" /* ExamsComponent */] },
            { path: 'status', component: __WEBPACK_IMPORTED_MODULE_27__components_uhome_ustatus_ustatus_component__["a" /* UstatusComponent */] },
        ]
    },
    { path: 'forgotpass', component: __WEBPACK_IMPORTED_MODULE_21__components_fpassword_fpassword_component__["a" /* FpasswordComponent */] },
    { path: 'features', component: __WEBPACK_IMPORTED_MODULE_17__components_faq_faq_component__["a" /* FaqComponent */] },
    { path: 'aboutus', component: __WEBPACK_IMPORTED_MODULE_15__components_contact_contact_component__["a" /* ContactComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_16__components_services_services_component__["a" /* ServicesComponent */] },
    { path: 'e-examadmin/login', component: __WEBPACK_IMPORTED_MODULE_31__components_alogin_alogin_component__["a" /* AloginComponent */] },
    {
        path: 'e-examadmin/dash', component: __WEBPACK_IMPORTED_MODULE_28__components_ahome_ahome_component__["a" /* AhomeComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_32__components_ahome_adashboard_adashboard_component__["a" /* AdashboardComponent */] },
            { path: 'upload', component: __WEBPACK_IMPORTED_MODULE_30__components_ahome_upload_upload_component__["a" /* UploadComponent */] },
            { path: 'extra', component: __WEBPACK_IMPORTED_MODULE_33__components_ahome_extra_extra_component__["a" /* ExtraComponent */] }
        ]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_services_services_component__["a" /* ServicesComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_faq_faq_component__["a" /* FaqComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_uhome_uhome_component__["a" /* UhomeComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_fpassword_fpassword_component__["a" /* FpasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_uhome_unavbar_unavbar_component__["a" /* UnavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_uhome_udashboard_udashboard_component__["a" /* UdashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_uhome_tutorials_tutorials_component__["a" /* TutorialsComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_uhome_questions_questions_component__["a" /* QuestionsComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_uhome_exams_exams_component__["a" /* ExamsComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_uhome_ustatus_ustatus_component__["a" /* UstatusComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_ahome_ahome_component__["a" /* AhomeComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_ahome_anavbar_anavbar_component__["a" /* AnavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_30__components_ahome_upload_upload_component__["a" /* UploadComponent */],
                __WEBPACK_IMPORTED_MODULE_31__components_alogin_alogin_component__["a" /* AloginComponent */],
                __WEBPACK_IMPORTED_MODULE_32__components_ahome_adashboard_adashboard_component__["a" /* AdashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_33__components_ahome_extra_extra_component__["a" /* ExtraComponent */],
                __WEBPACK_IMPORTED_MODULE_34__components_testboard_testboard_component__["a" /* TestboardComponent */],
                __WEBPACK_IMPORTED_MODULE_35__components_testboard_intropage_intropage_component__["a" /* IntropageComponent */],
                __WEBPACK_IMPORTED_MODULE_36__components_testboard_mainpage_mainpage_component__["a" /* MainpageComponent */],
                __WEBPACK_IMPORTED_MODULE_37__components_testboard_resultpage_resultpage_component__["a" /* ResultpageComponent */],
                __WEBPACK_IMPORTED_MODULE_38__components_examboard_examboard_component__["a" /* ExamboardComponent */],
                __WEBPACK_IMPORTED_MODULE_39__components_examboard_examintro_examintro_component__["a" /* ExamintroComponent */],
                __WEBPACK_IMPORTED_MODULE_40__components_examboard_examdash_examdash_component__["a" /* ExamdashComponent */],
                __WEBPACK_IMPORTED_MODULE_41__components_examboard_examresult_examresult_component__["a" /* ExamresultComponent */],
                __WEBPACK_IMPORTED_MODULE_42__components_errorpage_errorpage_component__["a" /* ErrorpageComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_5__angular_service_worker__["a" /* ServiceWorkerModule */].register('/ngsw-worker.js', { enabled: __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].production })
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_8__services_question_service__["a" /* QuestionService */],
                __WEBPACK_IMPORTED_MODULE_9__services_exam_service__["a" /* ExamService */],
                __WEBPACK_IMPORTED_MODULE_10__services_result_service__["a" /* ResultService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/ahome/adashboard/adashboard.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/ahome/adashboard/adashboard.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/ahome/adashboard/adashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdashboardComponent = /** @class */ (function () {
    function AdashboardComponent() {
    }
    AdashboardComponent.prototype.ngOnInit = function () {
    };
    AdashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-adashboard',
            template: __webpack_require__("./src/app/components/ahome/adashboard/adashboard.component.html"),
            styles: [__webpack_require__("./src/app/components/ahome/adashboard/adashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdashboardComponent);
    return AdashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/ahome/ahome.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/ahome/ahome.component.html":
/***/ (function(module, exports) {

module.exports = "<app-anavbar></app-anavbar>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/components/ahome/ahome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AhomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AhomeComponent = /** @class */ (function () {
    function AhomeComponent() {
    }
    AhomeComponent.prototype.ngOnInit = function () {
    };
    AhomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-ahome',
            template: __webpack_require__("./src/app/components/ahome/ahome.component.html"),
            styles: [__webpack_require__("./src/app/components/ahome/ahome.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AhomeComponent);
    return AhomeComponent;
}());



/***/ }),

/***/ "./src/app/components/ahome/anavbar/anavbar.component.css":
/***/ (function(module, exports) {

module.exports = ".chip.chip-md {\r\n    height: 42px;\r\n    line-height: 42px;\r\n    border-radius: 24px;\r\n}\r\n\r\n.chip.chip-md img {\r\n    height: 42px;\r\n    width: 42px;\r\n    border-radius: 50%;\r\n}\r\n\r\n.chip.chip-lg {\r\n    height: 52px;\r\n    line-height: 52px;\r\n    border-radius: 26px;\r\n}\r\n\r\n.chip.chip-lg img {\r\n    height: 52px;\r\n    width: 52px;\r\n}"

/***/ }),

/***/ "./src/app/components/ahome/anavbar/anavbar.component.html":
/***/ (function(module, exports) {

module.exports = " <!--Navbar-->\n <nav class=\"navbar navbar-expand-lg navbar-dark indigo\" id=\"nbar\">\n       \n  <div class=\"container\">\n  <!-- Navbar brand -->\n  <a class=\"navbar-brand\" href=\"#\">Admin DashBoard</a>\n\n  <!-- Collapse button -->\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n      aria-expanded=\"false\" aria-label=\"Toggle navigation\"><span class=\"navbar-toggler-icon\"></span></button>\n\n  <!-- Collapsible content -->\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n\n      <!-- Links -->\n      <ul class=\"navbar-nav mr-auto\">\n          <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] =\"{exact:true}\">\n              <a class=\"nav-link\" [routerLink]=\"['/e-examadmin/dash']\"> Home</a>\n          </li>\n          <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] =\"{exact:true}\">\n              <a class=\"nav-link\" [routerLink]=\"['/e-examadmin/dash/upload']\"> Uploads</a>\n          </li>\n          <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] =\"{exact:true}\">\n                <a class=\"nav-link\" [routerLink]=\"['/e-examadmin/dash/extra']\" >Extra Options</a>\n            </li>\n      </ul>\n      <!-- Links -->\n\n      <!-- Search form -->\n      <form class=\"form-inline\">\n        <ul class=\"navbar-nav mr-0\">\n           <!-- Dropdown -->\n           <li class=\"nav-item dropdown\">\n            <a class=\"nav-link  \" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            <!--  <i class=\" fa fa-user-circle fa-7x\"></i> -->\n            <div class=\"chip chip-md cyan darken-2 white-text hoverable\">\n                  <img src=\"https://mdbootstrap.com/img/Photos/Avatars/img(27).jpg\" alt=\"Contact Person\">{{admin_name}}&nbsp;&nbsp;\n              </div>\n            </a>\n            <div class=\"dropdown-menu dropdown-primary\" aria-labelledby=\"navbarDropdownMenuLink\">\n                <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-user\"></i> Profile</a>\n                <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-cog\"></i> Settings</a>\n                <a class=\"dropdown-item\" data-toggle=\"modal\" data-target=\"#modalConfirmlogout\">\n                    <i class=\"fa fa-share-square\"></i> Signout</a>\n            </div>\n        </li>\n        </ul>\n      </form>\n  </div>\n  <!-- Collapsible content -->\n</div>\n</nav>\n<!--/.Navbar-->\n\n<!--Modal: modalConfirmDelete-->\n<div class=\"modal fade\" id=\"modalConfirmlogout\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-sm modal-notify modal-danger\" role=\"document\">\n        <!--Content-->\n        <div class=\"modal-content text-center\">\n            <!--Header-->\n            <div class=\"modal-header d-flex justify-content-center\">\n                <p class=\"heading\">Are you sure?</p>\n            </div>\n            <!--Body-->  \n            <!--Footer-->\n            <div class=\"modal-footer flex-center\">\n                <a class=\"btn  btn-outline-danger\" (click)=\"onLogoutClick()\">Yes</a>\n                <a type=\"button\" class=\"btn  btn-danger waves-effect\" data-dismiss=\"modal\">No</a>\n            </div>\n        </div>\n        <!--/.Content-->\n    </div>\n</div>\n<!--Modal: modalConfirmlogout-->"

/***/ }),

/***/ "./src/app/components/ahome/anavbar/anavbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AnavbarComponent = /** @class */ (function () {
    function AnavbarComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AnavbarComponent.prototype.ngOnInit = function () {
        var admin = localStorage.getItem('admin');
        var data = JSON.parse(admin);
        this.admin_name = data.name;
    };
    AnavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.router.navigate(['']);
    };
    AnavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-anavbar',
            template: __webpack_require__("./src/app/components/ahome/anavbar/anavbar.component.html"),
            styles: [__webpack_require__("./src/app/components/ahome/anavbar/anavbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], AnavbarComponent);
    return AnavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/ahome/extra/extra.component.css":
/***/ (function(module, exports) {

module.exports = ".uploadbox{\r\n    padding:30px;\r\n    margin-bottom: 5px;\r\n    height:auto;\r\n  }\r\n  .box{\r\n    -webkit-box-shadow: 0 0 20px 5px rgba(0,0,0,0.5);\r\n            box-shadow: 0 0 20px 5px rgba(0,0,0,0.5);\r\n  }\r\n  .topic-box{\r\n     padding:50px;\r\n     margin:40px;\r\n  }\r\n\r\n"

/***/ }),

/***/ "./src/app/components/ahome/extra/extra.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"uploadbox\">     \n    <div class=\"row\">\n        <!-- First column -->\n        <div class=\"col-3\">\n          <!-- Navigation -->\n          <div class=\"list-group menu\" id=\"list-tab\" role=\"tablist\">\n            <a class=\"list-group-item  success-color center\">Extra Pannel</a>\n            <a class=\"list-group-item list-group-item-action active hoverable\" id=\"add-cat\" data-toggle=\"list\" href=\"#list-category\" role=\"tab\" (click)=\"resetMsg()\">Add Category</a>\n            <a class=\"list-group-item list-group-item-action hoverable\" id=\"add-topic\" data-toggle=\"list\" href=\"#list-topics\" role=\"tab\" (click)=\"refreshTopics();resetMsg()\" >Add Topic</a>\n            <a class=\"list-group-item list-group-item-action hoverable\" id=\"add-exam\" data-toggle=\"list\" href=\"#list-exams\" role=\"tab\" (click)=\"resetMsg()\">Add Exam</a>\n          </div>\n          <!-- Navigation -->\n        </div>\n        <!-- First column -->\n        <!-- Second column -->\n  <div class=\"col-9\">\n          <!-- Content -->\n    <div class=\"tab-content\" id=\"nav-tabContent\">\n        <div class=\"tab-pane fade show active \" id=\"list-category\" role=\"tabpanel\" aria-labelledby=\"list-home-list\">\n             <div class=\"card text-center box scroll\" role=\"scroll\">\n                <div class=\"card-header success-color white-text fixed\">\n                      Categories\n                </div>\n                <div class=\"card-body topic-box\">\n                    <!-- Card -->\n                <div class=\"alert alert-dismissible alert-success\" *ngIf=\"successmsg\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n                           {{successmsg}}\n                      </div>\n                      <div class=\"alert alert-dismissible alert-danger animated bounce\" *ngIf=\"errormsg\">\n                        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n                           {{errormsg}}\n                      </div>\n                      <form (submit)=\"addCategory()\">\n                          <table class=\"table table-hover\">\n                            <tr class=\"table-primary\" >\n                               <th>Category Name<br/>\n                                  <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"cat\" name=\"cat\"></th>\n                                 <th><input class=\"btn btn-primary\" type=\"submit\" value=\"add new\"></th>\n                            </tr>\n                          </table>\n                       </form>\n                    </div>\n                </div>\n            </div>\n            <!--Upload Tutorials-->\n            <div class=\"tab-pane fade\" id=\"list-topics\" role=\"tabpanel\" aria-labelledby=\"list-profile-list\">\n              <div class=\"card text-center box scroll\" role=\"scroll\">\n                  <div class=\"card-header success-color white-text fixed\">\n                      Topics \n                  </div><br>\n                  <div class=\"alert alert-dismissible alert-danger animated bounce\" *ngIf=\"errormsg\">\n                        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n                        {{errormsg}}\n                </div>\n                <div class=\"alert alert-dismissible alert-success\" *ngIf=\"successmsg\">\n                        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n                        {{successmsg}}\n               </div>\n                 <div class=\"card-body topic-box\"> \n                    <!-- Card -->\n                      <form (submit)=\"addTopic()\">\n                      <table class=\"table table-hover\">\n                        <tr class=\"table-primary\" >\n                          <th>Choose Category<br/>\n                            <select class=\"form-control\" [(ngModel)]=\"category\" name=\"category\">\n                                <option *ngFor=\"let category of categories\"\n                                value=\"{{category}}\">{{category}}</option>\n                              </select>\n                          </th>\n                           <th>Topic Name<br/>\n                              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"topic\" name=\"topic\"></th>\n                             <th><input class=\"btn btn-primary\" type=\"submit\" value=\"add new\"></th>\n                        </tr>\n                      </table>\n                   </form>\n                  </div>\n              </div>\n            </div> <!--Upload Tutorials-->\n\n            <!-- Upload Previous Year Question's-->\n            <div class=\"tab-pane fade\" id=\"list-exams\" role=\"tabpanel\" aria-labelledby=\"list-messages-list\">\n             \n              <div class=\"card text-center box scroll\" role=\"scroll\">\n                  <div class=\"card-header success-color white-text fixed\">\n                     Add Exams\n                  </div>\n                  <br>\n                  <div class=\"alert alert-dismissible alert-danger animated bounce\" *ngIf=\"errormsg\">\n                        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n                        {{errormsg}}\n                </div>\n                <div class=\"alert alert-dismissible alert-success\" *ngIf=\"successmsg\">\n                        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n                        {{successmsg}}\n               </div>\n                  <div class=\"card-body topic-box\">   \n                      <!-- Card -->\n                      <form (submit)=\"addExam()\">\n                          <table class=\"table table-hover\">\n                            <tr class=\"table-primary\" >\n                               <th>Exam Name<br/>\n                                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"examname\" name=\"examname\"></th>\n                                 <th><input class=\"btn btn-primary\" type=\"submit\" value=\"add new\"></th>\n                            </tr>\n                          </table>\n                       </form>\n                  </div>\n              </div>\n            </div> <!-- Upload Previous Year Question's-->\n\n          <!-- Content -->\n        </div>\n        <!-- Second column -->\n      </div>        \n</div>"

/***/ }),

/***/ "./src/app/components/ahome/extra/extra.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExtraComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_question_service__ = __webpack_require__("./src/app/services/question.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_exam_service__ = __webpack_require__("./src/app/services/exam.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ExtraComponent = /** @class */ (function () {
    function ExtraComponent(qs, es) {
        this.qs = qs;
        this.es = es;
        this.categories = [];
    }
    ExtraComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.qs.getCategory().subscribe(function (data) {
            if (data.success) {
                _this.categories = data.categories;
            }
            else {
                _this.categories = [''];
            }
        });
    };
    ExtraComponent.prototype.refreshTopics = function () {
        var _this = this;
        this.qs.getCategory().subscribe(function (data) {
            if (data.success) {
                _this.categories = data.categories;
            }
            else {
                _this.categories = [''];
            }
        });
    };
    ExtraComponent.prototype.addCategory = function () {
        var _this = this;
        this.resetMsg();
        var data = {
            category: this.cat
        };
        if (data.category == undefined || data.category == '')
            this.errormsg = "please enter the category name";
        else {
            this.qs.addCategory(data).subscribe(function (data) {
                if (data.success) {
                    _this.successmsg = data.msg;
                    _this.cat = '';
                }
                else {
                    _this.errormsg = data.msg;
                }
            });
        }
    };
    ExtraComponent.prototype.addTopic = function () {
        var _this = this;
        this.resetMsg();
        var data = {
            category: this.category,
            topics: { name: this.topic }
        };
        if (data.category == undefined || data.category == '')
            this.errormsg = "please select the category name";
        else if (this.topic == undefined || this.topic == '')
            this.errormsg = "please enter the topic name";
        else {
            this.qs.addTopic(data).subscribe(function (data) {
                if (data.success) {
                    _this.successmsg = data.msg;
                    _this.topic = '';
                }
                else {
                    _this.errormsg = data.msg;
                }
            });
        }
    };
    ExtraComponent.prototype.addExam = function () {
        var _this = this;
        this.resetMsg();
        var data = {
            examname: this.examname
        };
        if (data.examname == undefined || data.examname == '') {
            this.errormsg = "please enter the exam name";
            return false;
        }
        else {
            this.es.addExam(data).subscribe(function (data) {
                if (data.success) {
                    _this.successmsg = data.msg;
                    _this.examname = '';
                }
                else {
                    _this.errormsg = data.msg;
                }
            });
        }
    };
    //=========(reseting messages)=============
    ExtraComponent.prototype.resetMsg = function () {
        this.errormsg = '';
        this.successmsg = '';
    };
    ExtraComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-extra',
            template: __webpack_require__("./src/app/components/ahome/extra/extra.component.html"),
            styles: [__webpack_require__("./src/app/components/ahome/extra/extra.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_question_service__["a" /* QuestionService */],
            __WEBPACK_IMPORTED_MODULE_2__services_exam_service__["a" /* ExamService */]])
    ], ExtraComponent);
    return ExtraComponent;
}());



/***/ }),

/***/ "./src/app/components/ahome/upload/upload.component.css":
/***/ (function(module, exports) {

module.exports = ".uploadbox{\r\n    padding:30px;\r\n    margin-bottom: 5px;\r\n    height:auto;\r\n  }\r\n  .box{\r\n    -webkit-box-shadow: 0 0 20px 5px rgba(0,0,0,0.5);\r\n            box-shadow: 0 0 20px 5px rgba(0,0,0,0.5);\r\n  }\r\n  .topic-box{\r\n     padding:50px;\r\n     margin:40px;\r\n  }\r\n\r\n"

/***/ }),

/***/ "./src/app/components/ahome/upload/upload.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"uploadbox\">     \n    <div class=\"row\">\n        <!-- First column -->\n        <div class=\"col-3\">\n          <!-- Navigation -->\n          <div class=\"list-group menu\" id=\"list-tab\" role=\"tablist\">\n            <a class=\"list-group-item  success-color center\">Upload Pannel</a>\n            <a class=\"list-group-item list-group-item-action active hoverable\" data-toggle=\"list\" href=\"#list-question\" role=\"tab\" aria-controls=\"home\" (click)=\"refreshCategory();disableStat()\">Question</a>\n            <a class=\"list-group-item list-group-item-action hoverable\" data-toggle=\"list\" href=\"#list-tuts\" role=\"tab\" aria-controls=\"profile\" (click)=\"disableStat()\">Tutorials</a>\n            <a class=\"list-group-item list-group-item-action hoverable\" data-toggle=\"list\" href=\"#list-pquestions\" role=\"tab\" aria-controls=\"messages\" (click)=\"disableStat()\">Question Papers</a>\n            <a class=\"list-group-item list-group-item-action hoverable\"  data-toggle=\"list\" href=\"#list-examquestion\" role=\"tab\" aria-controls=\"messages\" (click)=\"enableStat()\">Exam Question\n            <a class=\"green accent-4\"></a>\n            </a>\n          </div>\n          <br>\n          <div class=\"list-group menu\" id=\"list-tab\" *ngIf=\"examQuesStat\">\n            <a class=\"list-group-item default-color center\">Statatics</a>\n            <a class=\"list-group-item \" role=\"tab\">Aptitute : {{aptitutelen}} /50</a>\n            <a class=\"list-group-item \">Resoning : {{resoninglen}} /50</a>\n            <a class=\"list-group-item \" >English : {{englen}} /50</a>\n            <a class=\"list-group-item \" >Genral Awareness : {{genlen}} /50</a>\n          </div>\n          <!-- Navigation -->\n        </div>\n        <!-- First column -->\n        <!-- Second column -->\n        <div class=\"col-9\">\n          <!-- Content -->\n          <div class=\"tab-content\" id=\"nav-tabContent\">\n            <div class=\"tab-pane fade show active \" id=\"list-question\" role=\"tabpanel\" aria-labelledby=\"list-home-list\">\n                <div class=\"card text-center box scroll\" role=\"scroll\">\n                    <div class=\"card-header success-color white-text fixed\">\n                        Upload Questions\n                    </div>\n                    <div class=\"card-body\">\n                    <!-- Card -->\n                    <div class=\"alert alert-dismissible alert-success\" *ngIf=\"success\">\n                        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n                           {{success}}\n                      </div>\n                      <div class=\"alert alert-dismissible alert-danger\" *ngIf=\"error\">\n                        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n                        {{error}}\n                      </div>\n                      <form (submit)=\"onQuesSubmit()\">\n                              <div class=\"form-group\">\n                                <div class=\"row\">\n                                  <div class=\"col-sm-6\">\n                                      <div class=\"form-group\">\n                                          <label for=\"exampleSelect1\">Select Category Name</label>\n                                          <select class=\"form-control\" (change)=\"changeCategory(categoryval.value)\" #categoryval>\n                                            <option *ngFor=\"let category of categories\"\n                                              [value]=\"category\">{{category}}</option>\n                                          </select>\n                                        </div>\n                                  </div>\n                                  <div class=\"col-sm-6\">\n                                      <div class=\"form-group\">\n                                          <label for=\"exampleSelect1\">Select Topic Name</label>\n                                          <select class=\"form-control\" [(ngModel)]=\"topic\" name=\"topic\">\n                                            <option *ngFor=\"let chapter of chapters\"\n                                            value=\"{{chapter.name}}\">{{chapter.name}}</option>\n                                          </select>\n                                        </div>\n                                  </div>\n                                </div>\n                            </div>\n\n                            <div class=\"md-form\">\n                                <textarea type=\"text\"class=\"form-control \" rows=\"3\" [(ngModel)]=\"question\" name=\"question\"></textarea>\n                                <label for=\"textareaBasic\">Question</label>\n                            </div>\n                            \n                            <div class=\"form-group\">\n                              <label>Options</label>\n                                <div class=\"row\">\n                                  <div class=\"col-sm-3\">\n                                      <input type=\"text\" class=\"form-control\" placeholder=\"option 1\" [(ngModel)]=\"option1\" name=\"option1\">\n                                  </div>\n                                  <div class=\"col-sm-3\">\n                                      <input type=\"text\" class=\"form-control\" placeholder=\"option 2\" [(ngModel)]=\"option2\" name=\"option2\">\n                                  </div>\n                                  <div class=\"col-sm-3\">\n                                      <input type=\"text\" class=\"form-control\" placeholder=\"option 3\" [(ngModel)]=\"option3\" name=\"option3\">\n                                  </div>\n                                  <div class=\"col-sm-3\">\n                                      <input type=\"text\" class=\"form-control \" placeholder=\"option 4\" [(ngModel)]=\"option4\" name=\"option4\">\n                                  </div>        \n                               </div>\n                            </div>\n\n                            <div class=\"form-group col-sm-3\">\n                                <label>Answer</label>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"answer\" [(ngModel)]=\"answer\" name=\"answer\">\n                    </div>                        \n                    <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n                </form>\n            </div>\n        </div>\n    </div>\n            <!--Upload Tutorials-->\n    <!-- ===============upload exam questions========= -->\n    <div class=\"tab-pane fade show\" id=\"list-examquestion\" role=\"tabpanel\" >\n        <div class=\"card text-center box scroll\" role=\"scroll\">\n            <div class=\"card-header success-color white-text fixed\">\n                Upload Exam Questions\n            </div>\n            <div class=\"card-body\">\n                    <!-- Card -->\n                <div class=\"alert alert-dismissible alert-success\" *ngIf=\"success\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n                        {{success}}\n                    </div>\n                      <div class=\"alert alert-dismissible alert-danger\" *ngIf=\"error\">\n                        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n                        {{error}}\n                      </div>\n                      <form (submit)=\"addExamQuestion()\">\n                              <div class=\"form-group\">\n                                <div class=\"row\">\n                                  <div class=\"col-sm-6\">\n                                      <div class=\"form-group\">\n                                          <label for=\"exampleSelect1\">Select Exam</label>\n                                          <select class=\"form-control\" (change)=\"changeExam(examval.value)\" #examval>\n                                            <option *ngFor=\"let exam of exams\"\n                                              [value]=\"exam.examname\">{{exam.examname}}</option>\n                                          </select>\n                                    </div>\n                                </div>\n                            <div class=\"col-sm-6\">\n                                <div class=\"form-group\">\n                                    <label for=\"exampleSelect1\">Select Category Name</label>\n                                        <select class=\"form-control\" [(ngModel)]=\"examcat\" name=\"examcat\">\n                                          <option *ngFor=\"let category of categories\"\n                                            value=\"{{category}}\">{{category}}</option>\n                                          </select>\n                                        </div>\n                                  </div>\n                                </div>\n                            </div>\n\n                            <div class=\"md-form\">\n                                <textarea type=\"text\"class=\"form-control \" rows=\"3\" [(ngModel)]=\"question\" name=\"question\"></textarea>\n                                <label for=\"textareaBasic\">Question</label>\n                            </div>\n                            \n                            <div class=\"form-group\">\n                              <label>Options</label>\n                                <div class=\"row\">\n                                  <div class=\"col-sm-3\">\n                                      <input type=\"text\" class=\"form-control\" placeholder=\"option 1\" [(ngModel)]=\"option1\" name=\"option1\">\n                                  </div>\n                                  <div class=\"col-sm-3\">\n                                      <input type=\"text\" class=\"form-control\" placeholder=\"option 2\" [(ngModel)]=\"option2\" name=\"option2\">\n                                  </div>\n                                  <div class=\"col-sm-3\">\n                                      <input type=\"text\" class=\"form-control\" placeholder=\"option 3\" [(ngModel)]=\"option3\" name=\"option3\">\n                                  </div>\n                                  <div class=\"col-sm-3\">\n                                      <input type=\"text\" class=\"form-control \" placeholder=\"option 4\" [(ngModel)]=\"option4\" name=\"option4\">\n                                  </div>        \n                               </div>\n                            </div>\n\n                            <div class=\"form-group col-sm-3\">\n                                <label>Answer</label>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"answer\" [(ngModel)]=\"answer\" name=\"answer\">\n                            </div>                        \n                            <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n                        </form>\n                    </div>\n                </div>\n            </div>\n<!--(ends)===============upload exam questions=========(ends) -->\n\n            <div class=\"tab-pane fade\" id=\"list-tuts\" role=\"tabpanel\" aria-labelledby=\"list-profile-list\">\n              <div class=\"card text-center box scroll\" role=\"scroll\">\n                  <div class=\"card-header success-color white-text fixed\">\n                      Upload Tutorials\n                  </div><br>\n                  <div class=\"alert alert-dismissible alert-danger\" *ngIf=\"errormsg\">\n                        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n                        {{errormsg}}\n                </div>\n                <div class=\"alert alert-dismissible alert-success\" *ngIf=\"successmsg\">\n                        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n                        {{successmsg}}\n               </div>\n               <div class=\"process\" *ngIf=\"loader\">\n                   <img src=\"../../../../assets/images/loader.gif\">\n              </div>\n                  <div class=\"card-body topic-box\">\n                        \n                      <!-- Card -->\n                      <form (submit)=\"uploadtutorial(file.url)\">\n                        <div class=\"row\">\n                        <div class=\"col-sm-6\">\n                                 <div class=\"form-group\">\n                                 <label for=\"exampleSelect1\">Category</label>\n                                     <select class=\"form-control\" (change)=\"changeCategory(category.value)\" #category>\n                                         <option *ngFor=\"let topic of categories\"\n                                           [value]=\"topic\">{{topic}}</option>\n                                     </select>\n                                </div>\n                         </div>\n                       \n                            <div class=\"col-sm-6\">\n                                 <div class=\"form-group\">\n                                    <label for=\"exampleSelect1\">Topic</label>\n                                     <input type=\"text\" [(ngModel)]=\"topic\" name=\"topic\" class=\"form-control\" placeholder=\"Enter Topic name\"/>\n                                 </div>\n                            </div>\n                        </div>\n                          <div class=\"md-form\">   \n                              <div class=\"file-field\">\n                                  <div class=\"btn btn-primary btn-sm float-left\">\n                                      <span><strong>Choose Tutorial</strong></span>\n                                      <input type=\"file\" style=\"height:50px;\" accept=\".pdf\" #file (change) = \"onFileChange(file.value)\">\n                                  </div>\n                              </div>\n                              <input type=\"submit\" value=\"upload\" class=\"btn btn-primary\">\n                          </div>\n                         \n                      </form>\n                  </div>\n              </div>\n            </div> <!--Upload Tutorials-->\n\n            <!-- Upload Previous Year Question's-->\n            <div class=\"tab-pane fade\" id=\"list-pquestions\" role=\"tabpanel\" aria-labelledby=\"list-messages-list\">\n             \n              <div class=\"card text-center box scroll\" role=\"scroll\">\n                  <div class=\"card-header success-color white-text fixed\">\n                      Upload Previous Year Question's\n                  </div>\n                  <br>\n                  <div class=\"alert alert-dismissible alert-danger\" *ngIf=\"errormsg\">\n                        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n                        {{pyerrormsg}}\n                </div>\n                <div class=\"alert alert-dismissible alert-success\" *ngIf=\"successmsg\">\n                        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n                        {{pysuccessmsg}}\n               </div>\n                  <div class=\"card-body topic-box\">   \n                      <!-- Card -->\n                      <form (submit)=\"uploadPYQuestion()\">\n                        <div class=\"row\">\n                        <div class=\"col-sm-6\">\n                                 <div class=\"form-group\">\n                                 <label for=\"exampleSelect1\">Category</label>\n                                     <select class=\"form-control\" (change)=\"changeCategory(category.value)\" #category>\n                                         <option *ngFor=\"let topic of categories\"\n                                           [value]=\"topic\">{{topic}}</option>\n                                     </select>\n                                </div>\n                         </div>\n                            <div class=\"col-sm-6\">\n                                 <div class=\"form-group\">\n                                    <label for=\"exampleSelect1\">Topic</label>\n                                     <input type=\"text\" [(ngModel)]=\"topic\" name=\"topic\" class=\"form-control\" placeholder=\"Enter Topic name\"/>\n                                 </div>\n                            </div>\n                        </div>\n                          <div class=\"md-form\">   \n                              <div class=\"file-field\">\n                                  <div class=\"btn btn-primary btn-sm float-left\">\n                                      <span><strong>Choose Tutorial</strong></span>\n                                      <input type=\"file\" style=\"height:50px;\" >\n                                  </div>\n                              </div>\n                              <input type=\"submit\" value=\"upload\" class=\"btn btn-primary\">\n                          </div>\n                      </form>\n                  </div>\n              </div>\n            </div> <!-- Upload Previous Year Question's-->\n\n          <!-- Content -->\n        </div>\n        <!-- Second column -->\n      </div>        \n</div>"

/***/ }),

/***/ "./src/app/components/ahome/upload/upload.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_question_service__ = __webpack_require__("./src/app/services/question.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_exam_service__ = __webpack_require__("./src/app/services/exam.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UploadComponent = /** @class */ (function () {
    //==============(Exam question variables)==============//
    function UploadComponent(qs, es) {
        var _this = this;
        this.qs = qs;
        this.es = es;
        this.categories = [];
        this.Aptitute = [];
        this.Resoning = [];
        this.English = [];
        this.aptitutelen = 5;
        this.resoninglen = 10;
        this.englen = 3;
        this.genlen = 24;
        this.exams = [];
        this.resetMsg();
        this.qs.getCategory().subscribe(function (data) {
            if (data.success) {
                _this.categories = data.categories;
            }
            else {
                _this.categories = [''];
            }
        });
    }
    UploadComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.resetMsg();
        this.examQuesStat = false;
        this.es.getExams().subscribe(function (data) {
            if (data.success) {
                _this.exams = data.data;
                _this.examname = data.data[0].examname;
            }
            else {
                _this.exams = [''];
            }
        });
    };
    //===========(question upload methods)====================//
    UploadComponent.prototype.changeCategory = function (value) {
        var _this = this;
        this.resetMsg();
        this.chapters = [''];
        this.category = value;
        var catdata = {
            category: this.category
        };
        this.qs.getTopics(catdata).subscribe(function (data) {
            if (data.success) {
                _this.chapters = data.data.topics;
            }
            else {
                //  this.setError(data.msg);
                _this.chapters = [''];
            }
        });
    };
    //refreshing categories list
    UploadComponent.prototype.refreshCategory = function () {
        var _this = this;
        this.resetMsg();
        this.qs.getCategory().subscribe(function (data) {
            if (data.success) {
                _this.categories = data.categories;
            }
            else {
                _this.categories = [''];
            }
        });
    };
    UploadComponent.prototype.getData = function (value) {
        if (value == "Aptitute")
            return this.Aptitute;
        else if (value == "Resoning")
            return this.Resoning;
        else if (value == "English")
            return this.English;
    };
    UploadComponent.prototype.onQuesSubmit = function () {
        var _this = this;
        this.resetMsg();
        var question = {
            question: this.question,
            options: [this.option1, this.option2, this.option3, this.option4],
            answer: this.answer,
            category: this.category,
            topic: this.topic
        };
        if (this.topic == undefined || this.topic == '') {
            this.setError("please select the topic name");
            return false;
        }
        else if (question.question == undefined || question.answer == undefined) {
            this.error = "please fill all the fileds ";
            return false;
        }
        else if (question.question == undefined || question.question == '') {
            this.error = "please fill the Question fileds ";
            return false;
        }
        else if (question.options[0] == undefined || question.options[1] == undefined || question.options[3] == undefined || question.options[3] == undefined) {
            this.error = "please fill all the Options fileds ";
            return false;
        }
        else if (question.answer == undefined || question.answer == '') {
            this.error = "please fill  the Answer fileds ";
            return false;
        }
        else {
            this.qs.addQuestion(question).subscribe(function (data) {
                if (data.success) {
                    _this.success = data.msg;
                    _this.clearAll();
                }
                else {
                    _this.error = data.msg;
                    return;
                }
            });
        }
    };
    //===========(question upload methods)====================//
    //===========(Exam question upload methods)======================//
    UploadComponent.prototype.enableStat = function () {
        this.examQuesStat = true;
        this.populateQuestionNumber(); //populating number of questions
    };
    UploadComponent.prototype.disableStat = function () {
        this.examQuesStat = false;
        this.resetMsg();
    };
    UploadComponent.prototype.changeExam = function (value) {
        this.examname = value;
        this.populateQuestionNumber();
    };
    UploadComponent.prototype.addExamQuestion = function () {
        var _this = this;
        this.resetMsg();
        var examQuestion = {
            examname: this.examname,
            questions: {
                question: this.question,
                options: [this.option1, this.option2, this.option3, this.option4],
                answer: this.answer,
                category: this.examcat
            }
        };
        if (examQuestion.examname == undefined || examQuestion.examname == '') {
            this.error = "Please select the exam name";
            return false;
        }
        else if (this.examcat == undefined || this.examcat == '') {
            this.error = "Please select the category";
            return false;
        }
        else if (this.question == undefined || this.question == undefined) {
            this.error = "please fill all the fileds ";
            return false;
        }
        else if (this.option1 == undefined || this.option2 == undefined || this.option3 == undefined || this.option4 == undefined) {
            this.error = "please fill all the Options fileds ";
            return false;
        }
        else if (this.answer == undefined || this.answer == '') {
            this.error = "please fill  the Answer fileds ";
            return false;
        }
        else {
            this.es.addExamQuestion(examQuestion).subscribe(function (data) {
                if (data.success) {
                    _this.success = data.msg;
                    _this.populateQuestionNumber();
                    _this.clearAll();
                }
                else {
                    _this.error = data.msg;
                    return;
                }
            });
        }
    };
    //number of question uploaded to particular exam
    UploadComponent.prototype.populateQuestionNumber = function () {
        var _this = this;
        console.log(this.examname);
        var ename = {
            examname: this.examname
        };
        this.es.getExamQuestionStat(ename).subscribe(function (data) {
            if (data.success) {
                console.log(data);
                _this.aptitutelen = data.data.aptitute;
                _this.resoninglen = data.data.resoning;
                _this.englen = data.data.english;
                _this.genlen = data.data.genral;
            }
        });
    };
    //===========(Exam question upload methods)======================//
    UploadComponent.prototype.clearAll = function () {
        this.question = '';
        this.option1 = '';
        this.option2 = '';
        this.option3 = '';
        this.option4 = '';
        this.answer = '';
        this.topic = null;
    };
    UploadComponent.prototype.resetMsg = function () {
        this.error = '';
        this.success = '';
    };
    UploadComponent.prototype.setError = function (msg) {
        this.error = msg;
    };
    UploadComponent.prototype.setSuccess = function (msg) {
        this.success = msg;
    };
    UploadComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-upload',
            template: __webpack_require__("./src/app/components/ahome/upload/upload.component.html"),
            styles: [__webpack_require__("./src/app/components/ahome/upload/upload.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_question_service__["a" /* QuestionService */],
            __WEBPACK_IMPORTED_MODULE_2__services_exam_service__["a" /* ExamService */]])
    ], UploadComponent);
    return UploadComponent;
}());



/***/ }),

/***/ "./src/app/components/alogin/alogin.component.css":
/***/ (function(module, exports) {

module.exports = ".alogin-box{\r\n  height:85vh;\r\n}"

/***/ }),

/***/ "./src/app/components/alogin/alogin.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"alogin-box\">\n  <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n          <div class=\"modal-header text-center\">\n              <h4 class=\"modal-title w-100 font-weight-bold\">ADMIN LOGIN</h4>\n          </div>\n          <form  (submit)=\"onLoginSubmit()\">\n          <div class=\"modal-body mx-3\">\n              <div class=\"alert alert-dismissible alert-danger animated bounce\" *ngIf=\"errormsg\">\n                  <button type=\"button\" class=\"close fade\" data-dismiss=\"alert\" (click)=\"closeAll()\">&times;</button>\n                  {{errormsg}}\n              </div>\n              <div class=\"md-form mb-5\">\n                  <i class=\"fa fa-user-circle prefix grey-text\"></i>\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"aname\" name=\"aname\">\n                  <label >Admin Id</label>\n              </div>\n\n              <div class=\"md-form mb-4\">\n                  <i class=\"fa fa-lock prefix grey-text\"></i>\n                  <input type=\"password\" class=\"form-control\" [(ngModel)]=\"pass\" name=\"pass\">\n                  <label >Admin Paswword</label>\n              </div>\n\n          </div>\n          <div class=\"modal-footer d-flex justify-content-center\">\n              <input type=\"submit\" class=\"btn btn-default\" value=\"Login\">\n          </div>\n        </form> \n      </div>\n   \n  </div>\n</div>      \n\n "

/***/ }),

/***/ "./src/app/components/alogin/alogin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AloginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AloginComponent = /** @class */ (function () {
    function AloginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.aname = '';
        this.pass = '';
    }
    AloginComponent.prototype.ngOnInit = function () {
    };
    AloginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var admin = {
            aname: this.aname,
            password: this.pass
        };
        if (admin.aname == '' && admin.password == '') {
            this.aname = '';
            this.pass = '';
            this.errormsg = "Admin-ID and Password is required !";
            return;
        }
        else {
            this.authService.authenticateAdmin(admin).subscribe(function (data) {
                if (data.success) {
                    _this.authService.storeAdminData(data.token, data.admin);
                    _this.router.navigate(['/e-examadmin/dash']);
                }
                else {
                    _this.errormsg = data.msg;
                }
            });
        }
    };
    AloginComponent.prototype.closeAll = function () {
        this.errormsg = '';
    };
    AloginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-alogin',
            template: __webpack_require__("./src/app/components/alogin/alogin.component.html"),
            styles: [__webpack_require__("./src/app/components/alogin/alogin.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], AloginComponent);
    return AloginComponent;
}());



/***/ }),

/***/ "./src/app/components/contact/contact.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  contact works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("./src/app/components/contact/contact.component.html"),
            styles: [__webpack_require__("./src/app/components/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/components/errorpage/errorpage.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/errorpage/errorpage.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  errorpage works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/errorpage/errorpage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorpageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ErrorpageComponent = /** @class */ (function () {
    function ErrorpageComponent() {
    }
    ErrorpageComponent.prototype.ngOnInit = function () {
    };
    ErrorpageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-errorpage',
            template: __webpack_require__("./src/app/components/errorpage/errorpage.component.html"),
            styles: [__webpack_require__("./src/app/components/errorpage/errorpage.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ErrorpageComponent);
    return ErrorpageComponent;
}());



/***/ }),

/***/ "./src/app/components/examboard/examboard.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/examboard/examboard.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/components/examboard/examboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExamboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExamboardComponent = /** @class */ (function () {
    function ExamboardComponent() {
    }
    ExamboardComponent.prototype.ngOnInit = function () { };
    ExamboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-examboard',
            template: __webpack_require__("./src/app/components/examboard/examboard.component.html"),
            styles: [__webpack_require__("./src/app/components/examboard/examboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ExamboardComponent);
    return ExamboardComponent;
}());



/***/ }),

/***/ "./src/app/components/examboard/examdash/examdash.component.css":
/***/ (function(module, exports) {

module.exports = ".exampage{\r\n    height:94vh;\r\n    background: #ccc;\r\n}\r\n.header{\r\n   height:15vh;\r\n   background: #0bf;\r\n   text-align: center;\r\n}\r\n.header>h2{\r\n    font-weight: bold;\r\n    font-size:2em;\r\n}\r\n.body{\r\n    height:70vh;\r\n}\r\n.footer{\r\n    height:10vh;\r\n}\r\n.page{\r\n    display:-ms-grid;\r\n    display:grid;\r\n    -ms-grid-columns: 1fr .4fr;\r\n        grid-template-columns: 1fr .4fr;\r\n}\r\n.catlinks{\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n}\r\nsections>li{\r\n    margin:10px !important;\r\n    padding:10px !important;\r\n}\r\n.questionbox{\r\n    overflow-y:auto;\r\n    padding:10px;\r\n    background: #fff;\r\n    color:#000;\r\n    height:79vh;;\r\n}\r\n.nav-item>a{\r\n    color:#fff !important;\r\n}\r\n.active{\r\n    background: inherit  !important;\r\n    color:#000 !important;\r\n}\r\n.radios{\r\n    padding:3px;\r\n    margin-left: 20px;\r\n}\r\n.radios>span{\r\n    margin-left: 10px;\r\n}\r\n.question{\r\n    margin-bottom: 10px;\r\n}\r\n.option-pane{\r\n    height:94vh;\r\n    background: #0bf;\r\n}\r\n.submitbox{\r\n    position:absolute;\r\n    background: rgba(0,0,0,0.5);\r\n    display:block;\r\n}\r\n.message{\r\n    text-align: center;\r\n    padding:20px;\r\n}\r\n.timer>h4{\r\n    display:inline;\r\n}\r\ntime{\r\n    margin-left:8px;\r\n    font-size: 1.6em;\r\n    letter-spacing: 5px;\r\n    font-weight: bold;\r\n}\r\n.quetion-no{\r\n    margin:0 5px ;\r\n    padding:5px;\r\n    background:#fff;\r\n    height:60vh;\r\n}\r\n@media (max-width:800px), screen and (orientation: portrait){\r\n    \r\n    .questionbox{ height:auto;}\r\n    .body{\r\n        height:auto;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/components/examboard/examdash/examdash.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"exampage\">\n\n    <div class=\"page\">\n        <!-- ======(section1)=========== -->\n        <div class=\"section1\">\n            <section class=\"header\">\n                <h2>Online Examination {{examName}}</h2>\n                <div class=\"catlinks\">\n\n                    <!-- Nav tabs -->\n                    <ul class=\"nav nav-tabs nav-justified indigo sections\">\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#Aptitute\" role=\"tab\">Aptitute</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" data-toggle=\"tab\" href=\"#Resoning\" role=\"tab\">Resoning</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" data-toggle=\"tab\" href=\"#English\" role=\"tab\">English</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" data-toggle=\"tab\" href=\"#Genral\" role=\"tab\">Genral Awareness</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" data-toggle=\"tab\" href=\"#Computer\" role=\"tab\">Computer</a>\n                        </li>\n                    </ul>\n                </div>\n            </section>\n\n            <section class=\"body\">\n                <div class=\"questionbox\">\n                    <div class=\"tab-content\">\n                        <!--Panel 1-->\n                        <div class=\"tab-pane fade in show active\" id=\"Aptitute\" role=\"tabpanel\">\n                            <br>\n                            <div class=\"question\" *ngFor=\"let ques of aptituteQues;let i = index\">\n                                <p>\n                                    <b>Question{{i+1}}.</b>&nbsp;{{ques.question}}</p>\n                                <div class=\"radios\" *ngFor=\"let opt of ques.options\">\n                                    <input type=\"radio\" name=\"opt{{i}}\" [value]=\"opt\" #optvalue (click)=\"addApti(i,optvalue.value)\">\n                                    <span>{{opt}}</span>\n                                    <br/>\n                                </div>\n                            </div>\n                        </div>\n                        <!--/.Panel 1-->\n                        <!--Panel 2-->\n                        <div class=\"tab-pane fade\" id=\"Resoning\" role=\"tabpanel\">\n                            <br>\n                            <div class=\"question\" *ngFor=\"let ques of resoningQuestion;let i = index\">\n                                <p>{{i+1}}.&nbsp;{{ques.question}}</p>\n                                <div class=\"radios\" *ngFor=\"let opt of ques.options\">\n                                    <input type=\"radio\" name=\"opt{{i}}\" [value]=\"opt\" #optvalue (click)=\"addResoning(i,optvalue.value)\">\n                                    <span>{{opt}}</span>\n                                    <br/>\n                                </div>\n                            </div>\n                        </div>\n                        <!--/.Panel 2-->\n                        <!--Panel 3-->\n                        <div class=\"tab-pane fade\" id=\"English\" role=\"tabpanel\">\n                            <br>\n                            <div class=\"question\" *ngFor=\"let ques of englisgQuestion;let i = index\">\n                                <p>{{i+1}}.&nbsp;{{ques.question}}</p>\n                                <div class=\"radios\" *ngFor=\"let opt of ques.options\">\n                                    <input type=\"radio\" name=\"opt{{i}}\" [value]=\"opt\" #optvalue (click)=\"addEnglish(i,optvalue.value)\">\n                                    <span>{{opt}}</span>\n                                    <br/>\n                                </div>\n                            </div>\n\n                        </div>\n                        <!--/.Panel 3-->\n                        <!--Panel 4-->\n                        <div class=\"tab-pane fade\" id=\"Genral\" role=\"tabpanel\">\n                            <br>\n                            <div class=\"question\" *ngFor=\"let ques of genralQuestion;let i = index\">\n                                <p>{{i+1}}.&nbsp;{{ques.question}}</p>\n                                <div class=\"radios\" *ngFor=\"let opt of ques.options\">\n                                    <input type=\"radio\" name=\"opt{{i}}\" [value]=\"opt\" #optvalue (click)=\"addGenral(i,optvalue.value)\">\n                                    <span>{{opt}}</span>\n                                    <br/>\n                                </div>\n                            </div>\n\n                        </div>\n                        <!--/.Panel 4-->\n                        <!--Panel 5-->\n                        <div class=\"tab-pane fade\" id=\"Computer\" role=\"tabpanel\">\n                            <br>\n                            <div class=\"question\" *ngFor=\"let ques of computerQuestion;let i = index\">\n                                <p>{{i+1}}.&nbsp;{{ques.question}}</p>\n                                <div class=\"radios\" *ngFor=\"let opt of ques.options\">\n                                    <input type=\"radio\" name=\"opt{{i}}\" [value]=\"opt\" #optvalue (click)=\"addComputer(i,optvalue.value)\">\n                                    <span>{{opt}}</span>\n                                    <br/>\n                                </div>\n                            </div>\n\n                        </div>\n                        <!--/.Panel 5-->\n                    </div>\n                </div>\n            </section>\n\n            \n        </div>\n <!-- ======(section1)=========== -->\n\n<!-- ======(section2)=========== -->\n        <div class=\"section2\">\n            <!--Card-->\n            <div class=\"option-pane\">\n                <!--Card content-->\n                <div class=\"card-body timer\">\n                    <h4 class=\"card-title\">Time Elapsed :</h4><time>{{hr}}h:{{min}}m:{{ticks}}s</time>\n                    <hr>\n                </div>\n                <!-- Card footer -->\n                <div class=\"quetion-no\">\n                    question number\n                </div>\n                <!-- Card footer -->\n                <section class=\"footer center\">\n                        <button class=\"btn btn-warning\" (click)=\"showResult()\">Final submit</button>\n                    </section>\n            </div>\n            \n            <!--/.Card-->\n        </div>\n        <!-- (setion 2)====== -->\n    </div>\n<!-- ======(section2)=========== -->\n\n</div><!-- ======(main)=========== -->\n\n<!--- stop model -->\n<div class=\"modal submitbox\" tabindex=\"-1\" role=\"dialog\" style=\"display:block;\" aria-hidden=\"true\" *ngIf=\"stop\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n           <h1 class=\"message\">Time Over</h1>\n            <div class=\"modal-footer d-flex justify-content-center\">\n                <button class=\"btn btn-default\" (click)=\"showResult()\">Submit Test</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n                "

/***/ }),

/***/ "./src/app/components/examboard/examdash/examdash.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExamdashComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_exam_service__ = __webpack_require__("./src/app/services/exam.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_TimerObservable__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/TimerObservable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_result_service__ = __webpack_require__("./src/app/services/result.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ExamdashComponent = /** @class */ (function () {
    function ExamdashComponent(route, router, es, rs) {
        this.route = route;
        this.router = router;
        this.es = es;
        this.rs = rs;
        this.ticks = 0;
        this.hr = 0;
        this.min = 0;
        this.stop = false;
        this.selectedA = [];
        this.selectedE = [];
        this.selectedR = [];
        this.selectedG = [];
        this.selectedC = [];
        //questions
        this.aptituteQues = [];
        this.resoningQuestion = [];
        this.englisgQuestion = [];
        this.genralQuestion = [];
        this.computerQuestion = [];
        //amswers
        this.aptituteAns = [];
        this.resoningAns = [];
        this.englisgAns = [];
        this.genralAns = [];
        this.computerAns = [];
    }
    ExamdashComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.examName = this.route.snapshot.params['id'];
        if (this.examName == undefined || this.examName == '')
            this.router.navigate(['/examdash']);
        else {
            var ename = {
                examname: this.examName
            };
            this.es.getExamQuestion(ename).subscribe(function (data) {
                if (data.success) {
                    data.data.forEach(function (elmt) {
                        if (elmt.category == "aptitute") {
                            _this.aptituteQues.push(elmt);
                            _this.rs.setAptiAns(elmt.answer);
                        }
                        else if (elmt.category == "resoning") {
                            _this.resoningQuestion.push(elmt);
                            _this.rs.setResoningAns(elmt.answer);
                        }
                        else if (elmt.category == "english") {
                            _this.englisgQuestion.push(elmt);
                            _this.rs.setEnglishAns(elmt.answer);
                        }
                        else if (elmt.category == "genral") {
                            _this.genralQuestion.push(elmt);
                            _this.rs.setGenralAns(elmt.answer);
                        }
                        else if (elmt.category == "computer") {
                            _this.computerQuestion.push(elmt);
                            _this.rs.setComputerAns(elmt.answer);
                        }
                    });
                }
                else {
                    _this.router.navigate(['/examdash']);
                }
            });
        }
        //timer
        this.timer();
    };
    ExamdashComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    ExamdashComponent.prototype.addApti = function (num, val) {
        if (this.varify(num + 1, this.selectedA)) {
            this.selectedA.push({
                no: num + 1,
                opt: val
            });
        }
    };
    ExamdashComponent.prototype.addResoning = function (num, val) {
        if (this.varify(num + 1, this.selectedR)) {
            this.selectedR.push({
                no: num + 1,
                opt: val
            });
        }
    };
    ExamdashComponent.prototype.addEnglish = function (num, val) {
        if (this.varify(num + 1, this.selectedE)) {
            this.selectedE.push({
                no: num + 1,
                opt: val
            });
        }
    };
    ExamdashComponent.prototype.addGenral = function (num, val) {
        if (this.varify(num + 1, this.selectedG)) {
            this.selectedG.push({
                no: num + 1,
                opt: val
            });
        }
    };
    ExamdashComponent.prototype.addComputer = function (num, val) {
        if (this.varify(num + 1, this.selectedC)) {
            this.selectedC.push({
                no: num + 1,
                opt: val
            });
        }
    };
    ExamdashComponent.prototype.varify = function (num, option) {
        for (var i = 0; i < option.length; i++) {
            if (option[i].no == num) {
                option.splice(i, 1);
                return true;
            }
        }
        ;
        return true;
    };
    ExamdashComponent.prototype.showResult = function () {
        this.rs.setAOption(this.selectedA);
        this.rs.setROption(this.selectedR);
        this.rs.setEOption(this.selectedE);
        this.rs.setGOption(this.selectedG);
        this.rs.setCOption(this.selectedC);
        this.router.navigate(['/examboard/exam/resultpage']);
    };
    ExamdashComponent.prototype.incTimer = function () {
        this.min = this.min + 1;
        if (this.min == 60) {
            this.hr = this.hr + 1;
            this.ticks = 0;
            this.min = 0;
            if (this.hr == 1) {
                this.stop = true;
                this.subscription.unsubscribe();
            }
        }
    };
    ExamdashComponent.prototype.timer = function () {
        var _this = this;
        var timer = __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_TimerObservable__["a" /* TimerObservable */].create(2000, 1000);
        this.subscription = timer.subscribe(function (t) {
            _this.ticks = t % 60 + 1;
            if (_this.ticks == 60) {
                _this.incTimer();
                _this.ticks = 0;
            }
        });
    };
    ExamdashComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-examdash',
            template: __webpack_require__("./src/app/components/examboard/examdash/examdash.component.html"),
            styles: [__webpack_require__("./src/app/components/examboard/examdash/examdash.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_exam_service__["a" /* ExamService */],
            __WEBPACK_IMPORTED_MODULE_4__services_result_service__["a" /* ResultService */]])
    ], ExamdashComponent);
    return ExamdashComponent;
}());



/***/ }),

/***/ "./src/app/components/examboard/examintro/examintro.component.css":
/***/ (function(module, exports) {

module.exports = ".intropage{\r\n    height:93vh;\r\n    overflow-y: auto;\r\n    margin-left:10px;\r\n}"

/***/ }),

/***/ "./src/app/components/examboard/examintro/examintro.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"intropage\">\n    <h1>Instructions for Online Examination</h1>\n    <br>\n    <b style=\"color:red\">Please Read the intruction very carefully before starting the exam</b>\n    <br>\n   <div class=\"intructions\">\n     <ol class=\"list\">\n       <li>click<b>start</b> exam button bottom of the screen to start the exam</li>\n       <li>The count down timer has been set at the top Right side of the screen will display left out time to closure from where you can monitor your time you have to complete the exam.</li>\n\n       <li>Click one of the answer, simply click the disired option button.</li>\n       <li>The colour coded diagram on the left side of the screen allows the status of the question.\n         <table border=\"1\">\n           <tr>\n             <td style=\"background:red;padding:5px;\">RED</td>\n             <td>Not answers/<b>Not Attempted</b>Question</td>\n           </tr>\n           <tr>\n             <td style=\"background:green;padding:5px;\">GREEN</td>\n             <td>Answered/<b>Attempted</b>Question</td>\n          </tr>\n          <tr>\n            <td style=\"background:yellow;padding:5px;\">YELLOW</td>\n            <td><b>Not Answered & Marked for review</b></td>\n          </tr>\n          <tr>\n            <td></td>\n            <td></td>\n          </tr>\n          <tr>\n            <td></td>\n            <td></td>\n          </tr>\n          <tr>\n            <td></td>\n            <td></td>\n          </tr>\n         </table>\n       </li>\n     </ol>\n\n   </div>\n<hr color=\"red\">\n\n<button class=\"btn btn-primary\" (click)=\"startExam()\">Start Exam</button>\n</div>\n"

/***/ }),

/***/ "./src/app/components/examboard/examintro/examintro.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExamintroComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExamintroComponent = /** @class */ (function () {
    function ExamintroComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    ExamintroComponent.prototype.ngOnInit = function () {
        this.name = this.route.snapshot.params['id'];
    };
    ExamintroComponent.prototype.startExam = function () {
        this.router.navigate(['examboard/mainpage', this.name]);
    };
    ExamintroComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-examintro',
            template: __webpack_require__("./src/app/components/examboard/examintro/examintro.component.html"),
            styles: [__webpack_require__("./src/app/components/examboard/examintro/examintro.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], ExamintroComponent);
    return ExamintroComponent;
}());



/***/ }),

/***/ "./src/app/components/examboard/examresult/examresult.component.css":
/***/ (function(module, exports) {

module.exports = ".statusbox{\r\n    display:-webkit-box;\r\n    display:-ms-flexbox;\r\n    display:flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-flow: row wrap;\r\n            flex-flow: row wrap;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -ms-flex-pack: distribute;\r\n        justify-content: space-around;\r\n}"

/***/ }),

/***/ "./src/app/components/examboard/examresult/examresult.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"result-body container-fluid\">\n  <!-- ===========(header)===========-->\n  <div class=\"heading\">\n      <div class=\"jumbotron\">\n          <h1 class=\"display-9\">Score Result!</h1>\n          <p class=\"lead\">These are the scores you get on this exam.</p>\n          <hr class=\"my-4\">\n             \n          <div class=\"statusbox\">\n              <div class=\"card text-white bg-primary mb-3\" style=\"max-width: 20rem;\">\n                  <div class=\"card-header\">Aptitute</div>\n                  <div class=\"card-body\">\n                    <h4 class=\"card-title\">Score : {{aptiOb}} / {{aptiTmark}}</h4>\n                    <p>Percentage. {{aptiP}} %</p>\n                  </div>\n                </div>\n                <div class=\"card text-white bg-primary mb-3\" style=\"max-width: 20rem;\">\n                  <div class=\"card-header\">Resoning</div>\n                  <div class=\"card-body\">\n                      <h4 class=\"card-title\">Score : {{resOb}} / {{resTmark}}</h4>\n                      <p>Percentage. {{resP}} %</p>\n                  </div>\n                </div>\n                <div class=\"card text-white bg-primary mb-3\" style=\"max-width: 20rem;\">\n                  <div class=\"card-header\">English</div>\n                  <div class=\"card-body\">\n                      <h4 class=\"card-title\">Score : {{engOb}} / {{engTmark}}</h4>\n                      <p>Percentage. {{EngP}} %</p>\n                  </div>\n                </div>\n                <div class=\"card text-white bg-primary mb-3\" style=\"max-width: 20rem;\">\n                  <div class=\"card-header\">Genral awareness</div>\n                  <div class=\"card-body\">\n                      <h4 class=\"card-title\">Score : {{genOb}} / {{genTmark}}</h4>\n                      <p>Percentage. {{genP}} %</p>\n                  </div>\n                </div>\n                <div class=\"card text-white bg-primary mb-3\" style=\"max-width: 20rem;\">\n                  <div class=\"card-header\">Computer</div>\n                  <div class=\"card-body\">\n                      <h4 class=\"card-title\">Score : {{compOb}} / {{compTmark}}</h4>\n                      <p>Percentage. {{compP}} %</p>\n                  </div>\n                </div>\n                <div class=\"card text-white bg-success mb-3\" style=\"max-width: 20rem;\">\n                  <div class=\"card-header\">Total</div>\n                  <div class=\"card-body\">\n                      <h4 class=\"card-title\">Score : {{TotalMarksOb}} / {{TotalMarks}}</h4>\n                      <p>Percentage. {{TotalPercentage}} %</p>\n                  </div>\n                </div>\n                \n          </div>\n          <hr class=\"my-4\">\n          <div class=\"center\">\n              <button type=\"button\" class=\"btn btn-secondary center\" (click)=\"goHome()\">GoHome</button>\n          </div>\n             \n        </div>\n  </div>\n  <!-- ===========(header)===========-->\n\n \n\n</div>"

/***/ }),

/***/ "./src/app/components/examboard/examresult/examresult.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExamresultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_result_service__ = __webpack_require__("./src/app/services/result.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ExamresultComponent = /** @class */ (function () {
    function ExamresultComponent(rs, router) {
        this.rs = rs;
        this.router = router;
        //total marks
        this.aptiTmark = 0;
        this.resTmark = 0;
        this.engTmark = 0;
        this.genTmark = 0;
        this.compTmark = 0;
        //obtain marks
        this.aptiOb = 0;
        this.resOb = 0;
        this.engOb = 0;
        this.genOb = 0;
        this.compOb = 0;
        //percantage
        this.aptiP = '0.0';
        this.resP = '0.0';
        this.EngP = '0.0';
        this.genP = '0.0';
        this.compP = '0.0';
        //total
        this.TotalMarks = 0;
        this.TotalMarksOb = 0;
        this.TotalPercentage = 0.0;
    }
    ExamresultComponent.prototype.ngOnInit = function () {
        this.populateTotalCatMarks();
        this.setAptiObtainMArk(this.rs.selectedA, this.rs.aptituteAns);
        this.setRObtainMarks(this.rs.selectedR, this.rs.resoningAns);
        this.setEObtainMarks(this.rs.selectedE, this.rs.englisgAns);
        this.setGObtainMarks(this.rs.selectedG, this.rs.genralAns);
        this.setCObtainMarks(this.rs.selectedC, this.rs.computerAns);
        this.calculatePercantage();
        this.setTotalValue();
    };
    ExamresultComponent.prototype.populateTotalCatMarks = function () {
        this.aptiTmark = this.rs.aptituteAns.length;
        this.resTmark = this.rs.resoningAns.length;
        this.engTmark = this.rs.englisgAns.length;
        this.genTmark = this.rs.genralAns.length;
        this.compTmark = this.rs.computerAns.length;
    };
    ExamresultComponent.prototype.calculatePercantage = function () {
        this.aptiP = ((this.aptiOb / this.aptiTmark) * 100).toFixed(2);
        this.resP = ((this.resOb / this.resTmark) * 100).toFixed(2);
        this.EngP = ((this.engOb / this.engTmark) * 100).toFixed(2);
        this.genP = ((this.genOb / this.genTmark) * 100).toFixed(2);
        this.compP = ((this.compOb / this.compTmark) * 100).toFixed(2);
    };
    ExamresultComponent.prototype.setAptiObtainMArk = function (option, ans) {
        for (var i = 0; i < option.length; i++) {
            if (parseInt(option[i].opt) == ans[option[i].no - 1]) {
                this.aptiOb = this.aptiOb + 1;
            }
        }
        ;
    };
    ExamresultComponent.prototype.setRObtainMarks = function (option, ans) {
        for (var i = 0; i < option.length; i++) {
            if (parseInt(option[i].opt) == ans[option[i].no - 1]) {
                this.resOb = this.resOb + 1;
            }
        }
        ;
    };
    ExamresultComponent.prototype.setEObtainMarks = function (option, ans) {
        for (var i = 0; i < option.length; i++) {
            if (parseInt(option[i].opt) == ans[option[i].no - 1]) {
                this.engOb = this.engOb + 1;
            }
        }
        ;
    };
    ExamresultComponent.prototype.setGObtainMarks = function (option, ans) {
        for (var i = 0; i < option.length; i++) {
            if (parseInt(option[i].opt) == ans[option[i].no - 1]) {
                this.genOb = this.genOb + 1;
            }
        }
        ;
    };
    ExamresultComponent.prototype.setCObtainMarks = function (option, ans) {
        for (var i = 0; i < option.length; i++) {
            if (parseInt(option[i].opt) == ans[option[i].no - 1]) {
                this.compOb = this.compOb + 1;
            }
        }
        ;
    };
    ExamresultComponent.prototype.setTotalValue = function () {
        this.TotalMarksOb = (this.aptiOb + this.engOb + this.resOb + this.genOb + this.compOb);
        this.TotalMarks = (this.aptiTmark + this.resTmark + this.engTmark + this.genTmark + this.compTmark);
        this.TotalPercentage = (this.TotalMarksOb / this.TotalMarks) * 100;
    };
    ExamresultComponent.prototype.goHome = function () {
        this.rs.clearAll();
        this.router.navigate(['/uhome']);
    };
    ExamresultComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-examresult',
            template: __webpack_require__("./src/app/components/examboard/examresult/examresult.component.html"),
            styles: [__webpack_require__("./src/app/components/examboard/examresult/examresult.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_result_service__["a" /* ResultService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], ExamresultComponent);
    return ExamresultComponent;
}());



/***/ }),

/***/ "./src/app/components/faq/faq.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/faq/faq.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  faq works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/faq/faq.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FaqComponent = /** @class */ (function () {
    function FaqComponent() {
    }
    FaqComponent.prototype.ngOnInit = function () {
    };
    FaqComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-faq',
            template: __webpack_require__("./src/app/components/faq/faq.component.html"),
            styles: [__webpack_require__("./src/app/components/faq/faq.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FaqComponent);
    return FaqComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = "footer.page-footer {\r\n   \r\n    height:10%;\r\n    padding:10px;\r\n}"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = " <!--Footer-->\n <footer class=\"page-footer blue \">\n\n  <!--Copyright-->\n  <div class=\"\">\n      <div class=\"container center\">\n          © 2018 Copyright:\n          <a href=\"https://www.MDBootstrap.com\">o-examination.com </a>\n\n      </div>\n  </div>\n  <!--/.Copyright-->\n\n</footer>\n<!--/.Footer-->"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/fpassword/fpassword.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/fpassword/fpassword.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  fpassword works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/fpassword/fpassword.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FpasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FpasswordComponent = /** @class */ (function () {
    function FpasswordComponent() {
    }
    FpasswordComponent.prototype.ngOnInit = function () {
    };
    FpasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-fpassword',
            template: __webpack_require__("./src/app/components/fpassword/fpassword.component.html"),
            styles: [__webpack_require__("./src/app/components/fpassword/fpassword.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FpasswordComponent);
    return FpasswordComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".view2{\r\n      background-size: cover;\r\n      min-height: 90vh;\r\n      opacity:0.9;\r\n    }\r\n    .full-bg-img {\r\n        color: #fff;\r\n    }\r\n    .home{\r\n     display:-ms-grid;\r\n     display:grid;\r\n     margin-top:5vh;\r\n\r\n }\r\n    .home>li{\r\n     list-style: none;\r\n }\r\n    .features-section{\r\n    padding:10px;\r\n    border-top:1px solid #222;\r\n    border-bottom:1px solid #0bf;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n }\r\n    .stitle{\r\n     text-align: center;\r\n     font-weight: bold;\r\n     text-decoration: underline;\r\n }\r\n    .features{\r\n     background: #fff;\r\n     padding:30px;\r\n     display:-ms-grid;\r\n     display:grid;\r\n     -ms-grid-columns: 1fr 1fr 1fr 1fr;\r\n         grid-template-columns: 1fr 1fr 1fr 1fr;\r\n }\r\n    .features>div{\r\n     margin:10px;\r\n }\r\n    .services{\r\n     padding:10px;\r\n }\r\n    .services-card{\r\n    display:-ms-grid;\r\n    display:grid;\r\n    -ms-grid-columns: 1fr 1fr;\r\n        grid-template-columns: 1fr 1fr;\r\n    grid-row-gap: 2rem;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    padding:30px;\r\n    height:400px;\r\n }\r\n    .simg{\r\n    width:500px;\r\n    height:250px;\r\n    padding:5px;\r\n    border-radius: 10px;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n    \r\n }"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n<app-navbar></app-navbar>\n<!--Mask-->\n<div class=\"view2 hm-black-light\">\n  <div class=\"full-bg-img flex-center container\">\n      <ul class=\"home\">\n          <li>\n              <h1 class=\"display-4 mb-5 mt-5 pt-5 wow fadeInUp title\">\n                  <strong>Welcome to Online Examination portal</strong>\n              </h1>\n              <p>Learn and practice more for competative Exams...</p>\n          </li>\n          <li>\n            <a href=\"\" class=\"btn btn-primary btn-rounded mb-4 waves-light\" data-toggle=\"modal\" data-target=\"#modalLoginForm\" mdbRippleRadius>Login</a>\n            <a href=\"\" class=\"btn btn-success btn-rounded mb-4 waves-light\" data-toggle=\"modal\" data-target=\"#modalRegisterForm\" mdbRippleRadius>Register </a>\n          </li>                  \n          </ul>   \n  </div>\n</div>\n\n<!-- sections -->\n<section class=\"features-section\">\n  <h1 class=\"stitle\">Features</h1>\n    <div class=\"features\">                         \n    <!--Card--> <div class=\"card\">\n        <!--Card image-->\n        <div class=\"view overlay\">\n          <img src=\"http://www.bau.edu.lb/contentphotos/photos/tutorial_104603.jpg\" class=\"img-fluid\" alt=\"sample\">\n          <a><div class=\"mask rgba-white-slight\"></div></a>\n        </div>\n        <!--/.Card image-->\n        <!--Card content-->\n        <div class=\"card-body\">\n          <!--Title-->\n          <h4 class=\"card-title\">Learning</h4>\n          <hr>\n          <!--Text-->\n          <p class=\"font-small grey-dark-text mb-0\">We are providing tutorials to get start and revise the topics and made yourself perfect to attain the exam.</p><a href=\"#\">Read more....</a>\n        </div>\n        <!--/.Card content-->\n      </div> <!--/.Card-->\n\n      <!--Card--> <div class=\"card\">\n        <!--Card image-->\n        <div class=\"view overlay\">\n            <img src=\"http://adjunctassistance.com/wp-content/uploads/2010/05/Questions.png\" class=\"img-fluid\" alt=\"sample\">\n            <a><div class=\"mask rgba-white-slight\"></div></a>\n          </div>\n          <!--/.Card image-->\n          <!--Card content-->\n          <div class=\"card-body\">\n            <!--Title-->\n            <h4 class=\"card-title\">Qestions</h4>\n            <hr>\n            <!--Text-->\n            <p class=\"font-small grey-dark-text mb-0\">Some quick example text to build on the card title and make up the bulk of the card's content.</p><a href=\"#\">Read more....</a>\n          </div>\n          <!--/.Card content-->\n        </div> <!--/.Card-->\n\n        <!--Card--> <div class=\"card\">\n        <!--Card image-->\n        <div class=\"view overlay\">\n            <img src=\"http://www.edujunction.in/wp-content/uploads/2015/12/Engineering-Entrance-Exam-2016-Alerts.jpg\" class=\"img-fluid\" alt=\"sample\">\n            <a><div class=\"mask rgba-white-slight\"></div></a>\n          </div>\n          <!--/.Card image-->\n          <!--Card content-->\n          <div class=\"card-body\">\n            <!--Title-->\n            <h4 class=\"card-title\">Exam Alert</h4>\n            <hr>\n            <!--Text-->\n            <p class=\"font-small grey-dark-text mb-0\">Some quick example text to build on the card title and make up the bulk of the card's content.</p><a href=\"#\">Read more....</a>\n          </div>\n          <!--/.Card content-->\n        </div> <!--/.Card-->\n\n        <!--Card--> <div class=\"card\">\n        <!--Card image-->\n        <div class=\"view overlay\">\n            <img src=\"https://thumbs.dreamstime.com/b/growth-graph-chart-29230391.jpg\" class=\"img-fluid\" alt=\"sample\">\n            <a><div class=\"mask rgba-white-slight\"></div></a>\n          </div>\n          <!--/.Card image-->\n          <!--Card content-->\n          <div class=\"card-body\">\n            <!--Title-->\n            <h4 class=\"card-title\">Performance</h4>\n            <hr>\n            <!--Text-->\n            <p class=\"font-small grey-dark-text mb-0\">We track the students tests and results on that basis we calculate performance and statistics of student to provide better guide.</p><a href=\"#\">Read more....</a>\n          </div>\n          <!--/.Card content-->\n        </div> <!--/.Card-->\n      </div>                         \n</section>\n\n<section class=\"features-section\">\n    <h1 class=\"stitle\">Services</h1>\n      <div class=\"services\">                         \n     \n          <!--Card--> <div class=\"services-card\">\n          <!--Card image-->\n          <div class=\"view overlay\">\n              <img src=\"../../assets/images/lpage.jpg\" class=\"simg z-depth-1\" alt=\"sample\">\n              <a><div class=\"mask rgba-white-slight\"></div></a>\n            </div>\n            <!--/.Card image-->\n            <!--Card content-->\n            <div class=\"card-body\">\n              <!--Title-->\n              <h4 class=\"card-title\">Card title</h4>\n              <hr>\n              <!--Text-->\n              <p class=\"font-small grey-dark-text mb-0\">Some quick example text to build on the card title and make up the bulk of the card's content.</p><a href=\"#\">Read more....</a>\n            </div>\n            <!--/.Card content-->\n          </div> <!--/.Card-->\n\n           <!--Card--> <div class=\"services-card\">\n              <!--Card content-->\n            <div class=\"card-body\">\n                <!--Title-->\n                <h4 class=\"card-title\">Card title</h4>\n                <hr>\n                <!--Text-->\n                <p class=\"font-small grey-dark-text mb-0\">Some quick example text to build on the card title and make up the bulk of the card's content.</p><a href=\"#\">Read more....</a>\n              </div>\n              <!--/.Card content-->\n          <!--Card image-->\n          <div class=\"view overlay\">\n              <img src=\"http://www.theexamsoffice.org/userfiles/images/Exams%20Training%20logo%20JPEG.jpg\" class=\"simg z-depth-1\" alt=\"sample\">\n              <a><div class=\"mask rgba-white-slight\"></div></a>\n            </div>\n            <!--/.Card image-->\n          </div> <!--/.Card-->\n\n           <!--Card--> <div class=\"services-card\">\n          <!--Card image-->\n          <div class=\"view overlay\">\n              <img src=\"https://mdbootstrap.com/img/Photos/Others/food.jpg\" class=\"simg z-depth-1\" alt=\"sample\">\n              <a><div class=\"mask rgba-white-slight\"></div></a>\n            </div>\n            <!--/.Card image-->\n            <!--Card content-->\n            <div class=\"card-body\">\n              <!--Title-->\n              <h4 class=\"card-title\">Card title</h4>\n              <hr>\n              <!--Text-->\n              <p class=\"font-small grey-dark-text mb-0\">Some quick example text to build on the card title and make up the bulk of the card's content.</p><a href=\"#\">Read more....</a>\n            </div>\n            <!--/.Card content-->\n          </div> <!--/.Card-->\n\n\n        </div>                         \n  </section>\n\n  <section class=\"features-section\">\n      <h1 class=\"stitle\">Developers</h1>\n        <div class=\"features\">                         \n            <div class=\"card testimonial-card\">\n                <!--Avatar-->\n                <div class=\"avatar mx-auto white\"><img src=\"../../assets/images/pic.png\" class=\"rounded-circle\" width=\"100\" height=\"100\">\n                </div>\n        \n                <div class=\"card-body\">\n                    <!--Name-->\n                    <h4 class=\"card-title mx-auto\">Anna Doe</h4>\n                    <hr>\n                    <!--Quotation-->\n                    <p><i class=\"fa fa-quote-left\"></i> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, adipisci</p>\n                </div>\n            </div>\n            <!--/.Card-->\n    \n          <div class=\"card testimonial-card\">\n              <!--Avatar-->\n              <div class=\"avatar mx-auto white\"><img src=\"../../assets/images/pic.png\" class=\"rounded-circle\" width=\"100\" height=\"100\">\n              </div>\n      \n              <div class=\"card-body\">\n                  <!--Name-->\n                  <h4 class=\"card-title mx-auto\">Anna Doe</h4>\n                  <hr>\n                  <!--Quotation-->\n                  <p><i class=\"fa fa-quote-left\"></i> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, adipisci</p>\n              </div>\n          </div>\n          <!--/.Card-->\n    \n            <div class=\"card testimonial-card\">\n                <!--Avatar-->\n                <div class=\"avatar mx-auto white\"><img src=\"../../assets/images/pic.png\" class=\"rounded-circle\" width=\"100\" height=\"100\">\n                </div>\n        \n                <div class=\"card-body\">\n                    <!--Name-->\n                    <h4 class=\"card-title mx-auto\">Anna Doe</h4>\n                    <hr>\n                    <!--Quotation-->\n                    <p><i class=\"fa fa-quote-left\"></i> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, adipisci</p>\n                </div>\n            </div>\n            <!--/.Card-->\n    \n           <!--Card-->\n    <div class=\"card testimonial-card\">\n        <!--Avatar-->\n        <div class=\"avatar mx-auto white\"><img src=\"../../assets/images/pic.png\"class=\"rounded-circle\" width=\"100\" height=\"100\">\n        </div>\n\n        <div class=\"card-body\">\n            <!--Name-->\n            <h4 class=\"card-title mx-auto\">Anna Doe</h4>\n            <hr>\n            <!--Quotation-->\n            <p><i class=\"fa fa-quote-left\"></i> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, adipisci</p>\n        </div>\n    </div>\n    <!--/.Card-->\n  </div>                         \n</section>\n\n<!--login model-->\n<div class=\"modal fade\" id=\"modalLoginForm\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" >\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header text-center\">\n                <h4 class=\"modal-title w-100 font-weight-bold\">Sign in</h4>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\"  aria-label=\"Close\">\n                    <span aria-hidden=\"true\" >&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body mx-3\">\n\n                    <div class=\"progress\" *ngIf=\"progress\">\n                            <div class=\"indeterminate\"></div>\n                    </div>\n\n                    <div class=\"alert alert-dismissible alert-danger animated bounce\" *ngIf=\"errormsg\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" (click)=\"closeAll()\">&times;</button>\n                            {{errormsg}}\n                    </div>\n                    \n            <form (submit)=\"onLoginSubmit()\">\n                <div class=\"md-form mb-5\">\n                    <i class=\"fa fa-envelope prefix grey-text\"></i>\n                    <input type=\"email\" id=\"email\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\">\n                    <label for=\"email\">Your email</label>\n                </div>\n\n                <div class=\"md-form mb-4\">\n                    <i class=\"fa fa-lock prefix grey-text\"></i>\n                    <input type=\"password\" id=\"pass\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\n                    <label for=\"pass\">Your password</label>\n                </div>\n                <input type=\"submit\" value=\"login\" class=\"btn btn-outline-info waves-effect ml-auto\">\n                        Forgot<a href=\"/fpassword\" text-md-right> password ?</a>   \n            <div class=\"modal-footer\">\n                    <div class=\"options text-center text-md-right mt-1\">\n                       <p>Not a member? <a href=\"#\" class=\"blue-text\" data-toggle=\"modal\" data-target=\"#modalRegisterForm\" data-dismiss=\"modal\">Sign Up</a></p>\n            </div>\n          </div>\n        </form>   \n      </div>\n    </div>\n </div>\n</div>\n<!--login model-->\n\n<!--register model-->            \n<div class=\"modal fade\" id=\"modalRegisterForm\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header text-center default \">\n                <h4 class=\"modal-title w-100 font-weight-bold\">Registration Form</h4>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\" >&times;</span>\n                </button>\n            </div>\n        <form (submit)=\"onRegisterSubmit()\">\n            <div class=\"modal-body mx-3\">\n                    <div class=\"progress\" *ngIf=\"progress\">\n                            <div class=\"indeterminate\"></div>\n                    </div>\n\n                    <div class=\"alert alert-dismissible alert-success\" *ngIf=\"sucessmsg\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" (click)=\"closeAll()\">&times;</button>\n                            {{sucessmsg}}\n                    </div>\n\n                    <div class=\"alert alert-dismissible alert-danger\" *ngIf=\"errormsg\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" (click)=\"closeAll()\">&times;</button>\n                            {{errormsg}}\n                    </div>\n                <div class=\"md-form mb-5\">\n                    <i class=\"fa fa-user prefix grey-text\"></i>\n                    <input type=\"text\" id=\"Rname\" class=\"form-control\" [(ngModel)]=\"name\" name=\"name\">\n                    <label for=\"Rname\">Your name</label>\n                </div>\n                <div class=\"md-form mb-5\">\n                    <i class=\"fa fa-envelope prefix grey-text\"></i>\n                    <input type=\"email\" id=\"Remail\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\">\n                    <label for=\"Remail\">Your email</label>\n                </div>\n\n                <div class=\"md-form mb-5\">\n                    <i class=\"fa fa-lock prefix grey-text\"></i>\n                    <input type=\"password\" id=\"Rpass\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\n                    <label for=\"Rpass\">Your password</label>\n                </div>\n\n                <div class=\"md-form mb-4\">\n                    <i class=\"fa fa-exclamation-triangle prefix grey-text\"></i>\n                    <input type=\"password\" id=\"repass\" class=\"form-control\" [(ngModel)]=\"cpassword\" name=\"cpassword\">\n                    <label for=\"repass\">Re-password</label>\n                </div>\n                <input type=\"submit\" value=\"register\" class=\"btn btn-outline-info waves-effect ml-auto\">\n                      <div class=\"modal-footer\">\n                            <p>Already have an account? <a  class=\"blue-text\" data-toggle=\"modal\" data-target=\"#modalLoginForm\" data-dismiss=\"modal\">Log In</a></p>                      \n                 </div>   \n            </div>\n         </form>\n        </div>\n    </div>\n</div>\n<!--register model-->"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    // Register user 
    HomeComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        console.log("register clicked");
        this.progress = true;
        var user = {
            name: this.name,
            email: this.email,
            password: this.password,
            cpassword: this.cpassword
        };
        if (user.name == undefined && user.email == undefined && user.password == undefined) {
            this.errormsg = "Please fill all the fields";
            this.progress = false;
            return false;
        }
        if (user.password !== user.cpassword) {
            this.errormsg = "Password doesn't matched !";
            this.progress = false;
            return false;
        }
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.progress = false;
                _this.sucessmsg = data.msg;
            }
            else {
                //this.router.navigate(['/register']);
                _this.progress = false;
                _this.errormsg = data.msg;
                return;
            }
        });
    };
    //login
    HomeComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            email: this.email,
            password: this.password,
        };
        if (user.email == undefined && user.password == undefined) {
            this.errormsg = "Please fill all the fields";
            this.progress = false;
            return false;
        }
        // authenmticate user 
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.router.navigate(['/uhome']);
            }
            else {
                //this.router.navigate(['/']);
                _this.errormsg = data.msg;
                _this.progress = false;
                return false;
                ;
            }
        });
    };
    HomeComponent.prototype.closeAll = function () {
        console.log("close clicked");
        this.sucessmsg = '';
        this.errormsg = '';
        this.name = '';
        this.email = '';
        this.password = '';
        this.cpassword = '';
    };
    HomeComponent.prototype.lBox = function () {
        this.lbox = true;
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/components/home/home.component.html"),
            styles: [__webpack_require__("./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  login works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/components/login/login.component.html"),
            styles: [__webpack_require__("./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Navbar-->\n<nav class=\"navbar navbar-expand-lg navbar-dark navbar-light default-color lighten-4\" id=\"nbar\">\n<div class=\"container\">\n  <!-- Navbar brand -->\n  <a class=\"navbar-brand\" href=\"#\">O-Examination</a>\n  <!-- Collapse button -->\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#basicExampleNav\" aria-controls=\"basicExampleNav\"\n      aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <!-- Collapsible content -->\n  <div class=\"collapse navbar-collapse container\" id=\"basicExampleNav\">\n      <!-- Links -->\n      <ul class=\"navbar-nav mr-auto\">\n          <li class=\"nav-item active\">\n              <a class=\"nav-link\" href=\"/\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">Home        \n              </a>\n          </li>\n          <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/features']\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">Features</a>\n          </li>\n          <!-- Dropdown -->\n          <li class=\"nav-item dropdown\">\n              <a class=\"nav-link dropdown-toggle\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Services</a>\n              <div class=\"dropdown-menu dropdown-primary\" aria-labelledby=\"navbarDropdownMenuLink\">\n                  <a class=\"dropdown-item\" [routerLink]=\"['/tutorials']\">Tutorials</a>\n                  <a class=\"dropdown-item\" [routerLink]=\"['/questions']\">Questions</a>\n                  <a class=\"dropdown-item\" [routerLink]=\"['/exams']\">Exams</a>\n              </div>\n          </li>\n          <li class=\"nav-item\">\n                <a class=\"nav-link\" [routerLink]=\"['/contact']\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">ContactUs</a>\n          </li>\n      </ul>\n      <!-- Links -->\n      <form class=\"form-inline\">\n        <div class=\"md-form mt-0\">\n       \n        </div>\n      </form>\n  </div>\n  <!-- Collapsible content -->\n</div>\n\n</nav>\n<!--/.Navbar-->"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  register works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/components/register/register.component.html"),
            styles: [__webpack_require__("./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/services/services.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/services/services.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  services works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/services/services.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServicesComponent = /** @class */ (function () {
    function ServicesComponent() {
    }
    ServicesComponent.prototype.ngOnInit = function () {
    };
    ServicesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-services',
            template: __webpack_require__("./src/app/components/services/services.component.html"),
            styles: [__webpack_require__("./src/app/components/services/services.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "./src/app/components/testboard/intropage/intropage.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/testboard/intropage/intropage.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/testboard/intropage/intropage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntropageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IntropageComponent = /** @class */ (function () {
    function IntropageComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    IntropageComponent.prototype.ngOnInit = function () {
        this.name = this.route.snapshot.params['id'];
    };
    IntropageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-intropage',
            template: __webpack_require__("./src/app/components/testboard/intropage/intropage.component.html"),
            styles: [__webpack_require__("./src/app/components/testboard/intropage/intropage.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], IntropageComponent);
    return IntropageComponent;
}());



/***/ }),

/***/ "./src/app/components/testboard/mainpage/mainpage.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/testboard/mainpage/mainpage.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  mainpage works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/testboard/mainpage/mainpage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainpageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainpageComponent = /** @class */ (function () {
    function MainpageComponent() {
    }
    MainpageComponent.prototype.ngOnInit = function () {
    };
    MainpageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-mainpage',
            template: __webpack_require__("./src/app/components/testboard/mainpage/mainpage.component.html"),
            styles: [__webpack_require__("./src/app/components/testboard/mainpage/mainpage.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainpageComponent);
    return MainpageComponent;
}());



/***/ }),

/***/ "./src/app/components/testboard/resultpage/resultpage.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/testboard/resultpage/resultpage.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  resultpage works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/testboard/resultpage/resultpage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultpageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResultpageComponent = /** @class */ (function () {
    function ResultpageComponent() {
    }
    ResultpageComponent.prototype.ngOnInit = function () {
    };
    ResultpageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-resultpage',
            template: __webpack_require__("./src/app/components/testboard/resultpage/resultpage.component.html"),
            styles: [__webpack_require__("./src/app/components/testboard/resultpage/resultpage.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ResultpageComponent);
    return ResultpageComponent;
}());



/***/ }),

/***/ "./src/app/components/testboard/testboard.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/testboard/testboard.component.html":
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/components/testboard/testboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TestboardComponent = /** @class */ (function () {
    function TestboardComponent() {
    }
    TestboardComponent.prototype.ngOnInit = function () {
    };
    TestboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-testboard',
            template: __webpack_require__("./src/app/components/testboard/testboard.component.html"),
            styles: [__webpack_require__("./src/app/components/testboard/testboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TestboardComponent);
    return TestboardComponent;
}());



/***/ }),

/***/ "./src/app/components/uhome/exams/exams.component.css":
/***/ (function(module, exports) {

module.exports = ".tutbox{\r\n    padding:20px;\r\n    margin-top:10px;\r\n    -webkit-box-shadow: 0 0 20px 5px rgba(0,0,0,0.5);\r\n            box-shadow: 0 0 20px 5px rgba(0,0,0,0.5);\r\n    margin-bottom: 5px;\r\n    height:80vh;\r\n  }\r\n  .box{\r\n      -webkit-box-shadow: 0 0 20px 5px rgba(0,0,0,0.5);\r\n              box-shadow: 0 0 20px 5px rgba(0,0,0,0.5);\r\n      height:75vh;\r\n  }\r\n  .card-image{\r\n      width:150px !important;\r\n      height:150px !important;\r\n  }\r\n"

/***/ }),

/***/ "./src/app/components/uhome/exams/exams.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"tutbox\">      \n    <div class=\"row\">\n        <!-- First column -->\n        <div class=\"col-3\">\n            <!--Accordion wrapper-->\n       <div class=\"accordion\" id=\"accordionEx\" role=\"tablist\" aria-multiselectable=\"true\">\n       <!-- Accordion card -->\n       <div class=\"card\">\n        <!-- Card header -->\n        <div class=\"card-header\" role=\"tab\" id=\"headingOne\">\n            <a data-toggle=\"collapse\" data-parent=\"#accordionEx\" href=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n                <h5 class=\"mb-0\">\n                    Topics <i class=\"fa fa-angle-down rotate-icon\"></i>\n                </h5>\n            </a>\n        </div>\n\n        <!-- Card body -->\n        <div id=\"collapseOne\" class=\"collapse show\" role=\"tabpanel\" aria-labelledby=\"headingOne\" data-parent=\"#accordionEx\">\n            <div class=\"card-body\">\n                <div class=\"list-group\" id=\"list-tab\" role=\"tablist\">\n                    <a class=\"list-group-item list-group-item-action active hoverable\" id=\"list-home-list\" data-toggle=\"list\" href=\"#list-apti\" role=\"tab\" >\n                      Aptitute\n                    </a>\n                    <a class=\"list-group-item list-group-item-action hoverable\" id=\"list-profile-list\" data-toggle=\"list\" href=\"#list-resoning\" role=\"tab\" >Resoning</a>\n                    <a class=\"list-group-item list-group-item-action hoverable\" id=\"list-messages-list\" data-toggle=\"list\" href=\"#list-english\" role=\"tab\">English</a>\n                    <a class=\"list-group-item list-group-item-action hoverable\" id=\"list-settings-list\" data-toggle=\"list\" href=\"#list-ca\" role=\"tab\">current affairs</a>\n                  </div>\n            </div>\n        </div>\n    </div>\n    <!-- Accordion card -->\n\n    <!-- Accordion card -->\n    <div class=\"card\" >\n        <div class=\"card-header\" role=\"tab\" id=\"headingThree\">\n            <a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordionEx\" href=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapseThree\">\n                <h5 class=\"mb-0\">Exams<i class=\"fa fa-angle-down rotate-icon\"></i>\n                </h5></a>\n        </div>\n        <div id=\"collapseThree\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingThree\" data-parent=\"#accordionEx\">\n            <div class=\"card-body\">\n                <div class=\"list-group\" id=\"list-tab\" role=\"tablist\">\n                    <a class=\"list-group-item list-group-item-action hoverable\"  data-toggle=\"list\" href=\"#list-sexam\" role=\"tab\" (click)=\"getExams()\">Sample Exam</a>\n                </div>\n            </div>\n        </div>  \n    </div>\n    <!-- Accordion card -->\n    <div class=\"card\">\n        <!-- Card header -->\n        <div class=\"card-header\" role=\"tab\" id=\"headingThree\">\n            <a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordionEx\" href=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapseThree\">\n                <h5 class=\"mb-0\">\n                    Previous year exams <i class=\"fa fa-angle-down rotate-icon\"></i>\n                </h5>\n            </a>\n        </div>\n        <!-- Card body -->\n        <div id=\"collapseThree\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingThree\" data-parent=\"#accordionEx\">\n            <div class=\"card-body\">\n                <div class=\"list-group\" id=\"list-tab\" role=\"tablist\">\n                    <a class=\"list-group-item list-group-item-action hoverable\" id=\"list-home-list\" data-toggle=\"list\" href=\"#list-clerk\" role=\"tab\" aria-controls=\"home\">SSC CLERK</a>\n\n                    <a class=\"list-group-item list-group-item-action hoverable\" id=\"list-profile-list\" data-toggle=\"list\" href=\"#list-chsl\" role=\"tab\">SSC CHSL</a>\n\n                    <a class=\"list-group-item list-group-item-action hoverable\" id=\"list-messages-list\" data-toggle=\"list\" href=\"#list-cgl\" role=\"tab\" >SSC CGL</a>\n\n                    <a class=\"list-group-item list-group-item-action hoverable\" id=\"list-settings-list\" data-toggle=\"list\" href=\"#list-po\" role=\"tab\" >SBI PO</a>\n                  </div>\n            </div>\n          </div>\n        </div><!-- Accordion card -->\n    </div>\n<!--/.Accordion wrapper-->\n</div><!-- First column -->\n        \n<!-- \\=========================================================================================\\ -->        \n        <!-- Second column -->\n        <div class=\"col-9\">\n          <!-- Content -->\n          <div class=\"tab-content\" id=\"nav-tabContent\">\n            <div class=\"tab-pane fade show active \" id=\"list-apti\" role=\"tabpanel\" aria-labelledby=\"list-home-list\">\n                <div class=\"card text-center box scroll\" role=\"scroll\">\n                    <div class=\"card-header success-color white-text fixed\">\n                        Aptitute\n                    </div>\n                    <div class=\"card-body topic-box\">\n                        <!-- Card -->\n                   <div class=\"card card-image\" style=\"background-image: url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg);\">\n                  <!-- Content -->\n                     <div class=\"text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4\">\n                    <div>\n                       <h5 class=\"pink-text\"><i class=\"fa fa-graduation-cap\"></i> Aptitute</h5>\n                      <p>test paper</p>\n                      <a class=\"btn btn-pink btn-sm\">Learn</a>\n                    </div>\n                  </div>\n               </div>\n           </div>\n        </div>\n    </div>\n\n            <!--resoning-->\n            <div class=\"tab-pane fade\" id=\"list-resoning\" role=\"tabpanel\" aria-labelledby=\"list-profile-list\">\n              \n              <div class=\"card text-center box scroll\" role=\"scroll\">\n                  <div class=\"card-header success-color white-text fixed\">\n                      Resoning\n                  </div>\n                  <div class=\"card-body topic-box\">\n                      <!-- Card -->\n                 <div class=\"card card-image\" style=\"background-image: url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg);\">\n                <!-- Content -->\n                   <div class=\"text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4\">\n                  <div>\n                     <h5 class=\"pink-text\"><i class=\"fa fa-graduation-cap\"></i> Resoning</h5>\n                    <p>test paper</p>\n                    <a class=\"btn btn-pink btn-sm\">Learn</a>\n                  </div>\n                </div>\n             </div>\n           </div>\n          </div>\n            </div> <!--resoning-->\n               <!--English-->\n            <div class=\"tab-pane fade\" id=\"list-english\" role=\"tabpanel\" aria-labelledby=\"list-messages-list\">\n             \n              <div class=\"card text-center box scroll \" role=\"scroll\">\n                  <div class=\"card-header success-color white-text fixed\">\n                      English\n                  </div>\n               <div class=\"flex-container\">  \n                  <div class=\"card-body topic-box\" *ngFor=\"let topic of englishTopics\">\n                      <!-- Card -->\n                 <div class=\"card card-image\" style=\"background-image: url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg);\">\n                <!-- Content -->\n                   <div class=\"text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4\">\n                  <div>\n                     <h5 class=\"pink-text\"><i class=\"fa fa-graduation-cap\"></i>{{topic.topic}}</h5>\n                    <!--- <p>{{topic.link}}</p>  data-toggle=\"modal\" data-target=\"#tutbox\" -->\n                    <a class=\"btn btn-pink btn-sm\"  href=\"http://docs.google.com/gview?url={{topic.link}}&embedded=true\" target=\"_blank\">Learn</a>\n                  </div>\n                </div>\n             </div>\n           </div>\n        </div> <!--flex container -->\n\n      </div>\n            </div> <!--English-->\n            <!--current affairs-->\n            <div class=\"tab-pane fade\" id=\"list-ca\" role=\"tabpanel\" aria-labelledby=\"list-settings-list\">\n              <div class=\"card text-center box scroll\" role=\"scroll\">\n                  <div class=\"card-header success-color white-text fixed\">\n                      current affairs\n                  </div>\n                  <div class=\"card-body topic-box\">\n                    <!-- Card -->\n                     <div class=\"card card-image\" style=\"background-image: url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg);\">\n                    <!-- Content -->\n                       <div class=\"text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4\">\n                      <div>\n                         <h5 class=\"pink-text\"><i class=\"fa fa-graduation-cap\"></i> current affairs</h5>\n                        <p>test paper</p>\n                        <a class=\"btn btn-pink btn-sm\">Learn</a>\n                      </div>\n                    </div>\n                 </div>\n               </div>\n              </div>\n            </div><!--current affairs-->\n\n             <!--clerk-->\n          <div class=\"tab-pane fade\" id=\"list-clerk\" role=\"tabpanel\" > \n              <div class=\"card text-center box scroll\" role=\"scroll\">\n                  <div class=\"card-header success-color white-text fixed\">\n                     SSC Clerk Previous Year Questions\n                  </div>\n                  <div class=\"card-body topic-box\">\n                <!-- Card -->\n                 <div class=\"card card-image\" style=\"background-image: url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg);\">\n                <!-- Content -->\n                   <div class=\"text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4\">\n                  <div>\n                     <p></p>\n                     <h5 class=\"pink-text\"><i class=\"fa fa-graduation-cap\"></i>SSC Clerk(2015)</h5>               \n                     <a class=\"btn btn-pink btn-sm\">Start Test</a>\n                  </div>\n                </div>\n             </div>\n         </div>\n              </div>\n            </div> <!--clerk-->\n\n            <!--chsl-->\n            <div class=\"tab-pane fade\" id=\"list-chsl\" role=\"tabpanel\" aria-labelledby=\"list-messages-list\">\n             \n                <div class=\"card text-center box scroll\" role=\"scroll\">\n                    <div class=\"card-header success-color white-text fixed\">\n                        SSC CHSL Previous Year Questions\n                    </div>\n                    <div class=\"card-body topic-box\">\n                        <!-- Card -->\n                   <div class=\"card card-image\" style=\"background-image: url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg);\">\n                  <!-- Content -->\n                     <div class=\"text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4\">\n                    <div>\n                      <p></p>\n                       <h5 class=\"pink-text\"><i class=\"fa fa-graduation-cap\"></i>SSC CHSL(2012)</h5>                   \n                      <a class=\"btn btn-pink btn-sm\">Start Test</a>\n                    </div>\n                  </div>\n               </div>\n           </div>\n                </div>\n              </div> <!--CHSL-->\n\n              <!--CGL-->\n            <div class=\"tab-pane fade\" id=\"list-cgl\" role=\"tabpanel\" aria-labelledby=\"list-messages-list\">\n             \n                <div class=\"card text-center box scroll\" role=\"scroll\">\n                    <div class=\"card-header success-color white-text fixed\">\n                        SSC CGL Previous Year Questions\n                    </div>\n                    <div class=\"card-body topic-box\">\n                        <!-- Card -->\n                   <div class=\"card card-image\" style=\"background-image: url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg);\">\n                  <!-- Content -->\n                     <div class=\"text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4\">\n                    <div>\n                      <p></p>\n                       <h5 class=\"pink-text\"><i class=\"fa fa-graduation-cap\"></i>SSC CGL (2010)</h5>                   \n                      <a class=\"btn btn-pink btn-sm\">Start Test</a>\n                    </div>\n                  </div>\n               </div>\n           </div>\n                </div>\n              </div> <!--CGL-->\n\n              <!--SBI PO-->\n            <div class=\"tab-pane fade\" id=\"list-po\" role=\"tabpanel\" aria-labelledby=\"list-messages-list\">\n             \n                <div class=\"card text-center box scroll\" role=\"scroll\">\n                    <div class=\"card-header success-color white-text fixed\">\n                        SBI PO Previous Year Questions\n                    </div>\n                    <div class=\"card-body topic-box\">\n                        <!-- Card -->\n                   <div class=\"card card-image\" style=\"background-image: url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg);\">\n                  <!-- Content -->\n                     <div class=\"text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4\">\n                    <div>\n                      <p></p>\n                       <h5 class=\"pink-text\"><i class=\"fa fa-graduation-cap\"></i>SBI PO (2012)</h5>\n                       <a class=\"btn btn-pink btn-sm\">Start Test</a>\n                    </div>\n                  </div>\n               </div>\n             </div>\n             </div>\n          </div> <!--SBI PO-->\n\n\n              <!--SAMPLE EXAM-->\n              <div class=\"tab-pane fade\" id=\"list-sexam\" role=\"tabpanel\" aria-labelledby=\"list-messages-list\">\n             \n                  <div class=\"card text-center box scroll\" role=\"scroll\">\n                      <div class=\"card-header success-color white-text fixed\">\n                          Sample Exam For Practice\n                      </div>\n                      <div class=\"flex-container\"> \n                      <div class=\"card-body topic-box\" *ngFor=\"let exam of exams\">\n                          <!-- Card -->\n                     <div class=\"card card-image\" style=\"background-image: url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg);\">\n                    <!-- Content -->\n                       <div class=\"text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4\">\n                       <div>\n                         <h5 class=\"pink-text\"><i class=\"fa fa-graduation-cap\"></i>{{exam.examname}}</h5>\n                         <a class=\"btn btn-pink btn-sm\" (click)=\"startExam(exam.examname)\">Start Test</a>\n                      </div>\n                    </div>\n                  </div>\n               </div>\n            </div>\n            </div>\n            </div> <!--SAMPLE EXAM-->\n          </div> \n\n         \n          <!-- Content -->\n        </div>\n        <!-- Second column --> \n      </div>\n         \n\n<!--Modal: modalYT-->\n<div class=\"modal fade\" id=\"tutbox\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\" *ngIf=\"tutenable\">\n    <div class=\"modal-dialog modal-lg fullmodel\" role=\"document\" >\n        <!--Content-->\n        <div class=\"modal-content\">\n         <!--Body-->\n            <div class=\"modal-body mb-0 p-0\">\n                <label></label>\n                    <button type=\"button\" class=\"close right\" data-dismiss=\"modal\" (click)=\"closeTutBox()\" aria-label=\"Close\" title=\"close\">\n                            <span aria-hidden=\"true\" >&times;</span>\n                        </button>\n                <div class=\"embed-responsive embed-responsive-16by9 z-depth-1-half\">\n                    <iframe class=\"embed-responsive-item\" type=\"application/pdf\" [src]=\"tutlink\" allowfullscreen ></iframe>\n                </div>\n            </div>\n        </div>\n        <!--/.Content-->\n    </div>\n</div>\n<!--Modal: modalYT-->\n                              \n\n</div>"

/***/ }),

/***/ "./src/app/components/uhome/exams/exams.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExamsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_exam_service__ = __webpack_require__("./src/app/services/exam.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ExamsComponent = /** @class */ (function () {
    function ExamsComponent(route, es) {
        this.route = route;
        this.es = es;
        this.tutenable = false;
        this.google = "http://docs.google.com/gview?url=";
        this.embed = "&embedded=true";
        //======================(DATAS)=========================//
        this.exams = [];
        this.nativeWindow = es.getNativeWindow();
    }
    ExamsComponent.prototype.ngOnInit = function () {
    };
    ExamsComponent.prototype.getEnglishtopics = function () {
    };
    ExamsComponent.prototype.opentutbox = function (value, tbox) {
    };
    //==================(Getting Exams Data)========================//
    ExamsComponent.prototype.getExams = function () {
        var _this = this;
        this.es.getExams().subscribe(function (data) {
            if (data.success) {
                _this.exams = data.data;
            }
            else {
                _this.exams = [''];
            }
        });
    };
    ExamsComponent.prototype.startExam = function (value) {
        //console.log("examname = "+value);
        //this.route.navigate(['/testboard',value]);
    };
    //==================(Getting Exams Data)========================//
    ExamsComponent.prototype.closeTutBox = function () {
        this.tutenable = false;
    };
    ExamsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-exams',
            template: __webpack_require__("./src/app/components/uhome/exams/exams.component.html"),
            styles: [__webpack_require__("./src/app/components/uhome/exams/exams.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__services_exam_service__["a" /* ExamService */]])
    ], ExamsComponent);
    return ExamsComponent;
}());



/***/ }),

/***/ "./src/app/components/uhome/questions/questions.component.css":
/***/ (function(module, exports) {

module.exports = ".tutbox{\r\n    padding:20px;\r\n    margin-top:10px;\r\n    -webkit-box-shadow: 0 0 20px 5px rgba(0,0,0,0.5);\r\n            box-shadow: 0 0 20px 5px rgba(0,0,0,0.5);\r\n    margin-bottom: 5px;\r\n    height:80vh;\r\n  }\r\n  .box{\r\n      -webkit-box-shadow: 0 0 20px 5px rgba(0,0,0,0.5);\r\n              box-shadow: 0 0 20px 5px rgba(0,0,0,0.5);\r\n      height:75vh;\r\n  }\r\n  .scroll{\r\n      overflow-y: scroll;\r\n     \r\n  }\r\n  .scroll::-webkit-scrollbar {\r\n      width: 1em;\r\n  }\r\n  .scroll::-webkit-scrollbar-track {\r\n      -webkit-box-shadow: inset 0 0 2px rgba(0,0,0,0.3);\r\n  }\r\n  .scroll::-webkit-scrollbar-thumb {\r\n      background-color: darkgrey;\r\n      outline: 1px solid #222;\r\n    }\r\n  .topic-box{\r\n      \r\n     display:-ms-grid;\r\n      \r\n     display:grid;\r\n     -ms-grid-columns: 1fr 1fr 1fr;\r\n         grid-template-columns: 1fr 1fr 1fr;\r\n     \r\n  }\r\n  .card-image{\r\n      width:160px !important;\r\n      height:150px !important;\r\n  }"

/***/ }),

/***/ "./src/app/components/uhome/questions/questions.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\" tutbox\">           \n    <div class=\"row\">\n        <!-- First column -->\n        <div class=\"col-3\">\n          <!-- Navigation -->\n          <div class=\"list-group\" id=\"list-tab\" role=\"tablist\">\n            <a class=\"list-group-item  info-color center \">QUESTION PAPERS</a>\n            <a class=\"list-group-item list-group-item-action active hoverable\" id=\"list-home-list\" data-toggle=\"list\" href=\"#list-apti\" role=\"tab\" aria-controls=\"home\">Aptitute</a>\n            <a class=\"list-group-item list-group-item-action hoverable\" id=\"list-profile-list\" data-toggle=\"list\" href=\"#list-resoning\" role=\"tab\" aria-controls=\"profile\">Resoning</a>\n            <a class=\"list-group-item list-group-item-action hoverable\" id=\"list-messages-list\" data-toggle=\"list\" href=\"#list-english\" role=\"tab\" aria-controls=\"messages\" >English</a>\n            <a class=\"list-group-item list-group-item-action hoverable\" id=\"list-settings-list\" data-toggle=\"list\" href=\"#list-ca\" role=\"tab\" aria-controls=\"settings\">current affairs</a>\n            <a class=\"list-group-item list-group-item-action hoverable\" id=\"list-settings-list\" data-toggle=\"list\" href=\"#list-py\" role=\"tab\" aria-controls=\"settings\">Previous year</a>\n          </div>\n          <!-- Navigation -->\n        </div>\n        <!-- First column -->\n\n        <!-- Second column -->\n        <div class=\"col-9\">\n          <!-- Content -->\n          <div class=\"tab-content\" id=\"nav-tabContent\">\n            <div class=\"tab-pane fade show active \" id=\"list-apti\" role=\"tabpanel\" aria-labelledby=\"list-home-list\">\n                <div class=\"card text-center box scroll\" role=\"scroll\">\n                    <div class=\"card-header success-color white-text fixed\">\n                        Aptitute\n                    </div>\n                    <div class=\"card-body topic-box\">\n                        <!-- Card -->\n                   <div class=\"card card-image\" style=\"background-image: url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg);\">\n                  <!-- Content -->\n                     <div class=\"text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4\">\n                    <div>\n                       <h5 class=\"pink-text\"><i class=\"fa fa-graduation-cap\"></i> Aptitute</h5>\n                      <p>test paper</p>\n                      <a class=\"btn btn-pink btn-sm\">Download</a>\n                    </div>\n                  </div>\n               </div>\n           </div>\n        </div>\n    </div>\n            <!--resoning-->\n            <div class=\"tab-pane fade\" id=\"list-resoning\" role=\"tabpanel\" aria-labelledby=\"list-profile-list\">\n              \n              <div class=\"card text-center box scroll\" role=\"scroll\">\n                  <div class=\"card-header success-color white-text fixed\">\n                      Resoning\n                  </div>\n                  <div class=\"card-body topic-box\">\n                      <!-- Card -->\n                 <div class=\"card card-image\" style=\"background-image: url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg);\">\n                <!-- Content -->\n                   <div class=\"text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4\">\n                  <div>\n                     <h5 class=\"pink-text\"><i class=\"fa fa-graduation-cap\"></i> Resoning</h5>\n                    <p>test paper</p>\n                    <a class=\"btn btn-pink btn-sm\">Download</a>\n                  </div>\n                </div>\n             </div>\n         </div>\n              </div>\n            </div> <!--resoning-->\n               <!--English-->\n            <div class=\"tab-pane fade\" id=\"list-english\" role=\"tabpanel\" aria-labelledby=\"list-messages-list\">\n              <div class=\"card text-center box scroll\" role=\"scroll\">\n                  <div class=\"card-header success-color white-text fixed\">\n                      English\n                  </div>\n                  <div class=\"card-body topic-box\" >\n                      <!-- Card -->\n                 <div class=\"card card-image\" style=\"background-image: url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg);\">\n                <!-- Content -->\n                   <div class=\"text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4\">\n                  <div>\n                     <h5 class=\"pink-text\"><i class=\"fa fa-graduation-cap\"></i> English</h5>\n                    <p>test paper</p>\n                    <a class=\"btn btn-pink btn-sm\">Download</a>\n                  </div>\n                </div>\n             </div>\n         </div>\n       </div>\n      </div> <!--English-->\n            <!--current affairs-->\n            <div class=\"tab-pane fade\" id=\"list-ca\" role=\"tabpanel\" aria-labelledby=\"list-settings-list\"> \n              <div class=\"card text-center box scroll\" role=\"scroll\">\n                  <div class=\"card-header success-color white-text fixed\">\n                      current affairs\n                  </div>\n\n                  <div class=\"card-body topic-box\">\n                          <!-- Card -->\n                     <div class=\"card card-image\" style=\"background-image: url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg);\">\n                    <!-- Content -->\n                       <div class=\"text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4\">\n                      <div>\n                         <h5 class=\"pink-text\"><i class=\"fa fa-graduation-cap\"></i> current affairs</h5>\n                        <p>test paper</p>\n                        <a class=\"btn btn-pink btn-sm\">Download</a>\n                      </div>\n                    </div>\n                 </div>\n             </div>\n            </div>\n      </div><!--current affairs-->\n\n               <!--Previous Year-->\n               <div class=\"tab-pane fade\" id=\"list-py\" role=\"tabpanel\" aria-labelledby=\"list-messages-list\">\n                  <div class=\"card text-center box scroll\" role=\"scroll\">\n                      <div class=\"card-header success-color white-text fixed\">\n                          Previous Year Question Paper\n                      </div>\n                      <div class=\"card-body topic-box\">\n                          <!-- Card -->\n                     <div class=\"card card-image\" style=\"background-image: url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg);\">\n                    <!-- Content -->\n                       <div class=\"text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4\">\n                      <div>\n                         <h5 class=\"pink-text\"><i class=\"fa fa-graduation-cap\"></i> SSC(2015)</h5>\n                        <p>test paper</p>\n                        <a class=\"btn btn-pink btn-sm\">Download</a>\n                      </div>\n                    </div>\n                 </div>\n             </div>\n           </div>\n          </div> <!-- Previous Year-->\n\n     </div><!-- Content -->\n  </div> <!-- Second column -->     \n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/uhome/questions/questions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QuestionsComponent = /** @class */ (function () {
    function QuestionsComponent() {
    }
    QuestionsComponent.prototype.ngOnInit = function () {
    };
    QuestionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-questions',
            template: __webpack_require__("./src/app/components/uhome/questions/questions.component.html"),
            styles: [__webpack_require__("./src/app/components/uhome/questions/questions.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], QuestionsComponent);
    return QuestionsComponent;
}());



/***/ }),

/***/ "./src/app/components/uhome/tutorials/tutorials.component.css":
/***/ (function(module, exports) {

module.exports = ".tutbox{\r\n  padding:20px;\r\n  margin-top:10px;\r\n  \r\n  margin-bottom: 5px;\r\n  height:80vh;\r\n}\r\n.box{\r\n    -webkit-box-shadow: 0 0 20px 5px rgba(0,0,0,0.5);\r\n            box-shadow: 0 0 20px 5px rgba(0,0,0,0.5);\r\n    height:75vh;\r\n}\r\n.card-image{\r\n    width:150px !important;\r\n    height:150px !important;\r\n}\r\n.flex-container{\r\n    display:-webkit-box;\r\n    display:-ms-flexbox;\r\n    display:flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-flow: row wrap;\r\n            flex-flow: row wrap;\r\n    -webkit-box-pack: start;\r\n        -ms-flex-pack: start;\r\n            justify-content: flex-start;\r\n    -webkit-box-align: start;\r\n        -ms-flex-align: start;\r\n            align-items: flex-start;\r\n }\r\n.fullmodel{\r\n     padding:0 !important;\r\n     max-width:80vw !important;\r\n     margin-top:8px !important;\r\n }\r\n.modal-embd{\r\n     padding:0 !important;\r\n     \r\n }\r\n.right{\r\n    padding:0 10px 0 0;\r\n }"

/***/ }),

/***/ "./src/app/components/uhome/tutorials/tutorials.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"tutbox\">     \n    <div class=\"row\">\n        <!-- First column -->\n        <div class=\"col-3\">\n          <!-- Navigation -->\n          <div class=\"list-group\" id=\"list-tab\" role=\"tablist\">\n            <a class=\"list-group-item  success-color center\">TUTORIAL</a>\n            <a class=\"list-group-item list-group-item-action active hoverable\" id=\"list-home-list\" data-toggle=\"list\" href=\"#list-apti\" role=\"tab\" aria-controls=\"home\">Aptitute</a>\n            <a class=\"list-group-item list-group-item-action hoverable\" id=\"list-profile-list\" data-toggle=\"list\" href=\"#list-resoning\" role=\"tab\" aria-controls=\"profile\">Resoning</a>\n            <a class=\"list-group-item list-group-item-action hoverable\" id=\"list-messages-list\" data-toggle=\"list\" href=\"#list-english\" role=\"tab\" aria-controls=\"messages\">English</a>\n            <a class=\"list-group-item list-group-item-action hoverable\" id=\"list-settings-list\" data-toggle=\"list\" href=\"#list-ca\" role=\"tab\" aria-controls=\"settings\">current affairs</a>\n          </div>\n          <!-- Navigation -->\n        </div>\n        <!-- First column -->\n        <!-- Second column -->\n        <div class=\"col-9\">\n          <!-- Content -->\n          <div class=\"tab-content\" id=\"nav-tabContent\">\n            <div class=\"tab-pane fade show active \" id=\"list-apti\" role=\"tabpanel\" aria-labelledby=\"list-home-list\">\n                <div class=\"card text-center box scroll\" role=\"scroll\">\n                    <div class=\"card-header success-color white-text fixed\">\n                        Aptitute\n                    </div>\n                    <div class=\"card-body topic-box\">\n                        <!-- Card -->\n                   <div class=\"card card-image\" style=\"background-image: url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg);\">\n                  <!-- Content -->\n                     <div class=\"text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4\">\n                    <div>\n                       <h5 class=\"pink-text\"><i class=\"fa fa-graduation-cap\"></i> Aptitute</h5>\n                      <p>test paper</p>\n                      <a class=\"btn btn-pink btn-sm\">Learn</a>\n                    </div>\n                  </div>\n               </div>\n           </div>\n                </div>\n            </div>\n            <!--resoning-->\n            <div class=\"tab-pane fade\" id=\"list-resoning\" role=\"tabpanel\" aria-labelledby=\"list-profile-list\">\n              \n              <div class=\"card text-center box scroll\" role=\"scroll\">\n                  <div class=\"card-header success-color white-text fixed\">\n                      Resoning\n                  </div>\n                  <div class=\"card-body topic-box\">\n                      <!-- Card -->\n                 <div class=\"card card-image\" style=\"background-image: url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg);\">\n                <!-- Content -->\n                   <div class=\"text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4\">\n                  <div>\n                     <h5 class=\"pink-text\"><i class=\"fa fa-graduation-cap\"></i> Resoning</h5>\n                    <p>test paper</p>\n                    <a class=\"btn btn-pink btn-sm\">Learn</a>\n                  </div>\n                </div>\n             </div>\n         </div>\n              </div>\n            </div> <!--resoning-->\n               <!--English-->\n            <div class=\"tab-pane fade\" id=\"list-english\" role=\"tabpanel\" aria-labelledby=\"list-messages-list\">\n             \n              <div class=\"card text-center box scroll\" role=\"scroll\">\n                  <div class=\"card-header success-color white-text fixed\">\n                      English\n                  </div>\n                  <div class=\"flex-container\">  \n                        <div class=\"card-body topic-box\" *ngFor=\"let topic of englishTopics\">\n                            <!-- Card -->\n                       <div class=\"card card-image\" style=\"background-image: url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg);\">\n                      <!-- Content -->\n                         <div class=\"text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4\">\n                        <div>\n                           <h5 class=\"pink-text\"><i class=\"fa fa-graduation-cap\"></i>{{topic.topic}}</h5>\n                          <!--- <p>{{topic.link}}</p>  data-toggle=\"modal\" data-target=\"#tutbox\" -->\n                          <a class=\"btn btn-pink btn-sm\"  href=\"http://docs.google.com/gview?url={{topic.link}}&embedded=true\" target=\"_blank\">Learn</a>\n                        </div>\n                      </div>\n                   </div>\n                 </div>\n              </div> <!--flex container -->\n            </div>\n        </div> <!--English-->\n            <!--current affairs-->\n            <div class=\"tab-pane fade\" id=\"list-ca\" role=\"tabpanel\" aria-labelledby=\"list-settings-list\">\n              \n              <div class=\"card text-center box scroll\" role=\"scroll\">\n                  <div class=\"card-header success-color white-text fixed\">\n                      current affairs\n                  </div>\n\n                  <div class=\"card-body topic-box\">\n                          <!-- Card -->\n                     <div class=\"card card-image\" style=\"background-image: url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg);\">\n                    <!-- Content -->\n                       <div class=\"text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4\">\n                      <div>\n                         <h5 class=\"pink-text\"><i class=\"fa fa-graduation-cap\"></i> current affairs</h5>\n                        <p>test paper</p>\n                        <a class=\"btn btn-pink btn-sm\">Learn</a>\n                      </div>\n                    </div>\n                 </div>\n             </div>\n          </div>\n         </div>\n          </div> <!--current affairs-->\n          <!-- Content -->\n        </div>\n        <!-- Second column -->\n      </div>        \n</div>"

/***/ }),

/***/ "./src/app/components/uhome/tutorials/tutorials.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorialsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TutorialsComponent = /** @class */ (function () {
    function TutorialsComponent() {
        this.category = ["Aptitute", "Resoning", "English", "Genral Awareness"];
        this.englishTopics = [
            {
                "topic": "HTML",
                "link": "https://www.tutorialspoint.com/html/html_tutorial.pdf"
            },
            {
                "topic": "JAVA",
                "link": "https://www.tutorialspoint.com/java/java_tutorial.pdf"
            },
            {
                "topic": "UNIX",
                "link": "https://www.tutorialspoint.com/unix/unix_tutorial.pdf"
            },
            {
                "topic": "verb",
                "link": "link"
            },
            {
                "topic": "verb",
                "link": "link"
            },
            {
                "topic": "verb",
                "link": "link"
            },
            {
                "topic": "verb",
                "link": "link"
            }
        ];
    }
    TutorialsComponent.prototype.ngOnInit = function () {
    };
    TutorialsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tutorials',
            template: __webpack_require__("./src/app/components/uhome/tutorials/tutorials.component.html"),
            styles: [__webpack_require__("./src/app/components/uhome/tutorials/tutorials.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TutorialsComponent);
    return TutorialsComponent;
}());



/***/ }),

/***/ "./src/app/components/uhome/udashboard/udashboard.component.css":
/***/ (function(module, exports) {

module.exports = ".tutbox{\r\n    padding:20px;\r\n    margin-top:10px;\r\n    -webkit-box-shadow: 0 0 20px 5px rgba(0,0,0,0.5);\r\n            box-shadow: 0 0 20px 5px rgba(0,0,0,0.5);\r\n    margin-bottom: 10px;\r\n    \r\n  }"

/***/ }),

/***/ "./src/app/components/uhome/udashboard/udashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container tutbox\">           \n  \n  <div class=\"row\">\n\n  <div class=\"col-3\">\n       <!--Card Dark-->\n    <div class=\"card card-dark\">\n        <!--Card image-->\n        <div class=\"view overlay\">\n            <img src=\"https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2821%29.jpg\" class=\"img-fluid\" alt=\"work desk\">\n            <a>\n                <div class=\"mask rgba-white-slight\"></div>\n            </a>\n        </div>\n        <!--/.Card image-->\n        <!--Card content-->\n        <div class=\"card-body elegant-color white-text\">\n          <!--Social shares button-->\n          <a class=\"activator p-3 mr-2\">WELCOME :</a>\n          <!--Title-->\n          <h4 class=\"card-title\">{{username | uppercase}}</h4>\n          <hr class=\"hr-light\">\n          <!--Text-->\n          <p class=\"font-small mb-4\">Hope, you are felling better here.</p>\n          <a href=\"/profile\" class=\"white-text d-flex justify-content-end\"><h5>Profile</h5><span><i class=\"fa fa-chevron-right pl-2\"></i></span></a>\n        </div>\n        <!--/.Card content-->\n    </div>\n    <!--/.Card Dark-->\n  </div>\n\n  <div class=\"col-9\">\n\n    <!--Card-->\n     <div class=\"card card-cascade wider reverse my-4 hoverable\">\n        <!--Card content-->\n        <div class=\"card-body text-center\">\n            <!--Title-->\n            <h4 class=\"card-title\"><strong>Total Test Given</strong></h4>\n            <p class=\"card-text\">aptitute : \n            </p>\n        </div>\n        <!--/.Card content-->\n    </div>\n    <!--/.Card-->\n\n    \n    <!--Card-->\n    <div class=\"card card-cascade wider reverse my-4 hoverable\">\n        <!--Card content-->\n        <div class=\"card-body text-center\">\n            <!--Title-->\n            <h4 class=\"card-title\"><strong>Rating</strong></h4>\n            <p class=\"card-text\">% out of 100% ;\n            </p>\n        </div>\n        <!--/.Card content-->\n    </div>\n    <!--/.Card-->\n\n\n    <!--Card-->\n    <div class=\"card card-cascade wider reverse my-4 hoverable\">\n        <!--Card content-->\n        <div class=\"card-body text-center\">\n            <!--Title-->\n            <h4 class=\"card-title\"><strong>performance</strong></h4>\n            <p class=\"card-text\">level\n            </p>\n        </div>\n        <!--/.Card content-->\n    </div>\n    <!--/.Card-->\n  </div>\n\n  </div> <!--ROW-->\n\n</div>"

/***/ }),

/***/ "./src/app/components/uhome/udashboard/udashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UdashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UdashboardComponent = /** @class */ (function () {
    function UdashboardComponent() {
    }
    UdashboardComponent.prototype.ngOnInit = function () {
        var user = localStorage.getItem('user');
        var data = JSON.parse(user);
        this.username = data.name;
        console.log(user);
    };
    UdashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-udashboard',
            template: __webpack_require__("./src/app/components/uhome/udashboard/udashboard.component.html"),
            styles: [__webpack_require__("./src/app/components/uhome/udashboard/udashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UdashboardComponent);
    return UdashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/uhome/uhome.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/uhome/uhome.component.html":
/***/ (function(module, exports) {

module.exports = "<app-unavbar></app-unavbar>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/components/uhome/uhome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UhomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UhomeComponent = /** @class */ (function () {
    function UhomeComponent(router) {
        this.router = router;
    }
    UhomeComponent.prototype.ngOnInit = function () {
    };
    UhomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-uhome',
            template: __webpack_require__("./src/app/components/uhome/uhome.component.html"),
            styles: [__webpack_require__("./src/app/components/uhome/uhome.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], UhomeComponent);
    return UhomeComponent;
}());



/***/ }),

/***/ "./src/app/components/uhome/unavbar/unavbar.component.css":
/***/ (function(module, exports) {

module.exports = ".chip.chip-md {\r\n    height: 42px;\r\n    line-height: 42px;\r\n    border-radius: 24px;\r\n}\r\n\r\n.chip.chip-md img {\r\n    height: 42px;\r\n    width: 42px;\r\n    border-radius: 50%;\r\n}\r\n\r\n.chip.chip-lg {\r\n    height: 52px;\r\n    line-height: 52px;\r\n    border-radius: 26px;\r\n}\r\n\r\n.chip.chip-lg img {\r\n    height: 52px;\r\n    width: 52px;\r\n}"

/***/ }),

/***/ "./src/app/components/uhome/unavbar/unavbar.component.html":
/***/ (function(module, exports) {

module.exports = "  <!--Navbar-->\n  <nav class=\"navbar navbar-expand-lg navbar-dark indigo\">\n       \n    <div class=\"container\">\n    <!-- Navbar brand -->\n    <a class=\"navbar-brand\" href=\"#\">DashBoard</a>\n\n    <!-- Collapse button -->\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n        aria-expanded=\"false\" aria-label=\"Toggle navigation\"><span class=\"navbar-toggler-icon\"></span></button>\n\n    <!-- Collapsible content -->\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n\n        <!-- Links -->\n        <ul class=\"navbar-nav mr-auto\">\n            <li class=\"nav-item active\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n                <a class=\"nav-link\" [routerLink]=\"['/uhome']\" >Home</a>\n            </li>\n            <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n                <a class=\"nav-link\" [routerLink]=\"['/uhome/tutorials']\" >Tutorials</a>\n            </li>\n            <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n                <a class=\"nav-link\" [routerLink]=\"['/uhome/questions']\">Questions</a>\n            </li>\n            <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n                <a class=\"nav-link\" [routerLink]=\"['/uhome/exams']\">Exams</a>\n            </li>\n            <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n                <a class=\"nav-link\" [routerLink]=\"['/uhome/status']\">Status</a>\n            </li>\n        </ul>\n        <!-- Links -->\n\n        <!-- Search form -->\n        <form class=\"form-inline\">\n          <ul class=\"navbar-nav mr-0\">\n             <!-- Dropdown -->\n             <li class=\"nav-item dropdown\">\n              <a class=\"nav-link  \" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n              <!--  <i class=\" fa fa-user-circle fa-7x\"></i> -->\n              <div class=\"chip chip-md cyan darken-2 white-text hoverable\">\n                    <img src=\"https://mdbootstrap.com/img/Photos/Avatars/img(28).jpg\" alt=\"Contact Person\"> {{username}}&nbsp;\n                </div>\n              </a>\n              <div class=\"dropdown-menu dropdown-primary\" aria-labelledby=\"navbarDropdownMenuLink\">\n                  <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-user\"></i> Profile</a>\n                  <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-cog\"></i> Settings</a>\n                  <a class=\"dropdown-item\" data-toggle=\"modal\" data-target=\"#modalConfirmlogout\">\n                      <i class=\"fa fa-share-square\"></i> Signout</a>\n              </div>\n          </li>\n          </ul>\n        </form>\n    </div>\n    <!-- Collapsible content -->\n  </div>\n</nav>\n<!--/.Navbar-->\n              \n<!--Modal: modalConfirmDelete-->\n<div class=\"modal fade\" id=\"modalConfirmlogout\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-sm modal-notify modal-danger\" role=\"document\">\n        <!--Content-->\n        <div class=\"modal-content text-center\">\n            <!--Header-->\n            <div class=\"modal-header d-flex justify-content-center\">\n                <p class=\"heading\">Are you sure?</p>\n            </div>\n            <!--Body-->  \n            <!--Footer-->\n            <div class=\"modal-footer flex-center\">\n                <a (click)=\"onLogoutClick()\" data-dismiss=\"modal\" class=\"btn  btn-outline-danger\">Yes</a>\n                <a type=\"button\" class=\"btn  btn-danger waves-effect\" data-dismiss=\"modal\">No</a>\n            </div>\n        </div>\n        <!--/.Content-->\n    </div>\n</div>\n<!--Modal: modalConfirmlogout-->\n\n"

/***/ }),

/***/ "./src/app/components/uhome/unavbar/unavbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UnavbarComponent = /** @class */ (function () {
    function UnavbarComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    UnavbarComponent.prototype.ngOnInit = function () {
        var user = localStorage.getItem('user');
        var data = JSON.parse(user);
        this.username = data.name;
    };
    UnavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.router.navigate(['']);
    };
    UnavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-unavbar',
            template: __webpack_require__("./src/app/components/uhome/unavbar/unavbar.component.html"),
            styles: [__webpack_require__("./src/app/components/uhome/unavbar/unavbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], UnavbarComponent);
    return UnavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/uhome/ustatus/ustatus.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/uhome/ustatus/ustatus.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/uhome/ustatus/ustatus.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UstatusComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UstatusComponent = /** @class */ (function () {
    function UstatusComponent() {
    }
    UstatusComponent.prototype.ngOnInit = function () {
    };
    UstatusComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-ustatus',
            template: __webpack_require__("./src/app/components/uhome/ustatus/ustatus.component.html"),
            styles: [__webpack_require__("./src/app/components/uhome/ustatus/ustatus.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UstatusComponent);
    return UstatusComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import {tokenNotExpired} from 'angular-jwt';
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.isDev = false; // Change to false before deployment
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('http://localhost:3000/users/register');
        return this.http.post(ep, user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.changePass = function (pass) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('http://localhost:3000/users/changepass');
        console.log(pass);
        return this.http.post(ep, pass, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('http://localhost:3000/users/authenticate');
        return this.http.post(ep, user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateAdmin = function (admin) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('http://localhost:3000/admin/authenticate');
        return this.http.post(ep, admin, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //for password reset 
    AuthService.prototype.resetPass = function (email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('http://localhost:3000/users/resetpass');
        return this.http.post(ep, email, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('http://localhost:3000/users/profile');
        return this.http.get(ep, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.storeAdminData = function (token, admin) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('admin', JSON.stringify(admin));
        this.authToken = token;
        this.admin = admin;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return true; //tokenNotExpired('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService.prototype.prepEndpoint = function (ep) {
        if (this.isDev) {
            return ep;
        }
        else {
            return ep;
        }
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/exam.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExamService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import {tokenNotExpired} from 'angular-jwt';
var ExamService = /** @class */ (function () {
    function ExamService(http) {
        this.http = http;
    }
    //getting topics
    ExamService.prototype.getExams = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var ep = 'http://localhost:3000/exams/examnames';
        return this.http.get(ep, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //adding exam name
    ExamService.prototype.addExam = function (exam) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var ep = 'http://localhost:3000/exams/addexam';
        return this.http.post(ep, exam, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //adding question to particular exam
    ExamService.prototype.addExamQuestion = function (examQuestion) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var ep = 'http://localhost:3000/exams/addquestion';
        return this.http.post(ep, examQuestion, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //getting all questions of particular exam
    ExamService.prototype.getExamQuestion = function (exam) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var ep = 'http://localhost:3000/exams/getquestions';
        return this.http.post(ep, exam, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //getting number of question of particular exam questions
    ExamService.prototype.getExamQuestionStat = function (exam) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var ep = 'http://localhost:3000/exams/examquesstat';
        return this.http.post(ep, exam, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ExamService.prototype.getNativeWindow = function () {
        return window;
    };
    ExamService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ExamService);
    return ExamService;
}());



/***/ }),

/***/ "./src/app/services/question.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import {tokenNotExpired} from 'angular-jwt';
var QuestionService = /** @class */ (function () {
    function QuestionService(http) {
        this.http = http;
    }
    //adding question to particular category
    QuestionService.prototype.addQuestion = function (question) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var ep = 'http://localhost:3000/question/add';
        return this.http.post(ep, question, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //getting category
    QuestionService.prototype.getCategory = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var ep = 'http://localhost:3000/category/getcategories';
        return this.http.get(ep, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //getting topics
    QuestionService.prototype.getTopics = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var ep = 'http://localhost:3000/category/gettopics';
        return this.http.post(ep, data, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //adding category
    QuestionService.prototype.addCategory = function (category) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var ep = 'http://localhost:3000/category/addcategory';
        return this.http.post(ep, category, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //adding topic
    QuestionService.prototype.addTopic = function (topic) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var ep = 'http://localhost:3000/category/addtopic';
        return this.http.post(ep, topic, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //adding exam name
    QuestionService.prototype.addExam = function (exam) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var ep = 'http://localhost:3000/exams/addexam';
        return this.http.post(ep, exam, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //adding question to particular exam
    QuestionService.prototype.addExamQuestion = function (examQuestion) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var ep = 'http://localhost:3000/exams/addquestion';
        return this.http.post(ep, examQuestion, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //getting all questions of particular exam
    QuestionService.prototype.getExamQuestion = function (exam) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var ep = 'http://localhost:3000/exams/getquestions';
        return this.http.post(ep, exam, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    QuestionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], QuestionService);
    return QuestionService;
}());



/***/ }),

/***/ "./src/app/services/result.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResultService = /** @class */ (function () {
    function ResultService() {
        //answers
        this.aptituteAns = [];
        this.resoningAns = [];
        this.englisgAns = [];
        this.genralAns = [];
        this.computerAns = [];
        //option selected
        this.selectedA = [];
        this.selectedE = [];
        this.selectedR = [];
        this.selectedG = [];
        this.selectedC = [];
    }
    ResultService.prototype.setAptiAns = function (aptiAns) {
        this.aptituteAns.push(aptiAns);
    };
    ResultService.prototype.setResoningAns = function (rAns) {
        this.resoningAns.push(rAns);
    };
    ResultService.prototype.setEnglishAns = function (eAns) {
        this.englisgAns.push(eAns);
    };
    ResultService.prototype.setGenralAns = function (gAns) {
        this.genralAns.push(gAns);
    };
    ResultService.prototype.setComputerAns = function (cAns) {
        this.computerAns.push(cAns);
    };
    ResultService.prototype.setAOption = function (aopt) {
        this.selectedA = aopt;
    };
    ResultService.prototype.setROption = function (ropt) {
        this.selectedR = ropt;
    };
    ResultService.prototype.setEOption = function (eopt) {
        this.selectedE = eopt;
    };
    ResultService.prototype.setGOption = function (gopt) {
        this.selectedG = gopt;
    };
    ResultService.prototype.setCOption = function (copt) {
        this.selectedC = copt;
    };
    ResultService.prototype.clearAll = function () {
        this.aptituteAns = [];
        this.computerAns = [];
        this.englisgAns = [];
        this.resoningAns = [];
        this.genralAns = [];
    };
    ResultService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ResultService);
    return ResultService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map