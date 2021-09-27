import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Biblioteca } from './pages/Biblioteca';
import { Emprestimo } from './pages/Emprestimo';
import { MeusLivros } from './pages/MeusLivros';
import styles from '../styles';

const Tab = createBottomTabNavigator();

export default function Routes() {
    return (
      <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor:'#121212'},
      }}
    >
        <Tab.Screen name="Meus Livros" component={MeusLivros} />
        <Tab.Screen name="Biblioteca" component={Biblioteca} />
        <Tab.Screen name="Emprestimo" component={Emprestimo} />
      </Tab.Navigator>
    );
  }
