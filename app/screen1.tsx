import { View, Text } from 'react-native'
import React from 'react'
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from './_layout';

type Screen1RouteProp = RouteProp<RootStackParamList, 'screen1'>;

const Screen1: React.FC = () => {
  const route = useRoute<Screen1RouteProp>();
  const { testvar } = route.params;

  return (
    <View
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    }}>
      <Text>The variable contains: {testvar}</Text>
    </View>
  )
}

export default Screen1