const mysql = require('mysql2')

const mysqlConnection = mysql.createConnection({
    
        host: 'db-mysql-nyc1-49352-do-user-13193164-0.b.db.ondigitalocean.com',
        user: 'doadmin',
        password: 'AVNS_ORaHJ-uaqGm8Uk4774w',
        database:'defaultdb' ,
        port:25060,
});
mysqlConnection.connect(function (error){
    if(error)
    {
        console.log(error);
        return;
    }
    else{
        console.log('Successfully connected to the database');
    }
});
module.exports = mysqlConnection;
