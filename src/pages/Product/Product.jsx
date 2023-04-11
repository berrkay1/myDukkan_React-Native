import { View, FlatList } from 'react-native'
import React from 'react'
import ProductCart from '../../components/ProductCart/ProductCart';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import fetchHook from '../../Hook/fetchHook';

const Product = ({ navigation }) => {

const url = "https://fakestoreapi.com/products";
const {data,error,loading} = fetchHook(url)

  if (error) {
    return (<Error />)
  }

  const gotoDetail = (id) => {
    navigation.navigate('DetailScreen', { id })
  }

  const renderItem = ({ item }) => <ProductCart product={item} gotoDetail={() => gotoDetail(item.id)} />

  return (
    <View>
      {loading ? <Loading /> : (
        <FlatList
          data={data}
          renderItem={renderItem}
        />
      )}

    </View>
  )
}

export default Product

