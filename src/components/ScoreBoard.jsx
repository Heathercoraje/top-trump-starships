import React from 'react';

import { ScoreBoardWrapper, Text } from '../assets/styledComponents'

export default function ScoreBoard({ yourScore, computerScore, cardsLeft }) {
  return (
    <ScoreBoardWrapper>
      <Text small>Remaining cards</Text>
      <Text big>{cardsLeft}</Text>
      <Text big>{yourScore} : {computerScore}</Text>
    </ScoreBoardWrapper>
  )
}