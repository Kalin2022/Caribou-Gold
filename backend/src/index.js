const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Caribou Gold API' });
});

app.liosten(port, () =>{
  console.log('sServer running on port ${port}');
});

{
  "name":  "caribou-gold-backend",
  "version":  "1.0.0",
  "scripts": {
   "start": "node src/index.js"
  },
  "dependencies": {
   "express": "^4.17.1",
   "cors": "^2.8.5",
   "pg":  "^8.7.1"
  }
}
