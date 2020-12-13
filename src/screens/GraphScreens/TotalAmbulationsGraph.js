import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../../config/colors'

const TotalAmbulationsGraph = () => {
    return (
        <View style={styles.container}>
            <Text>Total Ambulations Graph</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default TotalAmbulationsGraph;