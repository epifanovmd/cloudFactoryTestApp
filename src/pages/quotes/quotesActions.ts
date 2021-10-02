import { callApiToolkit } from "../../store/common/apiActionsAsync";
import { RequestType } from "../../common/requestType";
import { Quotes } from "./quotesTypings";

export const fetchQuotes = callApiToolkit<Quotes>({
  url: "public?command=returnTicker",
  method: RequestType.GET,
  actionType: "QUOTES/GET_QUOTES",
});
