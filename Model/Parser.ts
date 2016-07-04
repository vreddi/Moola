/// <reference path="../Definitions/all.d.ts" />
import Date = require("./Date");
import Cost = require("./Cost");
import Item = require("./Item");
import Flow = require("./Flow");
import PaymentMethod = require("./PaymentMethod");
import Tags = require("./Tags");
import Entity = require("./Entity");

export class Parser{
    
    fileName : string;

    constructor(){
        
    }

    /**
     * This function given a csv file as a string with \n produces an array of JSON objects where each JSON objects
     * represents a transaction in the given csv file. Each transaction is known as an entity within the Moola system.
     * 
     * @param : CSV file as a string with \n
     * @returns : Array of JSON objects (Array<any>)
     */
    public csvToJson(csv : any){
        
        var lines : Array<string> = csv.split("\n");

        // Get field names from the header
        var header = lines[0].split(",");

        console.log(lines.length);
        var result : any = [];

        for(var i : number = 1; i < lines.length; i++){

            var entityObject : any = {};

            // Find each field within the transaction row
            var currentLine = lines[i].split(/(?!\B"[^"]*),(?![^"]*"\B)/);

            for(var j : number = 0; j < header.length; j++){

                entityObject[header[j]] = currentLine[j];
            }

            result.push(entityObject);
        }

        return result;
    }

    /**
     * This function given an array of JSON objects for each entities creates an array of entities (the logical
     * concept for a transaction in the Moola system). 
     * 
     * @param : Array of JSON objects
     * @returns : Array of entities (Array<Entity.Entity>)
     */
    public jsonToEntityManager(jsonArray : any){
        
        var result : Array<Entity.Entity> = [];

        for(var i : number = 0; jsonArray.length; i++){

            // Creating entity components
            var date = new Date.DateInfo(jsonArray[i]["Date"]);
            var item = new Item.Item(jsonArray[i]["Item"]);
            var cost = new Cost.Cost(jsonArray[i]["Cost"]);
            var flow = new Flow.Flow(jsonArray[i]["Flow"]);
            var paymentMethod = new PaymentMethod.PaymentMethod(jsonArray[i]["Payment Method"]);
            var tags = new Tags.Tags(jsonArray[i]["Tags"]);

            // Creating a new entity
            var entity = new Entity.Entity(date, item, tags, cost, flow, paymentMethod);

            result.push(entity);
        }

        return result;
    }

    /**
     * This function given the csv file as string with \n produces an array of logical transaction rows known as
     * entities. This array of entities can be directly used by the EntityManager. In this case there is no middle-man
     * JSON conversion. The CSV here directly converts to our data-structures.
     * 
     * @param : CSV file as a string with \n
     * @return : Array of entities (Array<Entity.Entity>)
     */
    public csvToEntityManager(csv : string){

        var lines : Array<string> = csv.split("\n");

        // Get field names from the header
        var header = lines[0].split(",");

        console.log(lines.length);
        var result : any = [];

        for(var i : number = 1; i < lines.length; i++){

            // Find each field within the transaction row
            var currentLine = lines[i].split(/(?!\B"[^"]*),(?![^"]*"\B)/);

            var date : Date.DateInfo;
            var item : Item.Item;
            var cost : Cost.Cost;
            var flow : Flow.Flow;
            var tags : Tags.Tags;
            var paymentMethod : PaymentMethod.PaymentMethod;

            for(var j : number = 0; j < header.length; j++){

                // Creating entity components
                switch(header[j].toLocaleLowerCase()){
                    
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
    }
        
}
    