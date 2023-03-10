// import { ApolloClient } from 'apollo-client';
import { ApolloClient } from '@apollo/client';

import UserUtils from '../utilities/userUtils';
// import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createUploadLink } from 'apollo-upload-client';


// const uploadLink = createUploadLink({ uri: process.env.REACT_APP_GRAPHQL_SERVER_BASE_URL });

const httpLink = createUploadLink({
  uri: `${process.env.REACT_APP_GRAPHQL_SERVER_BASE_URL}/graphql` || '',
});
const authLink = setContext((_, { headers }) => {
  const token = `Bearer ${UserUtils.getAccessToken()}`;
  return {
    headers: {
      authorization: token,
    }
  }
});

const client = new ApolloClient({
  credentials: 'include',
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});


export default client;