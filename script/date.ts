namespace Moola.Model.Cell{
    
    export class DateInfo{
    
        value : string;
        day : string;
        month : string;
        year : string;
        dayNumber : number;
        monthNumber : number
        yearNumber : number;
        
        constructor(date : string){
            
            this.value = date;
            
            var dateElements = date.split("/");
            if(dateElements.length == 3){              
                this.dayNumber = Number(dateElements[0]);
                this.monthNumber = Number(dateElements[1]);
                this.yearNumber = Number(dateElements[2]);
                
                var dateStringElements : Array<string> = DateInfo.getDateStringElements(this.dayNumber, this.monthNumber, this.yearNumber);
                
                this.day = dateStringElements[0];
                this.month = dateStringElements[1];
                this.year = dateStringElements[2];
            }
            else{
                this.value = undefined;
                this.day = undefined;
                this.month = undefined;
                this.year = undefined;
                
                this.dayNumber = undefined;
                this.monthNumber = undefined;
                this.yearNumber = undefined;
            }               
        }
        
        /**
         * Given the date number elements for a particular date this method
         * would provide the respective day string elements
         * 
         *  @param: Day number Element
         *  @param : Month number element
         *  @param : year number element
         *  @returns : Array of date string elements
         * */        
        public static getDateStringElements(day: number, month : number, year : number){
            
            var dayString = "";
            var monthString = "";
            var yearString = "";
            
            var st : string = "st";
            var nd : string = "nd";
            var rd : string = "rd";
            var th : string = "th";
            
            var monthLibrary = ["January" , "February",	"March", "April", "May", "June", "July", "August", "September",	"October", "November", "December"];
            
            // Get day string
            dayString = day.toString();
            var dayStringLength = day.toString().length;
            var lastNumber = Number(dayString.charAt(dayStringLength - 1));
            
            switch(lastNumber){
                
                case 1: dayString = dayString + st;
                break;
                
                case 2: dayString = dayString + nd;
                break;  
                
                case 3: dayString = dayString + rd;
                break;
                
                default: dayString = dayString + th;
                break;
            }
            
            // Get month string
            monthString = monthLibrary[month - 1];
            
            // Get year string
            yearString = year.toString();
            
            return [dayString, monthString, yearString];
        }
   
        
    }
    
}