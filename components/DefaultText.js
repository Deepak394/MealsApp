import React from "react";
import { Text, StyleSheet } from "react-native";

const DefaultText = (props) => {
  return <Text style={styles.text}>{props.children}</Text>;
};
const styles = StyleSheet.create({
    text: {
        fontFamily:"openSans-regular"
    }
});
export default DefaultText;
