import mongoose, { mongo } from 'mongoose';
import Sequelize from 'sequelize';
import _ from 'lodash';
import casual from 'casual';

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://192.168.1.221:27017/friends', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const friendSchema = new mongoose.Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  gender: {
    type: String
  },
  age: {
    type: Number
  },
  language: {
    type: String
  },
  email: {
    type: String
  },
  contacts: {
    type: Array
  },
});

const Friends = mongoose.model('friends', friendSchema);

// SQL
const sequelize = new Sequelize('database', null, null, {
  dialect: 'sqlite',
  storage: './alien.sqlite'
});

const Aliens = sequelize.define('aliens', {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  },
  planet: {
    type: Sequelize.STRING
  },
});

export { Friends, Aliens };
