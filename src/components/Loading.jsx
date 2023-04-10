import Lottie from 'lottie-react-native';
import React from 'react'

const Loading = () => {
  return (
    <Lottie source={require('../../assets/loading.json')} autoPlay loop />
  )
}

export default Loading