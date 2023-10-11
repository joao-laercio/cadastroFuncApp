import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListarAmigos from "./views/ListarAmigos";
import DetalharAmigo from "./views/DetalharAmigo";

const Stack = createNativeStackNavigator()

export default props => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="ListarAmigos" >
                <Stack.Screen name="ListarAmigos" component={ListarAmigos} />
                <Stack.Screen name="DetalharAmigo" component={DetalharAmigo} />
            </Stack.Navigator>
        </NavigationContainer>
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
        alignItems: 'center'
    }
})