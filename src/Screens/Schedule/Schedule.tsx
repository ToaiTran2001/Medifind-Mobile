import { i18n, LocalizationKey } from "@/Localization";
import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { HStack, Spinner, Heading } from "native-base";
import { User } from "@/Services";
import { themeVariables } from "@/Theme";
import { LinearGradient } from "expo-linear-gradient";
import { ScheduleScreens } from "..";

export interface IScheduleProps {
  onNavigate: (string: ScheduleScreens) => void;
}

export const Schedule = (props: IScheduleProps) => {
  const { onNavigate } = props;
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
			<Text>Updating...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeVariables.backgroundColor,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
});
