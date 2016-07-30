define(["require", "exports", "./Parser", "./Collections", "../Controller/EntityManager", "./BarChart", "./Constants"], function (require, exports, Parser, Collection, EntityManager, BarChart, Constants) {
    "use strict";
    var Visualizer = (function () {
        function Visualizer(csv, d3, c3, $) {
            console.log("Hello From the Visualizer!");
            var p = new Parser.Parser();
            this.csvResult = csv;
            this.dataCollection = p.csvToEntityManager(this.csvResult);
            this.dataCollectionManager = new EntityManager.EntityManager(new Collection.MoolaCollection(this.dataCollection));
            this.barChart = new BarChart.BarChart(d3, c3, $, this.dataCollectionManager);
            this.showMonthlyFinanceSummaryBarChart();
        }
        Visualizer.prototype.createJsonForMonthlyFinances = function () {
            var ConstantsLibrary = new Constants.Constants();
            var months = ConstantsLibrary.constants["months"];
            var data = [];
            for (var index = 0; index < months.length; index++) {
                var obj = {};
                obj["monthNumber"] = index + 1;
                obj["monthName"] = months[index];
                obj["expenditure"] = 0;
                obj["earning"] = 0;
                data.push(obj);
            }
            this.temp = data;
            for (var index = 0; index < this.dataCollectionManager.Entities.count(); index++) {
                var entity = {};
                entity['monthNumber'] = this.dataCollectionManager.Entities.getItem(index).date.monthNumber;
                if (this.dataCollectionManager.Entities.getItem(index).isEarning()) {
                    entity['in'] = this.dataCollectionManager.Entities.getItem(index).cost.value;
                    entity['out'] = 0;
                }
                else {
                    entity['in'] = 0;
                    entity['out'] = this.dataCollectionManager.Entities.getItem(index).cost.value;
                }
                data[entity["monthNumber"] - 1]["expenditure"] = data[entity["monthNumber"] - 1]["expenditure"] + entity["out"];
                data[entity["monthNumber"] - 1]["earning"] = data[entity["monthNumber"] - 1]["earning"] + entity["in"];
            }
            return data;
        };
        Visualizer.prototype.showMonthlyFinanceSummaryBarChart = function () {
            this.barChart.renderBarChart(this.barChart.d3, this.barChart.c3, this.barChart.$, this.createJsonForMonthlyFinances());
        };
        return Visualizer;
    }());
    exports.Visualizer = Visualizer;
});
//# sourceMappingURL=Visualizer.js.map