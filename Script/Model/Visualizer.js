define(["require", "exports", "./Parser", "./Collections", "../Controller/EntityManager"], function (require, exports, Parser, Collection, EntityManager) {
    "use strict";
    var Visualizer = (function () {
        function Visualizer(csv) {
            console.log("Hello From the Visualizer!");
            var p = new Parser.Parser();
            this.csvResult = csv;
            this.dataCollection = p.csvToEntityManager(this.csvResult);
            this.dataCollectionManager = new EntityManager.EntityManager(new Collection.MoolaCollection(this.dataCollection));
        }
        return Visualizer;
    }());
    exports.Visualizer = Visualizer;
});
//# sourceMappingURL=Visualizer.js.map