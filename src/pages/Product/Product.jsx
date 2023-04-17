import { View, FlatList, Button } from 'react-native'
import React from 'react'
import ProductCart from '../../components/ProductCart/ProductCart';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import fetchHook from '../../Hook/fetchHook';
import { useDispatch } from 'react-redux';

const Product = ({ navigation }) => {

const url = "https://fakestoreapi.com/products";
const {data,error,loading} = fetchHook(url);
const dispatch = useDispatch()

  if (error) {
    return (<Error />)
  }

  const gotoDetail = (id) => {
    navigation.navigate('DetailScreen', { id })
  }

  const renderItem = ({ item }) => <ProductCart product={item} gotoDetail={() => gotoDetail(item.id)} />

  return (
    <View>
      <Button
         title={'LogOut'}
         onPress={()=>dispatch({type:'SET_USER',payload:{user:null}})}
      />
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

