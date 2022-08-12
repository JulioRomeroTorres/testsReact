require('dotenv').config()

const app = require('./app');
const dbmongo = require('./database');

async function main(){
    //app.listen(4000, () => console.log('Raa'));
    await app.listen(app.get('port'));
    console.log('Server running in ', app.get('port'));
}

main();

