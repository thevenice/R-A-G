const { GraphQLServer } = require("graphql-yoga");
const { prisma } = require("./generated/prisma-client");
const Query = require("./resolvers/Query");
const Mutation = require("./resolvers/Mutation");
const Subscription = require("./resolvers/Subscription");
const User = require("./resolvers/User");
const Link = require("./resolvers/Link");
const Vote = require("./resolvers/Vote");

const resolvers = {
  Query,
  Mutation,
  Subscription,
  User,
  Link,
  Vote
};

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: request => ({
    ...request,
    prisma
  })
});
server.start(() => console.log(`Server is running on http://localhost:4000`));
/*
Queries:

feed: Retrieves all links from the backend, note that this query also allows for filter, sorting and pagination arguments
Mutations:

post: Allows authenticated users to create a new link
signup: Create an account for a new user
login: Login an existing user
vote: Allows authenticated users to vote for an existing link
Subscriptions:

newLink: Receive realtime updates when a new link is created
newVote: Receive realtime updates when a vote was submitted
*/
