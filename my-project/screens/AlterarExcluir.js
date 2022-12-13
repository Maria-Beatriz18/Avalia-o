import React,{ useEffect,useState } from 'react';
import { StyleSheet, View } from "react-native";
import { Input } from 'react-native-elements';
import { Button } from 'react-native-elements';
import axios from 'axios';

export default function AlterarExcluir({route,navigation}){

  const [getNome, setNome] =useState("");
  const [getEmail, setEmail] =useState("");
  const [getTelefone, setTelefone] = useState("");
  const [getId, setId] = useState("");
  

  useEffect(()=>{
    if(route.params){
          const { nome } =  route.params; 
          const { email } = route.params;
          const { telefone } =  route.params; 
          const { id } =  route.params;
          
          setNome(nome);
          setEmail(email);
          setTelefone(telefone);
          setId(id);
         
    }
  },[]) 

  function excluirDados(){
    axios.delete('http://professornilson.com/testeservico/clientes/'+getId
   )
   .then(function (response) {
       setNome('')
       setEmail('')
       setTelefone('')
      
     console.log(response);
   })
   .catch(function (error) {
       console.log(error);
   });
}

async function alterarDados(){
await axios.put('http://professornilson.com/testeservico/clientes/'+getId,{
 nome:getNome,
 email:getEmail,
 telefone:getTelefone,
}
)
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
    console.log(error);
});
}

  return (

  <View style={[styles.container, {
  flexDirection: "column"
  }]}>


<View style={{ flex: 2, alignItems:"center", paddingTop:120}}>
<Input placeholder='nome'
onChangeText={text => setNome(text)} value={getNome}
leftIcon={{ type: 'font-awesome', name: 'user', color: 'black' }}
/>
<Input placeholder='email'
onChangeText={text => setEmail(text)} value={getEmail} 
leftIcon={{ type: 'font-awesome', name: 'envelope', color: 'black' }}
/>
<Input placeholder='telefone'
onChangeText={text => setTelefone(text)} value={getTelefone}
leftIcon={{ type: 'font-awesome', name: 'phone', color: 'black' }}
/>
</View>
  
  
<View >
<Button style={{ marginTop:50}} title="alterar"  onPress={()=>alterarDados()}/>
</View>
<View style={{ paddingTop:20}}>
<Button style={{ marginTop:50}} title="excluir"
 buttonStyle={{backgroundColor: 'red'}} onPress={()=>excluirDados()} />
</View>
</View>
);};

const styles = StyleSheet.create({
  container: {
  flex: 1,
  padding: 20,
  },
  });






 


  
  
  
  