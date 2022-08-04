import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Quiz = ({navigation}) => {
  const [questions, setQuestions] = useState();
  const [ques, setQues] = useState(0);
  const getQuiz = async () => {
    const url = 'https://opentdb.com/api.php?amount=10&type=multiple';
    const res = await fetch(url);
    const data = await res.json();
    setQuestions(data.results);
  }
  useEffect(() => {
    getQuiz();
  }, []);

  const handleNextPress = () =>{
    setQues(ques + 1);
  }

  return (
    <View style= {styles.container}>
      {questions && (
        <View style={styles.parent}>
      <View style= {styles.top}>
        <Text  style= {styles.question}>Q. {questions[ques].question}</Text>
      </View>
      <View style= {styles.options}>
        <TouchableOpacity style= {styles.optionButton}>
            <Text  style= {styles.option}>Option 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style= {styles.optionButton}>
            <Text style= {styles.option}>Option 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style= {styles.optionButton}>
            <Text style= {styles.option}>Option 3</Text>
        </TouchableOpacity>
        <TouchableOpacity style= {styles.optionButton}>
            <Text style= {styles.option}>Option 4</Text>
        </TouchableOpacity>
        
      </View>
      <View style= {styles.bottom}>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>SKIP</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.button} onPress={handleNextPress}>
            <Text style={styles.buttonText}>NEXT</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={()=>navigation.navigate('Results')} style={styles.button}>
            <Text style={styles.buttonText}>END</Text>
        </TouchableOpacity> */}
      </View>
      </View>
      )}
    </View>
  )
}

export default Quiz

const styles = StyleSheet.create({
    container:{
        padding:12,
        height:'100%',
    },
    top:{
        marginVertical:16,
    },
    parent: {
      height: '100%'
    }, 
    options:{
        marginVertical:10,
        flex:1,
    },
    bottom:{
        marginBottom:3,
        paddingVertical:10,
        justifyContent:'space-between',
        flexDirection:'row',
    },
    button: {
      
      backgroundColor:'#1a759f',
      padding: 15,
      borderRadius:12,
      marginBottom:30, 
      alignItems:'center',
    },
    buttonText: {
      fontSize:16,
      color: 'white'
    },
    option: {
      fontSize:16,
      color:'#fff'
    },
    optionButton: {
      backgroundColor:'#34a0a4',
      paddingVertical:12,
      marginVertical:5,
      paddingHorizontal:12,
      borderRadius:5,
    },
    question: {
      fontSize:20,
    }
})