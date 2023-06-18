import {
  View,
  Text,
  Animated,
  TouchableOpacity,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import React, { useState } from "react";
import * as Yup from "yup";
import { auth } from "../FireBaseConnector";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../Redux/userSlice";
import { signInWithEmailAndPassword } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';


// custom files
import Screen from "../Config/Screen";
import colors from "../Config/colors";
import AppFormik from "../Components/Forms/AppFormik";
import AppFormFields from "../Components/Forms/AppFormFields";
import AppText from "../Components/AppText";
import SubmitButton from "../Components/Forms/SubmitBtn";
import Routes from "../Navigation/Routes";

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});

const LoginScreen = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch()

  return (
    <Screen>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <Animated.Image
            source={require("../assets/animation_500_liuwwcmt.gif")}
            style={{
              height: 200,
              width: 230,
              alignSelf: "center",
              marginTop: 30,
            }}
          />

          <View style={{ marginVertical: 25 }}>
            <AppText
              style={{
                alignSelf: "center",
                letterSpacing: 2,
                fontWeight: "600",
                fontSize: 25,
                color: colors.primary,
              }}
            >
              Welcome back!
            </AppText>
            <AppText
              style={{
                alignSelf: "center",
                color: colors.medium,
                fontWeight: "500",
              }}
            >
              You've been missed
            </AppText>
          </View>

          <TouchableOpacity
            style={{
              width: "100%",
              padding: 12,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 10,
              flexDirection: "row",
              borderColor: colors.primary,
              borderWidth: 0.7,
              marginTop: 20,
            }}
          >
            <Image
              source={require("../assets/google2.png")}
              style={{ width: 20, height: 20, marginRight: 20 }}
            />
            <Text style={{ fontWeight: "bold", color: colors.primary }}>
              Sign Up with Google
            </Text>
          </TouchableOpacity>

          <Text
            style={{
              color: colors.medium,
              marginVertical: 25,
              alignSelf: "center",
            }}
          >
            Or
          </Text>
          <AppFormik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => {
              signInWithEmailAndPassword(auth, values.email, values.password)
                .then((userCredentials) => {
                  const user = userCredentials.user;
                  dispatch(setUser(user))
                  navigation.navigate(Routes.listings)
                  AsyncStorage.setItem('user', JSON.stringify(user))
                })
                .catch((error) => alert(error));
            }}
            validationSchema={validationSchema}
          >
            <AppFormFields
              iconName={"email"}
              placeholder={"Email address"}
              name={"email"}
              autoCorrect={false}
              autoCapitalize="none"
            />
            <AppFormFields
              iconName={"lock"}
              placeholder={"Create password"}
              name={"password"}
              autoCorrect={false}
              eyeIcon={showPassword ? "eye-off" : "eye"}
              password
              secureTextEntry={showPassword ? false : true}
              onPress={() => setShowPassword(!showPassword)}
            />

            <SubmitButton title={"Sign Up"} />

            <Text style={{ marginTop: 30, alignSelf: "center" }}>
              Don't have an account?{" "}
              <Text
                style={{
                  color: colors.primary,
                  fontWeight: "bold",
                  fontSize: 17,
                }}
                onPress={() => navigation.navigate(Routes.signUp)}
              >
                Sign up here
              </Text>
            </Text>
          </AppFormik>
        </ScrollView>
      </KeyboardAvoidingView>
    </Screen>
  );
};

export default LoginScreen;
