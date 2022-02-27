const bcrypt = require('bcrypt');
const sequelize = new Sequelize('sqlite::memory:');
const { Sequelize } = require('@sequelize/core');
const sequelize = new Sequelize('sqlite::memory:') // Example for sqlite
const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') // Example for postgres


const sequelize = new Sequelize({
	dialect: 'sqlite',
	storage: 'path/to/database.sqlite'
  });

const email = new Email;
const pwd = new Pwd;




// region Used for generating token on successful auth
const jwt = require( 'jsonwebtoken' );
const fs = require( 'fs' );
// endregion Used for generating token on successful auth

// Get user and password, (this could come from request data in an API)
const username = process.argv[2];
const password = process.argv[3];

// Get user info from the database (using mock database for now)
function getUserInfo( user ) {
	const mockDBUsers = {
		shramee: '$2b$10$vuWOngd3Bqo75FmtwysD7.Jr5dXcWjE8OPBYD6iFxlmbnt/X7PBOe',
	};
	return mockDBUsers[user];
}

// Validate the inputs
if (!username) {
	console.error('Username is required as argument.');
	return;
} else if (!password) {
	console.error('Password is required as argument after username.');
	return;
}

// Get user info
const userInfo = getUserInfo( username );

if (! userInfo) {
	console.error('User not found.');
	return;
}

const passwordHash = userInfo; // Map password from user info.

// Generate JWT for authenticated user
function generateJWT( data ) {
	const rsaKey = fs.readFileSync( './jwtRS256.key' );

	const jwtGenerated = jwt.sign( data, rsaKey, {algorithm: 'RS256', expiresIn: '1d' } );

	return jwtGenerated
}

// Verify user password
bcrypt.compare(password, passwordHash, (err, result) => {
	if ( err ) {
		console.log(err);
		return;
	}

	if (result) {
		// Generate JWT
		const token = generateJWT( {id: 7,username} );

		// Return JWT
		console.log( token );
	} else {
		console.error('The password is incorrect.');
	}
});