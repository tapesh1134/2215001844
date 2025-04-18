const express = require('express');
const cors = require('cors');
const numberRoutes = require('./routes/numberroute');

const app = express();
const PORT = 9876;

app.use(cors());
app.use(express.json());

app.use('/numbers', numberRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});