import styled from "@emotion/styled";

const SquareWrapper = styled.div`
  border: 1px solid black;
  height: 150px;
  width: 150px;
  margin: 5px;
  background-color: white;
`

const Square = ({checked, onClick}) => {
  return (
    <SquareWrapper
    onClick={() => {onClick()}}
    >
      {checked}
    </SquareWrapper>
  )
}

export default Square