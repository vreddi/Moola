
export class Tags{

    value : string;
    tags : Array<string>;

    constructor(value : string){
        
        this.value = value;
        this.tags = value.split(",");
    }
}

