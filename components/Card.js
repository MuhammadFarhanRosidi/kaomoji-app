import { Text, View } from "react-native";
import { globalStyles } from "../styles/globalStyles";

export default function Card({ kaomoji }) {
  return (
    <View style={globalStyles.card}>
      <Text style={globalStyles.kaomojiText}>{kaomoji}</Text>
    </View>
  );
}
