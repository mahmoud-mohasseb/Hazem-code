import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
// redux logger
import logger from "redux-logger";

import rootReducer from "./slices/rootReducer";

const middlewares = [];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export default { store, persistor };
