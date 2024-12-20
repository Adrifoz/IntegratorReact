import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import cartReducer from "./cartSlice";
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
  };
  
  const persistedReducer = persistReducer(persistConfig, cartReducer);
  
  const store = configureStore({
    reducer: persistedReducer,
  });
  
  export const persistor = persistStore(store);
  export default store;