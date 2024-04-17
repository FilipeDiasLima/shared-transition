import { useNavigation } from "@react-navigation/native";
import {
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import { AppStackNavigationRoutesProps } from "../route.stack";

interface MovieCardProps {
  index: number;
  id: string;
  name: string;
  subtitle: string;
  image: ImageSourcePropType;
}

export const MovieCard = ({
  index,
  id,
  image,
  name,
  subtitle,
}: MovieCardProps) => {
  const navigation = useNavigation<AppStackNavigationRoutesProps>();

  return (
    <Animated.View entering={FadeInDown.delay(200 * index)}>
      <Pressable
        style={styles.container}
        onPress={() => navigation.navigate("detail", { id: id })}
      >
        <Animated.Image
          sharedTransitionTag={id}
          source={image}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      </Pressable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 20,
    backgroundColor: "#353535",
    padding: 15,
    borderRadius: 20,
  },
  image: {
    width: 160,
    height: 140,
    borderRadius: 13,
  },
  textContainer: {
    gap: 10,
    flexShrink: 1,
    marginLeft: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  subtitle: {
    fontSize: 14,
    color: "#FFFFFF",
  },
});
