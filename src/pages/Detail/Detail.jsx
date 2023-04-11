import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import fetchHook from '../../Hook/fetchHook';
import Error from '../../components/Error';
import Loading from '../../components/Loading';

const Detail = ({ route }) => {

  const { id } = route.params;
  const url = "https://fakestoreapi.com/products";
  const { data, error, loading } = fetchHook(`${url}/${id}`)

  if (error) {
    return (<Error />)
  }
  if (loading) {
    return (<Loading />)
  }

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: data.image }}
        style={styles.image}
      />
      <View style={styles.body_container}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.desc}>{data.description}</Text>
        <Text style={styles.price}>{data.price}</Text>
      </View>
    </View>
  )
}

export default Detail

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  body_container: {
    padding: 10
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 3,
    resizeMode: 'contain',
    backgroundColor: "white"
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25
  },
  desc: {
    fontStyle: 'italic',
    marginVertical: 5
  },
  price: {
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'right'
  }
})