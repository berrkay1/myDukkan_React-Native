import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'

const Login = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logo_container}>
                <Image style={styles.logo} source={require('../../../assets/logo.svg')} />
            </View>
            <View style={styles.body_container}>
                <Input placeholder='Kullanıcı adını giriniz' />
                <Input placeholder='Şifrenizi giriniz' />
                <Button text={'Giriş yap'} />
            </View>

        </SafeAreaView>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#64b5f6'
    },
    logo: {
        height: Dimensions.get('window').height / 3,
        width: Dimensions.get('window').width * 0.9,
        backgroundColor: '#64b5f6',
        alignItems: 'center',
        alignSelf: 'center',
        resizeMode: 'contain',
    },
    logo_container: {
        flex: 1,
        justifyContent: 'center'
    },
    body_container: {
        flex: 1,
    },
})