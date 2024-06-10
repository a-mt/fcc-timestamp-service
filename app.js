'use strict';

const app = require('./express/server');

const PORT = process.env.PORT || 8080;

app.listen(PORT, function(){
    console.log(`The server is listening on port ${PORT}`);
});