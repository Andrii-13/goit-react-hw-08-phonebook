import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contactSlice';
import { filterReducer } from './filterSlice';
import { authReducer } from './auth/auth-slice';



export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
    auth: authReducer,
  },
});



























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