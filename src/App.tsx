import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { AppTheme, themes } from "./ui/Theme";
import { StatusBar } from "react-native";
import { RootStackParamList, Tabs } from "./ui/tabs/TabList";
import { useStore } from "react-hookstore";
import { themeNameStore } from "./store/SettingsStore";
import { initI18N } from "./utils/i18n/i18n";

initI18N();

export type RootStackNavigation = StackNavigationProp<RootStackParamList>;

const TabNavigator = createMaterialBottomTabNavigator<RootStackParamList>();
const App = ({ theme }: { theme: AppTheme }) => {
  return (
    <NavigationContainer theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.background}
      />
      <TabNavigator.Navigator shifting={false}>
        {Tabs.map(tab => (
          <TabNavigator.Screen
            key={tab.name}
            options={{ tabBarIcon: tab.icon, tabBarLabel: tab.label }}
            name={tab.name}
            component={tab.component}
          />
        ))}
      </TabNavigator.Navigator>
    </NavigationContainer>
  );
};

const PaperApp = () => {
  const [themeName] = useStore(themeNameStore);
  const theme: AppTheme =
    themes.filter(item => item.name === themeName)[0] || themes[0];
  return (
    <PaperProvider theme={theme}>
      <App theme={theme} />
    </PaperProvider>
  );
};

export default PaperApp;
