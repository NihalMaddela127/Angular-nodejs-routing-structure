const mongojs = require('mongojs');
require('dotenv').config();
module.exports = {
    dbconnect(){
    const db = mongojs(process.env.dbURI,['tasks']);
    return db;
    }
};
