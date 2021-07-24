import React from "react";
import { useStore } from "react-hookstore";
import { View } from "react-native";
import { Drawer } from "react-native-paper";
import { withTheme } from "react-native-paper";
import { Theme } from "react-native-paper/lib/typescript/types";
import { themeNameStore } from "../../store/SettingsStore";
import { ThemeStyles } from "../Theme";

const SettingsScreen = ({ theme }: { theme: Theme }) => {
  const [themeName, setThemeName] = useStore<string>(themeNameStore);

  return (
    <View style={ThemeStyles(theme).container}>
      <Drawer.Section title="Theme" theme={theme}>
        {["winter", "autumn"].map(themeItem => {
          return (
            <Drawer.Item
              key={themeItem}
              label={themeItem}
              icon="palette"
              active={themeName === themeItem}
              onPress={() => setThemeName(themeItem)}
              theme={theme}
            />
          );
        })}
      </Drawer.Section>
    </View>
  );
};

export default withTheme(SettingsScreen);
