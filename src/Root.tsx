import React from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks';
import {App} from './App';

const client = new ApolloClient({
  uri: 'https://fakeql.com/graphql/854c987cc5f0a6a182882935756a1e27'
});

const Root: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
};

export default Root;
