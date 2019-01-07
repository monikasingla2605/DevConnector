const express = require('express');
const app = express();
app.get('/',(req,res) => res.send('Hello'));
//path for router, if somebody comes to home page this is what express should do
const port = 5001;
app.listen(port, () => console.log(`server is running on port ${port}`));
// you use backtick when you want vairables to format