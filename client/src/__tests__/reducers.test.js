// The test folder is where we test the functionality of our reducers to see if we get the intended output.
// A reducer is a function that updates state by returning a new state object
// and never alters the original state object.

import { reducer } from "../utils/reducers";

// import our actions
import {
  UPDATE_PRODUCTS,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from "../utils/actions";

// create a sample of what our global state will look like
const initialState = {
  products: [],
  categories: [{ name: "Food" }],
  currentCategory: "1",
};

test("UPDATE_PRODUCTS", () => {
  let newState = reducer(initialState, {
    // type: type of action we're performing, and should be one of the predefined actions we created earlier.
    type: UPDATE_PRODUCTS,
    // value: it is a name representative of the new data we want to use with the action.
    products: [{}, {}],
  });
  expect(newState.products.length).toBe(2);
  expect(initialState.products.length).toBe(0);
});

test("UPDATE_CATEGORIES", () => {
  let newState = reducer(initialState, {
    type: UPDATE_CATEGORIES,
    categories: [{}, {}],
  });

  expect(newState.categories.length).toBe(2);
  expect(initialState.categories.length).toBe(1);
});

test("UPDATE_CURRENT_CATEGORY", () => {
  let newState = reducer(initialState, {
    type: UPDATE_CURRENT_CATEGORY,
    currentCategory: "2",
  });

  expect(newState.currentCategory).toBe("2");
  expect(initialState.currentCategory).toBe("1");
});
