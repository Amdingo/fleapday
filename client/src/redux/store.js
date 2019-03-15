import { createStore } from 'redux';
import combineReducers from './reducers/reducer';

const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const configureStore = () => {
  const store = createStore(combineReducers, reduxDevTools);

  if (process.env.NODE_ENV !== 'production') {
    if (module.hot) {
      module.hot.accept('./reducers/reducer', () => {
        store.replaceReducer(combineReducers);
      });
    }
  }
  return store;
};

export default configureStore;
