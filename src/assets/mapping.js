export const attributeMapping = [
  {
    name: "passengers",
    raw: "passengers"
  },
  {
    name: "classe",
    raw: "class"
  },
  {
    name: "cost",
    raw: "costInCredits"
  },
  {
    name: "speed",
    raw: "maxAtmospheringSpeed"
  },
  {
    name: "films",
    raw: "films"
  },
]

export const modalMapping = [
  {
    type: 'draw',
    text: 'Draw!',
    subText: 'Draw! Choose a differnt attribute to fight',
    buttonAction: 'continue'
  },
  {
    type: 'win',
    text: 'You Win!',
    subText: 'Winner is you! Play again!',
    buttonAction: 'Restart'
  },
  {
    type: 'lose',
    text: 'You Lost!',
    subText: 'You lost, Try again!',
    buttonAction: 'Restart'
  },
  {
    type: 'even',
    text: 'Even!',
    subText: 'Good game but no winner, play again!',
    buttonAction: 'Restart'
  },
  {
    type: 'miss',
    text: 'Click Miss!',
    subText: 'Please click on attributes on your card',
    buttonAction: 'continue'
  }
]

