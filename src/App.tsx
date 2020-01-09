import React from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'apollo-offline-hooks';
import {Todos} from './Todos';

const client = new ApolloClient({
  uri: 'https://fakeql.com/graphql/7e5b259f331cc978c76f25c5701f33e0'
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Todos />
    </ApolloProvider>
  );
};

export default App;
