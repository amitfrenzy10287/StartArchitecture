import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
// import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import '../node_modules/bootstrap/css/bootstrap.css'; 

// import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";  
import blogListingReducer from "./store/reducers/blogListing";
import blogPostingReducer from "./store/reducers/blogPosting";
 
import { watchBlogListing, watchBlogPosting } from "./store/sagas";

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const rootReducer = combineReducers({ 
  blogListing:blogListingReducer,
  blogPosting:blogPostingReducer, 
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(watchBlogListing);
sagaMiddleware.run(watchBlogPosting);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
registerServiceWorker();
