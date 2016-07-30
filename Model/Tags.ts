
export class Tags{

    fieldValue : string;
    tags : Array<string>;

    constructor(val : string){
        
        if(val != undefined && val != null && val != ""){
            
            // Remove all the spaces and " from the tags
            val = val.replace(/ /g, "").replace(/"/g, "");
            this.fieldValue = val;
            this.tags = val.split(",");
        }
        else{
            this.fieldValue = "";
            this.tags = [];
        }
    }
}

