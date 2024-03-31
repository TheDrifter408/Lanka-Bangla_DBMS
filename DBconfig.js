const { Sequelize } = require('sequelize');

const dbInfo = {
databaseName:'lankabangla',
userName: 'root',
password:'asdf1234',
host:'localhost',
dialect:'mysql'
}
const sequelize = new Sequelize(dbInfo.databaseName,dbInfo.userName,dbInfo.password,{
    host:dbInfo.host,
    dialect:dbInfo.dialect
})

async function testConnect(){
    try{
        await sequelize.authenticate();
        console.log('Connection successful.');
    }
    catch( err ){
        console.error("Unable to connect",err);
    }
}

testConnect();


module.exports = sequelize;