const mysql=require('mysql');
const connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"astroseer"
});
connection.connect(function(err) {
    if (err){
        console.log("not connected",err)
    }
    else{
    console.log("Connected!");
    }
  });
  module.exports=connection;