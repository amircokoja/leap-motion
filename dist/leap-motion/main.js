(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Amir Cokoja\source\repos\leap-motion\src\main.ts */"zUnb");


/***/ }),

/***/ "1ybz":
/*!********************************************************!*\
  !*** ./src/app/dashboard/doctors/doctors.component.ts ***!
  \********************************************************/
/*! exports provided: DoctorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorsComponent", function() { return DoctorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class DoctorsComponent {
    constructor() { }
    ngOnInit() {
    }
}
DoctorsComponent.ɵfac = function DoctorsComponent_Factory(t) { return new (t || DoctorsComponent)(); };
DoctorsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DoctorsComponent, selectors: [["app-doctors"]], decls: 0, vars: 0, template: function DoctorsComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkb2N0b3JzLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DoctorsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-doctors',
                templateUrl: './doctors.component.html',
                styleUrls: ['./doctors.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AZPM":
/*!*********************************************************************!*\
  !*** ./src/app/components/text-keyboard/text-keyboard.component.ts ***!
  \*********************************************************************/
/*! exports provided: TextKeyboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextKeyboardComponent", function() { return TextKeyboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class TextKeyboardComponent {
    constructor() {
        this.input = '';
        this.onInputUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    onInput(value) {
        if (value === 'DELETE') {
            this.input = this.input.slice(0, -1);
        }
        else {
            this.input = this.input + value;
        }
        this.onInputUpdate.emit(this.input);
    }
    handleSubmit() {
        this.onSubmit.emit();
    }
}
TextKeyboardComponent.ɵfac = function TextKeyboardComponent_Factory(t) { return new (t || TextKeyboardComponent)(); };
TextKeyboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TextKeyboardComponent, selectors: [["app-text-keyboard"]], outputs: { onInputUpdate: "onInputUpdate", onSubmit: "onSubmit" }, decls: 79, vars: 0, consts: [["id", "text-keyboard"], [1, "row"], [1, "input", 3, "click"], [1, "input", "special", 3, "click"]], template: function TextKeyboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TextKeyboardComponent_Template_div_click_2_listener() { return ctx.onInput("1"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TextKeyboardComponent_Template_div_click_4_listener() { return ctx.onInput("2"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TextKeyboardComponent_Template_div_click_6_listener() { return ctx.onInput("3"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TextKeyboardComponent_Template_div_click_8_listener() { return ctx.onInput("4"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TextKeyboardComponent_Template_div_click_10_listener() { return ctx.onInput("5"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TextKeyboardComponent_Template_div_click_12_listener() { return ctx.onInput("6"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TextKeyboardComponent_Template_div_click_14_listener() { return ctx.onInput("7"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TextKeyboardComponent_Template_div_click_16_listener() { return ctx.onInput("8"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TextKeyboardComponent_Template_div_click_18_listener() { return ctx.onInput("9"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TextKeyboardComponent_Template_div_click_20_listener() { return ctx.onInput("DELETE"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "DELETE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TextKeyboardComponent_Template_div_click_23_listener() { return ctx.onInput("Q"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Q");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TextKeyboardComponent_Template_div_click_25_listener() { return ctx.onInput("W"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "W");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TextKeyboardComponent_Template_div_click_27_listener() { return ctx.onInput("E"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TextKeyboardComponent_Template_div_click_29_listener() { return ctx.onInput("R"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "R");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TextKeyboardComponent_Template_div_click_31_listener() { return ctx.onInput("T"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "T");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TextKeyboardComponent_Template_div_click_33_listener() { return ctx.onInput("Y"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Y");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TextKeyboardComponent_Template_div_click_35_listener() { return ctx.onInput("U"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "U");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TextKeyboardComponent_Template_div_click_37_listener() { return ctx.onInput("I"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "I");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TextKeyboardComponent_Template_div_click_39_listener() { return ctx.onInput("1O"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "O");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TextKeyboardComponent_Template_div_click_41_listener() { return ctx.onInput("P"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "P");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TextKeyboardComponent_Template_div_click_44_listener() { return ctx.onInput("A"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TextKeyboardComponent_Template_div_click_46_listener() { return ctx.onInput("S"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "S");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TextKeyboardComponent_Template_div_click_48_listener() { return ctx.onInput("D"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TextKeyboardComponent_Template_div_click_50_listener() { return ctx.onInput("F"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TextKeyboardComponent_Template_div_click_52_listener() { return ctx.onInput("G"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "G");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TextKeyboardComponent_Template_div_click_54_listener() { return ctx.onInput("H"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "H");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TextKeyboardComponent_Template_div_click_56_listener() { return ctx.onInput("J"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "J");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TextKeyboardComponent_Template_div_click_58_listener() { return ctx.onInput("K"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "K");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TextKeyboardComponent_Template_div_click_60_listener() { return ctx.onInput("L"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "L");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TextKeyboardComponent_Template_div_click_63_listener() { return ctx.onInput("Z"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Z");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TextKeyboardComponent_Template_div_click_65_listener() { return ctx.onInput("X"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "X");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TextKeyboardComponent_Template_div_click_67_listener() { return ctx.onInput("C"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TextKeyboardComponent_Template_div_click_69_listener() { return ctx.onInput("V"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "V");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TextKeyboardComponent_Template_div_click_71_listener() { return ctx.onInput("B"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TextKeyboardComponent_Template_div_click_73_listener() { return ctx.onInput("N"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "N");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TextKeyboardComponent_Template_div_click_75_listener() { return ctx.onInput("M"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "M");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TextKeyboardComponent_Template_div_click_77_listener() { return ctx.handleSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "OK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#text-keyboard[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 500px;\n  display: flex;\n  flex-direction: column;\n  background-color: #282c2d;\n  padding: 20px;\n}\n#text-keyboard[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n#text-keyboard[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%] {\n  flex: 1;\n  background-color: #393b3d;\n  border-radius: 10px;\n  margin: 10px;\n  height: 100px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n  cursor: pointer;\n  font-size: 28px;\n}\n#text-keyboard[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .input.special[_ngcontent-%COMP%] {\n  flex: 2;\n}\n#text-keyboard[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]:hover {\n  color: #bdbdbd;\n  background-color: #262a2e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx0ZXh0LWtleWJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7QUFDRjtBQUNFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7QUFDSjtBQUNJO0VBQ0UsT0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLDJDQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFDTjtBQUVJO0VBQ0UsT0FBQTtBQUFOO0FBR0k7RUFDRSxjQUFBO0VBQ0EseUJBQUE7QUFETiIsImZpbGUiOiJ0ZXh0LWtleWJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3RleHQta2V5Ym9hcmQge1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDUwMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyYzJkO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcblxyXG4gIC5yb3cge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgIC5pbnB1dCB7XHJcbiAgICAgIGZsZXg6IDE7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzOTNiM2Q7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI0KSAwcHggM3B4IDhweDtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmlucHV0LnNwZWNpYWwge1xyXG4gICAgICBmbGV4OiAyO1xyXG4gICAgfVxyXG5cclxuICAgIC5pbnB1dDpob3ZlciB7XHJcbiAgICAgIGNvbG9yOiByZ2IoMTg5LCAxODksIDE4OSk7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNjJhMmU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TextKeyboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-text-keyboard',
                templateUrl: './text-keyboard.component.html',
                styleUrls: ['./text-keyboard.component.scss'],
            }]
    }], function () { return []; }, { onInputUpdate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onSubmit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


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

/***/ "BsnK":
/*!************************************************!*\
  !*** ./src/app/about-us/about-us.component.ts ***!
  \************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AboutUsComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutUsComponent.ɵfac = function AboutUsComponent_Factory(t) { return new (t || AboutUsComponent)(); };
AboutUsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutUsComponent, selectors: [["app-about-us"]], decls: 2, vars: 0, template: function AboutUsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "about-us works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dC11cy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutUsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about-us',
                templateUrl: './about-us.component.html',
                styleUrls: ['./about-us.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "GpQ5":
/*!****************************************************************!*\
  !*** ./src/app/check-in-preview/check-in-preview.component.ts ***!
  \****************************************************************/
/*! exports provided: CheckInPreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckInPreviewComponent", function() { return CheckInPreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_loading_bar_loading_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/loading-bar/loading-bar.component */ "xFT7");




class CheckInPreviewComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() { }
    onItemClick() {
        this.router.navigate(['/confirmation']);
    }
    goBack() {
        this.router.navigate(['/check-in']);
    }
}
CheckInPreviewComponent.ɵfac = function CheckInPreviewComponent_Factory(t) { return new (t || CheckInPreviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
CheckInPreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CheckInPreviewComponent, selectors: [["app-check-in-preview"]], decls: 39, vars: 2, consts: [["id", "preview", 1, "bg-p"], [1, "loading-bar"], [3, "steps", "progress"], [1, "container"], [1, "items"], [1, "item", 3, "click"], [1, "item-image"], ["src", "../../assets/orthopedy.svg", "alt", "Orthopedy"], [1, "all-details"], [1, "details"], [1, "clinic"], [1, "timing"], [1, "timing-item"], [1, "timing-img"], ["src", "../../assets/clock.svg", "alt", "Clock"], ["src", "../../assets/people.svg", "alt", "Clock"], ["src", "../../assets/time.svg", "alt", "Clock"], ["id", "back-button", 3, "click"], ["src", "../../assets/back.svg", "alt", "Back button"]], template: function CheckInPreviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-loading-bar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Please select your appointment and review the details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckInPreviewComponent_Template_div_click_7_listener() { return ctx.onItemClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "March 21, 2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Orthopedy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "C Block Floor 2 Clinic 9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Dr. Fatma Bulut");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "10:30");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "3 people in queue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Your turn in 28 min");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckInPreviewComponent_Template_div_click_37_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("steps", 2)("progress", 1);
    } }, directives: [_components_loading_bar_loading_bar_component__WEBPACK_IMPORTED_MODULE_2__["LoadingBarComponent"]], styles: ["#preview[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100vw;\n}\n#preview[_ngcontent-%COMP%]   .loading-bar[_ngcontent-%COMP%] {\n  padding-top: 64px;\n}\n#preview[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 70%;\n  margin: auto;\n}\n#preview[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-top: 64px;\n  margin-bottom: 67px;\n}\n#preview[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  padding: 48px 27px;\n  background: #ffffff;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 16px;\n  color: #3b413c;\n  display: flex;\n  width: 968px;\n  cursor: pointer;\n  margin: auto;\n}\n#preview[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item-image[_ngcontent-%COMP%] {\n  width: 176px;\n  height: 156px;\n  background: #019874;\n  box-shadow: 0px 4px 10px 2px rgba(0, 0, 0, 0.16);\n  border-radius: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n#preview[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin-bottom: 0;\n}\n#preview[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 36px;\n  margin-bottom: 0;\n}\n#preview[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-family: \"Raleway\", sans-serif;\n  margin-bottom: 0;\n  font-size: 32px;\n}\n#preview[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 0 20px;\n}\n#preview[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .clinic[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n#preview[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .all-details[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\n#preview[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .timing[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n#preview[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .timing-item[_ngcontent-%COMP%] {\n  display: flex;\n}\n#preview[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .timing-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 24px;\n}\n#preview[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .timing-item[_ngcontent-%COMP%]   .timing-img[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 10px;\n  width: 20px;\n}\n#preview[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover {\n  background-color: #019874;\n  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);\n  color: white;\n}\n#preview[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover   .item-image[_ngcontent-%COMP%] {\n  background: #fff;\n}\n#preview[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover   .item-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  filter: invert(44%) sepia(26%) saturate(1928%) hue-rotate(122deg) brightness(94%) contrast(99%);\n}\n#preview[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover   .timing-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  filter: invert(99%) sepia(4%) saturate(2%) hue-rotate(113deg) brightness(115%) contrast(100%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNoZWNrLWluLXByZXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQUNGO0FBQ0U7RUFDRSxpQkFBQTtBQUNKO0FBRUU7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBQUo7QUFDSTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUFDTjtBQUVJO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJDQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUFOO0FBRU07RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0RBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQVI7QUFHTTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQURSO0FBSU07RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUZSO0FBS007RUFDRSxnQkFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBSFI7QUFNTTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQUpSO0FBT007RUFDRSxrQkFBQTtBQUxSO0FBUU07RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0FBTlI7QUFTTTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FBUFI7QUFVTTtFQUNFLGFBQUE7QUFSUjtBQVVRO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FBUlY7QUFXUTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQVRWO0FBYU07RUFDRSx5QkFBQTtFQUNBLGlEQUFBO0VBQ0EsWUFBQTtBQVhSO0FBYVE7RUFDRSxnQkFBQTtBQVhWO0FBYVU7RUFDRSwrRkFBQTtBQVhaO0FBZ0JRO0VBQ0UsNkZBQUE7QUFkViIsImZpbGUiOiJjaGVjay1pbi1wcmV2aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3ByZXZpZXcge1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG5cclxuICAubG9hZGluZy1iYXIge1xyXG4gICAgcGFkZGluZy10b3A6IDY0cHg7XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBoMSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDY0cHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDY3cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLml0ZW0ge1xyXG4gICAgICBwYWRkaW5nOiA0OHB4IDI3cHg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICAgIGNvbG9yOiAjM2I0MTNjO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICB3aWR0aDogOTY4cHg7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG5cclxuICAgICAgLml0ZW0taW1hZ2Uge1xyXG4gICAgICAgIHdpZHRoOiAxNzZweDtcclxuICAgICAgICBoZWlnaHQ6IDE1NnB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMwMTk4NzQ7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDRweCAxMHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaDQge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGg1IHtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIiwgc2Fucy1zZXJpZjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmRldGFpbHMge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY2xpbmljIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5hbGwtZGV0YWlscyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC50aW1pbmcge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC50aW1pbmctaXRlbSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRpbWluZy1pbWcge1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAxOTg3NDtcclxuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICAgICAgLml0ZW0taW1hZ2Uge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuXHJcbiAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICBmaWx0ZXI6IGludmVydCg0NCUpIHNlcGlhKDI2JSkgc2F0dXJhdGUoMTkyOCUpIGh1ZS1yb3RhdGUoMTIyZGVnKVxyXG4gICAgICAgICAgICAgIGJyaWdodG5lc3MoOTQlKSBjb250cmFzdCg5OSUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRpbWluZy1pbWcgaW1nIHtcclxuICAgICAgICAgIGZpbHRlcjogaW52ZXJ0KDk5JSkgc2VwaWEoNCUpIHNhdHVyYXRlKDIlKSBodWUtcm90YXRlKDExM2RlZylcclxuICAgICAgICAgICAgYnJpZ2h0bmVzcygxMTUlKSBjb250cmFzdCgxMDAlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckInPreviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-check-in-preview',
                templateUrl: './check-in-preview.component.html',
                styleUrls: ['./check-in-preview.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "LZUX":
/*!**********************************************!*\
  !*** ./src/app/shared/data/departments.json ***!
  \**********************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":\"dep-1\",\"name\":\"Department 1\",\"description\":\"Description 1\"},{\"id\":\"dep-2\",\"name\":\"Department 2\",\"description\":\"Description 2\"},{\"id\":\"dep-3\",\"name\":\"Department 3\",\"description\":\"Description 3\"},{\"id\":\"dep-4\",\"name\":\"Department 4\",\"description\":\"Description 4\"},{\"id\":\"dep-5\",\"name\":\"Department 5\",\"description\":\"Description 5\"},{\"id\":\"dep-6\",\"name\":\"Department 6\",\"description\":\"Description 6\"}]");

/***/ }),

/***/ "QX6l":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_data_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/data/constants */ "ohuO");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class DashboardComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() { }
    onLoginNavigate(type) {
        if (type === 'login') {
            this.router.navigate(['/login'], { queryParams: { type: _shared_data_constants__WEBPACK_IMPORTED_MODULE_1__["TYPE_LOGIN"] } });
        }
        else {
            this.router.navigate(['/login'], {
                queryParams: { type: _shared_data_constants__WEBPACK_IMPORTED_MODULE_1__["TYPE_CREATE_APPOINTMENT"] },
            });
        }
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 13, vars: 0, consts: [["id", "dashboard", 1, "bg-p"], [1, "dashboard-container"], [1, "buttons"], ["routerLink", "/check-in", 1, "button-s"], [1, "button-s"], [1, "nurse-image"], ["src", "../../assets/nurse.svg", "alt", "Nurse"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Welcome! How can I help you today?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Check in to my appointment ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Make a new appointment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Login to my profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: ["#dashboard[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100vw;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n#dashboard[_ngcontent-%COMP%]   .dashboard-container[_ngcontent-%COMP%] {\n  text-align: center;\n}\n#dashboard[_ngcontent-%COMP%]   .dashboard-container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 67px;\n}\n#dashboard[_ngcontent-%COMP%]   .dashboard-container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .button-s[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n#dashboard[_ngcontent-%COMP%]   .nurse-image[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 64px;\n  left: 83px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNGO0FBQ0U7RUFDRSxrQkFBQTtBQUNKO0FBQ0k7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBQ047QUFDTTtFQUNFLG1CQUFBO0FBQ1I7QUFJRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFGSiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZGFzaGJvYXJkIHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAuZGFzaGJvYXJkLWNvbnRhaW5lciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgLmJ1dHRvbnMge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBtYXJnaW4tdG9wOiA2N3B4O1xyXG5cclxuICAgICAgLmJ1dHRvbi1zIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubnVyc2UtaW1hZ2Uge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiA2NHB4O1xyXG4gICAgbGVmdDogODNweDtcclxuICB9XHJcbn1cclxuXHJcbi8vICNkYXNoYm9hcmQge1xyXG4vLyAgIGhlaWdodDogMTAwdmg7XHJcbi8vICAgd2lkdGg6IDEwMHZ3O1xyXG5cclxuLy8gICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjgpLCByZ2JhKDAsIDAsIDAsIDAuOCkpLFxyXG4vLyAgICAgdXJsKFwiLi4vLi4vYXNzZXRzL3dhbGxwYXBlci0yLmpwZ1wiKTtcclxuLy8gICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4vLyAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcblxyXG4vLyAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbi8vICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbi8vICAgLmRhc2hib2FyZC1idXR0b25zIHtcclxuLy8gICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuLy8gICAgIC5idXR0b24ge1xyXG4vLyAgICAgICBtYXJnaW46IDIwcHggMDtcclxuLy8gICAgIH1cclxuLy8gICB9XHJcbi8vIH1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "QvDB":
/*!****************************************************************!*\
  !*** ./src/app/success-check-in/success-check-in.component.ts ***!
  \****************************************************************/
/*! exports provided: SuccessCheckInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessCheckInComponent", function() { return SuccessCheckInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class SuccessCheckInComponent {
    constructor(router) {
        this.router = router;
        this.redirectIn = 10;
    }
    ngOnInit() {
        this.intervalId = setInterval(() => {
            if (this.redirectIn === 0) {
                clearInterval(this.intervalId);
                this.router.navigate(['/start']);
            }
            else {
                this.redirectIn--;
            }
        }, 1000);
    }
}
SuccessCheckInComponent.ɵfac = function SuccessCheckInComponent_Factory(t) { return new (t || SuccessCheckInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
SuccessCheckInComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SuccessCheckInComponent, selectors: [["app-success-check-in"]], decls: 11, vars: 1, consts: [["id", "success", 1, "bg-p"], [1, "container"], ["src", "../../assets/success.svg", "alt", "Success"], [1, "doctor-image"], ["src", "../../assets/doctor.svg", "alt", "Doctor"]], template: function SuccessCheckInComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "You have successfully checked in.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Please be on time for your appointment.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Redirecting to Homepage in ", ctx.redirectIn >= 0 ? ctx.redirectIn : 0, "");
    } }, styles: ["#success[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100vw;\n  position: relative;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n#success[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  z-index: 1;\n}\n#success[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n#success[_ngcontent-%COMP%]   .doctor-image[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  bottom: 10px;\n}\n#success[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 65px;\n  font-size: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHN1Y2Nlc3MtY2hlY2staW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNGO0FBQ0U7RUFDRSxVQUFBO0FBQ0o7QUFBSTtFQUNFLG1CQUFBO0FBRU47QUFFRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7QUFBSjtBQUdFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FBREoiLCJmaWxlIjoic3VjY2Vzcy1jaGVjay1pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzdWNjZXNzIHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgaW1nIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5kb2N0b3ItaW1hZ2Uge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDEwcHg7XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIG1hcmdpbi10b3A6IDY1cHg7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SuccessCheckInComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-success-check-in',
                templateUrl: './success-check-in.component.html',
                styleUrls: ['./success-check-in.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "SWm3":
/*!*************************************************************************************!*\
  !*** ./src/app/components/print-request-success/print-request-success.component.ts ***!
  \*************************************************************************************/
/*! exports provided: PrintRequestSuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintRequestSuccessComponent", function() { return PrintRequestSuccessComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PrintRequestSuccessComponent {
    constructor() { }
    ngOnInit() {
    }
}
PrintRequestSuccessComponent.ɵfac = function PrintRequestSuccessComponent_Factory(t) { return new (t || PrintRequestSuccessComponent)(); };
PrintRequestSuccessComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PrintRequestSuccessComponent, selectors: [["app-print-request-success"]], decls: 2, vars: 0, template: function PrintRequestSuccessComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "print-request-success works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmludC1yZXF1ZXN0LXN1Y2Nlc3MuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrintRequestSuccessComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-print-request-success',
                templateUrl: './print-request-success.component.html',
                styleUrls: ['./print-request-success.component.scss']
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'leap-motion';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], null, null); })();


/***/ }),

/***/ "Y/mY":
/*!***************************************************************************!*\
  !*** ./src/app/components/check-in-success/check-in-success.component.ts ***!
  \***************************************************************************/
/*! exports provided: CheckInSuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckInSuccessComponent", function() { return CheckInSuccessComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");




class CheckInSuccessComponent {
    constructor(router, activeModal) {
        this.router = router;
        this.activeModal = activeModal;
    }
    ngOnInit() { }
    onOkay() {
        this.activeModal.close();
        this.router.navigate(['/dashboard']);
    }
}
CheckInSuccessComponent.ɵfac = function CheckInSuccessComponent_Factory(t) { return new (t || CheckInSuccessComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"])); };
CheckInSuccessComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CheckInSuccessComponent, selectors: [["app-check-in-success"]], decls: 5, vars: 0, consts: [[1, "button", 3, "click"]], template: function CheckInSuccessComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Success message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckInSuccessComponent_Template_button_click_3_listener() { return ctx.onOkay(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Okay");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGVjay1pbi1zdWNjZXNzLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckInSuccessComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-check-in-success',
                templateUrl: './check-in-success.component.html',
                styleUrls: ['./check-in-success.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _start_start_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./start/start.component */ "ss/J");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about-us/about-us.component */ "BsnK");
/* harmony import */ var _more_info_more_info_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./more-info/more-info.component */ "bPQF");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "QX6l");
/* harmony import */ var _dashboard_search_search_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/search/search.component */ "lvYI");
/* harmony import */ var _dashboard_doctors_doctors_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/doctors/doctors.component */ "1ybz");
/* harmony import */ var _check_in_check_in_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./check-in/check-in.component */ "qPHa");
/* harmony import */ var _components_keyboard_keyboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/keyboard/keyboard.component */ "s2+8");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _check_in_preview_check_in_preview_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./check-in-preview/check-in-preview.component */ "GpQ5");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _components_check_in_success_check_in_success_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/check-in-success/check-in-success.component */ "Y/mY");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _components_text_keyboard_text_keyboard_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/text-keyboard/text-keyboard.component */ "AZPM");
/* harmony import */ var _create_appointment_create_appointment_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./create-appointment/create-appointment.component */ "bbvh");
/* harmony import */ var _history_history_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./history/history.component */ "osJj");
/* harmony import */ var _components_appointment_summary_appointment_summary_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/appointment-summary/appointment-summary.component */ "f4dO");
/* harmony import */ var _components_print_request_success_print_request_success_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/print-request-success/print-request-success.component */ "SWm3");
/* harmony import */ var _components_loading_bar_loading_bar_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/loading-bar/loading-bar.component */ "xFT7");
/* harmony import */ var _check_in_confirmation_check_in_confirmation_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./check-in-confirmation/check-in-confirmation.component */ "g6BD");
/* harmony import */ var _success_check_in_success_check_in_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./success-check-in/success-check-in.component */ "QvDB");


























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _start_start_component__WEBPACK_IMPORTED_MODULE_4__["StartComponent"],
        _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_5__["AboutUsComponent"],
        _more_info_more_info_component__WEBPACK_IMPORTED_MODULE_6__["MoreInfoComponent"],
        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"],
        _dashboard_search_search_component__WEBPACK_IMPORTED_MODULE_8__["SearchComponent"],
        _dashboard_doctors_doctors_component__WEBPACK_IMPORTED_MODULE_9__["DoctorsComponent"],
        _check_in_check_in_component__WEBPACK_IMPORTED_MODULE_10__["CheckInComponent"],
        _components_keyboard_keyboard_component__WEBPACK_IMPORTED_MODULE_11__["KeyboardComponent"],
        _check_in_preview_check_in_preview_component__WEBPACK_IMPORTED_MODULE_13__["CheckInPreviewComponent"],
        _components_check_in_success_check_in_success_component__WEBPACK_IMPORTED_MODULE_15__["CheckInSuccessComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"],
        _components_text_keyboard_text_keyboard_component__WEBPACK_IMPORTED_MODULE_17__["TextKeyboardComponent"],
        _create_appointment_create_appointment_component__WEBPACK_IMPORTED_MODULE_18__["CreateAppointmentComponent"],
        _history_history_component__WEBPACK_IMPORTED_MODULE_19__["HistoryComponent"],
        _components_appointment_summary_appointment_summary_component__WEBPACK_IMPORTED_MODULE_20__["AppointmentSummaryComponent"],
        _components_print_request_success_print_request_success_component__WEBPACK_IMPORTED_MODULE_21__["PrintRequestSuccessComponent"],
        _components_loading_bar_loading_bar_component__WEBPACK_IMPORTED_MODULE_22__["LoadingBarComponent"],
        _check_in_confirmation_check_in_confirmation_component__WEBPACK_IMPORTED_MODULE_23__["CheckInConfirmationComponent"],
        _success_check_in_success_check_in_component__WEBPACK_IMPORTED_MODULE_24__["SuccessCheckInComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _start_start_component__WEBPACK_IMPORTED_MODULE_4__["StartComponent"],
                    _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_5__["AboutUsComponent"],
                    _more_info_more_info_component__WEBPACK_IMPORTED_MODULE_6__["MoreInfoComponent"],
                    _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"],
                    _dashboard_search_search_component__WEBPACK_IMPORTED_MODULE_8__["SearchComponent"],
                    _dashboard_doctors_doctors_component__WEBPACK_IMPORTED_MODULE_9__["DoctorsComponent"],
                    _check_in_check_in_component__WEBPACK_IMPORTED_MODULE_10__["CheckInComponent"],
                    _components_keyboard_keyboard_component__WEBPACK_IMPORTED_MODULE_11__["KeyboardComponent"],
                    _check_in_preview_check_in_preview_component__WEBPACK_IMPORTED_MODULE_13__["CheckInPreviewComponent"],
                    _components_check_in_success_check_in_success_component__WEBPACK_IMPORTED_MODULE_15__["CheckInSuccessComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"],
                    _components_text_keyboard_text_keyboard_component__WEBPACK_IMPORTED_MODULE_17__["TextKeyboardComponent"],
                    _create_appointment_create_appointment_component__WEBPACK_IMPORTED_MODULE_18__["CreateAppointmentComponent"],
                    _history_history_component__WEBPACK_IMPORTED_MODULE_19__["HistoryComponent"],
                    _components_appointment_summary_appointment_summary_component__WEBPACK_IMPORTED_MODULE_20__["AppointmentSummaryComponent"],
                    _components_print_request_success_print_request_success_component__WEBPACK_IMPORTED_MODULE_21__["PrintRequestSuccessComponent"],
                    _components_loading_bar_loading_bar_component__WEBPACK_IMPORTED_MODULE_22__["LoadingBarComponent"],
                    _check_in_confirmation_check_in_confirmation_component__WEBPACK_IMPORTED_MODULE_23__["CheckInConfirmationComponent"],
                    _success_check_in_success_check_in_component__WEBPACK_IMPORTED_MODULE_24__["SuccessCheckInComponent"],
                ],
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModule"]],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "bPQF":
/*!**************************************************!*\
  !*** ./src/app/more-info/more-info.component.ts ***!
  \**************************************************/
/*! exports provided: MoreInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoreInfoComponent", function() { return MoreInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class MoreInfoComponent {
    constructor() { }
    ngOnInit() {
    }
}
MoreInfoComponent.ɵfac = function MoreInfoComponent_Factory(t) { return new (t || MoreInfoComponent)(); };
MoreInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MoreInfoComponent, selectors: [["app-more-info"]], decls: 2, vars: 0, template: function MoreInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "more-info works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb3JlLWluZm8uY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MoreInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-more-info',
                templateUrl: './more-info.component.html',
                styleUrls: ['./more-info.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "bbvh":
/*!********************************************************************!*\
  !*** ./src/app/create-appointment/create-appointment.component.ts ***!
  \********************************************************************/
/*! exports provided: CreateAppointmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateAppointmentComponent", function() { return CreateAppointmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_appointment_summary_appointment_summary_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/appointment-summary/appointment-summary.component */ "f4dO");
/* harmony import */ var _shared_data_departments_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/data/departments.json */ "LZUX");
var _shared_data_departments_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../shared/data/departments.json */ "LZUX", 1);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function CreateAppointmentComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateAppointmentComponent_div_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const item_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onDepartmentClick(item_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.name, " ");
} }
class CreateAppointmentComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.departments = _shared_data_departments_json__WEBPACK_IMPORTED_MODULE_2__;
    }
    ngOnInit() { }
    onDepartmentClick(id) {
        this.modalService.open(_components_appointment_summary_appointment_summary_component__WEBPACK_IMPORTED_MODULE_1__["AppointmentSummaryComponent"], {
            backdrop: 'static',
            keyboard: false,
            centered: true,
        });
    }
}
CreateAppointmentComponent.ɵfac = function CreateAppointmentComponent_Factory(t) { return new (t || CreateAppointmentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"])); };
CreateAppointmentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateAppointmentComponent, selectors: [["app-create-appointment"]], decls: 3, vars: 1, consts: [["id", "create-appointment"], [1, "row"], ["class", "item", 3, "click", 4, "ngFor", "ngForOf"], [1, "item", 3, "click"]], template: function CreateAppointmentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreateAppointmentComponent_div_2_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.departments);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["#create-appointment[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100vw;\n  background-color: #f4f6f8;\n  padding: 80px;\n  display: flex;\n  flex-direction: column;\n}\n#create-appointment[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n#create-appointment[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  flex: 1 1 30%;\n  \n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100px;\n  border: 1px solid gray;\n  cursor: pointer;\n  margin: 10px;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNyZWF0ZS1hcHBvaW50bWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBQ0Y7QUFDRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0FBQ0o7QUFBSTtFQUNFLGFBQUE7RUFBZSx5QkFBQTtFQUNmLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUdOIiwiZmlsZSI6ImNyZWF0ZS1hcHBvaW50bWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjcmVhdGUtYXBwb2ludG1lbnQge1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGY2Zjg7XHJcbiAgcGFkZGluZzogODBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gIC5yb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIC5pdGVtIHtcclxuICAgICAgZmxleDogMSAxIDMwJTsgLypncm93IHwgc2hyaW5rIHwgYmFzaXMgKi9cclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateAppointmentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-create-appointment',
                templateUrl: './create-appointment.component.html',
                styleUrls: ['./create-appointment.component.scss'],
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] }]; }, null); })();


/***/ }),

/***/ "f4dO":
/*!*********************************************************************************!*\
  !*** ./src/app/components/appointment-summary/appointment-summary.component.ts ***!
  \*********************************************************************************/
/*! exports provided: AppointmentSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentSummaryComponent", function() { return AppointmentSummaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");




class AppointmentSummaryComponent {
    constructor(router, activeModal) {
        this.router = router;
        this.activeModal = activeModal;
    }
    ngOnInit() { }
    onOkay() {
        this.activeModal.close();
        this.router.navigate(['/dashboard']);
    }
}
AppointmentSummaryComponent.ɵfac = function AppointmentSummaryComponent_Factory(t) { return new (t || AppointmentSummaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"])); };
AppointmentSummaryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppointmentSummaryComponent, selectors: [["app-appointment-summary"]], decls: 5, vars: 0, consts: [[1, "button", 3, "click"]], template: function AppointmentSummaryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppointmentSummaryComponent_Template_button_click_3_listener() { return ctx.onOkay(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Okay");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBvaW50bWVudC1zdW1tYXJ5LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppointmentSummaryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-appointment-summary',
                templateUrl: './appointment-summary.component.html',
                styleUrls: ['./appointment-summary.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] }]; }, null); })();


/***/ }),

/***/ "g6BD":
/*!**************************************************************************!*\
  !*** ./src/app/check-in-confirmation/check-in-confirmation.component.ts ***!
  \**************************************************************************/
/*! exports provided: CheckInConfirmationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckInConfirmationComponent", function() { return CheckInConfirmationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_loading_bar_loading_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/loading-bar/loading-bar.component */ "xFT7");




class CheckInConfirmationComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() { }
    onItemClick() {
        this.router.navigate(['/success']);
    }
    goBack() {
        this.router.navigate(['/check-in-preview']);
    }
}
CheckInConfirmationComponent.ɵfac = function CheckInConfirmationComponent_Factory(t) { return new (t || CheckInConfirmationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
CheckInConfirmationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CheckInConfirmationComponent, selectors: [["app-check-in-confirmation"]], decls: 24, vars: 2, consts: [["id", "confirm", 1, "bg-p"], [1, "loading-bar"], [3, "steps", "progress"], [1, "container"], [1, "select-box"], [1, "box", 3, "click"], [1, "icon"], ["src", "../../assets/email.svg", "alt", "Email"], [1, "box-text"], ["src", "../../assets/message.svg", "alt", "Message"], ["src", "../../assets/print.svg", "alt", "Print"], ["id", "back-button", 3, "click"], ["src", "../../assets/back.svg", "alt", "Back button"]], template: function CheckInConfirmationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-loading-bar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Please choose your confirmation preference");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckInConfirmationComponent_Template_div_click_7_listener() { return ctx.onItemClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Send me the queue details via email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckInConfirmationComponent_Template_div_click_12_listener() { return ctx.onItemClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Send me the queue details via SMS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckInConfirmationComponent_Template_div_click_17_listener() { return ctx.onItemClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "I want a printed queue number slip");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckInConfirmationComponent_Template_div_click_22_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("steps", 2)("progress", 1);
    } }, directives: [_components_loading_bar_loading_bar_component__WEBPACK_IMPORTED_MODULE_2__["LoadingBarComponent"]], styles: ["#confirm[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100vw;\n}\n#confirm[_ngcontent-%COMP%]   .loading-bar[_ngcontent-%COMP%] {\n  padding-top: 64px;\n}\n#confirm[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 70%;\n  margin: auto;\n}\n#confirm[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-top: 64px;\n  margin-bottom: 67px;\n}\n#confirm[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .select-box[_ngcontent-%COMP%] {\n  display: flex;\n  cursor: pointer;\n}\n#confirm[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .select-box[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n  margin: 0 30px;\n  transition: 0.1s all;\n}\n#confirm[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .select-box[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n#confirm[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .select-box[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]:hover    > .icon[_ngcontent-%COMP%] {\n  background-color: #019874;\n}\n#confirm[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .select-box[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  background-color: #9db5b2;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  box-shadow: 0px 4px 10px 2px rgba(0, 0, 0, 0.16);\n  height: 172px;\n  width: 235px;\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n#confirm[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .select-box[_ngcontent-%COMP%]   .box-text[_ngcontent-%COMP%] {\n  background-color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 304px;\n  height: 112px;\n  border-radius: 10px;\n  text-align: center;\n  font-weight: 700;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNoZWNrLWluLWNvbmZpcm1hdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FBQ0Y7QUFDRTtFQUNFLGlCQUFBO0FBQ0o7QUFFRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFBSjtBQUNJO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQUNOO0FBRUk7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQUFOO0FBRU07RUFDRSxjQUFBO0VBQ0Esb0JBQUE7QUFBUjtBQUVRO0VBQ0UscUJBQUE7QUFBVjtBQUdRO0VBQ0UseUJBQUE7QUFEVjtBQUtNO0VBQ0UseUJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0RBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUhSO0FBTU07RUFDRSx1QkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBSlIiLCJmaWxlIjoiY2hlY2staW4tY29uZmlybWF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbmZpcm0ge1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG5cclxuICAubG9hZGluZy1iYXIge1xyXG4gICAgcGFkZGluZy10b3A6IDY0cHg7XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBoMSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDY0cHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDY3cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnNlbGVjdC1ib3gge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAuYm94IHtcclxuICAgICAgICBtYXJnaW46IDAgMzBweDtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjFzIGFsbDtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOmhvdmVyID4gLmljb24ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAxOTg3NDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5pY29uIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWRiNWIyO1xyXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDRweCAxMHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xyXG4gICAgICAgIGhlaWdodDogMTcycHg7XHJcbiAgICAgICAgd2lkdGg6IDIzNXB4O1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5ib3gtdGV4dCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHdpZHRoOiAzMDRweDtcclxuICAgICAgICBoZWlnaHQ6IDExMnB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckInConfirmationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-check-in-confirmation',
                templateUrl: './check-in-confirmation.component.html',
                styleUrls: ['./check-in-confirmation.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "lvYI":
/*!******************************************************!*\
  !*** ./src/app/dashboard/search/search.component.ts ***!
  \******************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SearchComponent {
    constructor() { }
    ngOnInit() {
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(); };
SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], decls: 2, vars: 0, template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "search works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWFyY2guY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-search',
                templateUrl: './search.component.html',
                styleUrls: ['./search.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ohuO":
/*!******************************************!*\
  !*** ./src/app/shared/data/constants.ts ***!
  \******************************************/
/*! exports provided: TYPE_CREATE_APPOINTMENT, TYPE_LOGIN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_CREATE_APPOINTMENT", function() { return TYPE_CREATE_APPOINTMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_LOGIN", function() { return TYPE_LOGIN; });
const TYPE_CREATE_APPOINTMENT = 'create-appointment';
const TYPE_LOGIN = 'login';


/***/ }),

/***/ "osJj":
/*!**********************************************!*\
  !*** ./src/app/history/history.component.ts ***!
  \**********************************************/
/*! exports provided: HistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryComponent", function() { return HistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_print_request_success_print_request_success_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/print-request-success/print-request-success.component */ "SWm3");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");




class HistoryComponent {
    constructor(modalService) {
        this.modalService = modalService;
    }
    ngOnInit() { }
    onPrint() {
        this.modalService.open(_components_print_request_success_print_request_success_component__WEBPACK_IMPORTED_MODULE_1__["PrintRequestSuccessComponent"], {
            backdrop: 'static',
            keyboard: false,
            centered: true,
        });
    }
}
HistoryComponent.ɵfac = function HistoryComponent_Factory(t) { return new (t || HistoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"])); };
HistoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HistoryComponent, selectors: [["app-history"]], decls: 5, vars: 0, consts: [["id", "history"], [1, "button", 3, "click"]], template: function HistoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "THIS IS HISTORY PAGE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HistoryComponent_Template_button_click_3_listener() { return ctx.onPrint(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "CREATE PRINT REQUEST");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoaXN0b3J5LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HistoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-history',
                templateUrl: './history.component.html',
                styleUrls: ['./history.component.scss'],
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }]; }, null); })();


/***/ }),

/***/ "qPHa":
/*!************************************************!*\
  !*** ./src/app/check-in/check-in.component.ts ***!
  \************************************************/
/*! exports provided: CheckInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckInComponent", function() { return CheckInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_loading_bar_loading_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/loading-bar/loading-bar.component */ "xFT7");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_keyboard_keyboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/keyboard/keyboard.component */ "s2+8");






class CheckInComponent {
    constructor(router) {
        this.router = router;
        this.value = '';
    }
    ngOnInit() { }
    onInputUpdate(value) {
        this.value = value;
    }
    onSubmit() {
        this.router.navigate(['/check-in-preview']);
    }
    goBack() {
        this.router.navigate(['/dashboard']);
    }
}
CheckInComponent.ɵfac = function CheckInComponent_Factory(t) { return new (t || CheckInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
CheckInComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CheckInComponent, selectors: [["app-check-in"]], decls: 12, vars: 3, consts: [["id", "check-in", 1, "bg-p"], [1, "loading-bar"], [3, "steps", "progress"], [1, "container"], [1, "check-in-input"], ["type", "text", "name", "value", "maxlength", "10", 3, "ngModel", "ngModelChange"], [1, "keyboard"], [3, "onInputUpdate", "onSubmit"], ["id", "back-button", 3, "click"], ["src", "../../assets/back.svg", "alt", "Back button"]], template: function CheckInComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-loading-bar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Please enter your ID number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CheckInComponent_Template_input_ngModelChange_7_listener($event) { return ctx.value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "app-keyboard", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onInputUpdate", function CheckInComponent_Template_app_keyboard_onInputUpdate_9_listener($event) { return ctx.onInputUpdate($event); })("onSubmit", function CheckInComponent_Template_app_keyboard_onSubmit_9_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckInComponent_Template_div_click_10_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("steps", 3)("progress", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.value);
    } }, directives: [_components_loading_bar_loading_bar_component__WEBPACK_IMPORTED_MODULE_2__["LoadingBarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _components_keyboard_keyboard_component__WEBPACK_IMPORTED_MODULE_4__["KeyboardComponent"]], styles: ["#check-in[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100vw;\n}\n#check-in[_ngcontent-%COMP%]   .loading-bar[_ngcontent-%COMP%] {\n  padding-top: 64px;\n}\n#check-in[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 750px;\n}\n#check-in[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-top: 64px;\n  margin-bottom: 67px;\n}\n#check-in[_ngcontent-%COMP%]   .check-in-input[_ngcontent-%COMP%] {\n  margin-bottom: 61px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNoZWNrLWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUFDRjtBQUNFO0VBQ0UsaUJBQUE7QUFDSjtBQUVFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0FBQUo7QUFDSTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUFDTjtBQUdFO0VBQ0UsbUJBQUE7QUFESiIsImZpbGUiOiJjaGVjay1pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjaGVjay1pbiB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICB3aWR0aDogMTAwdnc7XHJcblxyXG4gIC5sb2FkaW5nLWJhciB7XHJcbiAgICBwYWRkaW5nLXRvcDogNjRweDtcclxuICB9XHJcblxyXG4gIC5jb250YWluZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDc1MHB4O1xyXG4gICAgaDEge1xyXG4gICAgICBtYXJnaW4tdG9wOiA2NHB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA2N3B4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNoZWNrLWluLWlucHV0IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDYxcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckInComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-check-in',
                templateUrl: './check-in.component.html',
                styleUrls: ['./check-in.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "s2+8":
/*!***********************************************************!*\
  !*** ./src/app/components/keyboard/keyboard.component.ts ***!
  \***********************************************************/
/*! exports provided: KeyboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyboardComponent", function() { return KeyboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class KeyboardComponent {
    constructor() {
        this.input = '';
        this.onInputUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    onInput(value) {
        if (value === 'DELETE') {
            this.input = this.input.slice(0, -1);
        }
        else {
            this.input = this.input + value;
        }
        this.onInputUpdate.emit(this.input);
    }
    handleSubmit() {
        this.onSubmit.emit();
    }
}
KeyboardComponent.ɵfac = function KeyboardComponent_Factory(t) { return new (t || KeyboardComponent)(); };
KeyboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: KeyboardComponent, selectors: [["app-keyboard"]], outputs: { onInputUpdate: "onInputUpdate", onSubmit: "onSubmit" }, decls: 29, vars: 0, consts: [["id", "keyboard"], [1, "row"], [1, "input", 3, "click"], ["src", "../../../assets/delete.svg", "alt", "Delete"], [1, "input", "submit", 3, "click"]], template: function KeyboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KeyboardComponent_Template_div_click_2_listener() { return ctx.onInput("1"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KeyboardComponent_Template_div_click_4_listener() { return ctx.onInput("2"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KeyboardComponent_Template_div_click_6_listener() { return ctx.onInput("3"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KeyboardComponent_Template_div_click_9_listener() { return ctx.onInput("4"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KeyboardComponent_Template_div_click_11_listener() { return ctx.onInput("5"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KeyboardComponent_Template_div_click_13_listener() { return ctx.onInput("6"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KeyboardComponent_Template_div_click_16_listener() { return ctx.onInput("7"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KeyboardComponent_Template_div_click_18_listener() { return ctx.onInput("8"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KeyboardComponent_Template_div_click_20_listener() { return ctx.onInput("9"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KeyboardComponent_Template_div_click_23_listener() { return ctx.onInput("DELETE"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KeyboardComponent_Template_div_click_25_listener() { return ctx.onInput("0"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KeyboardComponent_Template_div_click_27_listener() { return ctx.handleSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#keyboard[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n#keyboard[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: flex;\n}\n#keyboard[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 103px;\n  margin: 7px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  font-size: 48px;\n  color: #3b413c;\n  border: 8px solid #9db5b2;\n  border-radius: 20px;\n  font-weight: bold;\n}\n#keyboard[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]:hover {\n  border-color: transparent;\n  background-color: #019874;\n  color: white;\n  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);\n}\n#keyboard[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .submit[_ngcontent-%COMP%] {\n  background-color: #9db5b2;\n  color: white;\n  font-size: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxrZXlib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQUNGO0FBQ0U7RUFDRSxhQUFBO0FBQ0o7QUFDSTtFQUNFLE9BQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBQ047QUFFSTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsaURBQUE7QUFBTjtBQUdJO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUROIiwiZmlsZSI6ImtleWJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2tleWJvYXJkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gIC5yb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAuaW5wdXQge1xyXG4gICAgICBmbGV4OiAxO1xyXG4gICAgICBoZWlnaHQ6IDEwM3B4O1xyXG4gICAgICBtYXJnaW46IDdweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgZm9udC1zaXplOiA0OHB4O1xyXG4gICAgICBjb2xvcjogIzNiNDEzYztcclxuICAgICAgYm9yZGVyOiA4cHggc29saWQgIzlkYjViMjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmlucHV0OmhvdmVyIHtcclxuICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAxOTg3NDtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBib3gtc2hhZG93OiBpbnNldCAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgfVxyXG5cclxuICAgIC5zdWJtaXQge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWRiNWIyO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KeyboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-keyboard',
                templateUrl: './keyboard.component.html',
                styleUrls: ['./keyboard.component.scss'],
            }]
    }], function () { return []; }, { onInputUpdate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onSubmit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "ss/J":
/*!******************************************!*\
  !*** ./src/app/start/start.component.ts ***!
  \******************************************/
/*! exports provided: StartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartComponent", function() { return StartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class StartComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() { }
    onGetStarted() {
        this.router.navigate(['/dashboard']);
    }
}
StartComponent.ɵfac = function StartComponent_Factory(t) { return new (t || StartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
StartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StartComponent, selectors: [["app-start"]], decls: 20, vars: 0, consts: [["id", "start", 1, "bg-p"], [1, "header"], [1, "header-container"], [1, "header-item"], ["routerLink", "/start", 1, "c-p"], [1, "content"], [1, "content-container"], [1, "button", 3, "click"], [1, "doctors-image"], ["src", "../../assets/doctors.svg", "alt", "Doctors"]], template: function StartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Need help?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "FAQ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Check in to your appointment or book a new one");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StartComponent_Template_button_click_16_listener() { return ctx.onGetStarted(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Get Started");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["#start[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100vw;\n  position: relative;\n}\n#start[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n#start[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%] {\n  padding: 64px 0;\n  width: 80%;\n  margin: auto;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n#start[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin: 0 32px;\n  text-decoration: none;\n  font-size: 20px;\n}\n#start[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #038062 !important;\n}\n#start[_ngcontent-%COMP%]   .doctors-image[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 21px;\n  left: 36px;\n}\n#start[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: auto;\n  position: relative;\n  z-index: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100vw;\n  height: 100vh;\n}\n#start[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%] {\n  width: 60%;\n  margin: auto;\n}\n#start[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHN0YXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUNGO0FBQ0U7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFFQSxXQUFBO0FBQUo7QUFFSTtFQUNFLGVBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBQU47QUFHSTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQUROO0FBR007RUFDRSx5QkFBQTtBQURSO0FBTUU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBSko7QUFPRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFMSjtBQU9JO0VBQ0UsVUFBQTtFQUNBLFlBQUE7QUFMTjtBQU9NO0VBQ0UsbUJBQUE7QUFMUiIsImZpbGUiOiJzdGFydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzdGFydCB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAuaGVhZGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuXHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAuaGVhZGVyLWNvbnRhaW5lciB7XHJcbiAgICAgIHBhZGRpbmc6IDY0cHggMDtcclxuICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5oZWFkZXItaXRlbSBhIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIG1hcmdpbjogMCAzMnB4O1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAjMDM4MDYyICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5kb2N0b3JzLWltYWdlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMjFweDtcclxuICAgIGxlZnQ6IDM2cHg7XHJcbiAgfVxyXG5cclxuICAuY29udGVudCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcblxyXG4gICAgLmNvbnRlbnQtY29udGFpbmVyIHtcclxuICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG5cclxuICAgICAgaDEge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDQ4cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-start',
                templateUrl: './start.component.html',
                styleUrls: ['./start.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


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
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-us/about-us.component */ "BsnK");
/* harmony import */ var _check_in_confirmation_check_in_confirmation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./check-in-confirmation/check-in-confirmation.component */ "g6BD");
/* harmony import */ var _check_in_preview_check_in_preview_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./check-in-preview/check-in-preview.component */ "GpQ5");
/* harmony import */ var _check_in_check_in_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./check-in/check-in.component */ "qPHa");
/* harmony import */ var _create_appointment_create_appointment_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-appointment/create-appointment.component */ "bbvh");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "QX6l");
/* harmony import */ var _dashboard_doctors_doctors_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/doctors/doctors.component */ "1ybz");
/* harmony import */ var _dashboard_search_search_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/search/search.component */ "lvYI");
/* harmony import */ var _history_history_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./history/history.component */ "osJj");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _more_info_more_info_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./more-info/more-info.component */ "bPQF");
/* harmony import */ var _start_start_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./start/start.component */ "ss/J");
/* harmony import */ var _success_check_in_success_check_in_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./success-check-in/success-check-in.component */ "QvDB");

















const routes = [
    { path: '', redirectTo: 'start', pathMatch: 'full' },
    { path: 'start', component: _start_start_component__WEBPACK_IMPORTED_MODULE_13__["StartComponent"] },
    { path: 'check-in', component: _check_in_check_in_component__WEBPACK_IMPORTED_MODULE_5__["CheckInComponent"] },
    { path: 'check-in-preview', component: _check_in_preview_check_in_preview_component__WEBPACK_IMPORTED_MODULE_4__["CheckInPreviewComponent"] },
    { path: 'about-us', component: _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_2__["AboutUsComponent"] },
    { path: 'confirmation', component: _check_in_confirmation_check_in_confirmation_component__WEBPACK_IMPORTED_MODULE_3__["CheckInConfirmationComponent"] },
    { path: 'more-info', component: _more_info_more_info_component__WEBPACK_IMPORTED_MODULE_12__["MoreInfoComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"] },
    { path: 'history', component: _history_history_component__WEBPACK_IMPORTED_MODULE_10__["HistoryComponent"] },
    { path: 'success', component: _success_check_in_success_check_in_component__WEBPACK_IMPORTED_MODULE_14__["SuccessCheckInComponent"] },
    { path: 'create-appointment', component: _create_appointment_create_appointment_component__WEBPACK_IMPORTED_MODULE_6__["CreateAppointmentComponent"] },
    {
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"],
        children: [
            { path: 'search', component: _dashboard_search_search_component__WEBPACK_IMPORTED_MODULE_9__["SearchComponent"] },
            { path: 'doctors', component: _dashboard_doctors_doctors_component__WEBPACK_IMPORTED_MODULE_8__["DoctorsComponent"] },
        ],
    },
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
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_data_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/data/constants */ "ohuO");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_text_keyboard_text_keyboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/text-keyboard/text-keyboard.component */ "AZPM");






class LoginComponent {
    constructor(router, route) {
        this.router = router;
        this.route = route;
        this.value = '';
    }
    ngOnInit() { }
    onInputUpdate(value) {
        this.value = value;
    }
    onSubmit() {
        console.log(this.route.snapshot.queryParams);
        const type = this.route.snapshot.queryParams.type;
        if (type === _shared_data_constants__WEBPACK_IMPORTED_MODULE_1__["TYPE_CREATE_APPOINTMENT"]) {
            this.router.navigate(['create-appointment']);
        }
        else {
            this.router.navigate(['history']);
        }
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 5, vars: 1, consts: [["id", "login"], [1, "check-in-input"], ["type", "text", "name", "value", "maxlength", "10", 3, "ngModel", "ngModelChange"], [1, "keyboard"], [3, "onInputUpdate", "onSubmit"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_2_listener($event) { return ctx.value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-text-keyboard", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onInputUpdate", function LoginComponent_Template_app_text_keyboard_onInputUpdate_4_listener($event) { return ctx.onInputUpdate($event); })("onSubmit", function LoginComponent_Template_app_text_keyboard_onSubmit_4_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.value);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _components_text_keyboard_text_keyboard_component__WEBPACK_IMPORTED_MODULE_4__["TextKeyboardComponent"]], styles: ["#login[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100vw;\n  background-color: #f4f6f8;\n  padding: 80px;\n}\n\n.keyboard[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtBQUNGIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2xvZ2luIHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNmY4O1xyXG4gIHBhZGRpbmc6IDgwcHg7XHJcbn1cclxuXHJcbi5rZXlib2FyZCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "xFT7":
/*!*****************************************************************!*\
  !*** ./src/app/components/loading-bar/loading-bar.component.ts ***!
  \*****************************************************************/
/*! exports provided: LoadingBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingBarComponent", function() { return LoadingBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class LoadingBarComponent {
    constructor() {
        this.steps = 1;
        this.progress = 0;
        this.classValue = 'asd';
    }
    ngOnInit() {
        console.log(this.steps);
        console.log(this.progress);
        if (this.steps === 3) {
        }
    }
    generateClass() {
        if (this.progress === 0) {
            return;
        }
        if (this.progress === this.steps) {
            this.classValue = 'full';
        }
        if (this.steps === 3) {
            if (this.progress === 1) {
                this.classValue === 'one-third';
            }
            else if (this.progress === 2) {
                this.classValue === 'two-thirds';
            }
        }
    }
}
LoadingBarComponent.ɵfac = function LoadingBarComponent_Factory(t) { return new (t || LoadingBarComponent)(); };
LoadingBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingBarComponent, selectors: [["app-loading-bar"]], inputs: { steps: "steps", progress: "progress" }, decls: 2, vars: 0, consts: [["id", "loading-bar"], [1, "progress"]], template: function LoadingBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#loading-bar[_ngcontent-%COMP%] {\n  width: 100vw;\n  background: #c4c4c4;\n  height: 67px;\n  position: relative;\n}\n#loading-bar[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  height: 67px;\n  width: 30%;\n  background: #9db5b2;\n}\n#loading-bar[_ngcontent-%COMP%]   .progress.full[_ngcontent-%COMP%] {\n  width: 100%;\n}\n#loading-bar[_ngcontent-%COMP%]   .progress.one-third[_ngcontent-%COMP%] {\n  width: 33%;\n}\n#loading-bar[_ngcontent-%COMP%]   .progress.two-thirds[_ngcontent-%COMP%] {\n  width: 66%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsb2FkaW5nLWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUNGO0FBQ0U7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFFRTtFQUNFLFdBQUE7QUFBSjtBQUdFO0VBQ0UsVUFBQTtBQURKO0FBSUU7RUFDRSxVQUFBO0FBRkoiLCJmaWxlIjoibG9hZGluZy1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbG9hZGluZy1iYXIge1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBiYWNrZ3JvdW5kOiAjYzRjNGM0O1xyXG4gIGhlaWdodDogNjdweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIC5wcm9ncmVzcyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgaGVpZ2h0OiA2N3B4O1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGJhY2tncm91bmQ6ICM5ZGI1YjI7XHJcbiAgfVxyXG5cclxuICAucHJvZ3Jlc3MuZnVsbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5wcm9ncmVzcy5vbmUtdGhpcmQge1xyXG4gICAgd2lkdGg6IDMzJTtcclxuICB9XHJcblxyXG4gIC5wcm9ncmVzcy50d28tdGhpcmRzIHtcclxuICAgIHdpZHRoOiA2NiU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loading-bar',
                templateUrl: './loading-bar.component.html',
                styleUrls: ['./loading-bar.component.scss'],
            }]
    }], function () { return []; }, { steps: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], progress: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


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