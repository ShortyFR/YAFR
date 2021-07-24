import {
  createStackNavigator,
  StackHeaderProps,
} from "@react-navigation/stack";
import React from "react";
import Header from "../components/Header";
import SettingsScreen from "../screens/SettingsScreen";

export type SettingsStackParamList = {
  Settings: undefined;
};

export const SettingsStackNavigator =
  createStackNavigator<SettingsStackParamList>();

const SettingsStack = () => {
  return (
    <SettingsStackNavigator.Navigator
      screenOptions={{
        header: (props: StackHeaderProps) => <Header {...props} />,
      }}>
      <SettingsStackNavigator.Screen
        name="Settings"
        component={SettingsScreen}
      />
    </SettingsStackNavigator.Navigator>
  );
};

export default SettingsStack;
