
export class Flow{

    isExpense : boolean;
    value : string;
    
    /**
     * To check if the entity is an expenditure or not
     */
    public isExpenditure(val : string){
        
        if(val.toLowerCase() === "out"){            
            return true;
        }
        
        return false;
    }
    
    /**
     * To check if the entity is an earning or not.
     */
    public isEarning(val : string){
        
        if(val.toLowerCase() === "in"){           
            return true;
        }
        
        return false;
    }
}

