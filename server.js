const bodyParser = require('body-parser');
const express=require('express')
const app=express();
const port=process.env.PORT||5500
const cors=require('cors')
const indexrouter=require('./router')
app.use(express.json())
const connection=require('./dbConnection')

app.use(indexrouter)

app.use(bodyParser.urlencoded({
    extended:true
}))

app.use(cors);

app.listen(port,()=>{
    console.log(`Server up and Listening on port ${port}`)
})