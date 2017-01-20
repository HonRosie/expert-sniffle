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
	var activityHistory = [];
	//////////////////
	//Utilities
	/////////////////
	function eventDispatch(action, args) {
	    switch (action) {
	        case "ship":
	            ship(args);
	            break;
	        case "refund":
	            console.log("here");
	            refund(args);
	            break;
	        case "emailCust":
	            emailCust(args);
	            break;
	        case "emailChina":
	            emailChina(args);
	            break;
	    }
	    draw();
	}
	function ship(args) {
	    var contentString = "action taken: " + args.value.content;
	    activityHistory.push({ content: contentString });
	    partsToShip.push({ "model": args.value.model, "part": args.value.part });
	}
	function refund(args) {
	    var contentString = "action taken: " + args.value.content;
	    activityHistory.push({ content: contentString });
	}
	function emailCust(args) {
	    var contentString = "action taken: " + args.value.content;
	    activityHistory.push({ content: contentString });
	}
	function emailChina(args) {
	    var contentString = "action taken: " + args.value.content;
	    activityHistory.push({ content: contentString });
	}
	//Renders list of completed actions
	var ActivityList = (function (_super) {
	    __extends(ActivityList, _super);
	    function ActivityList() {
	        return _super.apply(this, arguments) || this;
	    }
	    ActivityList.prototype.render = function () {
	        var activities = activityHistory.map(function (activity) {
	            return (React.createElement("div", null,
	                React.createElement(Activity, { activityData: activity })));
	        });
	        return (React.createElement("div", null,
	            React.createElement("ul", null, activities),
	            React.createElement(NewAction, null)));
	    };
	    return ActivityList;
	}(React.Component));
	var Activity = (function (_super) {
	    __extends(Activity, _super);
	    function Activity() {
	        return _super.apply(this, arguments) || this;
	    }
	    Activity.prototype.render = function () {
	        return (React.createElement("div", null,
	            React.createElement("div", null, this.props.activityData.content)));
	    };
	    return Activity;
	}(React.Component));
	var NewAction = (function (_super) {
	    __extends(NewAction, _super);
	    function NewAction(props) {
	        var _this;
	        console.log("resetting newaction state");
	        _this = _super.call(this, props) || this;
	        _this.state = {
	            action: ""
	        };
	        _this.handleShip = _this.handleShip.bind(_this);
	        _this.handleRefund = _this.handleRefund.bind(_this);
	        _this.handleEmailChina = _this.handleEmailChina.bind(_this);
	        _this.handleEmailCust = _this.handleEmailCust.bind(_this);
	        return _this;
	    }
	    NewAction.prototype.handleShip = function () {
	        console.log("setting state ship");
	        this.setState({
	            action: "ship"
	        });
	    };
	    NewAction.prototype.handleRefund = function () {
	        console.log("setting state refund");
	        this.setState({
	            action: "refund"
	        });
	    };
	    NewAction.prototype.handleEmailChina = function () {
	        console.log("setting state china");
	        this.setState({
	            action: "emailChina"
	        });
	    };
	    NewAction.prototype.handleEmailCust = function () {
	        console.log("setting state cust");
	        this.setState({
	            action: "emailCust"
	        });
	    };
	    NewAction.prototype.render = function () {
	        var newAction;
	        if (this.state.action == "ship") {
	            console.log("rendering ship");
	            this.state.action = "";
	            newAction = React.createElement(ShipParts, null);
	        }
	        else if (this.state.action == "refund") {
	            this.state.action = "";
	            newAction = React.createElement(Refund, null);
	        }
	        else if (this.state.action == "emailChina") {
	            this.state.action = "";
	            newAction = React.createElement(EmailChina, null);
	        }
	        else if (this.state.action == "emailCust") {
	            this.state.action = "";
	            newAction = React.createElement(EmailCust, null);
	        }
	        return (React.createElement("div", null,
	            React.createElement("button", { name: "ship", onClick: this.handleShip }, "Ship"),
	            React.createElement("button", { name: "refund", onClick: this.handleRefund }, "Refund"),
	            React.createElement("button", { name: "emailChina", onClick: this.handleEmailChina }, "EmailChina"),
	            React.createElement("button", { name: "emailCust", onClick: this.handleEmailCust }, "EmailCust"),
	            newAction));
	    };
	    return NewAction;
	}(React.Component));
	//partsObject = {model: "", part: ""}
	var partsToShip = [];
	var ShipParts = (function (_super) {
	    __extends(ShipParts, _super);
	    function ShipParts() {
	        return _super.apply(this, arguments) || this;
	    }
	    ShipParts.prototype.render = function () {
	        var parts = partsToShip.map(function (part) {
	            return (React.createElement("div", null,
	                React.createElement("p", null, "part.model"),
	                React.createElement("p", null, "part.part")));
	        });
	        return (React.createElement("div", null,
	            parts,
	            React.createElement(AddParts, null),
	            "Ship Parts"));
	    };
	    return ShipParts;
	}(React.Component));
	var AddParts = (function (_super) {
	    __extends(AddParts, _super);
	    function AddParts(props) {
	        var _this = _super.call(this, props) || this;
	        _this.state = { model: '1', part: '1' };
	        _this.handleModelChange = _this.handleModelChange.bind(_this);
	        _this.handlePartChange = _this.handlePartChange.bind(_this);
	        _this.handleSubmit = _this.handleSubmit.bind(_this);
	        return _this;
	    }
	    AddParts.prototype.handleModelChange = function (event) {
	        console.log(event.target.value);
	        this.setState({ model: event.target.value, part: this.state.part });
	    };
	    AddParts.prototype.handlePartChange = function (event) {
	        this.setState({ model: this.state.model, part: event.target.value });
	    };
	    AddParts.prototype.handleSubmit = function (event) {
	        debugger;
	        console.log(this.state);
	        eventDispatch("renderActivity", { "value": { "model": this.state.model, "part": this.state.part } });
	        event.preventDefault();
	    };
	    AddParts.prototype.render = function () {
	        var modelOptions = getModelOptions();
	        var models = modelOptions.map(function (model) {
	            return React.createElement("option", { value: model, key: model }, model);
	        });
	        // TODO pass in model number here
	        var partOptions = getPartOptions("foo");
	        var parts = partOptions.map(function (part) {
	            return React.createElement("option", { value: part, key: part }, part);
	        });
	        return (React.createElement("form", { onSubmit: this.handleSubmit },
	            React.createElement("label", { htmlFor: "models" }, "Models: "),
	            React.createElement("select", { name: "models", id: "models", value: this.state.model, onChange: this.handleModelChange }, models),
	            React.createElement("label", { htmlFor: "parts" }, "Parts: "),
	            React.createElement("select", { name: "parts", id: "parts", value: this.state.part, onChange: this.handlePartChange }, models),
	            React.createElement("label", { htmlFor: "quantity" }, "Quantity: "),
	            React.createElement("input", { id: "quantity", type: "text" }),
	            React.createElement("input", { type: "submit", value: "Submit" })));
	    };
	    return AddParts;
	}(React.Component));
	var Refund = (function (_super) {
	    __extends(Refund, _super);
	    function Refund() {
	        return _super.apply(this, arguments) || this;
	    }
	    Refund.prototype.handleSubmitRefund = function (event) {
	        console.log("handling submit refund");
	        eventDispatch("refund", { value: { content: "refund" } });
	    };
	    Refund.prototype.render = function () {
	        return (React.createElement("div", null,
	            "Refund",
	            React.createElement("button", { name: "submitRefund", onClick: this.handleSubmitRefund }, "Submit")));
	    };
	    return Refund;
	}(React.Component));
	var EmailChina = (function (_super) {
	    __extends(EmailChina, _super);
	    function EmailChina() {
	        return _super.apply(this, arguments) || this;
	    }
	    EmailChina.prototype.handleEmailChinaSubmit = function (event) {
	        console.log("handling submit emailChina");
	        eventDispatch("emailChina", { value: { content: "email China" } });
	        event.preventDefault();
	    };
	    EmailChina.prototype.render = function () {
	        return (React.createElement("form", { onSubmit: this.handleEmailChinaSubmit },
	            React.createElement("label", { htmlFor: "email" }, "Email Body: "),
	            React.createElement("textarea", { id: "email" }),
	            React.createElement("input", { type: "submit", value: "Submit" })));
	    };
	    return EmailChina;
	}(React.Component));
	var EmailCust = (function (_super) {
	    __extends(EmailCust, _super);
	    function EmailCust() {
	        return _super.apply(this, arguments) || this;
	    }
	    EmailCust.prototype.handleEmailCustSubmit = function (event) {
	        console.log("handling submit emailCust");
	        eventDispatch("emailCust", { value: { content: "email Customer" } });
	        event.preventDefault();
	    };
	    EmailCust.prototype.render = function () {
	        return (React.createElement("form", { onSubmit: this.handleEmailCustSubmit },
	            React.createElement("label", { htmlFor: "email" }, "Email Body Cust: "),
	            React.createElement("textarea", { id: "email" }),
	            React.createElement("input", { type: "submit", value: "Submit" })));
	    };
	    return EmailCust;
	}(React.Component));
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
	            React.createElement(CustInfo, null),
	            React.createElement(ActivityList, null));
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