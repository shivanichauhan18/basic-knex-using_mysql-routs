const express = require('express');
const app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.json());


var mysql=require("mysql");

var connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"shivani123",
    database:"ng_data"
});

connection.connect();

app.get("/get",function(req,res){
    connection.query("select * from student_file",function(error,results){
        if (error){
            res.send(400).send("error hai bs manlo")
        }else{
            res.json(results)
        }
    });
});

app.post('/submit',function(req, res) {
    id1=req.body.id
    Model1=req.body.Model
    Wheels1=req.body.Wheels
    Doors1=req.body.Doors
    Type1=req.body.Type
    values=[id1,Model1,Wheels1,Doors1,Type1];
    var sql = "INSERT INTO Vahicles (id,Model, Wheels,Doors,Type) VALUES (?,?,?,?,?)";
    connection.query(sql,values, function(err, result)  {
        if(err){
            res.send(400).send("table created");
        }else{
            res.send("nghfuyhjyufhjg");
        }
    });
});


app.post("/update/:id",function(req,res){
    id=req.params.Personid;

    lastname=req.body.LastName;
    firstname=req.body.FirstName;
    age=req.body.Age;
    data=[lastname,firstname,age]
    var sql="UPDATE student_file SET LastName = ?,FirstName = ?,Age = ? WHERE id="+id;
    connection.query(sql,data,function(error,result){
        if(error){
            res.send(400).send("error hai")
        }else{
            res.send("column update")
        }
    });
});

app.put("/update/:id",function(req,res){
    id=req.params.id;
    data1=req.body.price;
    value=[data1]
    var sql="UPDATE student_file SET price = ? WHERE id =" + id;

    connection.query(sql,value,function(error,result){
        if(error){
            res.send(400).send("error hai bs")
        }else{
            res.send("column updated")
        }
    })
})

app.delete("/delete",function(req,res){
    connection.query("DELETE from cars WHERE id = ?", [req.body.id],function(error,results){
        if(error){
            res.send("Their is Error")
        }else{
            res.send("column deleted")
        }
    })
});

app.delete("/delete/:id",function(req,res){
    id=req.params.id
    sql="DELETE from cars WHERE id ="+id;
    connection.query(sql,function(error,result){
        if(error){
            res.send("their is error")
        }else{
            res.send("column deleted")
        }
    });
});


app.listen(8000,() =>{
    console.log("listining 8000 ")
});


