import { EntityManager } from "../Controller/EntityManager";
import { Constants } from "./Constants";

export class MonthlyFinanceEntity{

	public monthName: string;
    public shortMonthName: string;
	public monthNumber: number;
	public yearNumber: number;
	public earning: number;
	public expenditure: number;
    public shortMonthYearName: string;

	/**
     * Creates monthly financial records for all the months in a particular year
     * specified in the data provided.
     *
     & @returns Monthly Finanial Entities for a particular year (MonthlyFinanceEntity[])
     */
    public static CreateMonthlyFinances(entityManager: EntityManager, year: number): MonthlyFinanceEntity[]{

        let constantsLibrary = new Constants(),
            months = constantsLibrary.constants["months"],
            shortMonths = constantsLibrary.constants["shortFormMonths"],
            allMonthlyFinances: MonthlyFinanceEntity[] = [],
            totalEntities: number = entityManager.Entities.count();

        for(let index = 0; index < months.length; index++){

            let monthFinanceEntity: MonthlyFinanceEntity = new MonthlyFinanceEntity();

            monthFinanceEntity.monthNumber = index + 1;
            monthFinanceEntity.monthName = months[index];
            monthFinanceEntity.shortMonthName = shortMonths[index];
            monthFinanceEntity.expenditure = 0;
            monthFinanceEntity.earning = 0;
            monthFinanceEntity.yearNumber = year;
            monthFinanceEntity.shortMonthYearName = monthFinanceEntity.shortMonthName + "'" + monthFinanceEntity.yearNumber.toString();

            allMonthlyFinances.push(monthFinanceEntity);
        }

        for(let index = 0; index < totalEntities; index++){

            if(entityManager.Entities.getItem(index) != undefined && entityManager.Entities.getItem(index).date.yearNumber != year){
                continue;
            }
            else{
                let partialMonthFinanceEntity: MonthlyFinanceEntity = new MonthlyFinanceEntity();

                partialMonthFinanceEntity.monthNumber = entityManager.Entities.getItem(index).date.monthNumber;

                if(entityManager.Entities.getItem(index).IsEarning()){
                    partialMonthFinanceEntity.earning = entityManager.Entities.getItem(index).cost.value;
                    partialMonthFinanceEntity.expenditure = 0;
                }
                else{
                    partialMonthFinanceEntity.earning = 0;
                    partialMonthFinanceEntity.expenditure = entityManager.Entities.getItem(index).cost.value;
                }

                // Adding up to the total monthly earning/expenditure
                allMonthlyFinances[partialMonthFinanceEntity.monthNumber - 1].earning += partialMonthFinanceEntity.earning;
                allMonthlyFinances[partialMonthFinanceEntity.monthNumber - 1].expenditure += partialMonthFinanceEntity.expenditure;
            }
        }

        return allMonthlyFinances;
    }
}