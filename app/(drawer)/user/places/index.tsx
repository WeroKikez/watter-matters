import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Places() {
  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Text style={{fontSize: 24, marginBottom: 20}}>Places</Text>

      <Link href={"user/(tabs)"}>Enriquez's home</Link>
    </View>
  )
}
