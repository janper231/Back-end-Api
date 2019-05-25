const mysql = require('promise-mysql');
const data = require('../config/env')

async function connection () {
  const conn = await mysql.createConnection(data)
  return conn
}

module.exports = connection;
