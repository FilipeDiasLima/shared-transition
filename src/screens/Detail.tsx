import { useRoute } from "@react-navigation/native";
import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import Animated, { FadeIn, FadeInDown } from "react-native-reanimated";
import { Header } from "../components/Header";
import { movies } from "../utils/movies";

interface RouteProps {
  id: string;
}

const Detail = () => {
  const route = useRoute();

  const { id } = route.params as RouteProps;

  const { width } = useWindowDimensions();

  const movie = movies.find((movie) => movie.id === id);

  return (
    <View style={styles.container}>
      <Header />
      <View>
        <Animated.Image
          sharedTransitionTag={movie?.id}
          source={movie?.image}
          style={{ width: width, height: width }}
        />
        <Animated.View
          style={styles.textContainer}
          entering={FadeIn.delay(600)}
        >
          <Text style={styles.textName}>{movie?.name}</Text>
          <Text style={styles.textLocation}>{movie?.subtitle}</Text>
        </Animated.View>
      </View>
      <Animated.View entering={FadeInDown.delay(800)}>
        <Text style={styles.textAbout}>Sobre o filme</Text>
        <Text style={styles.text}>{movie?.description}</Text>
      </Animated.View>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#232323",
  },
  textContainer: {
    position: "absolute",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    bottom: 10,
    left: 10,
    right: 10,
    padding: 16,
    borderRadius: 20,
  },
  textName: {
    color: "white",
    fontSize: 26,
    fontWeight: "bold",
  },
  textLocation: {
    color: "white",
    fontSize: 16,
  },
  textAbout: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
    margin: 10,
  },
  text: {
    color: "#FFFFFF",
    fontSize: 16,
    marginHorizontal: 10,
    textAlign: "justify",
  },
});
