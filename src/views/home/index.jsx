import React, { useState } from 'react';
import { Text, TextInput, View, Dimensions, Pressable,FlatList} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import ListaContatos from '../lista';

export default function FormContact({width, add, contatos}){

    const [nome, setNome] = useState('');
    const [tel, setTel] = useState('');
    
    const styles={
        inputContainer: {
            alignItems:'center',
            marginTop:50
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
        text:{
            marginBottom:20
        },
        button:{
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 12,
            paddingHorizontal: 32,
            borderRadius: 4,
            elevation: 3,
            backgroundColor: 'black',
            width: width/1.2,
        },
        buttontext: {
            fontSize: 16,
            lineHeight: 21,
            fontWeight: 'bold',
            letterSpacing: 0.25,
            color: 'white',
        },item: {
            alignSelf:'center',
            padding: 10,
            fontSize: 18,
            height: 44,
            marginTop:40 
        },
        list:{
            display:'flex',
            width:width,  
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
    }
    function onButtonPress(){
        const novo = {nome:nome, telefone:tel}
        add(novo)
    }
    return(
        <>
        
        <View style={styles.inputContainer}>
            <Text style={styles.text}>Adicione um contato</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite um nome"
                onChangeText={novoNome => setNome(novoNome)}
            />
            <TextInput
                style={styles.input}
                placeholder="Digite o numero do telefone"
                onChangeText={novoNum => setTel(novoNum)}
            />
            <Pressable style={styles.button}
                onPress={onButtonPress}
            >
                <Text style={styles.buttontext}>Adicionar</Text>
            </Pressable>
            <Text style={styles.item}>Contatos</Text>
            <FlatList
            style={styles.list}
            data={contatos}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
                <>
                    <Text style={styles.item}>{item.nome + "   " + item.telefone}</Text>
                </>
            )}
            >  
            </FlatList>
      </View>
        </>
    )

    
}