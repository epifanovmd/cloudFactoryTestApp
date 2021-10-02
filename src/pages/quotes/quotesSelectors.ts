import { IAppState } from "../../store/IAppState";

export const QuotesSelectors = {
  quotes: (state: IAppState) => state.quotesState.quotes,
};
