/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(2);
	////////////////////////////////////////////////
	// Utilities
	////////////////////////////////////////////////
	function getModelOptions() {
	    return [1, 2, 3];
	}
	function getPartOptions(model) {
	    return ["a", "b", "c"];
	}
	////////////////////////////////////////////////
	// Ticket Page
	////////////////////////////////////////////////
	var TicketPage = (function (_super) {
	    __extends(TicketPage, _super);
	    function TicketPage() {
	        return _super.apply(this, arguments) || this;
	    }
	    return TicketPage;
	}(React.Component));
	////////////////////////////////////////////////
	// Customer Info Section
	////////////////////////////////////////////////
	var CustInfo = (function (_super) {
	    __extends(CustInfo, _super);
	    function CustInfo() {
	        return _super.apply(this, arguments) || this;
	    }
	    CustInfo.prototype.render = function () {
	        var modelOptions = getModelOptions();
	        var models = modelOptions.map(function (model) {
	            return React.createElement("option", { value: "model", key: model }, model);
	        });
	        // TODO pass in model number here
	        var partOptions = getPartOptions("foo");
	        var parts = partOptions.map(function (part) {
	            return React.createElement("option", { value: "part", key: part }, part);
	        });
	        return (React.createElement("form", { action: "", method: "POST" },
	            React.createElement("label", { htmlFor: "firstName" }, "First Name: "),
	            React.createElement("input", { id: "firstName", type: "text" }),
	            React.createElement("label", { htmlFor: "lastName" }, "Last Name: "),
	            React.createElement("input", { id: "lastName", type: "text" }),
	            React.createElement("label", { htmlFor: "address" }, "Address 1: "),
	            React.createElement("input", { id: "address", type: "text" }),
	            React.createElement("label", { htmlFor: "address" }, "Address 2: "),
	            React.createElement("input", { id: "address", type: "text" }),
	            React.createElement("label", { htmlFor: "city" }, "City: "),
	            React.createElement("input", { id: "city", type: "text" }),
	            React.createElement("label", { htmlFor: "zipCode" }, "Zip Code: "),
	            React.createElement("input", { id: "zipCode", type: "text" }),
	            React.createElement("label", { htmlFor: "email" }, "Email: "),
	            React.createElement("input", { id: "email", type: "text" }),
	            React.createElement("label", { htmlFor: "phone" }, "Phone: "),
	            React.createElement("input", { id: "phone", type: "text" }),
	            React.createElement("label", { htmlFor: "models" }, "Models: "),
	            React.createElement("select", { name: "models", id: "models" }, models),
	            React.createElement("input", { type: "submit", value: "Submit" })));
	    };
	    return CustInfo;
	}(React.Component));
	////////////////////////////////////////////////
	// Activity Section
	// Activity obj = {date: "", content: ""}
	////////////////////////////////////////////////
	////////////////////////////////////////////////
	// Ticket List
	////////////////////////////////////////////////
	/*
	Gets list of all open email. Parses out relevant information and passes it to Ticket
	*/
	var TicketList = (function (_super) {
	    __extends(TicketList, _super);
	    function TicketList() {
	        return _super.apply(this, arguments) || this;
	    }
	    return TicketList;
	}(React.Component));
	var Ticket = (function (_super) {
	    __extends(Ticket, _super);
	    function Ticket() {
	        return _super.apply(this, arguments) || this;
	    }
	    return Ticket;
	}(React.Component));
	////////////////////////////////////////////////
	// Shared components
	////////////////////////////////////////////////
	var Nav = (function (_super) {
	    __extends(Nav, _super);
	    function Nav() {
	        return _super.apply(this, arguments) || this;
	    }
	    return Nav;
	}(React.Component));
	var Home = (function (_super) {
	    __extends(Home, _super);
	    function Home() {
	        return _super.apply(this, arguments) || this;
	    }
	    Home.prototype.render = function () {
	        return React.createElement("div", null,
	            "Hello yo yo",
	            React.createElement(CustInfo, null));
	    };
	    return Home;
	}(React.Component));
	function draw() {
	    console.log("new draw");
	    ReactDOM.render(React.createElement(Home, null), document.getElementById("root"));
	}
	draw();


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map