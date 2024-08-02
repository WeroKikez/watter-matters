import { Text, View } from "react-native";

export default function People() {
  return (
    <View
        style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        }}
    >
        <Text style={{fontSize: 24, marginBottom: 20}}>People</Text>
    </View>
  )
}