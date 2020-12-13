import { StyleSheet } from 'react-native';
import colors from '../../config/colors';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 150,
        resizeMode: 'contain',
    },
    input: {
        width: '75%',
        backgroundColor: colors.gray,
        fontFamily: 'SFCompactRounded-Medium',
        fontSize: 15,
        padding: 15,
        marginTop: 15,
        borderRadius: 5
    },
    button: {
        width: '75%',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15
    },
    buttonText: {
        fontFamily: 'SFCompactRounded-Medium',
        fontSize: 15,
        padding: 15,
        color: colors.white
    },
    forgotPassword: {
        marginTop: 10,
    },
    forgotPasswordText: {
        fontFamily: 'SFCompactRounded-Medium',
        fontSize: 15,
        color: colors.navy_blue
    }
});