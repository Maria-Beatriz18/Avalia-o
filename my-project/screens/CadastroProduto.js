import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { Button } from 'react-native-elements';
import axios from 'axios';


const addUser = async (nome, email, telefone, { navigation }) => {
  const result = await axios.post('http://professornilson.com/testeservico/clientes', {
    nome: nome,
    capacidade: capacidade,
    valor: valor
  })
    .then((response) => {
      navigation.goBack();
    })
    .catch((error) => {
      console.log(error);
    })
}


export default function CadastroProduto({ route, navigation }) {

  const [nome, setNome] = React.useState("");
  const [capacidade, setCapacidade] = React.useState("");
  const [valor, setValor] = React.useState("");

  return (

    <View style={[styles.container, {
      flexDirection: "column"
    }]}>


      <View style={{ flex: 4, alignItems: "center", paddingTop: 120 }}>
        <Input placeholder='nome' value={nome}
          onChangeText={nome => setNome(nome)}
          maxLength={255} />
        <Input placeholder="capacidade" value={capacidade}
          onChangeText={capacidade => setcapacidade(capacidade)}
          maxLength={255} />
        <Input placeholder="preco" value={valor}
          onChangeText={valor => setTelefone(valor)}/>
      </View>


      <View style={{ flex: 2, alignItems: "center", paddingTop: 50 }} >
        <Button style={{ marginTop: 50 }} title="Salvar" onPress={
          () => addUser(nome, email, telefone, { navigation })
        } />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});











