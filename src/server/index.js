const express = require("express")
const app = express();
const cors = require('cors');
const bodyParser = require("body-parser");
const mysql = require("mysql")

const db = mysql.createPool({
    host: 'localhost',
    user:'root',
    password:'root',
    database:'login_details'
})

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))

app.post('/submit', (req, res) => {
    const userName = req.body.userName
    const userEmail = req.body.userEmail
    const loginDetails = "INSERT INTO user_detail(userName, userEmail) values (?,?);"

    db.query(loginDetails,[userName, userEmail], (err,result) => {
        console.log(err, "During add")
    })
})

app.get('/getsubmit', (req, res) => {
    const getData = "SELECT * FROM user_detail"

    db.query(getData,(err,result) => {
        res.send(result)
        console.log(err, "Errors during Fetch")
    })
})

app.listen(8001, () => {
    console.log("Success")
})