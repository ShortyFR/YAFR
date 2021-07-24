import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import SettingsScreen from "../screens/SettingsScreen";

export type SettingsStackParamList = {
  Settings: undefined;
};

export const SettingsStackNavigator =
  createStackNavigator<SettingsStackParamList>();

const SettingsStack = () => {
  return (
    <SettingsStackNavigator.Navigator>
      <SettingsStackNavigator.Screen
        name="Settings"
        component={SettingsScreen}
      />
    </SettingsStackNavigator.Navigator>
  );
};

export default SettingsStack;
