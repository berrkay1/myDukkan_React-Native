import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import Config from 'react-native-config'
import axios from 'axios';
import ProductCart from '../../components/ProductCart/ProductCart';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

const Product = () => {

  const [list, setList] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      const { data } = await axios.get('https://fakestoreapi.com/products');
      setLoading(false);
      setError(false);
      setList(data)
    } catch (error) {
      setError(true);
    }

  }

  useEffect(() => {
    fetchData();
  }, [])

  if (error) {
    return (<Error />)
  }

  const renderItem = ({ item }) => <ProductCart product={item} />

  return (
    <View>
      {loading ? <Loading /> : (
        <FlatList
          data={list}
          renderItem={renderItem}
        />
      )}

    </View>
  )
}

export default Product

const styles = StyleSheet.create({})