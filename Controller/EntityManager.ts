import Entity = require("../Model/Entity");
import Collection = require("../Model/Collections");

/**
 * Entity Manager manages a collection of entites and pertains alls its 
 * responsibilities towards that collection only and not all the entities.
 */
export class EntityManager{

    Entities : Collection.Collection<Entity.Entity>;

    constructor(Entities : Collection.Collection<Entity.Entity>){
        
        this.Entities = Entities;
    }

    /**
     * Get the total expenditure for a collection of entities. 
     * @returns: Total expenditure (number)
     */
    public getTotalExpenditure(){

        var total : number = 0;
        
        for(var index = 0; index < this.Entities.Count(); index++){

            var row : Entity.Entity = this.Entities.GetItem(index);        
            if(row.isExpenditure){

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

        for(var index = 0; index < this.Entities.Count(); index++){

            var row : Entity.Entity = this.Entities.GetItem(index);        
            if(row.isEarning){
                
                total = total + row.cost.value;
            }
        }
        
        return total;
    }
}