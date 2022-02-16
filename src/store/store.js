import { applyMiddleware, combineReducers, createStore } from "redux";
import { adminProductReducer, allProductsReducer } from "../Reducers/productReducer.js";
import { composeWithDevTools } from "redux-devtools-extension";
import { adminAllOrdersReducer } from "../Reducers/orderReducer.js";

import thunk from 'redux-thunk'
import logger from "redux-logger";
import { adminAllUserReducer, userReducer } from "../Reducers/userreducer.js";

const reducers = combineReducers({
  // reducers
  products: allProductsReducer,
  adminProduct: adminProductReducer,
  adminOrders: adminAllOrdersReducer,
  allUsers: adminAllUserReducer,
  user: userReducer,
})
const middlewares = [thunk, logger]



const store = createStore(reducers, composeWithDevTools(applyMiddleware(...middlewares)))
export default store;