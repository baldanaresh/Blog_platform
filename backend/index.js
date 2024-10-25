
const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const cors = require('cors');
app.use(cors());

app.use(express.json()); // Middleware to parse JSON

// Routes for user authentication
app.use('/users', userRoutes);

// Blog post routes (protected)
app.use('/posts', postRoutes);
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
