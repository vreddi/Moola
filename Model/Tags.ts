
export class Tags{

    value : string;
    tags : Array<string>;

    constructor(value : string){
        
        if(value != undefined && value != null && value != ""){
            this.value = value;
            this.value.replace('""', '"');
            this.tags = value.split(",");
        }
        else{
            this.value = "";
            this.tags = [];
        }
    }
}

