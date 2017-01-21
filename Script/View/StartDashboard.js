var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../Controls/JumbotronTile/JumbotronTile", "../Controls/SnippetTile/SnippetTile", "../Controls/ExpenditureDistributionCard/ExpenditureDistributionCard", "../Controls/SavingEfficiencyCard/SavingEfficiencyCard", "react", "react-dom"], function (require, exports, JumbotronTile_1, SnippetTile_1, ExpenditureDistributionCard_1, SavingEfficiencyCard_1, React, ReactDOM) {
    "use strict";
    require("../../View/Style/StartDashboardStyle.css");
    var StartDashboard = (function (_super) {
        __extends(StartDashboard, _super);
        function StartDashboard(startDashboard) {
            _super.call(this);
            this.state = {
                dashboardTile: startDashboard.dashboardTile,
                earningTile: startDashboard.earningTile,
                expenseTile: startDashboard.expenseTile,
                expenseDistributionCard: startDashboard.expenseDistributionCard,
                savingEfficiencyCard: startDashboard.savingEfficiencyCard,
                monthFinanceEntity: startDashboard.monthFinanceEntity
            };
            this.dashboardTile = startDashboard.dashboardTile;
            this.earningTile = startDashboard.earningTile;
            this.expenseTile = startDashboard.expenseTile;
            this.expenseDistributionCard = startDashboard.expenseDistributionCard;
            this.savingEfficiencyCard = startDashboard.savingEfficiencyCard;
            this.monthFinanceEntity = startDashboard.monthFinanceEntity;
        }
        StartDashboard.prototype.render = function () {
            var component;
            this.dashboardTile.inDOM ? component = ReactDOM.findDOMNode(this.dashboardTile) : component = document.getElementsByClassName("content")[0];
            return (React.createElement("div", null, React.createElement(JumbotronTile_1.JumbotronTile, null, React.createElement("section", null, React.createElement("div", {className: "StartDashboard-Section1"}, React.createElement(SnippetTile_1.SnippetTile, {heading: this.state.earningTile.state.heading, title: this.state.earningTile.state.title, type: this.state.earningTile.state.type, value: this.state.earningTile.state.value, htmlComponent: component}), React.createElement(SnippetTile_1.SnippetTile, {heading: this.state.expenseTile.state.heading, title: this.state.expenseTile.state.title, type: this.state.expenseTile.state.type, value: this.state.expenseTile.state.value, htmlComponent: component})), React.createElement("div", {className: "StartDashboard-Section2"}, React.createElement(ExpenditureDistributionCard_1.ExpenditureDistributionCard, {foodValue: this.state.expenseDistributionCard.state.foodValue, utilityValue: this.state.expenseDistributionCard.state.utilityValue, entertainmentValue: this.state.expenseDistributionCard.state.entertainmentValue, transportValue: this.state.expenseDistributionCard.state.transportValue, houseValue: this.state.expenseDistributionCard.state.houseValue, medicalValue: this.state.expenseDistributionCard.state.medicalValue, htmlComponent: component})), React.createElement("div", {className: "StartDashboard-Section3"}, React.createElement(SavingEfficiencyCard_1.SavingEfficiencyCard, {title: this.state.savingEfficiencyCard.state.title, earning: this.state.savingEfficiencyCard.state.earning, expenditure: this.state.savingEfficiencyCard.state.expenditure, monthYearText: this.state.savingEfficiencyCard.state.monthYearText}))))));
        };
        StartDashboard.prototype.RenderDashboard = function (htmlComponent) {
            ReactDOM.render(React.createElement(StartDashboard, {dashboardTile: this.dashboardTile, earningTile: this.earningTile, expenseTile: this.expenseTile, expenseDistributionCard: this.expenseDistributionCard, savingEfficiencyCard: this.savingEfficiencyCard, monthFinanceEntity: this.monthFinanceEntity}), htmlComponent);
        };
        return StartDashboard;
    }(React.Component));
    exports.StartDashboard = StartDashboard;
});
//# sourceMappingURL=StartDashboard.js.map