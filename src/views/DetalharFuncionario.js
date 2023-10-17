import React, { useState } from "react";
import { View, Text, Image, TextInput, StyleSheet, Linking } from 'react-native';
import { SocialIcon } from '@rneui/themed';

export default props => {

    const [funcionario, setFuncionario] = useState({})
    const { id } = props.route.params

    fetch(`https://joaolaercio.pythonanywhere.com/api/funcionarios/${id}`)
        .then(data => data.json())
        .then(json => setFuncionario(json))
        .catch(error => console.warn(error))


    return (
        <View style={styles.container}>
            <View style={styles.avatarContainer}>
            <Image style={styles.avatar}
                   source={{uri: funcionario.avatar}}/>
                
            </View>
            <View style={styles.form}>
                <Text style={styles.label}>Name</Text>
                <TextInput
                    
                    placeholder="Nome"
                    value={funcionario.nome}
                />
                <Text style={styles.label}>Email</Text>
                <TextInput
                    
                    placeholder="Enter Email"
                    value={funcionario.email}
                />
                <Text style={styles.label}>Bio</Text>
                <TextInput
                    
                    placeholder="Enter Bio"
                    value={funcionario.info}
                />
            </View>
            <View style={styles.socialIcons}>
                <SocialIcon
                    type='instagram'
                    iconType='font-awesome'
                />
                <SocialIcon
                    type='facebook'
                    iconType='font-awesome'
                />
                <SocialIcon
                    type='whatsapp'
                    iconType='font-awesome'
                    onPress={() => Linking.openURL(`https://wa.me/${funcionario.whatsapp}`)}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    form: {
        width: '80%',
    },
    label: {
        marginTop: 20,
    },
    input: {
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        fontSize: 18,
    },
    button: {
        marginTop: 20,
        backgroundColor: '#1E90FF',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
    avatarContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    changeAvatarButton: {
        marginTop: 10,
    },
    changeAvatarButtonText: {
        color: '#1E90FF',
        fontSize: 18,
    },
    socialIcons: {
        flexDirection: 'row'
    }
});