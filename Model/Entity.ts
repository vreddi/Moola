/// <reference path="../Definitions/all.d.ts" />
import { DateInfo } from "./Date";
import { Cost } from "./Cost";
import { Item } from "./Item";
import { Flow } from "./Flow";
import { PaymentMethod } from "./PaymentMethod";
import { Tags } from "./Tags";

/**
 * Entity represents a row in your expenses sheet.
 */
export class Entity{

    public date : DateInfo;
    public item : Item;
    public tags : Tags;
    public cost: Cost;
    public flow : Flow;
    public paymentMethod : PaymentMethod;

    constructor(date : DateInfo, item : Item, tags : Tags, cost : Cost, flow : Flow, paymentMethod : PaymentMethod){

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
    public IsExpenditure(){

        return this.flow.isExpense;
    }

    /**
     * To check if the entity is an earning or not.
     * @returns: True/False (boolean)
     */
    public IsEarning(){

        return !this.flow.isExpense;
    }

}




