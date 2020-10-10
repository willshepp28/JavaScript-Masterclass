
const Users = require("../../data/User/user.data");



/**
 *  Create function to add active property to Users object. I forgot to add this property
 *      - The active property will be used to determine if the user has temporarily deactivated their account or not
 */
function addActivePropertyToUsers() {
    Users.forEach(user => user.active = true);
};


addActivePropertyToUsers();


// Create a function that returns all users
function getAllUsers() {
    return Users;
};


// Create a function that returns a single user
function getUserById(id) {
    let user;

    for(let i = 0; i < Users.length; i++) {
        if(Users[i].id === id) {
            user = Users[i];
        }
    };

    return user;
};


// Create  a function to add a new user



// Create a function to update the user bio


// Create a function to update username


// Create a function to delete user account

