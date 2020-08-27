(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n    <app-toolbar></app-toolbar>\n    <router-outlet></router-outlet>\n   \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/bottom/bottom.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bottom/bottom.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"bottom\" fxLayout=\"row\" fxLayoutGap=\"30px\" fxLayoutAlign=\"start center\" fxLayoutAlign.lt-md=\"center center\"> \n    <div fxFlex=\"17\" fxFlex.lt-md=\"0\"></div>\n    <button  routerLink=\"/mainLoad\"   style=\"color: white;height: 30px;\" color=\"accent\" mat-raised-button>BACK</button> \n   \n    <button  (click)=\"verify()\" style=\"color: white;height: 30px;\" color=\"accent\" mat-raised-button>SAVE & PUBLISH</button> \n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/course/course.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/course/course.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main\" fxLayout=\"row\">\n    <div  fxFlex=\"100\" fxFlex.gt-md=\"50\">\n        <form [formGroup]=\"detailedForm\" (ngSubmit)=\"formSubmit()\" class=\"main1\" fxLayout=\"column\" fxLayoutGap=\"10px\">\n            <div>\n                <h1 >Add Course Details</h1>\n                <mat-divider></mat-divider>\n            </div>\n            <h4 style=\"margin-top: 6px;margin-bottom: 0px;\">COURSE 1</h4>\n            <div fxLayout=\"column\" fxLayoutGap=\"0px\" >\n                <h5 style=\"margin: 0px;font-size: 12px;\"> Course Name</h5>\n                <div style=\"font-size: 1px;\">\n                  <mat-form-field  appearance=\"outline\" style=\"font-size: small;margin: 0px;width: 100%;\">\n                    <input formControlName=\"course_name\" style=\"border-top: 0px;\" matInput placeholder=\"Add course name\">\n                 </mat-form-field>\n                </div>\n                <span style=\"color: red;font-size: 10px;\" *ngIf=\"cname\">please enter a course name</span>\n            </div>\n            <div fxLayout=\"column\" fxLayoutGap=\"10px\">\n                <h5 style=\"margin: 0px;font-size: 12px;\"> Aircraft Type </h5>\n                <mat-radio-group formControlName=\"aircraft_type\" aria-label=\"Select an option\" fxLayoutGap=\"20px\"> \n                    <mat-radio-button value=\"multi_rotar\"> Multi Rotar </mat-radio-button>\n                    <mat-radio-button value=\"fixed_wing\"> Fixed Wing </mat-radio-button>\n                  </mat-radio-group>\n                  <span style=\"color: red;font-size: 10px;\" *ngIf=\"ctype\">please select type</span>\n            </div>\n            <router-outlet name=\"expand\"></router-outlet>\n            <div fxLayout fxLayoutAlign=\"start center\" style=\"height: 30px;\">\n                <mat-icon color=\"accent\">add_circle</mat-icon>\n                <h6 style=\"color: rgb(62, 179, 7);font-size: 10px;\" (click)=\"add_batch()\" >ADD ANOTHER COURSE DATE</h6>\n            </div>\n            \n                <div fxLayout=\"column\">\n                    <h4 style=\"margin-bottom: 1px;\">Course Details</h4>\n                    <mat-form-field appearance=\"outline\" color=\"accent\">\n                        <mat-label>Add details</mat-label>\n                        <textarea formControlName=\"course_details\" matInput></textarea>\n                      </mat-form-field>\n                   </div>\n        </form>\n       \n    <app-bottom></app-bottom>\n        \n    </div>\n    <div  fxFlex=\"0\" fxFlex.gt-md=\"50\" style=\"background-image: url('../../assets/bg_2.png');height: 100%;width: 100%;background-color: #F5F6FA;background-position: center;background-repeat: no-repeat;background-size: cover;\">\n \n    </div>\n </div>\n \n ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/course/expandable/expandable.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/course/expandable/expandable.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [formGroup]=\"form\" *ngFor=\"let form of expandFormArr;let i = index\">            \n    <mat-accordion>\n        <mat-expansion-panel hideToggle>\n           <mat-expansion-panel-header #panelH (click)=\"panelH._toggle()\">\n            <mat-panel-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                <div fxLayout=\"row\" fxLayoutGap=\"15px\">\n                    <h5 style=\"margin: 0px;font-size: 12px;\"> {{ \"BATCH\" + (i+1) }}</h5>\n                    <h5 style=\"margin: 0px;font-size: 11px;\"> START DATE </h5>\n                    <h5 style=\"margin: 0px;font-size: 11px;\"> END DATE </h5>\n                </div>\n                <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n                    <div>\n                        <button mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"Example icon-button with a menu\">\n                            <mat-icon>more_vert</mat-icon>\n                          </button>\n                          <mat-menu #menu=\"matMenu\">\n                            <button (click)=\"delete(i)\" mat-menu-item>\n                                <mat-icon color=\"warn\">delete</mat-icon>\n                              <span>Delete</span>\n                            </button>\n                            <button (click)=\"reset(i)\" mat-menu-item >\n                                <mat-icon color=\"accent\">rotate_right</mat-icon>\n                              <span>Reset</span>\n                            </button>\n                          </mat-menu>\n                    </div>\n                    <mat-icon color=\"accent\" matDatepickerToggleIcon (click)=\"panelH._toggle()\">keyboard_arrow_down</mat-icon>\n                </div>                \n            </mat-panel-title>\n          </mat-expansion-panel-header>\n          <div >\n               <div fxLayout=\"row\" fxLayoutAlign=\"start center\"  >\n                 <div fxFlex=\"13\"></div>\n                <div fxLayout=\"column\">\n                  <h4 style=\"font-size: 12px;margin: 0px;\">Course Cost(Ex GST)</h4>\n                  <mat-form-field  class=\"Costform\" color=\"accent\"  appearance=\"outline\" >\n                      <input formControlName=\"cost\" style=\"border-top: 0px;\" matInput placeholder=\"Rs.\">\n                   </mat-form-field>\n                   <span style=\"color: red;font-size: 10px;\" *ngIf=\"ccost\">please enter cost</span>\n                 </div>\n               </div>\n               <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\"10px\">\n               \n                <div>\n                    <h4 style=\"font-size: 12px;margin: 0px;\">Course Languages</h4>\n                    <mat-form-field style=\"font-size: 9px;\" appearance=\"outline\" color=\"accent\">\n                      <mat-label>select languges</mat-label>\n                      <mat-select formControlName=\"lng\" multiple>\n                        <mat-option *ngFor=\"let language of lngs\" [value]=\"language\">{{language}}</mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                  <div fxLayout=\"column\" >\n                    <h4 style=\"font-size: 12px;margin: 0px;\">Course Location</h4>\n                  <mat-form-field  style=\"font-size: 9px;\" appearance=\"outline\" color=\"accent\">\n                    <mat-label>Select City</mat-label>\n                    <mat-select formControlName=\"city\">\n                      <mat-option  *ngFor=\"let city of cits\" [value]=\"city\">\n                        {{city}}\n                      </mat-option>\n                    </mat-select>\n                  </mat-form-field>\n                  <span style=\"color: red;font-size: 10px;\" *ngIf=\"ccity\">please select a city</span>\n                   </div>\n\n               </div>\n               <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutAlign=\"start center\" fxLayoutGap=\"20px\">\n                   <div>\n                       <p>is this a weekend course</p>\n                   </div>\n                   <div>\n                    <mat-radio-group formControlName=\"weekend\" aria-label=\"Select an option\" fxLayoutGap=\"20px\"> \n                        <mat-radio-button value=\"yes\"> YES </mat-radio-button>\n                        <mat-radio-button value=\"no\"> NO </mat-radio-button>\n                      </mat-radio-group>\n                   </div>\n               </div>\n          </div>\n        </mat-expansion-panel>\n    </mat-accordion>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/toolbar/toolbar.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/toolbar/toolbar.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"topbar\" fxLayout=\"column\">\n    <div  style=\"font-size: 40px;\">\n        <span fxFlex=\"6\"></span>\n        <span style=\"color: #155FE1;\"><b>TROPO</b></span>\n        <span style=\"color: #03C772;\"><b>GO</b></span>\n    </div>\n    <mat-progress-bar mode=\"determinate\" [value]=\"load\" color=\"accent\" style=\"width:100%;height: 8px;position: sticky;top:0;z-index: 1000;\" ></mat-progress-bar>\n</div>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/upload/main-upload/main-upload.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/upload/main-upload/main-upload.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"column\" fxLayoutGap=\"30px\" fxLayoutGap.lt-md=\"20px\" fxLayoutGap.lt-sm=\"10px\">\n   <div *ngFor=\"let category of categories;let i=index;\" fxLayout=\"column\" >\n      <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n          <div fxLayout=\"row\" fxLayoutGap=\"10px\" style=\"height: 30px;\">\n             <h5>{{category}}</h5>\n             <h5 *ngIf=\"i!==2\" style=\"font-size: 12px;font-weight: 100;\">(Optional)</h5>\n             <h5 *ngIf=\"i==2\" [ngClass]=\"{'alert': compulsory}\"  style=\"font-size: 12px;font-weight: 100;\">(Required)</h5>\n          </div>\n          <div>\n                <button (click)=\"upload(i)\" mat-button style=\"color: #147DF6;font-size: 12px;\">UPLOAD</button>\n          </div>\n      </div>\n      <mat-divider></mat-divider><div style=\"padding: 8px;color: red;\" *ngIf=\"compulsory && i===2\">this is Required</div>\n      <mat-list  fxLayout=\"column\" >\n         <div  *ngFor=\"let item of itemsArr[i];let in=index\" >\n            <div fxLayout >\n              <mat-list-item > {{item}} </mat-list-item>\n              <mat-icon (click)=\"delete(i,in)\" color=\"warn\">delete</mat-icon>\n            </div>\n           \n           <mat-divider></mat-divider>\n         </div>\n       \n     </mat-list>\n  </div>\n  \n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/upload/upload.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/upload/upload.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main\" fxLayout=\"row\">\n   <div  fxFlex=\"100\" fxFlex.gt-md=\"50\" >\n       <div class=\"main1\">\n        <div style=\"margin-top: 0px;\" fxLayout=\"column\">\n            <h1  style=\"margin: 0px;text-align: center;\">Add some details of your training institute</h1>\n           <div fxLayout=\"column\">\n               <h5>INSTITUTE LOGO</h5>\n               <div fxLayout>\n                 <img src=\"../../assets/ic_logoiid.png\">\n                 <button mat-button color=\"accent\">CHANGE</button>\n               </div>\n           </div>\n           <div fxLayout=\"column\" fxLayoutGap=\"1px\" >\n                <h5> NAME OF THE INSTITUTE</h5>\n                <mat-form-field style=\"width: 100%;border: 0px;padding: 0px;\" appearance=\"outline\" >\n                   <input style=\"border-top: 0px;\" matInput placeholder=\"Name of the institute\">\n                </mat-form-field>\n           </div>\n           <div>\n              <router-outlet name=\"uploads\"></router-outlet>\n           </div>\n           \n        </div> \n       </div>\n\n       <div class=\"bottom\">\n         <button  (click)=\"next()\" style=\"color: white;height: 30px;\" color=\"accent\" mat-raised-button>NEXT</button>\n       </div>\n         \n      \n      \n    \n   </div>\n   <div fxFlex=\"0\" fxFlex.gt-md=\"50\" style=\"background-image: url('../../assets/bg_1.png');height: 100%;width: 100%;background-color: #F5F6FA;\">\n\n   </div>\n   \n</div>\n\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'tropoGo';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _course_course_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./course/course.component */ "./src/app/course/course.component.ts");
/* harmony import */ var _upload_upload_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./upload/upload.component */ "./src/app/upload/upload.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm2015/divider.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm2015/progress-bar.js");
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./toolbar/toolbar.component */ "./src/app/toolbar/toolbar.component.ts");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _upload_main_upload_main_upload_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./upload/main-upload/main-upload.component */ "./src/app/upload/main-upload/main-upload.component.ts");
/* harmony import */ var _bottom_bottom_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./bottom/bottom.component */ "./src/app/bottom/bottom.component.ts");
/* harmony import */ var _course_expandable_expandable_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./course/expandable/expandable.component */ "./src/app/course/expandable/expandable.component.ts");
/* harmony import */ var _service_data_storage_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./service/data-storage.service */ "./src/app/service/data-storage.service.ts");


























const allRoutes = [
    { path: '', redirectTo: '/mainLoad', pathMatch: 'full' },
    { path: 'mainLoad', component: _upload_upload_component__WEBPACK_IMPORTED_MODULE_6__["UploadComponent"], children: [
            { path: '', component: _upload_main_upload_main_upload_component__WEBPACK_IMPORTED_MODULE_22__["MainUploadComponent"], outlet: 'uploads' },
            { path: '', component: _bottom_bottom_component__WEBPACK_IMPORTED_MODULE_23__["BottomComponent"], outlet: 'buttons' }
        ] },
    { path: 'formPage', component: _course_course_component__WEBPACK_IMPORTED_MODULE_5__["CourseComponent"], children: [
            { path: '', component: _course_expandable_expandable_component__WEBPACK_IMPORTED_MODULE_24__["ExpandableComponent"], outlet: 'expand' },
            { path: '', component: _bottom_bottom_component__WEBPACK_IMPORTED_MODULE_23__["BottomComponent"], outlet: 'buttons' }
        ] }
];
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _upload_upload_component__WEBPACK_IMPORTED_MODULE_6__["UploadComponent"],
            _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_15__["ToolbarComponent"],
            _course_course_component__WEBPACK_IMPORTED_MODULE_5__["CourseComponent"],
            _upload_main_upload_main_upload_component__WEBPACK_IMPORTED_MODULE_22__["MainUploadComponent"],
            _bottom_bottom_component__WEBPACK_IMPORTED_MODULE_23__["BottomComponent"],
            _course_expandable_expandable_component__WEBPACK_IMPORTED_MODULE_24__["ExpandableComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_21__["RouterModule"].forRoot(allRoutes),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__["MatDividerModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__["MatProgressBarModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__["MatRadioModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIconModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"]
        ],
        providers: [_service_data_storage_service__WEBPACK_IMPORTED_MODULE_25__["DataStorageService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/bottom/bottom.component.css":
/*!*********************************************!*\
  !*** ./src/app/bottom/bottom.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bottom {\n    text-align: center;\n    position: -webkit-sticky;\n    position: sticky;\n    z-index: 2000;\n    bottom: 0;\n    font-size: 40px;\n    height: 40px;\n    background-color: white;\n    padding-right: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm90dG9tL2JvdHRvbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLHdCQUFnQjtJQUFoQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFNBQVM7SUFDVCxlQUFlO0lBQ2YsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9ib3R0b20vYm90dG9tLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm90dG9tIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB6LWluZGV4OiAyMDAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/bottom/bottom.component.ts":
/*!********************************************!*\
  !*** ./src/app/bottom/bottom.component.ts ***!
  \********************************************/
/*! exports provided: BottomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomComponent", function() { return BottomComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_data_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/data-storage.service */ "./src/app/service/data-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let BottomComponent = class BottomComponent {
    constructor(data, router) {
        this.data = data;
        this.router = router;
    }
    ngOnInit() {
        this.sb = false;
        this.data.componentEmitter.subscribe(comp => {
            comp === "upload" ? this.sb = false : this.sb = true;
            console.log(this.sb);
        });
        //this.active.snapshot._routerState._root.value.children[0].component.name === "CourseComponent" ? this.sb=true:this.sb=false;
    }
    verify() {
        this.data.formVerification();
    }
};
BottomComponent.ctorParameters = () => [
    { type: _service_data_storage_service__WEBPACK_IMPORTED_MODULE_2__["DataStorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
BottomComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bottom',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bottom.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/bottom/bottom.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bottom.component.css */ "./src/app/bottom/bottom.component.css")).default]
    })
], BottomComponent);



/***/ }),

/***/ "./src/app/course/course.component.css":
/*!*********************************************!*\
  !*** ./src/app/course/course.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main{\n    width: 100%;\n    height: 100%;\n}\n.main1{\n    padding: 10px 80px 0px 80px;\n    \n}\n@media(max-width: 425px){\n    .main1{\n        padding : 10px;\n    }\n    h1{\n        font-size: 20px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291cnNlL2NvdXJzZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFDQTtJQUNJLDJCQUEyQjs7QUFFL0I7QUFHQTtJQUNJO1FBQ0ksY0FBYztJQUNsQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY291cnNlL2NvdXJzZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW57XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuLm1haW4xe1xuICAgIHBhZGRpbmc6IDEwcHggODBweCAwcHggODBweDtcbiAgICBcbn1cblxuXG5AbWVkaWEobWF4LXdpZHRoOiA0MjVweCl7XG4gICAgLm1haW4xe1xuICAgICAgICBwYWRkaW5nIDogMTBweDtcbiAgICB9XG4gICAgaDF7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/course/course.component.ts":
/*!********************************************!*\
  !*** ./src/app/course/course.component.ts ***!
  \********************************************/
/*! exports provided: CourseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseComponent", function() { return CourseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_data_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/data-storage.service */ "./src/app/service/data-storage.service.ts");



let CourseComponent = class CourseComponent {
    constructor(data) {
        this.data = data;
    }
    ngOnInit() {
        this.detailedForm = this.data.detailsForm;
        this.data.verifyEmitter.subscribe((req) => {
            console.log(req);
            this.cname = !req[0];
            this.ctype = !req[1];
        });
    }
    formSubmit() {
    }
    add_batch() {
        this.data.add_batch();
    }
};
CourseComponent.ctorParameters = () => [
    { type: _service_data_storage_service__WEBPACK_IMPORTED_MODULE_2__["DataStorageService"] }
];
CourseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-course',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./course.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/course/course.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./course.component.css */ "./src/app/course/course.component.css")).default]
    })
], CourseComponent);



/***/ }),

/***/ "./src/app/course/expandable/expandable.component.css":
/*!************************************************************!*\
  !*** ./src/app/course/expandable/expandable.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h5{\n    font-weight: 400;\n}\n\n.Costform.mat-form-field.wrapper{\n    padding-bottom: 0px;\n}\n\n@media(max-width:425px){\n    mat-panel-title.h5{\n        font-size: 8px;\n    }\n}\n\n@media(max-width:768px){\n    div.h5{\n        font-size: 9px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291cnNlL2V4cGFuZGFibGUvZXhwYW5kYWJsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0k7UUFDSSxjQUFjO0lBQ2xCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGNBQWM7SUFDbEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvdXJzZS9leHBhbmRhYmxlL2V4cGFuZGFibGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImg1e1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5Db3N0Zm9ybS5tYXQtZm9ybS1maWVsZC53cmFwcGVye1xuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG5cbkBtZWRpYShtYXgtd2lkdGg6NDI1cHgpe1xuICAgIG1hdC1wYW5lbC10aXRsZS5oNXtcbiAgICAgICAgZm9udC1zaXplOiA4cHg7XG4gICAgfVxufVxuXG5AbWVkaWEobWF4LXdpZHRoOjc2OHB4KXtcbiAgICBkaXYuaDV7XG4gICAgICAgIGZvbnQtc2l6ZTogOXB4O1xuICAgIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/course/expandable/expandable.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/course/expandable/expandable.component.ts ***!
  \***********************************************************/
/*! exports provided: ExpandableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpandableComponent", function() { return ExpandableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_service_data_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/data-storage.service */ "./src/app/service/data-storage.service.ts");



let ExpandableComponent = class ExpandableComponent {
    constructor(data) {
        this.data = data;
        this.cits = [];
        this.lngs = [];
        this.expandFormArr = [];
    }
    ngOnInit() {
        this.cits = this.data.cities;
        this.lngs = this.data.languages;
        this.expandForm = this.data.expansionForm;
        this.expandFormArr = this.data.expansionFormArr;
        this.data.verifyEmitter.subscribe(req => {
            this.ccost = !req[2];
            this.ccity = !req[3];
            if (!req[2] || !req[3])
                this.setColor = true;
        });
    }
    delete(i) {
        this.data.delete(i);
    }
    reset(i) {
        this.data.reset(i);
    }
};
ExpandableComponent.ctorParameters = () => [
    { type: src_app_service_data_storage_service__WEBPACK_IMPORTED_MODULE_2__["DataStorageService"] }
];
ExpandableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-expandable',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./expandable.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/course/expandable/expandable.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./expandable.component.css */ "./src/app/course/expandable/expandable.component.css")).default]
    })
], ExpandableComponent);



/***/ }),

/***/ "./src/app/service/data-storage.service.ts":
/*!*************************************************!*\
  !*** ./src/app/service/data-storage.service.ts ***!
  \*************************************************/
/*! exports provided: DataStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataStorageService", function() { return DataStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let DataStorageService = class DataStorageService {
    constructor(ac) {
        this.ac = ac;
        this.cities = ["bangalore", "chennai", "hyderabad", "mumbai", "delhi"];
        this.languages = ["hindi", "english", "telugu"];
        this.expansionFormArr = [];
        this.items = [[], [], []];
        this.j = 0;
        this.requiredEmitter = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.verifyEmitter = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.componentEmitter = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.ac.events.subscribe(e => {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationStart"]) {
                e.url === "/mainLoad" ? this.componentEmitter.next("upload") : this.componentEmitter.next("form");
            }
        });
        this.expansionForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            lng: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            cost: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            weekend: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
        this.expansionFormArr.push(this.expansionForm);
        this.detailsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            course_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            aircraft_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            course_details: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    }
    add_batch() {
        this.expansionFormArr.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            lng: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            cost: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            weekend: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
        }));
        console.log(this.expansionFormArr);
        console.log(this.detailsForm);
    }
    reset(i) {
        this.expansionFormArr[i].reset({});
    }
    delete(i) {
        if (this.expansionFormArr.length > 1)
            this.expansionFormArr.splice(i, 1);
    }
    deleteFile(i, j) {
        this.items[i].splice(j, 1);
    }
    upload(i) {
        this.items[i].push("file" + this.j + ".pdf");
        this.j = this.j + 1;
    }
    formVerification() {
        this.detailsForm.get('course_name').valid ? this.name = true : this.name = false;
        this.detailsForm.get('aircraft_type').valid ? this.air = true : this.air = false;
        this.expansionForm.get('cost').valid ? this.cst = true : this.cst = false;
        this.expansionForm.get('city').valid ? this.cty = true : this.cty = false;
        this.verifyEmitter.next([this.name, this.air, this.cst, this.cty]);
    }
};
DataStorageService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
DataStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DataStorageService);



/***/ }),

/***/ "./src/app/toolbar/toolbar.component.css":
/*!***********************************************!*\
  !*** ./src/app/toolbar/toolbar.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n.topbar {\n    position: -webkit-sticky;\n    position: sticky;\n    z-index: 2000;\n    top: 0;\n    width: 100%;\n    background-color: white;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9vbGJhci90b29sYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUNJLHdCQUFnQjtJQUFoQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLE1BQU07SUFDTixXQUFXO0lBQ1gsdUJBQXVCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvdG9vbGJhci90b29sYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLnRvcGJhciB7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB6LWluZGV4OiAyMDAwO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/toolbar/toolbar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/toolbar/toolbar.component.ts ***!
  \**********************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_data_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/data-storage.service */ "./src/app/service/data-storage.service.ts");



let ToolbarComponent = class ToolbarComponent {
    constructor(data) {
        this.data = data;
    }
    ngOnInit() {
        this.data.componentEmitter.subscribe(comp => {
            comp === "upload" ? this.load = 40 : this.load = 80;
        });
    }
};
ToolbarComponent.ctorParameters = () => [
    { type: _service_data_storage_service__WEBPACK_IMPORTED_MODULE_2__["DataStorageService"] }
];
ToolbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-toolbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./toolbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/toolbar/toolbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./toolbar.component.css */ "./src/app/toolbar/toolbar.component.css")).default]
    })
], ToolbarComponent);



/***/ }),

/***/ "./src/app/upload/main-upload/main-upload.component.css":
/*!**************************************************************!*\
  !*** ./src/app/upload/main-upload/main-upload.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-list .mat-list-item{\n    font-size: 10px;\n    height: 18px;\n}\n\n.alert{\n    color:red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBsb2FkL21haW4tdXBsb2FkL21haW4tdXBsb2FkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFNBQVM7QUFDYiIsImZpbGUiOiJzcmMvYXBwL3VwbG9hZC9tYWluLXVwbG9hZC9tYWluLXVwbG9hZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1saXN0IC5tYXQtbGlzdC1pdGVte1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBoZWlnaHQ6IDE4cHg7XG59XG5cbi5hbGVydHtcbiAgICBjb2xvcjpyZWQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/upload/main-upload/main-upload.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/upload/main-upload/main-upload.component.ts ***!
  \*************************************************************/
/*! exports provided: MainUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainUploadComponent", function() { return MainUploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_service_data_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/data-storage.service */ "./src/app/service/data-storage.service.ts");



let MainUploadComponent = class MainUploadComponent {
    constructor(data) {
        this.data = data;
        this.itemsArr = [[], [], []];
        this.categories = ["INSTITUTE BROUCHER", "CERTIFICATIONS", "INSTITUTE GALLERY"];
    }
    ngOnInit() {
        this.itemsArr = this.data.items;
        this.data.requiredEmitter.subscribe(comp => {
            this.compulsory = comp;
        });
    }
    upload(i) {
        this.data.upload(i);
        this.compulsory = false;
    }
    delete(i, j) {
        this.data.deleteFile(i, j);
        console.log(i);
        console.log(j);
    }
};
MainUploadComponent.ctorParameters = () => [
    { type: src_app_service_data_storage_service__WEBPACK_IMPORTED_MODULE_2__["DataStorageService"] }
];
MainUploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main-upload',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main-upload.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/upload/main-upload/main-upload.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main-upload.component.css */ "./src/app/upload/main-upload/main-upload.component.css")).default]
    })
], MainUploadComponent);



/***/ }),

/***/ "./src/app/upload/upload.component.css":
/*!*********************************************!*\
  !*** ./src/app/upload/upload.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main{\n    width: 100%;\n    height: 100%;\n}\n.main1{\n    padding: 10px 80px 0px 80px;\n    \n}\n.main2{\n    background-image: url('bg_1.png');\n}\n.main1 h5{\n    font-size: 12px;\n}\n.bottom {\n    text-align: center;\n    position: -webkit-sticky;\n    position: sticky;\n    z-index: 2000;\n    bottom: 0;\n    font-size: 40px;\n    height: 40px;\n    background-color: white;\n    padding-right: 10px;\n    \n}\n@media(max-width: 425px){\n    .main1{\n        padding : 10px;\n    }\n    h1{\n        font-size: 20px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBsb2FkL3VwbG9hZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFDQTtJQUNJLDJCQUEyQjs7QUFFL0I7QUFDQTtJQUNJLGlDQUE4QztBQUNsRDtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLHdCQUFnQjtJQUFoQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFNBQVM7SUFDVCxlQUFlO0lBQ2YsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixtQkFBbUI7O0FBRXZCO0FBT0E7SUFDSTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3VwbG9hZC91cGxvYWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWlue1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cbi5tYWluMXtcbiAgICBwYWRkaW5nOiAxMHB4IDgwcHggMHB4IDgwcHg7XG4gICAgXG59XG4ubWFpbjJ7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvYmdfMS5wbmcnKTtcbn1cbi5tYWluMSBoNXtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG4uYm90dG9tIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB6LWluZGV4OiAyMDAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgXG59XG5cblxuXG5cblxuXG5AbWVkaWEobWF4LXdpZHRoOiA0MjVweCl7XG4gICAgLm1haW4xe1xuICAgICAgICBwYWRkaW5nIDogMTBweDtcbiAgICB9XG4gICAgaDF7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/upload/upload.component.ts":
/*!********************************************!*\
  !*** ./src/app/upload/upload.component.ts ***!
  \********************************************/
/*! exports provided: UploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadComponent", function() { return UploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_data_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/data-storage.service */ "./src/app/service/data-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let UploadComponent = class UploadComponent {
    constructor(data, router) {
        this.data = data;
        this.router = router;
    }
    ngOnInit() {
    }
    next() {
        if (this.data.items[this.data.items.length - 1].length > 0) {
            this.router.navigate(['/formPage']);
        }
        else {
            this.data.requiredEmitter.next(true);
        }
    }
};
UploadComponent.ctorParameters = () => [
    { type: _service_data_storage_service__WEBPACK_IMPORTED_MODULE_2__["DataStorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
UploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-upload',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./upload.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/upload/upload.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./upload.component.css */ "./src/app/upload/upload.component.css")).default]
    })
], UploadComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/nithish/tropoGo/tropoGo/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map