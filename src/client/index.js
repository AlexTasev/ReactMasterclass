import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { typeDefs } from './local';
import authLink from './auth';

const httpLink = createHttpLink({
  uri: 'https://swapp.st6.io/graphql',
});

const cache = new InMemoryCache();
const client = new ApolloClient({
  cache,
  link: authLink.concat(httpLink),
  typeDefs,
});

cache.writeData({
  data: {
    authenticated: !!localStorage.getItem('token'),
  },
});

export default client;
