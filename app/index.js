import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { useState } from "react";
import { Stack, useRouter } from "expo-router";
import { COLORS, SIZES, icons, images } from "../constants";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "../components";

const Home = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <View
        style={{
          padding: SIZES.medium,
        }}
      >
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: COLORS.lightWhite },
            headerShadowVisible: false,
            headerLeft: () => (
              <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
            ),
            headerRight: () => (
              <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
            ),
            headerTitle: " ",
          }}
        />
      </View>

      <ScrollView>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          <Welcome />
          <Nearbyjobs />
          <Popularjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
