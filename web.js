const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Let the battle begin!');
});

app.post('/', function (req, res) {
  console.log(req.body);
  const moves = ['F', 'T', 'L', 'R'];
  
  
  
  //res.send(moves[Math.floor(Math.random() * moves.length)]);
  var x = 0;
  for (x < moves.length - 1) {
    res.send(moves[x]);

      if ( x == moves.length) {
        x=0;
      }
    
  }
  
});

app.listen(process.env.PORT || 8080);
