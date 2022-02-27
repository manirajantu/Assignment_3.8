const bcrypt = require('bcrypt');
// const hashedValue = process.argv[2];
const hashedValue = "$2b$10$nQqh4jiVsV/IFv4SNpm4sO2HUGY5cT88BeuDgbi8JVyrzOrB/Lq/y";
const plainText = process.argv[2];

bcrypt.compare(plainText, hashedValue, function(err, result){
    console.log(`compare ${plainText} against ${hashedValue}`);
    if(err){
        console.error(err);
        return;
    }

    console.log(result);
});