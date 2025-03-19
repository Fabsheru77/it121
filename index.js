// Import the express module
import express from 'express';

// Create an express application
const app = express();

// Home route
app.get('/', (req, res) => {
  res.send('Welcome to the Node JS Test Home Page!');
});

// About route
app.get('/about', (req, res) => {
  res.send('About Me: My Name is Faris I am a Software developer learning Node.js and Express!');
});

// 404 route (catch-all for unmatched routes)
app.use((req, res) => {
  res.status(404).send('404 - Page Not Found');
});

// Start the server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});