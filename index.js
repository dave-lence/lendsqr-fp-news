import { registerRootComponent } from 'expo';

import App from './App';

import { AppCenter } from "appcenter";
import Analytics from "appcenter-analytics";
import Crashes from "appcenter-crashes";

AppCenter.setLogLevel(AppCenter.LogLevel.VERBOSE);
AppCenter.start("12c9093c-2b6d-4a30-be7a-1910f46e2185", [Analytics, Crashes]);

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
