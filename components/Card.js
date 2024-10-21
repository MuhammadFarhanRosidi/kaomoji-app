import { Text, TouchableOpacity, View } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import * as Clipboard from "expo-clipboard";
import Icon from "react-native-vector-icons/FontAwesome6";
import Toast from "react-native-root-toast";

export default function Card({ kaomoji }) {
  const copyToClipboard = async (kaomoji) => {
    await Clipboard.setStringAsync(kaomoji);
    let toast = Toast.show(kaomoji + " has copied!", {
      duration: Toast.durations.LONG,
    });
    setTimeout(function hideToast() {
      Toast.hide(toast);
    }, 5000);
  };
  return (
    <View style={globalStyles.card}>
      <Text style={globalStyles.kaomojiText}>{kaomoji}</Text>
      <TouchableOpacity onPress={() => copyToClipboard(kaomoji)}>
        <Icon name="copy" size={30} color={"black"} />
      </TouchableOpacity>
    </View>
  );
}
