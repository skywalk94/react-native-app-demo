import * as React from 'react'
import { StatusBar } from 'expo-status-bar'
import AppNavigation from "./src/navigation/appNavigation"

export default () => {
  return (
    <>
      <StatusBar style="auto" />
      <AppNavigation />
    </>
  )
}
