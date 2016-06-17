
export class Flow{

    isExpense : boolean;
    value : string;
    
    constructor(value : string){

        this.value = value;
        this.isExpense = this.isExpenditure();
    }

    /**
     * To check if the entity is an expenditure or not
     * @returns: True/False (boolean)
     */
    public isExpenditure(){
        
        if(this.value.toLowerCase() === "out"){            
            return true;
        }
        
        return false;
    }
    
    /**
     * To check if the entity is an earning or not.
     * @returns: True/False (boolean)
     */
    public isEarning(){
        
        if(this.value.toLowerCase() === "in"){           
            return true;
        }
        
        return false;
    }
}

