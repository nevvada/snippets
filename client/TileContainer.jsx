import React, { Component } from 'react';
import TileComponent from './TileComponent';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const QUOTE_INFOS_QUERY = gql`
  query QuoteInfosQuery {
    quoteInfos {
      id
      quote
      author
    }
  }
`;

export class TileContainer extends Component {
  constructor() {
    super();
    this.state = {
      // quotesAndAuthors: [],
      colors: []
    };
  }

  componentDidMount() {
    // RESTFUL approach for fetching quotes
    //   fetch('/quotes')
    //     .then(res => {
    //       return res.json();
    //     })
    //     .then(quoteInfo => {
    //       this.setState({
    //         quotesAndAuthors: [...this.state.quotesAndAuthors, ...quoteInfo]
    //       });
    //       this.state.quotesAndAuthors.forEach(each => {});
    //     })
    //     .catch(err => console.error(err));

    fetch('/colors')
      .then(res => {
        return res.json();
      })
      .then(colorArr => {
        this.setState({ colors: [...this.state.colors, ...colorArr] });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <>
        <Query query={QUOTE_INFOS_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <h4>loading...</h4>;
            if (error) console.log(error);
            console.log('ahhhh', data);
            return (
              <>
                {data.quoteInfos.map((each, i) => (
                  <TileComponent
                    id={each.id}
                    quote={each.quote}
                    author={each.author}
                    color={this.state.colors[i]}
                  />
                ))}
              </>
            );
          }}
        </Query>
      </>
    );
  }
}

export default TileContainer;
