import { createAsyncThunk } from '@reduxjs/toolkit';
import { getGameByKeyword } from 'API/ApiService';

export const fetchGames = createAsyncThunk(
  'apps/fetch',
  async (keyword, { rejectWithValue }) => {
    try {
      const data = await getGameByKeyword(keyword);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
