/// <reference path="../Definitions/all.d.ts" />\

import { DateInfo } from "./Date";
import { Item } from "./Item";
import { Cost }from "./Cost";
import { Flow } from "./Flow";
import { Tags } from "./Tags";
import { PaymentMethod } from "./PaymentMethod";
import { Entity } from "./Entity";

export class Parser{

    public fileName : string;

    constructor(){
    }

    /**
     * This function given a csv file as a string with \n produces an array of JSON objects where each JSON objects
     * represents a transaction in the given csv file. Each transaction is known as an entity within the Moola system.
     *
     * @param : CSV file as a string with \n
     * @returns : Array of JSON objects (Array<any>)
     */
    public CsvToJson(csv : any){

        let lines : Array<string> = csv.split("\n"),
            header = lines[0].split(","),    // Get field names from the header
            result : any = [];

        for(let i : number = 1; i < lines.length; i++){

            let entityObject : any = {},
                currentLine = lines[i].split(/(?!\B"[^"]*),(?![^"]*"\B)/);    // Find each field within the transaction row

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
    public JsonToEntityManager(jsonArray : any){

        var result : Array<Entity> = [];

        for(var i : number = 0; jsonArray.length; i++){

            // Creating entity components
            var date = new DateInfo(jsonArray[i]["Date"]);
            var item = new Item(jsonArray[i]["Item"]);
            var cost = new Cost(jsonArray[i]["Cost"]);
            var flow = new Flow(jsonArray[i]["Flow"]);
            var paymentMethod = new PaymentMethod(jsonArray[i]["Payment Method"]);
            var tags = new Tags(jsonArray[i]["Tags"]);

            // Creating a new entity
            var entity = new Entity(date, item, tags, cost, flow, paymentMethod);

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
    public CsvToEntityManager(csv : string){

        var lines : Array<string> = csv.split("\n");

        // Get field names from the header
        var header = lines[0].split(",");

        var result: any = [];

        for(var i : number = 1; i < lines.length; i++){

            // Find each field within the transaction row
            var currentLine = lines[i].split(/(?!\B"[^"]*),(?![^"]*"\B)/);

            var date: DateInfo,
                item: Item,
                cost: Cost,
                flow: Flow,
                tags: Tags,
                paymentMethod: PaymentMethod;

            for(var j : number = 0; j < header.length; j++){

                // Added this if because of BUG #25
                if(header[j].toLocaleLowerCase().replace(" ", "")[0] == 'p'){
                    paymentMethod = new PaymentMethod(currentLine[j]);
                }
                // Creating entity components
                switch(header[j].toLocaleLowerCase().replace(" ", "")){

                    // Investigate Later: Not Working
                    // Not going inside this case
                    // case "paymentmethod":
                    //     paymentMethod = new PaymentMethod.PaymentMethod(currentLine[j]);
                    //     break;

                    case "date":
                        date = new DateInfo(currentLine[j]);
                        break;

                    case "item":
                        item = new Item(currentLine[j]);
                        break;

                    case "cost":
                        cost = new Cost(currentLine[j]);
                        break;

                    case "flow":
                        flow = new Flow(currentLine[j]);
                        break;

                    case "tags":
                        tags = new Tags(currentLine[j]);
                        break;

                }
            }

            var entity = new Entity(date, item, tags, cost, flow, paymentMethod);
            result.push(entity);
        }

        return result;
    }

}
