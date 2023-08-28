import React, { useState } from 'react'
import { StyleSheet, View, Button } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import PopUp from "./components/PopUp"
import CityArea from './components/CityArea'

export default function App() {
  const [visible, setVisible] = useState(true)

  return (
    <View style={styles.container}>
      <StatusBar />
      <Button title='省市区三级联动' onPress={() => setVisible(true)} />
      <PopUp visible={visible} closeModal={() => setVisible(false)}>
        <CityArea />
      </PopUp>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {

  },
})
