import React, { FC, memo } from "react";
import { StyleSheet, Text, View, ViewProps } from "react-native";
import { useTranslation } from "../../localization/hooks/useTranslation";

interface IProps extends ViewProps {
  error?: Error;
}

export const QuotesListHeader: FC<IProps> = memo(
  ({ children, error, ...rest }) => {
    const { t } = useTranslation();

    return (
      <View style={[styles.wrap, rest]}>
        {error ? (
          <View style={styles.error}>
            <Text style={styles.errorCell}>{t("error.title")}</Text>
            <Text style={styles.errorCell}>{error.message}</Text>
          </View>
        ) : null}
        <View style={styles.row}>
          <Text style={styles.cell}>{t("quotesTable.ticketName")}</Text>
          <Text style={styles.cell}>{t("quotesTable.last")}</Text>
          <Text style={styles.cell}>{t("quotesTable.highestBid")}</Text>
          <Text style={styles.cell}>{t("quotesTable.percentChange")}</Text>
        </View>
      </View>
    );
  },
);

const styles = StyleSheet.create({
  wrap: {
    marginTop: 16,
    backgroundColor: "#1d0000",
    flexGrow: 1,
  },
  error: {},
  row: {
    marginTop: 16,
    flexDirection: "row",
    flexGrow: 1,
  },
  errorCell: { marginRight: 16, color: "red" },
  cell: {
    flexBasis: 0,
    flexGrow: 1,
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});
