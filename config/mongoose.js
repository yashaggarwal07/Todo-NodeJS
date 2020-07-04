const mongoose=require('mongoose'); //requires the library
mongoose.connect('mongodb://localhost/to_do_list_db'); //connects to the database

const db=mongoose.connection; // connection
//if error if find
db.on('error',console.error.bind(console,'Error in connecting to DataBase'));

// running
db.once('open',function(){
  console.log('Seccessfully connected to Database');
})
