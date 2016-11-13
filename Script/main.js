//RequireJS Configuration
requirejs.config({
    //Where paths are evaluated from
    baseUrl: 'Script',

    paths: {

		jquery: 'External/jquery-2.2.4.min',
		d3: "https://d3js.org/d3.v3.min",
		c3: "External/c3.min",

		//Moola modules
		Date: 'Model/Date',
		Cost: 'Model/Cost',
		Flow: 'Model/Flow',
		PaymentMethod: 'Model/PaymentMethod',
		Item: 'Model/Item',
		Tags: 'Model/Tags',
		Entity: 'Model/Entity',
		Parser: 'Model/Parser',
		Collections: 'Model/Collections',
		Constants: 'Model/Constants',
		Visualizer: 'Model/Visualizer',
		EntityManager: 'Controller/EntityManager',
		"../Controller/EntityManager" : 'Controller/EntityManager',
		BarChart: 'Model/BarChart',
		Callbacks: 'Callbacks',
		HtmlElement: 'Model/HtmlElement',
		MonthlyFinanceEntity: 'Model/MonthlyFinanceEntity'
    }
});