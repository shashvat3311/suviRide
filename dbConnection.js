const mysql=require('mysql')

const connection=mysql.createConnection({
    user:"root",
    host:"localhost",
    database:"suvi_ride"

})

connection.connect((err)=>{
    err?console.log(err):console.log("Connection Successfull")
})



// connection?console.log("Connection Successfull\nDatabase Connected"):console.log(err);

module.exports=connection