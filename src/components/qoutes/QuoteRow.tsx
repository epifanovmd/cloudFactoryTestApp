import React, { FC, memo } from "react";
import { StyleSheet, Text, View, ViewProps } from "react-native";
import { Quote } from "../../pages/quotes/quotesTypings";
import { QuoteAnimationCell } from "./QouteAnimationCell";

interface IProps extends ViewProps {
  name: string;
  item: Quote;
}

export const QuoteRow: FC<IProps> = memo(
  ({ children, name, item, ...rest }) => (
    <View style={styles.wrap} {...rest}>
      <Text style={styles.cell}>{name}</Text>
      <QuoteAnimationCell style={styles.cell} text={item.last} />
      <QuoteAnimationCell style={styles.cell} text={item.highestBid} />
      <QuoteAnimationCell style={styles.cell} text={item.percentChange} />
    </View>
  ),
);

const styles = StyleSheet.create({
  wrap: {
    flexDirection: "row",
    backgroundColor: "#1d0000",
    flexGrow: 1,
  },
  cell: {
    flexBasis: 0,
    flexGrow: 1,
    color: "#fff",
  },
});
