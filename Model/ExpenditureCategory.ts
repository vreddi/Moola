

export enum ExpenditureCategoryType {
	Food,
	Utility,
	Transportation,
	Personal,
	Entertainment,
	Salary,
	Medical,
	House,
	Miscellaneous,

	_count
}

export class ExpenditureCategory {

	public name: string;
	public value: number;
	public description: string;
	public type: ExpenditureCategoryType;
}