import I18n from "react-native-i18n";
import FeedStack from "./FeedTab";
import SettingsStack from "./SettingsTab";

export type RootStackParamList = {
  FeedTab: undefined;
  SettingsTab: undefined;
};

export const Tabs: {
  icon: string;
  name: keyof RootStackParamList;
  label: string;
  component: React.ComponentType<any>;
}[] = [
  {
    name: "FeedTab",
    label: I18n.t("tabs.feed"),
    component: FeedStack,
    icon: "home",
  },
  {
    name: "SettingsTab",
    label: I18n.t("tabs.settings"),
    component: SettingsStack,
    icon: "cog",
  },
];
