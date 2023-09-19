import "react-native-reanimated";
import "react-native-gesture-handler"
import { NavigationContainer } from "@react-navigation/native";

import Initial from './src/initial';
import { AuthProvider } from "./src/contexts/auth";
import { Host } from "react-native-portalize"


const App = () => {
  return (
    
    <AuthProvider>
      <NavigationContainer>
          <Host>
            <Initial />
          </Host>
      </NavigationContainer>
    </AuthProvider>
    
  );
}

export default App;