import { View, FlatList, Text,Pressable, StyleSheet, Dimensions} from 'react-native';
import React, { useState } from 'react';


export default function ListaContatos({width, contatos}){   
    return(
        <>
        <View style={styles.view}>
            <Text style={styles.title}>Lista de Contatos</Text>
            {contatos.map((value, index)=>{
                return(
                    <Text key={index} style={styles.item}>{value.nome + "   " + value.telefone}</Text>
                )
            })}
        </View>
        </>
    )  
}
const width = Dimensions.get('screen').width;
const styles =  StyleSheet.create({
        view:{
            marginTop:50,
            alignItems:'center'
        },  
        title:{
            fontSize:20,
            fontWeight:'500'
        },      
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
});