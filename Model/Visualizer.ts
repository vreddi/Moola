/// <reference path="../Definitions/d3.d.ts" />

import { Parser } from "./Parser";
import { Entity } from "./Entity";
import { MoolaCollection } from "./Collections";
import { EntityManager } from "../Controller/EntityManager";
import { BarChart }  from "./BarChart";
import { Constants } from "./Constants";
import { MonthlyFinanceEntity } from "./MonthlyFinanceEntity";
import { HtmlElement } from "./HtmlElement";

export class Visualizer{

    dataCollection: Array<Entity>;
    dataCollectionManager: EntityManager;
    csvResult: string;
    barChart: BarChart;

    constructor(csv: string, d3: any, c3: any, $: any){

        let p = new Parser();
        this.csvResult = csv;
        this.dataCollection = p.CsvToEntityManager(this.csvResult);
        this.dataCollectionManager = new EntityManager(new MoolaCollection(this.dataCollection));
        this.barChart = new BarChart(d3, c3, $, this.dataCollectionManager);

        // We are not showing the bar chart as soon as the CSV is uploaded (Frontend decision)
        this.ShowMonthlyFinanceSummaryBarChart('.content', 2016);
    }

    /**
     * Renders the C3 bar chart for a particular year in a specified HTML element.
     */
    public ShowMonthlyFinanceSummaryBarChart(htmlElement: string, year : number){

        this.barChart.RenderBarChart(this.barChart.d3, this.barChart.c3, this.barChart.$, MonthlyFinanceEntity.CreateMonthlyFinances(this.dataCollectionManager, year), htmlElement, year);
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