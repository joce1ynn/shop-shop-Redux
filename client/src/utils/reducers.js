// A reducer is a function that updates state by returning a new state object and never alters the original state object.
import { useReducer } from "react";

import {
  UPDATE_PRODUCTS,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from "./actions";

// a reducer function should always return a new state, rather than mutating the original state.
export const reducer = (state, action) => {
  switch (action.type) {
    // if action type value is the value of `UPDATE_PRODUCTS`,
    // return a new state object with an updated products array
    case UPDATE_PRODUCTS:
      return {
        //...state spread operator creates a shallow copy of the original state, 
        ...state,
        //[...action.products] creates a shallow copy of the action.products array
        // These copies ensure that the original state and the original `products` array are not mutated directly, 
        // but rather new objects are created for the updated state and updated products array.
        products: [...action.products],
      };

    case UPDATE_CATEGORIES:
      return {
        ...state,
        categories: [...action.categories],
      };

    case UPDATE_CURRENT_CATEGORY:
      return {
        ...state,
        // currentCategory is a single value (most likely an ID), and not an array, 
        // so there's no need to create a shallow copy of it using the spread operator 
        currentCategory: action.currentCategory,
      };

    // if it's none of these actions, do not update state at all and keep things the same!
    default:
      return state;
  }
};

// initialize global state object and 
// fucntion for updating that state by running it through custom reducer() function
export function useProductReducer(initialState) {
  // useReducer() Hook is meant specifically for managing a greater level of state,
  return useReducer(reducer, initialState);
}
