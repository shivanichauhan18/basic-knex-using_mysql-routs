// const express = require('express');
// const app = express();
// var bodyParser = require('body-parser')
// const Knex=require("knex")

// app.use(bodyParser.json())

// app.get("/Persons",function(req,res){
//     Knex.select().from("Persons").then(function(Persons){
//         res.send(Persons.rows)
//     })
// })

// app.listen(8000,()=>{
//     console.log("8000 pr sunega")
// });

var knex = require('knex')({
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      user: 'root',
      password: 'shivani123',
      database: 'ng_data'
    },
    pool: { min: 0, max: 7 }
  })

knex.schema.createTable('Vahicles', (table) => {
    table.increments('id')
    table.string('Model')
    table.integer('Wheels')
    table.integer('Doors')
    table.string('Type')
})
.then(() => console.log("table created"))
    .catch((err) => { console.log(err); throw err })
    .finally(() => {
        knex.destroy();
    });
    

    app.post("/data",function(req,res){
      Personid = req.body.Personid
      LastName = req.body.LastName
      FirstName = req.body.FirstName;
      Age=req.body.Age 
      data=[Personid,LastName,FirstName,Age];
      var sql="INSERT INTO Persons (Personid,LastName,FirstName,Age) VALUES(?,?,?,?)";
      connection.query(sql,data,function(error,result){
          if(error){
              res.send(400).send("error hai")
          }else{
              res.send(result)
          }
      });
  });