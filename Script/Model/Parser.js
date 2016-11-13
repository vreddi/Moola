define(["require", "exports", "./Date", "./Item", "./Cost", "./Flow", "./Tags", "./PaymentMethod", "./Entity"], function (require, exports, Date_1, Item_1, Cost_1, Flow_1, Tags_1, PaymentMethod_1, Entity_1) {
    "use strict";
    var Parser = (function () {
        function Parser() {
        }
        Parser.prototype.CsvToJson = function (csv) {
            var lines = csv.split("\n"), header = lines[0].split(","), result = [];
            for (var i = 1; i < lines.length; i++) {
                var entityObject = {}, currentLine = lines[i].split(/(?!\B"[^"]*),(?![^"]*"\B)/);
                for (var j = 0; j < header.length; j++) {
                    entityObject[header[j]] = currentLine[j];
                }
                result.push(entityObject);
            }
            return result;
        };
        Parser.prototype.JsonToEntityManager = function (jsonArray) {
            var result = [];
            for (var i = 0; jsonArray.length; i++) {
                var date = new Date_1.DateInfo(jsonArray[i]["Date"]);
                var item = new Item_1.Item(jsonArray[i]["Item"]);
                var cost = new Cost_1.Cost(jsonArray[i]["Cost"]);
                var flow = new Flow_1.Flow(jsonArray[i]["Flow"]);
                var paymentMethod = new PaymentMethod_1.PaymentMethod(jsonArray[i]["Payment Method"]);
                var tags = new Tags_1.Tags(jsonArray[i]["Tags"]);
                var entity = new Entity_1.Entity(date, item, tags, cost, flow, paymentMethod);
                result.push(entity);
            }
            return result;
        };
        Parser.prototype.CsvToEntityManager = function (csv) {
            var lines = csv.split("\n");
            var header = lines[0].split(",");
            var result = [];
            for (var i = 1; i < lines.length; i++) {
                var currentLine = lines[i].split(/(?!\B"[^"]*),(?![^"]*"\B)/);
                var date, item, cost, flow, tags, paymentMethod;
                for (var j = 0; j < header.length; j++) {
                    if (header[j].toLocaleLowerCase().replace(" ", "")[0] == 'p') {
                        paymentMethod = new PaymentMethod_1.PaymentMethod(currentLine[j]);
                    }
                    switch (header[j].toLocaleLowerCase().replace(" ", "")) {
                        case "date":
                            date = new Date_1.DateInfo(currentLine[j]);
                            break;
                        case "item":
                            item = new Item_1.Item(currentLine[j]);
                            break;
                        case "cost":
                            cost = new Cost_1.Cost(currentLine[j]);
                            break;
                        case "flow":
                            flow = new Flow_1.Flow(currentLine[j]);
                            break;
                        case "tags":
                            tags = new Tags_1.Tags(currentLine[j]);
                            break;
                    }
                }
                var entity = new Entity_1.Entity(date, item, tags, cost, flow, paymentMethod);
                result.push(entity);
            }
            return result;
        };
        return Parser;
    }());
    exports.Parser = Parser;
});
//# sourceMappingURL=Parser.js.map