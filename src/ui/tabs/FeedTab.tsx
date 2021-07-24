import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import React from "react";
import FeedScreen from "../screens/FeedScreen";

export type FeedStackParamList = {
  Feed: undefined;
};

export type FeedStackNavigation = StackNavigationProp<FeedStackParamList>;

export const HomeStackNavigator = createStackNavigator<FeedStackParamList>();

const FeedStack = () => {
  return (
    <HomeStackNavigator.Navigator>
      <HomeStackNavigator.Screen name="Feed" component={FeedScreen} />
    </HomeStackNavigator.Navigator>
  );
};

export default FeedStack;
