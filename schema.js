import { buildSchema } from 'graphql';

const schema = buildSchema(`
  type Friend {
    id: ID
    firstName: String
    lastName: String
    gender: Gender
    email: String
  }

  enum Gender {
    Male
    Female
    Other
  }

  type Query {
    getFriend(id: ID): Friend
  }

  input FriendInput {
    id: ID
    firstName: String
    lastName: String
    gender: Gender
    email: String
  }

  type Mutation {
    createFriend(input: FriendInput): Friend
  }
`)

export default schema;
