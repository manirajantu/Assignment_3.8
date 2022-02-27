////////////////////////////////////////////////
//////////////// db.js file ////////////////////
////////////////////////////////////////////////

// Make believe database
// Structure like this,
// email: { email, passHash, name... }
users = {};

/**
 * Create user
 * @param {string} email 
 * @param {string} passHash 
 * @param {string} name 
 */
function createUser(email, passHash, name) {
	users[email] = {email, passHash, name}
}

/**
 * Fetch user
 * @param {string} email 
 * @returns 
 */
function fetchUser(email) {
	return users[email];
}

module.exports = {createUser, fetchUser};