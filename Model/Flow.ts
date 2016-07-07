
export class Flow{

    isExpense : boolean;
    fieldValue : string;
    
    constructor(value : string){

        this.fieldValue = value;
        this.isExpense = this.isExpenditure();
    }

    /**
     * To check if the entity is an expenditure or not
     * @returns: True/False (boolean)
     */
    public isExpenditure(){
        
        if(this.fieldValue.toLowerCase() === "out"){            
            return true;
        }
        
        return false;
    }
    
    /**
     * To check if the entity is an earning or not.
     * @returns: True/False (boolean)
     */
    public isEarning(){
        
        if(this.fieldValue.toLowerCase() === "in"){           
            return true;
        }
        
        return false;
    }
}

