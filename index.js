import express from 'express';

const app = express();

// middleware for json POST body
app.use(express.json()); 

// Root Route (GET)
app.get("/", (req, res) => {
    res.send("hello wrld");
})

app.get("/anime", (req, res) => {
    res.type(json);
    res.send(`{
        "title": "FMAB",
        "episodes": 52
        }`);
});

app.post("/data", (req, res) => {
    const data = req.body;
    console.log(data);
    res.status(200).send(data)
})

// Start the Server
app.listen(3000, () => {
    console.log("started server!!! on port 3000")
  })