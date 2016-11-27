import { JumbotronTile } from "../Controls/JumbotronTile/JumbotronTile";
import { SnippetTile } from "../Controls/SnippetTile/SnippetTile";
import { ISnippetTile } from "../Controls/SnippetTile/ISnippetTile";
import { IStartDashboard } from "./Interfaces/IStartDashboard";
import { MonthlyFinanceEntity } from "../Model/MonthlyFinanceEntity";

import * as React from "react";
import * as ReactDOM from "react-dom";

require("../../View/Style/StartDashboardStyle.css");

export class StartDashboard extends React.Component<IStartDashboard, IStartDashboard> implements IStartDashboard {

	public dashboardTile: JumbotronTile;
	public earningTile: SnippetTile;
	public expenseTile: SnippetTile;
    public monthFinanceEntity: MonthlyFinanceEntity;

	constructor(startDashboard: IStartDashboard) {
		super();

        this.state = {
            dashboardTile: startDashboard.dashboardTile,
            earningTile: startDashboard.earningTile,
            expenseTile: startDashboard.expenseTile,
            monthFinanceEntity: startDashboard.monthFinanceEntity
        } as IStartDashboard;

        this.dashboardTile = startDashboard.dashboardTile;
        this.earningTile = startDashboard.earningTile;
        this.expenseTile = startDashboard.expenseTile;
        this.monthFinanceEntity = startDashboard.monthFinanceEntity;
	}

    render() {

        let component: Element;

        this.dashboardTile.inDOM ? component = ReactDOM.findDOMNode(this.dashboardTile) : component = document.getElementsByClassName("content")[0];

        return (
            <div>
            <JumbotronTile>
            <div className="StartDashboard-Section1">
                <SnippetTile heading = {this.state.earningTile.state.heading}
                             title = {this.state.earningTile.state.title}
                             type = {this.state.earningTile.state.type}
                             value = {this.state.earningTile.state.value}
                             htmlComponent = {component} />
                <SnippetTile heading = {this.state.expenseTile.state.heading}
                             title = {this.state.expenseTile.state.title}
                             type = {this.state.expenseTile.state.type}
                             value = {this.state.expenseTile.state.value}
                             htmlComponent = {component} />
            </div>
            </JumbotronTile>
            </div>
        );
    }

    public RenderDashboard(htmlComponent: Element) {

        ReactDOM.render(
            <StartDashboard dashboardTile={this.dashboardTile}
                            earningTile={this.earningTile}
                            expenseTile={this.expenseTile}
                            monthFinanceEntity = {this.monthFinanceEntity} />
            , htmlComponent);
    }
}