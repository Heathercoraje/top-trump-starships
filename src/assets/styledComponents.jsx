import styled from 'styled-components'


export const GameContainerWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const CardContainerWrapper = styled.section`
  width: 90%; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 800px) {
    width: 80%;
    flex-direction: row;
    justify-content: space-evenly;
  }
`
export const CardWrapper = styled.section`
  border: 5px solid white;
  width: 80%;
  height: 500px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;

  @media (min-width: 800px) {
    width: 40%; 
  }
`

export const ModalDialog = styled.dialog`
  border: 1px solid pink;  

`
export const DetailContainerWrapper = styled.div`
  width: 100%; 
  height: 50%;
  display:flex;
  flex-direction:column;
  align-items: center;
`

export const DetailItem = styled.button` 
  width: 80%;
  display: block;
  border: white 0.5px solid;
  border-radius: 10px;
  font-size: 1.2rem;
  background-color: black;
  color: white;
  padding: 8px;
`
export const ScoreBoardWrapper = styled.div`
  text-align: center;
  font-size: 2.5rem;
  font-family: 'Alfa Slab One', cursive;
  width: 20vw; 
  height: 8vh;
`

export const StarshipImg = styled.img`
  width: 100%;
  height: 50%;
`