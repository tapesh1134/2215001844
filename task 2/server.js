const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const userRoutes = require('./routes/user');
const postRoutes = require('./routes/post')

const app = express();
const PORT = 9876;

app.use(cors());
app.use(express.json());
app.use('/', userRoutes);
app.use('/', postRoutes);

mongoose.connect("mongodb://localhost:27017/socail_media" , { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
  })
  .catch(err => console.log(err));