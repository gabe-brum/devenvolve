import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'bicharada-vale-do-paranhana',
      storage,
      whitelist: ['user'],
    },
    reducers,
  );

  return persistedReducer;
};
