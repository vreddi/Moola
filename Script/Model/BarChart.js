define(["require", "exports", "./Constants"], function (require, exports, Constants) {
    "use strict";
    var BarChart = (function () {
        function BarChart(d3, c3, $, dataCollectionManager) {
            this.d3 = d3;
            this.c3 = c3;
            this.$ = $;
            this.dataCollectionManager = dataCollectionManager;
        }
        BarChart.prototype.renderBarChart = function (d3, c3, $, data, htmlLocation, year) {
            var ConstantsLibrary = new Constants.Constants();
            var earning = ['Earning'];
            var expenditure = ['Expenditure'];
            var months = ['x'];
            var dataCollectionManager = this.dataCollectionManager;
            var curYear = year;
            for (var index = 0; index < data.length; index++) {
                earning.push(data[index]["earning"]);
                expenditure.push(data[index]["expenditure"]);
                months.push(data[index]["monthName"]);
            }
            $(htmlLocation).append('<div id="chart"></div>');
            $(htmlLocation).append('<div id="table"></div>');
            var chart = c3.generate({
                bindto: '#chart',
                data: {
                    x: 'x',
                    columns: [
                        months,
                        earning,
                        expenditure
                    ],
                    onclick: function (d, element) {
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
                        var monthEntities = dataCollectionManager.getAllMonthEntities(d["x"] + 1, curYear);
                        for (var index = 0; index < monthEntities.length; index++) {
                            $("#table table tbody").append('<tr>');
                            $("table tbody tr:last-of-type").append('<td>' + monthEntities[index].date.day + ' ' + monthEntities[index].date.month + ' ' + monthEntities[index].date.year + '</td>');
                            $("table tbody tr:last-of-type").append('<td>' + monthEntities[index].item.fieldValue + '</td>');
                            if (monthEntities[index].tags == null || monthEntities[index].tags.fieldValue == null || monthEntities[index].tags.fieldValue.length == 0) {
                                $("table tbody tr:last-of-type").append('<td>' + "" + '</td>');
                            }
                            else {
                                $("table tbody tr:last-of-type").append('<td>' + monthEntities[index].tags.fieldValue + '</td>');
                            }
                            $("table tbody tr:last-of-type").append('<td>' + monthEntities[index].cost.fieldValue + '</td>');
                            if (monthEntities[index].flow == null || monthEntities[index].flow.fieldValue == null || monthEntities[index].flow.fieldValue.length == 0) {
                                $("table tbody tr:last-of-type").append('<td>' + "" + '</td>');
                            }
                            else {
                                $("table tbody tr:last-of-type").append('<td>' + monthEntities[index].flow.fieldValue + '</td>');
                            }
                            if (monthEntities[index].paymentMethod == null || monthEntities[index].paymentMethod.fieldValue == null || monthEntities[index].paymentMethod.fieldValue.length == 0) {
                                $("table tbody tr:last-of-type").append('<td>' + "" + '</td>');
                            }
                            else {
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
                        type: 'category'
                    }
                }
            });
        };
        return BarChart;
    }());
    exports.BarChart = BarChart;
});
//# sourceMappingURL=BarChart.js.map