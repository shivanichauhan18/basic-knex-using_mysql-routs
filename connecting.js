const mysql = require('mysql')
const connection = mysql.createConnection({
      host : '127.0.0.1',
      user : 'root',
      password : 'shivani123',
      database : 'ng_data'
    
  })

module.exports = connection;
connection.connect(function(err){
if (err){
    console.error('error connection: '+ err.stack)
    return;
}
console.log('connected as id ' + connection.threadId)
})


