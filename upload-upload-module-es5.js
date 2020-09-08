function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["upload-upload-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/upload/main-upload/main-upload.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/upload/main-upload/main-upload.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUploadMainUploadMainUploadComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div fxLayout=\"column\" fxLayoutGap=\"10px\" fxLayoutGap.lt-md=\"10px\" fxLayoutGap.lt-sm=\"10px\">\n   <div *ngFor=\"let category of categories;let i=index;\" fxLayout=\"column\" >\n      <div fxLayout=\"row\" fxLayoutAlign=\"space-between\">\n          <div fxLayout=\"row\" fxLayoutGap=\"10px\" >\n             <h5>{{category}}</h5>\n             <h5 *ngIf=\"i!==1\" style=\"font-size: 12px;font-weight: 100;\">(Optional)</h5>\n             <h5 *ngIf=\"i==1\" [ngClass]=\"{'alert': compulsory}\"  style=\"font-size: 12px;font-weight: 100;\">(Required)</h5>\n             \n          </div>\n          <div>\n            <h5 style=\"color: blue;cursor: pointer;\" (click)=\"fileInput.click()\">  \n               UPLOAD\n               <input #fileInput type=\"file\" (change)=\"onFile($event.target.files,i)\" style=\"display:none;\" />\n             </h5>\n          </div>\n      </div>\n      <mat-divider></mat-divider><div  style=\"padding: 8px;color: red;\" *ngIf=\"compulsory && i===1\">this is Required</div>\n      <mat-list  fxLayout=\"column\" >\n         <div  *ngFor=\"let item of itemsArr[i];let in=index\" >\n            <div fxLayout style=\"cursor: pointer;\">\n              <mat-list-item > {{item}} </mat-list-item>\n              <mat-icon (click)=\"delete(i,in)\" color=\"warn\">delete</mat-icon>\n            </div>\n           \n           \n         </div>\n       \n     </mat-list>\n  </div>\n  \n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/upload/upload.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/upload/upload.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUploadUploadComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"main\" fxLayout=\"row\">\n   <div  fxFlex=\"100\" fxFlex.gt-md=\"50\" >\n       <div class=\"main1\">\n        <div style=\"margin-top: 0px;\" fxLayout=\"column\">\n            <h1  style=\"margin: 0px;text-align: center;\">Add some details of your training institute</h1>\n           <div fxLayout=\"column\">\n               <h5>INSTITUTE LOGO</h5>\n               <div fxLayout>\n                 <img src=\"../../assets/ic_logoiid.png\">\n               </div>\n           </div>\n           <div fxLayout=\"column\" fxLayoutGap=\"1px\" >\n                <h5> NAME OF THE INSTITUTE</h5>\n                <mat-form-field style=\"width: 100%;border: 0px;padding: 0px;\" appearance=\"outline\" >\n                   <input style=\"border-top: 0px;\" matInput placeholder=\"Name of the institute\">\n                </mat-form-field>\n           </div>\n           <div>\n              <router-outlet name=\"uploads\"></router-outlet>\n           </div>\n           \n        </div> \n       </div>\n       <router-outlet name=\"bottom\"></router-outlet>\n      \n       \n         \n      \n      \n    \n   </div>\n   <div fxFlex=\"0\" fxFlex.gt-sm=\"50\" style=\"background-image: url('../../assets/bg_1.png');height: 100%;width: 100%;background-color: #F5F6FA;background-position: center;background-repeat: no-repeat;background-size: cover;\">\n\n   </div>\n   \n</div>\n\n";
    /***/
  },

  /***/
  "./src/app/upload/main-upload/main-upload.component.css":
  /*!**************************************************************!*\
    !*** ./src/app/upload/main-upload/main-upload.component.css ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUploadMainUploadMainUploadComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mat-list .mat-list-item{\n    font-size: 10px;\n    height: 18px;\n}\n\n.alert{\n    color:red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBsb2FkL21haW4tdXBsb2FkL21haW4tdXBsb2FkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFNBQVM7QUFDYiIsImZpbGUiOiJzcmMvYXBwL3VwbG9hZC9tYWluLXVwbG9hZC9tYWluLXVwbG9hZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1saXN0IC5tYXQtbGlzdC1pdGVte1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBoZWlnaHQ6IDE4cHg7XG59XG5cbi5hbGVydHtcbiAgICBjb2xvcjpyZWQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/upload/main-upload/main-upload.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/upload/main-upload/main-upload.component.ts ***!
    \*************************************************************/

  /*! exports provided: MainUploadComponent */

  /***/
  function srcAppUploadMainUploadMainUploadComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainUploadComponent", function () {
      return MainUploadComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_common_services_data_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/common/services/data-storage.service */
    "./src/app/common/services/data-storage.service.ts");
    /* harmony import */


    var _service_upload_files_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../service/upload-files.service */
    "./src/app/upload/service/upload-files.service.ts");

    var MainUploadComponent = /*#__PURE__*/function () {
      function MainUploadComponent(uploadService, data) {
        _classCallCheck(this, MainUploadComponent);

        this.uploadService = uploadService;
        this.data = data;
        this.formData = new FormData();
        this.itemsArr = [[], [], []];
        this.categories = ["INSTITUTE BROUCHER", "INSTITUTE GALLERY", "CERTIFICATIONS"];
      }

      _createClass(MainUploadComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          console.log("main upload");
          this.itemsArr = this.uploadService.items;
          this.data.requiredEmitter.subscribe(function (comp) {
            _this.compulsory = comp;
          });
        }
      }, {
        key: "onFile",
        value: function onFile(files, i) {
          //this.data.file.push(files.item(0));
          //this.files=event.target.files[0];
          //console.log(this.data.file);
          //  this.formData.append('file' + i, this.data.file[0], "");
          //this.formData.append('file' + i, files.item(0), "");
          //  console.log(this.formData.getAll('file0'));
          // this.formData.delete('file0');
          //console.log(this.formData.getAll('file0'));
          this.compulsory = false;
          this.uploadService.upload(files.item(0).name, i);
        }
      }, {
        key: "delete",
        value: function _delete(i, j) {
          this.uploadService.deleteFile(i, j);
          console.log(i);
          console.log(j);
        }
      }]);

      return MainUploadComponent;
    }();

    MainUploadComponent.ctorParameters = function () {
      return [{
        type: _service_upload_files_service__WEBPACK_IMPORTED_MODULE_3__["UploadFilesService"]
      }, {
        type: src_app_common_services_data_storage_service__WEBPACK_IMPORTED_MODULE_2__["DataStorageService"]
      }];
    };

    MainUploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-main-upload',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./main-upload.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/upload/main-upload/main-upload.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./main-upload.component.css */
      "./src/app/upload/main-upload/main-upload.component.css"))["default"]]
    })], MainUploadComponent);
    /***/
  },

  /***/
  "./src/app/upload/upload-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/upload/upload-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: uploadRoutingModule */

  /***/
  function srcAppUploadUploadRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "uploadRoutingModule", function () {
      return uploadRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _upload_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./upload.component */
    "./src/app/upload/upload.component.ts");
    /* harmony import */


    var _main_upload_main_upload_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./main-upload/main-upload.component */
    "./src/app/upload/main-upload/main-upload.component.ts");
    /* harmony import */


    var _common_components_bottom_bottom_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../common/components/bottom/bottom.component */
    "./src/app/common/components/bottom/bottom.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var routes = [{
      path: '',
      component: _upload_component__WEBPACK_IMPORTED_MODULE_2__["UploadComponent"],
      children: [{
        path: '',
        component: _main_upload_main_upload_component__WEBPACK_IMPORTED_MODULE_3__["MainUploadComponent"],
        outlet: 'uploads'
      }, {
        path: '',
        component: _common_components_bottom_bottom_component__WEBPACK_IMPORTED_MODULE_4__["BottomComponent"],
        outlet: 'bottom'
      }]
    }];

    var uploadRoutingModule = function uploadRoutingModule() {
      _classCallCheck(this, uploadRoutingModule);
    };

    uploadRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })], uploadRoutingModule);
    /***/
  },

  /***/
  "./src/app/upload/upload.component.css":
  /*!*********************************************!*\
    !*** ./src/app/upload/upload.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppUploadUploadComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main{\n    width: 100%;\n    height: 100%;\n    z-index: 1;\n    position: absolute;\n}\n\n::ng-deep .mat-form-field-flex > .mat-form-field-infix { padding: 0.4em 0px !important;}\n\n::ng-deep .mat-form-field-appearance-outline .mat-form-field-label { margin-top:-15px; }\n\n.main1{\n    padding: 10px 80px 0px 80px;\n    \n}\n\n.main2{\n    background-image: url('bg_1.png');\n}\n\n.main1 h5{\n    font-size: 12px;\n}\n\n.bottom {\n    text-align: center;\n    position: -webkit-sticky;\n    position: sticky;\n    z-index: 2000;\n    bottom: 0;\n    font-size: 40px;\n    height: 50px;\n    background-color: white;\n    padding-right: 10px;\n    \n}\n\n@media(max-width: 425px){\n    .main1{\n        padding : 10px;\n    }\n    h1{\n        font-size: 20px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBsb2FkL3VwbG9hZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCOztBQUVBLHlEQUF5RCw2QkFBNkIsQ0FBQzs7QUFDdkYscUVBQXFFLGdCQUFnQixFQUFFOztBQUV2RjtJQUNJLDJCQUEyQjs7QUFFL0I7O0FBQ0E7SUFDSSxpQ0FBOEM7QUFDbEQ7O0FBQ0E7SUFDSSxlQUFlO0FBQ25COztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLHdCQUFnQjtJQUFoQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFNBQVM7SUFDVCxlQUFlO0lBQ2YsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixtQkFBbUI7O0FBRXZCOztBQU9BO0lBQ0k7UUFDSSxjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC91cGxvYWQvdXBsb2FkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgei1pbmRleDogMTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtZmxleCA+IC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7IHBhZGRpbmc6IDAuNGVtIDBweCAhaW1wb3J0YW50O31cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7IG1hcmdpbi10b3A6LTE1cHg7IH1cblxuLm1haW4xe1xuICAgIHBhZGRpbmc6IDEwcHggODBweCAwcHggODBweDtcbiAgICBcbn1cbi5tYWluMntcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9iZ18xLnBuZycpO1xufVxuLm1haW4xIGg1e1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5ib3R0b20ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHotaW5kZXg6IDIwMDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICBcbn1cblxuXG5cblxuXG5cbkBtZWRpYShtYXgtd2lkdGg6IDQyNXB4KXtcbiAgICAubWFpbjF7XG4gICAgICAgIHBhZGRpbmcgOiAxMHB4O1xuICAgIH1cbiAgICBoMXtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/upload/upload.component.ts":
  /*!********************************************!*\
    !*** ./src/app/upload/upload.component.ts ***!
    \********************************************/

  /*! exports provided: UploadComponent */

  /***/
  function srcAppUploadUploadComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UploadComponent", function () {
      return UploadComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var UploadComponent = /*#__PURE__*/function () {
      function UploadComponent() {
        _classCallCheck(this, UploadComponent);
      }

      _createClass(UploadComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UploadComponent;
    }();

    UploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-upload',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./upload.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/upload/upload.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./upload.component.css */
      "./src/app/upload/upload.component.css"))["default"]]
    })], UploadComponent);
    /***/
  },

  /***/
  "./src/app/upload/upload.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/upload/upload.module.ts ***!
    \*****************************************/

  /*! exports provided: uploadModule */

  /***/
  function srcAppUploadUploadModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "uploadModule", function () {
      return uploadModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _upload_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./upload.component */
    "./src/app/upload/upload.component.ts");
    /* harmony import */


    var _main_upload_main_upload_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./main-upload/main-upload.component */
    "./src/app/upload/main-upload/main-upload.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _upload_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./upload-routing.module */
    "./src/app/upload/upload-routing.module.ts");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _common_components_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../common/components/shared.module */
    "./src/app/common/components/shared.module.ts");

    var uploadModule = function uploadModule() {
      _classCallCheck(this, uploadModule);
    };

    uploadModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_upload_component__WEBPACK_IMPORTED_MODULE_2__["UploadComponent"], _main_upload_main_upload_component__WEBPACK_IMPORTED_MODULE_3__["MainUploadComponent"]],
      imports: [_upload_routing_module__WEBPACK_IMPORTED_MODULE_7__["uploadRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _common_components_shared_module__WEBPACK_IMPORTED_MODULE_10__["sharedModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"]]
    })], uploadModule);
    /***/
  }
}]);
//# sourceMappingURL=upload-upload-module-es5.js.map