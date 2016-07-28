/// <reference path="../Definitions/d3.d.ts" />

export class BarChart{

    constructor(){
        this.renderBarChart()
    }

    public renderBarChart(){

        var margin = {top: 20, right: 10, bottom: 100, left: 40};
        var width = 700 - margin.right - margin.left;
        var height = 500 - margin.top - margin.bottom;
        var d3 : any;
        var svg = d3.select('body')
        svg.append('svg').attr({
            "width" : width + margin.right + margin.left,
            "height" : height + margin.top + margin.bottom
        }).append('g').attr("transform", "translate(" + margin.left + ',' + margin.right + ')');

    }
}