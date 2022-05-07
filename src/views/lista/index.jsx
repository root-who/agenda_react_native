import { View, FlatList, Text,Pressable} from 'react-native';
import React, { useState } from 'react';


export default function ListaContatos({width}){
    
    const [contatos, setContatos]= useState([{nome:"joao", telefone:12}])


    const styles = {
        item: {
            alignSelf:'center',
            padding: 10,
            fontSize: 18,
            height: 44,
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
    };

    function onButtonPress(){
        add({nome:nome, telefone:tel})
    }

    return(
        <>
        <View style={styles.view}>
            
        </View>
        </>
    )

    
}