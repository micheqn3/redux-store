// Import redux store and reducers
import { createStore } from 'redux';
import reducers from './reducers';

// Create a redux store with the reducers
export default createStore(reducers);