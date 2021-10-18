require('dotenv').config();
const app = require('./server/app');


async function main () {
   await app.listen(app.get('port'));
   console.log(`Server on port ${process.env.PORT}`);
}

main();