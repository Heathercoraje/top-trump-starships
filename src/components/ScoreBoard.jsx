import React from 'react';

import { ScoreBoardWrapper } from '../assets/styledComponents'

export default function ScoreBoard({ yourCards, computerCards }) {
  return (
    <ScoreBoardWrapper>
      {yourCards.length} : {computerCards.length}
    </ScoreBoardWrapper>
  )
}