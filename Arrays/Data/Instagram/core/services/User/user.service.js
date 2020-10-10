
const Users = require("../../data/User/user.data");



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


console.log(getUserById(2));