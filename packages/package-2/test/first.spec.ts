import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';

const log = console.log;
const mongod = new MongoMemoryServer();

(async () => {
  const uri = await mongod.getUri();
  const port = await mongod.getPort();
  const dbPath = await mongod.getDbPath();
  const dbName = await mongod.getDbName();

  log(`
    URI: ${uri}
    PORT: ${port}
    DB_PATH: ${dbPath}
    DB_NAME: ${dbName}
  `);

  mongoose.connect(uri, {}, err => {
    log(err)
  });
})()


mongod.getInstanceInfo(); // return Object with instance data
