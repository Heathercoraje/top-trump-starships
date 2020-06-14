import React from 'react';

import example from './../assets/starships/example.jpg'
import DetailContainer from './DetailContainer';
import { CardWrapper, StarshipImg, Text } from '../assets/styledComponents'

export default function Card(props) {
  const { isComputer, onClick, name, classe, costInCredits, maxAtmospheringSpeed, passengers, films } = props;
  const details = {
    passengers: isComputer ? "?" : passengers ? passengers : 0,
    cost: isComputer ? "?" : costInCredits ? costInCredits : 0,
    speed: isComputer ? "?" : maxAtmospheringSpeed ? maxAtmospheringSpeed : 0,
    films: isComputer ? "?" : films ? films.length : null
  }

  return (
    <CardWrapper>
      <StarshipImg src={example} />
      <Text small>{name}</Text>
      <Text small>{classe}</Text>
      <DetailContainer details={details} handleClick={onClick} />
    </CardWrapper>
  )
}