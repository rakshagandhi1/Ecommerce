const express = require('express');
const app = express();
const mongoose = require('mongoose');
// Import routes
const userRouter = require('./user/user-router.js');

app.use(express.json());
// Use user routes in the App
app.use('/users' , userRouter);

//connect with database(path of the mongodb and database name)
mongoose.connect('mongodb://127.0.0.1/ecommerce', { useNewUrlParser: true});
const db = mongoose.connection
db.on('error', (error) => console.log('error connecting with database', error));
db.once('open', () => console.log('successfully connected with database'));


// Send message for default URL
app.get('/', (req, res) => res.send('Hello World with Express'));

app.listen(3000, () => console.log('server started on port 3000'));
