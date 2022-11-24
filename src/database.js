const mongoose = require('mongoose');
const URI = 'mongodb+srv://AlexisSalas:ContraSegura@cluster0.8poqh.mongodb.net/PruebasGPS?retryWrites=true&w=majority';

mongoose.connect(URI)
  .then(db => console.log('Db is connected'))
  .catch(error => console.error(error));

module.exports = mongoose;
