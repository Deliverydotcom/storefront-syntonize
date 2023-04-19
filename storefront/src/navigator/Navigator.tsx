import { createStackNavigator } from '@react-navigation/stack';
import React, { useContext } from 'react';
import { BottomNavigation } from '../components';
import { AuthContext } from '../context';
import {
  ConfigScreen,
  HelpScreen,
  HomeScreen,
  ProfileScreen,
  PromoteScreen,
} from '../screens';
import { ForgotCredentials } from '../screens/ForgotCredentials';
import { LoginScreen } from '../screens/LoginScreen';
import { colors } from '../theme';
import { SideDrawermenu } from './SideDrawerMenu';

const Stack = createStackNavigator();

export const Navigator = () => {
  const { status } = useContext(AuthContext);
  console.log(status);
  // if (Platform.OS !== "web" && status === "checking") return <LoadingScreen />;

  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: colors.backgapp },
        }}
      >
        {status !== 'authenticated' ? (
          <>
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen
              name="forgotcredentials"
              component={ForgotCredentials}
            />
          </>
        ) : (
          <>
            <Stack.Screen name="SideDrawermenu" component={SideDrawermenu} />
            <Stack.Screen
              name="BottomNavigation"
              component={BottomNavigation}
            />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen
              options={{
                animationEnabled: true,
                animationTypeForReplace: 'push',
              }}
              name="ProfileScreen"
              component={ProfileScreen}
            />
            <Stack.Screen name="HelpScreen" component={HelpScreen} />
            <Stack.Screen name="PromoteScreen" component={PromoteScreen} />
            <Stack.Screen name="ConfigScreen" component={ConfigScreen} />
          </>
        )}
      </Stack.Navigator>
    </>
  );
};
