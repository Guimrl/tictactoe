import React from "react";
import styled from '@emotion/styled'

const P = styled.p`
  display: grid;
  place-items: center;
  margin: 0;
  font-size: 2em;
`

const over = (cells, winner, history) => {
  return cells !== undefined && history.length === 9 ? <p>Deu velha!</p> : <P>{winner} ganhou a partida!</P>
}

const IndicateTurn = ({turn, winner, cells, history}) => {
  return winner ? over(cells, winner, history) : <P>É a vez do {turn}</P>
}

const End = ({ winner }) => {
  return winner && <p>Fim de jogo!</p>;
};


export { IndicateTurn, End }
