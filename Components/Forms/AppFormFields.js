import { View, Text } from "react-native";
import React from "react";
import { useFormikContext } from "formik";

import NewsForms from "./NewsForms";
import ErrorText from "./ErrorText";

const AppFormFields = ({
  password,
  secureTextEntry,
  onPress,
  placeholder,
  eyeIcon,
  iconName,
  autoCapitalize,
  value,
  name,
  ...inputProps
}) => {
  const { handleChange, setFieldTouched, touched, errors, values } = useFormikContext();

  return (
    <>
      <NewsForms
        {...inputProps}
        password={password}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        onBlur={() => setFieldTouched(name)}
        onPress={onPress}
        eyeIcon={eyeIcon}
        onChangeText={handleChange(name)}
        iconName={iconName}
        value={values[name]}
        autoCapitalize={autoCapitalize}
      />
      <ErrorText error={errors[name]} visible={touched[name]}/>
    </>
  );
};

export default AppFormFields;
