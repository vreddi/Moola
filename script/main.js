//RequireJS Configuration
requirejs.config({
    //Where paths are evaluated from
    baseUrl: 'Script',

    paths: {

		jquery: 'External/jquery-2.2.4.min',
		d3: 'External/d3.min',
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
		BarChart: 'Model/BarChart'
    }
});

