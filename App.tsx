import { StatusBar } from 'expo-status-bar'

import React from 'react'

import { StyleSheet, Text, View } from 'react-native'

import AppLoading from 'expo-app-loading'

import {
  useFonts,
  Lato_300Light,
  Lato_400Regular,
  Lato_700Bold
} from '@expo-google-fonts/lato'
import { COLORS } from './src/theme'

export default function App() {
  const [fontsLoading] = useFonts({
    Lato_300Light,
    Lato_400Regular,
    Lato_700Bold
  })

  if (!fontsLoading) {
    return <AppLoading />
  }

  return (
    <View style={styles.container}>
      <Text>Teste</Text>
      <StatusBar style="light" backgroundColor="transparent" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BLACK_SECONDARY,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
