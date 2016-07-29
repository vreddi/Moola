define(["require", "exports"], function (require, exports) {
    "use strict";
    var BarChart = (function () {
        function BarChart() {
            this.renderBarChart();
        }
        BarChart.prototype.renderBarChart = function () {
            var margin = { top: 20, right: 10, bottom: 100, left: 40 };
            var width = 700 - margin.right - margin.left;
            var height = 500 - margin.top - margin.bottom;
            var d3;
            var svg = d3.select('body');
            svg.append('svg').attr({
                "width": width + margin.right + margin.left,
                "height": height + margin.top + margin.bottom
            }).append('g').attr("transform", "translate(" + margin.left + ',' + margin.right + ')');
        };
        return BarChart;
    }());
    exports.BarChart = BarChart;
});
//# sourceMappingURL=BarChart.js.map