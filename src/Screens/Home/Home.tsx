import { i18n, LocalizationKey } from "@/Localization";
import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { HStack, Spinner, Heading } from "native-base";
import { User } from "@/Services";
import { themeVariables } from "@/Theme";
import { LinearGradient } from "expo-linear-gradient";
import { MainScreens } from "..";

export interface IHomeProps {
  onNavigate: (string: MainScreens) => void;
}
export interface IActivityProps {
  thumbnail: number;
  title: string;
  time: number;
}

const Activity = (props: IActivityProps) => {
  const { thumbnail, title, time } = props;

  return (
    <TouchableOpacity
      style={{width: "96%"}}
      onPress={() => {}}
    >
      <LinearGradient
        style={styles.activityComponent}
        start={{x: 0, y: 0.75}}
        end={{x: 1, y: 0.25}}
        colors={themeVariables.whiteGradientColor}
      >
        <View style={styles.thumbnailContainer}>
          <Image style={styles.thumbnail} source={thumbnail}></Image>
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.titleContainer}>
            <Heading fontSize={themeVariables.fontSize_md} color={themeVariables.blackSecondaryTextColor}>{title}</Heading>
            <Text style={{fontSize: themeVariables.fontSize_sm, color: themeVariables.blackSecondaryTextColor, marginRight: 20}}></Text>
          </View>
          <View style={styles.categoryContainer}>
            <Text style={{fontSize: themeVariables.fontSize_sm, color: themeVariables.blackSecondaryTextColor}}>About {time} minutes ago</Text>
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export const Home = (props: IHomeProps) => {
  const { onNavigate } = props;
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
        <View style={styles.logoContainer}>
          <Image 
            style={styles.logo}
            source={require("../../../assets/logo.png")}
          />
        </View>
        <LinearGradient 
          style={styles.reminderContainer}
          colors={themeVariables.whiteGradientColor}
          start={{x: 0, y: 0.75}}
          end={{x: 1, y: 0.25}}
        >
          <View>
            <Text style={{ fontSize: themeVariables.fontSize_lg, color: themeVariables.blackSecondaryTextColor }}>Medication reminder</Text>
          </View>
          <TouchableOpacity>
            <LinearGradient
              style={{
                height: 35,
                width: 100,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 15,
              }}
              start={{x: 0, y: 0.75}}
              end={{x: 1, y: 0.25}}
              colors={themeVariables.primaryGradientColor}
            >
              <Text style={{ fontSize: themeVariables.fontSize_sm, color: themeVariables.whiteSecondaryColor }}>Set up now</Text>
            </LinearGradient>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient 
          style={styles.scanContainer}
          colors={themeVariables.whiteGradientColor}
          start={{x: 0, y: 0.75}}
          end={{x: 1, y: 0.25}}
        >
            <Text style={{ fontSize: themeVariables.fontSize_lg, color: themeVariables.blackSecondaryTextColor }}>Scan a prescription</Text>
          <TouchableOpacity
            onPress={() => onNavigate(MainScreens.SCAN)}
          >
            <LinearGradient
                style={{
                  height: 35,
                  width: 80,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 15,
                }}
                start={{x: 0, y: 0.75}}
                end={{x: 1, y: 0.25}}
                colors={themeVariables.primaryGradientColor}
              >
                <Text style={{ fontSize: themeVariables.fontSize_sm, color: themeVariables.whiteSecondaryColor }}>Scan</Text>
              </LinearGradient>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient 
          style={styles.gptContainer}
          colors={themeVariables.whiteGradientColor}
          start={{x: 0, y: 0.75}}
          end={{x: 1, y: 0.25}}
        >
          <View style={{ flex: 3, justifyContent: "space-evenly" }}>
            <Text style={{ fontSize: themeVariables.fontSize_lg, color: themeVariables.blackSecondaryTextColor }}>MediGPT</Text>
            <Text style={{ fontSize: themeVariables.fontSize_sm, color: themeVariables.blackSecondaryTextColor }}>Chatbot powered by ChatGPT</Text>
            <TouchableOpacity>
            <LinearGradient
                style={{
                  height: 35,
                  width: 100,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 15,
                }}
                start={{x: 0, y: 0.75}}
                end={{x: 1, y: 0.25}}
                colors={themeVariables.primaryGradientColor}
              >
                <Text style={{ fontSize: themeVariables.fontSize_sm, color: themeVariables.whiteSecondaryColor }}>Try now</Text>
              </LinearGradient>
          </TouchableOpacity>
          </View>
          <View style={{ flex: 2, justifyContent: "center", alignItems: "flex-end" }}>
            <View style={styles.gptImageContainer}>
              <Image style={styles.gptImage} source={require("../../../assets/gpt.png")}/>
            </View>
          </View>
        </LinearGradient>
        <View style={styles.activityContainer}>
          <Text style={{ fontSize: themeVariables.fontSize_lg, fontWeight: "bold" , color: themeVariables.blackSecondaryTextColor, marginVertical: 5 }}>Latest Activities</Text>
          <Activity thumbnail={require("../../../assets/activity_1.png")} title={"Drink Paracetamol"} time={3}></Activity>
          <Activity thumbnail={require("../../../assets/activity_2.png")} title={"Chat with Dr.John"} time={10}></Activity>
        </View>
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
  logoContainer: {
    flex: 1.5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  reminderContainer: {
    flex: 2,
    width: "96%",
    borderRadius: 20,
    justifyContent: "space-around",
    marginVertical: 5,
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  scanContainer: {
    flex: 1,
    flexDirection: "row",
    width: "96%",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 20,
    marginVertical: 5,
    paddingHorizontal: 20,
  },
  gptContainer: {
    flex: 2,
    flexDirection: "row",
    width: "96%",
    borderRadius: 20,
    marginVertical: 5,
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  activityContainer: {
    flex: 4,
    marginVertical: 5,
  },
  logo: {
    height: 80,
    width: 240,
    resizeMode: "contain",
  },
  activityComponent: {
    flexDirection: "row",
    width: "100%",
    height: 80,
    borderRadius: 20,
    marginVertical: 5,
  },
  thumbnailContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    flex: 3,
    marginVertical: 5,
  },
  titleContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  categoryContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  thumbnail: {
    resizeMode: "contain",
    width: 50,
    height: 50,
  },
  gptImageContainer: {
    backgroundColor: themeVariables.backgroundColor,
    height: 80,
    width: 100,
    borderRadius: 150,
    justifyContent: "center",
    alignItems: "center",
  },
  gptImage: {
    height: 50,
    width: 50,
    resizeMode: "contain",
  }
});
