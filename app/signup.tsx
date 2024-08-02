import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Signup() {
  return (
    <View style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }}>
        <Text style={{fontSize: 24, marginBottom: 20}}>Sign Up</Text>

        <Link href={"/"}>Back to Log In</Link>
    </View>
  )
}
