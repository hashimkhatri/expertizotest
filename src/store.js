import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";
import rootReducer from "./reducers";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "presistStore",
  storage: storage,
  whitelist: ["presistStore"], // which reducer want to store
};
const initialState = {};
const pReducer = persistReducer(persistConfig, rootReducer);
const middleware = composeWithDevTools(applyMiddleware(thunk, logger));
const store = createStore(pReducer, initialState, middleware);

export { store };
