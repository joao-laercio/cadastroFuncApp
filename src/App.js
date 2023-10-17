import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListarFuncionario from "./views/ListarFuncionario";
import DetalharFuncionario from "./views/DetalharFuncionario";

const Stack = createNativeStackNavigator()

export default props => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="ListarFuncionario" screenOptions={screenOptions} >
                <Stack.Screen name="ListarFuncionario" component={ListarFuncionario}
                    options={() => {
                        return {
                            title: "Lista de Funcionarios"
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
        backgroundColor: '#A23EEC'
    },
    headerTintColor: 'white',
    headerTintStyle: {
        fontWeight: 'bold'
    }

}