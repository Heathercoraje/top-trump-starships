import styled from 'styled-components'


/* Game Container */
export const GameContainerWrapper = styled.div`
  width: 100%; 
  height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  @media (min-width: 800px) {
    width: 100%;
    height: 72vh;
  }
`

/* Card */
export const CardContainerWrapper = styled.div`
  width: 100%; 
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 800px) {
    width: 80%;
    height: 90%;
    flex-direction: row;
    justify-content: space-evenly;
  }
`

export const CardWrapper = styled.section`
  width: 85%;
  height: 35%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid white;

  border-radius: 5px;

  @media (min-width: 800px) {
    border: 5px solid white;
    width: 33%;
    height: 100%;
  }
`

export const DetailContainerWrapper = styled.div`
  width: 100%; 
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 800px) {
    height: 50%;
  }
`

export const DetailItem = styled.button` 
  margin-bottom: 3px;
  width: 80%;
  display: block;
  border: white 0.5px solid;
  border-radius: 10px;
  font-size: 1rem;
  background-color: black;
  outline: none;
  padding: 4px;
  cursor: pointer;
  
  @media (min-width: 800px) {
    padding: 5px;
    font-size: 1.1rem;
    width: 20vw; 
    height: 32vh;
  }
`

export const StarshipImg = styled.img`
  display:none;

  @media (min-width: 800px) {
    width: 100%;
    height: 60%;
    display:block;
  }
`

/* Modal */

export const ModalDialog = styled.dialog`
  width: 50%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffc107;
  position: absolute;
  top: 30%;
  border: 5px white soild;
  border-radius: 15px;
  font-color: black;

  @media (min-width: 800px) {
    top: 30%;
    width: 30%;
    height: 32vh;
  }
`

export const Text = styled.p`
  font-size: ${props => props.small ? "15px" : "20px"};
  font-family: 'Alfa Slab One', cursive;
  color: ${props => props.score ? "gold": "inherit"};
  margin: 5px;

  @media (min-width: 800px) {
    font-size: ${props => props.small ? "1.2rem" : "2.5rem"};
  }
`
export const Button = styled.button`
  margin: 5px;
  font-size: 1.5rem;
  padding: 1vh 4vw;
  background-color: black;
  border-radius: 25px;
  font-family: 'Alfa Slab One', cursive;
  outline: none;
`
/* ScoreBoard */

export const ScoreBoardWrapper = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 800px) {
    width: 20vw; 
    height: 32vh;
  }
`