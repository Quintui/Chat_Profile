import { applyMiddleware, combineReducers, createStore } from "redux";
import { userReducer } from "./Reducers/userReducer";
import thunkMiddleWare from "redux-thunk";

let rootReducer = combineReducers({
  appReducer: userReducer,
});

type RootReducerType = typeof rootReducer;

export type AppStateType = ReturnType<RootReducerType>;

export type InferActionsType<T> = T extends { [key: string]: infer U }
  ? U
  : never;

const composeEnhancers =
  // @ts-ignore
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? // @ts-ignore
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : // @ts-ignore
      compose;

const enhancer = composeEnhancers(applyMiddleware(thunkMiddleWare));
export let store = createStore(rootReducer, enhancer);
