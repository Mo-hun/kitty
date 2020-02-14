import React from 'react';
import './App.css';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from "apollo-client";
import Test from './components/Test';
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

const client = new ApolloClient({
  link: createHttpLink({uri: "https://us1.prisma.sh/ahgns515/worktime-db/dev"}),
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <div className="header">
            <span className="header-text">출근부</span>
        </div>
        <div className="main_table">
          <Test/>
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
