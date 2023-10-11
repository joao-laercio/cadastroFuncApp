import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

export default props => {
    return (
        <View style={estilo.principal}>
            <Text style={estilo.texto}>
                APP
            </Text>
            <Button title="Detalhar" onPress={() => props.navigation.navigate('DetalharAmigo')} />
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
        backgroundColor: 'blue'
    }
})