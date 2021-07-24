import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import React from "react";
import Header from "../components/Header";
import FeedScreen from "../screens/FeedScreen";
import { StackHeaderProps } from "@react-navigation/stack";
import ArticleScreen from "../screens/ArticleScreen";

export type FeedStackParamList = {
  Feed: undefined;
  Article: undefined;
};

export type FeedStackNavigation = StackNavigationProp<FeedStackParamList>;

export const HomeStackNavigator = createStackNavigator<FeedStackParamList>();

const FeedStack = () => {
  return (
    <HomeStackNavigator.Navigator
      screenOptions={{
        header: (props: StackHeaderProps) => <Header {...props} />,
      }}>
      <HomeStackNavigator.Screen name="Feed" component={FeedScreen} />
      <HomeStackNavigator.Screen name="Article" component={ArticleScreen} />
    </HomeStackNavigator.Navigator>
  );
};

export default FeedStack;
