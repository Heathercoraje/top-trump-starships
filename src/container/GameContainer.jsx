import React, { Component } from 'react';
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

export default class GameContainer extends Component {
  state = {
    dataLoading: true,
    cards: [],
    yourCards: [],
    computerCards: [],
    winner: undefined,
    modalType: undefined,
    showModal: false,
    yourScore: 0,
    computerScore: 0
  }

  componentDidMount() {
    this.loadData();
  }

  loadData = async () => {
    this.setState({ dataLoading: true });

    const { data } = await client.query({
      query: GET_STARSHIPS
    });
    const shuffled = data.starships.slice().sort(() => (0.5 - Math.random()));
    const cards = shuffled.length % 2 ? shuffled.slice(1) : shuffled;
    const midPoint = Math.ceil(cards.length / 2)

    this.setState({
      cards: cards,
      dataLoading: false,
      yourCards: cards.slice(0, midPoint),
      computerCards: cards.slice(midPoint)
    });
  }

  handleClick = (category) => {
    const isFilm = category === 'films';
    const attribute = attributeMapping.filter(item => item.name === category);
    const rawAttribute = attribute[0].raw;
    const yourCurrentCard = this.state.yourCards[0];
    const computerCurrentCard = this.state.computerCards[0];
    const yourCardScore = isFilm ? yourCurrentCard[rawAttribute].length : yourCurrentCard[rawAttribute] ? yourCurrentCard[rawAttribute] : 0;
    const computerCardScore = isFilm ? computerCurrentCard[rawAttribute].length : computerCurrentCard[rawAttribute] ? computerCurrentCard[rawAttribute] : 0;
    const { yourScore, computerScore } = this.state;

    // after one card at a time
    let yourNewCards = this.state.yourCards.slice(1);
    let computerNewCards = this.state.computerCards.slice(1);

    if (yourCardScore === computerCardScore) {
      return this.setState({
        modalType: 'draw',
        showModal: true,
      });
    }

    if (computerCardScore < yourCardScore) {
      const temp = this.state.yourScore;
      this.setState({
        yourScore: temp + 1,
        yourCards: yourNewCards,
        computerCards: computerNewCards
      });
    } else { // if computer wins

      const temp = this.state.computerScore;
      this.setState({
        computerScore: temp + 1,
        yourCards: yourNewCards,
        computerCards: computerNewCards
      });
    }

    if (!yourNewCards.length) {
      const winner = this.checkWinner(yourScore, computerScore);
      if (winner === 'user') {
        return this.setState({
          showModal: true,
          modalType: 'win'
        });
      } else if (winner === 'computer') {
        return this.setState({
          showModal: true,
          modalType: 'lose'
        });
      }
    }
  }

  handleContinue = () => {
    this.setState({
      showModal: false
    })
  }
  
  handleRestart = () => {
    const entries = this.state.cards;
    const shuffled = entries.slice().sort(() => (0.5 - Math.random()));
    const cards = shuffled.length % 2 ? shuffled.slice(1) : shuffled;
    const midPoint = Math.ceil(cards.length / 2)

    this.setState({
      cards: cards,
      winner: undefined,
      dataLoading: false,
      showModal: false,
      yourCards: cards.slice(0, midPoint),
      computerCards: cards.slice(midPoint),
      yourScore: 0,
      computerScore: 0
    });
  }

  checkWinner = (yourScore, computerScore) => {
    const winner = computerScore < yourScore ? 'user' : 'computer';
    this.setState({
      winner
    })
    return winner;
  }

  render() {
    const { winner, showModal, modalType, yourCards, computerCards, yourScore, computerScore } = this.state;
    const buttonAction = modalType === 'draw' ? this.handleContinue : this.handleRestart;
    return (
      <GameContainerWrapper>
        {showModal ? <Modal type={modalType} onClick={buttonAction} /> : null}
        {winner ? null : (<CardContainerWrapper>
          <Card {...yourCards[0]} onClick={this.handleClick} />
          <ScoreBoard yourScore={yourScore} computerScore={computerScore} cardsLeft={computerCards.length} />
          <Card {...computerCards[0]} isComputer={false} />
        </CardContainerWrapper>)}
      </GameContainerWrapper>
    );
  }
}
