/// <reference path="../Definitions/all.d.ts" />

import Entity = require("../Model/Entity");
import Collection = require("../Model/Collections");
import Parser = require("../Model/Parser");

/**
 * Entity Manager manages a collection of entites and pertains alls its 
 * responsibilities towards that collection only and not all the entities.
 */
export class EntityManager{

    Entities : Collection.MoolaCollection<Entity.Entity>;

    constructor(Entities : Collection.MoolaCollection<Entity.Entity>){
        
        //this.Entities = Entities;
        this.Entities = Entities;

        console.log("Total Entities: " + this.Entities.count());
        console.log(this.Entities);
        // Clean the data
        for(var index = 0; index < this.Entities.count(); index++){

            var row : Entity.Entity = this.Entities.getItem(index);    

            // The row contains crucial elements as undefined 
            if(row.cost.fieldValue == undefined || row.item.fieldValue == undefined || row.date.fieldValue == undefined){
                console.log("Deleting: Cost = " + row.cost.fieldValue + " Item = " + row.item.fieldValue + " Date = " + row.date.fieldValue);
                this.Entities.delete(index);
            }   
            else{

                if(row.cost.fieldValue.length == 0 || row.date.fieldValue.length == 0 || row.item.fieldValue.length == 0){
                    console.log("Deleting: " + row.cost.fieldValue);
                    //this.Entities.delete(index);
                }
            }
            
        }
    }

    /**
     * Get the total expenditure for a collection of entities. 
     * @returns: Total expenditure (number)
     */
    public getTotalExpenditure(){

        var total : number = 0;
        
        for(var index = 0; index < this.Entities.count(); index++){

            var row : Entity.Entity = this.Entities.getItem(index);        
            if(row.isExpenditure() && row.cost.value != undefined){

                total = total + row.cost.value;
            }
        }

        return total;
    }

    /**
     * Get the total earning amount for a collection of entities. 
     * @returns: Total earning (number)
     */
    public getTotalEarning(){

        var total : number = 0;

        for(var index = 0; index < this.Entities.count(); index++){

            var row : Entity.Entity = this.Entities.getItem(index);        
            if(row.isEarning() && row.cost.value != undefined){
                
                total = total + row.cost.value;
            }
        }
        
        return total;
    }

    /**
     * Get total expenditure subtracted from total earnings
     * @returns: Net Amount (number)
     */
    public getNetAmount(){

        return this.getTotalEarning() - this.getTotalExpenditure();
    }

    /**
     * Sort the collection of entities in ascending order of cost (earning or expenditure)
     */
    public sortByAscendingCost(){

        this.Entities.sort();
    }

    /**
     * Sort the collection of entities in descending order of cost (earning or expenditure)
     */
    public sortByDescendingCost(){

        this.Entities.sort();
        this.Entities.reverse();
    }

    /**
     * Accross the collection of entities this function gets the total number of days
     * involved in that collection.
     * @returns: Total number of days (number)
     */
    public getTotalDays(){

        // 0 is no day or month or year. 0 here is used as placeholder
        var currDayNum : number = 0;
        var currMonthNum : number = 0;
        var currYearNum : number = 0;
        var dayCount : number = 0;

        for(var index = 0; index < this.Entities.count(); index++){

            var entity : Entity.Entity = this.Entities.getItem(index);

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
    public getTotalMonths(){
        
        // 0 is no month or year. 0 here is used as placeholder
        var currMonthNum : number = 0;
        var currYearNum : number = 0;
        var monthCount : number = 0;

        for(var index = 0; index < this.Entities.count(); index++){

            var entity : Entity.Entity = this.Entities.getItem(index);

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
    public getTotalYears(){

        // 0 is no year. 0 here is used as placeholder
        var currYearNum : number = 0;
        var yearCount = 0;

        for(var index = 0; index < this.Entities.count(); index++){

            var entity : Entity.Entity = this.Entities.getItem(index);

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
}