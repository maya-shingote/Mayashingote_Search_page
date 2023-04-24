const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const apiRouter = require('./server/api');


app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', apiRouter);


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
