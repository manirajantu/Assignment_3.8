const jwt = require("jsonwebtoken"); // Import
const fs = require("fs"); // fs package comes with node.js by defaut, no need npm install.
const privateKey = fs.readFileSync("./jwtRS256.key"); // read the private key

// The data to be used for generating JWT
const mockLoginData = {
    accountId: 1,
    email:"edison@skillsunion.com",
    permissions:{
        role:"ADMIN",
        allow:['CREATE_VEHICLE', 'CREATE DRIVER']
    }
}

// Generate token with the above data. 
const token = jwt.sign(mockLoginData, privateKey, {algorithm:"RS256", expiresIn:"1d"});
console.log(token);