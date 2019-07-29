import React, { Component } from 'react';
import TileContainer from './TileContainer';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// import { ApolloClient } from 'apollo-boost';
// import { ApolloProvider } from 'react-apollo';
// export const client = new ApolloClient({
//   uri: 'http://localhost:3000/graphql'
// });

// client
//   .query({
//     query: gql`
//       {
//         rates(currency: "USD") {
//           currency
//         }
//       }
//     `
//   })
//   .then(result => console.log(result));

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql'
});
export class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <TileContainer className="tile" />
      </ApolloProvider>
    );
  }
}

export default App;
