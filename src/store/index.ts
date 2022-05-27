import { applyMiddleware, combineReducers } from "redux";
import { legacy_createStore as createStore} from 'redux'
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import cocktailsReducer from "./cocktailsReducer/reducer";

const rootReducer = combineReducers({
  cocktails: cocktailsReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export type IStore = ReturnType<typeof rootReducer>;
export default store;
