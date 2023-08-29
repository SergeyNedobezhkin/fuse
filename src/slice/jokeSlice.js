import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const axiosJokes = createAsyncThunk(
  "jokes/axiosJokes",
  async (valueInput) => {
    const response = await axios.get(
      `https://api.chucknorris.io/jokes/search?query=${valueInput}`
    );
    return response.data.result;
  }
);

const jokeSlice = createSlice({
  name: "jokes",
  initialState: {
    jokes: [],
    error: null,
    status: "idle",
  },

  reducers: {
    setJokes: (state, action) => {
      state.jokes = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(axiosJokes.pending, (state) => {
        state.status = "loading";
      })

      .addCase(axiosJokes.fulfilled, (state, action) => {
        state.status = "success";
        state.jokes = action.payload;
      })

      .addCase(axiosJokes.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      });
  },
});
export const { setJokes } = jokeSlice.actions;
export default jokeSlice.reducer;
