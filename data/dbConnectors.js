import mongoose, { mongo } from 'mongoose';

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

export { Friends };
