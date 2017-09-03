const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan')
const {ObjectID} =  require('mongodb');
const _ = require('lodash');
const bodyParser = require('body-parser');

var {mongoose} = require('./config/db');
var {Task} = require('./model/task');

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

//post tasks
app.post('/api/v1/tasks',(req,res)=>{
  var task = new Task({
    text:req.body.text,
    completed:false
  });

  task.save().then((doc)=>{
    res.send(doc);
  },(err)=>{
    res.status(400).send(err);
  });
});

//get all tasks
app.get('/api/v1/tasks',(req,res)=>{
  Task.find().then((tasks)=>{
    res.send({tasks:tasks});
  },(err)=>{
    res.status(400).send(err);
  });
});

app.delete('/api/v1/tasks/:id',(req,res)=>{
    var id = req.params.id;
    Task.findByIdAndRemove(id).then((task)=>{
      if(!task){
        res.status(404).send();
      }
      res.send({task});
    }).catch((e)=>{
      res.status(400).send();
    });
});

app.patch('/api/v1/tasks/:id',(req,res)=>{
    var id = req.params.id;
    var body = _.pick(req.body,['text']);

    Task.findByIdAndUpdate(id,{$set:body},{new:true}).then((task)=>{
      if(!task){
        return res.status(404).send();
      }
      res.send({task});
    }).catch((e)=>{
      res.status(400).send();
    });
});



app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})
