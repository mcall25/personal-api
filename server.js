var express = require('express');
var bodyParser = require('body-parser');

var middleware = require('./controllers/middleware.js');

var mainCtrl = require('./controllers/mainCtrl.js');



var app = express();
app.use(bodyParser.json());
app.use(middleware.addHeaders);






// returns: Your name (e.g. Joe Sandwiches) in a JSON object: { "name": "Donald Duck" }
app.get('/names', mainCtrl.getName);
app.get('/locations', mainCtrl.getLocation);
app.get('/occupations/:type', mainCtrl.getOcccupations);
app.get('/occupations/latest', mainCtrl.getLatest);
app.get('/hobbies', mainCtrl.getHobbies);
app.get('/hobbies/:type', mainCtrl.getHobbiesType);




// Changes your name
app.put('/names', mainCtrl.putNames);
app.put('/locations', mainCtrl.putLocation);

app.post('/hobbies', mainCtrl.postHobbies);
app.post('/occupations', mainCtrl.postOcc);


app.get('/skillz', mainCtrl.getSkills);



// GET /skillz?experience=Intermediate
// app.get('/name/:experience', mainCtrl.getExperience);
// app.post('/skillz', middleware.generateId, mainCtrl.postSkillz);


app.listen(3000, function () {
  console.log('I is running ok');
});
