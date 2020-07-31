import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Linking, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import sh from './assets/sh-1.jpg'

export default function App() {
  return (
    <LinearGradient colors={['#2096ff', '#05ffa3']} style={styles.linearGradient}>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://socialHound.co')}
        >
          <Image
            source={sh}
            style={styles.img}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
        <Text style={styles.title}>mobile v1.0</Text>
        <StatusBar style="auto" />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  title: {
    position: 'absolute',
    flexDirection: 'row',
    top: 530,
    left: 150,
    fontSize: 20,
    height: 100,
  },
  img: {
    maxWidth: 300,
    alignSelf: 'center',
    backgroundColor: '#00000000',
  },
});
