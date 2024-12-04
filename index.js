import express from 'express';

const app = express();

// middleware for json POST body
app.use(express.json()); 

app.get("/", (req, res) => {
    res.send("hello");
})

app.post("/data", (req, res) => {
    const data = req.body;
    console.log(data);
    res.status(200).send(data)
})