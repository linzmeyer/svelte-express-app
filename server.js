const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const path = require('path');
const axios = require('axios');

app.use(cors());


app.get('/app3/api/v1/launches', (req, res) => {
  console.log('in /api/v1/launches route');
  console.log("req.url:", req.url);


  axios.get(`https://api.spacexdata.com/v4/launches`)
  .then(function (response) {
    res.send({
      success: true,
      data: response.data
    })
  })
  .catch(function (error) {
    res.send({
      success: false,
      data: []
    })
  });

});


app.use(express.static('public'));
app.get('/app3/*', (req, res) => {
  console.log("in main route");
  console.log("req.url:", req.url);
  console.log("sending file:", path.resolve(__dirname, 'public', 'index.html'));
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is up at port ${port}`);
});
