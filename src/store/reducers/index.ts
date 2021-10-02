import { combineReducers, Reducer } from "redux";

import { IAppState } from "../IAppState";
import { quotesSlice } from "../../pages/quotes/quotesReducers";

export type Reducers<T> = {
  [P in keyof T]: Reducer<T[P]>;
};

export function createMainReduce(): Reducer<IAppState> {
  const _reducers: Reducers<IAppState> = { quotesState: quotesSlice.reducer };

  return combineReducers(_reducers);
}
