const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/bookRoutes');
const patronRoutes = require('./routes/patronRoutes');
const borrowingRoutes = require('./routes/borrowingRoutes');
const authRoutes = require('./routes/authRoutes');
const { verifyToken } = require('./middlewares/authMiddleware'); 

require('dotenv').config();


const app = express();


app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/TaskBackend', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.error('Error connecting to MongoDB:', error));

app.use('/api/auth', authRoutes); 
app.use(verifyToken); 
app.use('/api/books', bookRoutes);
app.use('/api/patrons', patronRoutes);
app.use('/api/borrow', borrowingRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
