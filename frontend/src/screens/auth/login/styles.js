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
    marginTop: 10,
  },
  _sub_heading: {
    color: "#FF1178",
    textAlign: "center",
    fontSize: 34,
    fontFamily: "FontsFree-Net-SF-Pro-Rounded-Black",
    marginBottom: 10,
    marginTop: -25,
  },
  _sub_headingios: {
    color: "#FF1178",
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
  _forgot_btn_text: {
    textAlign: "center",
    color: "#fff",
    marginTop: 10,
    fontFamily: "FontsFree-Net-SF-Pro-Rounded-Light",
    fontSize: 18,
    opacity: 0.7,
  },
  _back: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    alignItems: "center",
    justifyContent: "center",
  },
  _logo: {
    alignSelf: "center",
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width:"100%",
    marginBottom:30
  },
  _login_button_txt: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "FontsFree-Net-SF-Pro-Rounded-Black",
    alignSelf: "center",
    marginTop:10
  },
});
