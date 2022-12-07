import { persistStore } from 'redux-persist';
import { legacy_createStore } from 'redux';

import persistedReducer from './persistReducers';
import rootReducer from './modules/rootReducer';

const store = legacy_createStore(persistedReducer(rootReducer));
const persistor = persistStore(store);

export { store, persistor };
