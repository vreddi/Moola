import { EntityManager } from "../Controller/EntityManager";
import { Entity } from "./Entity";
import { ExpenditureCategoryType } from "./ExpenditureCategory";
import { Constants } from "./Constants";

export class MonthlyFinanceEntity{

	public monthName: string;
    public shortMonthName: string;
	public monthNumber: number;
	public yearNumber: number;
	public earning: number;
	public expenditure: number;
    public shortMonthYearName: string;
    public expenseDistribution: any;

    constructor() {

        this.expenseDistribution = {};

        // Initialize expenseDistribution object
        for(let expenseCategory = 0; expenseCategory < ExpenditureCategoryType._count; ++expenseCategory) {
            this.expenseDistribution[expenseCategory] = 0;
        }
    }

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

            let entity: Entity = entityManager.Entities.getItem(index);

            if(entity != undefined && entity.date.yearNumber != year){
                continue;
            }
            else{
                let partialMonthFinanceEntity: MonthlyFinanceEntity = new MonthlyFinanceEntity();

                partialMonthFinanceEntity.monthNumber = entity.date.monthNumber;

                if(entity.IsEarning()){
                    partialMonthFinanceEntity.earning = entity.cost.value;
                    partialMonthFinanceEntity.expenditure = 0;
                }
                else{
                    partialMonthFinanceEntity.earning = 0;
                    partialMonthFinanceEntity.expenditure = entity.cost.value;
                }

                // Adding up to the total monthly earning/expenditure
                allMonthlyFinances[partialMonthFinanceEntity.monthNumber - 1].earning += partialMonthFinanceEntity.earning;
                allMonthlyFinances[partialMonthFinanceEntity.monthNumber - 1].expenditure += partialMonthFinanceEntity.expenditure;

                if(entity.expenditureCategoryType != undefined) {
                    allMonthlyFinances[partialMonthFinanceEntity.monthNumber - 1].expenseDistribution[entity.expenditureCategoryType] += partialMonthFinanceEntity.expenditure;
                }
            }
        }

        return allMonthlyFinances;
    }
}