import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Header from "./components/Header";
import { globalStyles } from "./styles/globalStyles";
import KaomojiLists from "./components/KaomojiLists";
import { RootSiblingParent } from "react-native-root-siblings";

export default function App() {
  return (
    <RootSiblingParent>
      <SafeAreaProvider>
        <SafeAreaView style={globalStyles.container}>
          <StatusBar style="dark" backgroundColor="#232530" />
          <Header />
          <KaomojiLists />
        </SafeAreaView>
      </SafeAreaProvider>
    </RootSiblingParent>
  );
}
