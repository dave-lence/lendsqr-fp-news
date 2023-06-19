// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");

module.exports = {
  presets: [
    "module:metro-react-native-babel-preset",
    "module:react-native-dotenv",
  ],
  dependencies: {
    'react-native-google-signin': {
      platforms: {
        android: null
      }
    }
  }
};
