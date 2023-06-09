import React, { useReducer } from "react";

function reducer(state, action) {
  return { ...state, [action.name]: action.value };
}

const UserInputs = (initialForm) => {
  const [state, dispatch] = useReducer(reducer, initialForm);
  const onChange = (e) => dispatch(e.target);
  return [state, dispatch];
};

export default UserInputs;
