import { ExpenditureCategoryType } from "./ExpenditureCategory";

export class Constants{

    constants : any;
    categories: any;
    public static color: any = {
        amber: "Shared-Color-Amber",
        lavender: "Shared-Color-Lavender",
        lightBlue: "Shared-Color-LightBlue"
    }

    constructor(){

        this.constants = {
            months : ["January" , "February",	"March", "April", "May", "June", "July", "August", "September",	"October", "November", "December"],
            shortFormMonths: ["Jan", "Feb", "March", "April", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
        };

        this.categories = {
            food : ["food" ,"restaurant", "lunch", "dinner", "menu", "grub", "meal", "groceries", "takeout", "take-out", "bite", "entree", "drink", "snack", "cuisine"],
            personal : ["clothes", "shorts", "jeans", "t-shirt", "tshirt", "garments", "electronics", "bags", "shades", "jewelry","hats"],
            entertainment : ["movie", "game", "outing"],
            utility : ["electricity", "water", "lighting", "phone", "mobile", "bill"],
            household : ["apartment", "house", "home", "floor", "room", "rent", "grocery", "furniture", "bulb", "lighting", "kitchen", "bedroom"],
            salary : ["earning", "wage", "pay", "take", "payroll", "stipened"],
            comute : ["gas", "fuel", "car", "ride", "uber", "lyft", "bus", "taxi", "cab"],
            healthcare : ["protein", "whey", "gym", "sport", "sports", "health", "healthy", "running", "active", "pills", "vitamin", "vitamins", "iron", "calcium", "zinc", "omega-3",
                        "creatine", "fitness", "fit"
                        ],
            miscellaneous : ["miscellaneous"]
        }
    }


    /**
    * Given a string we get the matching Expenditure Category Type from this method.
    * Example: "food" will return ExpenditureCategoryTypr.Food
    *
    * @returns: ExpenseCategoryType (number)
    */
    public static GetExpenditureCategoryTypeFromString(category: string): number{

        let key: string = category.toLowerCase();

        for(let expenseCategory = 0; expenseCategory < ExpenditureCategoryType._count; ++expenseCategory) {

            if(ExpenditureCategoryType[expenseCategory].toLowerCase() === key) {
                return expenseCategory;
            }
        }

        return null;
    }

}


