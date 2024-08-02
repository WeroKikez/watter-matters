import { GestureHandlerRootView } from "react-native-gesture-handler"
import { Drawer } from "expo-router/drawer"

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView>
        <Drawer>
          <Drawer.Screen name="user/(tabs)" options={{ title: "Home" }}/>
          <Drawer.Screen name="user/places/index" options={{ title: "Places" }} />
        </Drawer>
    </GestureHandlerRootView>
  );
}
