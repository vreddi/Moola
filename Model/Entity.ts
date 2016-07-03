/// <reference path="../Definitions/all.d.ts" />
import Date = require("./Date");
import Cost = require("./Cost");
import Item = require("./Item");
import Flow = require("./Flow");
import PaymentMethod = require("./PaymentMethod");
import Tags = require("./Tags");

/**
 * Entity represents a row in your expenses sheet. 
 */
export class Entity{
    
    public date : Date.DateInfo;
    public item : Item.Item;
    public tags : Tags.Tags;
    public cost: Cost.Cost;
    public flow : Flow.Flow;
    public paymentMethod : PaymentMethod.PaymentMethod;
    
    constructor(date : Date.DateInfo, item : Item.Item, tags : Tags.Tags, cost : Cost.Cost, flow : Flow.Flow, paymentMethod : PaymentMethod.PaymentMethod){
        
        this.date = date;
        this.item = item;
        this.tags = tags;
        this.cost = cost;
        this.flow = flow;
        this.paymentMethod = paymentMethod;
    }

    /**
     * To check if the entity is an expenditure or not.
     * @returns: True/False (boolean)
     */
    public isExpenditure(){

        return this.flow.isExpense;
    }

    /**
     * To check if the entity is an earning or not.
     * @returns: True/False (boolean)
     */
    public isEarning(){
        
        return !this.flow.isExpense;
    }
    
}
    
    


