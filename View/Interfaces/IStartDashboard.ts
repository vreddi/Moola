import { JumbotronTile } from "../../Controls/JumbotronTile/JumbotronTile";
import { SnippetTile } from "../../Controls/SnippetTile/SnippetTile";
import { MonthlyFinanceEntity } from "../../Model/MonthlyFinanceEntity";
import { ExpenditureDistributionCard } from "../../Controls/ExpenditureDistributionCard/ExpenditureDistributionCard";
import { SavingEfficiencyCard } from "../../Controls/SavingEfficiencyCard/SavingEfficiencyCard";

export interface IStartDashboard {
	dashboardTile: JumbotronTile;
	earningTile: SnippetTile;
	expenseTile: SnippetTile;
	expenseDistributionCard: ExpenditureDistributionCard;
	savingEfficiencyCard: SavingEfficiencyCard;
	monthFinanceEntity: MonthlyFinanceEntity;
}