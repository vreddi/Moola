import { JumbotronTile } from "../../Controls/JumbotronTile/JumbotronTile";
import { SnippetTile } from "../../Controls/SnippetTile/SnippetTile";
import { MonthlyFinanceEntity } from "../../Model/MonthlyFinanceEntity";

export interface IStartDashboard {
	dashboardTile: JumbotronTile;
	earningTile: SnippetTile;
	expenseTile: SnippetTile;
	monthFinanceEntity: MonthlyFinanceEntity;
}