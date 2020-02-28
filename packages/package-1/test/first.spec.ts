import { connect } from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
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

  connect(uri, {}, err => {
    log(err)
  });
})()


mongod.getInstanceInfo(); // return Object with instance data
