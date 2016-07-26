console.log('Hello Developer!');
var a = "";
var v = "";
var d3 = '';
define(['d3', 'Parser', 'Visualizer'], function(d3bitch, Parser, V){

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
            v = new V.Visualizer(this.result);
            a = p.csvToJson(this.result)
        }
        fr.readAsText(this.files[0]);
        clearScreen();
    });
});



    




