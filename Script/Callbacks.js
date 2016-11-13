console.log('Hello Developer!');
var a = "";
var v = "";
var d3 = '';
var c3 = "";
define(['d3', 'c3', 'Parser', 'Visualizer'], function(d3, c3, Parser, V){

    /**
     * This function gets rid of all the content from the webpage.
     * This visually presents a blank screen (exception ios the navbar).
     */
    function clearScreen(){
        $('body .content').empty();
    }

    // Callback for uploading a csv file to parse
    document.getElementById("upload").addEventListener('change', function(){
        var fr = new FileReader();
        fr.onload = function(){
            var p = new Parser.Parser();
            v = new V.Visualizer(this.result, d3, c3, $);

            //Used for debugging on console for now
            // Remove this later
            a = p.CsvToJson(this.result);
        }
        fr.readAsText(this.files[0]);
        clearScreen();
    });
});








