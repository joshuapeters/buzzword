import { ApolloUtils } from './core/utils/ApolloUtils';
import { ApolloServer, gql } from 'apollo-server';
import { schema } from './schema';

ApolloUtils.InitializeServer()
  .listen()
  .then(({ url }) => console.log(`Server is running on ${url}`));
