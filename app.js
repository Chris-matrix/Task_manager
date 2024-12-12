import express from 'express';
import taskRoutes from './routes/tasks.js';

const app = express();

// Serve static files from the "public" directory
app.use(express.static('public'));

// Parse incoming JSON requests
app.use(express.json());

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Set the views directory
app.set('views', './views');

// Use task routes
app.use('/task', taskRoutes);

const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
