import { View, FlatList, Text,Pressable, StyleSheet, Dimensions, ScrollView} from 'react-native';
import React, { useState } from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'


export default function ListaContatos({navigation, route, contatos}){   

    

    function addContato(){
        navigation.navigate('FormContact')
    }

    return(
        <>
        <View style={styles.container}>
            <Text style={styles.title}>Lista de Contatos</Text>
            <ScrollView style={styles.view}>
                <View style={styles.listView}>
                    {contatos.map((value, index)=>{
                        return(
                            <View style={styles.container_contact} key={index}>
                                <Text  style={styles.item}>{"Nome: " +value.nome}</Text>
                                <Text style={styles.item}>{"Telefone: " + value.telefone}</Text>
                            </View>
                        )
                    })}
                </View>
            </ScrollView>
            <View style={styles.buttonAddView}>
                <Pressable onPress={addContato}>
                    <FontAwesome5 name='plus-circle' color='black' size={50}/>
                </Pressable>
            </View>
        </View>
        </>
    )  
}
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
const styles =  StyleSheet.create({
        container:{
        },
        buttonAddView:{
            alignItems: 'flex-end',
            marginTop:20,
            marginRight:30
            
        },
        view:{
            height:height-250
        },
        listView:{
            width:width,

            marginTop:20,
        }, 
        container_contact:{
            paddingLeft:30,
            paddingRight:30,
            justifyContent:'space-between',
            flexDirection:'row'
        }, 
        title:{
            marginTop:30,
            fontSize:20,
            fontWeight:'500',
            alignSelf:'center'
        },      
        item: {
            alignSelf:'center',
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