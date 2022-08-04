import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Results = ({navigation}) => {
  return (
    <View>
      <View>
        <Text>Results</Text>
      </View>
      <View style={styles.bannerContainer}>
        <Image source={require('../img/dipp.png')} 
            style={styles.banner} resizeMode="contain"
        />
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
        <Text>Home</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Results

const styles = StyleSheet.create({
    banner: {
        height:300,
        width:300,
    },
    bannerContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})