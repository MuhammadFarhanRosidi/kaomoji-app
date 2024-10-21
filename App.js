import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Header from "./components/Header";
import { globalStyles } from "./styles/globalStyles";
import KaomojiLists from "./components/KaomojiLists";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={globalStyles.container}>
        <StatusBar style="dark" backgroundColor="#232530" />
        <Header />
        <KaomojiLists />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
