import React from "react";
import LinearGradient from "react-native-linear-gradient";
import { StyleSheet, View, Text } from 'react-native';
import { Dimensions } from "react-native-web";

const Portfolio = () => {
    return(
        <LinearGradient
          colors = {['#ff7b0f', '#f84287']}
          style={styles.container}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          
          <View>
            <View style={styles.root}>
              <View style={[{ flexDirection: 'column', }]}> 
                <Text style={styles.title}> Portfolio</Text>
                <Text style={styles.sub_title}> EduMetrix Learning Solutions Pvt Ltd</Text>
              </View>

              <View style={styles.image_view}>
                <img src="../assets/0.png" />
              </View>
            </View>

            <View style={styles.footer}>
              
            </View>
          </View>
            

        </LinearGradient>
    );
}


const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  root: {
    flex: 1,
  },
  footer: {
    height: 100,
  },
  title: {
    marginTop: "8%",
    marginStart: "4%",
    fontSize: 120,
    fontFamily: "sans-sarif",
    color: "#ffffff"
  },
  sub_title: {
    marginStart: "5.2%",
    marginTop: "2%",
    fontSize: 40,
    color: "#ffffff"
  },
  image_view: {
    top: "20%",
    flexDirection: 'column',
    width: "40%",
    position: 'absolute',
    end: 0,
  }
})
export default Portfolio;