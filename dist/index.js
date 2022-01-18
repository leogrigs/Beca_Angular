/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/styles/sass/styles.scss":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/styles/sass/styles.scss ***!
  \**********************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Spartan:wght@700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Importing Font */\n/* Styling Thumb for diferents browsers */\n/* thumb = circle on the range */\n/* Font settings */\n* {\n  font-family: \"Spartan\", sans-serif;\n}\n\n.calc {\n  /* Background settings */\n  background-color: #3a4764;\n  width: 100vw;\n  height: 100vh;\n  transition: 500ms;\n  /* Keys or Bottons */\n  /* Toggle theme button */\n  /* Basics configs for styling input type range */\n}\n.calc__content {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.calc__keys {\n  background-color: #232c43;\n  border-radius: 10px;\n  padding: 10px;\n  transition: 500ms;\n}\n.calc__input {\n  background-color: #eae3dc;\n  color: #3a4764;\n  border: 2px solid #eae3dc;\n  border-radius: 5px;\n  box-shadow: 1px 1.5px 1px #b4a597;\n  margin: 10px;\n  height: 35px;\n  transition: 500ms;\n  /* Keys hover */\n  /* Keys activated */\n}\n.calc__input--result {\n  background-color: #182034;\n  color: #ffffff;\n  border: none;\n  margin-bottom: 20px;\n  text-align: right;\n  padding: 17px;\n  font-size: 32px;\n  border-radius: 10px;\n  transition: 500ms;\n}\n.calc__input--reset, .calc__input--del {\n  background-color: #637097;\n  color: #FFF;\n  box-shadow: 1px 1.5px 1px #404e72;\n  border: 2px solid #637097;\n  transition: 500ms;\n  margin: 10px;\n  height: 35px;\n  border-radius: 5px;\n}\n.calc__input--reset:hover, .calc__input--del:hover {\n  border: 2px solid #637097;\n  color: #637097;\n  background-color: rgba(255, 255, 255, 0);\n  transition: 0.5s;\n}\n.calc__input--reset:active, .calc__input--del:active {\n  box-shadow: 3px 3px 3px #404e72;\n  background-color: #637097;\n  color: #eae3dc;\n}\n.calc__input--del {\n  font-size: 13px;\n  padding: 0 3%;\n}\n.calc__input--equals {\n  background-color: #d03f2f;\n  color: #eae3dc;\n  box-shadow: 1px 1.5px 1px #93261a;\n  border: 2px solid #d03f2f;\n  transition: 500ms;\n  margin: 10px;\n  height: 35px;\n  border-radius: 5px;\n}\n.calc__input--equals:hover {\n  border: 2px solid #d03f2f;\n  color: #d03f2f;\n  background-color: rgba(255, 255, 255, 0);\n  transition: 0.5s;\n}\n.calc__input--equals:active {\n  box-shadow: 3px 3px 3px #93261a;\n  background-color: #d03f2f;\n  color: #eae3dc;\n}\n.calc__input:hover {\n  border: 2px solid #eae3dc;\n  color: #ffffff;\n  background-color: rgba(255, 255, 255, 0);\n  transition: 0.5s;\n}\n.calc__input:active {\n  box-shadow: 3px 3px 3px #b4a597;\n  background-color: #eae3dc;\n  color: #3a4764;\n}\n.calc input[type=range] {\n  -webkit-appearance: none;\n  /* Hides the slider so that custom slider can be made */\n  width: 100%;\n  /* Specific width is required for Firefox. */\n  background: transparent;\n  /* Otherwise white in Chrome */\n  /* WebKit/Blink */\n  /* Firefox & IE */\n}\n.calc input[type=range]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n}\n.calc input[type=range]:focus {\n  outline: none;\n  /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */\n}\n.calc input[type=range]::-ms-track {\n  width: 100%;\n  cursor: pointer;\n  /* Hides the slider so custom styles can be added */\n  background: transparent;\n  border-color: transparent;\n  color: transparent;\n}\n.calc input[type=range]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  border: none;\n  height: 18px;\n  width: 18px;\n  border-radius: 20px;\n  background: #d03f2f;\n  cursor: pointer;\n  box-shadow: 1px 1px 1px #93261a;\n  transition: 500ms;\n}\n.calc input[type=range]::-moz-range-thumb,\n.calc input[type=range] ::-ms-thumb {\n  -webkit-appearance: none;\n  border: none;\n  height: 18px;\n  width: 18px;\n  border-radius: 20px;\n  background: #d03f2f;\n  cursor: pointer;\n  box-shadow: 1px 1px 1px #93261a;\n}", "",{"version":3,"sources":["webpack://./src/styles/sass/styles.scss","webpack://./src/styles/sass/_mixin.scss","webpack://./src/styles/sass/_variables.scss"],"names":[],"mappings":"AAAA,mBAAA;ACqCA,yCAAA;AACA,gCAAA;AD7BA,kBAAA;AACA;EACE,kCAAA;AAJF;;AAOA;EAEE,wBAAA;EACA,yBEfW;EFgBX,YAAA;EACA,aAAA;EACA,iBENW;EFiBX,oBAAA;EAsFE,wBAAA;EACA,gDAAA;AApGJ;AAKE;EACE,kBAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;AAHJ;AAQE;EACI,yBE9BY;EF+BZ,mBAAA;EACA,aAAA;EACA,iBEtBO;AFgBb;AAUI;EACI,yBElCS;EFmCT,cEpCW;EFqCX,yBAAA;EACA,kBAAA;EACA,iCAAA;EACA,YAAA;EACA,YAAA;EACA,iBElCK;EF2FL,eAAA;EAKA,mBAAA;AApER;AASQ;EACI,yBEhDW;EFiDX,cEhDI;EFiDJ,YAAA;EACA,mBAAA;EACA,iBAAA;EACA,aAAA;EACA,eAAA;EACA,mBAAA;EACA,iBE9CC;AFuCb;AAUQ;EC9DJ,yBCSkB;EDRlB,WAAA;EACA,iCAAA;EACA,yBAAA;EACA,iBCSS;EDRT,YAAA;EACA,YAAA;EACA,kBAAA;ADuDJ;AAGY;ECtDR,yBAAA;EACA,cCHkB;EDIlB,wCAAA;EACA,gBAAA;ADsDJ;AACY;ECnDR,+BAAA;EACA,yBCVkB;EDWlB,cCda;AFmEjB;AAEQ;EACI,eAAA;EACA,aAAA;AAAZ;AAGQ;EACI,yBEtES;EFuET,cE5EK;EF6EL,iCAAA;EACA,yBAAA;EACA,iBExEC;EFyED,YAAA;EACA,YAAA;EACA,kBAAA;AADZ;AAGY;EACI,yBAAA;EACA,cEjFK;EFkFL,wCAAA;EACA,gBAAA;AADhB;AAIY;EACI,+BAAA;EACA,yBExFK;EFyFL,cE9FC;AF4FjB;AAOQ;ECjFJ,yBAAA;EACA,cCrBY;EDsBZ,wCAAA;EACA,gBAAA;AD6EJ;AAMQ;EC/EJ,+BAAA;EACA,yBC1Ba;ED2Bb,cChCS;AF4Gb;AAUQ;EACI,wBAAA;EACA,uDAAA;EACA,WAAA;EACA,4CAAA;EACA,uBAAA;EACA,8BAAA;EAqBA,iBAAA;EAMA,iBAAA;AAjCZ;AAQY;EACI,wBAAA;AANhB;AASY;EACI,aAAA;EACA,iHAAA;AAPhB;AAUY;EACI,WAAA;EACA,eAAA;EAEA,mDAAA;EACA,uBAAA;EACA,yBAAA;EACA,kBAAA;AAThB;AAaY;EC5GR,wBAAA;EACA,YAAA;EACA,YAAA;EACA,WAAA;EACA,mBAAA;EACA,mBCjCiB;EDkCjB,eAAA;EACA,+BAAA;EDuGY,iBExIH;AFoIb;AAQY;;EClHR,wBAAA;EACA,YAAA;EACA,YAAA;EACA,WAAA;EACA,mBAAA;EACA,mBCjCiB;EDkCjB,eAAA;EACA,+BAAA;AD8GJ","sourcesContent":["/* Importing Font */\r\n@import url('https://fonts.googleapis.com/css2?family=Spartan:wght@700&display=swap');\r\n\r\n// Variables\r\n@import '_variables';\r\n\r\n// Mixin\r\n@import '_mixin';\r\n\r\n/* Font settings */\r\n* {\r\n  font-family: 'Spartan', sans-serif;\r\n}\r\n\r\n.calc {\r\n\r\n  /* Background settings */\r\n  background-color: $background;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  transition: $transition;\r\n  \r\n  // Content settings\r\n  &__content {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n  }\r\n\r\n  \r\n  /* Keys or Bottons */\r\n  &__keys {\r\n      background-color: $background-dark;\r\n      border-radius: 10px;\r\n      padding: 10px;\r\n      transition: $transition;\r\n    }\r\n    \r\n    // Input Keys settings\r\n    &__input {\r\n        background-color: $key-background;\r\n        color: $key-color-bottom;\r\n        border: 2px solid $key-background;\r\n        border-radius: 5px;\r\n        box-shadow: 1px 1.5px 1px $key-shadow;\r\n        margin: 10px;\r\n        height: 35px;\r\n        transition: $transition;\r\n        \r\n        // Result settings\r\n        &--result{\r\n            background-color: $background-very-dark;\r\n            color: $key-color-top;\r\n            border: none;\r\n            margin-bottom: 20px;\r\n            text-align: right;\r\n            padding: 17px;\r\n            font-size: 32px;\r\n            border-radius: 10px;\r\n            transition: $transition;  \r\n        }\r\n\r\n        &--reset, &--del{\r\n            @include resetDellSettings();\r\n\r\n            &:hover{\r\n                @include resetDellHover();\r\n            }\r\n\r\n            &:active{\r\n                @include resetDellActivated();\r\n            }\r\n\r\n        }\r\n\r\n        &--del{\r\n            font-size: 13px;\r\n            padding: 0 3%;\r\n        }\r\n\r\n        &--equals{\r\n            background-color: $key-red-background;\r\n            color: $key-background;\r\n            box-shadow: 1px 1.5px 1px $key-red-shadow;\r\n            border: 2px solid $key-red-background;\r\n            transition: $transition;\r\n            margin: 10px;\r\n            height: 35px;\r\n            border-radius: 5px;\r\n\r\n            &:hover{\r\n                border: 2px solid $key-red-background;\r\n                color: $key-red-background;\r\n                background-color: hsla(0, 0%, 100%, 0);\r\n                transition: 0.5s;\r\n            }\r\n\r\n            &:active{\r\n                box-shadow: 3px 3px 3px $key-red-shadow;\r\n                background-color: $key-red-background;\r\n                color: $key-background;\r\n            }\r\n        }\r\n\r\n        /* Keys hover */\r\n        &:hover{\r\n            @include inputHoverAnnimations();\r\n        }\r\n\r\n        /* Keys activated */\r\n        &:active {\r\n            @include inputActivated();\r\n        }\r\n\r\n    }\r\n\r\n    /* Toggle theme button */\r\n    /* Basics configs for styling input type range */\r\n    input {\r\n        &[type=range]{\r\n            -webkit-appearance: none;\r\n            /* Hides the slider so that custom slider can be made */\r\n            width: 100%;\r\n            /* Specific width is required for Firefox. */\r\n            background: transparent;\r\n            /* Otherwise white in Chrome */\r\n\r\n            &::-webkit-slider-thumb{\r\n                -webkit-appearance: none;\r\n            }\r\n\r\n            &:focus{\r\n                outline: none;\r\n                /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */\r\n            }\r\n\r\n            &::-ms-track{\r\n                width: 100%;\r\n                cursor: pointer;\r\n    \r\n                /* Hides the slider so custom styles can be added */\r\n                background: transparent;\r\n                border-color: transparent;\r\n                color: transparent;\r\n            }\r\n\r\n            /* WebKit/Blink */\r\n            &::-webkit-slider-thumb{\r\n                @include thumbBrowser();\r\n                transition: $transition;\r\n            }\r\n\r\n            /* Firefox & IE */\r\n            &::-moz-range-thumb,\r\n            ::-ms-thumb{\r\n                @include thumbBrowser();\r\n            }\r\n        }\r\n    }\r\n}\r\n","@mixin resetDellSettings() {\r\n    background-color: $key-blue-background;\r\n    color: #FFF;\r\n    box-shadow: 1px 1.5px 1px $key-blue-shadow;\r\n    border: 2px solid $key-blue-background;\r\n    transition: $transition;\r\n    margin: 10px;\r\n    height: 35px;\r\n    border-radius: 5px;\r\n}\r\n\r\n@mixin resetDellHover() {\r\n    border: 2px solid $key-blue-background;\r\n    color: $key-blue-background;\r\n    background-color: hsla(0, 0%, 100%, 0);\r\n    transition: 0.5s;\r\n}\r\n\r\n@mixin resetDellActivated() {\r\n    box-shadow: 3px 3px 3px $key-blue-shadow;\r\n    background-color: $key-blue-background;\r\n    color: $key-background;\r\n}\r\n\r\n@mixin inputHoverAnnimations() {\r\n    border: 2px solid $key-background;\r\n    color: $key-color-top;\r\n    background-color: hsla(0, 0%, 100%, 0);\r\n    transition: 0.5s;\r\n}\r\n\r\n@mixin inputActivated() {\r\n    box-shadow: 3px 3px 3px $key-shadow;\r\n    background-color: $key-background;\r\n    color: $background;\r\n}\r\n\r\n/* Styling Thumb for diferents browsers */\r\n/* thumb = circle on the range */\r\n@mixin thumbBrowser() {\r\n    -webkit-appearance: none;\r\n    border: none;\r\n    height: 18px;\r\n    width: 18px;\r\n    border-radius: 20px;\r\n    background: $key-red-background;\r\n    cursor: pointer;\r\n    box-shadow: 1px 1px 1px $key-red-shadow;\r\n}","\r\n// Variables\r\n$background: #3a4764;\r\n$background-dark: #232c43;\r\n$background-very-dark: #182034;\r\n$key-color-top: #ffffff;\r\n$key-color-bottom: #3a4764;\r\n$key-background: #eae3dc;\r\n$key-background-dark: #dfd9d2;\r\n$key-shadow: #b4a597;\r\n$key-blue-background: #637097;\r\n$key-blue-shadow: #404e72;\r\n$key-red-background: #d03f2f;\r\n$key-red-shadow: #93261a;\r\n$transition: 500ms;\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/sass/styles.scss":
/*!*************************************!*\
  !*** ./src/styles/sass/styles.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/styles/sass/styles.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_sass_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/sass/styles.scss */ "./src/styles/sass/styles.scss");

var Calculator = /** @class */ (function () {
    function Calculator() {
        // get the result element
        this.result = document.getElementById("result");
    }
    // Input numbers by key pressed
    Calculator.prototype.input = function (num) {
        if (num === 'x') {
            num = '*';
        }
        var number = this.result.value;
        this.result.value = number + num;
    };
    // Calculator logic
    Calculator.prototype.calc = function () {
        if (this.result.value != "") {
            var result2 = this.result.value;
            this.result.value = eval(result2);
        }
        else {
            alert("Erro! Adicione valores válidos.");
        }
    };
    // Reset button
    Calculator.prototype.reset = function () {
        this.result.value = "";
    };
    // Del button
    Calculator.prototype.del = function () {
        var result2 = this.result.value;
        this.result.value = result2.substring(0, result2.length - 1);
    };
    return Calculator;
}());
var calculator = new Calculator();
document.querySelectorAll('.calc__input').forEach(function (elemento) {
    var element = elemento;
    element.addEventListener('click', function (evt) {
        evt.preventDefault();
        calculator.input(element.value);
    });
});
document.getElementById('del').addEventListener('click', function (evt) {
    evt.preventDefault();
    calculator.del();
});
document.getElementById('equals').addEventListener('click', function (evt) {
    evt.preventDefault();
    calculator.calc();
});
document.getElementById('reset').addEventListener('click', function (evt) {
    evt.preventDefault();
    calculator.reset();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUssRUFBRSxDQUFDO0FBQ3JCLENBQUMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2FsY3VsYXRvci8uL3NyYy9zdHlsZXMvc2Fzcy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly9jYWxjdWxhdG9yLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9jYWxjdWxhdG9yLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vY2FsY3VsYXRvci8uL3NyYy9zdHlsZXMvc2Fzcy9zdHlsZXMuc2Nzcz9jMWFiIiwid2VicGFjazovL2NhbGN1bGF0b3IvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vY2FsY3VsYXRvci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vY2FsY3VsYXRvci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9jYWxjdWxhdG9yLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2NhbGN1bGF0b3IvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9jYWxjdWxhdG9yLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vY2FsY3VsYXRvci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jYWxjdWxhdG9yL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2NhbGN1bGF0b3Ivd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2NhbGN1bGF0b3Ivd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jYWxjdWxhdG9yL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY2FsY3VsYXRvci8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVNwYXJ0YW46d2dodEA3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogSW1wb3J0aW5nIEZvbnQgKi9cXG4vKiBTdHlsaW5nIFRodW1iIGZvciBkaWZlcmVudHMgYnJvd3NlcnMgKi9cXG4vKiB0aHVtYiA9IGNpcmNsZSBvbiB0aGUgcmFuZ2UgKi9cXG4vKiBGb250IHNldHRpbmdzICovXFxuKiB7XFxuICBmb250LWZhbWlseTogXFxcIlNwYXJ0YW5cXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uY2FsYyB7XFxuICAvKiBCYWNrZ3JvdW5kIHNldHRpbmdzICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2E0NzY0O1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHRyYW5zaXRpb246IDUwMG1zO1xcbiAgLyogS2V5cyBvciBCb3R0b25zICovXFxuICAvKiBUb2dnbGUgdGhlbWUgYnV0dG9uICovXFxuICAvKiBCYXNpY3MgY29uZmlncyBmb3Igc3R5bGluZyBpbnB1dCB0eXBlIHJhbmdlICovXFxufVxcbi5jYWxjX19jb250ZW50IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcbi5jYWxjX19rZXlzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMzJjNDM7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHRyYW5zaXRpb246IDUwMG1zO1xcbn1cXG4uY2FsY19faW5wdXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VhZTNkYztcXG4gIGNvbG9yOiAjM2E0NzY0O1xcbiAgYm9yZGVyOiAycHggc29saWQgI2VhZTNkYztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJveC1zaGFkb3c6IDFweCAxLjVweCAxcHggI2I0YTU5NztcXG4gIG1hcmdpbjogMTBweDtcXG4gIGhlaWdodDogMzVweDtcXG4gIHRyYW5zaXRpb246IDUwMG1zO1xcbiAgLyogS2V5cyBob3ZlciAqL1xcbiAgLyogS2V5cyBhY3RpdmF0ZWQgKi9cXG59XFxuLmNhbGNfX2lucHV0LS1yZXN1bHQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4MjAzNDtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgcGFkZGluZzogMTdweDtcXG4gIGZvbnQtc2l6ZTogMzJweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICB0cmFuc2l0aW9uOiA1MDBtcztcXG59XFxuLmNhbGNfX2lucHV0LS1yZXNldCwgLmNhbGNfX2lucHV0LS1kZWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYzNzA5NztcXG4gIGNvbG9yOiAjRkZGO1xcbiAgYm94LXNoYWRvdzogMXB4IDEuNXB4IDFweCAjNDA0ZTcyO1xcbiAgYm9yZGVyOiAycHggc29saWQgIzYzNzA5NztcXG4gIHRyYW5zaXRpb246IDUwMG1zO1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgaGVpZ2h0OiAzNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG4uY2FsY19faW5wdXQtLXJlc2V0OmhvdmVyLCAuY2FsY19faW5wdXQtLWRlbDpob3ZlciB7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjNjM3MDk3O1xcbiAgY29sb3I6ICM2MzcwOTc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xcbiAgdHJhbnNpdGlvbjogMC41cztcXG59XFxuLmNhbGNfX2lucHV0LS1yZXNldDphY3RpdmUsIC5jYWxjX19pbnB1dC0tZGVsOmFjdGl2ZSB7XFxuICBib3gtc2hhZG93OiAzcHggM3B4IDNweCAjNDA0ZTcyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYzNzA5NztcXG4gIGNvbG9yOiAjZWFlM2RjO1xcbn1cXG4uY2FsY19faW5wdXQtLWRlbCB7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBwYWRkaW5nOiAwIDMlO1xcbn1cXG4uY2FsY19faW5wdXQtLWVxdWFscyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDAzZjJmO1xcbiAgY29sb3I6ICNlYWUzZGM7XFxuICBib3gtc2hhZG93OiAxcHggMS41cHggMXB4ICM5MzI2MWE7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjZDAzZjJmO1xcbiAgdHJhbnNpdGlvbjogNTAwbXM7XFxuICBtYXJnaW46IDEwcHg7XFxuICBoZWlnaHQ6IDM1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbi5jYWxjX19pbnB1dC0tZXF1YWxzOmhvdmVyIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNkMDNmMmY7XFxuICBjb2xvcjogI2QwM2YyZjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcbn1cXG4uY2FsY19faW5wdXQtLWVxdWFsczphY3RpdmUge1xcbiAgYm94LXNoYWRvdzogM3B4IDNweCAzcHggIzkzMjYxYTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkMDNmMmY7XFxuICBjb2xvcjogI2VhZTNkYztcXG59XFxuLmNhbGNfX2lucHV0OmhvdmVyIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNlYWUzZGM7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcbn1cXG4uY2FsY19faW5wdXQ6YWN0aXZlIHtcXG4gIGJveC1zaGFkb3c6IDNweCAzcHggM3B4ICNiNGE1OTc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWFlM2RjO1xcbiAgY29sb3I6ICMzYTQ3NjQ7XFxufVxcbi5jYWxjIGlucHV0W3R5cGU9cmFuZ2VdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIC8qIEhpZGVzIHRoZSBzbGlkZXIgc28gdGhhdCBjdXN0b20gc2xpZGVyIGNhbiBiZSBtYWRlICovXFxuICB3aWR0aDogMTAwJTtcXG4gIC8qIFNwZWNpZmljIHdpZHRoIGlzIHJlcXVpcmVkIGZvciBGaXJlZm94LiAqL1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAvKiBPdGhlcndpc2Ugd2hpdGUgaW4gQ2hyb21lICovXFxuICAvKiBXZWJLaXQvQmxpbmsgKi9cXG4gIC8qIEZpcmVmb3ggJiBJRSAqL1xcbn1cXG4uY2FsYyBpbnB1dFt0eXBlPXJhbmdlXTo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG4uY2FsYyBpbnB1dFt0eXBlPXJhbmdlXTpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgLyogUmVtb3ZlcyB0aGUgYmx1ZSBib3JkZXIuIFlvdSBzaG91bGQgcHJvYmFibHkgZG8gc29tZSBraW5kIG9mIGZvY3VzIHN0eWxpbmcgZm9yIGFjY2Vzc2liaWxpdHkgcmVhc29ucyB0aG91Z2guICovXFxufVxcbi5jYWxjIGlucHV0W3R5cGU9cmFuZ2VdOjotbXMtdHJhY2sge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICAvKiBIaWRlcyB0aGUgc2xpZGVyIHNvIGN1c3RvbSBzdHlsZXMgY2FuIGJlIGFkZGVkICovXFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbi5jYWxjIGlucHV0W3R5cGU9cmFuZ2VdOjotd2Via2l0LXNsaWRlci10aHVtYiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBoZWlnaHQ6IDE4cHg7XFxuICB3aWR0aDogMThweDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBiYWNrZ3JvdW5kOiAjZDAzZjJmO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggIzkzMjYxYTtcXG4gIHRyYW5zaXRpb246IDUwMG1zO1xcbn1cXG4uY2FsYyBpbnB1dFt0eXBlPXJhbmdlXTo6LW1vei1yYW5nZS10aHVtYixcXG4uY2FsYyBpbnB1dFt0eXBlPXJhbmdlXSA6Oi1tcy10aHVtYiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBoZWlnaHQ6IDE4cHg7XFxuICB3aWR0aDogMThweDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBiYWNrZ3JvdW5kOiAjZDAzZjJmO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggIzkzMjYxYTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zYXNzL3N0eWxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3Nhc3MvX21peGluLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc2Fzcy9fdmFyaWFibGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsbUJBQUE7QUNxQ0EseUNBQUE7QUFDQSxnQ0FBQTtBRDdCQSxrQkFBQTtBQUNBO0VBQ0Usa0NBQUE7QUFKRjs7QUFPQTtFQUVFLHdCQUFBO0VBQ0EseUJFZlc7RUZnQlgsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkVOVztFRmlCWCxvQkFBQTtFQXNGRSx3QkFBQTtFQUNBLGdEQUFBO0FBcEdKO0FBS0U7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7QUFISjtBQVFFO0VBQ0kseUJFOUJZO0VGK0JaLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGlCRXRCTztBRmdCYjtBQVVJO0VBQ0kseUJFbENTO0VGbUNULGNFcENXO0VGcUNYLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJFbENLO0VGMkZMLGVBQUE7RUFLQSxtQkFBQTtBQXBFUjtBQVNRO0VBQ0kseUJFaERXO0VGaURYLGNFaERJO0VGaURKLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCRTlDQztBRnVDYjtBQVVRO0VDOURKLHlCQ1NrQjtFRFJsQixXQUFBO0VBQ0EsaUNBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQ1NTO0VEUlQsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBRHVESjtBQUdZO0VDdERSLHlCQUFBO0VBQ0EsY0NIa0I7RURJbEIsd0NBQUE7RUFDQSxnQkFBQTtBRHNESjtBQUNZO0VDbkRSLCtCQUFBO0VBQ0EseUJDVmtCO0VEV2xCLGNDZGE7QUZtRWpCO0FBRVE7RUFDSSxlQUFBO0VBQ0EsYUFBQTtBQUFaO0FBR1E7RUFDSSx5QkV0RVM7RUZ1RVQsY0U1RUs7RUY2RUwsaUNBQUE7RUFDQSx5QkFBQTtFQUNBLGlCRXhFQztFRnlFRCxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBRFo7QUFHWTtFQUNJLHlCQUFBO0VBQ0EsY0VqRks7RUZrRkwsd0NBQUE7RUFDQSxnQkFBQTtBQURoQjtBQUlZO0VBQ0ksK0JBQUE7RUFDQSx5QkV4Rks7RUZ5RkwsY0U5RkM7QUY0RmpCO0FBT1E7RUNqRkoseUJBQUE7RUFDQSxjQ3JCWTtFRHNCWix3Q0FBQTtFQUNBLGdCQUFBO0FENkVKO0FBTVE7RUMvRUosK0JBQUE7RUFDQSx5QkMxQmE7RUQyQmIsY0NoQ1M7QUY0R2I7QUFVUTtFQUNJLHdCQUFBO0VBQ0EsdURBQUE7RUFDQSxXQUFBO0VBQ0EsNENBQUE7RUFDQSx1QkFBQTtFQUNBLDhCQUFBO0VBcUJBLGlCQUFBO0VBTUEsaUJBQUE7QUFqQ1o7QUFRWTtFQUNJLHdCQUFBO0FBTmhCO0FBU1k7RUFDSSxhQUFBO0VBQ0EsaUhBQUE7QUFQaEI7QUFVWTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBRUEsbURBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFUaEI7QUFhWTtFQzVHUix3QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJDakNpQjtFRGtDakIsZUFBQTtFQUNBLCtCQUFBO0VEdUdZLGlCRXhJSDtBRm9JYjtBQVFZOztFQ2xIUix3QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJDakNpQjtFRGtDakIsZUFBQTtFQUNBLCtCQUFBO0FEOEdKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIEltcG9ydGluZyBGb250ICovXFxyXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9U3BhcnRhbjp3Z2h0QDcwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG4vLyBWYXJpYWJsZXNcXHJcXG5AaW1wb3J0ICdfdmFyaWFibGVzJztcXHJcXG5cXHJcXG4vLyBNaXhpblxcclxcbkBpbXBvcnQgJ19taXhpbic7XFxyXFxuXFxyXFxuLyogRm9udCBzZXR0aW5ncyAqL1xcclxcbioge1xcclxcbiAgZm9udC1mYW1pbHk6ICdTcGFydGFuJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhbGMge1xcclxcblxcclxcbiAgLyogQmFja2dyb3VuZCBzZXR0aW5ncyAqL1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQ7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XFxyXFxuICBcXHJcXG4gIC8vIENvbnRlbnQgc2V0dGluZ3NcXHJcXG4gICZfX2NvbnRlbnQge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogNTAlO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgfVxcclxcblxcclxcbiAgXFxyXFxuICAvKiBLZXlzIG9yIEJvdHRvbnMgKi9cXHJcXG4gICZfX2tleXMge1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWRhcms7XFxyXFxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICAgIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICAvLyBJbnB1dCBLZXlzIHNldHRpbmdzXFxyXFxuICAgICZfX2lucHV0IHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRrZXktYmFja2dyb3VuZDtcXHJcXG4gICAgICAgIGNvbG9yOiAka2V5LWNvbG9yLWJvdHRvbTtcXHJcXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRrZXktYmFja2dyb3VuZDtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgICAgIGJveC1zaGFkb3c6IDFweCAxLjVweCAxcHggJGtleS1zaGFkb3c7XFxyXFxuICAgICAgICBtYXJnaW46IDEwcHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDM1cHg7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcXHJcXG4gICAgICAgIFxcclxcbiAgICAgICAgLy8gUmVzdWx0IHNldHRpbmdzXFxyXFxuICAgICAgICAmLS1yZXN1bHR7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtdmVyeS1kYXJrO1xcclxcbiAgICAgICAgICAgIGNvbG9yOiAka2V5LWNvbG9yLXRvcDtcXHJcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nOiAxN3B4O1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzJweDtcXHJcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICAgICAgICAgIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uOyAgXFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAmLS1yZXNldCwgJi0tZGVse1xcclxcbiAgICAgICAgICAgIEBpbmNsdWRlIHJlc2V0RGVsbFNldHRpbmdzKCk7XFxyXFxuXFxyXFxuICAgICAgICAgICAgJjpob3ZlcntcXHJcXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgcmVzZXREZWxsSG92ZXIoKTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgJjphY3RpdmV7XFxyXFxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHJlc2V0RGVsbEFjdGl2YXRlZCgpO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICYtLWRlbHtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XFxyXFxuICAgICAgICAgICAgcGFkZGluZzogMCAzJTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICYtLWVxdWFsc3tcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAka2V5LXJlZC1iYWNrZ3JvdW5kO1xcclxcbiAgICAgICAgICAgIGNvbG9yOiAka2V5LWJhY2tncm91bmQ7XFxyXFxuICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IDEuNXB4IDFweCAka2V5LXJlZC1zaGFkb3c7XFxyXFxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJGtleS1yZWQtYmFja2dyb3VuZDtcXHJcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcXHJcXG4gICAgICAgICAgICBtYXJnaW46IDEwcHg7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xcclxcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG5cXHJcXG4gICAgICAgICAgICAmOmhvdmVye1xcclxcbiAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAka2V5LXJlZC1iYWNrZ3JvdW5kO1xcclxcbiAgICAgICAgICAgICAgICBjb2xvcjogJGtleS1yZWQtYmFja2dyb3VuZDtcXHJcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgwLCAwJSwgMTAwJSwgMCk7XFxyXFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNXM7XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICY6YWN0aXZle1xcclxcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAzcHggM3B4IDNweCAka2V5LXJlZC1zaGFkb3c7XFxyXFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRrZXktcmVkLWJhY2tncm91bmQ7XFxyXFxuICAgICAgICAgICAgICAgIGNvbG9yOiAka2V5LWJhY2tncm91bmQ7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLyogS2V5cyBob3ZlciAqL1xcclxcbiAgICAgICAgJjpob3ZlcntcXHJcXG4gICAgICAgICAgICBAaW5jbHVkZSBpbnB1dEhvdmVyQW5uaW1hdGlvbnMoKTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC8qIEtleXMgYWN0aXZhdGVkICovXFxyXFxuICAgICAgICAmOmFjdGl2ZSB7XFxyXFxuICAgICAgICAgICAgQGluY2x1ZGUgaW5wdXRBY3RpdmF0ZWQoKTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAvKiBUb2dnbGUgdGhlbWUgYnV0dG9uICovXFxyXFxuICAgIC8qIEJhc2ljcyBjb25maWdzIGZvciBzdHlsaW5nIGlucHV0IHR5cGUgcmFuZ2UgKi9cXHJcXG4gICAgaW5wdXQge1xcclxcbiAgICAgICAgJlt0eXBlPXJhbmdlXXtcXHJcXG4gICAgICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAgICAgICAgICAgLyogSGlkZXMgdGhlIHNsaWRlciBzbyB0aGF0IGN1c3RvbSBzbGlkZXIgY2FuIGJlIG1hZGUgKi9cXHJcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgICAgICAvKiBTcGVjaWZpYyB3aWR0aCBpcyByZXF1aXJlZCBmb3IgRmlyZWZveC4gKi9cXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgICAgICAgICAvKiBPdGhlcndpc2Ugd2hpdGUgaW4gQ2hyb21lICovXFxyXFxuXFxyXFxuICAgICAgICAgICAgJjo6LXdlYmtpdC1zbGlkZXItdGh1bWJ7XFxyXFxuICAgICAgICAgICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgJjpmb2N1c3tcXHJcXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgICAgICAgICAgICAgLyogUmVtb3ZlcyB0aGUgYmx1ZSBib3JkZXIuIFlvdSBzaG91bGQgcHJvYmFibHkgZG8gc29tZSBraW5kIG9mIGZvY3VzIHN0eWxpbmcgZm9yIGFjY2Vzc2liaWxpdHkgcmVhc29ucyB0aG91Z2guICovXFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICY6Oi1tcy10cmFja3tcXHJcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgXFxyXFxuICAgICAgICAgICAgICAgIC8qIEhpZGVzIHRoZSBzbGlkZXIgc28gY3VzdG9tIHN0eWxlcyBjYW4gYmUgYWRkZWQgKi9cXHJcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgICAgICAgICAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgLyogV2ViS2l0L0JsaW5rICovXFxyXFxuICAgICAgICAgICAgJjo6LXdlYmtpdC1zbGlkZXItdGh1bWJ7XFxyXFxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRodW1iQnJvd3NlcigpO1xcclxcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgLyogRmlyZWZveCAmIElFICovXFxyXFxuICAgICAgICAgICAgJjo6LW1vei1yYW5nZS10aHVtYixcXHJcXG4gICAgICAgICAgICA6Oi1tcy10aHVtYntcXHJcXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgdGh1bWJCcm93c2VyKCk7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVxcclxcblwiLFwiQG1peGluIHJlc2V0RGVsbFNldHRpbmdzKCkge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAka2V5LWJsdWUtYmFja2dyb3VuZDtcXHJcXG4gICAgY29sb3I6ICNGRkY7XFxyXFxuICAgIGJveC1zaGFkb3c6IDFweCAxLjVweCAxcHggJGtleS1ibHVlLXNoYWRvdztcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgJGtleS1ibHVlLWJhY2tncm91bmQ7XFxyXFxuICAgIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xcclxcbiAgICBtYXJnaW46IDEwcHg7XFxyXFxuICAgIGhlaWdodDogMzVweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gcmVzZXREZWxsSG92ZXIoKSB7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICRrZXktYmx1ZS1iYWNrZ3JvdW5kO1xcclxcbiAgICBjb2xvcjogJGtleS1ibHVlLWJhY2tncm91bmQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMCwgMCUsIDEwMCUsIDApO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gcmVzZXREZWxsQWN0aXZhdGVkKCkge1xcclxcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDNweCAka2V5LWJsdWUtc2hhZG93O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAka2V5LWJsdWUtYmFja2dyb3VuZDtcXHJcXG4gICAgY29sb3I6ICRrZXktYmFja2dyb3VuZDtcXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIGlucHV0SG92ZXJBbm5pbWF0aW9ucygpIHtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgJGtleS1iYWNrZ3JvdW5kO1xcclxcbiAgICBjb2xvcjogJGtleS1jb2xvci10b3A7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMCwgMCUsIDEwMCUsIDApO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gaW5wdXRBY3RpdmF0ZWQoKSB7XFxyXFxuICAgIGJveC1zaGFkb3c6IDNweCAzcHggM3B4ICRrZXktc2hhZG93O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAka2V5LWJhY2tncm91bmQ7XFxyXFxuICAgIGNvbG9yOiAkYmFja2dyb3VuZDtcXHJcXG59XFxyXFxuXFxyXFxuLyogU3R5bGluZyBUaHVtYiBmb3IgZGlmZXJlbnRzIGJyb3dzZXJzICovXFxyXFxuLyogdGh1bWIgPSBjaXJjbGUgb24gdGhlIHJhbmdlICovXFxyXFxuQG1peGluIHRodW1iQnJvd3NlcigpIHtcXHJcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGhlaWdodDogMThweDtcXHJcXG4gICAgd2lkdGg6IDE4cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6ICRrZXktcmVkLWJhY2tncm91bmQ7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggJGtleS1yZWQtc2hhZG93O1xcclxcbn1cIixcIlxcclxcbi8vIFZhcmlhYmxlc1xcclxcbiRiYWNrZ3JvdW5kOiAjM2E0NzY0O1xcclxcbiRiYWNrZ3JvdW5kLWRhcms6ICMyMzJjNDM7XFxyXFxuJGJhY2tncm91bmQtdmVyeS1kYXJrOiAjMTgyMDM0O1xcclxcbiRrZXktY29sb3ItdG9wOiAjZmZmZmZmO1xcclxcbiRrZXktY29sb3ItYm90dG9tOiAjM2E0NzY0O1xcclxcbiRrZXktYmFja2dyb3VuZDogI2VhZTNkYztcXHJcXG4ka2V5LWJhY2tncm91bmQtZGFyazogI2RmZDlkMjtcXHJcXG4ka2V5LXNoYWRvdzogI2I0YTU5NztcXHJcXG4ka2V5LWJsdWUtYmFja2dyb3VuZDogIzYzNzA5NztcXHJcXG4ka2V5LWJsdWUtc2hhZG93OiAjNDA0ZTcyO1xcclxcbiRrZXktcmVkLWJhY2tncm91bmQ6ICNkMDNmMmY7XFxyXFxuJGtleS1yZWQtc2hhZG93OiAjOTMyNjFhO1xcclxcbiR0cmFuc2l0aW9uOiA1MDBtcztcXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzJdIS4vc3R5bGVzLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzJdIS4vc3R5bGVzLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZXMvc2Fzcy9zdHlsZXMuc2Nzcyc7XG5cbmNsYXNzIENhbGN1bGF0b3Ige1xuICAgIC8vIGdldCB0aGUgcmVzdWx0IGVsZW1lbnRcbiAgICByZXN1bHQgPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXN1bHRcIikgYXMgSFRNTElucHV0RWxlbWVudCk7XG5cbiAgICBjb25zdHJ1Y3Rvcigpe31cblxuICAgIC8vIElucHV0IG51bWJlcnMgYnkga2V5IHByZXNzZWRcbiAgICBpbnB1dChudW06IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBpZiAobnVtID09PSAneCcpIHsgbnVtID0gJyonOyB9XG4gICAgICAgIGNvbnN0IG51bWJlciA9IHRoaXMucmVzdWx0LnZhbHVlO1xuICAgICAgICB0aGlzLnJlc3VsdC52YWx1ZSA9IG51bWJlciArIG51bTtcbiAgICB9XG5cbiAgICAvLyBDYWxjdWxhdG9yIGxvZ2ljXG4gICAgY2FsYygpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMucmVzdWx0LnZhbHVlICE9IFwiXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdDIgPSB0aGlzLnJlc3VsdC52YWx1ZTtcbiAgICAgICAgICAgIHRoaXMucmVzdWx0LnZhbHVlID0gZXZhbChyZXN1bHQyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiRXJybyEgQWRpY2lvbmUgdmFsb3JlcyB2w6FsaWRvcy5cIilcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJlc2V0IGJ1dHRvblxuICAgIHJlc2V0KCkge1xuICAgICAgICB0aGlzLnJlc3VsdC52YWx1ZSA9IFwiXCI7XG4gICAgfVxuXG4gICAgLy8gRGVsIGJ1dHRvblxuICAgIGRlbCgpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0MiA9IHRoaXMucmVzdWx0LnZhbHVlO1xuICAgICAgICB0aGlzLnJlc3VsdC52YWx1ZSA9IHJlc3VsdDIuc3Vic3RyaW5nKDAsIHJlc3VsdDIubGVuZ3RoIC0gMSk7XG4gICAgfVxufVxuXG5jb25zdCBjYWxjdWxhdG9yOiBDYWxjdWxhdG9yID0gbmV3IENhbGN1bGF0b3IoKTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhbGNfX2lucHV0JykuZm9yRWFjaCgoZWxlbWVudG8pID0+IHtcbiAgICBsZXQgZWxlbWVudDpIVE1MSW5wdXRFbGVtZW50ID0gKGVsZW1lbnRvIGFzIEhUTUxJbnB1dEVsZW1lbnQpO1xuXHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2dCkgPT4ge1xuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGNhbGN1bGF0b3IuaW5wdXQoZWxlbWVudC52YWx1ZSlcblx0fSk7XG59KTtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlbCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2dCkgPT4ge1xuICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgY2FsY3VsYXRvci5kZWwoKTtcbn0pO1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXF1YWxzJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZ0KSA9PiB7XG4gIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICBjYWxjdWxhdG9yLmNhbGMoKTtcbn0pO1xuXG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNldCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2dCkgPT4ge1xuICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgY2FsY3VsYXRvci5yZXNldCgpO1xufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9