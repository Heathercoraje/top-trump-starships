import React from 'react';

import { DetailContainerWrapper, DetailItem } from '../assets/styledComponents'

function getDetails(detailObj, onClick, isComputer) {
  return Object.keys(detailObj).map((key) => <DetailItem key={key} onClick={() => onClick(isComputer, key)}>{key}: {detailObj[key]}</DetailItem>);
}

export default function DetailContainer({ details, handleClick, isComputer }) {

  const detailList = getDetails(details, handleClick, isComputer);
  return (
    <DetailContainerWrapper>
      {detailList}
    </DetailContainerWrapper>
  )
}