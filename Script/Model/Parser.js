define(["require", "exports", "./Date", "./Item", "./Cost", "./Flow", "./Tags", "./PaymentMethod", "./Entity"], function (require, exports, Date, Item, Cost, Flow, Tags, PaymentMethod, Entity) {
    "use strict";
    var Parser = (function () {
        function Parser() {
        }
        Parser.prototype.csvToJson = function (csv) {
            var lines = csv.split("\n");
            var header = lines[0].split(",");
            var result = [];
            for (var i = 1; i < lines.length; i++) {
                var entityObject = {};
                var currentLine = lines[i].split(/(?!\B"[^"]*),(?![^"]*"\B)/);
                for (var j = 0; j < header.length; j++) {
                    entityObject[header[j]] = currentLine[j];
                }
                result.push(entityObject);
            }
            return result;
        };
        Parser.prototype.jsonToEntityManager = function (jsonArray) {
            var result = [];
            for (var i = 0; jsonArray.length; i++) {
                var date = new Date.DateInfo(jsonArray[i]["Date"]);
                var item = new Item.Item(jsonArray[i]["Item"]);
                var cost = new Cost.Cost(jsonArray[i]["Cost"]);
                var flow = new Flow.Flow(jsonArray[i]["Flow"]);
                var paymentMethod = new PaymentMethod.PaymentMethod(jsonArray[i]["Payment Method"]);
                var tags = new Tags.Tags(jsonArray[i]["Tags"]);
                var entity = new Entity.Entity(date, item, tags, cost, flow, paymentMethod);
                result.push(entity);
            }
            return result;
        };
        Parser.prototype.csvToEntityManager = function (csv) {
            var lines = csv.split("\n");
            var header = lines[0].split(",");
            var result = [];
            for (var i = 1; i < lines.length; i++) {
                var currentLine = lines[i].split(/(?!\B"[^"]*),(?![^"]*"\B)/);
                var date;
                var item;
                var cost;
                var flow;
                var tags;
                var paymentMethod;
                for (var j = 0; j < header.length; j++) {
                    switch (header[j].toLocaleLowerCase()) {
                        case "date":
                            date = new Date.DateInfo(currentLine[j]);
                            break;
                        case "item":
                            item = new Item.Item(currentLine[j]);
                            break;
                        case "cost":
                            cost = new Cost.Cost(currentLine[j]);
                            break;
                        case "flow":
                            flow = new Flow.Flow(currentLine[j]);
                            break;
                        case "tags":
                            tags = new Tags.Tags(currentLine[j]);
                            break;
                        case "payment method":
                            paymentMethod = new PaymentMethod.PaymentMethod(currentLine[j]);
                            break;
                        default:
                    }
                }
                var entity = new Entity.Entity(date, item, tags, cost, flow, paymentMethod);
                result.push(entity);
            }
            return result;
        };
        return Parser;
    }());
    exports.Parser = Parser;
});
//# sourceMappingURL=Parser.js.map