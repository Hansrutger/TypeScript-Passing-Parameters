import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './_layout';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'index'>;

export default function Index() {
  const router = useRouter();
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>When you click below, a variable will be passed onto next screen!</Text>
      <Pressable onPress={() => navigation.navigate('screen1', { testvar: 'Hello World!' })}><Text>Go to testpage</Text></Pressable>
    </View>
  );
}
