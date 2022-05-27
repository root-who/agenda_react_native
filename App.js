import { StatusBar, StyleSheet, Text, SafeAreaView, Dimensions, FlatList, ScrollView} from 'react-native';
import FormContact from './src/views/home/index';
import React, { useState,useEffect } from 'react';
import ListaContatos from './src/views/lista';
import { render } from 'react-dom';

export default function App() {
  const width = Dimensions.get('screen').width;
  const [contatos, setContatos] = useState([])

  function adicionarContato(contato){
    const novoContato = contato
    console.log(contatos)
    setContatos(contatos=>[...contatos, {...novoContato}])
  }

  return (
     <SafeAreaView style={styles.container}>
      <ScrollView>
          <StatusBar/>      
          <FormContact add={adicionarContato}></FormContact>
          <ListaContatos contatos={contatos}></ListaContatos>
      </ScrollView>
     </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

