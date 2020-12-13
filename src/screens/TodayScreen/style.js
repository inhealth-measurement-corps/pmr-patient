import { StyleSheet } from 'react-native';
import colors from '../../config/colors';

export default styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1,
        alignItems: 'center', 
        justifyContent: 'center',
    },
    grid: {
        //flex: 1,
        flexDirection: 'column',
        alignItems: 'center', 
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    padding: {
        flex: 0.25
    },
});