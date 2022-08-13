import { combineReducers, createStore } from "redux";
import { numberReducer } from "./reducers/numberReducer";
import { imgCar  as imgCarReducer} from './reducers/changeCarReducer'
import { qlsvReducer } from "./reducers/qlsvReducer";

const rootReducer = combineReducers({
  number:numberReducer,
  imgCar:imgCarReducer,
  qlsvReducer

  
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
