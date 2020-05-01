const express = require('express');
const app = express();

const initialiseRouter = require('./router.js');
const initialiseDatabaseConnection = require('./connect-database.js');

initialiseRouter(app);
initialiseDatabaseConnection();

app.listen(3000, () => console.log('server started on port 3000'));

// Send message for default URL
//app.get('/', (req, res) => res.send('Hello World with Express'));


