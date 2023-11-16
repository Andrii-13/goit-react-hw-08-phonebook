import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const createNewUser = createAsyncThunk(
  'user/createUser',
  async (values, thunkAPI) => {
    console.log(values);
    try {
      const responce = await axios.post('/users/signup', values);
      setAuthHeader(responce.data.token);
      console.log(responce);
      return responce;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
