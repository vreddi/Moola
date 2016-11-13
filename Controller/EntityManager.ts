/// <reference path="../Definitions/all.d.ts" />

import { Entity } from "../Model/Entity";
import { MoolaCollection } from "../Model/Collections";
import { Parser } from "../Model/Parser";

/**
 * Entity Manager manages a collection of entites and pertains alls its
 * responsibilities towards that collection only and not all the entities.
 */
export class EntityManager{

    Entities : MoolaCollection<Entity>;

    constructor(Entities : MoolaCollection<Entity>){

        this.Entities = Entities;

        console.log("Total Entities: " + this.Entities.count());
        console.log(this.Entities);
        // Clean the data
        for(var index = 0; index < this.Entities.count(); index++){

            var row : Entity = this.Entities.getItem(index);

            // The row contains crucial elements as undefined
            if(row.cost.fieldValue == null || row.cost.fieldValue.length == 0){
                console.log("Deleting as Cost field is undefined or empty: Cost = " + row.cost.fieldValue + " Item = " + row.item.fieldValue + " Date = " + row.date.fieldValue);
                this.Entities.delete(index);
                index--;
            }
            else if(row.item.fieldValue == undefined || row.item.fieldValue.length == 0){
                console.log("Deleting as Item field is undefined or empty: Cost = " + row.cost.fieldValue + " Item = " + row.item.fieldValue + " Date = " + row.date.fieldValue);
                this.Entities.delete(index);
                index--;
            }
            else if(row.date.fieldValue == undefined || row.date.fieldValue.length == 0){
                console.log("Deleting as Date field is undefined or empty: Cost = " + row.cost.fieldValue + " Item = " + row.item.fieldValue + " Date = " + row.date.fieldValue);
                this.Entities.delete(index);
                index--;
            }
        }
    }

    /**
     * Get the total expenditure for a collection of entities.
     * @returns: Total expenditure (number)
     */
    public GetTotalExpenditure(){

        var total : number = 0;

        for(var index = 0; index < this.Entities.count(); index++){

            var row : Entity = this.Entities.getItem(index);
            if(row.IsExpenditure() && row.cost.value != undefined){

                total = total + row.cost.value;
            }
        }

        return total;
    }

    /**
     * Get the total earning amount for a collection of entities.
     * @returns: Total earning (number)
     */
    public GetTotalEarning(){

        var total : number = 0;

        for(var index = 0; index < this.Entities.count(); index++){

            var row : Entity = this.Entities.getItem(index);
            if(row.IsEarning() && row.cost.value != undefined){

                total = total + row.cost.value;
            }
        }

        return total;
    }

    /**
     * Get total expenditure subtracted from total earnings
     * @returns: Net Amount (number)
     */
    public GetNetAmount(){

        return this.GetTotalEarning() - this.GetTotalExpenditure();
    }

    /**
     * Sort the collection of entities in ascending order of cost (earning or expenditure)
     */
    public SortByAscendingCost(){

        this.Entities.sort();
    }

    /**
     * Sort the collection of entities in descending order of cost (earning or expenditure)
     */
    public SortByDescendingCost(){

        this.Entities.sort();
        this.Entities.reverse();
    }

    /**
     * Accross the collection of entities this function gets the total number of days
     * involved in that collection.
     * @returns: Total number of days (number)
     */
    public GetTotalDays(){

        // 0 is no day or month or year. 0 here is used as placeholder
        var currDayNum : number = 0;
        var currMonthNum : number = 0;
        var currYearNum : number = 0;
        var dayCount : number = 0;

        for(var index = 0; index < this.Entities.count(); index++){

            var entity : Entity = this.Entities.getItem(index);

            // In case of invalid day, dont count the entity
            if(entity.date.dayNumber == null || isNaN(entity.date.dayNumber) || entity.date.dayNumber == undefined){
                continue;
            }

            // In case of invalid month, dont count the entity
            if(entity.date.monthNumber == null || isNaN(entity.date.monthNumber) || entity.date.monthNumber == undefined){
                continue;
            }

            // In case of invalid year, dont count the entity
            if(entity.date.yearNumber == null || isNaN(entity.date.yearNumber) || entity.date.yearNumber == undefined){
                continue;
            }

            if(currDayNum != entity.date.dayNumber || currMonthNum != entity.date.monthNumber || currYearNum != entity.date.yearNumber){

                dayCount++;
                currDayNum = entity.date.dayNumber;
                currMonthNum = entity.date.monthNumber;
                currYearNum = entity.date.yearNumber;
            }
        }

        return dayCount;
    }

    /**
     * Accross the collection of entities this function gets the total number of months
     * involved in that collection.
     * @returns: Total number of months (number)
     */
    public GetTotalMonths(){

        // 0 is no month or year. 0 here is used as placeholder
        var currMonthNum : number = 0;
        var currYearNum : number = 0;
        var monthCount : number = 0;

        for(var index = 0; index < this.Entities.count(); index++){

            var entity : Entity = this.Entities.getItem(index);

            // In case of invalid month, dont count the entity
            if(entity.date.monthNumber == null || isNaN(entity.date.monthNumber) || entity.date.monthNumber == undefined){
                continue;
            }

            // In case of invalid year, dont count the entity
            if(entity.date.yearNumber == null || isNaN(entity.date.yearNumber) || entity.date.yearNumber == undefined){
                continue;
            }

            if(currMonthNum != entity.date.monthNumber || currYearNum != entity.date.yearNumber){

                monthCount++;
                currMonthNum = entity.date.monthNumber;
                currYearNum = entity.date.yearNumber;
            }
        }

        return monthCount;
    }

    /**
     * Accross the collection of entities this function gets the total number of years
     * involved in that collection.
     * @returns: Total number of years (number)
     */
    public GetTotalYears(){

        // 0 is no year. 0 here is used as placeholder
        var currYearNum : number = 0;
        var yearCount = 0;

        for(var index = 0; index < this.Entities.count(); index++){

            var entity : Entity = this.Entities.getItem(index);

            // In case of invalid year, dont count the entity
            if(entity.date.yearNumber == null || isNaN(entity.date.yearNumber) || entity.date.yearNumber == undefined){
                continue;
            }

            if(currYearNum != entity.date.yearNumber){

                yearCount++;
                currYearNum = entity.date.yearNumber;
            }
        }

        return yearCount;
    }

    /**
     * Provides with a list of all the entities, expenditures and earnings from a certain
     * month of a certain year.
     * @returns: Array of Entities from a certain month (Array<Entity.Entity>)
     */
    public GetAllMonthEntities(monthNumber : number, yearNumber: number){

        var allEntities = this.Entities;
        var result : Array<Entity> = [];

        for(var index = 0; index < this.Entities.count(); index++){

            var entitiy = this.Entities.getItem(index);

            if(entitiy.date.monthNumber == monthNumber && entitiy.date.yearNumber == yearNumber){
                result.push(entitiy);
            }
        }

        return result;
    }
}