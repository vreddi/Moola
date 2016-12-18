"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
require('../../../Controls/ExpenditureDistributionCard/Style/ExpenditureDistributionCardStyle.css');
var React = require("react");
var Constants_1 = require("../../Model/Constants");
var earningSymbolStyle = "SnippetTile-CardEarningSymbol";
var earningFontAwesomeStyle = "fa fa-angle-double-up";
var expenseSymbolStyle = "SnippetTile-CardExpenditureSymbol";
var expenseFontAwesomeStyle = "fa fa-angle-double-down";
var expenditureDistributionIconStyle = "ExpenditureDistributionCard-ExpenseCategoryIcon";
var foodFontAwesomeStyle = "fa fa-cutlery";
var utilityFontAwesomeStyle = "fa fa-lightbulb-o";
var entertainmentFontAwesomeStyle = "fa fa-television";
var classnames = require('classnames');
var ExpenditureDistributionCard = (function (_super) {
    __extends(ExpenditureDistributionCard, _super);
    function ExpenditureDistributionCard(expenditureDistributionTileData) {
        _super.call(this);
        this.state = {
            htmlComponent: expenditureDistributionTileData.htmlComponent,
            foodValue: expenditureDistributionTileData.foodValue,
            utilityValue: expenditureDistributionTileData.utilityValue,
            entertainmentValue: expenditureDistributionTileData.entertainmentValue
        };
        this.htmlComponent = expenditureDistributionTileData.htmlComponent;
        this.foodValue = expenditureDistributionTileData.foodValue;
        this.utilityValue = expenditureDistributionTileData.utilityValue;
        this.entertainmentValue = expenditureDistributionTileData.entertainmentValue;
        this.inDOM = false;
    }
    ExpenditureDistributionCard.prototype.render = function () {
        var foodCategoryIconClass = classnames(foodFontAwesomeStyle, expenditureDistributionIconStyle, Constants_1.Constants.color.lavender), utilityCategoryIconClass = classnames(utilityFontAwesomeStyle, expenditureDistributionIconStyle, Constants_1.Constants.color.amber), entertainmentCategoryIconClass = classnames(entertainmentFontAwesomeStyle, expenditureDistributionIconStyle, Constants_1.Constants.color.lightBlue);
        return (React.createElement("div", {className: "ExpenditureDistributionCard"}, 
            React.createElement("div", {className: "ExpenditureDistributionCard-CategoryRow"}, 
                React.createElement("div", {className: "ExpenditureDistributionCard-Category"}, 
                    React.createElement("i", {className: foodCategoryIconClass, "aria-hidden": "true"}), 
                    React.createElement("div", {className: "ExpenditureDistributionCard-ExpenseCategoryTitle"}, "Food")), 
                React.createElement("div", {className: "ExpenditureDistributionCard-ExpenseCategoryValue"}, 
                    "$", 
                    this.state.foodValue)), 
            React.createElement("div", {className: "ExpenditureDistributionCard-CategoryRow"}, 
                React.createElement("div", {className: "ExpenditureDistributionCard-Category"}, 
                    React.createElement("i", {className: utilityCategoryIconClass, "aria-hidden": "true"}), 
                    React.createElement("div", {className: "ExpenditureDistributionCard-ExpenseCategoryTitle"}, "Utility")), 
                React.createElement("div", {className: "ExpenditureDistributionCard-ExpenseCategoryValue"}, 
                    "$", 
                    this.state.utilityValue)), 
            React.createElement("div", {className: "ExpenditureDistributionCard-CategoryRow"}, 
                React.createElement("div", {className: "ExpenditureDistributionCard-Category"}, 
                    React.createElement("i", {className: entertainmentCategoryIconClass, "aria-hidden": "true"}), 
                    React.createElement("div", {className: "ExpenditureDistributionCard-ExpenseCategoryTitle"}, "Entertainment")), 
                React.createElement("div", {className: "ExpenditureDistributionCard-ExpenseCategoryValue"}, 
                    "$", 
                    this.state.entertainmentValue))));
    };
    ExpenditureDistributionCard.prototype.componentWillMount = function () {
        this.inDOM = true;
    };
    ExpenditureDistributionCard.prototype.componentWillUnmount = function () {
        this.inDOM = false;
    };
    return ExpenditureDistributionCard;
}(React.Component));
exports.ExpenditureDistributionCard = ExpenditureDistributionCard;
//# sourceMappingURL=ExpenditureDistributionCard.js.map