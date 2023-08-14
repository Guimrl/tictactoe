import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import  { End, IndicateTurn } from './IndicateTurn';
import Grid from './Grid';
import Square from './Square';
import winCondition from './WinCondition';


export const Background = styled.div`
  margin: auto;
`;

export function Board() {
  const player1 = 'X';
  const player2 = 'O';
  const [cells, setCells] = useState(undefined);
  const [turn, setTurn] = useState(undefined);
  const [winner, setWinner] = useState(undefined);
  const [history, setHistory] = useState([Array(9).fill(undefined)]);

  useEffect(() => {
    if (cells) {
      setWinner(winCondition(cells));
    }
  }, [JSON.stringify(cells)]);

  useEffect(() => {
    setTurn(history.length % 2 === 0 ? player2 : player1);
    setCells(history[history.length - 1]);
  }, [history]);

  return (
    <Background>
      <IndicateTurn turn={turn} winner={winner} cells={cells} history={history} />
      <Grid>
        {cells &&
          cells.map((key, i) => {
            return (
              <Square
              // @ts-ignore
                index={i}
                checked={cells[i]}
                onClick={() => {
                  if (!cells[i] && !winner) {
                    const cellsCopy = [...cells];
                    cellsCopy[i] = turn;
                    setHistory([...history, cellsCopy]);
                    console.log(history.length);
                  }
                }}
              />
            );
          })}
      </Grid>
      {history.map((cells, i) => {
        return (
          <button
            onClick={() => {
              setHistory(history.slice(0, i + 1));
            }}
          >
            Jogada {i + 1}
          </button>
        );
      })}
      <End winner={winner} />
    </Background>
  );
}
