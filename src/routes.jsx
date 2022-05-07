import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ListaContatos from "./views/lista";
import FormContact from "./views/home";


const AppStack = createStackNavigator();

export default function Routes(contatos, width, adicionar) {
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen name="FormContact" component={FormContact} />
        <AppStack.Screen name="ListaContatos" component={ListaContatos} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}