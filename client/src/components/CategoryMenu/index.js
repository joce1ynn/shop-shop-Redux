import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_CATEGORIES } from "../../utils/queries";
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_CATEGORIES, UPDATE_CURRENT_CATEGORY } from '../../utils/actions';
import { idbPromise } from "../../utils/helpers";

function CategoryMenu() {
  // useStoreContext( to retrieve the current state from the global state object 
  // dispatch() to update state
  const [state, dispatch] = useStoreContext()
  // destructure categories out of state
  const { categories } = state;
  // fetch categories data
  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES)

  useEffect(() => {
    // if categoryData exists or has changed from the response of useQuery, 
    // then run dispatch()
    if (categoryData) {
      // execute dispatch function with our action object indicating 
      // the type of action and the data to set our state for categories to
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories
      });
      // save data to idb
      categoryData.categories.forEach(category => {
        idbPromise("categories", "put", category)
      })
    }
    // if not loading, still get the data from idb
    else if (!loading) {
      idbPromise("categories", "get").then(categories => {
        dispatch({
          type: UPDATE_CATEGORIES,
          categories: categories
        })
      })
    }
  }, [categoryData, loading, dispatch])

  const handleClick = id => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id
    })
  }

  return (
    <div>
      <h2>Choose a Category:</h2>
      {categories.map((item) => (
        <button
          key={item._id}
          onClick={() => { handleClick(item._id); }}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}

export default CategoryMenu;
