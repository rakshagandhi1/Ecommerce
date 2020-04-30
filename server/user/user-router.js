const express = require('express');
// Initialize express router
const router = express.Router();
const User = require('./user-model.js');

router.get("/", (req, res, next) => {
  User.find()
    .exec()
    .then(docs => {
      console.log(docs);
      res.status(200).json(docs);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

router.post('/', async(req,res) => {
  console.log(req.body);
	const users = new User ({
 name : req.body.name,
 email : req.body.email,
 number : req.body.number,
 password : req.body.password
});
	users.save()
	.then(result => {
		console.log(result);
		res.status(201).json({
			//message: 'handling post requests to /user',
			createsUser: users
        });
	})
	 .catch(err => {
	 	console.log(err);
	 res.status(500).json({
	 	error: err
	   });
    });
});

// create a new user
/*router.post('/', async (req, res) => {
const newUser = new User();
  User.name =req.body.name,
  User.email = req.body.email,
  User.contact = req.body.contact,
  User.password = req.body.password


 try {
    const newSubscriber = await newUser.save()
    res.status(201).json(newSubscriber)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})
*/
/*router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!'
    });
});*/

// save the user
/*newUser.save(function(err) {
  if (err) throw err;
  console.log('User created successfully.');
});
*/

// Export API routes
module.exports = router;