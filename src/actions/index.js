import { PLACE, SAVE, ROTATE, MOVE } from './types';

export function place(position) {
	return {
		type: PLACE,
		position
	};
}

export function save() {
	return {
		type: SAVE
	};
}

export function rotate(direction) {
	return {
		type: ROTATE,
		direction
	};
}

export function move(direction) {
	return {
		type: MOVE
	};
}