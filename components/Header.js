import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome6";
import { globalStyles } from "../styles/globalStyles";

export default function Header() {
  return (
    <View style={globalStyles.header}>
      <View style={globalStyles.containerIcon}>
        <Icon name="bars" size={25} color="#ffffff" />
      </View>
      <View style={globalStyles.containerTextHeader}>
        <Text style={globalStyles.textHeader}>Kaomoji App</Text>
      </View>
    </View>
  );
}
