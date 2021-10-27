import { StyleSheet } from "react-native";
export default StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flex: 1,
  },

  _heading: {
    color: "white",
    fontSize: 34,
    fontFamily: "FontsFree-Net-SF-Pro-Rounded-Black",
  },
  _header_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 40,
    paddingHorizontal: 20,
  },
  _input_main: {
    backgroundColor: "#1C1C1E",
    margin: 20,
    borderRadius: 10,
    padding: 10,
    marginTop: 70,
    height: 300,
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "FontsFree-Net-SF-Pro-Rounded-Black",
    textAlign: "center",
  },
  _logo: {
    alignItems: "center",
    marginBottom: 10,
  },
});
