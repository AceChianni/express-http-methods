import express from 'express';

const app = express();

// middleware for json POST body
app.use(express.json()); 


// Root route: Welcome message
app.get('/', (req, res) => {
  res.send('Welcome to Anime Haven! Discover your next favorite anime adventure.');
});

// About route: JSON response
app.get('/about', (req, res) => {
  res.json({
      title: "Anime Haven",
      description: "Your ultimate source for anime recommendations, reviews, and news.",
      motto: "Explore. Watch. Repeat."
  });
});

// Contact route: POST request
app.post('/contact', (req, res) => {
  const { name, message } = req.body;
  if (!name || !message) {
      return res.status(400).json({ error: "Name and message are required!" });
  }
  res.json({
      message: "Thanks for reaching out to Anime Haven!",
      submitted: { name, message }
  });
});

// User route: URL parameter
app.get('/user/:id', (req, res) => {
  const { id } = req.params;
  res.send(`Welcome, anime fan #${id}! Your journey to discover great anime starts here.`);
});

// Search route: Query parameters
app.get('/search', (req, res) => {
  const { q } = req.query;
  if (!q) {
      return res.status(400).send('Please provide a search term for anime.');
  }
  res.send(`Searching for anime related to "${q}"... Results will appear here.`);
});

// Catch-all route: Undefined routes
app.use((req, res) => {
  res.status(404).send("404 - Oops! Looks like you're lost in the anime multiverse.");
});
// Start the Server
app.listen(3000, () => {
    console.log("started server!!! on port 3000")
  })