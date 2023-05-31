import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeContainer } from "@/Screens/Home";
import { MainScreens } from "@/Screens";
import { ScanMedicineStack } from "./Scan";
import { ScheduleMedicineStack } from "./Schedule";

export type MainBottomBarParamList = {
  [MainScreens.HOME]: undefined;
  [MainScreens.CHAT]: undefined;
  [MainScreens.SCAN]: undefined;
  [MainScreens.SEARCH]: undefined;
  [MainScreens.SCHEDULE]: undefined;
};

const Tab = createBottomTabNavigator<MainBottomBarParamList>();

// @refresh reset
export const MainNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={MainScreens.HOME}
        component={HomeContainer}
        options={{}}
      />
      {/* <Tab.Screen
        name={MainScreens.CHAT}
        component={ChatContainer}
        options={{}}
      />
      <Tab.Screen
        name={MainScreens.SCAN}
        component={ScanMedicineStack}
        options={{}}
      />
      <Tab.Screen
        name={MainScreens.SEARCH}
        component={SearchContainer}
        options={{}}
      />
      <Tab.Screen
        name={MainScreens.SCHEDULE}
        component={ScheduleMedicineStack}
        options={{}}
      /> */}
    </Tab.Navigator>
  );
};
