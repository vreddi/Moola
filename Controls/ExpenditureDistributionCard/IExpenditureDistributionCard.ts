import { ExpenditureCategory } from "../../Model/ExpenditureCategory";

export interface IExpenditureDistributionCard {
	htmlComponent: Element
	foodValue: number,
	utilityValue: number,
	entertainmentValue: number
}