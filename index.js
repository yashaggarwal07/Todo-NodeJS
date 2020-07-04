const express=require('express');
const port = 8000;
const path=require('path');

const db=require('./config/mongoose')
const Todo=require('./models/todolistSchema');

const app=express();


app.set('view engine','ejs');
app.set('views',path.join(__dirname, 'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));

var createtodolist=[{}]


app.get('/',function(req,res){

  Todo.find({},function(err,createtodolist){
    if(err)
    {
      console.log('error in fetching data from database');
      return;
    }

  return res.render('home',
                    {
                      title: 'My ToDo list',
                      todo_list:createtodolist
                    });
});
});

app.post('/createlist',function(req,res){
  console.log(req.body);
    
    Todo.create({
      description:req.body.description,
        category:req.body.category,
        date:req.body.date
    },function(err,newTodo){
      if(err){console.log('Error in creating List');
      return;
    }
        console.log('***',newTodo);
        return res.redirect('back');
    });

    
  });


app.get('/delete-description',function(req,res){
   console.log(req.query);
  let id=req.query.id;
  // $("#check").ejCheckBox({ checked:  true });
Todo.findByIdAndDelete(id,function(err){
  if(err)
  {
    console.log('error in deleting from database');
    return;
  }
})
    console.log('Successfully deleted Data');
    return res.redirect('back');
 })

app.listen(port,function(err){
  if(err){
    console.log('failed to connect to server');
    return;
  }
  console.log('Server is connected to port 3000');
})
