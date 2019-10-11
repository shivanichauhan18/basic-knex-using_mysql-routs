const options = {
    client: 'mysql2',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: 'shivani123',
        database: 'ng_data'
    }
}

const knex = require('knex')(options);

const student = [
    { name: 'shivani chouhan', price: 52642 },
    { name: 'Anjali sen', price: 57127 },
    { name: 'Anjali Patil', price: 9000 },
    { name: 'shivuu', price: 29000 },
    { name: 'sapna visnoi', price: 350000 },
    { name: 'pragati', price: 21000 },
    { name: 'Rabina', price: 41400 },
    { name: 'ankita', price: 21600 },
    { name: 'Alka Gupta', price: 234577 },
    ]
  
  knex('student_file').insert(student).then(() => console.log("data inserted"))
  .catch((err) => { console.log(err); throw err })


knex.from('student_file').select("*")
.then((rows) => {
      for (row of rows) {
          console.log(`${row['id']} ${row['name']} ${row['price']}`);
      }
  }).catch((err) => { console.log( err); throw err })
  .finally(() => {
      knex.destroy();
  });



  app.post("/data",function(req,res){
    sql="select * from public('name','price') VALUES ('shivani',3456789)"

    connection.query("INSERT INTO TABLE")
})
