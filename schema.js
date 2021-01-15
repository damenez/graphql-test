import { buildSchema } from 'graphql';

const schema = buildSchema(`
  type Friend {
    id: ID
    firstName: String
    lastName: String
    gender: Gender
    email: String
    contacts: [Contact]
  }

  type Contact {
    firstName: String
    lastName: String
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
    contacts: [ContactInput]
  }

  input ContactInput {
    firstName: String
    lastName: String
  }

  type Mutation {
    createFriend(input: FriendInput): Friend
  }
`)

export default schema;
