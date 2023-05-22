import 'react-native-gesture-handler'
import AppNavigation from "./src/navigation/appNavigation"
import Toast from 'react-native-toast-message'

export default () => {

  return (
    <>
      <AppNavigation />
      <Toast />
    </>
  )
}
