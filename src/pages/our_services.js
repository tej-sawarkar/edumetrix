import React from "react";
import LinearGradient from "react-native-linear-gradient";
import { StyleSheet, View, Text } from 'react-native';
import { Dimensions } from "react-native-web";

const OurServices = () => {
    return(
      <LinearGradient
          colors = {['#ff7b0f', '#f84287']}
          style={styles.container}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          
        </LinearGradient>
    );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
})
export default OurServices;