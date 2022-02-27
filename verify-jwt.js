const jwt = require("jsonwebtoken"); // Import
const fs = require("fs"); // Import fs that comes with node.js
const privateKey = fs.readFileSync("./jwtRS256.key"); // Import the private key

const token = process.argv[2]; // Input argument

// Decrypt the given token
jwt.verify(token, privateKey, {algorithms:["RS256"]}, function(err, decoded){
    if(err){
        console.error(err); // The token will fail is it expires.
        return;
    }

    console.log(decoded); // You get the decrypted data.
})