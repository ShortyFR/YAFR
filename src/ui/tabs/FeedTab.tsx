import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import React from "react";
import { withTheme } from "react-native-paper";
import { Theme } from "react-native-paper/lib/typescript/types";
import FeedScreen from "../screens/FeedScreen";
import { themeScreenOptions } from "../Theme";

export type FeedStackParamList = {
  Feed: undefined;
};

export type FeedStackNavigation = StackNavigationProp<FeedStackParamList>;

export const HomeStackNavigator = createStackNavigator<FeedStackParamList>();

const FeedStack = ({ theme }: { theme: Theme }) => {
  return (
    <HomeStackNavigator.Navigator screenOptions={themeScreenOptions(theme)}>
      <HomeStackNavigator.Screen name="Feed" component={FeedScreen} />
    </HomeStackNavigator.Navigator>
  );
};

export default withTheme(FeedStack);
