import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'

const ProductCart = ({ product,gotoDetail }) => {
    return (
        <TouchableWithoutFeedback onPress={gotoDetail}>
            <View style={styles.container}>
            <Image
                style={styles.image}
                source={{ uri: product.image }}
            />
            <View style={styles.body_container}>
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.price}>{product.price}</Text>
            </View>

        </View>
        </TouchableWithoutFeedback>   
    )
}

export default ProductCart

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#bdbdbd',
        backgroundColor: '#eeeeee',
        margin: 10,
        flexDirection: 'row'
    },
    image: {
        width: 100,
        minHeight: 100,
        resizeMode:'contain',
        backgroundColor:'white'
    },
    body_container: {
        flex: 1,
        padding: 5,
        justifyContent: 'space-between',
    },
    title: {
        fontWeight: 'bold',
        fontSize:17
    },
    price: {
        textAlign: 'right',
        fontSize:15,
        fontStyle:'italic'
    }
})