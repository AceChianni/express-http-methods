import express from 'express';

const app = express();

// middleware for json POST body
app.use(express.json()); 

// Root Route (GET)
app.get("/", (req, res) => {
    res.send("hello");
})

app.post("/data", (req, res) => {
    const data = req.body;
    console.log(data);
    res.status(200).send(data)
})

// Start the Server
app.listen(3000, () => {
    console.log("started server!!! on port 3000")
  })