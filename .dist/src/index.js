const express = require('express');
const app = express();

app.set('port',process.env.PORT ||25060);

app.use(express.json());

app.use(require('./routes/users'));

app.listen(app.get('port'),()=>{
    console.log('Server on port', app.get('port'));

});