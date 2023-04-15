import { Alert, Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import { Formik } from 'formik';
import usePost from '../../Hook/usePost'

const Login = ({ navigation }) => {

    const { data, error, loading, post } = usePost()

    const formikSubmit = (useData) => {

        post('https://fakestoreapi.com/auth/login', useData)

    }

    
    if (data) {
        if (data.status === 'Error') {
            Alert.alert('Kullanıcı bulunamadı!')
        } else {
            navigation.navigate('ProductScreen')
        }
    }

console.log('error', error)
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logo_container}>
                <Image style={styles.logo} source={require('../../../assets/logo.svg')} />

            </View>
            <Formik
                initialValues={{ username: '', password: '' }}
                onSubmit={formikSubmit}
            >

                {({ handleChange, handleSubmit, values }) => (
                    <View style={styles.body_container}>
                        <Input
                            placeholder='Kullanıcı adını giriniz'
                            onType={handleChange('username')}
                            value={values.username}
                        />
                        <Input
                            placeholder='Şifrenizi giriniz'
                            onType={handleChange('password')}
                            value={values.password}
                        />
                        <Button text={'Giriş yap'} onPress={handleSubmit} loading={loading} />
                    </View>
                )}
            </Formik>


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