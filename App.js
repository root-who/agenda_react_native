import { StatusBar, StyleSheet, Text, SafeAreaView, Dimensions, FlatList, ScrollView} from 'react-native';
import FormContact from './src/views/home/index';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useState,useEffect } from 'react';
import ListaContatos from './src/views/lista';
import { render } from 'react-dom';
import Routes from './src/routes';

const Stack = createStackNavigator();

export default function App() {

  const [contatos, setContatos] = useState([])

  function adicionarContato(contato){
    const novoContato = contato
    console.log(contatos)
    setContatos(contatos=>[...contatos, {...novoContato}])
  }

  return (
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home">
          {props => <ListaContatos {...props} contatos={contatos} />}
        </Stack.Screen>
        <Stack.Screen name="FormContact"  options={{ contatos : contatos }}>
           {props => <FormContact {...props} add={adicionarContato} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
     //</SafeAreaView>
  );
}
const width = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  container: {
    width: width,
    display: 'flex',
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

