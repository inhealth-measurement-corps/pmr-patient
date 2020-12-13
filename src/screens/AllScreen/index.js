import React from 'react';
import { View, SafeAreaView } from 'react-native';
import styles from '../TodayScreen/style';
import DisplayParam from '../../components/DisplayParam';

export default AllScreen = (props) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.center} />
            <View style={styles.grid}>
                <View style={styles.row}>
                    <DisplayParam 
                        title={"Ambulations"} 
                        num={0} 
                        unit={"walks"}
                        progress={0.3} 
                        navigation={props.navigation}
                        screenName={'Total Ambulations'}
                        info={'The total number of walks you have completed'}
                    />
                    <View style={styles.padding} />
                    <DisplayParam
                        title={"Distance"} 
                        num={0} 
                        unit={"ft"}
                        progress={0.5} 
                        navigation={props.navigation}
                        screenName={'Total Distance'}
                        info={'The total distance you have walked'}
                    />
                </View>
                
                <View style={styles.row}>
                    <DisplayParam 
                        title={"Speed"} 
                        num={parseFloat(0.0).toFixed(1)} 
                        unit={"mph"}
                        progress={0.7} 
                        navigation={props.navigation}
                        screenName={'Total Speed'}
                        info={'The average speed of all your ambulations'}
                    />
                    <View style={styles.padding} />
                    <DisplayParam 
                        title={"Length of Stay"} 
                        num={0}
                        unit={"days"}
                        info={'The number of days you have been in the unit'}
                    />
                </View>
            </View>
            <View style={styles.center} />
        </SafeAreaView>
    )
}

