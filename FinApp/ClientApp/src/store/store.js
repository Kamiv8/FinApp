import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers/reducers';

const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    // eslint-disable-next-line no-undef
    localStorage.setItem('state', serializedState);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
  }
};

const loadToLocalStorage = () => {
  try {
    // eslint-disable-next-line no-undef
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
    return undefined;
  }
};

const persitedState = loadToLocalStorage();

const store = createStore(
  rootReducer,
  persitedState,
  composeWithDevTools(
    applyMiddleware(thunk),
    // other store enhancers if any
  ),
);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
