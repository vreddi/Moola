
export class Cost{

    fieldValue : string;
    value : number

    constructor(val : string){

        this.fieldValue = val;

        if(val != undefined){

            // If currency is dollar
            if(val.charAt(0) == '$'){

                // Remove all ',' from the string
                let numericVal = (val.substr(1)).replace(",", "");
                this.value = parseFloat(numericVal);
            }
        }
        else{
            this.value = 0;
            this.fieldValue = "";
        }

    }
}
