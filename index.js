/**
 * @format
 */

import "react-native-gesture-handler";
// react-native-gesture-handler must be imported at the TOP

import { AppRegistry } from "react-native";
import App from "./src/App";
import { name as appName } from "./app.json";

AppRegistry.registerComponent(appName, () => App);
