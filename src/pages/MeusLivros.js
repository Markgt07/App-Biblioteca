import * as React from 'react';
import { ImageBackground, Text, View,Image,TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Livro } from './Livro';

import styles from '../../styles';


export function MeusLivros(navigation) {
  return (
    <View style={{flex:0.7,padding:20}}>
      <View style={styles.BarraLivros}></View> 
      <Text style={{marginLeft:25}}>Livros</Text>
      <ScrollView contentContainerStyle={{padding:20}} style={{flex:1}}>
        <View style={{flexDirection:'row',marginBottom:10}}>
          <TouchableOpacity style={{flexDirection:'row'}} onPress={()=>alert('ola')}>
          <Image 
          source={{uri:'https://picsum.photos/200/300'}}
          style={{width:100,height:100}}
          ></Image>
          <Text style={{padding:10}}>Livro teste</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
     
    </View>
  );
}