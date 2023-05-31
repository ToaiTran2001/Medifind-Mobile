import { ScanScreens } from "@/Screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CameraCapturedPicture } from "expo-camera";

const ScanStack = createNativeStackNavigator<ScanStackParamList>();

export type ScanStackParamList = {
  [ScanScreens.SCAN_CAMERA]: undefined;
  [ScanScreens.SCAN_RESULT]: undefined;
  [ScanScreens.MEDICINE_DETAIL]: undefined;
};

export const ScanMedicineStack = () => {
  return (
    <ScanStack.Navigator
      initialRouteName={ScanScreens.SCAN_CAMERA}
      screenOptions={{}}
    >
      {/* <ScanStack.Screen
        name={ScanScreens.SCAN_CAMERA}
        component={ScanContainer}
        options={{}}
      />
      <ScanStack.Screen
        name={ScanScreens.SCAN_RESULT}
        component={ScanResultContainer}
        options={{}}
      />
      <ScanStack.Screen
        name={ScanScreens.MEDICINE_DETAIL}
        component={MedicineDetailContainer}
        options={{}}
      /> */}
    </ScanStack.Navigator>
  );
};
