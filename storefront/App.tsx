import "react-native-gesture-handler";
import { useFonts } from "expo-font";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Navigator } from "./src/navigator/Navigator";
import { AuthProvider } from "./src/context";

const AppState = ({ children }: any) => {
  return <AuthProvider>{children}</AuthProvider>;
};

function App(): JSX.Element {
  const [fontsLoaded] = useFonts({
    "OpenSans-Regular": require("./src/assets/fonts/OpenSans-Regular.ttf"),
    "OpenSans-Bold": require("./src/assets/fonts/OpenSans-Bold.ttf"),
    "OpenSans-Light": require("./src/assets/fonts/OpenSans-Light.ttf"),
  });

  return (
    <NavigationContainer>
      <AppState>
        <Navigator />
      </AppState>
    </NavigationContainer>
  );
}

export default App;
