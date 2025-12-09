import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { ConnectDB } from "./DB/dataabase.js"
import createPoll from "./route/create.js"

dotenv.config();

const app = express();

// Environment Variables
const PORT = process.env.PORT;
const MongoURL = process.env.MONGO_DB_URL

// CORS and Connection parameter
app.use(express.json({extended:true}))
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.use("/api", createPoll)
app.use("/get", createPoll)

// DB Connectivity
ConnectDB(MongoURL)


app.listen(PORT, ()=>{
console.log(`Server is running on port: ${PORT}`);
})