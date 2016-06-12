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
         * Given the date number elements for a particular date this method would provide the respective 
         * day string elements
         * 
         *  @param: Day number Element
         *  @param : Month number element
         *  @param : year number element
         *  @returns : Array of date string elements (Array<string>)
         * */        
        public static getDateStringElements(day : number, month : number, year : number){
            
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

        /**
         * Calculates the difference of days between 2 dates.
         * @returns : Date Difference (number)
         */
        public static getDateDifference(d1 : DateInfo, d2 : DateInfo){
            
            var jdn1 : number = d1.getJulianDayNumber();
            var jdn2 : number = d2.getJulianDayNumber();

            return Math.abs(jdn1 - jdn2);
        }

        /**
         * Calcutes the day of the week for a particular date in the past of in the future.
         * @returns : Day of the week (string)
         */
        public getDayOfTheWeek(){

            var jdn : number = this.getJulianDayNumber();
            var w : number = (jdn + 1) % 7;
            var allDays : Array<string> = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
            var day : string = allDays[w];

            return day;
        }

        /**
         * Calculates the Julian Day Number for a given day. A Julian day number is the number of elapsed days 
         * since the beginning of a cycle of 7,980 years invented by Joseph Scaliger in 1583. The Julian Day Number (JDN) is 
         * the integer assigned to a whole solar day in the Julian day count starting from noon Greenwich Mean Time, with Julian 
         * day number 0 assigned to the day starting at noon on January 1, 4713 BC, proleptic Julian calendar (November 24, 4714 BC, 
         * in the proleptic Gregorian calendar), a date at which three multi-year cycles started (which are: Indiction, Solar, and 
         * Lunar cycles) and which preceded any historical dates. For example, the Julian day number for the day starting at 12:00 UT on 
         * January 1, 2000, was 2,451,545. The next Julian Period begins in the year 3268 AD.
         * 
         * Note: This algorithm effectively back-dates the Gregorian calendar onto the Julian calendar for dates before the 
         *       introduction of the Gregorian calendar. Thus any calculations made with this formula before October 15, 1582, 
         *       will not agree with these previous ephemerides.
         * 
         * Reference : https://en.wikipedia.org/wiki/Julian_day
         * @returns : Julian Day Number (number)
         */
        public getJulianDayNumber(){

            var a : number = Math.floor((14 - this.monthNumber)/12)
            var y : number = this.yearNumber + 4800 - a;
            var m : number = this.monthNumber + (12 * a) - 3;

            var jdn = this.dayNumber + Math.floor(((153 * m) + 2)/5) + (365 * y) + Math.floor(y/4) - Math.floor(y/100) + Math.floor(y/400) - 32045;

            return jdn;
        }
        
    }
    
}