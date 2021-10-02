import React, { FC, memo, useEffect, useRef, useState } from "react";
import { Animated, StyleSheet, ViewProps } from "react-native";

interface IProps extends ViewProps {
  text: string | number;
}

export const QuoteAnimationCell: FC<IProps> = memo(
  ({ text, style, ...rest }) => {
    const [value, setValue] = useState(text);
    const opacityFilter = useRef(new Animated.Value(1)).current;

    useEffect(
      () => () => {
        Animated.timing(opacityFilter, {
          duration: 300,
          toValue: 0,
          useNativeDriver: true,
        }).start(() => {
          setValue(text);
          Animated.timing(opacityFilter, {
            duration: 100,
            toValue: 1,
            useNativeDriver: true,
          }).start();
        });
      },
      // eslint-disable-next-line
      [text],
    );

    return (
      <Animated.Text
        style={[
          styles.wrap,
          style,
          {
            opacity: opacityFilter,
            flexGrow: 1,
            flexShrink: 0,
          },
        ]}
        {...rest}
      >
        {Number(value).toFixed(2)}
      </Animated.Text>
    );
  },
);

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: "#1d0000",
    flexGrow: 1,
  },
});
