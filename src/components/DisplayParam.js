import React from 'react';
import { StyleSheet, View, Text, Pressable, Alert } from 'react-native';
import * as Progress from 'react-native-progress';
import Icon from 'react-native-vector-icons/Foundation';
import colors from '../config/colors';

const DisplayParam = (props) => {
    return(
        <Pressable 
            style={styles.container}
            onPress={() => props.navigation.navigate('Graphs', { screen: props.screenName })}>
            <Icon name="info" size={25} style={styles.icon} onPress={() => Alert.alert(props.info)} />
            <Text style={styles.title}>{props.title}</Text>
            <View style={styles.row}>
                <Text style={styles.num}>{props.num}</Text>
                {props.unit && <Text style={styles.unit}>{props.unit}</Text>}
            </View>
            {props.progress && <Progress.Bar progress={props.progress} width={120} color={colors.black} borderWidth={1} />}
        </Pressable>
    )
}

export default DisplayParam;

const styles = StyleSheet.create({
    container: {
        width: '40%',
        backgroundColor: colors.gray,
        aspectRatio: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        marginBottom: '5%'
    },
    title: {
        fontFamily: 'SFCompactRounded-Medium',
        fontSize: 15,
        paddingTop: 5,
        color: colors.black
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    num: {
        fontFamily: 'SFCompactRounded-Medium', 
        fontSize: 45,
        color: colors.black,
        paddingBottom: 5
    },
    unit: {
        fontFamily: 'SFCompactRounded-Medium', 
        fontSize: 15,
        color: colors.black,
        paddingLeft: 5,
        paddingTop: 25
    },
    icon: {
        alignSelf: 'flex-end',
        position: 'absolute',
        top: 0
    }
})