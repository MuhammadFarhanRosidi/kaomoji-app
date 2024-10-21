import { useEffect, useState } from "react";
import fetchKaomoji from "../services/kaomojiServices";
import { FlatList } from "react-native";
import Card from "./Card";

export default function KaomojiLists() {
  const [kaomoji, setKaomoji] = useState([]);
  function loadKaomji() {
    const data = fetchKaomoji();
    setKaomoji(data.kaomojis);
  }
  useEffect(() => {
    loadKaomji();
  }, []);

  return (
    <FlatList
      data={kaomoji}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => <Card kaomoji={item} />}
    />
  );
}
