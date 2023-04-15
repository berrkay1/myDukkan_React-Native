import { StyleSheet, Text, TextInput, View,TouchableOpacity } from 'react-native'
import React from 'react'

const Input = ({ placeholder,onType,value }) => {
    return (
        <View style={styles.container}>
            <TextInput placeholder={placeholder} onChangeText={onType} value={value} />
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    container: {
        padding: 5,
        margin:10,
        backgroundColor:'white',
        borderRadius:5
    },
  
})