import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ListaContatos from "./views/lista";
import FormContact from "./views/home";
import { SafeAreaView, StatusBar } from "react-native-web";


const Stack = createStackNavigator();

export default function Routes (contatos, width, adicionar){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Lista de Contatos" component={ListaContatos}/>
        <Stack.Screen name="FormContact" component={FormContact}  options={{ contatos : contatos }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}