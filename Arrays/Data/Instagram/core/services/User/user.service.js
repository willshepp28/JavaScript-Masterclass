
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


// Create a function that returns a single user 0(n)
function getUserById(id) {
    let user;

    for(let i = 0; i < Users.length; i++) {
        if(Users[i].id === id) {
            user = Users[i];
            break;
        }
    };

    return user;
};


// Create  a function to add a new user
function addNewUser(username, firstname, lastname, bio, profile_picture) {
    
    if(!username || ! firstname || !lastname ) {
        return "Please enter all credential necessary to create new user";
    };

    Users.push({
        id: ++Users.length,
        firstname: firstname, 
        lastname: lastname,
        bio: bio || null,
        profile_picture: profile_picture || "https://image.shutterstock.com/image-vector/male-default-placeholder-avatar-profile-260nw-387516193.jpg"
    });

}


// Create a function that removes the first user 0(n)
function deleteFirstUser(){
    Users.pop();
}


// Create a function to update the user bio


// Create a function to update username


// Create a function to delete user account
function deleteUserById(id) {
    for(let i = 0; i < Users.length; i++){
        if(Users[i].id === id){
            Users.splice(i, 1);
            break;
        }
    }

};


// Get all users that have active accounts
function getUsersWithActiveAccounts(){
    return Users.filter(users => users.active = true);
};


// Get all users with deactived accounts
function getUnactiveUsers(){
    return Users.filter(users => users.active = false);
}


// Get all users password (laughs in unprofessionally lol)
function getAllPasswordUsingForEach(){
    let passwords = [];
    Users.forEach(user => passwords.push({ username: user.username, password: user.password }))
    return passwords;
};


function getAllPasswordsUsingMap(){
    return Users.map(user => { return { username: user.username, password: user.password}})
}

