import Router from './Router'
import AuthProvider from './src/contex/AuthProvider';

export default Wrapper = () => {
    return (
        <AuthProvider >
            <Router/>
        </AuthProvider>
    )
}