import { StyleSheet, Text, TextButton, TouchableOpacity, } from 'react-native'
import React from 'react'

const Button = ({ text ,onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
           <Text style={styles.title}>{text}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    container: {
        padding: 8,
        margin: 10,
        backgroundColor: '#2286c3',
        borderRadius: 5,
        alignItems:'center'
    },
    
    title:{
        fontWeight:'bold',
        fontSize:17,
        color:'#fff'
    }
})