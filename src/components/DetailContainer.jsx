import React from 'react';

import { DetailContainerWrapper, DetailItem } from '../assets/styledComponents'

function getDetails(detailObj, onClick) {
  return Object.keys(detailObj).map((key) => <DetailItem key={key} onClick={()=> onClick(key)}>{key}: {detailObj[key]}</DetailItem>);
}

export default function DetailContainer(props) {
  const detailList = getDetails(props.details, props.handleClick);
  return (
    <DetailContainerWrapper>
      {detailList}
    </DetailContainerWrapper>
  )
}