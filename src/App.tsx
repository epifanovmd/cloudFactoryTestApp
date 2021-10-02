import React, { Suspense, useCallback, useEffect } from "react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar, Text } from "react-native";
import { AppRoutes } from "./routes";
import { initLocalization } from "./localization/localization";
import RNBootSplash from "react-native-bootsplash";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTranslation } from "./localization/hooks/useTranslation";
import { createSimpleStore } from "./store/store";

RNBootSplash.show();
initLocalization({ initLang: "ru" });
const store = createSimpleStore();

const App = () => {
  const { i18n } = useTranslation();

  const getAsyncLang = useCallback(async () => {
    const lang = await AsyncStorage.getItem("i18nextLng");

    if (lang) {
      await i18n.changeLanguage(lang);
    }
  }, [i18n]);

  useEffect(() => {
    getAsyncLang().then(() => {
      RNBootSplash.hide({ fade: true });
    });
    // eslint-disable-next-line
  }, []);

  return (
    <Provider store={store}>
      <Suspense fallback={<Text>Loading...</Text>}>
        <StatusBar translucent={false} backgroundColor={"#1d0000"} />
        <NavigationContainer>
          <AppRoutes />
        </NavigationContainer>
      </Suspense>
    </Provider>
  );
};

export default App;
