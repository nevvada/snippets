import React, { Component } from 'react';

export class Tile extends Component {
  constructor() {
    super();
    this.state = {
      quote: '',
      author: ''
    };
  }

  componentDidMount() {
    fetch('/quote')
      .then(res => res.json())
      .then(quoteInfo => {
        console.log('work', quoteInfo.quote, quoteInfo.author);
        this.setState({ quote: quoteInfo.quote, author: quoteInfo.author });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <>
        <p>{this.state.quote}</p>
        <p>{this.state.author}</p>
      </>
    );
  }
}

export default Tile;
