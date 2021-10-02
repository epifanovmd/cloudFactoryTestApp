import React, { FC, memo } from "react";
import { II18nPaths } from "./localization/hooks/useTranslation";
import { About } from "./pages/about/about";
import Quotes from "./pages/quotes/Quotes";
import { Navigation } from "./navigation";
import { AboutIcon } from "./components/icons/menu/AboutIcon";
import { QuotesIcon } from "./components/icons/menu/QuotesIcon";
import { StyleSheet, View } from "react-native";

export interface IRoute {
  title: II18nPaths;
  name: string;
  component?: React.ComponentType<any>;
  icon: JSX.Element;
}

export const routes: IRoute[] = [
  {
    title: "navigation.about",
    name: "about",
    component: About,
    icon: <AboutIcon />,
  },
  {
    title: "navigation.quotes",
    name: "quotes",
    component: Quotes,
    icon: <QuotesIcon />,
  },
];

export const authRoutes: IRoute[] = [];

export const AppRoutes: FC = memo(() => (
  <View style={styles.container}>
    <Navigation routes={routes} />
  </View>
));

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
