import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListarFuncionario from "./views/DetalharFuncionario";
import DetalharFuncionario from "./views/ListarFuncionario";

const Stack = createNativeStackNavigator()

export default props => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="ListarFuncionario" screenOptions={screenOptions} >
                <Stack.Screen name="ListarFuncionario" component={ListarFuncionario}
                    options={() => {
                        return {
                            title: "Funcionario"
                        }
                    }}
                />
                <Stack.Screen name="DetalharFuncionario" component={DetalharFuncionario}
                    options={() => {
                        return {
                            title: "Perfil do Funcionario"
                        }
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const screenOptions = {
    headerStyle: {
        backgroundColor: '#0dcaf0'
    },
    headerTintColor: 'white',
    headerTintStyle: {
        fontWeight: 'bold'
    }

}