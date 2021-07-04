const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config({ path:  __dirname + '/../config/config.env'});

// DB Connection
const mongoose = require('mongoose');
const DB = process.env.DATABASE.replace(
    '<PASSWORD>', 
    process.env.DB_PASSWORD
);
mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(console.log("Database connected!"));

const app = require("./app");
const port = process.env.PORT || 5000;

// Start Server
app.listen(port, () => {
  console.log(`Server is now running on port ${port}`);
});

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, 'client/build')));

//   app.get('*', function(req, res) {
//     res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
//   });
// }