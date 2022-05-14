import React, { useState } from 'react';
import { Text, TextInput, View, Dimensions, Pressable,FlatList, StyleSheet} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import ListaContatos from '../lista';

export default function FormContact({add}){

    const [nome, setNome] = useState('');
    const [tel, setTel] = useState('');
    const [contatos, setContatos]= useState([{}])

    
    function onButtonPress(){
        const novo = {nome:nome, telefone:tel}
        add(novo)
        setNome("")
        setTel("")
    }
    return(
        <>
        <View style={styles.inputContainer}>
            <Text style={styles.text}>Adicione um contato</Text>
            <TextInput
                style={styles.input}
                value={nome}
                onSubmitEditing={true}
                placeholder="Digite um nome"
                onChangeText={novoNome => setNome(novoNome)}
            />
            <TextInput
                style={styles.input}
                value={tel}
                onSubmitEditing={true}
                placeholder="Digite o numero do telefone"
                onChangeText={novoNum => setTel(novoNum)}
            />
            <Pressable style={styles.button}
                onPress={onButtonPress} >
                <Text style={styles.buttontext}>Adicionar</Text>
            </Pressable>
            
            
      </View>
        </>
    )
}

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
const styles =  StyleSheet.create({
        inputContainer: {
            marginTop: height/8,
            alignItems:'center',
        },
        text: {
            alignSelf:'center',
            padding: 10,
            fontSize: 20,
            fontWeight:'500'
        },
        input: {
            height: 70,
            backgroundColor: '#ffffff',
            paddingLeft: 15,
            paddingRight: 15,
            borderWidth: 2,
            borderColor: "#20232a",
            alignItems: 'stretch',
            width: width/1.2,
            marginBottom:10   
        },
        button:{
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 12,
            paddingHorizontal: 32,
            borderRadius: 4,
            elevation: 3,
            backgroundColor: 'black',
        },
        buttontext: {
            fontSize: 16,
            lineHeight: 21,
            fontWeight: 'bold',
            letterSpacing: 0.25,
            color: 'white',
        }
    })