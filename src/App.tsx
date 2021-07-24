import React from "react";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import {
  NavigationContainer,
  Theme as NavigationTheme,
} from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { autumnColors, winterColors } from "./ui/Theme";
import { StatusBar } from "react-native";
import { RootStackParamList, Tabs } from "./ui/tabs/TabList";
import { Theme as PaperTheme } from "react-native-paper/lib/typescript/types";
import { useStore } from "react-hookstore";
import { themeNameStore } from "./store/SettingsStore";

export type RootStackNavigation = StackNavigationProp<RootStackParamList>;

const TabNavigator = createMaterialBottomTabNavigator<RootStackParamList>();
const App = ({ theme }: { theme: PaperTheme & NavigationTheme }) => {
  return (
    <NavigationContainer theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.surface}
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
  const theme: PaperTheme & NavigationTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      ...(themeName === "winter" ? winterColors : autumnColors),
    },
  };
  return (
    <PaperProvider theme={theme}>
      <App theme={theme} />
    </PaperProvider>
  );
};

export default PaperApp;
