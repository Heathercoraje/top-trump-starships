import React, { Component } from 'react';
import {
  ApolloClient,
  InMemoryCache,
  gql,
} from "@apollo/client";

import {  messageMapping, attributeMapping } from '../assets/mapping';
import Card from '../components/Card';
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
      class,
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
    modalAction: 'Continue', // or Restart 
    showModal: false,
    message: ''
  }

  componentDidMount() {
    this.loadData();
  }

  loadData = async () => {
    this.setState({ dataLoading: true });

    const { data } = await client.query({
      query: GET_STARSHIPS
    });
    // refactor
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
    const yourScore = isFilm ? yourCurrentCard[rawAttribute].length : yourCurrentCard[rawAttribute];
    const computerScore = isFilm ? computerCurrentCard[rawAttribute].length : computerCurrentCard[rawAttribute];
    const newCardsToPush = [yourCurrentCard, computerCurrentCard];

    // after one card at a time
    let yourNewCards = this.state.yourCards.slice(1);
    let computerNewCards = this.state.computerCards.slice(1);

    if (yourScore === computerScore) {
      this.setState({
        showModal: true,
        message: messageMapping.even
      });
    } else if (computerScore < yourScore) {
      yourNewCards.push(...newCardsToPush);
      this.setState({
        showModal: true,
        message: messageMapping.round.winner.user
      });
    } else { // if computer wins
      computerNewCards.push(...newCardsToPush);
      this.setState({
        showModal: true,
        message: messageMapping.round.winner.computer
      });
    }

    const winner = this.checkWinner(yourNewCards, computerNewCards);
    if (winner === 'user') {
      return this.setState({
        showModal: true,
        message: messageMapping.winner.user
      });
     } else if (winner === 'computer') {
      return this.setState({
        showModal: true,
        message: messageMapping.winner.computer
      });
    } 
    else { // continues to play
      this.setState({
        yourCards: yourNewCards,
        computerCards: computerNewCards
      });
    }
  }

  checkWinner = (yourCards,computerCards ) => {
    if (!yourCards.length) return 'computer';
    else if (!computerCards.length) return 'you'
    else return undefined;
  }

  render() {
    const { yourCards, computerCards } = this.state;
    
    return (
      <GameContainerWrapper>
        <CardContainerWrapper>
          <Card {...yourCards[0]} onClick={this.handleClick} />
        <ScoreBoard yourCards={yourCards} computerCards={computerCards} />
          <Card {...computerCards[0]} isComputer={false} />
        </CardContainerWrapper>
      </GameContainerWrapper>
    );
  }
}
