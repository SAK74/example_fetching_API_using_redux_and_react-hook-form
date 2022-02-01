import uid from 'uniqid';

const ADD_MESSAGE = "messages/ADD_MESSAGE";
const REMOVE_MESSAGE = "messages/REMOVE_MESSAGE";

export const removeMessage = (id) => ({ type: REMOVE_MESSAGE, payload: id });

export const addMessage = (text, type) => ({
  type: ADD_MESSAGE,
  payload: {
    message: text,
    type: type
  }
});

const INITIAL_STATE = {
  messages: []
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, { ...action.payload, id: uid() }]
      };
    case REMOVE_MESSAGE:
      return {
        ...state,
        messages: state.messages.filter((mess) => mess.id !== action.payload)
      };
    default:
      return state;
  }
}
