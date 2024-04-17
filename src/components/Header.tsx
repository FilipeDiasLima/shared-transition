import { useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet, Text } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AppStackNavigationRoutesProps } from "../route.stack";

export const Header = () => {
  const inset = useSafeAreaInsets();

  const navigation = useNavigation<AppStackNavigationRoutesProps>();

  return (
    <Animated.View
      style={[styles.container, { top: inset.top }]}
      entering={FadeIn.delay(400)}
    >
      <Pressable onPress={navigation.goBack} style={styles.backButton}>
        <Text>Voltar</Text>
      </Pressable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    flex: 1,
    zIndex: 1,
    flexDirection: "row",
    left: 20,
    right: 20,
  },
  backButton: {
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 10,
  },
});
