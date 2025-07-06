// const express = require('express');    // older 
import express from 'express'   // to use it add module in type in package.json
import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from './config/db.js';   // here connectDB is written in { } because we're importing a named export.
import dotenv from "dotenv"
import rateLimiter from './middleware/rateLimiter.js';
import cors from 'cors';

dotenv.config();    // It’s used to load your .env file values into process.env, so you can access them in your code.

const app = express();
const PORT = process.env.PORT || 5001  //  If PORT is not defined in the .env file, it will fallback to 5001.


app.use(cors({
    origin:["http://localhost:5173",
    "https://leaf-pad.vercel.app/" ]
})
);

// middleware    ->    a function that runs between the request (req) and the response (res) in your application.
app.use(express.json());   // this middleware will Parse JSON bodies: req.body
app.use(rateLimiter);


//  our simple custom middleware
// app.use((req, res, next) => {
// console.log(`Req method is ${req.method} & Req URL is ${req.url}`)
// next();
// })

app.use("/api/notes", notesRoutes);
// app.use("/api/products", productRoutes);       if we want to add like products

// What is Endpoint
//  An Endpoint is a combination of URL+HTTP method that lets the client interact with a specific resources 
 
connectDB().then(() => {   // when database connected only then go ahead (good way)
app.listen(PORT, () => {
    console.log("Server started on port: ",PORT);
})
})


//  "start": "node src/server.js" added in package.json because server.js is in src folder and type npm start not node server.js  


