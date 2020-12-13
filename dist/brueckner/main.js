(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /mnt/c/Users/solop/Documents/dev/brueckner/src/main.ts */"zUnb");


/***/ }),

/***/ "0Q5V":
/*!*********************************************************************************!*\
  !*** ./src/app/components/not-found-component/not-found-component.component.ts ***!
  \*********************************************************************************/
/*! exports provided: NotFoundComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponentComponent", function() { return NotFoundComponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");




class NotFoundComponentComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotFoundComponentComponent.ɵfac = function NotFoundComponentComponent_Factory(t) { return new (t || NotFoundComponentComponent)(); };
NotFoundComponentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponentComponent, selectors: [["app-not-found-component"]], decls: 13, vars: 0, consts: [[1, "not-found__container", "animate__animated", "animate__fadeIn"], ["routerLink", "/", "mat-raised-button", "", "color", "primary", 1, "country__btn"], [1, "shape", "shape-1"], [1, "shape", "shape-2"], [1, "shape", "shape-3"], [1, "shape", "shape-4"], [1, "shape", "shape-5"], [1, "shape", "shape-6"]], template: function NotFoundComponentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Page not Found :(");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "error 404");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Go Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatAnchor"]], styles: [".not-found__container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  height: calc(100vh - 60px);\r\n  width: 100%;\r\n  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);\r\n  position: relative;\r\n}\r\n\r\n.not-found__container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  text-transform: uppercase;\r\n  font-size: 2rem;\r\n  width: 80%;\r\n  max-width: 500px;\r\n  text-align: center;\r\n  padding: 50px 0;\r\n  letter-spacing: 3px;\r\n  font-weight: 500;\r\n  color: rgb(73, 73, 73);\r\n  background-color: rgba(255, 255, 255, 0.3);\r\n}\r\n\r\n.shape[_ngcontent-%COMP%] {\r\n  -webkit-clip-path: polygon(78% 0, 100% 0%, 31% 100%, 11% 100%);\r\n          clip-path: polygon(78% 0, 100% 0%, 31% 100%, 11% 100%);\r\n  width: 100px;\r\n  height: 400px;\r\n  position: absolute;\r\n  z-index: -1;\r\n}\r\n\r\n.shape-1[_ngcontent-%COMP%] {\r\n  background-color: #3f51b5;\r\n  left: 10%;\r\n  top: 0;\r\n}\r\n\r\n.shape-2[_ngcontent-%COMP%] {\r\n  background-color: #3fb549;\r\n  left: 15%;\r\n  top: 0;\r\n}\r\n\r\n.shape-3[_ngcontent-%COMP%] {\r\n  background-color: #b53f88;\r\n  left: 20%;\r\n  top: 0;\r\n}\r\n\r\n.shape-4[_ngcontent-%COMP%] {\r\n  background-color: #3f51b5;\r\n  right: 10%;\r\n  bottom: 0;\r\n}\r\n\r\n.shape-5[_ngcontent-%COMP%] {\r\n  background-color: #3fb549;\r\n  right: 15%;\r\n  bottom: 0;\r\n}\r\n\r\n.shape-6[_ngcontent-%COMP%] {\r\n  background-color: #b53f88;\r\n  right: 20%;\r\n  bottom: 0;\r\n}\r\n\r\n@media (max-width: 500px){\r\n  .shape[_ngcontent-%COMP%] {\r\n    opacity: .5;\r\n  }\r\n}\r\n\r\n@media (min-width: 1000px){\r\n\r\n  .shape-1[_ngcontent-%COMP%] {\r\n    background-color: #3f51b5;\r\n    left: 10%;\r\n    top: 0;\r\n  }\r\n  .shape-2[_ngcontent-%COMP%] {\r\n    background-color: #3fb549;\r\n    left: 12%;\r\n    top: 0;\r\n  }\r\n  .shape-3[_ngcontent-%COMP%] {\r\n    background-color: #b53f88;\r\n    left: 14%;\r\n    top: 0;\r\n  }\r\n  .shape-4[_ngcontent-%COMP%] {\r\n    background-color: #3f51b5;\r\n    right: 10%;\r\n    bottom: 0;\r\n  }\r\n  .shape-5[_ngcontent-%COMP%] {\r\n    background-color: #3fb549;\r\n    right: 12%;\r\n    bottom: 0;\r\n  }\r\n  .shape-6[_ngcontent-%COMP%] {\r\n    background-color: #b53f88;\r\n    right: 14%;\r\n    bottom: 0;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdC1mb3VuZC1jb21wb25lbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QiwwQkFBMEI7RUFDMUIsV0FBVztFQUNYLHdDQUF3QztFQUN4QyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSw4REFBc0Q7VUFBdEQsc0RBQXNEO0VBQ3RELFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixTQUFTO0VBQ1QsTUFBTTtBQUNSOztBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLFNBQVM7RUFDVCxNQUFNO0FBQ1I7O0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsU0FBUztFQUNULE1BQU07QUFDUjs7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFFQTtFQUNFO0lBQ0UsV0FBVztFQUNiO0FBQ0Y7O0FBRUE7O0VBRUU7SUFDRSx5QkFBeUI7SUFDekIsU0FBUztJQUNULE1BQU07RUFDUjtFQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLFNBQVM7SUFDVCxNQUFNO0VBQ1I7RUFDQTtJQUNFLHlCQUF5QjtJQUN6QixTQUFTO0lBQ1QsTUFBTTtFQUNSO0VBQ0E7SUFDRSx5QkFBeUI7SUFDekIsVUFBVTtJQUNWLFNBQVM7RUFDWDtFQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLFVBQVU7SUFDVixTQUFTO0VBQ1g7RUFDQTtJQUNFLHlCQUF5QjtJQUN6QixVQUFVO0lBQ1YsU0FBUztFQUNYO0FBQ0YiLCJmaWxlIjoibm90LWZvdW5kLWNvbXBvbmVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vdC1mb3VuZF9fY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2MHB4KTtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3gtc2hhZG93OiAwIDAgNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLm5vdC1mb3VuZF9fY29udGFpbmVyIGgxIHtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICB3aWR0aDogODAlO1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDUwcHggMDtcclxuICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6IHJnYig3MywgNzMsIDczKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XHJcbn1cclxuXHJcbi5zaGFwZSB7XHJcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDc4JSAwLCAxMDAlIDAlLCAzMSUgMTAwJSwgMTElIDEwMCUpO1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAtMTtcclxufVxyXG5cclxuLnNoYXBlLTEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XHJcbiAgbGVmdDogMTAlO1xyXG4gIHRvcDogMDtcclxufVxyXG4uc2hhcGUtMiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmYjU0OTtcclxuICBsZWZ0OiAxNSU7XHJcbiAgdG9wOiAwO1xyXG59XHJcbi5zaGFwZS0zIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjUzZjg4O1xyXG4gIGxlZnQ6IDIwJTtcclxuICB0b3A6IDA7XHJcbn1cclxuLnNoYXBlLTQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XHJcbiAgcmlnaHQ6IDEwJTtcclxuICBib3R0b206IDA7XHJcbn1cclxuLnNoYXBlLTUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZmI1NDk7XHJcbiAgcmlnaHQ6IDE1JTtcclxuICBib3R0b206IDA7XHJcbn1cclxuLnNoYXBlLTYge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiNTNmODg7XHJcbiAgcmlnaHQ6IDIwJTtcclxuICBib3R0b206IDA7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCl7XHJcbiAgLnNoYXBlIHtcclxuICAgIG9wYWNpdHk6IC41O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDEwMDBweCl7XHJcblxyXG4gIC5zaGFwZS0xIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XHJcbiAgICBsZWZ0OiAxMCU7XHJcbiAgICB0b3A6IDA7XHJcbiAgfVxyXG4gIC5zaGFwZS0yIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZmI1NDk7XHJcbiAgICBsZWZ0OiAxMiU7XHJcbiAgICB0b3A6IDA7XHJcbiAgfVxyXG4gIC5zaGFwZS0zIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiNTNmODg7XHJcbiAgICBsZWZ0OiAxNCU7XHJcbiAgICB0b3A6IDA7XHJcbiAgfVxyXG4gIC5zaGFwZS00IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XHJcbiAgICByaWdodDogMTAlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gIH1cclxuICAuc2hhcGUtNSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2ZiNTQ5O1xyXG4gICAgcmlnaHQ6IDEyJTtcclxuICAgIGJvdHRvbTogMDtcclxuICB9XHJcbiAgLnNoYXBlLTYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2I1M2Y4ODtcclxuICAgIHJpZ2h0OiAxNCU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-not-found-component',
                templateUrl: './not-found-component.component.html',
                styleUrls: ['./not-found-component.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "2jlQ":
/*!***********************************************************************!*\
  !*** ./src/app/components/list-employees/list-employees.component.ts ***!
  \***********************************************************************/
/*! exports provided: ListEmployeesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListEmployeesComponent", function() { return ListEmployeesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/data.service */ "AwSQ");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _pipes_pagination_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../pipes/pagination.pipe */ "jhyJ");











function ListEmployeesComponent_mat_expansion_panel_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "account_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-panel-description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const employee_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", employee_r1.employee_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 5, "list.detail.age"), ": ", employee_r1.employee_age, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/employee/", i_r2 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 7, "list.detail.button"), " ");
} }
class ListEmployeesComponent {
    constructor(data) {
        this.data = data;
        this.employees = [];
        this.pageSize = 10;
        this.pageNumber = 1;
        this.pageSizeOptions = [5, 10, 15];
    }
    ngOnInit() {
        let requestObject = {
            type: 'GET',
            location: 'employees'
        };
        this.data.makeRequest(requestObject).then((res) => {
            if (res.status == 'success') {
                this.employees = res.data;
            }
        });
    }
    handlePage(e) {
        this.pageSize = e.pageSize;
        this.pageNumber = e.pageIndex + 1;
    }
}
ListEmployeesComponent.ɵfac = function ListEmployeesComponent_Factory(t) { return new (t || ListEmployeesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
ListEmployeesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListEmployeesComponent, selectors: [["app-list-employees"]], decls: 7, vars: 11, consts: [[1, "home__title", "animate__animated", "animate__fadeIn"], [1, "example-headers-align", "animate__animated", "animate__fadeIn"], [4, "ngFor", "ngForOf"], [3, "length", "pageSize", "pageSizeOptions", "page"], ["mat-raised-button", "", "color", "primary", 1, "expansion__btn", 3, "routerLink"]], template: function ListEmployeesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-accordion", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ListEmployeesComponent_mat_expansion_panel_4_Template, 12, 9, "mat-expansion-panel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "pagination");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-paginator", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function ListEmployeesComponent_Template_mat_paginator_page_6_listener($event) { return ctx.handlePage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 5, "list.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](5, 7, ctx.employees, ctx.pageSize, ctx.pageNumber));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx.employees.length)("pageSize", ctx.pageSize)("pageSizeOptions", ctx.pageSizeOptions);
    } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatAccordion"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelTitle"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelDescription"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], _pipes_pagination_pipe__WEBPACK_IMPORTED_MODULE_9__["PaginationPipe"]], styles: [".expansion__btn[_ngcontent-%COMP%] {\r\n  margin-right: auto;\r\n  width: 100%;\r\n}\r\n\r\n.home__title[_ngcontent-%COMP%] {\r\n  text-transform: capitalize;\r\n  text-align: center;\r\n  font-size: 2.5rem;\r\n  padding-top: 50px;\r\n  color: rgb(102, 102, 102);\r\n}\r\n\r\nmat-accordion[_ngcontent-%COMP%] {\r\n  padding: 50px 0;\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: column;\r\n}\r\n\r\nmat-expansion-panel[_ngcontent-%COMP%] {\r\n  max-width: 800px;\r\n  width: 100%;\r\n  \r\n}\r\n\r\nmat-panel-title[_ngcontent-%COMP%] {\r\n  width: 40%;\r\n  color: rgb(129, 129, 129);\r\n}\r\n\r\nmat-icon[_ngcontent-%COMP%] {\r\n  padding-right: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QtZW1wbG95ZWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXOztBQUViOztBQUVBO0VBQ0UsVUFBVTtFQUNWLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJsaXN0LWVtcGxveWVlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4cGFuc2lvbl9fYnRuIHtcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5ob21lX190aXRsZSB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gIGNvbG9yOiByZ2IoMTAyLCAxMDIsIDEwMik7XHJcbn1cclxuXHJcbm1hdC1hY2NvcmRpb24ge1xyXG4gIHBhZGRpbmc6IDUwcHggMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxubWF0LWV4cGFuc2lvbi1wYW5lbCB7XHJcbiAgbWF4LXdpZHRoOiA4MDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBcclxufVxyXG5cclxubWF0LXBhbmVsLXRpdGxlIHtcclxuICB3aWR0aDogNDAlO1xyXG4gIGNvbG9yOiByZ2IoMTI5LCAxMjksIDEyOSk7XHJcbn1cclxuXHJcbm1hdC1pY29uIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListEmployeesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-list-employees',
                templateUrl: './list-employees.component.html',
                styleUrls: ['./list-employees.component.css']
            }]
    }], function () { return [{ type: src_app_service_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }]; }, null); })();


/***/ }),

/***/ "AwSQ":
/*!*****************************************!*\
  !*** ./src/app/service/data.service.ts ***!
  \*****************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class DataService {
    constructor(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl;
    }
    successHandler(value) { return value; }
    errorHandler(error) { return error; }
    makeRequest(requestObject) {
        let type = requestObject.type.toLowerCase();
        if (!type) {
            return console.log('No type specified in the request object.');
        }
        let body = requestObject.body || {};
        let location = requestObject.location;
        if (!location) {
            return console.log('No location specified in the request object.');
        }
        let url = `${this.baseUrl}/${location}`;
        let httpOptions = {};
        if (type === 'get') {
            return this.http.get(url, httpOptions).toPromise()
                .then(this.successHandler)
                .catch(this.errorHandler);
        }
        if (type === 'post') {
            return this.http.post(url, body, httpOptions).toPromise()
                .then(this.successHandler)
                .catch(this.errorHandler);
        }
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "AytR":
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
const environment = {
    baseUrl: 'http://dummy.restapiexample.com/api/v1',
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

/***/ "FBPF":
/*!*******************************************************!*\
  !*** ./src/app/components/chart1/chart1.component.ts ***!
  \*******************************************************/
/*! exports provided: Chart1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chart1Component", function() { return Chart1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");



class Chart1Component {
    constructor() { }
    ngOnInit() {
    }
}
Chart1Component.ɵfac = function Chart1Component_Factory(t) { return new (t || Chart1Component)(); };
Chart1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Chart1Component, selectors: [["app-chart1"]], decls: 7, vars: 6, consts: [[1, "chart__title"], [1, "chart__description"], ["id", "bar", 1, "figure"]], template: function Chart1Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "figure", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "admin.salary.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, "admin.salary.description"), "\n");
    } }, pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]], styles: [".chart__title[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  padding: 50px 0 0 0;\r\n  font-size: 1.5rem;\r\n  color: rgb(82, 82, 82);\r\n}\r\n\r\n.chart__description[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  color: rgb(82, 82, 82);\r\n}\r\n\r\n.figure[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  border: 2px soli red;\r\n  color: #8a8b8f;\r\n}\r\n\r\n@media (max-width: 500px) {\r\n  .figure[_ngcontent-%COMP%] {\r\n    width: 80%;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJ0MS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsb0JBQW9CO0VBQ3BCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRTtJQUNFLFVBQVU7RUFDWjtBQUNGIiwiZmlsZSI6ImNoYXJ0MS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYXJ0X190aXRsZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDUwcHggMCAwIDA7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgY29sb3I6IHJnYig4MiwgODIsIDgyKTtcclxufVxyXG5cclxuLmNoYXJ0X19kZXNjcmlwdGlvbiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiByZ2IoODIsIDgyLCA4Mik7XHJcbn1cclxuXHJcbi5maWd1cmUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYm9yZGVyOiAycHggc29saSByZWQ7XHJcbiAgY29sb3I6ICM4YThiOGY7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gIC5maWd1cmUge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Chart1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chart1',
                templateUrl: './chart1.component.html',
                styleUrls: ['./chart1.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Qbzz":
/*!***************************************************!*\
  !*** ./src/app/components/hero/hero.component.ts ***!
  \***************************************************/
/*! exports provided: HeroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroComponent", function() { return HeroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");





class HeroComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeroComponent.ɵfac = function HeroComponent_Factory(t) { return new (t || HeroComponent)(); };
HeroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeroComponent, selectors: [["app-hero"]], decls: 16, vars: 9, consts: [[1, "hero__container", "animate__animated", "animate__fadeIn"], ["routerLink", "/employees", "mat-raised-button", "", "color", "primary", 1, "country__btn"], [1, "shape", "shape-1"], [1, "shape", "shape-2"], [1, "shape", "shape-3"], [1, "shape", "shape-4"], [1, "shape", "shape-5"], [1, "shape", "shape-6"]], template: function HeroComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, "hero.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 5, "hero.description"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 7, "hero.button"), " ");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatAnchor"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]], styles: [".hero__container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  height: calc(100vh - 60px);\r\n  width: 100%;\r\n  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);\r\n  position: relative;\r\n}\r\n\r\n.hero__container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  text-transform: uppercase;\r\n  font-size: 2rem;\r\n  width: 80%;\r\n  max-width: 500px;\r\n  text-align: center;\r\n  padding: 50px 0;\r\n  letter-spacing: 3px;\r\n  font-weight: 500;\r\n  color: rgb(73, 73, 73);\r\n  background-color: rgba(255, 255, 255, 0.3);\r\n}\r\n\r\n.hero__container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  padding: 20px 30px;\r\n  color: rgb(109, 109, 109);\r\n  font-size: 1.2rem;\r\n  max-width: 600px;\r\n  font-weight: 200;\r\n  background-color: rgba(255, 255, 255, 0.3);\r\n}\r\n\r\n.shape[_ngcontent-%COMP%] {\r\n  -webkit-clip-path: polygon(78% 0, 100% 0%, 31% 100%, 11% 100%);\r\n          clip-path: polygon(78% 0, 100% 0%, 31% 100%, 11% 100%);\r\n  width: 100px;\r\n  height: 400px;\r\n  position: absolute;\r\n  z-index: -1;\r\n}\r\n\r\n.shape-1[_ngcontent-%COMP%] {\r\n  background-color: #3f51b5;\r\n  left: 10%;\r\n  top: 0;\r\n}\r\n\r\n.shape-2[_ngcontent-%COMP%] {\r\n  background-color: #3fb549;\r\n  left: 15%;\r\n  top: 0;\r\n}\r\n\r\n.shape-3[_ngcontent-%COMP%] {\r\n  background-color: #b53f88;\r\n  left: 20%;\r\n  top: 0;\r\n}\r\n\r\n.shape-4[_ngcontent-%COMP%] {\r\n  background-color: #3f51b5;\r\n  right: 10%;\r\n  bottom: 0;\r\n}\r\n\r\n.shape-5[_ngcontent-%COMP%] {\r\n  background-color: #3fb549;\r\n  right: 15%;\r\n  bottom: 0;\r\n}\r\n\r\n.shape-6[_ngcontent-%COMP%] {\r\n  background-color: #b53f88;\r\n  right: 20%;\r\n  bottom: 0;\r\n}\r\n\r\n@media (max-width: 500px){\r\n  .shape[_ngcontent-%COMP%] {\r\n    opacity: .5;\r\n  }\r\n}\r\n\r\n@media (min-width: 1000px){\r\n\r\n  .shape-1[_ngcontent-%COMP%] {\r\n    background-color: #3f51b5;\r\n    left: 10%;\r\n    top: 0;\r\n  }\r\n  .shape-2[_ngcontent-%COMP%] {\r\n    background-color: #3fb549;\r\n    left: 12%;\r\n    top: 0;\r\n  }\r\n  .shape-3[_ngcontent-%COMP%] {\r\n    background-color: #b53f88;\r\n    left: 14%;\r\n    top: 0;\r\n  }\r\n  .shape-4[_ngcontent-%COMP%] {\r\n    background-color: #3f51b5;\r\n    right: 10%;\r\n    bottom: 0;\r\n  }\r\n  .shape-5[_ngcontent-%COMP%] {\r\n    background-color: #3fb549;\r\n    right: 12%;\r\n    bottom: 0;\r\n  }\r\n  .shape-6[_ngcontent-%COMP%] {\r\n    background-color: #b53f88;\r\n    right: 14%;\r\n    bottom: 0;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlcm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QiwwQkFBMEI7RUFDMUIsV0FBVztFQUNYLHdDQUF3QztFQUN4QyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSw4REFBc0Q7VUFBdEQsc0RBQXNEO0VBQ3RELFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixTQUFTO0VBQ1QsTUFBTTtBQUNSOztBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLFNBQVM7RUFDVCxNQUFNO0FBQ1I7O0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsU0FBUztFQUNULE1BQU07QUFDUjs7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFFQTtFQUNFO0lBQ0UsV0FBVztFQUNiO0FBQ0Y7O0FBRUE7O0VBRUU7SUFDRSx5QkFBeUI7SUFDekIsU0FBUztJQUNULE1BQU07RUFDUjtFQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLFNBQVM7SUFDVCxNQUFNO0VBQ1I7RUFDQTtJQUNFLHlCQUF5QjtJQUN6QixTQUFTO0lBQ1QsTUFBTTtFQUNSO0VBQ0E7SUFDRSx5QkFBeUI7SUFDekIsVUFBVTtJQUNWLFNBQVM7RUFDWDtFQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLFVBQVU7SUFDVixTQUFTO0VBQ1g7RUFDQTtJQUNFLHlCQUF5QjtJQUN6QixVQUFVO0lBQ1YsU0FBUztFQUNYO0FBQ0YiLCJmaWxlIjoiaGVyby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlcm9fX2NvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjBweCk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm94LXNoYWRvdzogMCAwIDVweCAwIHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5oZXJvX19jb250YWluZXIgaDEge1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgbWF4LXdpZHRoOiA1MDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogNTBweCAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogcmdiKDczLCA3MywgNzMpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxufVxyXG5cclxuLmhlcm9fX2NvbnRhaW5lciBwIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMjBweCAzMHB4O1xyXG4gIGNvbG9yOiByZ2IoMTA5LCAxMDksIDEwOSk7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgbWF4LXdpZHRoOiA2MDBweDtcclxuICBmb250LXdlaWdodDogMjAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxufVxyXG5cclxuLnNoYXBlIHtcclxuICBjbGlwLXBhdGg6IHBvbHlnb24oNzglIDAsIDEwMCUgMCUsIDMxJSAxMDAlLCAxMSUgMTAwJSk7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IC0xO1xyXG59XHJcblxyXG4uc2hhcGUtMSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTtcclxuICBsZWZ0OiAxMCU7XHJcbiAgdG9wOiAwO1xyXG59XHJcbi5zaGFwZS0yIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2ZiNTQ5O1xyXG4gIGxlZnQ6IDE1JTtcclxuICB0b3A6IDA7XHJcbn1cclxuLnNoYXBlLTMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiNTNmODg7XHJcbiAgbGVmdDogMjAlO1xyXG4gIHRvcDogMDtcclxufVxyXG4uc2hhcGUtNCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTtcclxuICByaWdodDogMTAlO1xyXG4gIGJvdHRvbTogMDtcclxufVxyXG4uc2hhcGUtNSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmYjU0OTtcclxuICByaWdodDogMTUlO1xyXG4gIGJvdHRvbTogMDtcclxufVxyXG4uc2hhcGUtNiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I1M2Y4ODtcclxuICByaWdodDogMjAlO1xyXG4gIGJvdHRvbTogMDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KXtcclxuICAuc2hhcGUge1xyXG4gICAgb3BhY2l0eTogLjU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTAwMHB4KXtcclxuXHJcbiAgLnNoYXBlLTEge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTtcclxuICAgIGxlZnQ6IDEwJTtcclxuICAgIHRvcDogMDtcclxuICB9XHJcbiAgLnNoYXBlLTIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNmYjU0OTtcclxuICAgIGxlZnQ6IDEyJTtcclxuICAgIHRvcDogMDtcclxuICB9XHJcbiAgLnNoYXBlLTMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2I1M2Y4ODtcclxuICAgIGxlZnQ6IDE0JTtcclxuICAgIHRvcDogMDtcclxuICB9XHJcbiAgLnNoYXBlLTQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTtcclxuICAgIHJpZ2h0OiAxMCU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgfVxyXG4gIC5zaGFwZS01IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZmI1NDk7XHJcbiAgICByaWdodDogMTIlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gIH1cclxuICAuc2hhcGUtNiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjUzZjg4O1xyXG4gICAgcmlnaHQ6IDE0JTtcclxuICAgIGJvdHRvbTogMDtcclxuICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeroComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-hero',
                templateUrl: './hero.component.html',
                styleUrls: ['./hero.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");








function AppComponent_option_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const lang_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", lang_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](lang_r2);
} }
class AppComponent {
    constructor(translate) {
        this.translate = translate;
        this.title = 'brueckner';
        this.langs = [];
        this.translate.setDefaultLang('en');
        this.translate.use('en');
        this.translate.addLangs(['en', 'es']);
        this.langs = this.translate.getLangs();
    }
    changeLang(lang) {
        this.translate.use(lang);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 22, vars: 13, consts: [["color", "primary", 1, "animate__animated", "animate__fadeIn", "navbar"], ["mat-button", "", "routerLink", "/", 1, "navbar__link"], ["mat-button", "", "routerLink", "/employees", 1, "navbar__link", "employees__link--home"], ["mat-button", "", "routerLink", "/new-employee", 1, "navbar__link"], ["mat-button", "", "routerLink", "/admin", 1, "navbar__link"], [1, "lang__selector"], [3, "change"], ["langSelect", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Change language ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "select", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AppComponent_Template_select_change_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19); return ctx.changeLang(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AppComponent_option_20_Template, 2, 2, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 5, "header.home"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 7, "header.employees"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 9, "header.new_employee"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 11, "header.admin"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.langs);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_x"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]], styles: [".navbar[_ngcontent-%COMP%] {\r\n  justify-content: space-between;\r\n}\r\n\r\n.navbar__link[_ngcontent-%COMP%] {\r\n  padding: 1rem 1.5rem;\r\n  color: white;\r\n  text-decoration: none;\r\n}\r\n\r\nmat-toolbar[_ngcontent-%COMP%] {\r\n  position: sticky;\r\n  top: 0;\r\n  z-index: 10;\r\n  box-shadow: 0 0 5px 0 rgb(39, 39, 39);\r\n}\r\n\r\n.lang__selector[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  right: 10px;\r\n  top: 92vh;\r\n  background-color: rgb(83, 83, 83);\r\n  font-size: .8rem;\r\n  opacity: .8;\r\n  padding: 0 15px;\r\n}\r\n\r\n.lang__selector[_ngcontent-%COMP%]:hover {\r\n  opacity: 1;\r\n}\r\n\r\n.lang__selector[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\r\n  background-color: rgb(54, 54, 54);\r\n  text-transform: uppercase;\r\n  color: white;\r\n}\r\n\r\n@media (max-width: 500px) {\r\n  .employees__link--home[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n\r\n  .lang__selector[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    bottom: 10px;\r\n    background-color: rgb(83, 83, 83);\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsTUFBTTtFQUNOLFdBQVc7RUFDWCxxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQVM7RUFDVCxpQ0FBaUM7RUFDakMsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGVBQWU7SUFDZixZQUFZO0lBQ1osaUNBQWlDO0VBQ25DO0FBQ0YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5uYXZiYXJfX2xpbmsge1xyXG4gIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbm1hdC10b29sYmFyIHtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiAxMDtcclxuICBib3gtc2hhZG93OiAwIDAgNXB4IDAgcmdiKDM5LCAzOSwgMzkpO1xyXG59XHJcblxyXG4ubGFuZ19fc2VsZWN0b3Ige1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMTBweDtcclxuICB0b3A6IDkydmg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgzLCA4MywgODMpO1xyXG4gIGZvbnQtc2l6ZTogLjhyZW07XHJcbiAgb3BhY2l0eTogLjg7XHJcbiAgcGFkZGluZzogMCAxNXB4O1xyXG59XHJcblxyXG4ubGFuZ19fc2VsZWN0b3I6aG92ZXIge1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5sYW5nX19zZWxlY3RvciBzZWxlY3Qge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig1NCwgNTQsIDU0KTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgLmVtcGxveWVlc19fbGluay0taG9tZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmxhbmdfX3NlbGVjdG9yIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4MywgODMsIDgzKTtcclxuICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: createTranslateLoader, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_list_employees_list_employees_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/list-employees/list-employees.component */ "2jlQ");
/* harmony import */ var _components_new_employees_new_employees_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/new-employees/new-employees.component */ "qXJT");
/* harmony import */ var _components_detail_employee_detail_employee_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/detail-employee/detail-employee.component */ "hAdn");
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/admin/admin.component */ "cCTE");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./material/material.module */ "hctd");
/* harmony import */ var _components_chart1_chart1_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/chart1/chart1.component */ "FBPF");
/* harmony import */ var _pipes_pagination_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pipes/pagination.pipe */ "jhyJ");
/* harmony import */ var _components_hero_hero_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/hero/hero.component */ "Qbzz");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/service-worker */ "Jho9");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");
/* harmony import */ var _components_not_found_component_not_found_component_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/not-found-component/not-found-component.component */ "0Q5V");























function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_18__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_11__["MaterialModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_15__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].production }),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__["TranslateLoader"],
                    useFactory: (createTranslateLoader),
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]]
                }
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _components_list_employees_list_employees_component__WEBPACK_IMPORTED_MODULE_6__["ListEmployeesComponent"],
        _components_new_employees_new_employees_component__WEBPACK_IMPORTED_MODULE_7__["NewEmployeesComponent"],
        _components_detail_employee_detail_employee_component__WEBPACK_IMPORTED_MODULE_8__["DetailEmployeeComponent"],
        _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_9__["AdminComponent"],
        _components_chart1_chart1_component__WEBPACK_IMPORTED_MODULE_12__["Chart1Component"],
        _pipes_pagination_pipe__WEBPACK_IMPORTED_MODULE_13__["PaginationPipe"],
        _components_hero_hero_component__WEBPACK_IMPORTED_MODULE_14__["HeroComponent"],
        _components_not_found_component_not_found_component_component__WEBPACK_IMPORTED_MODULE_19__["NotFoundComponentComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
        _material_material_module__WEBPACK_IMPORTED_MODULE_11__["MaterialModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_15__["ServiceWorkerModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__["TranslateModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _components_list_employees_list_employees_component__WEBPACK_IMPORTED_MODULE_6__["ListEmployeesComponent"],
                    _components_new_employees_new_employees_component__WEBPACK_IMPORTED_MODULE_7__["NewEmployeesComponent"],
                    _components_detail_employee_detail_employee_component__WEBPACK_IMPORTED_MODULE_8__["DetailEmployeeComponent"],
                    _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_9__["AdminComponent"],
                    _components_chart1_chart1_component__WEBPACK_IMPORTED_MODULE_12__["Chart1Component"],
                    _pipes_pagination_pipe__WEBPACK_IMPORTED_MODULE_13__["PaginationPipe"],
                    _components_hero_hero_component__WEBPACK_IMPORTED_MODULE_14__["HeroComponent"],
                    _components_not_found_component_not_found_component_component__WEBPACK_IMPORTED_MODULE_19__["NotFoundComponentComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                    _material_material_module__WEBPACK_IMPORTED_MODULE_11__["MaterialModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _angular_service_worker__WEBPACK_IMPORTED_MODULE_15__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].production }),
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__["TranslateModule"].forRoot({
                        loader: {
                            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__["TranslateLoader"],
                            useFactory: (createTranslateLoader),
                            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]]
                        }
                    })
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "cCTE":
/*!*****************************************************!*\
  !*** ./src/app/components/admin/admin.component.ts ***!
  \*****************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "VphZ");
/* harmony import */ var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/data.service */ "AwSQ");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _chart1_chart1_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../chart1/chart1.component */ "FBPF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");









class AdminComponent {
    constructor(data) {
        this.data = data;
        this.employees = [];
        this.margin = 50;
        this.width = 750 - (this.margin * 2);
        this.height = 400 - (this.margin * 2);
    }
    ngOnInit() {
        let requestObject = {
            type: 'GET',
            location: 'employees'
        };
        this.data.makeRequest(requestObject).then((res) => {
            if (res.status == 'success') {
                this.employees = res.data;
                this.createSvg();
                this.drawBars(this.employees);
            }
        });
    }
    createSvg() {
        this.svg = d3__WEBPACK_IMPORTED_MODULE_1__["select"]("figure#bar")
            .append("svg")
            .attr("width", this.width + (this.margin * 2))
            .attr("height", this.height + (this.margin * 2))
            .append("g")
            .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
    }
    drawBars(dataD3) {
        //Create the X-axis band scale
        const x = d3__WEBPACK_IMPORTED_MODULE_1__["scaleBand"]()
            .range([0, this.width])
            .domain(dataD3.map(d => d.employee_age))
            .padding(0.2);
        // Draw the X-axis on the DOM
        this.svg.append("g")
            .attr("transform", "translate(0," + this.height + ")")
            .call(d3__WEBPACK_IMPORTED_MODULE_1__["axisBottom"](x))
            .selectAll("text")
            .attr("transform", "translate(-10,0)rotate(-45)")
            .style("text-anchor", "end");
        // Create the Y-axis band scale
        const y = d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]()
            .domain([0, 800000])
            .range([this.height, 0]);
        // Draw the Y-axis on the DOM
        this.svg.append("g")
            .call(d3__WEBPACK_IMPORTED_MODULE_1__["axisLeft"](y));
        // Create and fill the bars
        this.svg.selectAll("bars")
            .data(dataD3)
            .enter()
            .append("rect")
            .attr("x", d => x(d.employee_age))
            .attr("y", d => y(d.employee_salary))
            .attr("width", x.bandwidth())
            .attr("height", (d) => this.height - y(d.employee_salary))
            .attr("fill", "#fc8621");
    }
}
AdminComponent.ɵfac = function AdminComponent_Factory(t) { return new (t || AdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"])); };
AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminComponent, selectors: [["app-admin"]], decls: 13, vars: 12, consts: [["mat-align-tabs", "center", 1, "animate__animated", "animate__fadeIn"], [3, "label"], [1, "country__container", "animate__animated", "animate__fadeIn"], [1, "country__alert"], ["routerLink", "/", "mat-raised-button", "", "color", "primary", 1, "country__btn"]], template: function AdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab-group", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-tab", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-chart1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-tab", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, "admin.tabs.tab_1"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 6, "admin.tabs.tab_2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 8, "admin.country.title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 10, "admin.country.button"), " ");
    } }, directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTab"], _chart1_chart1_component__WEBPACK_IMPORTED_MODULE_4__["Chart1Component"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatAnchor"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]], styles: [".country__container[_ngcontent-%COMP%] {\r\n  max-width: 600px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.country__alert[_ngcontent-%COMP%] {\r\n  padding: 50px 0;\r\n  color: rgb(82, 82, 82);\r\n}\r\n\r\n.country__btn[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n@media (max-width: 500px) {\r\n  .country__container[_ngcontent-%COMP%] {\r\n    padding: 20px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7QUFDRiIsImZpbGUiOiJhZG1pbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5jb3VudHJ5X19jb250YWluZXIge1xyXG4gIG1heC13aWR0aDogNjAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5jb3VudHJ5X19hbGVydCB7XHJcbiAgcGFkZGluZzogNTBweCAwO1xyXG4gIGNvbG9yOiByZ2IoODIsIDgyLCA4Mik7XHJcbn1cclxuXHJcbi5jb3VudHJ5X19idG4ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAuY291bnRyeV9fY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin',
                templateUrl: './admin.component.html',
                styleUrls: ['./admin.component.css']
            }]
    }], function () { return [{ type: src_app_service_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }]; }, null); })();


/***/ }),

/***/ "hAdn":
/*!*************************************************************************!*\
  !*** ./src/app/components/detail-employee/detail-employee.component.ts ***!
  \*************************************************************************/
/*! exports provided: DetailEmployeeComponent, DialogElementsDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailEmployeeComponent", function() { return DetailEmployeeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogElementsDialog", function() { return DialogElementsDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/data.service */ "AwSQ");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");









function DetailEmployeeComponent_mat_spinner_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner");
} }
function DetailEmployeeComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailEmployeeComponent_div_4_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.openDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 7, "detail_employee.info.salary"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 9, ctx_r1.salary, "EUR"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 12, "detail_employee.info.age"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.age);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 14, "detail_employee.info.edit_button"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 16, "detail_employee.info.delete_button"));
} }
class DetailEmployeeComponent {
    constructor(router, route, data, dialog) {
        this.router = router;
        this.route = route;
        this.data = data;
        this.dialog = dialog;
        this.paramId = '';
        this.name = "";
        this.salary = 0;
        this.age = "";
        this.image = "";
        this.loading = true;
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.paramId = params.userid;
        });
        let objectRequest = {
            type: 'GET',
            location: `employee/${this.paramId}`
        };
        this.data.makeRequest(objectRequest).then((res) => {
            if (res.status == 'success') {
                this.name = res.data.employee_name;
                this.salary = res.data.employee_salary;
                this.age = res.data.employee_age;
                this.image = res.data.employee_image;
                this.loading = false;
            }
        });
    }
    openDialog() {
        this.dialog.open(DialogElementsDialog);
        this.router.navigate(['/']);
    }
}
DetailEmployeeComponent.ɵfac = function DetailEmployeeComponent_Factory(t) { return new (t || DetailEmployeeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"])); };
DetailEmployeeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailEmployeeComponent, selectors: [["app-detail-employee"]], decls: 9, vars: 5, consts: [[1, "detail-profile__container", "animate__animated", "animate__fadeIn"], [1, "detail-profile__img"], ["src", "../../../assets/picture-default.png", "alt", ""], [4, "ngIf"], ["class", "detail-profile__data animate__animated animate__fadeIn", 4, "ngIf"], [1, "detail-profile__btn--container", "animate__animated", "animate__fadeIn"], ["mat-raised-button", "", "color", "primary", "routerLink", "/", 1, "detail-profile__btn-home"], [1, "detail-profile__data", "animate__animated", "animate__fadeIn"], [1, "detail-profile__data--item"], [1, "detail-profile__btn-action"], ["mat-raised-button", "", "color", "basic"], ["mat-raised-button", "", "color", "warn", 3, "click"]], template: function DetailEmployeeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DetailEmployeeComponent_mat_spinner_3_Template, 1, 0, "mat-spinner", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DetailEmployeeComponent_div_4_Template, 23, 18, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 3, "detail_employee.button"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatSpinner"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CurrencyPipe"]], styles: [".detail-profile__container[_ngcontent-%COMP%] {\r\n  max-width: 600px;\r\n  display: flex;\r\n  margin: 50px auto;\r\n  font-size: 1.5rem;\r\n  color: rgb(82, 82, 82);\r\n}\r\n\r\n.detail-profile__img[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n}\r\n\r\n.detail-profile__img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  border-radius: 5px;\r\n}\r\n\r\n.detail-profile__data[_ngcontent-%COMP%] {\r\n  padding: 40px;\r\n  width: 50%;\r\n}\r\n\r\n.detail-profile__data[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  font-size: 2.5rem;\r\n  margin-bottom: 30px;\r\n  text-align: center;\r\n}\r\n\r\n.detail-profile__data--item[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  font-weight: 200;\r\n}\r\n\r\n.detail-profile__btn--container[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  max-width: 600px;\r\n  margin: 50px auto;\r\n}\r\n\r\n.detail-profile__btn-home[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n.detail-profile__btn-action[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding-top: 20px;\r\n}\r\n\r\n.detail-profile__btn-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  width: 48%;\r\n}\r\n\r\nmat-spinner[_ngcontent-%COMP%] {\r\n  margin: 50px auto;\r\n}\r\n\r\n@media (max-width: 500px){\r\n  .detail-profile__container[_ngcontent-%COMP%]  {\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n  .detail-profile__btn-home[_ngcontent-%COMP%] {\r\n    width: 80%;\r\n  }\r\n  .detail-profile__btn--container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC1lbXBsb3llZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsVUFBVTtBQUNaOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRTtJQUNFLHNCQUFzQjtJQUN0QixtQkFBbUI7RUFDckI7RUFDQTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsYUFBYTtJQUNiLHVCQUF1QjtFQUN6QjtBQUNGIiwiZmlsZSI6ImRldGFpbC1lbXBsb3llZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRldGFpbC1wcm9maWxlX19jb250YWluZXIge1xyXG4gIG1heC13aWR0aDogNjAwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW46IDUwcHggYXV0bztcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBjb2xvcjogcmdiKDgyLCA4MiwgODIpO1xyXG59XHJcblxyXG4uZGV0YWlsLXByb2ZpbGVfX2ltZyB7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLmRldGFpbC1wcm9maWxlX19pbWcgaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5kZXRhaWwtcHJvZmlsZV9fZGF0YSB7XHJcbiAgcGFkZGluZzogNDBweDtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4uZGV0YWlsLXByb2ZpbGVfX2RhdGEgaDEge1xyXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZGV0YWlsLXByb2ZpbGVfX2RhdGEtLWl0ZW0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbn1cclxuXHJcbi5kZXRhaWwtcHJvZmlsZV9fYnRuLS1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogNjAwcHg7XHJcbiAgbWFyZ2luOiA1MHB4IGF1dG87XHJcbn1cclxuXHJcbi5kZXRhaWwtcHJvZmlsZV9fYnRuLWhvbWUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZGV0YWlsLXByb2ZpbGVfX2J0bi1hY3Rpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uZGV0YWlsLXByb2ZpbGVfX2J0bi1hY3Rpb24gYnV0dG9uIHtcclxuICB3aWR0aDogNDglO1xyXG59XHJcblxyXG5tYXQtc3Bpbm5lciB7XHJcbiAgbWFyZ2luOiA1MHB4IGF1dG87XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCl7XHJcbiAgLmRldGFpbC1wcm9maWxlX19jb250YWluZXIgIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICAuZGV0YWlsLXByb2ZpbGVfX2J0bi1ob21lIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgfVxyXG4gIC5kZXRhaWwtcHJvZmlsZV9fYnRuLS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailEmployeeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-detail-employee',
                templateUrl: './detail-employee.component.html',
                styleUrls: ['./detail-employee.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: src_app_service_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }]; }, null); })();
class DialogElementsDialog {
}
DialogElementsDialog.ɵfac = function DialogElementsDialog_Factory(t) { return new (t || DialogElementsDialog)(); };
DialogElementsDialog.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogElementsDialog, selectors: [["dialog-elements-dialog"]], decls: 4, vars: 0, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""]], template: function DialogElementsDialog_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "We are sorry :(");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "This user has been deleted.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogElementsDialog, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'dialog-elements-dialog',
                templateUrl: 'dialog-elements-dialog.html',
            }]
    }], null, null); })();


/***/ }),

/***/ "hctd":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "d3UM");













const material = [
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
    _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"],
    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"],
    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
    _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"]
];
class MaterialModule {
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [[material], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"]], exports: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [material],
                exports: [material]
            }]
    }], null, null); })();


/***/ }),

/***/ "jhyJ":
/*!******************************************!*\
  !*** ./src/app/pipes/pagination.pipe.ts ***!
  \******************************************/
/*! exports provided: PaginationPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationPipe", function() { return PaginationPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PaginationPipe {
    transform(array, page_size, page_number) {
        if (!array.length)
            return [];
        if (page_size === 'all') {
            return array;
        }
        page_size = page_size || 5;
        page_number = page_number || 1;
        --page_number;
        return array.slice(page_number * page_size, (page_number + 1) * page_size);
    }
}
PaginationPipe.ɵfac = function PaginationPipe_Factory(t) { return new (t || PaginationPipe)(); };
PaginationPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "pagination", type: PaginationPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginationPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'pagination'
            }]
    }], null, null); })();


/***/ }),

/***/ "qXJT":
/*!*********************************************************************!*\
  !*** ./src/app/components/new-employees/new-employees.component.ts ***!
  \*********************************************************************/
/*! exports provided: NewEmployeesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewEmployeesComponent", function() { return NewEmployeesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/data.service */ "AwSQ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");









function NewEmployeesComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.alertMessage);
} }
class NewEmployeesComponent {
    constructor(data) {
        this.data = data;
        this.alertMessage = '';
        this.newEmployeeData = {
            name: '',
            age: '',
            salary: '',
        };
    }
    ngOnInit() {
    }
    formSubmit() {
        if (!this.newEmployeeData.name ||
            !this.newEmployeeData.age ||
            !this.newEmployeeData.salary) {
            return this.alertMessage = 'All fields are required.';
        }
        else {
            this.createEmployee();
        }
    }
    createEmployee() {
        let requestObject = {
            type: 'POST',
            location: 'create',
            body: this.newEmployeeData
        };
        this.data.makeRequest(requestObject)
            .then(() => {
            this.alertMessage = `${this.newEmployeeData.name} has been created`;
        });
    }
}
NewEmployeesComponent.ɵfac = function NewEmployeesComponent_Factory(t) { return new (t || NewEmployeesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
NewEmployeesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewEmployeesComponent, selectors: [["app-new-employees"]], decls: 30, vars: 22, consts: [[1, "new-employee__container", "animate__animated", "animate__fadeIn"], [1, "new-employee__container--description"], [3, "submit"], ["class", "animate__animated animate__fadeIn", 4, "ngIf"], ["appearance", "fill"], ["matInput", "", "name", "name", 3, "ngModel", "ngModelChange"], ["matInput", "", "name", "salary", 3, "ngModel", "ngModelChange"], ["matInput", "", "name", "age", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", "color", "primary", 1, "button-block", 3, "submit"], [1, "animate__animated", "animate__fadeIn"]], template: function NewEmployeesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function NewEmployeesComponent_Template_form_submit_8_listener() { return ctx.formSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NewEmployeesComponent_div_9_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewEmployeesComponent_Template_input_ngModelChange_14_listener($event) { return ctx.newEmployeeData.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewEmployeesComponent_Template_input_ngModelChange_20_listener($event) { return ctx.newEmployeeData.salary = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewEmployeesComponent_Template_input_ngModelChange_26_listener($event) { return ctx.newEmployeeData.age = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function NewEmployeesComponent_Template_button_submit_27_listener() { return ctx.formSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 10, "new_employee.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 12, "new_employee.description"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.alertMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 14, "new_employee.form.name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newEmployeeData.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 16, "new_employee.form.salary"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newEmployeeData.salary);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 18, "new_employee.form.age"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newEmployeeData.age);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 20, "new_employee.form.button"));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]], styles: [".new-employee__container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  width: 100%;\r\n  max-width: 600px;\r\n  margin: 0 auto;\r\n  padding: 50px 0 ;\r\n  justify-content: space-between;\r\n}\r\n\r\n.new-employee__container--description[_ngcontent-%COMP%] {\r\n  color: rgb(82, 82, 82);\r\n}\r\n\r\n.new-employee__container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\r\n  margin-left: 20px;\r\n  width: 50%;\r\n}\r\n\r\nmat-form-field[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n.new-employee__btn--container[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  max-width: 600px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.button-block[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n@media (max-width: 500px){\r\n  .new-employee__container[_ngcontent-%COMP%]  {\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n  .new-employee__container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\r\n    width: 80%;\r\n    margin-top: 20px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy1lbXBsb3llZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFO0lBQ0Usc0JBQXNCO0lBQ3RCLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsVUFBVTtJQUNWLGdCQUFnQjtFQUNsQjtBQUNGIiwiZmlsZSI6Im5ldy1lbXBsb3llZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZXctZW1wbG95ZWVfX2NvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBhZGRpbmc6IDUwcHggMCA7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4ubmV3LWVtcGxveWVlX19jb250YWluZXItLWRlc2NyaXB0aW9uIHtcclxuICBjb2xvcjogcmdiKDgyLCA4MiwgODIpO1xyXG59XHJcblxyXG4ubmV3LWVtcGxveWVlX19jb250YWluZXIgZm9ybSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxubWF0LWZvcm0tZmllbGQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubmV3LWVtcGxveWVlX19idG4tLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiA2MDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmJ1dHRvbi1ibG9jayB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCl7XHJcbiAgLm5ldy1lbXBsb3llZV9fY29udGFpbmVyICB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgLm5ldy1lbXBsb3llZV9fY29udGFpbmVyIGZvcm0ge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewEmployeesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-new-employees',
                templateUrl: './new-employees.component.html',
                styleUrls: ['./new-employees.component.css']
            }]
    }], function () { return [{ type: src_app_service_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/admin/admin.component */ "cCTE");
/* harmony import */ var _components_detail_employee_detail_employee_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/detail-employee/detail-employee.component */ "hAdn");
/* harmony import */ var _components_hero_hero_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/hero/hero.component */ "Qbzz");
/* harmony import */ var _components_list_employees_list_employees_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/list-employees/list-employees.component */ "2jlQ");
/* harmony import */ var _components_new_employees_new_employees_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/new-employees/new-employees.component */ "qXJT");
/* harmony import */ var _components_not_found_component_not_found_component_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/not-found-component/not-found-component.component */ "0Q5V");










const routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: "home",
        component: _components_hero_hero_component__WEBPACK_IMPORTED_MODULE_4__["HeroComponent"]
    },
    {
        path: "employees",
        component: _components_list_employees_list_employees_component__WEBPACK_IMPORTED_MODULE_5__["ListEmployeesComponent"]
    },
    {
        path: "new-employee",
        component: _components_new_employees_new_employees_component__WEBPACK_IMPORTED_MODULE_6__["NewEmployeesComponent"]
    },
    {
        path: "employee/:userid",
        component: _components_detail_employee_detail_employee_component__WEBPACK_IMPORTED_MODULE_3__["DetailEmployeeComponent"]
    },
    {
        path: "admin",
        component: _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_2__["AdminComponent"]
    },
    {
        path: "not-found",
        component: _components_not_found_component_not_found_component_component__WEBPACK_IMPORTED_MODULE_7__["NotFoundComponentComponent"]
    },
    {
        path: '**',
        redirectTo: '/not-found'
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map