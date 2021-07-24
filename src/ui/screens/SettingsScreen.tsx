import React from "react";
import { useStore } from "react-hookstore";
import { View } from "react-native";
import { Drawer } from "react-native-paper";
import { themeNameStore } from "../../store/SettingsStore";
import { themes } from "../Theme";

const SettingsScreen = () => {
  const [themeName, setThemeName] = useStore<string>(themeNameStore);

  return (
    <View>
      <Drawer.Section title="Theme">
        {themes.map(themeItem => {
          return (
            <Drawer.Item
              key={themeItem.name}
              label={themeItem.name}
              icon="palette"
              active={themeName === themeItem.name}
              onPress={() => setThemeName(themeItem.name)}
            />
          );
        })}
      </Drawer.Section>
    </View>
  );
};

export default SettingsScreen;
