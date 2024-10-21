import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#282a36",
  },
  header: {
    backgroundColor: "#232530",
    flexDirection: "row",
    paddingVertical: 4,
    height: 50,
    alignItems: "center",
    paddingLeft: 12,
    elevation: 3,
  },
  containerIcon: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  containerTextHeader: {
    marginLeft: 12,
    flex: 1,
  },
  textHeader: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  kaomojiText: {
    fontSize: 24,
    textAlign: "center",
  },
});
