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
var transportFontAwesomeStyle = "fa fa-car";
var foodFontAwesomeStyle = "fa fa-cutlery";
var utilityFontAwesomeStyle = "fa fa-lightbulb-o";
var entertainmentFontAwesomeStyle = "fa fa-television";
var houseFontAwesomeStyle = "fa fa-home";
var medicalFontAwesomeStyle = "fa fa-heartbeat";
var classnames = require('classnames');
var ExpenditureDistributionCard = (function (_super) {
    __extends(ExpenditureDistributionCard, _super);
    function ExpenditureDistributionCard(expenditureDistributionTileData) {
        _super.call(this);
        this.state = {
            htmlComponent: expenditureDistributionTileData.htmlComponent,
            foodValue: expenditureDistributionTileData.foodValue,
            utilityValue: expenditureDistributionTileData.utilityValue,
            entertainmentValue: expenditureDistributionTileData.entertainmentValue,
            transportValue: expenditureDistributionTileData.transportValue,
            houseValue: expenditureDistributionTileData.houseValue,
            medicalValue: expenditureDistributionTileData.medicalValue
        };
        this.htmlComponent = expenditureDistributionTileData.htmlComponent;
        this.foodValue = expenditureDistributionTileData.foodValue;
        this.utilityValue = expenditureDistributionTileData.utilityValue;
        this.entertainmentValue = expenditureDistributionTileData.entertainmentValue;
        this.transportValue = expenditureDistributionTileData.transportValue;
        this.houseValue = expenditureDistributionTileData.houseValue;
        this.medicalValue = expenditureDistributionTileData.medicalValue;
        this.inDOM = false;
    }
    ExpenditureDistributionCard.prototype.render = function () {
        var foodCategoryIconClass = classnames(foodFontAwesomeStyle, expenditureDistributionIconStyle, Constants_1.Constants.color.lavender), utilityCategoryIconClass = classnames(utilityFontAwesomeStyle, expenditureDistributionIconStyle, Constants_1.Constants.color.amber), entertainmentCategoryIconClass = classnames(entertainmentFontAwesomeStyle, expenditureDistributionIconStyle, Constants_1.Constants.color.lightBlue), transportCategoryIconClass = classnames(transportFontAwesomeStyle, expenditureDistributionIconStyle, Constants_1.Constants.color.blueGrey), houseCategoryIconClass = classnames(houseFontAwesomeStyle, expenditureDistributionIconStyle, Constants_1.Constants.color.green), medicalIconClass = classnames(medicalFontAwesomeStyle, expenditureDistributionIconStyle, Constants_1.Constants.color.lightRed);
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
                    this.state.entertainmentValue)), 
            React.createElement("div", {className: "ExpenditureDistributionCard-CategoryRow"}, 
                React.createElement("div", {className: "ExpenditureDistributionCard-Category"}, 
                    React.createElement("i", {className: houseCategoryIconClass, "aria-hidden": "true"}), 
                    React.createElement("div", {className: "ExpenditureDistributionCard-ExpenseCategoryTitle"}, "House")), 
                React.createElement("div", {className: "ExpenditureDistributionCard-ExpenseCategoryValue"}, 
                    "$", 
                    this.state.houseValue)), 
            React.createElement("div", {className: "ExpenditureDistributionCard-CategoryRow"}, 
                React.createElement("div", {className: "ExpenditureDistributionCard-Category"}, 
                    React.createElement("i", {className: transportCategoryIconClass, "aria-hidden": "true"}), 
                    React.createElement("div", {className: "ExpenditureDistributionCard-ExpenseCategoryTitle"}, "Transport")), 
                React.createElement("div", {className: "ExpenditureDistributionCard-ExpenseCategoryValue"}, 
                    "$", 
                    this.state.transportValue)), 
            React.createElement("div", {className: "ExpenditureDistributionCard-CategoryRow"}, 
                React.createElement("div", {className: "ExpenditureDistributionCard-Category"}, 
                    React.createElement("i", {className: medicalIconClass, "aria-hidden": "true"}), 
                    React.createElement("div", {className: "ExpenditureDistributionCard-ExpenseCategoryTitle"}, "Medical")), 
                React.createElement("div", {className: "ExpenditureDistributionCard-ExpenseCategoryValue"}, 
                    "$", 
                    this.state.medicalValue))));
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