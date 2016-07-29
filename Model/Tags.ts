
export class Tags{

    value : string;
    tags : Array<string>;

    constructor(val : string){
        
        if(val != undefined && val != null && val != ""){
            
            // Remove all the spaces and " from the tags
            val = val.replace(/ /g, "").replace(/"/g, "");
            this.value = val;
            this.tags = val.split(",");
        }
        else{
            this.value = "";
            this.tags = [];
        }
    }
}

