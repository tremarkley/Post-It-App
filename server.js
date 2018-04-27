const express = require('express');
const path = require('path');

const app = express();

const port = process.env.PORT;
const publicPath = path.resolve(__dirname, 'src/public');

app.use(express.static(publicPath));

app.listen(port, () => {
  console.log(`App started on port ${port}`);
});