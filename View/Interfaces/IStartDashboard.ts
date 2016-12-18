import { JumbotronTile } from "../../Controls/JumbotronTile/JumbotronTile";
import { SnippetTile } from "../../Controls/SnippetTile/SnippetTile";
import { MonthlyFinanceEntity } from "../../Model/MonthlyFinanceEntity";
import { ExpenditureDistributionCard } from "../../Controls/ExpenditureDistributionCard/ExpenditureDistributionCard";

export interface IStartDashboard {
	dashboardTile: JumbotronTile;
	earningTile: SnippetTile;
	expenseTile: SnippetTile;
	expenseDistributionCard: ExpenditureDistributionCard;
	monthFinanceEntity: MonthlyFinanceEntity;
}