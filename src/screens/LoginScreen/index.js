import React, { Component } from 'react';
import { 
    KeyboardAvoidingView, 
    Image, 
    TextInput, 
    Pressable, 
    Text, 
    Alert 
} from 'react-native';
import colors from '../../config/colors';
import logo from '../../assets/images/mc_logo.png';
import styles from './style';

export default class LoginScreen extends Component {
    state = {
        username: '',
        password: ''
    }
    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior='padding'>
                    <Image source={logo} style={styles.logo} />
                    <TextInput
                        style={styles.input}
                        onChangeText={text => this.setState({username: text})}
                        value={this.state.username}
                        placeholder='Username'
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={text => this.setState({password: text})}
                        value={this.state.password}
                        placeholder='Password'
                        secureTextEntry
                    />
                    <Pressable style={({ pressed }) => [
                        {
                            backgroundColor: pressed
                            ? colors.blue
                            : colors.navy_blue
                        },
                        styles.button
                    ]} onPress={() => this.props.navigation.replace('App')}>
                        <Text style={styles.buttonText}>Login</Text>
                    </Pressable>
                    <Pressable style={styles.forgotPassword} onPress={() => Alert.alert('Please contact Johns Hopkins Hospital for a new password.')}>
                        <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
                    </Pressable>
            </KeyboardAvoidingView>
        );
    }
}