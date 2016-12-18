/// <reference path="../Definitions/all.d.ts" />
import { DateInfo } from "./Date";
import { Cost } from "./Cost";
import { Item } from "./Item";
import { Flow } from "./Flow";
import { PaymentMethod } from "./PaymentMethod";
import { Tags } from "./Tags";
import { Constants } from "./Constants";
import { ExpenditureCategoryType } from "./ExpenditureCategory";

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
    public expenditureCategoryType: ExpenditureCategoryType;

    constructor(date : DateInfo, item : Item, tags : Tags, cost : Cost, flow : Flow, paymentMethod : PaymentMethod){

        this.date = date;
        this.item = item;
        this.tags = tags;
        this.cost = cost;
        this.flow = flow;
        this.paymentMethod = paymentMethod;

        if(this.IsExpenditure()) {
            this.expenditureCategoryType = this.GetExpenditureCategoryType();
        }
        else {
            this.expenditureCategoryType = null;
        }
    }

    /**
     * To check if the entity is an expenditure or not.
     * @returns: True/False (boolean)
     */
    public IsExpenditure(): boolean{

        return this.flow.isExpense;
    }

    /**
     * To check if the entity is an earning or not.
     * @returns: True/False (boolean)
     */
    public IsEarning(): boolean{

        return !this.flow.isExpense;
    }


    /**
    * For marked tags related to an entity this finds the expense category
    * type associated with that entity. Currently it chooses the category
    * which matches the most with the tags. If there is a tie then the last
    * category in constants is picked.
    *
    * @returns ExpenditureCategoryType (number)
    */
    public GetExpenditureCategoryType() {

        let constants: Constants = new Constants(),
            categoryScore: any = {},
            category: string = null;

        for(let tag of this.tags.tags) {
            for(let key in constants.categories) {
                // Tag is contained under the category
                if(constants.categories[key].indexOf(tag) > -1) {
                    if(categoryScore[key] == undefined) {
                        categoryScore[key] = 1;
                    }
                    else {
                        categoryScore[key]++;
                    }
                }
            }
        }

        if(Object.keys(categoryScore).length > 0) {
            category = Object.keys(categoryScore).reduce(function(a, b){ return categoryScore[a] > categoryScore[b] ? a : b });
            return Constants.GetExpenditureCategoryTypeFromString(category);
        }

        // No category found
        return null;
    }

}