import { LoadState } from "../common/loadState";
import { IQuotesState } from "../pages/quotes/quotesState";

export interface IReduxData<T> {
  loadState: LoadState;
  count?: number;
  page?: number;
  limit?: number;
  data: T;
  error?: Error;
}

export interface IAppState {
  quotesState: IQuotesState;
}
