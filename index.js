const express = require('express')
const cors = require('cors')
const mysql = require('mysql2')
require('dotenv').config()
const app = express()

app.use(cors())

const connection = mysql.createConnection(process.env.DATABASE_URL)
console.log('Connected to PlanetScale!')

app.get('/',(req, res) => {
    console.log('hello world')
    res.send('Hello')
})

app.get('/attractions', (req, res)=>{
    connection.query(
        'SELECT * FROM attractions',
        function(err, result, fields){
            console.log(result)
            res.send(result)
        }
    )
})
app.listen(process.env.PORT || 3306)