/// <reference path="../../Definitions/require.d.ts" />\

require('../../../Controls/SavingEfficiencyCard/Style/SavingEfficiencyCardStyle.css');

import * as React from "react";
import * as ReactDOM from "react-dom";
import * as C3 from "c3";

import { ISavingEfficiencyCard } from "./ISavingEfficiencyCard";
import { ExpenditureCategory } from "../../Model/ExpenditureCategory";
import { Constants } from "../../Model/Constants";

const earningSymbolStyle: string = "SnippetTile-CardEarningSymbol";
const earningFontAwesomeStyle: string = "fa fa-angle-double-up";
const expenseSymbolStyle: string = "SnippetTile-CardExpenditureSymbol";
const expenseFontAwesomeStyle: string = "fa fa-angle-double-down";
const expenditureDistributionIconStyle: string = "ExpenditureDistributionCard-ExpenseCategoryIcon";

const transportFontAwesomeStyle: string = "fa fa-car";
const foodFontAwesomeStyle: string = "fa fa-cutlery";
const utilityFontAwesomeStyle: string = "fa fa-lightbulb-o";
const entertainmentFontAwesomeStyle: string = "fa fa-television";
const houseFontAwesomeStyle: string = "fa fa-home";
const medicalFontAwesomeStyle: string = "fa fa-heartbeat";

var classnames = require('classnames');

export class SavingEfficiencyCard extends React.Component<ISavingEfficiencyCard, ISavingEfficiencyCard> implements ISavingEfficiencyCard{

	public inDOM: boolean;
	public title: string;
	public monthYearText: string;
	public informationText: string;
	public earning: number;
	public expenditure: number;
	public savingEfficiency: number;

	constructor(savingEfficiencyData: ISavingEfficiencyCard) {
		super();

		let calculatedEfficiency: number = this.CalculateEfficiency(savingEfficiencyData.earning, savingEfficiencyData.expenditure),
			calculatedInformationText: string = this.GetInformationText(savingEfficiencyData.earning, savingEfficiencyData.expenditure);

		this.state = {
			title: savingEfficiencyData.title,
			monthYearText: savingEfficiencyData.monthYearText,
			informationText: calculatedInformationText,
			earning: savingEfficiencyData.earning,
			expenditure: savingEfficiencyData.expenditure,
			savingEfficiency: calculatedEfficiency
		}

		this.title = savingEfficiencyData.title;
		this.monthYearText = savingEfficiencyData.monthYearText;
		this.informationText = calculatedInformationText;
		this.earning = savingEfficiencyData.earning;
		this.expenditure = savingEfficiencyData.expenditure;
		this.savingEfficiency = calculatedEfficiency;
		this.inDOM = false;
	}

	render() {
		return (
			<div className="SavingEfficiencyCard">
				<div id="SavingEfficiencyGaugeChart"></div>
				<div className="SavingEfficiencyCard-MonthYearText">{this.state.monthYearText}</div>
				<div className="SavingEfficiencyCard-Title">{this.state.title}</div>
				<div className="SavingEfficiencyCard-InformationText">{this.state.informationText}</div>
			</div>
		);
	}

	/**
	* For a given earning and expenditure this function calculates
	* the saving efficiency.
	*
	* @returns Saving Efficiency (number)
	*/
	public CalculateEfficiency(earning: number, expenditure: number): number {
		let saving: number = earning - expenditure;

		// No money was earning, only money was spent
		if(saving <= 0) {
			return 0;
		}

		return parseFloat((saving/earning).toFixed(1)) * 100;
	}

	/**
	* For a given earning and expenditure this function provides the
	* appropriate infromation string to display on the card.
	*
	* @returns Infromation Text (string)
	*/
	public GetInformationText(earning: number, expenditure: number): string {
		let saving: number = earning - expenditure,
			informationText: string = "";

		// No money was earning, only money was spent
		if(saving < 0) {
			if(earning == 0){
				informationText = "You did not earn anything but managed to spend. Hmmm... interesting life choice.";
				if(expenditure == 0) {
					informationText = "You did not earn anything and you did not spend anything. Hello, are you alive?";
				}
			}
			else{
				informationText = "For every $ you earned you spent $" + (expenditure/earning).toFixed(2) + ".";
			}
		}
		else if(saving > 0){
			informationText = "For every $ you earned you spent $" + (expenditure/earning).toFixed(2) + ".";
		}
		else {
			informationText = "You spent all of what you earned.";
		}

		return informationText;
	}

	/**
	* This function generates the C3 saving efficiency gauge chart and binds it
	* to the html element with the appropriate id.
	*/
	public GenerateGaugeChart(efficiency: number) {

		let chart = C3.generate({
			bindto: '#SavingEfficiencyGaugeChart',
			data: {
				columns: [
					['data', efficiency]
				],
				type: 'gauge'
			},
			color: {
	        	pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044'], // the three color levels for the percentage values.
	        	threshold: {
	            	values: [30, 60, 90, 100]
		        }
		    },
		    size: {
		        height: 150
		    }
		});
	}

	componentDidMount(){
		this.GenerateGaugeChart(this.state.savingEfficiency);
	}

	componentDidUpdate() {
		this.GenerateGaugeChart(this.state.savingEfficiency);
	}

	componentWillMount() {
		this.inDOM = true;
	}

	componentWillUnmount() {
		this.inDOM = false;
	}
}