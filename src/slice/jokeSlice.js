import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchJoke = createAsyncThunk("product/fetchJoke", async (id) => {
  const response = await fetch("https://api.chucknorris.io/jokes/random");

  return await response.json();
});

const jokeSlice = createSlice({
  name: "product",
  initialState: {
    product: {},
    error: null,
    status: "idle",
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchJoke.pending, (state) => {
        state.status = "loading";
      })

      .addCase(fetchJoke.fulfilled, (state, action) => {
        state.status = "success";
        state.product = action.payload;
      })

      .addCase(fetchJoke.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      });
  },
});

export default jokeSlice.reducer;
