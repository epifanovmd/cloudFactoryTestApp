import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuotes } from "./quotesActions";
import { QuotesSelectors } from "./quotesSelectors";
import { useDelayLoading } from "../../common/hooks/useDelayLoading";
import { QuotesList } from "../../components/qoutes/QuotesList";
import { LoadState } from "../../common/loadState";
import { useIsFocused } from "@react-navigation/native";

interface IProps {}

let intervalId: ReturnType<typeof setInterval> | null = null;

const Quotes: FC<IProps> = () => {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  const onGetQuotes = React.useCallback(
    (onSuccess?: () => void) => {
      dispatch(
        fetchQuotes({
          onSuccess,
        }),
      );
    },
    [dispatch],
  );

  useEffect(() => {
    onGetQuotes();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (isFocused) {
      if (!intervalId) {
        intervalId = setInterval(() => {
          onGetQuotes();
        }, 5000);
      }
    } else if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
      }
    };
    // eslint-disable-next-line
  }, [isFocused]);

  const { loadState, error, data } = useSelector(QuotesSelectors.quotes);

  const delayLoading = useDelayLoading(
    2000,
    loadState === LoadState.refreshing,
    true,
  );

  return (
    <QuotesList
      data={data}
      loading={delayLoading}
      onGetQuotes={onGetQuotes}
      error={error}
    />
  );
};

export default Quotes;
