import { ApolloServer } from 'apollo-server';
import { schema } from '../../schema';

const _initApolloServer = (): ApolloServer => {
  // 1
  const typeDefs = schema;

  // 2
  const resolvers = {
    Query: {
      info: () => `This is the API of a Hackernews Clone`,
    },
  };

  // 3
  return new ApolloServer({
    typeDefs,
    resolvers,
  });
};

export const ApolloUtils = {
  InitializeServer: _initApolloServer,
};
