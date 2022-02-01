import { addMessage } from "../ui/Messages/reducer";
import fetchApi from "../features/fetchUsers";

const REQUEST_PENDING = "users/REQUEST_PENDING";
const REQUEST_SUCCESSED = "users/REQUEST_SUCCESSED";
const REQUEST_FAILED = "users/REQUEST_FAILED";
const RESET = "users/RESET";
const ADD_USER = "users/ADD_USER";

const pending = () => ({ type: REQUEST_PENDING });
const successed = (data) => ({ type: REQUEST_SUCCESSED, payload: data });
const failed = (err) => ({ type: REQUEST_FAILED, payload: err });
const addUser = (user) => ({ type: ADD_USER, payload: user });
export const reset = () => ({ type: RESET });

export const fetchUsers = (add) => (dispatch) => {
  const number = add ? add : "10";
  dispatch(addMessage("start fetching Users", "info"));
  dispatch(pending());
  fetchApi(number)
    .then((json) => {
      dispatch(
        addMessage(
          add
            ? `successfully added ${number} User`
            : `successfully fetching ${number} User`,
          "success"
        )
      );
      dispatch(add ? addUser(json.results) : successed(json.results));
    })
    .catch((err) => {
      dispatch(addMessage("fetching failed", "error"));
      dispatch(failed(err));
    });
};
export const addOneUser = (dispatch) => fetchUsers("1");

const INITIAL_STATE = {
  status: "iddle",
  error: null,
  users: []
};
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_PENDING:
      return { ...state, status: "pending" };
    case REQUEST_SUCCESSED:
      return { ...state, status: "complete", users: action.payload };
    case REQUEST_FAILED:
      return { ...state, status: "error", error: action.payload };
    case RESET:
      return INITIAL_STATE;
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, ...action.payload],
        status: "complete"
      };
    default:
      return state;
  }
};

export default reducer;
