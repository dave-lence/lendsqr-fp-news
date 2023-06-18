// ANDROID CLIENT id : 694351268588-sisl4amtj6frah4fh5s1qi3k2cqurp15.apps.googleusercontent.com

import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "./store";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "./Redux/userSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Auth from "./Navigation/Auth";
import { myTheme } from "./Navigation/NavigationTheme";
import Tab from "./Navigation/Tab";

const AuthComponent = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch()

  useEffect(() => {
    const checkUserSignIn = async () => {
      try {
        const user = await AsyncStorage.getItem('user');
        if (user) {
          dispatch(setUser(JSON.parse(user))); // Dispatch the setUser action from your userSlice
        }
      } catch (error) {
        console.log('Error retrieving user from AsyncStorage:', error);
      }
    };

    checkUserSignIn();
  }, []);

  return (
    <NavigationContainer theme={myTheme}>
      {user ? <Tab /> : <Auth />}
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <AuthComponent />
    </Provider>
  );
}
