function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/common/components/bottom/bottom.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/components/bottom/bottom.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCommonComponentsBottomBottomComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"bottom\" fxLayout=\"row\" fxLayoutGap=\"30px\" fxLayoutAlign=\"center center\" fxLayoutAlign.lt-md=\"center center\"> \n    <button *ngIf=\"sb\" (click)=\"back()\"   style=\"color: white;height: 30px;\" color=\"accent\" mat-raised-button>BACK</button> \n    <button *ngIf=\"sb\" (click)=\"verify()\" style=\"color: white;height: 30px;\" color=\"accent\" mat-raised-button>SAVE & PUBLISH</button> \n    <button *ngIf=\"!sb\" (click)=\"next()\" style=\"color: white;height: 30px;\" color=\"accent\" mat-raised-button>NEXT</button> \n    <mat-spinner *ngIf=\"spin\" diameter=\"20\" color=\"accent\"></mat-spinner>\n</div>";
    /***/
  },

  /***/
  "./src/app/common/components/bottom/bottom.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/common/components/bottom/bottom.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCommonComponentsBottomBottomComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".bottom {\n    text-align: center;\n    position: -webkit-sticky;\n    position: sticky;\n    z-index: 2000;\n    bottom: 0;\n    font-size: 40px;\n    height: 50px;\n    background-color: white;\n    padding-right: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2NvbXBvbmVudHMvYm90dG9tL2JvdHRvbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLHdCQUFnQjtJQUFoQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFNBQVM7SUFDVCxlQUFlO0lBQ2YsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9jb21tb24vY29tcG9uZW50cy9ib3R0b20vYm90dG9tLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm90dG9tIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB6LWluZGV4OiAyMDAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/common/components/bottom/bottom.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/common/components/bottom/bottom.component.ts ***!
    \**************************************************************/

  /*! exports provided: BottomComponent */

  /***/
  function srcAppCommonComponentsBottomBottomComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BottomComponent", function () {
      return BottomComponent;
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


    var _services_data_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/data-storage.service */
    "./src/app/common/services/data-storage.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _upload_service_upload_files_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../upload/service/upload-files.service */
    "./src/app/upload/service/upload-files.service.ts");

    var BottomComponent = /*#__PURE__*/function () {
      function BottomComponent(data, uploadService, router) {
        _classCallCheck(this, BottomComponent);

        this.data = data;
        this.uploadService = uploadService;
        this.router = router;
      }

      _createClass(BottomComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          console.log(this.router);
          this.sb = false;
          this.data.componentEmitter.subscribe(function (comp) {
            comp === "form" ? _this.sb = true : _this.sb = false;
          });
          this.data.spinner.subscribe(function (val) {
            val === "on" ? _this.spin = true : _this.spin = false;
          });
        }
      }, {
        key: "next",
        value: function next() {
          if (this.uploadService.items[this.uploadService.items.length - 2].length > 0) {
            this.router.navigate(['/formPage']);
          } else {
            this.data.requiredEmitter.next(true);
          }
        }
      }, {
        key: "back",
        value: function back() {
          this.router.navigate(['/mainLoad']);
        }
      }, {
        key: "verify",
        value: function verify() {
          this.data.verifyOnEmitter.next(true);
          this.data.submitForm();
        }
      }]);

      return BottomComponent;
    }();

    BottomComponent.ctorParameters = function () {
      return [{
        type: _services_data_storage_service__WEBPACK_IMPORTED_MODULE_2__["DataStorageService"]
      }, {
        type: _upload_service_upload_files_service__WEBPACK_IMPORTED_MODULE_4__["UploadFilesService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    BottomComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-bottom',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./bottom.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/common/components/bottom/bottom.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./bottom.component.css */
      "./src/app/common/components/bottom/bottom.component.css"))["default"]]
    })], BottomComponent);
    /***/
  },

  /***/
  "./src/app/common/components/shared.module.ts":
  /*!****************************************************!*\
    !*** ./src/app/common/components/shared.module.ts ***!
    \****************************************************/

  /*! exports provided: sharedModule */

  /***/
  function srcAppCommonComponentsSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "sharedModule", function () {
      return sharedModule;
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


    var _bottom_bottom_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./bottom/bottom.component */
    "./src/app/common/components/bottom/bottom.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");

    var sharedModule = function sharedModule() {
      _classCallCheck(this, sharedModule);
    };

    sharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_bottom_bottom_component__WEBPACK_IMPORTED_MODULE_2__["BottomComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"]],
      exports: [_bottom_bottom_component__WEBPACK_IMPORTED_MODULE_2__["BottomComponent"]]
    })], sharedModule);
    /***/
  },

  /***/
  "./src/app/upload/service/upload-files.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/upload/service/upload-files.service.ts ***!
    \********************************************************/

  /*! exports provided: UploadFilesService */

  /***/
  function srcAppUploadServiceUploadFilesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UploadFilesService", function () {
      return UploadFilesService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var UploadFilesService = /*#__PURE__*/function () {
      function UploadFilesService() {
        _classCallCheck(this, UploadFilesService);

        this.items = [[], [], []];
      }

      _createClass(UploadFilesService, [{
        key: "deleteFile",
        value: function deleteFile(i, j) {
          this.items[i].splice(j, 1);
        }
      }, {
        key: "upload",
        value: function upload(filename, i) {
          this.items[i].push(filename);
        }
      }]);

      return UploadFilesService;
    }();

    UploadFilesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UploadFilesService);
    /***/
  }
}]);
//# sourceMappingURL=common-es5.js.map