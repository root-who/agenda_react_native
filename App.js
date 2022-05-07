import { StatusBar, StyleSheet, Text, SafeAreaView, Dimensions, FlatList} from 'react-native';
import FormContact from './src/views/home/index';
import React, { useState } from 'react';
import ListaContatos from './src/views/lista';
import { render } from 'react-dom';

export default function App() {
  const width = Dimensions.get('screen').width;
  const [contatos, setContatos] = useState([{}])

  function adicionarContato(contato){
    setContatos({...contatos, ...contato})
  }



  return (
     <SafeAreaView style={styles.container}>
      <StatusBar/>      
      <FormContact width={width} contatos={contatos} add={adicionarContato}></FormContact>
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
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  }
});

