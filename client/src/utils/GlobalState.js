//createContext will be used to instantiate a new Context object.
//useContext is another React Hook that will allow us to use the state created from the createContext function.
import React, { createContext, useContext } from "react";
import { useProductReducer } from "./reducers";

// run the createContext() function, it creates a new Context object.
const StoreContext = createContext();

// Every Context object comes with two components, a Provider and Consumer
const { Provider } = StoreContext;

//22.1.5