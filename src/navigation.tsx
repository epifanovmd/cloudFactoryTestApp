import React, { FC, memo, useCallback, useMemo } from "react";
import { Image, Platform, StyleSheet, View } from "react-native";
import { IRoute } from "./routes";
import { BottomTabBarOptions } from "@react-navigation/bottom-tabs/src/types";
import { isIphoneX } from "./common/iphoneXHalper";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTranslation } from "./localization/hooks/useTranslation";

const Tab = createBottomTabNavigator();

interface IProps {
  routes: IRoute[];
}

export const Navigation: FC<IProps> = memo(({ routes }) => {
  const { t } = useTranslation();

  const tabBarOptions: BottomTabBarOptions = useMemo(
    () => ({
      labelStyle: {
        fontSize: isIphoneX() ? 12 : 10,
        fontWeight: "500",
      },
      activeTintColor: "#ffffff",
      inactiveTintColor: "#828283",
      inactiveBackgroundColor: "#1d0000",
      activeBackgroundColor: "#1d0000",
      keyboardHidesTabBar: Platform.OS === "android",
      tabStyle: {
        height: isIphoneX() ? 60 : 49,
        backgroundColor: "#1d0000",
        borderColor: "#1d0000",
        shadowColor: "#1d0000",
        marginBottom: "auto",
        padding: 3,
        alignItems: "center",
        justifyContent: "center",
      },
      style: {
        height: (isIphoneX() ? 60 : 49) + (isIphoneX() ? 25 : 0),
        backgroundColor: "#1d0000",
        backfaceVisibility: "hidden",
        overflow: "hidden",
        borderTopWidth: 0,
      },
    }),
    [],
  );

  const screenOptions = useMemo(
    () => ({
      unmountOnBlur: true,
    }),
    [],
  );
  const sceneContainerStyle = useMemo(
    () => ({
      backgroundColor: "#1d0000",
    }),
    [],
  );

  const getTabOptions = useCallback(
    (title, icon) => ({
      title: t(title as any),
      tabBarIcon: ({ focused }: { focused: boolean }) => (
        <View style={styles.iconWrap}>
          <View style={{ opacity: focused ? 1 : 0.5 }}>{icon}</View>
        </View>
      ),
    }),
    [t],
  );

  return (
    <Tab.Navigator
      tabBarOptions={tabBarOptions}
      sceneContainerStyle={sceneContainerStyle}
    >
      {routes.map(({ title, component, name, icon }, index) => (
        <Tab.Screen
          key={index}
          options={getTabOptions(title, icon)}
          name={name as any}
          component={component as any}
        />
      ))}
    </Tab.Navigator>
  );
});

const styles = StyleSheet.create({
  iconWrap: {
    flex: 1,
  },
});
