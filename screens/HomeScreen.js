import React from 'react';
import { View, Text,Image } from 'react-native';

const HomeScreen = () => {
  return (
    <View>
          <Image
          style={{
            width: 200,
            height: 200,
            top:100,
            left:100
          }}
          source={require("C:/Users/tajim/tab-app/sample.jpg")}
        />
        <Text style={{            top:120,
            left:125}}>Name: Masahiro Tajima </Text>
        <Text  style={{            top:130,
            left:160}}>Group: kn-04</Text>

    </View>
  );
};

export default HomeScreen;