import React from 'react';

import example from './../assets/example.jpg'
import DetailContainer from './DetailContainer';
import { CardWrapper, StarshipImg } from '../assets/styledComponents'

export default function Card(props) {
  const { isComputer, onClick, name, costInCredits, maxAtmospheringSpeed, passengers, films } = props;
  const details = {
    passengers: isComputer ? "?" : passengers ? passengers : 0,
    cost: isComputer ? "?" : costInCredits ? costInCredits : 0, 
    speed: isComputer ? "?" : maxAtmospheringSpeed,
    films: isComputer ? "?" : films ? films.length : null
  }

  return (
    <CardWrapper>
      <StarshipImg src={example} />
      <h1>{name}</h1>
      <DetailContainer details={details} handleClick={onClick}/>
    </CardWrapper>
  )
}