import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const createNewUser = createAsyncThunk(
  'user/createNew',
  async (values, thunkAPI) => {
    console.log(values);
    try {
      const responce = await axios.post('/users/signup', values);
      console.log(responce);
      return responce;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
