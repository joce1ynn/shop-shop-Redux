//createContext will be used to instantiate a new Context object.
//useContext is another React Hook that will allow us to use the state created from the createContext function.
import React, { createContext, useContext } from "react";
import { useProductReducer } from "./reducers";

// run the createContext() function, it creates a new Context object.
const StoreContext = createContext();

// Every Context object comes with two components, a Provider and Consumer
// Provider can make the state data that's passed into it as a prop available to all other components.
// Consumer is our means of grabbing and using the data that the Provider holds for us.
const { Provider } = StoreContext;

//StoreProvider instantiate  initial global state with the useProductReducer() function
const StoreProvider = ({ value = [], ...props }) => {
    //every time we run this useProductReducer() function, we receive two items in return:
    // state is the most up-to-date version of our global state object.
    // dispatch is the method we execute to update our state.
    const [state, dispatch] = useProductReducer({
        products: [],
        cart:[],
        cartOpen: false,
        categories: [],
        currentCategory: "",
    })
    // use this to confirm it works!
    console.log(state);
    return <Provider value={[state, dispatch]}{...props} />;
}

//useStoreContext() hook is used to access the StoreContext in other components. 
const useStoreContext = () => {
    return useContext(StoreContext)
}

export { StoreProvider, useStoreContext }