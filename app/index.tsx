import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{fontSize: 24, marginBottom: 20}}>Please Log In</Text>

      <Link 
        style={{fontWeight: "light", marginBottom: 40}} 
        href={"/(drawer)/user/places"}
      >Log In</Link>
      <Link href={"/signup"}>Go to Sign Up</Link>
    </View>
  );
}
