import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Index from './index';
import Screen1 from './screen1';
import Screen2 from './screen2';

const Stack = createStackNavigator<RootStackParamList>();

export default function RootLayout() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="index" component={Index} />
      <Stack.Screen name="screen1" component={Screen1} />
      <Stack.Screen name="screen2" component={Screen2} />
    </Stack.Navigator>
  );
}

export type RootStackParamList = {
  index: undefined;
  screen2: undefined;
  screen1: { testvar: string };
};