//RequireJS Configuration
requirejs.config({
    //Where paths are evaluated from
    baseUrl: 'Script',

    paths: {
		jquery: [
			'https://code.jquery.com/jquery-2.2.0.min.js'
		],
		bootstrap: [
			'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js'
		],

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
		EntityManager: 'Controller/EntityManager'
    }
});


/**
 * This function gets rid of all the content from the webpage.
 * This visually presents a blank screen (exception ios the navbar).
 */
function clearScreen(){

	$('body .content').empty();
}