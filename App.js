import "react-native-reanimated";
import { NavigationContainer } from "@react-navigation/native";

import Initial from './src/initial';
import { AuthProvider } from "./src/contexts/auth";


const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Initial />
      </AuthProvider>
    </NavigationContainer>
  );
}

export default App;