import AppNavigation from "./src/navigation/appNavigation"
import { extendTheme, NativeBaseProvider } from "native-base"

export default () => {
  const theme = extendTheme({
    colors: {
      primary: {
        50: '#6fc6f3', 100: '#5dbff2', 200: '#4bb8f0', 300: '#39b0ef', 400: '#27a9ed',
        500: '#15a2ec', 600: '#1296db', 700: '#118ac9', 800: '#0f7db7', 900: '#0e71a5',
      }
    }
  })

  return (
    <NativeBaseProvider theme={theme}>
      <AppNavigation />
    </NativeBaseProvider>
  )
}
