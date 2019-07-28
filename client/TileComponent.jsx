import React from 'react';
import styled from 'styled-components';

export default function TileComponent(props) {
  const StyledTile = styled.div`
    box-sizing: border-box;
    height: 100vh;
    width: 100vw;
    background-color: #${props.color};
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const TextArea = styled.div`
    display: flex;
    height: 100%;
    width: 50%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  `;
  const Quote = styled.div`
    font-size: 2rem;
    margin: 1rem;
    flex-wrap: wrap;
  `;

  const Author = styled.div`
    font-size: 1rem;
    margin: 1rem;
    flex-wrap: wrap;
  `;

  return (
    <StyledTile>
      <TextArea>
        <Quote>{props.quote}</Quote>
        <Author>{props.author}</Author>
      </TextArea>
    </StyledTile>
  );
}
