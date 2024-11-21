import React, { useState } from "react";
import MapView, { Polygon, PROVIDER_GOOGLE } from "react-native-maps";
import { Button, StyleSheet, View } from "react-native";

const initialRegion = {
  latitude: 55.342479,
  latitudeDelta: 0.00032184878324699185,
  longitude: 13.364951,
  longitudeDelta: 0.0025986636281045464,
};
const polygon = [
  {latitude: 55.342479, longitude: 13.364951},
  {latitude: 55.342616, longitude: 13.365558},
  {latitude: 55.342320, longitude: 13.365784},
  {latitude: 55.342131, longitude: 13.365198}
];

export default function App() {
  const [rerender, setRerender] = useState(0);

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        initialRegion={initialRegion}
        style={styles.map}>
        <Polygon
          key={`${rerender}`}
          fillColor="rgba(255,0,0,0.0)"
          strokeWidth={6}
          coordinates={polygon}></Polygon>
      </MapView>
      <Button
        title="Re-render"
        color="#841584"
        onPress={() => setRerender((old) => old + 1)}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "90%"  },
});
