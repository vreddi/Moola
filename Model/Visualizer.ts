/// <reference path="../Definitions/d3.d.ts" />
import Parser = require("./Parser");
import Entity = require("./Entity");
import Collection = require("./Collections");
import EntityManager = require("../Controller/EntityManager")

export class Visualizer{

    dataCollection : Array<Entity.Entity>
    dataCollectionManager : EntityManager.EntityManager;
    csvResult : string;

    constructor(csv : string){
        console.log("Hello From the Visualizer!");
        var p = new Parser.Parser();
        this.csvResult = csv;

        this.dataCollection = p.csvToEntityManager(this.csvResult);
        this.dataCollectionManager = new EntityManager.EntityManager(new Collection.MoolaCollection(this.dataCollection));
    }
}