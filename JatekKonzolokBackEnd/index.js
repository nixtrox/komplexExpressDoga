import express from "express";
import mysql from 'mysql2';
import cors from 'cors'
import bodyParser from "body-parser";


const app = express()

const jsonParser = new bodyParser.json();



app.use(cors());


const db = mysql.createPool(
    {
        host: "localhost",
        user: 'root',
        password: '',
        database: 'JatekKonzolok'
    }
).promise();



app.get("/",(req,res) =>{
    res.send("VargaDavid_JatekKonzolok")
})


app.get("/Konzolok",async(req,res)=>{
    const temp = await db.query("SELECT * FROM Konzolok")
    const rows = temp[0];
    const fields = temp[1];
    res.send(rows);
})

app.post("/Konzolok", jsonParser,async(req,res)=>{
    let consoleData = [req.body.Name,req.body.Brand,req.body.Price]
    const insert = db.query("INSERT INTO Konzolok(Name,Brand,Price) VALUES (?,?,?)",consoleData)
    res.send("200");
})



app.listen(3000);