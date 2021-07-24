import { NavigationProp } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-paper";
import { FeedStackParamList } from "../tabs/FeedTab";

const FeedScreen = ({
  navigation,
}: {
  navigation: NavigationProp<FeedStackParamList>;
}) => {
  return (
    <View>
      <Text>Feed Screen</Text>
      <Button mode="contained" onPress={() => navigation.navigate("Article")}>
        Go to Details
      </Button>
    </View>
  );
};

export default FeedScreen;
