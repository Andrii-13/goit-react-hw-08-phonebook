import {
  //  combineReducers,
   configureStore } from '@reduxjs/toolkit';
// import { contactReducer } from './contactSlice';
// import { filterReducer } from './filterSlice';
import { authReducer } from './auth/slice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'reduxjs-toolkit-persist';
import storage from 'reduxjs-toolkit-persist/lib/storage';

// обєднуємо логікою всі редюсери зі стору
// const rootReducer = combineReducers({
  // contacts: contactReducer,
  // filter: filterReducer,
  // auth: authReducer,
// });

// Persisting token field from auth slice to localstorage
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const persistedRootReducer = persistReducer(authPersistConfig, authReducer);

export const store = configureStore({
  reducer: persistedRootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

























// const customMidle = (state) => {
//   return next => {
//     return action => {
//       if (typeof action === 'function'){      
//         console.log(state);  
//          action(state.dispatch);
//          return
//       }
//       return next(action);
//     };
//   };
// };