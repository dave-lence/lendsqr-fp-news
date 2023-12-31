import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as WebBrowser from "expo-web-browser";
import { auth } from "../FireBaseConnector";
import { useDispatch } from "react-redux";
import { setUser } from "../Redux/userSlice";
import { createUserWithEmailAndPassword } from "firebase/auth";

// custom files
import Screen from "../Config/Screen";
import colors from "../Config/colors";
import AppFormFields from "../Components/Forms/AppFormFields";
import AppFormik from "../Components/Forms/AppFormik";
import SubmitButton from "../Components/Forms/SubmitBtn";
import Routes from "../Navigation/Routes";

WebBrowser.maybeCompleteAuthSession();

const SignUpScreen = ({ navigation }) => {
  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required().min(6).label("Full Name"),
    email: Yup.string().email().required().label("Email"),
    phone: Yup.number().required().label("Mobile Number"),
    password: Yup.string()
      .required()
      .min(6)
      .oneOf(
        [Yup.ref("confirmPassword"), null],
        "Your password must match with your confirmed password"
      )
      .label("Password"),
    confirmPassword: Yup.string()
      .required()
      .oneOf(
        [Yup.ref("password"), null],
        "Your confirmed password must match with your password"
      )
      .label("Confirm password"),
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showCpassword, setShowCpassword] = useState(false);
  const dispatch = useDispatch();

  return (
    <Screen>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ alignSelf: "center", marginVertical: 30 }}>
            <Text
              style={{
                color: colors.primary,
                fontSize: 24,
                fontWeight: "300",
                alignSelf: "center",
              }}
            >
              Sign Up
            </Text>
            <Text style={{ color: colors.medium, fontSize: 16, marginTop: 10 }}>
              Join the movement and stay updated
            </Text>
          </View>
          <AppFormik
            initialValues={{
              fullName: "",
              email: "",
              phone: "",
              password: "",
              confirmPassword: "",
            }}
            onSubmit={(values) => {
              createUserWithEmailAndPassword(
                auth,
                values.email,
                values.password
              )
                .then((userCredentials) => {
                  const user = userCredentials.user;
                  dispatch(setUser(user));
                  navigation.navigate(Routes.listings);
                  AsyncStorage.setItem("user", JSON.stringify(user));
                })
                .catch((error) => alert(error));
            }}
            validationSchema={validationSchema}
          >
            <>
              <AppFormFields
                iconName={"account"}
                placeholder={"Full Name"}
                name="fullName"
                autoCorrect={false}
              />
              <AppFormFields
                iconName={"email"}
                placeholder={"Email address"}
                name="email"
                autoCorrect={false}
                autoCapitalize="none"
              />
              <AppFormFields
                iconName={"phone"}
                placeholder={"Phone number"}
                name="phone"
                autoCorrect={false}
                keyboardType={"numeric"}
              />
              <AppFormFields
                iconName={"lock"}
                placeholder={"Create password"}
                name="password"
                autoCorrect={false}
                eyeIcon={showPassword ? "eye-off" : "eye"}
                password
                secureTextEntry={showPassword ? false : true}
                onPress={() => setShowPassword(!showPassword)}
              />
              <AppFormFields
                iconName={"lock"}
                placeholder={"Confirm password"}
                name="confirmPassword"
                autoCorrect={false}
                eyeIcon={showCpassword ? "eye-off" : "eye"}
                password
                secureTextEntry={showCpassword ? false : true}
                onPress={() => setShowCpassword(!showCpassword)}
              />

              <SubmitButton title={"Create Account"} />
            </>
          </AppFormik>

          <Text
            style={{
              color: colors.medium,
              marginVertical: 20,
              alignSelf: "center",
            }}
          >
            Or
          </Text>

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
            }}
            onPress={() =>
              onGoogleButtonPress().then(() =>
                console.log("Signed in with Google!")
              )
            }
          >
            <Image
              source={require("../assets/google2.png")}
              style={{ width: 20, height: 20, marginRight: 20 }}
            />
            <Text style={{ fontWeight: "bold", color: colors.primary }}>
              Sign Up with Google
            </Text>
          </TouchableOpacity>

          <Text style={{ marginTop: 30, alignSelf: "center" }}>
            Already have an account?{" "}
            <Text
              style={{
                color: colors.primary,
                fontWeight: "bold",
                fontSize: 17,
              }}
              onPress={() => navigation.navigate(Routes.logIn)}
            >
              Sign In
            </Text>
          </Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </Screen>
  );
};

export default SignUpScreen;
