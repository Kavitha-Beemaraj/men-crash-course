const express= require('express')
const app= express()
const mongoose= require('mongoose')

mongoose.set('strictQuery', true);
const dbUrl= "mongodb://127.0.0.1:27017/subscribers?readPreference=primary&directConnection=true&ssl=false"
const connectionParams={
    useNewUrlParser:true,
    useUnifiedTopology:true
}

mongoose.connect(dbUrl, connectionParams).then(() => console.info("connected to db"))


// check db connection
/*const db=mongoose.connection
db.on('error', (error)=> console.error(error))
db.once('open', ()=> console.log('conneected'))*/


app.use( express.json() )
const subscribersRouter= require('./routes/subscribers')
app.use('/subscribers', subscribersRouter)

app.listen(5000, ()=>console.log('Server Started'))