import styled from '@emotion/styled';
import Grid from './Grid';
import { useState } from 'react';
import Square from './Square';

export const Background = styled.div`
  margin: auto;
`

const Board = () => {
  const player1 = 'X'
  const player2 = 'O'
  const [cells, setCells] = useState(undefined)
  const [turn, setTurn] = useState(undefined);
  const [winner, setWinner] = useState(undefined);
  const [history, setHistory] = useState([Array(9).fill(undefined)]);

  return (
    <Background>
      <Grid>
        {cells &&
          cells.map((key, i)) => {
            return (
              <Square 
                index={i}
                checked={cells[i]}
                onClick={() => {
                  if (!cells[i] && !winner) {
                    const cellsCopy = [...cells]
                    cellsCopy[i] = turn
                    setHistory([...history, cellsCopy])
                    console.log(history.length)
                  }
                }}
              />
            )
          }}
      </Grid>
    </Background>
  )
}

export default Board;