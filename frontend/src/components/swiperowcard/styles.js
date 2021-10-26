import { StyleSheet } from "react-native";
export default StyleSheet.create({
  container: {
    backgroundColor: "#000000",
    flex: 1,
  },
  standalone: {
    marginTop: 10,
  },
  standaloneRowBack: {
    alignItems: "center",
    backgroundColor: "#000000",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },
  _card_main: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 20,
    borderRadius: 5,
    paddingRight: 5,
    paddingVertical: 10,
    height: 103,
  },
  _card1: {
    width: "30%",
  },
  _card2: {
    width: "50%",
  },
  _card3: {
    width: "20%",
  },
  _card_icon_main: {
    elevation: 0.8,
    width: 75,
    height: 75,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  _card_hash_code: {
    color: "#000",
    fontSize: 21,
    fontFamily: "FontsFree-Net-SF-Pro-Rounded-Black",
  },
  _italic_heading: {
    fontSize: 16,
    color: "#000",
    fontFamily: "FontsFree-Net-SF-Pro-Rounded-Light",
    marginTop: -10,
    fontWeight: "bold",
  },
  _italic_headingios: {
    fontSize: 16,
    color: "#000",
    fontFamily: "FontsFree-Net-SF-Pro-Rounded-Light",
    fontWeight: "bold",
  },
  _save_main: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "space-around",
    height: 31,
    paddingHorizontal: 10,
  },
  _counter_btn: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "space-around",
    height: 31,
    marginTop: 20,
    paddingHorizontal: 10,
  },
  _counter_btn_text: {
    color: "#000",
    fontFamily: "FontsFree-Net-SF-Pro-Rounded-Black",
  },
  _tags_main: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  _tag1: {
    fontFamily: "FontsFree-Net-SF-Pro-Rounded-Black",
    fontSize: 13,
    borderRadius: 50,
    paddingHorizontal: 10,
    marginRight: 5,
  },
  _tag2: {
    color: "#0D0D0D",
    fontFamily: "FontsFree-Net-SF-Pro-Rounded-Black",
    fontSize: 13,
    borderRadius: 50,
    paddingHorizontal: 10,
  },
  _save_counter: {
    color: "#000",
    fontFamily: "FontsFree-Net-SF-Pro-Rounded-Black",
  },
  _profile: {
    width: 44,
    height: 44,
    borderRadius: 44 / 2,
  },
});
