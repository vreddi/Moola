"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var JumbotronTile_1 = require("../Controls/JumbotronTile/JumbotronTile");
var SnippetTile_1 = require("../Controls/SnippetTile/SnippetTile");
var React = require("react");
var ReactDOM = require("react-dom");
require("../../View/Style/StartDashboardStyle.css");
var StartDashboard = (function (_super) {
    __extends(StartDashboard, _super);
    function StartDashboard(startDashboard) {
        _super.call(this);
        this.state = {
            dashboardTile: startDashboard.dashboardTile,
            earningTile: startDashboard.earningTile,
            expenseTile: startDashboard.expenseTile,
            monthFinanceEntity: startDashboard.monthFinanceEntity
        };
        this.dashboardTile = startDashboard.dashboardTile;
        this.earningTile = startDashboard.earningTile;
        this.expenseTile = startDashboard.expenseTile;
        this.monthFinanceEntity = startDashboard.monthFinanceEntity;
    }
    StartDashboard.prototype.render = function () {
        var component;
        this.dashboardTile.inDOM ? component = ReactDOM.findDOMNode(this.dashboardTile) : component = document.getElementsByClassName("content")[0];
        return (React.createElement("div", null, 
            React.createElement(JumbotronTile_1.JumbotronTile, null, 
                React.createElement("div", {className: "StartDashboard-Section1"}, 
                    React.createElement(SnippetTile_1.SnippetTile, {heading: this.state.earningTile.state.heading, title: this.state.earningTile.state.title, type: this.state.earningTile.state.type, value: this.state.earningTile.state.value, htmlComponent: component}), 
                    React.createElement(SnippetTile_1.SnippetTile, {heading: this.state.expenseTile.state.heading, title: this.state.expenseTile.state.title, type: this.state.expenseTile.state.type, value: this.state.expenseTile.state.value, htmlComponent: component}))
            )
        ));
    };
    StartDashboard.prototype.RenderDashboard = function (htmlComponent) {
        ReactDOM.render(React.createElement(StartDashboard, {dashboardTile: this.dashboardTile, earningTile: this.earningTile, expenseTile: this.expenseTile, monthFinanceEntity: this.monthFinanceEntity}), htmlComponent);
    };
    return StartDashboard;
}(React.Component));
exports.StartDashboard = StartDashboard;
//# sourceMappingURL=StartDashboard.js.map