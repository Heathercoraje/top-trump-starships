import styled from 'styled-components';

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
    height: 75vh;
  }
`;

/* Card */
export const CardContainerWrapper = styled.div`
  width: 100%;
  height: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 800px) {
    width: 85%;
    height: 100%;
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

export const CardWrapper = styled.section`
  width: 75%;
  height: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  border: 2px solid white;
  padding-botomm: 10px;
  border-radius: 5px;

  @media (min-width: 800px) {
    padding-bottom: 1vh;
    border: 5px solid white;
    width: 35%;
    height: 98%;
  }
`;

export const StarshipImg = styled.img`
  display: none;

  @media (min-width: 800px) {
    width: 100%;
    max-height: 45%;
    min-height: 45%;
    display: block;
  }
`;

export const DetailContainerWrapper = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 800px) {
    height: 38%;
  }
`;

export const DetailItem = styled.button`
  font-family: monospace;
  margin-bottom: 1px;
  width: 80%;
  display: block;
  border: white 0.5px solid;
  border-radius: 10px;
  font-size: 0.8rem;
  background-color: black;
  outline: none;
  padding: 4px;
  cursor: pointer;

  @media (min-width: 800px) {
  margin-bottom: 3px;
  font-size: 1rem;

    padding: 4px;
    font-size: 1rem;
    width: 20vw;
    height: 32vh;
  }
`;

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
`;

export const Text = styled.p`
  font-weight: bold;
  margin: ${(props) => (props.small ? '5px' : '10px')};
  font-size: ${(props) => (props.small ? '0.8rem' : '1rem')};
  color: ${(props) => (props.score ? 'gold' : 'inherit')};

  @media (min-width: 800px) {
    margin: ${(props) => (props.small ? '10px' : '8px')};
    font-size: ${(props) => (props.small ? '1.1rem' : '1.5rem')};
  }
`;
export const Button = styled.button`
  font-family: monospace;
  margin: 5px;
  font-size: 1.5rem;
  padding: 1vh 4vw;
  background-color: black;
  border-radius: 25px;
  outline: none;
`;
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
`;
