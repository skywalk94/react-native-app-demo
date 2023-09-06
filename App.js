import React, { useState } from 'react'
import { Button, Platform } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import PopUp from "./components/PopUp"
import CityArea from './components/CityArea'

export default function App() {
  const [visible, setVisible] = useState(false)
  const [visible1, setVisible1] = useState(false)
  const value = "330102"
  const AreaView = (props) => {
    const { children } = props
    return Platform.OS == "web" ? <SafeAreaProvider>{children}</SafeAreaProvider> : <SafeAreaView>{children}</SafeAreaView>
  }

  return (
    <AreaView>
      <Button title='省市区三级联动' onPress={() => setVisible(true)} />
      <Button title={`通过code：${value}反选`} onPress={() => setVisible1(true)} />
      <PopUp visible={visible} onClose={() => setVisible(false)}>
        <CityArea />
      </PopUp>
      <PopUp visible={visible1} onClose={() => setVisible1(false)}>
        <CityArea value={value} />
      </PopUp>
    </AreaView>
  )
}
