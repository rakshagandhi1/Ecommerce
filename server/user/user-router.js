var express = require('express');
// Initialize express router
var router = express.Router();
var User = require('./user-model.js');
var {fetchUsers,createUser,loginUser} = require('./user-helper.js');

// get all users

router.get('/', async function(request,response) {
  try {
    var users = await fetchUsers();
    return response.status(200).send({users:users});
  }
  catch(error) {
    return response.status(500).send({error: 'something went wrong'});
  }
});

// create user

router.post('/', async function(request,response) {
  try {
    var userinfo = await createUser(request.body);
    //return response.status(200).send({userinfo:userinfo});
    return response.status(200).send({message:"User created successfully!"});
  }
  catch(error) {
    console.log(error);
    return response.status(500).send({error: 'something went wrong'});
  }
});

router.post('/login', async function(request,response) {
  var email = request.body.email;
  var password = request.body.password;
    if (email.length > 0 && password.length > 0) {
               await User.findOne({email: email, password: password}, function (err, user) {
                    if (err) {
                          //return response.status(200).send({isLoggedIn: false});
                          return response.status(200).send({message: "error"});
                    }
                    if (!user) {
                       // return response.status(200).send({isLoggedIn: false});
                        return response.status(200).send({message: "User not found"});
                    }
                   //return response.status(200).send({isLoggedIn: true});
                    return response.status(200).send({message: "Login successfully!"});
                })
            } else {
                 //return response.status(200).send({isLoggedIn: false});
                  return response.status(200).send({message: "Invalid Credentials"});
            }
 /* var logininfo = await loginUser({ email:email, password:password});
    if() {
      return response.status(200).send('user successfully login');
    }
    else {
      return response.status(200).send('error login');
    }
*/
      
      /*  if(logininfo) {
          return response.status(200).send('this user already exist');
          console.log('USER LOGIN');
        } 
        if (user && user.password === request.body.password){
          console.log('User and password is correct')
          response.json(user);
        } else {
          console.log("Credentials wrong"); 
          response.json({data: "Login invalid"});
        }  */            
 });



/*router.get("/", (req, res, next) => {
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
});*/

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