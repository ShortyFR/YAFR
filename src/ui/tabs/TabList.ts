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
    label: "Feed",
    component: FeedStack,
    icon: "home",
  },
  {
    name: "SettingsTab",
    label: "Settings",
    component: SettingsStack,
    icon: "cog",
  },
];
