/// <reference path="../../Definitions/require.d.ts" />\

require('../../../Controls/SnippetTile/Style/SnippetTileStyle.css');
import * as React from "react";
import * as ReactDOM from "react-dom";
import { ISnippetTile } from "./ISnippetTile";
import { Flow } from "../../Model/Flow";

const earningSymbolStyle: string = "SnippetTile-CardEarningSymbol";
const earningFontAwesomeStyle: string = "fa fa-angle-double-up";
const expenseSymbolStyle: string = "SnippetTile-CardExpenditureSymbol";
const expenseFontAwesomeStyle: string = "fa fa-angle-double-down";

export class SnippetTile extends React.Component<ISnippetTile, ISnippetTile> implements ISnippetTile{

	public inDOM: boolean;
	public heading: string;
	public title: string;
	public value: number;
	public htmlComponent: Element;
	public type: Flow;

	constructor(snippetTile: ISnippetTile) {
		super();
		this.state = {
			heading: snippetTile.heading,
			title: snippetTile.title,
			type: snippetTile.type,
			value: snippetTile.value
		} as any;

		this.heading = snippetTile.heading;
		this.title = snippetTile.title;
		this.htmlComponent = snippetTile.htmlComponent;
		this.type = snippetTile.type;
		this.value = snippetTile.value;
		this.inDOM = false;
	}

	render() {

		let cardTypeClassName: string = "",
			fontAwesomeClassName: string = "";

		if(this.type.isExpense) {
			cardTypeClassName = expenseSymbolStyle;
			fontAwesomeClassName = expenseFontAwesomeStyle;
		}
		else {
			cardTypeClassName = earningSymbolStyle;
			fontAwesomeClassName = earningFontAwesomeStyle;
		}

		return (
			<div className="SnippetTile-Card">
				<div className={cardTypeClassName}>
					<i className={fontAwesomeClassName} aria-hidden="true"></i>
				</div>
				<div className="SnippetTile-CardHeading">{this.state.heading}</div>
				<div className="SnippetTile-CardTitle">{this.state.title}</div>
				<div className="SnippetTile-CardValue">{this.state.value}</div>
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