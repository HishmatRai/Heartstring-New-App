import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        backgroundColor: "#000",
        flex: 1,
      },
    
      _bottom_button: {
        position: "absolute",
        bottom: 0,
        backgroundColor: "#000",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        height: 100,
      },
      ProfileImg: {
        alignSelf: "center",
        width: 75,
        height: 75,
        borderRadius: 75 / 2,
        marginTop: -30,
      },
      _user_name: {
        color: "white",
        textAlign: "center",
        fontFamily: "FontsFree-Net-SF-Pro-Rounded-Black",
        fontSize: 20,
      },
      _email: {
        color: "#fff",
        textAlign: "center",
        fontSize: 16,
        fontFamily: "FontsFree-Net-SF-Pro-Rounded-Light",
        marginTop: -10,
      },
      _emailios: {
        color: "#fff",
        textAlign: "center",
        fontSize: 16,
        fontFamily: "FontsFree-Net-SF-Pro-Rounded-Light",
      },
      _back: {
        marginTop: 50,
        marginLeft: 20,
      },
      _logout: {
        fontSize: 22,
        color: "white",
        fontFamily: "FontsFree-Net-SF-Pro-Rounded-Black",
      },
      _delete_account: {
        fontSize: 15,
        color: "white",
        fontFamily: "FontsFree-Net-SF-Pro-Rounded-Black",
        marginTop: -10,
      },
      _delete_accountios: {
        fontSize: 15,
        color: "white",
        fontFamily: "FontsFree-Net-SF-Pro-Rounded-Black",
      },
      _list: {
        height: 62,
        width: "100%",
        backgroundColor: "#FEAD05",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
      },
      _list2: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        height: 62,
        width: "100%",
        paddingHorizontal: 20,
      },
      _list3: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        height: 62,
        width: "100%",
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#3A3A3A",
      },
      Logo: {
        width: 19,
        height: 17,
      },
      _feedback: {
        color: "white",
        fontSize: 20,
        fontFamily: "FontsFree-Net-SF-Pro-Rounded-Black",
        marginLeft: 20,
      },
      notification: {
        width: 20,
        height: 20,
      },
      _sun: {
        position: "absolute",
        top: 50,
        alignSelf: "flex-end",
        right: 20,
      },
})