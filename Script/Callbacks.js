console.log('Hello Developer!');
define(['Parser'], function(Parser){

    // Callback for uploading a csv file to parse
    document.getElementById("openFile").addEventListener('change', function(){
        var fr = new FileReader();
        fr.onload = function(){
            var p = new Parser.Parser();
            console.log(p.csvToJson(this.result));
        }

        fr.readAsText(this.files[0]);
    });
});




//# sourceMappingURL=Callbacks.js.map