import { ApolloServer, gql } from "apollo-server";

let tweets = [
  {
    id: "1",
    text: "1 hello",
    userId: "2",
  },
  {
    id: "2",
    text: "2 hello",
    userId: "2",
  },
  {
    id: "3",
    text: "3 hello",
    userId: "1",
  },
];

let users = [
  {
    id: "1",
    firstname: "lee",
    lastname: "hyunho",
  },
  {
    id: "2",
    firstname: "2lee",
    lastname: "2hyunho",
  },
];

const typeDefs = gql`
  type User {
    id: ID!
    firstname: String!
    lastname: String!
    fullname: String!
  }
  type Tweet {
    id: ID!
    text: String!
    author: User!
  }
  type Query {
    allUsers: [User!]!
    allTweets: [Tweet!]!
    tweet(id: ID!): Tweet
  }
  type Mutation {
    """
    Tweet 생성
    """
    postTweet(text: String!, userId: ID!): Tweet!
    """
    Tweet 삭제
    """
    deleteTweet(id: ID!): Boolean!
  }
`;

const resolvers = {
  Query: {
    allUsers() {
      return users;
    },
    allTweets() {
      return tweets;
    },
    tweet(root, { id }) {
      return tweets.find((tweet) => tweet.id === id);
    },
  },
  Mutation: {
    postTweet(root, { text, userId }) {
      const newTweet = {
        id: tweets.length + 1,
        text,
      };
      tweets.push(newTweet);
      return newTweet;
    },
    deleteTweet(_, { id }) {
      const tweet = tweets.find((tweet) => tweet.id === id);
      if (!tweet) return false;
      tweets = tweets.filter((tweet) => tweet.id !== id);
      return true;
    },
  },
  User: {
    fullname({ firstname, lastname }) {
      return `${firstname}-${lastname}`;
    },
  },
  Tweet: {
    author({ userId }) {
      return users.find((user) => user.id === userId);
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Running on ${url}`);
});
