import React, { Component } from 'react';
import TileComponent from './TileComponent';

export class TileContainer extends Component {
  constructor() {
    super();
    this.state = {
      quotesAndAuthors: [],
      colors: []
    };
  }

  componentDidMount() {
    fetch('/quotes')
      .then(res => {
        return res.json();
      })
      .then(quoteInfo => {
        this.setState({
          quotesAndAuthors: [...this.state.quotesAndAuthors, ...quoteInfo]
        });
        this.state.quotesAndAuthors.forEach(each => {});
      })
      .catch(err => console.error(err));

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
    return this.state.quotesAndAuthors.map((each, i) => {
      return (
        <>
          <TileComponent
            quote={each.quote}
            author={each.author}
            color={this.state.colors[i]}
          />
        </>
      );
    });
  }
}

export default TileContainer;
