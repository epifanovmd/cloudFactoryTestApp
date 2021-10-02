import { createSlice } from "@reduxjs/toolkit";
import { quotesInitialState } from "./quotesState";
import { LoadState } from "../../common/loadState";
import { fetchQuotes } from "./quotesActions";

export const quotesSlice = createSlice({
  name: "quotes",
  initialState: quotesInitialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchQuotes.pending, state => {
      state.quotes.loadState = LoadState.refreshing;
    });
    builder.addCase(fetchQuotes.fulfilled, (state, action) => {
      state.quotes.error = undefined;
      state.quotes.data = action.payload.data;
      state.quotes.loadState = LoadState.idle;
    });
    builder.addCase(fetchQuotes.rejected, (state, res) => {
      state.quotes.loadState = LoadState.error;
      state.quotes.error = new Error(res.error.message);
      console.log("Error", res);
    });
  },
});
