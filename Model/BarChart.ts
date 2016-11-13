/// <reference path="../Definitions/d3.d.ts" />

import { Constants } from "./Constants";
import { EntityManager } from "../Controller/EntityManager";
import { MonthlyFinanceEntity } from "./MonthlyFinanceEntity";

export class BarChart{

    public d3: any;
    public c3: any
    public $: any;
    public dataCollectionManager: EntityManager;

    constructor(d3: any, c3: any, $ : any, dataCollectionManager: EntityManager){
        this.d3 = d3;
        this.c3 = c3;
        this.$ = $;
        this.dataCollectionManager = dataCollectionManager;
    }

    /**
     * This method renders a bar chart with all the expenses and earnings shown per month for a particular year.
     * The chart is also rendered in a specific html location (div with an id? particular class? anything) which
     * is specified as a parameter
     * */
    public RenderBarChart(d3: any, c3: any, $ : any, monthFinanceEntities: MonthlyFinanceEntity[], htmlLocation : string, year: number) : void{

        let constantsLibrary = new Constants(),
            earning: (string | number)[] = ['Earning'],
            expenditure: (string | number)[] = ['Expenditure'],
            dataCollectionManager = this.dataCollectionManager,    // Used for the onClick callback of the bar-chart
            months: string[] = ['x'],
            curYear: number = year;

        for(let index = 0; index < monthFinanceEntities.length; index++){

            earning.push(monthFinanceEntities[index].earning);
            expenditure.push(monthFinanceEntities[index].expenditure);
            months.push(monthFinanceEntities[index].monthName);
        }

        // TODO: Due to appending it does not go inside the proper place inside the htmlLocation
        //       Always goes inside the end. Issue Created #33
        $(htmlLocation).append('<div id="chart"></div>');
        $(htmlLocation).append('<div id="table"></div>')

        let chart = c3.generate({
            bindto: '#chart',
            data: {
                x: 'x',
                columns:[
                            months,
                            earning,
                            expenditure
                        ],
                onclick: function(d: any, element: any){

                    let monthEntities = dataCollectionManager.GetAllMonthEntities(d["x"] + 1, curYear);

                    // Clear the table
                    $("#table").empty();

                    $("#table").append('<table class="table table-bordered">');
                        $("table").append('<thead>');
                            $("table thead").append('<tr>');
                                $("table thead tr").append('<th>Date</th>');
                                $("table thead tr").append('<th>Item</th>');
                                $("table thead tr").append('<th>Tags</th>');
                                $("table thead tr").append('<th>Cost</th>');
                                $("table thead tr").append('<th>Flow</th>');
                                $("table thead tr").append('<th>Payment Method</th>');
                            $("table thead").append('</tr>');
                        $("table").append('</thead>');

                        $("table").append('<tbody>');

                        for(let index = 0; index < monthEntities.length; index++){

                            $("#table table tbody").append('<tr>');

                                // Not checking for null because it is a required field
                                $("table tbody tr:last-of-type").append('<td>' + monthEntities[index].date.day + ' ' + monthEntities[index].date.month + ' ' + monthEntities[index].date.year + '</td>');

                                // Not checking for null because it is a required field
                                $("table tbody tr:last-of-type").append('<td>' + monthEntities[index].item.fieldValue + '</td>');

                                if(monthEntities[index].tags == null || monthEntities[index].tags.fieldValue == null || monthEntities[index].tags.fieldValue.length == 0){
                                    $("table tbody tr:last-of-type").append('<td>' + "" + '</td>');
                                }
                                else{
                                    $("table tbody tr:last-of-type").append('<td>' + monthEntities[index].tags.fieldValue + '</td>');
                                }

                                // Not checking for null because it is a required field
                                $("table tbody tr:last-of-type").append('<td>' + monthEntities[index].cost.fieldValue + '</td>');

                                if(monthEntities[index].flow == null || monthEntities[index].flow.fieldValue == null || monthEntities[index].flow.fieldValue.length == 0){
                                    $("table tbody tr:last-of-type").append('<td>' + "" + '</td>');
                                }
                                else{
                                    $("table tbody tr:last-of-type").append('<td>' + monthEntities[index].flow.fieldValue + '</td>');
                                }

                                if(monthEntities[index].paymentMethod == null || monthEntities[index].paymentMethod.fieldValue == null || monthEntities[index].paymentMethod.fieldValue.length == 0){
                                    $("table tbody tr:last-of-type").append('<td>' + "" + '</td>');
                                }
                                else{
                                    $("table tbody tr:last-of-type").append('<td>' + monthEntities[index].paymentMethod.fieldValue + '</td>');
                                }

                            $("table tbody").append('</tr>');
                        }

                        $("table").append('</tbody>');
                    $("#table").append('</table>');
                }
            },
            axis: {
                x: {
                    type: 'category' // this needed to load string x value
                }
            }
        });
    }
}