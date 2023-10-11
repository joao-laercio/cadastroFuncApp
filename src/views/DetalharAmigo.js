import React from "react";
import { Text, StyleSheet, View } from "react-native";

export default props => {
    return (
        <View style={estilo.principal}>
            <Text style={estilo.texto}>
                APP
            </Text>
            
        </View>
    )
}

const estilo = StyleSheet.create({
    texto: {
        fontSize: 36,
        fontWeight: 'bold'
    },
    principal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green'
    }
})