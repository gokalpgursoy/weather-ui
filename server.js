const express = require('express');

const app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
const port = 8080;

// make express look in the public directory for assets (css/js/img)
app.use(express.static(`${__dirname}/dist`));

app.listen(port, () => {
  console.log(`Our app is running on http://localhost:${port}`);
});
