import React from "react";
import { Text, View } from "react-native";
import { withTheme } from "react-native-paper";
import { Theme } from "react-native-paper/lib/typescript/types";
import { ThemeStyles } from "../Theme";

const FeedScreen = ({ theme }: { theme: Theme }) => {
  return (
    <View style={ThemeStyles(theme).container}>
      <Text>Feed Screen</Text>
    </View>
  );
};

export default withTheme(FeedScreen);
