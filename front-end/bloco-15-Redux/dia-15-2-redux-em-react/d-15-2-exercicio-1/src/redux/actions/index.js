const NEW_ACTION = 'NEW_ACTION';
const ADD_ELEMENT = 'ADD_ELEMENT';


export const newAction = (state) => ({ type: NEW_ACTION, state });

export const addAssignment = (value) => ({ type: ADD_ELEMENT, value });

export default addAssignment;
