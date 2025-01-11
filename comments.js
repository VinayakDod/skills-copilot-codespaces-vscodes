// create a server
const express = require('express');
const app = express();
// create a port
const port = 3000;
// create a route
app.get('/comments', (req, res) => {
  res.send('Comments are available here');
});
// listen to the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
