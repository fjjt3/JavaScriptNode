const { MongoClient } = require("mongodb");
const debug = require("debug")("app:module-database");

const { Config } = require("../config/index");

var connection = null;
module.exports.Database = (collection) =>
  new Promise(async (resolve, reject) => {
    try {
      if (!connection) {
        const client = new MongoClient(Config.mongoUri);
        let connection = await client.connect();
        debug("new connection with MongoDb Atlas");
      }
      debug("Reusing connection");
      const db = connection.db(Config.mongoDbname);
      resolve(db.collection(collection));
    } catch (error) {
      reject(error);
    }
  });
