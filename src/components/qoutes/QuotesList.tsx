import React, { FC, memo, useCallback, useMemo } from "react";
import {
  FlatList,
  ListRenderItemInfo,
  RefreshControl,
  StyleSheet,
} from "react-native";
import { useTranslation } from "../../localization/hooks/useTranslation";
import { Quotes } from "../../pages/quotes/quotesTypings";
import { QuoteRow } from "./QuoteRow";
import { QuotesListHeader } from "./QuoutesListHeader";
import { Container } from "../layouts/Container";

interface IProps {
  loading: boolean;
  onGetQuotes: () => void;
  error?: Error;
  data: Quotes;
}

export const QuotesList: FC<IProps> = memo(
  ({ loading, onGetQuotes, data, error }) => {
    const { t } = useTranslation();

    const refreshControl = useMemo(
      () => <RefreshControl refreshing={loading} onRefresh={onGetQuotes} />,
      [loading, onGetQuotes],
    );

    const items = useMemo(() => Object.keys(data), [data]);

    const renderItem = useCallback(
      (info: ListRenderItemInfo<string>) => (
        <QuoteRow key={info.index} name={info.item} item={data[info.item]} />
      ),
      [data],
    );

    const renderScrollComponent = useCallback(
      props => (
        <Container
          title={t("navigation.quotes")}
          header={<QuotesListHeader error={error} />}
          {...props}
          removeClippedSubviews={false}
        />
      ),
      [t, error],
    );

    const keyExtractor = useCallback((key: string) => key, []);

    return (
      <FlatList
        style={styles.wrap}
        renderScrollComponent={renderScrollComponent}
        refreshControl={refreshControl}
        data={items}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        scrollEventThrottle={1}
        scrollToOverflowEnabled={false}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        bounces={true}
      />
    );
  },
);

const styles = StyleSheet.create({
  wrap: {
    paddingLeft: 16,
    paddingRight: 16,
  },
});
