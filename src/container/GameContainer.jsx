import React, { useState, useEffect } from 'react';
import {
  ApolloClient,
  InMemoryCache,
  gql
} from "@apollo/client";

import { attributeMapping } from '../assets/mapping';
import Card from '../components/Card';
import Modal from '../components/Modal';

import ScoreBoard from '../components/ScoreBoard';
import { GameContainerWrapper, CardContainerWrapper } from '../assets/styledComponents';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://api-euwest.graphcms.com/v1/ck5wca13qc9ux01fgaidt12m4/master"
});

const GET_STARSHIPS = gql`
  {
    starships {
      name,
      classe: class,
      passengers,
      costInCredits,
      maxAtmospheringSpeed,
      films {
        title
      }
    }
  }
`

export default function GameContainer() {
  const [dataLoading, setDataLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [winner, setWinner] = useState(undefined);
  const [totalCards, setTotalCards] = useState([]);
  const [yourCards, setYourCards] = useState([]);
  const [computerCards, setComputerCards] = useState([]);
  const [modalType, setModalType] = useState(undefined);
  const [yourScore, setYourScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0)

  useEffect(() => {
    setDataLoading(true);

    async function fetchData() {
      const { data } = await client.query({
        query: GET_STARSHIPS
      });
      const shuffled = data.starships.slice().sort(() => (0.5 - Math.random()));
      const cards = shuffled.length % 2 ? shuffled.slice(1) : shuffled;
      const midPoint = Math.ceil(cards.length / 2)

      setTotalCards(cards);
      setYourCards(cards.slice(0, midPoint));
      setComputerCards(cards.slice(midPoint));
      setDataLoading(false);
    }

    fetchData();
    ;
  }, []);

  function handleClick(category) {
    const yourCardScore = getScoreFromCard(yourCards[0], category);
    const computerCardScore = getScoreFromCard(computerCards[0], category);
    let yourNewCards = yourCards.slice(1);
    let computerNewCards = computerCards.slice(1);

    if (yourCardScore === computerCardScore) {
      setModalType('draw');
      setShowModal(true);
      return;
    }

    if (computerCardScore < yourCardScore) { /* you are winning */
      const temp = yourScore;
      setYourScore(temp + 1);
      setYourCards(yourNewCards);
      setComputerCards(computerNewCards);
      return;
    } else {                               /* computer is winning */
      const temp = computerScore;
      setComputerScore(temp + 1);
      setComputerCards(computerNewCards);
      setYourCards(yourNewCards);
    }

    if (!yourNewCards.length) {          /* no more card */
      const winner = checkWinner(yourScore, computerScore);

      if (winner === 'user') {
        setShowModal(true);
        setModalType('win');
        return;
      } else if (winner === 'computer') {
        setShowModal(true);
        setModalType('lose');
        return;
      }
    }
  }

  function getScoreFromCard(currentCard, category) {
    let cardScore;
    const isFilm = category === 'films';
    const attribute = attributeMapping.filter(item => item.name === category);
    const rawAttribute = attribute[0].raw;

    if (isFilm && currentCard[rawAttribute]) {          /* if film and it is not empty */
      cardScore = currentCard[rawAttribute].length;     /* return films length */
    } else if (!isFilm && currentCard[rawAttribute]) {  /* it is not film and has value */
      cardScore = currentCard[rawAttribute];            /* rethrn that attribute value */
    } else {
      cardScore = 0;
    }
    return cardScore;
  }

  function handleContinue() {
    setShowModal(false);
    setModalType(undefined);
    return;
  }

  function handleRestart() {
    const entries = totalCards;
    const shuffled = entries.slice().sort(() => (0.5 - Math.random()));
    const cards = shuffled.length % 2 ? shuffled.slice(1) : shuffled;
    const midPoint = Math.ceil(cards.length / 2)

    setTotalCards(cards);
    setWinner(undefined);
    setDataLoading(false);
    setShowModal(false)
    setYourCards(cards.slice(0, midPoint));
    setComputerCards(cards.slice(midPoint));
    setYourScore(0);
    setComputerScore(0);
  }

  function checkWinner(yourScore, computerScore) {
    const winner = computerScore < yourScore ? 'user' : 'computer';
    setWinner(winner);
    return winner;
  }

  const buttonAction = modalType === 'draw' ? handleContinue : handleRestart;

  return (
    <>
      {dataLoading ? null : (<GameContainerWrapper>
        {showModal ? <Modal type={modalType} onClick={buttonAction} /> : null}
        {winner ? null : (<CardContainerWrapper>
          <Card {...yourCards[0]} onClick={handleClick} />
          <ScoreBoard yourScore={yourScore} computerScore={computerScore} cardsLeft={computerCards.length} />
          <Card {...computerCards[0]} isComputer={true} />
        </CardContainerWrapper>)}
      </GameContainerWrapper>)}
    </>
  );
}