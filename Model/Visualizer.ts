/// <reference path="../Definitions/d3.d.ts" />
import Parser = require("./Parser");
import Entity = require("./Entity");
import Collection = require("./Collections");
import EntityManager = require("../Controller/EntityManager")
import BarChart = require("./BarChart");
import Constants = require("./Constants");

export class Visualizer{

    dataCollection : Array<Entity.Entity>
    dataCollectionManager : EntityManager.EntityManager;
    csvResult : string;
    barChart : BarChart.BarChart;
    temp: any;

    constructor(csv : string, d3: any, c3: any, $: any){
        console.log("Hello From the Visualizer!");
        var p = new Parser.Parser();
        this.csvResult = csv;
        this.dataCollection = p.csvToEntityManager(this.csvResult);
        this.dataCollectionManager = new EntityManager.EntityManager(new Collection.MoolaCollection(this.dataCollection));
        this.barChart = new BarChart.BarChart(d3, c3, $, this.dataCollectionManager);

        this.showMonthlyFinanceSummaryBarChart();
    }

    public createJsonForMonthlyFinances(){

        var ConstantsLibrary = new Constants.Constants();
        var months = ConstantsLibrary.constants["months"];
        var data: any = [];

        for(var index = 0; index < months.length; index++){

            var obj: any = {};

            obj["monthNumber"] = index + 1;
            obj["monthName"] = months[index];
            obj["expenditure"] = 0;
            obj["earning"] = 0;

            data.push(obj);
        }
        this.temp = data;

        for(var index = 0; index < this.dataCollectionManager.Entities.count(); index++){

            var entity: any = {};
            entity['monthNumber'] = this.dataCollectionManager.Entities.getItem(index).date.monthNumber;
            if(this.dataCollectionManager.Entities.getItem(index).isEarning()){

                entity['in'] = this.dataCollectionManager.Entities.getItem(index).cost.value;
                entity['out'] = 0;
            }
            else{

                entity['in'] = 0;
                entity['out'] = this.dataCollectionManager.Entities.getItem(index).cost.value;
            }

            // Adding up to the total monthly earning/expenditure
            data[entity["monthNumber"] - 1]["expenditure"] = data[entity["monthNumber"] - 1]["expenditure"] + entity["out"];
            data[entity["monthNumber"] - 1]["earning"] = data[entity["monthNumber"] - 1]["earning"] + entity["in"];
        }

        return data;
    }

    public showMonthlyFinanceSummaryBarChart(){

        this.barChart.renderBarChart(this.barChart.d3, this.barChart.c3, this.barChart.$, this.createJsonForMonthlyFinances());
    }
}