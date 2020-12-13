import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../../config/colors'

const DailyAmbulationsGraph = () => {
    return (
        <View style={styles.container}>
            <Text>Today's Ambulations Graph</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    graph: {
        backgroundColor: colors.gray,
        borderRadius: 20,
        paddingTop: 30,
        paddingBottom: 20,
        width: '90%'
    }
})

export default DailyAmbulationsGraph;