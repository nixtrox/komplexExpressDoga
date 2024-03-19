import express from "express";
import mysql from 'mysql2';
import cors from 'cors'
import bodyParser from "body-parser";


const app = express()

const jsonParser = new bodyParser.json();



app.use(cors());