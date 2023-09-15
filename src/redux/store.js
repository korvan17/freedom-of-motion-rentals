import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import {
  persistStore,
  //   persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// import storage from "redux-persist/lib/storage";
import { filtersReducer } from './filterSlice';
import { Api } from './carSlice';

// const persistedReducer = persistReducer(
//   {
//     key: "root",
//     storage,
//   },
//   authReducer
// );

// const persistedReducerBoards = persistReducer(
//   {
//     key: "boards",
//     storage,
//   },
//   boardsReducer
// );

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    [Api.reducerPath]: Api.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(Api.middleware),
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
