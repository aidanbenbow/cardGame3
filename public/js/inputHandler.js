export const heldKeys = new Set();
export let pressedKeys = [];



export function handleKeyDown(event) {
	event.preventDefault();
	heldKeys.add(event.key);

 pressedKeys.push(event.key)
   
}

export function handleKeyUp(event) {
	event.preventDefault();
	heldKeys.delete(event.key);
}

export function clearKeys(){
	return pressedKeys = []
}

export const isKeyDown = (code) => heldKeys.has(code);

