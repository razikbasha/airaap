import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Title from '../components/title'

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Title />
      <View style={styles.bannerContainer}>
        <Image source={require('../img/dipp.png')} 
            style={styles.banner} resizeMode="contain"
        />
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate('Quiz')} style={styles.button}>
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    banner: {
        height:300,
        width:300,
    },
    bannerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    container: {
      paddingTop:10,
      paddingHorizontal:20,
      height:'100%'
    },
    button: {
      width:'100%',
      backgroundColor:'#1a759f',
      padding: 20,
      borderRadius:12,
      marginBottom:30,
      alignItems:'center',
    },
    buttonText: {
      fontSize:16,
      color: 'white'
    }
})