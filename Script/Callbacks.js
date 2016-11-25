console.log('Hello Developer!');
var v = "";
var p = "";
var a = "";
var $ = require('jquery');
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

$(document).ready(function($) {

    // Callback for uploading a csv file to parse
    document.getElementById("upload").addEventListener('change', function(){
        var fr = new FileReader();
        fr.onload = function(){
            p = new Parser.Parser();
            v = new Visualizer.Visualizer(this.result, d3, c3, $);

            console.log();
            console.log('Visualizer: (Store as global variable in developer tools for debigging)')
            console.log(v);
            //Used for debugging on console for now
            // Remove this later
            a = p.CsvToJson(this.result);
        }
        fr.readAsText(this.files[0]);
        clearScreen();
    });
});





