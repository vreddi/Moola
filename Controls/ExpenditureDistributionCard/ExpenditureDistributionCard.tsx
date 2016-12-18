/// <reference path="../../Definitions/require.d.ts" />\

require('../../../Controls/ExpenditureDistributionCard/Style/ExpenditureDistributionCardStyle.css');

import * as React from "react";
import * as ReactDOM from "react-dom";

import { IExpenditureDistributionCard } from "./IExpenditureDistributionCard";
import { ExpenditureCategory } from "../../Model/ExpenditureCategory";
import { Constants } from "../../Model/Constants";

const earningSymbolStyle: string = "SnippetTile-CardEarningSymbol";
const earningFontAwesomeStyle: string = "fa fa-angle-double-up";
const expenseSymbolStyle: string = "SnippetTile-CardExpenditureSymbol";
const expenseFontAwesomeStyle: string = "fa fa-angle-double-down";
const expenditureDistributionIconStyle: string = "ExpenditureDistributionCard-ExpenseCategoryIcon";

const foodFontAwesomeStyle: string = "fa fa-cutlery";
const utilityFontAwesomeStyle: string = "fa fa-lightbulb-o";
const entertainmentFontAwesomeStyle: string = "fa fa-television";

var classnames = require('classnames');

export class ExpenditureDistributionCard extends React.Component<IExpenditureDistributionCard, IExpenditureDistributionCard> implements IExpenditureDistributionCard{

	public inDOM: boolean;
	public htmlComponent: Element;
	public foodValue: number;
	public utilityValue: number;
	public entertainmentValue: number;

	constructor(expenditureDistributionTileData: IExpenditureDistributionCard) {
		super();
		this.state = {
			htmlComponent: expenditureDistributionTileData.htmlComponent,
			foodValue: expenditureDistributionTileData.foodValue,
			utilityValue: expenditureDistributionTileData.utilityValue,
			entertainmentValue: expenditureDistributionTileData.entertainmentValue
		} as any;


		this.htmlComponent = expenditureDistributionTileData.htmlComponent;
		this.foodValue = expenditureDistributionTileData.foodValue;
		this.utilityValue = expenditureDistributionTileData.utilityValue;
		this.entertainmentValue = expenditureDistributionTileData.entertainmentValue;
		this.inDOM = false;
	}

	render() {

		let foodCategoryIconClass = classnames(foodFontAwesomeStyle, expenditureDistributionIconStyle, Constants.color.lavender),
			utilityCategoryIconClass = classnames(utilityFontAwesomeStyle, expenditureDistributionIconStyle, Constants.color.amber),
			entertainmentCategoryIconClass = classnames(entertainmentFontAwesomeStyle, expenditureDistributionIconStyle, Constants.color.lightBlue);

		return (
			<div className="ExpenditureDistributionCard">
				<div className="ExpenditureDistributionCard-CategoryRow">
					<div className="ExpenditureDistributionCard-Category">
						<i className={ foodCategoryIconClass } aria-hidden="true"></i>
						<div className="ExpenditureDistributionCard-ExpenseCategoryTitle">Food</div>
					</div>
					<div className="ExpenditureDistributionCard-ExpenseCategoryValue">${this.state.foodValue}</div>
				</div>

				<div className="ExpenditureDistributionCard-CategoryRow">
					<div className="ExpenditureDistributionCard-Category">
						<i className={ utilityCategoryIconClass } aria-hidden="true"></i>
						<div className="ExpenditureDistributionCard-ExpenseCategoryTitle">Utility</div>
					</div>
					<div className="ExpenditureDistributionCard-ExpenseCategoryValue">${this.state.utilityValue}</div>
				</div>

				<div className="ExpenditureDistributionCard-CategoryRow">
					<div className="ExpenditureDistributionCard-Category">
						<i className={ entertainmentCategoryIconClass } aria-hidden="true"></i>
						<div className="ExpenditureDistributionCard-ExpenseCategoryTitle">Entertainment</div>
					</div>
					<div className="ExpenditureDistributionCard-ExpenseCategoryValue">${this.state.entertainmentValue}</div>
				</div>
			</div>
		);
	}

	componentWillMount() {
		this.inDOM = true;
	}

	componentWillUnmount() {
		this.inDOM = false;
	}
}