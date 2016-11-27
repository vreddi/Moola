/// <reference path="../Definitions/d3.d.ts" />

import { Parser } from "./Parser";
import { Entity } from "./Entity";
import { MoolaCollection } from "./Collections";
import { DateInfo } from "../Model/Date";
import { Flow } from "../Model/Flow";
import { EntityManager } from "../Controller/EntityManager";
import { BarChart }  from "./BarChart";
import { Constants } from "./Constants";
import { MonthlyFinanceEntity } from "./MonthlyFinanceEntity";
import { HtmlElement } from "./HtmlElement";

import { IStartDashboard } from "../View/Interfaces/IStartDashboard";
import { StartDashboard } from "../View/StartDashboard";
import { JumbotronTile } from "../Controls/JumbotronTile/JumbotronTile";
import { SnippetTile } from "../Controls/SnippetTile/SnippetTile";
import { ISnippetTile } from "../Controls/SnippetTile/ISnippetTile";

import * as React from "react";
import * as ReactDOM from "react-dom";

const contentComponent: Element = document.getElementsByClassName("content")[0];
export class Visualizer{

    dataCollection: Array<Entity>;
    dataCollectionManager: EntityManager;
    csvResult: string;
    barChart: BarChart;
    public startDashboard: StartDashboard;

    constructor(csv: string, d3: any, c3: any, $: any){

        let p = new Parser();

        this.csvResult = csv;
        this.dataCollection = p.CsvToEntityManager(this.csvResult);
        this.dataCollectionManager = new EntityManager(new MoolaCollection(this.dataCollection));
        this.barChart = new BarChart(d3, c3, $, this.dataCollectionManager);
        this.RenderStartDashboard();

        // We are not showing the bar chart as soon as the CSV is uploaded (Frontend decision)
        // this.ShowMonthlyFinanceSummaryBarChart('.content', 2016);
    }

    /**
     * Renders the C3 bar chart for a particular year in a specified HTML element.
     */
    public ShowMonthlyFinanceSummaryBarChart(htmlElement: string, year : number){

        this.barChart.RenderBarChart(this.barChart.d3, this.barChart.c3, this.barChart.$, MonthlyFinanceEntity.CreateMonthlyFinances(this.dataCollectionManager, year), htmlElement, year);
    }

    /**
    * Renders the Start Dashboard with all the controls set inside it
    */
    public RenderStartDashboard() {
        let currentYear: number = new Date().getFullYear(),
        monthlyFinanceEntities: MonthlyFinanceEntity[] = MonthlyFinanceEntity.CreateMonthlyFinances(this.dataCollectionManager, currentYear),
        monthsWithData: Array<DateInfo> = this.dataCollectionManager.GetAllMonths(),
        latestMonthFinanceEntity: MonthlyFinanceEntity = monthlyFinanceEntities[monthsWithData[monthsWithData.length - 1].monthNumber - 1];

        // TODO: Remove Math.round. We need to show upto 2 decimal places
        //       Currently this is not done because we are blocked by a bug.
        //       The value text overflows the card. We need dynamic sizing.
        this.startDashboard = new StartDashboard(<IStartDashboard>{
            dashboardTile: new JumbotronTile(),
            earningTile: new SnippetTile(<ISnippetTile>{
                heading: latestMonthFinanceEntity.shortMonthYearName,
                title: 'Earning',
                value: Math.round(latestMonthFinanceEntity.earning),
                type: new Flow('in')
            }),
            expenseTile: new SnippetTile(<ISnippetTile>{
                heading: latestMonthFinanceEntity.shortMonthYearName,
                title: 'Expense',
                value: Math.round(latestMonthFinanceEntity.expenditure),
                type: new Flow('out')
            }),
            monthFinanceEntity: latestMonthFinanceEntity
        });

        this.startDashboard.RenderDashboard(contentComponent);
    }

    /**
     * This renders a money card, either expense card or earnign card showcasing the specified value
     * and title. The card is rendered in a specified html location such as a div with a particular class
     * or id.
     */
    public RenderMoneyCard($: any, type: string, value: number, title: string, htmlLocation: string){

        // earning
        if(type === "in"){
            $(htmlLocation).append('<div class="card"> <div class="cardEarningSymbol"><i class="fa fa-angle-double-up" aria-hidden="true"></i></div> <div class="cardTitle">' + title + '</div> <div class="cardValue">' + value + '</div>');
        }
        // expenditure
        else{
            $(htmlLocation).append('<div class="card"> <div class="cardExpenditureSymbol"><i class="fa fa-angle-double-down" aria-hidden="true"></i></div> <div class="cardTitle">' + title + '</div> <div class="cardValue">' + value + '</div>');
        }
    }
}