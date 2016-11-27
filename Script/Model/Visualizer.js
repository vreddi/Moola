"use strict";
var Parser_1 = require("./Parser");
var Collections_1 = require("./Collections");
var Flow_1 = require("../Model/Flow");
var EntityManager_1 = require("../Controller/EntityManager");
var BarChart_1 = require("./BarChart");
var MonthlyFinanceEntity_1 = require("./MonthlyFinanceEntity");
var StartDashboard_1 = require("../View/StartDashboard");
var JumbotronTile_1 = require("../Controls/JumbotronTile/JumbotronTile");
var SnippetTile_1 = require("../Controls/SnippetTile/SnippetTile");
var contentComponent = document.getElementsByClassName("content")[0];
var Visualizer = (function () {
    function Visualizer(csv, d3, c3, $) {
        var p = new Parser_1.Parser();
        this.csvResult = csv;
        this.dataCollection = p.CsvToEntityManager(this.csvResult);
        this.dataCollectionManager = new EntityManager_1.EntityManager(new Collections_1.MoolaCollection(this.dataCollection));
        this.barChart = new BarChart_1.BarChart(d3, c3, $, this.dataCollectionManager);
        this.RenderStartDashboard();
    }
    Visualizer.prototype.ShowMonthlyFinanceSummaryBarChart = function (htmlElement, year) {
        this.barChart.RenderBarChart(this.barChart.d3, this.barChart.c3, this.barChart.$, MonthlyFinanceEntity_1.MonthlyFinanceEntity.CreateMonthlyFinances(this.dataCollectionManager, year), htmlElement, year);
    };
    Visualizer.prototype.RenderStartDashboard = function () {
        var currentYear = new Date().getFullYear(), monthlyFinanceEntities = MonthlyFinanceEntity_1.MonthlyFinanceEntity.CreateMonthlyFinances(this.dataCollectionManager, currentYear), monthsWithData = this.dataCollectionManager.GetAllMonths(), latestMonthFinanceEntity = monthlyFinanceEntities[monthsWithData[monthsWithData.length - 1].monthNumber - 1];
        this.startDashboard = new StartDashboard_1.StartDashboard({
            dashboardTile: new JumbotronTile_1.JumbotronTile(),
            earningTile: new SnippetTile_1.SnippetTile({
                heading: latestMonthFinanceEntity.shortMonthYearName,
                title: 'Earning',
                value: Math.round(latestMonthFinanceEntity.earning),
                type: new Flow_1.Flow('in')
            }),
            expenseTile: new SnippetTile_1.SnippetTile({
                heading: latestMonthFinanceEntity.shortMonthYearName,
                title: 'Expense',
                value: Math.round(latestMonthFinanceEntity.expenditure),
                type: new Flow_1.Flow('out')
            }),
            monthFinanceEntity: latestMonthFinanceEntity
        });
        this.startDashboard.RenderDashboard(contentComponent);
    };
    Visualizer.prototype.RenderMoneyCard = function ($, type, value, title, htmlLocation) {
        if (type === "in") {
            $(htmlLocation).append('<div class="card"> <div class="cardEarningSymbol"><i class="fa fa-angle-double-up" aria-hidden="true"></i></div> <div class="cardTitle">' + title + '</div> <div class="cardValue">' + value + '</div>');
        }
        else {
            $(htmlLocation).append('<div class="card"> <div class="cardExpenditureSymbol"><i class="fa fa-angle-double-down" aria-hidden="true"></i></div> <div class="cardTitle">' + title + '</div> <div class="cardValue">' + value + '</div>');
        }
    };
    return Visualizer;
}());
exports.Visualizer = Visualizer;
//# sourceMappingURL=Visualizer.js.map