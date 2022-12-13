import React from "react";
import { StyleSheet, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { Button } from 'react-native-elements';
import { Header} from 'react-native-elements'


export default function CadastroUsuario({route,navigation}){

  return (


    
  <View style={[styles.container, {
  flexDirection: "column"
  }]}>

<View>
                <Header
            
            centerComponent={{ text: 'Usuário', style: { color: '#fff', fontSize:20 } }}
            leftComponent={
                <Button  
                icon={
                    <Icon
                        name="arrow-left"
                        size={15}
                        color="white"
                    />}
                onPress={()=>navigation.navigate('Login')}
                ></Button>}
   />
</View>

<View style={{ flex: 4, alignItems:"center", paddingTop:120}}>

<Input placeholder="nome" leftIcon={{ type: 'font-awesome', name: 'user' , color:'black'}}/>

<Input placeholder="Email" leftIcon={{ type: 'font-awesome', name: 'envelope' , color:'black'}}/>

<Input placeholder="Senha" secureTextEntry={true} leftIcon={{ type: 'font-awesome', name: 'lock' , color:'black'}}/>

</View>
  
  
<View style={{ flex: 2, alignItems:"center", paddingTop:100}} >
<Button style={{ marginTop:50}} 
title="Salvar" onPress={()=>navigation.navigate('Login')}/>
</View>
</View>
);};

const styles = StyleSheet.create({
  container: {
  flex: 1,
  padding: 20,
  },
  });






 