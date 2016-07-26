
export class DateInfo{

    fieldValue : string;
    day : string;
    month : string;
    year : string;
    dayNumber : number;
    monthNumber : number
    yearNumber : number;
    
    constructor(date : string){
        
        this.fieldValue = date;
        
        var dateElements = date.split("/");
        if(dateElements.length == 3){     

            // American standards of writing date i.e Month/Day/Year        
            this.dayNumber = Number(dateElements[1]);
            this.monthNumber = Number(dateElements[0]);
            this.yearNumber = Number(dateElements[2]);
            
            var dateStringElements : Array<string> = DateInfo.getDateStringElements(this.dayNumber, this.monthNumber, this.yearNumber);
            
            this.month = dateStringElements[1];
            this.day = dateStringElements[0];
            this.year = dateStringElements[2];
        }
        else{
            this.fieldValue = undefined;
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
     *  @param : Day number Element
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
     * Determines if the referenced date is a weekend day or not. Weekend days only include
     * Saturday and Sunday.
     * @returns : True/False (boolean)
     */
    public isWeekend(){

        var jdn : number = this.getJulianDayNumber();
        var w : number = (jdn) % 7;
        
        if(w == 5 || w == 6){
            return true;
        }

        return false;
    }

    /**
     * Determines the total number weekends that occured betweeen 2 dates. (Saturday, Sunday) clubbing is considered
     * as a weekend. If we start from a Sunday then that (Sunday) is also a weekend even though we did not have a saturday.
     * Justification is that the range is still part of the weekeend even though it only spent one day from the weekend.
     * Similarly if you date range ends on a Saturday then that (Saturday) is also considered as a separate weekend.
     * @returns: Total number of weekends between 2 dates (number)
     */
    public static totalWeekendsBetweenDates(start : DateInfo, end : DateInfo){

        var totalWeekendDays : number = DateInfo.totalWeekendDaysBetweenDates(start, end);
        var startJDN : number = start.getJulianDayNumber();
        var endJDN : number = end.getJulianDayNumber();
        var startW : number = startJDN % 7;
        var endW : number = endJDN % 7;
        
        if(startW == 6 || endW == 5){

            return (totalWeekendDays/2) + (totalWeekendDays % 2) + 1;
        }

        return (totalWeekendDays/2) + (totalWeekendDays % 2);
    }

    /**
     * Calculates the total number weekend days between 2 dates. Weekend days only include Saturday and 
     * Sunday.
     * @returns: Number of weekend dates between 2 dates (number)
     */
    public static totalWeekendDaysBetweenDates(start : DateInfo, end : DateInfo){

        var startJDN : number = start.getJulianDayNumber();
        var endJDN : number = end.getJulianDayNumber();
        var weekendDaysCount : number = 0;
        
        for(var day : number = startJDN; day <= endJDN; day++){

            var w = day % 7;
            if(w == 5 || w == 6){
                weekendDaysCount++;
            }

        }

        return weekendDaysCount;
    }

    /**
     * Calculates the total number of weekdays between 2 given dates. Weekdays only includes days from Monday
     * through Friday (including the ends).
     * @returns: Number of weekdays between 2 dates (number)
     */
    public static totalWeekDaysBetweenDays(start : DateInfo, end : DateInfo){

        var startJDN : number = start.getJulianDayNumber();
        var endJDN : number = end.getJulianDayNumber();
        var weekDayCount : number = 0;
        
        for(var day : number = startJDN; day <= endJDN; day++){

            var w = day % 7;
            if(w != 5 && w != 6){
                weekDayCount++;
            }

        }

        return weekDayCount;
    }

    /**
     * Calcutes the day of the week for a particular date in the past of in the future.
     * @returns: Day of the week (string)
     */
    public getDayOfTheWeek(){

        var jdn : number = this.getJulianDayNumber();
        var w : number = (jdn) % 7;
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

