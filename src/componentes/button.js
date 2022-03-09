import React from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
export default function ButtonGradient() {
    return (
            <TouchableOpacity style={styles.conatines}>
                <LinearGradient
                    // Button Linear Gradient
                    colors={['#ffb677', '#ff3cbd']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.button}>
                    <Text style={styles.text}>Iniciar Sesión</Text>
                </LinearGradient>
            </TouchableOpacity>


    );
}


const styles = StyleSheet.create({
    conatines: {
        flex: 1,
        alignItems: 'center',
        width: 200,
        marginTop: 30,
    },

    text: {
        fontSize: 14,
        color: '#ffffff',
        marginTop: 0,
        fontWeight: 'bold'
    },
    button: {
        width: '80%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20
    }
});