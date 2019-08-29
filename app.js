const express = require('express');
const app = express();
const axios = require('axios');
const port = process.env.PORT || 3001;

app.use(express.static('public'));

app.get('/project-preview/:id', function (req, res) {
  res.set('Content-Type', 'text/html');
  axios.get('https://dcd90e2c.ngrok.io/api/v1/project-preview/' + req.params.id)
    .then((response) => {
      console.log(response.data);
      res.send(new Buffer(response.data))
    })
    .catch((err) => {
      res.send(err)
    })
});

app.listen(port, function () {
  console.log('Example app listening on port' + port);
});
