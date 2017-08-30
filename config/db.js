const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

//mongoLAB url -->> mongodb://abcd:abcd@ds157298.mlab.com:57298/todoapp
mongoose.connect("mongodb://tasks:tasks@ds161960.mlab.com:61960/tasks",{
  useMongoClient: true,
  /* other options */
});


module.export = {mongoose:mongoose};