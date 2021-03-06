import { StyleSheet } from "react-native";
export default StyleSheet.create({
  container: {
    flex: 1,
  },
  _main: {
    backgroundColor: "#000",
    flex: 1,
    paddingHorizontal: 20,
  },
  _heading: {
    color: "white",
    textAlign: "center",
    fontSize: 34,
    fontFamily: "FontsFree-Net-SF-Pro-Rounded-Black",
  },
  _sub_heading: {
    color: "#FFDC5D",
    textAlign: "center",
    fontSize: 34,
    fontFamily: "FontsFree-Net-SF-Pro-Rounded-Black",
    marginBottom: 10,
    marginTop: -25,
  },
  _sub_headingios: {
    color: "#FFDC5D",
    textAlign: "center",
    fontSize: 34,
    fontFamily: "FontsFree-Net-SF-Pro-Rounded-Black",
    marginBottom: 10,
  },
  _input_main: {
    backgroundColor: "#1C1C1E",
    height: 62,
    borderRadius: 10,
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },
  _input: {
    width: "85%",
    fontSize: 20,
    color: "white",
    fontFamily: "FontsFree-Net-SF-Pro-Rounded-Light",
    marginBottom: -10,
  },
  _back: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    alignItems: "center",
    justifyContent: "center",
  },
  _message_des: {
    fontFamily: "FontsFree-Net-SF-Pro-Rounded-Light",
    color: "#DFDFDF",
    fontSize: 20,
    textAlign: "center",
    marginTop: 10,
  },
  _logo: {
    alignSelf: "center",
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 30,
  },
});
