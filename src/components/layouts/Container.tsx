import React, { FC, forwardRef } from "react";
import {
  SafeAreaView,
  ScrollView,
  ScrollViewProps,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";

interface IProps extends ScrollViewProps {
  title?: string;
  loading?: boolean;
  header?: JSX.Element;
}

export const Container: FC<IProps> = forwardRef(
  ({ title, children, style, loading, header, ...rest }, ref) => (
    <SafeAreaView
      style={{
        flexGrow: 1,
      }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        bounces={false}
        style={[styles.wrap, style]}
        ref={ref as any}
        {...rest}
      >
        {title && (
          <View style={styles.header}>
            <Text style={styles.headerTitle}>{title}</Text>

            {header}
          </View>
        )}
        <View style={styles.content}>{children}</View>
      </ScrollView>
    </SafeAreaView>
  ),
);

const styles = StyleSheet.create({
  header: {
    justifyContent: "center",
  },
  headerTitle: {
    fontWeight: "bold",
    fontSize: 32,
    color: "#fff",
    marginTop: 16,
    textAlign: "center",
  },
  wrap: {
    flexGrow: 1,
  },
  content: {
    marginTop: 16,
    flexGrow: 1,
  },
});
