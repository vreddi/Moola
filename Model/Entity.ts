/// <reference path="../Definations/all.d.ts" />
import Date = require("./Date");
import Cost = require("./Cost");
import Item = require("./Item");
import Flow = require("./Flow");
import PaymentMethod = require("./PaymentMethod");
import Tags = require("./Tags");

/**
 * Entity represents a row in your expenses sheet. 
 */
class Entity{
    
    public date : Date.DateInfo;
    public item : Item.Item;
    public tags : Tags.Tags;
    public cost: Cost.Cost;
    public flow : Flow.Flow;
    public paymentMethod : PaymentMethod.PaymentMethod;
    
    constructor(){
        
    }

    
    
}
    
    


