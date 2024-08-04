import { globalStyles } from "@/src/styles";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Link } from "expo-router";
import { View, Text } from "react-native"

type PlaceCardProps = {
    place: {
        id: string;
        name: string;
        owner: string;
    }
}

export default function PlaceCard({place} : PlaceCardProps) {
  return (
    <View style={{
        width: 350,
        height: 140,
        marginTop: 10,
        padding: 10,
        backgroundColor: "#fff",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        display: "flex",
        flexDirection: "row",
        gap: 10,
    }}>
        <FontAwesomeIcon icon={faHouse} size={34} style={{marginTop: 8}} />

        <View>
            <Link href={"/user/(tabs)"} style={globalStyles.heading}>{place.name}</Link>

            <Text style={{
                
            }}>{place.owner}</Text>
        </View>
    </View>
  )
}
