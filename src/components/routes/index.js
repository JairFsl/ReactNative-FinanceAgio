import { useNavigation } from "@react-navigation/native";

const Routes = (path) => {
    const navigation = useNavigation();
    navigation.navigate(path)
}

export default Routes;
