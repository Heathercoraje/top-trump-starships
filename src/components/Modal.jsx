import React from 'react';

import { ModalDialog, Text, Button } from '../assets/styledComponents';
import { modalMapping } from '../assets/mapping';

export default function Modal({ type, onClick }) {
  const modal = modalMapping.filter((item) => item.type === type);

  return (
    <ModalDialog open>
      <Text big>{modal[0].text}</Text>
      <Text small>{modal[0].subText}</Text>
      <Button onClick={() => onClick(type)}>{modal[0].buttonAction}</Button>
    </ModalDialog>
  );
}
