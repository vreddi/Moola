import { JumbotronTile } from "../Controls/JumbotronTile/JumbotronTile";
import { SnippetTile } from "../Controls/SnippetTile/SnippetTile";
import { ISnippetTile } from "../Controls/SnippetTile/ISnippetTile";
import { ExpenditureDistributionCard } from "../Controls/ExpenditureDistributionCard/ExpenditureDistributionCard";
import { IExpenditureDistributionCard } from "../Controls/ExpenditureDistributionCard/IExpenditureDistributionCard";
import { SavingEfficiencyCard } from "../Controls/SavingEfficiencyCard/SavingEfficiencyCard";
import { ISavingEfficiencyCard } from "../Controls/SavingEfficiencyCard/ISavingEfficiencyCard";
import { IStartDashboard } from "./Interfaces/IStartDashboard";
import { MonthlyFinanceEntity } from "../Model/MonthlyFinanceEntity";

import * as React from "react";
import * as ReactDOM from "react-dom";

require("../../View/Style/StartDashboardStyle.css");

export class StartDashboard extends React.Component<IStartDashboard, IStartDashboard> implements IStartDashboard {

	public dashboardTile: JumbotronTile;
	public earningTile: SnippetTile;
	public expenseTile: SnippetTile;
    public expenseDistributionCard: ExpenditureDistributionCard;
    public savingEfficiencyCard: SavingEfficiencyCard;
    public monthFinanceEntity: MonthlyFinanceEntity;

	constructor(startDashboard: IStartDashboard) {
		super();

        this.state = {
            dashboardTile: startDashboard.dashboardTile,
            earningTile: startDashboard.earningTile,
            expenseTile: startDashboard.expenseTile,
            expenseDistributionCard: startDashboard.expenseDistributionCard,
            savingEfficiencyCard: startDashboard.savingEfficiencyCard,
            monthFinanceEntity: startDashboard.monthFinanceEntity
        } as IStartDashboard;

        this.dashboardTile = startDashboard.dashboardTile;
        this.earningTile = startDashboard.earningTile;
        this.expenseTile = startDashboard.expenseTile;
        this.expenseDistributionCard = startDashboard.expenseDistributionCard;
        this.savingEfficiencyCard = startDashboard.savingEfficiencyCard;
        this.monthFinanceEntity = startDashboard.monthFinanceEntity;
	}

    render() {

        let component: Element;

        this.dashboardTile.inDOM ? component = ReactDOM.findDOMNode(this.dashboardTile) : component = document.getElementsByClassName("content")[0];

        return (
            <div>
            <JumbotronTile>
            <section>
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
                <div className="StartDashboard-Section2">
                    <ExpenditureDistributionCard foodValue = {this.state.expenseDistributionCard.state.foodValue}
                                 utilityValue = {this.state.expenseDistributionCard.state.utilityValue}
                                 entertainmentValue = {this.state.expenseDistributionCard.state.entertainmentValue}
                                 transportValue = {this.state.expenseDistributionCard.state.transportValue}
                                 houseValue = {this.state.expenseDistributionCard.state.houseValue}
                                 medicalValue = {this.state.expenseDistributionCard.state.medicalValue}
                                 htmlComponent = {component} />
                </div>
                <div className="StartDashboard-Section3">
                    <SavingEfficiencyCard title = {this.state.savingEfficiencyCard.state.title}
                                        earning = {this.state.savingEfficiencyCard.state.earning}
                                        expenditure = {this.state.savingEfficiencyCard.state.expenditure}
                                        monthYearText = {this.state.savingEfficiencyCard.state.monthYearText}
                     />
                </div>
            </section>
            </JumbotronTile>
            </div>
        );
    }

    public RenderDashboard(htmlComponent: Element) {

        ReactDOM.render(
            <StartDashboard dashboardTile={this.dashboardTile}
                            earningTile={this.earningTile}
                            expenseTile={this.expenseTile}
                            expenseDistributionCard={this.expenseDistributionCard}
                            savingEfficiencyCard={this.savingEfficiencyCard}
                            monthFinanceEntity = {this.monthFinanceEntity} />
            , htmlComponent);
    }
}