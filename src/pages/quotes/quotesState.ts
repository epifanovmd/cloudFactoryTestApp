import { IReduxData } from "../../store/IAppState";
import { Quotes } from "./quotesTypings";
import { LoadState } from "../../common/loadState";

export interface IQuotesState {
  quotes: IReduxData<Quotes>;
}

export const quotesInitialState: IQuotesState = {
  quotes: {
    data: {},
    loadState: LoadState.needLoad,
  },
};
