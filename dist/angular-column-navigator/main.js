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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _white_board_white_board_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./white-board/white-board.component */ "./src/app/white-board/white-board.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./course-viewer/course-viewer.component */ "./src/app/course-viewer/course-viewer.component.ts");
/* harmony import */ var _section_list_section_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./section-list/section-list.component */ "./src/app/section-list/section-list.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _services_course_service_client__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/course.service.client */ "./src/app/services/course.service.client.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _services_section_service_client__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/section.service.client */ "./src/app/services/section.service.client.ts");
/* harmony import */ var _course_grid_course_grid_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./course-grid/course-grid.component */ "./src/app/course-grid/course-grid.component.ts");
/* harmony import */ var _services_enrollment_service_client__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/enrollment.service.client */ "./src/app/services/enrollment.service.client.ts");
/* harmony import */ var _services_module_service_client__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/module.service.client */ "./src/app/services/module.service.client.ts");
/* harmony import */ var _services_lesson_service_client__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/lesson.service.client */ "./src/app/services/lesson.service.client.ts");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/widget.service.client */ "./src/app/services/widget.service.client.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"],
                _white_board_white_board_component__WEBPACK_IMPORTED_MODULE_5__["WhiteBoardComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_8__["CourseViewerComponent"],
                _section_list_section_list_component__WEBPACK_IMPORTED_MODULE_9__["SectionListComponent"],
                _course_grid_course_grid_component__WEBPACK_IMPORTED_MODULE_14__["CourseGridComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_10__["routing"]
            ],
            providers: [
                _services_course_service_client__WEBPACK_IMPORTED_MODULE_11__["CourseServiceClient"],
                _services_user_service_client__WEBPACK_IMPORTED_MODULE_12__["UserServiceClient"],
                _services_section_service_client__WEBPACK_IMPORTED_MODULE_13__["SectionServiceClient"],
                _services_enrollment_service_client__WEBPACK_IMPORTED_MODULE_15__["EnrollmentServiceClient"],
                _services_module_service_client__WEBPACK_IMPORTED_MODULE_16__["ModuleServiceClient"],
                _services_lesson_service_client__WEBPACK_IMPORTED_MODULE_17__["LessonServiceClient"],
                _services_widget_service_client__WEBPACK_IMPORTED_MODULE_18__["WidgetServiceClient"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _white_board_white_board_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./white-board/white-board.component */ "./src/app/white-board/white-board.component.ts");
/* harmony import */ var _course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./course-viewer/course-viewer.component */ "./src/app/course-viewer/course-viewer.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _section_list_section_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./section-list/section-list.component */ "./src/app/section-list/section-list.component.ts");







var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _white_board_white_board_component__WEBPACK_IMPORTED_MODULE_1__["WhiteBoardComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"] },
    { path: 'course/:courseId', component: _course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_2__["CourseViewerComponent"] },
    { path: 'course/:courseId/section', component: _section_list_section_list_component__WEBPACK_IMPORTED_MODULE_6__["SectionListComponent"] },
    { path: 'course/:courseId/module/:moduleId', component: _course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_2__["CourseViewerComponent"] },
    { path: 'course/:courseId/module/:moduleId/lesson/:lessonId', component: _course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_2__["CourseViewerComponent"] },
    { path: '**', component: _white_board_white_board_component__WEBPACK_IMPORTED_MODULE_1__["WhiteBoardComponent"] } // last
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/course-grid/course-grid.component.css":
/*!*******************************************************!*\
  !*** ./src/app/course-grid/course-grid.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.linkButton{\r\n  margin-left: 10px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/course-grid/course-grid.component.html":
/*!********************************************************!*\
  !*** ./src/app/course-grid/course-grid.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link   rel=\"stylesheet\"\n        type=\"text/css\"\n        href=\"../../assets/dist/css/bootstrap.css\"/>\n<h2>Course Grid</h2>\n<hr>\n<div class=\"row\">\n  <div *ngFor=\"let course of courses\" class=\"col-sm-3\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">{{course.title}}</h5>\n        <p class=\"card-text\"> Created: {{course.created}}</p>\n        <a routerLink=\"/course/{{course.id}}\"\n           class=\"btn btn-primary\">Course Info</a>\n        <a *ngIf='userId !=\"\" && role ==\"student\" && coursesEnrolledIn.indexOf(course.id) == -1' routerLink=\"/course/{{course.id}}/section\"\n           class=\"btn btn-primary linkButton\">Enroll</a>\n        <a *ngIf='userId !=\"\" && role ==\"student\" && coursesEnrolledIn.indexOf(course.id) != -1' routerLink=\"/course/{{course.id}}/section\"\n           class=\"btn btn-success linkButton\">Enrolled</a>\n        <a *ngIf='userId !=\"\" && role ==\"admin\"' routerLink=\"/course/{{course.id}}/section\"\n           class=\"btn btn-warning linkButton\">Edit Sections</a>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/course-grid/course-grid.component.ts":
/*!******************************************************!*\
  !*** ./src/app/course-grid/course-grid.component.ts ***!
  \******************************************************/
/*! exports provided: CourseGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseGridComponent", function() { return CourseGridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_course_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/course.service.client */ "./src/app/services/course.service.client.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _services_enrollment_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/enrollment.service.client */ "./src/app/services/enrollment.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CourseGridComponent = /** @class */ (function () {
    function CourseGridComponent(service, userService, enrollmentService) {
        this.service = service;
        this.userService = userService;
        this.enrollmentService = enrollmentService;
        this.courses = [];
        this.userId = '';
        this.role = "";
        this.coursesEnrolledIn = [];
    }
    CourseGridComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.findAllCourses()
            .then(function (courses) {
            _this.courses = courses;
            courses.map(function (course) {
                course.created = new Date(course.created).toLocaleString();
            });
        });
        this.userService
            .profile()
            .then(function (user) {
            if (user._id != null && user._id != undefined) {
                _this.userId = user._id;
                _this.role = user.role;
                _this.getEnrolledSections();
            }
        });
    };
    CourseGridComponent.prototype.getEnrolledSections = function () {
        var _this = this;
        this.enrollmentService.findSectionsForStudent(this.userId).then(function (enrollments) {
            _this.coursesEnrolledIn = [];
            enrollments.map(function (enrollment) {
                _this.coursesEnrolledIn.push(enrollment.section.courseId);
            });
        });
    };
    CourseGridComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-course-grid',
            template: __webpack_require__(/*! ./course-grid.component.html */ "./src/app/course-grid/course-grid.component.html"),
            styles: [__webpack_require__(/*! ./course-grid.component.css */ "./src/app/course-grid/course-grid.component.css")]
        }),
        __metadata("design:paramtypes", [_services_course_service_client__WEBPACK_IMPORTED_MODULE_1__["CourseServiceClient"],
            _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserServiceClient"],
            _services_enrollment_service_client__WEBPACK_IMPORTED_MODULE_3__["EnrollmentServiceClient"]])
    ], CourseGridComponent);
    return CourseGridComponent;
}());



/***/ }),

/***/ "./src/app/course-viewer/course-viewer.component.css":
/*!***********************************************************!*\
  !*** ./src/app/course-viewer/course-viewer.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".moduleList{\r\n  border-right: 2px solid black;\r\n  border-top: 2px solid black;\r\n  height: 100vh;\r\n}\r\n\r\n\r\n.list-group-item.hover{\r\n  background-color: grey;\r\n  outline-color: black;\r\n}\r\n\r\n\r\n.moduleSelected{\r\n  background-color: gray;\r\n  outline-color: black;\r\n\r\n}\r\n\r\n\r\n.lessonSelected{\r\n  background-color: gray;\r\n  outline-color: black;\r\n}\r\n\r\n\r\n.list-group-item{\r\n  margin-top: 15px;\r\n  box-shadow: 10px 5px black;\r\n}\r\n\r\n\r\n.nav-link{\r\n  color: #005cbf;\r\n\r\n}\r\n\r\n\r\n.btn{\r\n  margin-right: 5px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/course-viewer/course-viewer.component.html":
/*!************************************************************!*\
  !*** ./src/app/course-viewer/course-viewer.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<link   rel=\"stylesheet\"\n        type=\"text/css\"\n        href=\"../../assets/dist/css/bootstrap.css\"/>\n<div class=\"container-fluid\">\n  <h1 *ngIf=\"course != undefined\">{{course.title}}</h1>\n  <h1 *ngIf=\"course == undefined\">Course Title</h1>\n  <hr>\n\n  <a routerLink=\"/home\"><button class=\"btn btn-primary\">Home</button></a>\n  <a *ngIf=\"course != undefined\" routerLink=\"/course/{{course.id}}/section\"><button class=\"btn btn-primary\">Enrollment</button></a>\n  <br>\n  <br>\n\n  <div class=\"row\">\n\n    <div class=\"col-3 moduleList\">\n      <h2>Modules</h2>\n      <hr>\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\" style=\"border-color: gray;\" (click)=\"selectModule(module.id)\" *ngFor=\"let module of modules\">\n          <div *ngIf=\"module.id == moduleId\" class=\"moduleSelected\">\n            {{module.title}}\n          </div>\n          <div *ngIf=\"module.id != moduleId\">\n            {{module.title}}\n          </div>\n        </li>\n\n      </ul>\n    </div>\n    <div class=\"col-9\">\n      <h2 *ngIf=\"selectedModule != undefined\">Lessons for {{selectedModule.title}}</h2>\n      <ul class=\"nav nav-tabs\">\n        <li class=\"nav-item\"  (click)=\"selectLesson(lesson.id)\" *ngFor=\"let lesson of lessons\">\n          <div *ngIf=\"lesson.id == lessonId\" style=\"border-color: gray;\" class=\"nav-link lessonSelected\">\n            {{lesson.title}}\n          </div>\n          <div *ngIf=\"lesson.id != lessonId\" style=\"border-color: gray;\" class=\"nav-link\">\n            {{lesson.title}}\n          </div>\n        </li>\n      </ul>\n\n      <div class=\"container\">\n        <div  class=\"panel-group\">\n          <div *ngIf=\"widgets.length > 0\">\n          <br>\n          <h3>Lesson Homepage</h3>\n          <hr>\n          <br>\n          </div>\n          <div *ngFor=\"let widget of widgets\" class=\"panel panel-default\">\n            <div *ngIf=\"widget.className=='list'\" class=\"panel-body\">\n              <ol *ngIf=\"widget.listType =='ordered'\">\n                <li *ngFor=\"let text of widget.text.split('\\n')\">\n                  {{text}}\n                </li>\n              </ol>\n              <ul *ngIf=\"widget.listType =='unordered'\">\n                <li *ngFor=\"let text of widget.text.split('\\n')\">\n                  {{text}}\n                </li>\n              </ul>\n            </div>\n            <div *ngIf=\"widget.className=='heading'\" class=\"panel-body\">\n              <h1 *ngIf=\"widget.size==1\"> {{widget.text}}</h1>\n              <h2 *ngIf=\"widget.size==2\"> {{widget.text}}</h2>\n              <h3 *ngIf=\"widget.size==3\"> {{widget.text}}</h3>\n            </div>\n\n            <div *ngIf=\"widget.className=='paragraph'\" class=\"panel-body\">\n              <p>{{widget.text}}</p>\n            </div>\n\n            <div *ngIf=\"widget.className=='image'\" class=\"panel-body\">\n              <img src={{widget.src}} width={{widget.width}} height={{widget.height}}/>\n            </div>\n\n            <div *ngIf=\"widget.className=='link'\" class=\"panel-body\">\n              <a href={{widget.href}}>{{widget.text}}</a>\n            </div>\n          </div>\n\n\n        </div>\n      </div>\n    </div>\n\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/course-viewer/course-viewer.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/course-viewer/course-viewer.component.ts ***!
  \**********************************************************/
/*! exports provided: CourseViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseViewerComponent", function() { return CourseViewerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_course_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/course.service.client */ "./src/app/services/course.service.client.ts");
/* harmony import */ var _services_module_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/module.service.client */ "./src/app/services/module.service.client.ts");
/* harmony import */ var _services_lesson_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/lesson.service.client */ "./src/app/services/lesson.service.client.ts");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CourseViewerComponent = /** @class */ (function () {
    function CourseViewerComponent(service, moduleService, lessonService, widgetService, route) {
        this.service = service;
        this.moduleService = moduleService;
        this.lessonService = lessonService;
        this.widgetService = widgetService;
        this.route = route;
        this.courseId = undefined;
        this.moduleId = undefined;
        this.lessonId = undefined;
        //course: Course = new Course();
        this.course = undefined;
        this.modules = [];
        this.selectedModule = undefined;
        this.lessons = [];
        this.widgets = [];
    }
    CourseViewerComponent.prototype.loadCourse = function (courseId) {
        var _this = this;
        this.service.findCourseById(courseId)
            .then(function (course) {
            _this.course = course;
            _this.modules = [];
            _this.lessons = [];
            _this.widgets = [];
            _this.moduleId = undefined;
            _this.lessonId = undefined;
            _this.selectedModule = undefined;
        })
            .then(function () {
            _this.moduleService.findModulesForCourse(_this.courseId).then(function (modules) {
                _this.modules = modules;
            });
        });
    };
    CourseViewerComponent.prototype.selectModule = function (moduleId) {
        var _this = this;
        this.lessons = [];
        this.widgets = [];
        this.lessonId = undefined;
        this.moduleId = moduleId;
        this.moduleService.findModuleById(this.moduleId).then(function (module) {
            _this.selectedModule = module;
        });
        this.lessonService.findLessonsForModule(this.courseId, this.moduleId).then(function (lessons) { _this.lessons = lessons; });
    };
    CourseViewerComponent.prototype.selectLesson = function (lessonId) {
        var _this = this;
        this.widgets = [];
        this.lessonId = lessonId;
        this.widgetService.findWidgetsForLesson(this.courseId, this.moduleId, this.lessonId).then(function (widgets) {
            _this.widgets = widgets;
        });
    };
    CourseViewerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.courseId = params['courseId'];
            _this.loadCourse(_this.courseId);
        });
    };
    CourseViewerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-course-viewer',
            template: __webpack_require__(/*! ./course-viewer.component.html */ "./src/app/course-viewer/course-viewer.component.html"),
            styles: [__webpack_require__(/*! ./course-viewer.component.css */ "./src/app/course-viewer/course-viewer.component.css")]
        }),
        __metadata("design:paramtypes", [_services_course_service_client__WEBPACK_IMPORTED_MODULE_2__["CourseServiceClient"],
            _services_module_service_client__WEBPACK_IMPORTED_MODULE_3__["ModuleServiceClient"],
            _services_lesson_service_client__WEBPACK_IMPORTED_MODULE_4__["LessonServiceClient"],
            _services_widget_service_client__WEBPACK_IMPORTED_MODULE_5__["WidgetServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], CourseViewerComponent);
    return CourseViewerComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type=text], input[type=password] {\r\n  width: 100%;\r\n  padding: 15px;\r\n  margin: 5px 0 10px 0;\r\n  display: inline-block;\r\n  border: none;\r\n  background: #f1f1f1;\r\n}\r\n\r\ninput[type=text]:focus, input[type=password]:focus {\r\n  background-color: #ddd;\r\n  outline: none;\r\n}\r\n\r\n.warningText{\r\n  color: red;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.linkButton{\r\n  margin-left: 10px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h1>Whiteboard Login</h1>\n  <a routerLink=\"/register\"><button class=\"btn btn-primary\">Link To Register</button></a>\n  <a routerLink=\"/home\"><button class=\"btn btn-primary linkButton\">Link To Home</button></a>\n  <p>Please Enter Your Username and Password</p>\n  <hr>\n  <label><b>Username</b></label>\n  <input type=\"text\" [(ngModel)]=\"username\"\n         placeholder=\"Username\"\n         class=\"form-control\"/>\n  <div class=\"warningText\" *ngIf='tried == true && username.length < 1'> Username Cannot Be Empty</div>\n  <label><b>Password</b></label>\n  <input type=\"password\" [(ngModel)]=\"password\"\n         placeholder=\"Password\"\n         class=\"form-control\"/>\n  <div class=\"warningText\" *ngIf='tried == true && password.length < 1'> Password Cannot Be Empty</div>\n  <br>\n  <div class=\"warningText\" *ngIf='mismatch == true'> Invalid Username and Password Combination</div>\n  <button (click)=\"login(username, password)\"\n          class=\"btn btn-primary btn-block\">\n    Login\n  </button>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
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
    function LoginComponent(router, service) {
        this.router = router;
        this.service = service;
        this.username = '';
        this.password = '';
        this.tried = false;
        this.mismatch = false;
    }
    LoginComponent.prototype.login = function (username, password) {
        var _this = this;
        this.tried = true;
        if (username.length < 1) {
            alert('Missing Username Field');
        }
        else if (password.length < 1) {
            alert('Missing Password Field');
        }
        else {
            this.service
                .login(username, password)
                .then(function (response) {
                if (response == null) {
                    _this.mismatch = true;
                    alert('Invalid Username and Password Combination');
                }
                else {
                    _this.router.navigate(['profile']);
                }
            });
        }
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserServiceClient"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type=text], input[type=password] {\r\n  width: 100%;\r\n  padding: 15px;\r\n  margin: 5px 0 10px 0;\r\n  display: inline-block;\r\n  border: none;\r\n  background: #f1f1f1;\r\n}\r\n\r\ninput[type=text]:focus, input[type=password]:focus {\r\n  background-color: #ddd;\r\n  outline: none;\r\n}\r\n\r\n.logout{\r\n  cursor:pointer;\r\n  -webkit-text-decoration-color: blue;\r\n          text-decoration-color: blue;\r\n  text-decoration:underline;\r\n}\r\n\r\n.logout:hover {\r\n  text-decoration:none;\r\n  text-shadow: 1px 1px 1px #555;\r\n}\r\n\r\n.linkButton{\r\n  margin-left: 10px;\r\n}\r\n\r\n.section{\r\n  float: right;\r\n}\r\n"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf='userId != \"\"' class=\"container-fluid\">\n  <h1>Profile</h1>\n  <a routerLink=\"/home\"><button class=\"btn btn-primary\">Home</button></a>\n  <a class=\"logout\" (click)=\"logout()\"><button class=\"btn btn-danger linkButton\">Logout</button></a>\n  <br>\n  <label><b>Username</b></label>\n  <input type=\"text\" [(ngModel)]=\"username\"\n         placeholder=\"Username\"\n         class=\"form-control\"\n         readonly/>\n  <label><b>First Name</b></label>\n  <input type=\"text\" [(ngModel)]=\"firstName\"\n         placeholder=\"First Name\"\n         class=\"form-control\"/>\n  <label><b>Last Name</b></label>\n  <input type=\"text\"  [(ngModel)]=\"lastName\"\n         placeholder=\"Last Name\"\n         class=\"form-control\"/>\n  <button (click)=\"update()\"\n          class=\"btn btn-primary btn-block\">\n    Update\n  </button>\n\n  <h2>Sections ({{sections.length}})</h2>\n\n  <ul class=\"list-group\">\n    <li *ngFor=\"let enrollment of sections\" class=\"list-group-item\">\n      {{enrollment.section.name}}\n      ({{enrollment.section.currentSeats + ' seats remaining'}})\n      <a routerLink=\"/course/{{enrollment.section.courseId}}/section\"><button class=\"btn btn-primary section\">Edit Enrollment</button></a>\n\n    </li>\n  </ul>\n\n\n\n\n</div>\n\n<div *ngIf='userId == \"\"' class=\"container-fluid\">\n  <h1>Profile</h1>\n  <a routerLink=\"/home\"><button class=\"btn btn-primary\">Home</button></a>\n  <a routerLink=\"/login\"><button class=\"btn btn-primary linkButton\">Link To Login Page</button></a>\n  <br>\n\n  You are Currently Not Logged In! Please log in to see profile.\n\n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_section_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/section.service.client */ "./src/app/services/section.service.client.ts");
/* harmony import */ var _services_enrollment_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/enrollment.service.client */ "./src/app/services/enrollment.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(service, sectionService, enrollmentService, router) {
        this.service = service;
        this.sectionService = sectionService;
        this.enrollmentService = enrollmentService;
        this.router = router;
        this.user = {};
        this.userId = "";
        this.enrolledSections = [];
        this.sections = [];
    }
    ProfileComponent.prototype.update = function () {
        var _this = this;
        var user = {
            firstName: this.firstName,
            lastName: this.lastName,
        };
        this.service.updateUser(user).then(function () {
            _this.service.findUserById(_this.userId)
                .then(function (user) {
                _this.firstName = user.firstName;
                if (_this.firstName == undefined || _this.firstName == null) {
                    _this.firstName = '';
                }
                _this.lastName = user.lastName;
                if (_this.lastName == undefined || _this.lastName == null) {
                    _this.lastName = '';
                }
            });
        });
    };
    ProfileComponent.prototype.logout = function () {
        var _this = this;
        this.service
            .logout()
            .then(function () {
            return _this.router.navigate(['login']);
        });
    };
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service
            .profile()
            .then(function (user) {
            _this.username = user.username;
            if (user._id != null && user._id != undefined) {
                _this.userId = user._id;
                _this.service.findUserById(_this.userId)
                    .then(function (user) {
                    _this.firstName = user.firstName;
                    if (_this.firstName == undefined || _this.firstName == null) {
                        _this.firstName = '';
                    }
                    _this.lastName = user.lastName;
                    if (_this.lastName == undefined || _this.lastName == null) {
                        _this.lastName = '';
                    }
                });
            }
            _this.enrollmentService
                .findSectionsForStudent(_this.userId)
                .then(function (sections) {
                _this.sections = sections;
            });
        });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_1__["UserServiceClient"],
            _services_section_service_client__WEBPACK_IMPORTED_MODULE_3__["SectionServiceClient"],
            _services_enrollment_service_client__WEBPACK_IMPORTED_MODULE_4__["EnrollmentServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type=text], input[type=password] {\r\n  width: 100%;\r\n  padding: 15px;\r\n  margin: 5px 0 10px 0;\r\n  display: inline-block;\r\n  border: none;\r\n  background: #f1f1f1;\r\n}\r\n\r\n\r\n\r\ninput[type=text]:focus, input[type=password]:focus {\r\n  background-color: #ddd;\r\n  outline: none;\r\n}\r\n\r\n\r\n\r\n.warningText{\r\n  color: red;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n\r\n\r\nbutton{\r\n  margin-top:20px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h1>Register</h1>\n  <a routerLink=\"/login\"><button class=\"btn btn-primary\">Link To Login Page</button></a>\n  <br>\n  <a routerLink=\"/home\"><button class=\"btn btn-primary\">Link to Homepage</button></a>\n  <p>Please fill in this form to create an account.</p>\n  <hr>\n\n  <label><b>Username</b></label>\n  <input [(ngModel)]=\"username\"\n         type=\"text\"\n         placeholder=\"Username\"\n         class=\"form-control\"\n         required/>\n  <div class=\"warningText\" *ngIf='username === undefined || username.length < 1'> Username Cannot Be Empty</div>\n\n  <label><b>Password</b></label>\n  <input [(ngModel)]=\"password\"\n         type=\"password\"\n         placeholder=\"Password\"\n         class=\"form-control\"\n         required/>\n  <div class=\"warningText\" *ngIf='password=== undefined || password.length < 1'> Password Cannot Be Empty</div>\n  <label><b>Verify Password</b></label>\n  <input [(ngModel)]=\"password2\"\n         type=\"password\"\n         placeholder=\"Verify Password\"\n         class=\"form-control\"\n         required/>\n  <div class=\"warningText\" *ngIf='password != password2'> Passwords Must Match</div>\n\n  <button (click)=\"register(username, password, password2)\"\n          class=\"btn btn-primary btn-block\">\n    Register\n  </button>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, service) {
        this.router = router;
        this.service = service;
    }
    RegisterComponent.prototype.register = function (username, password, password2) {
        var _this = this;
        if (username === undefined || username.length < 1 ||
            password === undefined || password.length < 1 ||
            password != password2) {
            alert("One or more fields needs to be fixed (Follow the instructions in red)");
        }
        else {
            this.service.findUserByUsername(username).then(function (response) {
                if (response === null) {
                    _this.service
                        .createUser(username, password)
                        .then(function () {
                        return _this.router.navigate(['profile']);
                    });
                }
                else {
                    alert("This Username has been taken already!");
                }
            });
        }
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserServiceClient"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/section-list/section-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/section-list/section-list.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type=text], input[type=password] {\r\n  width: 100%;\r\n  padding: 15px;\r\n  margin: 5px 0 10px 0;\r\n  display: inline-block;\r\n  border: none;\r\n  background: #f1f1f1;\r\n}\r\n\r\ninput[type=text]:focus, input[type=password]:focus {\r\n  background-color: #ddd;\r\n  outline: none;\r\n}\r\n\r\n.warningText{\r\n  color: red;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.card-body{\r\n  box-shadow: 5px 5px black;\r\n  height: 150px;\r\n  background-color: lightblue;\r\n}\r\n"

/***/ }),

/***/ "./src/app/section-list/section-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/section-list/section-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link   rel=\"stylesheet\"\n        type=\"text/css\"\n        href=\"../../assets/dist/css/bootstrap.css\"/>\n<div class=\"container-fluid\">\n  <h1>Sections for course: {{courseId}}</h1>\n  <a routerLink=\"/home\"><button class=\"btn btn-primary\">Home</button></a>\n  <br>\n  <br>\n  <div *ngIf=\"role == 'admin'\">\n  <input type='text' [(ngModel)]=\"sectionName\"\n         placeholder=\"Section Name\"\n         class=\"form-control\">\n    <div class=\"warningText\" *ngIf='sectionName.length < 1'> Section Name Cannot Be Empty</div>\n  <input type='text' [(ngModel)]=\"seats\"\n         placeholder=\"Seats available\"\n         class=\"form-control\">\n    <div class=\"warningText\" *ngIf='seats.length < 1'> Seats Cannot Be Empty</div>\n    <div class=\"warningText\" *ngIf='seatsNotCorrect()'> Seats Must Be A Number Greater Than 0</div>\n  <button (click)=\"createSection(sectionName, seats)\" class=\"btn btn-success btn-block\">\n    Add Section\n  </button>\n    <br>\n  </div>\n  <div *ngIf=\"role == ''\"><p>Please login to enroll in a section!</p><br></div>\n  <div class=\"row\">\n    <div *ngFor=\"let section of sections\" class=\"col-sm-3\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <h2 class=\"card-title\">{{section.name}} </h2>\n          <p> {{section.currentSeats}} Seats Left</p>\n          <button *ngIf=\"enrolledSection == undefined && section.currentSeats > 0\n          && role =='student'\" (click)=\"enroll(section)\"\n                  class=\" btn btn-primary\">Enroll</button>\n          <button *ngIf=\"section._id == enrolledId\" (click)=\"unroll(section)\"\n                  class=\" btn btn-danger\">Unroll</button>\n          <button *ngIf=\"role=='admin'\" (click)=\"deleteSection(section._id)\"\n                  class=\" btn btn-danger\">Delete Section</button>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/section-list/section-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/section-list/section-list.component.ts ***!
  \********************************************************/
/*! exports provided: SectionListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionListComponent", function() { return SectionListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_section_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/section.service.client */ "./src/app/services/section.service.client.ts");
/* harmony import */ var _services_enrollment_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/enrollment.service.client */ "./src/app/services/enrollment.service.client.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SectionListComponent = /** @class */ (function () {
    function SectionListComponent(userService, sectionService, enrollmentService, router, route) {
        this.userService = userService;
        this.sectionService = sectionService;
        this.enrollmentService = enrollmentService;
        this.router = router;
        this.route = route;
        this.sectionName = '';
        this.seats = '';
        this.role = '';
        this.courseId = '';
        this.enrolledSection = undefined;
        this.enrolledId = undefined;
        this.sections = [];
        this.userId = '';
    }
    SectionListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService
            .profile()
            .then(function (user) {
            _this.userId = user._id;
            _this.role = user.role;
            _this.route.params.subscribe(function (params) {
                _this.courseId = params['courseId'];
                _this.loadSections(params['courseId']);
            });
        });
    };
    SectionListComponent.prototype.deleteSection = function (sectionId) {
        var _this = this;
        if (this.role == 'admin') {
            this.sectionService.deleteSectionById(sectionId).then(function () {
                _this.sections = _this.sections.filter(function (section) { return section._id != sectionId; });
            });
        }
    };
    SectionListComponent.prototype.loadSections = function (courseId) {
        var _this = this;
        this.courseId = courseId;
        this
            .sectionService
            .findSectionsForCourse(courseId)
            .then(function (sections) {
            _this.sections = sections;
            _this.getEnrolledSections();
        });
    };
    SectionListComponent.prototype.getEnrolledSections = function () {
        var _this = this;
        this.enrollmentService.findSectionsForStudent(this.userId).then(function (enrollments) {
            _this.enrolledSection = undefined;
            _this.enrolledId = undefined;
            enrollments.map(function (enrollment) {
                _this.sections.map(function (section) {
                    if (enrollment.section._id == section._id) {
                        _this.enrolledSection = section;
                        _this.enrolledId = section._id;
                    }
                });
            });
        });
    };
    SectionListComponent.prototype.seatsNotCorrect = function () {
        return (isNaN(Number(this.seats)) || Number(this.seats) <= 0);
    };
    SectionListComponent.prototype.createSection = function (sectionName, seats) {
        var _this = this;
        if (sectionName == '' || seats == '') {
            alert('Both Fields Must not be Empty');
        }
        else if (isNaN(Number(seats))) {
            alert('Seats Must be A Number');
        }
        else if (Number(seats) <= 0) {
            alert('Seats Must Be Greater than Zero');
        }
        else {
            this
                .sectionService
                .createSection(this.courseId, sectionName, seats)
                .then(function () {
                _this.loadSections(_this.courseId);
            });
        }
    };
    SectionListComponent.prototype.enroll = function (section) {
        var _this = this;
        // alert(section._id);
        if (this.userId != '') {
            this.enrollmentService
                .enrollStudentInSection(section._id, this.userId)
                .then(function (response) {
                _this.router.navigate(['profile']);
            });
        }
    };
    SectionListComponent.prototype.unroll = function (section) {
        var _this = this;
        this.enrollmentService.deleteEnrollment(this.enrolledId, this.userId).then(function () {
            _this.loadSections(_this.courseId);
        });
    };
    SectionListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-section-list',
            template: __webpack_require__(/*! ./section-list.component.html */ "./src/app/section-list/section-list.component.html"),
            styles: [__webpack_require__(/*! ./section-list.component.css */ "./src/app/section-list/section-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_4__["UserServiceClient"],
            _services_section_service_client__WEBPACK_IMPORTED_MODULE_2__["SectionServiceClient"],
            _services_enrollment_service_client__WEBPACK_IMPORTED_MODULE_3__["EnrollmentServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], SectionListComponent);
    return SectionListComponent;
}());



/***/ }),

/***/ "./src/app/services/course.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/course.service.client.ts ***!
  \***************************************************/
/*! exports provided: CourseServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseServiceClient", function() { return CourseServiceClient; });
var CourseServiceClient = /** @class */ (function () {
    function CourseServiceClient() {
        this.COURSE_URL = 'https://webdev-zhao-huang-summer2018.herokuapp.com/api/course';
    }
    CourseServiceClient.prototype.findAllCourses = function () {
        return fetch(this.COURSE_URL)
            .then(function (response) { return response.json(); });
    };
    CourseServiceClient.prototype.findCourseById = function (courseId) {
        return fetch(this.COURSE_URL + '/' + courseId)
            .then(function (response) { return response.json(); });
    };
    CourseServiceClient.prototype.findModulesForCourse = function (courseId) {
        return fetch('https://webdev-zhao-huang-summer2018.herokuapp.com/api/course/'
            + courseId + '/module')
            .then(function (response) { return response.json(); });
    };
    return CourseServiceClient;
}());



/***/ }),

/***/ "./src/app/services/enrollment.service.client.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/enrollment.service.client.ts ***!
  \*******************************************************/
/*! exports provided: EnrollmentServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnrollmentServiceClient", function() { return EnrollmentServiceClient; });
var EnrollmentServiceClient = /** @class */ (function () {
    function EnrollmentServiceClient() {
        this.ENROLLMENT_URL = 'https://webdev-huang-nodejs-s18.herokuapp.com/api/student/STUDENTID/section';
    }
    EnrollmentServiceClient.prototype.enrollStudentInSection = function (sectionId, studentId) {
        var url = this.ENROLLMENT_URL.replace('STUDENTID', studentId) + '/' + sectionId + '/enroll';
        return fetch(url, {
            method: 'post',
            credentials: 'include'
        });
    };
    EnrollmentServiceClient.prototype.findSectionsForStudent = function (studentId) {
        var url = this.ENROLLMENT_URL.replace('STUDENTID', studentId);
        return fetch(url, {
            credentials: 'include'
        })
            .then(function (response) { return response.json(); });
    };
    EnrollmentServiceClient.prototype.deleteEnrollment = function (sectionId, studentId) {
        var url = this.ENROLLMENT_URL.replace('STUDENTID', studentId) + '/' + sectionId;
        return fetch(url, {
            method: 'delete',
            credentials: 'include'
        });
    };
    return EnrollmentServiceClient;
}());



/***/ }),

/***/ "./src/app/services/lesson.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/lesson.service.client.ts ***!
  \***************************************************/
/*! exports provided: LessonServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonServiceClient", function() { return LessonServiceClient; });
var LessonServiceClient = /** @class */ (function () {
    function LessonServiceClient() {
    }
    LessonServiceClient.prototype.findLessonsForModule = function (courseId, moduleId) {
        return fetch('https://webdev-zhao-huang-summer2018.herokuapp.com/api/course/' + courseId + '/module/' + moduleId + '/lesson')
            .then(function (response) { return response.json(); });
    };
    return LessonServiceClient;
}());



/***/ }),

/***/ "./src/app/services/module.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/module.service.client.ts ***!
  \***************************************************/
/*! exports provided: ModuleServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleServiceClient", function() { return ModuleServiceClient; });
var ModuleServiceClient = /** @class */ (function () {
    function ModuleServiceClient() {
        this.MODULE_URL = 'https://webdev-zhao-huang-summer2018.herokuapp.com/api/course/COURSE_ID/module';
        this.MODULEBYID_URL = 'https://webdev-zhao-huang-summer2018.herokuapp.com/api/module';
    }
    ModuleServiceClient.prototype.findModulesForCourse = function (courseId) {
        return fetch(this.MODULE_URL.replace('COURSE_ID', courseId))
            .then(function (response) { return response.json(); });
    };
    ModuleServiceClient.prototype.findModuleById = function (moduleId) {
        return fetch(this.MODULEBYID_URL + '/' + moduleId)
            .then(function (response) { return response.json(); });
    };
    return ModuleServiceClient;
}());



/***/ }),

/***/ "./src/app/services/section.service.client.ts":
/*!****************************************************!*\
  !*** ./src/app/services/section.service.client.ts ***!
  \****************************************************/
/*! exports provided: SectionServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionServiceClient", function() { return SectionServiceClient; });
var SectionServiceClient = /** @class */ (function () {
    function SectionServiceClient() {
        this.SECTION_URL = 'https://webdev-huang-nodejs-s18.herokuapp.com/api/course/COURSEID/section';
        this.CRUD_URL = 'https://webdev-huang-nodejs-s18.herokuapp.com/api/section/SECTIONID';
    }
    SectionServiceClient.prototype.findSectionsForCourse = function (courseId) {
        return fetch(this.SECTION_URL.replace('COURSEID', courseId))
            .then(function (response) { return response.json(); });
    };
    SectionServiceClient.prototype.findSectionById = function (sectionId) {
        return fetch(this.CRUD_URL.replace('SECTIONID', sectionId))
            .then(function (response) { return response.json(); });
    };
    SectionServiceClient.prototype.updateSectionById = function (sectionId, section) {
        return fetch(this.CRUD_URL.replace('SECTIONID', sectionId), {
            method: 'post',
            body: JSON.stringify(section),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    SectionServiceClient.prototype.deleteSectionById = function (sectionId) {
        return fetch(this.CRUD_URL.replace('SECTIONID', sectionId), {
            method: 'delete',
            credentials: 'include'
        });
    };
    SectionServiceClient.prototype.createSection = function (courseId, name, seats) {
        var currentSeats = seats;
        var maxSeats = seats;
        var section = { courseId: courseId, name: name, seats: seats, currentSeats: currentSeats, maxSeats: maxSeats };
        return fetch(this.SECTION_URL.replace('COURSEID', courseId), {
            method: 'post',
            body: JSON.stringify(section),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    return SectionServiceClient;
}());



/***/ }),

/***/ "./src/app/services/user.service.client.ts":
/*!*************************************************!*\
  !*** ./src/app/services/user.service.client.ts ***!
  \*************************************************/
/*! exports provided: UserServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserServiceClient", function() { return UserServiceClient; });
var UserServiceClient = /** @class */ (function () {
    function UserServiceClient() {
        this.DB_URL = "https://webdev-huang-nodejs-s18.herokuapp.com";
    }
    UserServiceClient.prototype.findUserByUsername = function (username) {
        return fetch(this.DB_URL + '/api/username/' + username)
            .then(function (response) {
            return response.json();
        });
    };
    UserServiceClient.prototype.findUserById = function (userId) {
        return fetch(this.DB_URL + '/api/user/' + userId)
            .then(function (response) {
            return response.json();
        });
    };
    UserServiceClient.prototype.updateUser = function (user) {
        return fetch(this.DB_URL + '/api/profile', {
            body: JSON.stringify(user),
            credentials: 'include',
            method: 'put',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    UserServiceClient.prototype.login = function (username, password) {
        var credentials = {
            username: username,
            password: password
        };
        return fetch(this.DB_URL + '/api/login', {
            method: 'post',
            body: JSON.stringify(credentials),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(function (response) {
            return response.json();
        });
    };
    UserServiceClient.prototype.logout = function () {
        return fetch(this.DB_URL + '/api/logout', {
            method: 'post',
            credentials: 'include'
        });
    };
    UserServiceClient.prototype.profile = function () {
        return fetch(this.DB_URL + '/api/profile', {
            credentials: 'include',
        })
            .then(function (response) {
            return response.json();
        });
    };
    UserServiceClient.prototype.createUser = function (username, password) {
        var user = {
            username: username,
            password: password,
            role: 'student'
        };
        return fetch(this.DB_URL + '/api/register', {
            body: JSON.stringify(user),
            credentials: 'include',
            method: 'post',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    return UserServiceClient;
}());



/***/ }),

/***/ "./src/app/services/widget.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/widget.service.client.ts ***!
  \***************************************************/
/*! exports provided: WidgetServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetServiceClient", function() { return WidgetServiceClient; });
var WidgetServiceClient = /** @class */ (function () {
    function WidgetServiceClient() {
    }
    WidgetServiceClient.prototype.findWidgetsForLesson = function (courseId, moduleId, lessonId) {
        return fetch('https://webdev-zhao-huang-summer2018.herokuapp.com/api/course/'
            + courseId + '/module/' + moduleId + '/lesson/' + lessonId + '/widget')
            .then(function (response) { return response.json(); });
    };
    return WidgetServiceClient;
}());



/***/ }),

/***/ "./src/app/white-board/white-board.component.css":
/*!*******************************************************!*\
  !*** ./src/app/white-board/white-board.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".linkButton{\r\n  margin-left: 10px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/white-board/white-board.component.html":
/*!********************************************************!*\
  !*** ./src/app/white-board/white-board.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h1>\n    White Board\n  </h1>\n  <hr>\n  <div *ngIf='userId == \"\"'>\n  <a routerLink=\"/login\"><button class=\"btn btn-primary\">Login</button></a>\n  <a routerLink=\"/register\"><button class=\"btn btn-primary linkButton\">Register</button></a>\n  </div>\n  <div *ngIf='userId != \"\"'>\n    <p>Welcome {{this.username}}!</p>\n    <a routerLink=\"/profile\"><button class=\"btn btn-primary\">Profile</button></a>\n    <a class=\"logout\" (click)=\"logout()\"><button class=\"btn btn-danger linkButton\">Logout</button></a>\n  </div>\n  <br>\n  <app-course-grid></app-course-grid>\n</div>\n"

/***/ }),

/***/ "./src/app/white-board/white-board.component.ts":
/*!******************************************************!*\
  !*** ./src/app/white-board/white-board.component.ts ***!
  \******************************************************/
/*! exports provided: WhiteBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhiteBoardComponent", function() { return WhiteBoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_section_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/section.service.client */ "./src/app/services/section.service.client.ts");
/* harmony import */ var _services_enrollment_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/enrollment.service.client */ "./src/app/services/enrollment.service.client.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WhiteBoardComponent = /** @class */ (function () {
    function WhiteBoardComponent(service, sectionService, enrollmentService, router) {
        this.service = service;
        this.sectionService = sectionService;
        this.enrollmentService = enrollmentService;
        this.router = router;
        this.userId = "";
    }
    WhiteBoardComponent.prototype.logout = function () {
        var _this = this;
        this.service
            .logout()
            .then(function () {
            return _this.router.navigate(['login']);
        });
    };
    WhiteBoardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service
            .profile()
            .then(function (user) {
            _this.username = user.username;
            if (user._id != null && user._id != undefined) {
                _this.userId = user._id;
            }
        });
    };
    WhiteBoardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-white-board',
            template: __webpack_require__(/*! ./white-board.component.html */ "./src/app/white-board/white-board.component.html"),
            styles: [__webpack_require__(/*! ./white-board.component.css */ "./src/app/white-board/white-board.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_4__["UserServiceClient"],
            _services_section_service_client__WEBPACK_IMPORTED_MODULE_2__["SectionServiceClient"],
            _services_enrollment_service_client__WEBPACK_IMPORTED_MODULE_3__["EnrollmentServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], WhiteBoardComponent);
    return WhiteBoardComponent;
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
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\huang\Desktop\WebDev2018\angularjs-huang-zhao-summer18\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map