console.log('Hello Developer!');
window.v = "";
window.p = "";
window.a = "";
window.$ = require('jquery');
var d3 = require('d3');
var c3 = require('c3');
var Visualizer = require('Visualizer');
var Parser = require('Parser');

/**
* This function gets rid of all the content from the webpage.
* This visually presents a blank screen (exception ios the navbar).
*/
function clearScreen(){
    $('body .content').empty();
}

window.$(document).ready(function($) {

    // Callback for uploading a csv file to parse
    document.getElementById("upload").addEventListener('change', function(){
        var fr = new FileReader();
        fr.onload = function(){
            window.p = new Parser.Parser();
            window.v = new Visualizer.Visualizer(this.result, d3, c3, $);

            //Used for debugging on console for now
            // Remove this later
            window.a = window.p.CsvToJson(this.result);
        }
        fr.readAsText(this.files[0]);
        clearScreen();
    });
});





