const express =require('express');
const app = express();
const port = 1400;

const cors =require('cors');
const { default: mongoose } = require('mongoose');
app.use (express.json());
app.use (cors());

mongoose.connect('mongodb://localhost:27017/task')
.then(()=>{
    console.log('mongodb connected succesfully');
    
})
.catch((err)=>{
    console.log('mongodb connection error',err);
    

})

app.listen(port,()=>{
    console.log(`server running on port ${port}`);
    
});



