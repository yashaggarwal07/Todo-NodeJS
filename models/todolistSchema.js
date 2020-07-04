const mongoose =require('mongoose');
const contactschema=new mongoose.Schema({
  description:{
    type:String,
    required:true
  },
  category:{
    type:String,
    required:true
  },
  date:{
    type:String,
    required:true
  }
})
const Todo = mongoose.model('Todo',contactschema);
module.exports=Todo;
