import * as mongoose from 'mongoose';
import 'mocha';
import { expect } from 'chai';
import { MongoMemoryServer } from 'mongodb-memory-server';
const log = console.log;

let mongoServer: MongoMemoryServer;

before(async () => {
  mongoServer = new MongoMemoryServer({
    // @ts-ignore
    useNewUrlParser: true,
    useMongoClient: false
  });
  log('starting server')

  const mongoUri = await mongoServer.getUri();
  log('mongoUri', mongoUri)
  mongoose.connect(mongoUri);
  log('CONNECTED')
});

after(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

describe('...', () => {
  it('...',  async () => {
    log('test 2')
    const User = mongoose.model('User', new mongoose.Schema({ name: String }));
    log('User model', User.modelName);
    await User.create(new User({
      name: 'bab'
    }));

    const result = await User.findOne({name: 'bob'}).exec();
    expect(result).to.be.null;
  });
});