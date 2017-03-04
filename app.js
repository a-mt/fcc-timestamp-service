var express = require('express');
var app = express();

app.all('*', function(req, res){
    var data = {};
    var date = false;
    
    // Query is empty ?
    if(req.params && req.params[0] != '/') {
        var val  = req.params[0].substr(1);
        date = val.match(/\d{10}/) ? new Date(val * 1000) : new Date(val); // timestamp or natural language
    }
    
    // Valid date ?
    if(date && isFinite(date)) {
        data.unix    = date.getTime() / 1000;
        data.natural = date.toLocaleString("en-GB", {month: "long", day: "2-digit", year: "numeric"});
    } else {
        data.unix    = null;
        data.natural = null;
    }
    res.end(JSON.stringify(data));
});
app.listen(process.env.PORT || 8080, function(){
    console.log('The server is listening on port 8080');
});