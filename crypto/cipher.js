const crypto = require('crypto');
const cipher = crypto.createCipher('aes192','pass');
var encrypted = cipher.update('womp','utf8','hex');
encrypted = encrypted + cipher.final('hex');
console.log(encrypted);

const decipher = crypto.createDecipher('aes192','pass');
var decrypted = decipher.update(encrypted,'hex','utf8');
decrypted = decrypted + decipher.final('utf8');
console.log(decrypted);



//f8a5f4a49da14a8ab2e6b93b72d547ea
