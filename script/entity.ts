/// <reference path="date.ts" />
/// <reference path="item.ts" />
/// <reference path="tags.ts" />
/// <reference path="cost.ts" />
/// <reference path="flow.ts" />
/// <reference path="paymentMethod.ts" />

namespace Moola.Model.Row{
    
    /**
     * Entity represents a row in your expenses sheet. 
     */
    class Entity{
        
        public date : Moola.Model.Cell.DateInfo;
        public item : Moola.Model.Cell.Item;
        public tags : Moola.Model.Cell.Tags;
        public cost: Moola.Model.Cell.Cost;
        public flow : Moola.Model.Cell.Flow;
        public paymentMethod : Moola.Model.Cell.PaymentMethod;
        
        constructor(){

        }

        
        
    }
    
    
}

