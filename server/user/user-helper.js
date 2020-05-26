var User = require('./user-model.js');

var fetchUsers = async function() {
	console.log('fetch all users');
	var users = await User.find({});
	return users;
};

var createUser = async function(user) {
	console.log('create user', user);
	var user = new User(user);
	var userInfo = await user.save();
	return userInfo;
};

var loginUser = async function(){
	console.log('login successfully');
	var customer = await User.findOne({});
	return customer;
}

module.exports = {
	fetchUsers,
	createUser,
	loginUser
}