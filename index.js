require('dotenv').config
 const express = require('express');
const app = express();
const port = 5000;

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/twitter',(req,res)=>{
    res.send("pallavi ji ");
});

app.get('/login',(req,res)=>{
     res.send('<h1> hello pallavi start learning</h1>');
})
app.get('/youtube',(req,res)=>{
     res.send('<h2> hello pallavi start learning</h2>');
})


// Start the server
app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`);
});
