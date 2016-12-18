

export enum ExpenditureCategoryType {
	Food,
	Utility,
	Comute,
	Personal,
	Entertainment,
	Salary,
	Healthcare,
	Household,
	Miscellaneous,

	_count
}

export class ExpenditureCategory {

	public name: string;
	public value: number;
	public description: string;
	public type: ExpenditureCategoryType;
}