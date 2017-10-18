import { 
  INCREASE, 
  DECREASE,
  NORTH,
  SOUTH,
  EAST,
  WEST,
  LEFT,
  RIGHT
} from '../constants/constants';

/**
 * Check posisi dan update state
 * @param {Object} state 
 * @param {Object} object 
 * @return {Object}
 */
export function place(state, object) {
  const { x, y, f } = object;
  const isPlaced = true;
  
  if (!isValidPosition(x) || !isValidPosition(y) || !isValidFace(f)) {
    return state;
  }

  return { ...state, x, y, f, isPlaced };
}

/**
 * Simpan koordinat robot (baru bisa print)
 * @param {Object} state 
 * @return {Object} 
 */
export function save(state) {
  if (!isRobotPlaced(state)) {
    return state;
  }
  
  console.log('Robot coordinates:');
  console.log(`X: ${state.x}, Y: ${state.y}, F: ${state.f}`);

  return state;
}

/**
 * Rotasi
 * @param {Object} state 
 * @param {String} 'LEFT or RIGHT' 
 * @return {Object} 
 */
export function rotate(state, command) {
  if (!isRobotPlaced(state)) {
    return state;
  }

  switch (command) {
    case LEFT:
    case RIGHT:
      const f = getNewDirection(state.f, command);
      return { ...state, f };
    default:
      return state;
  }
}

/**
 * Pindah
 * @param {Object} state 
 * @return {Object} 
 */
export function move(state) {
  if (!isRobotPlaced(state)) {
    return state;
  }

  const { x, y, f } = state;

  switch (f) {
    case WEST:
      return { ...state, x: getNewCoordinate(x, DECREASE) };
    case EAST:
      return { ...state, x: getNewCoordinate(x, INCREASE) };
    case SOUTH:
      return { ...state, y: getNewCoordinate(y, DECREASE) };
    case NORTH:
      return { ...state, y: getNewCoordinate(y, INCREASE) };
    default:
      return state;
  }
}

function isRobotPlaced(state) {
  if (!state.isPlaced) {
    console.log('Robot is not placed yet. Please use PLACE X, Y, F.');
    return false;
  }
  return true;
}

/**
 * Koordinat
 * @param {Number} currentPosition 
 * @param {String} 'INCREASE or DECREASE' 
 * @return {Number} 
 */
function getNewCoordinate(currentPosition, type) {
  let newValue = 0;

  switch (type) {
    case INCREASE:
      newValue = currentPosition + 1;
      if (isValidPosition(newValue)) {
        return newValue;
      }
      break;
    case DECREASE:
      newValue = currentPosition - 1;
      if (isValidPosition(newValue)) {
        return newValue;
      } 
      break;
  }
  return currentPosition;
}

/**
 * Arah
 * @param {String} current
 * @param {String} newDirection 
 * @return {String} 
 */
function getNewDirection(current, newDirection) {
  if (newDirection === LEFT) {
    return rotateLeft(current);
  }
  return rotateRight(current);
}

/**
 * Rotasi ke kiri
 * @param {String} current
 * @return {String}
 */
function rotateLeft(current){
	switch(current){
		case NORTH:
			return WEST;
		case SOUTH:
			return EAST;
		case EAST:
			return NORTH;
		case WEST:
			return SOUTH;
	}
}

/**
 * Rotasi ke kanan
 * @param {String} current
 * @return {String}
 */
function rotateRight(current){
	switch(current){
		case NORTH:
			return EAST;
		case SOUTH:
			return WEST;
		case EAST:
			return SOUTH;
		case WEST:
			return NORTH;
	}
}

/**
 * Check posisi
 * @param {Number} number
 * @return {Boolean}
 */
function isValidPosition(number) {
  if (isValidInteger(number) && number <= 4 && number >= 0) {
    return true;
  };
  
  console.log(`${number} is not a valid position.`);
  return false;
}

/**
 * Check integer
 * @param {Number} number 
 */
function isValidInteger(number) {
	if (typeof number === 'number' && number % 1 === 0) {
		return true;
	}

	console.log(`${number} is not a valid integer.`);
	return false;
}

/**
 * Check arah robot
 * @param {String} face 
 * @return {Boolean}
 */
function isValidFace(face) {
  switch (face) {
    case NORTH:
    case SOUTH:
    case WEST:
    case EAST:
      return true;
    default:
      console.log(`${face} is not a valid direction.`);
      return false;
  }
}