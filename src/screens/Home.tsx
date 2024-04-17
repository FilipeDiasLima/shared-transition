import { FlatList, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MovieCard } from "../components/MovieCard";
import { movies } from "../utils/movies";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Filmes do Batman</Text>
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <MovieCard
            id={item.id}
            index={index}
            name={item.name}
            subtitle={item.subtitle}
            image={item.image}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#232323",
    paddingHorizontal: 20,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 34,
    fontWeight: "bold",
  },
});
