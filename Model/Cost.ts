
export class Cost{
    
    fieldValue : string;
    value : number
    
    constructor(val : string){
        
        this.fieldValue = val;

        if(val != undefined){
            
            // If currency is dollar
            if(val.charAt(0) == '$'){

                var numericVal = val.substr(1);
                this.value = parseFloat(numericVal);
            }
        }
        else{
            this.value = 0;
            this.fieldValue = "";
        }

    }
}
