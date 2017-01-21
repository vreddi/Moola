var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "c3"], function (require, exports, React, C3) {
    "use strict";
    require('../../../Controls/SavingEfficiencyCard/Style/SavingEfficiencyCardStyle.css');
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
    var SavingEfficiencyCard = (function (_super) {
        __extends(SavingEfficiencyCard, _super);
        function SavingEfficiencyCard(savingEfficiencyData) {
            _super.call(this);
            var calculatedEfficiency = this.CalculateEfficiency(savingEfficiencyData.earning, savingEfficiencyData.expenditure), calculatedInformationText = this.GetInformationText(savingEfficiencyData.earning, savingEfficiencyData.expenditure);
            this.state = {
                title: savingEfficiencyData.title,
                monthYearText: savingEfficiencyData.monthYearText,
                informationText: calculatedInformationText,
                earning: savingEfficiencyData.earning,
                expenditure: savingEfficiencyData.expenditure,
                savingEfficiency: calculatedEfficiency
            };
            this.title = savingEfficiencyData.title;
            this.monthYearText = savingEfficiencyData.monthYearText;
            this.informationText = calculatedInformationText;
            this.earning = savingEfficiencyData.earning;
            this.expenditure = savingEfficiencyData.expenditure;
            this.savingEfficiency = calculatedEfficiency;
            this.inDOM = false;
        }
        SavingEfficiencyCard.prototype.render = function () {
            return (React.createElement("div", {className: "SavingEfficiencyCard"}, React.createElement("div", {id: "SavingEfficiencyGaugeChart"}), React.createElement("div", {className: "SavingEfficiencyCard-MonthYearText"}, this.state.monthYearText), React.createElement("div", {className: "SavingEfficiencyCard-Title"}, this.state.title), React.createElement("div", {className: "SavingEfficiencyCard-InformationText"}, this.state.informationText)));
        };
        SavingEfficiencyCard.prototype.CalculateEfficiency = function (earning, expenditure) {
            var saving = earning - expenditure;
            if (saving <= 0) {
                return 0;
            }
            return parseFloat((saving / earning).toFixed(1)) * 100;
        };
        SavingEfficiencyCard.prototype.GetInformationText = function (earning, expenditure) {
            var saving = earning - expenditure, informationText = "";
            if (saving < 0) {
                if (earning == 0) {
                    informationText = "You did not earn anything but managed to spend. Hmmm... interesting life choice.";
                    if (expenditure == 0) {
                        informationText = "You did not earn anything and you did not spend anything. Hello, are you alive?";
                    }
                }
                else {
                    informationText = "For every $ you earned you spent $" + (expenditure / earning).toFixed(2) + ".";
                }
            }
            else if (saving > 0) {
                informationText = "For every $ you earned you spent $" + (expenditure / earning).toFixed(2) + ".";
            }
            else {
                informationText = "You spent all of what you earned.";
            }
            return informationText;
        };
        SavingEfficiencyCard.prototype.GenerateGaugeChart = function (efficiency) {
            var chart = C3.generate({
                bindto: '#SavingEfficiencyGaugeChart',
                data: {
                    columns: [
                        ['data', efficiency]
                    ],
                    type: 'gauge'
                },
                color: {
                    pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044'],
                    threshold: {
                        values: [30, 60, 90, 100]
                    }
                },
                size: {
                    height: 150
                }
            });
        };
        SavingEfficiencyCard.prototype.componentDidMount = function () {
            this.GenerateGaugeChart(this.state.savingEfficiency);
        };
        SavingEfficiencyCard.prototype.componentDidUpdate = function () {
            this.GenerateGaugeChart(this.state.savingEfficiency);
        };
        SavingEfficiencyCard.prototype.componentWillMount = function () {
            this.inDOM = true;
        };
        SavingEfficiencyCard.prototype.componentWillUnmount = function () {
            this.inDOM = false;
        };
        return SavingEfficiencyCard;
    }(React.Component));
    exports.SavingEfficiencyCard = SavingEfficiencyCard;
});
//# sourceMappingURL=SavingEfficiencyCard.js.map