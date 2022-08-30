// UPDATE_PRODUCTS is used by the ProductList component.
// to store the data retrieved for products by Apollo in this global state,
// we can add offline capabilities later and persist our product data!
export const UPDATE_PRODUCTS = "UPDATE_PRODUCTS";

// we want to take the list of categories retrieved from the server by Apollo
// and store it in this global state.
// easily add offline capabilities at a future point
export const UPDATE_CATEGORIES = "UPDATE_CATEGORIES";

// connecting piece of data for the previous two actions
// select a category from the state created by the UPDATE_CATEGORIES action and
// display products for that category from the UPDATE_PRODUCTS action.
export const UPDATE_CURRENT_CATEGORY = "UPDATE_CURRENT_CATEGORY";
