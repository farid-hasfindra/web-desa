// Jalankan file ini dengan: node scripts/generateAdminHash.js
const bcrypt = require('bcryptjs');

const username = 'admin';
const password = 'admin123';

bcrypt.hash(password, 10, function(err, hash) {
  if (err) throw err;
  console.log('Query SQL untuk dimasukkan ke MySQL:');
  console.log(`INSERT INTO admin (username, password) VALUES ('${username}', '${hash}');`);
});
