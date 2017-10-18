import { createStore } from 'redux';
import reducers from './reducers';
import { place, save, rotate, move } from './actions/index';

import {
  MOVE,
  SAVE,
  RIGHT,
  LEFT,
  PLACE
} from './constants/constants';

const store = createStore(reducers);

process.stdin.resume();
process.stdin.setEncoding('utf8');

const stdin = process.openStdin();

console.log('Write a command for the Robot.');
console.log('');

stdin.addListener('data', (input) => {
  let action = executeCommand(input);
  
  action.forEach(store.dispatch);
});

export function executeCommand(input) {
  const object = input
    .toUpperCase()
    .trim()
    .replace(/,/g, ' ')
    .replace(/\s\s+/g, ' ')
    .split(' ');

  let [command, x, y, f] = object;
  x = parseInt(x);
  y = parseInt(y);
   
  switch (command) {
    case PLACE:
      return [place({ x, y, f })];
    case SAVE:
      return [save()];
    case LEFT:
    case RIGHT: 
      return [rotate(command)];
    case MOVE:
      return [move()];
    default:
      console.log('Invalid command. Please type PLACE, MOVE, LEFT, RIGHT or SAVE');
      return [];
  }
}
