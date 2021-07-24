import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { withTheme } from "react-native-paper";
import { Theme } from "react-native-paper/lib/typescript/types";
import SettingsScreen from "../screens/SettingsScreen";
import { themeScreenOptions } from "../Theme";

export type SettingsStackParamList = {
  Settings: undefined;
};

export const SettingsStackNavigator =
  createStackNavigator<SettingsStackParamList>();

const SettingsStack = ({ theme }: { theme: Theme }) => {
  return (
    <SettingsStackNavigator.Navigator screenOptions={themeScreenOptions(theme)}>
      <SettingsStackNavigator.Screen
        name="Settings"
        component={SettingsScreen}
      />
    </SettingsStackNavigator.Navigator>
  );
};

export default withTheme(SettingsStack);
