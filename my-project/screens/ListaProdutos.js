
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView  } from 'react-native';
import { Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';
import { ListItem } from 'react-native-elements';
import axios from 'axios';
import { Header} from 'react-native-elements'



export default function ListaProdutos ({ route, navigation }) {

    const [getData, setData] = useState([]);

    useEffect(() => {

        async function resgatarDados() {
            const result = await axios(
                'http://192.168.0.16:5000/produtos',
            );
            setData(result.data);
        }
        resgatarDados();
    })

    return (

        <View style={[styles.container, {
            flexDirection: "column"
        }]}>

                <View>
                <Header
            
            centerComponent={{ text: 'Lista de Contatos', style: { color: '#fff', fontSize:20 } }}
            rightComponent={
                <Button  
                icon={
                    <Icon
                        name="plus"
                        size={15}
                        color="white"
                    />}
                onPress={()=>navigation.navigate('CadastroProduto')}
                ></Button>}
   />
                   <ScrollView> 
                    
                    {
                        getData.map((l, i) => (
                            <ListItem key={i} bottomDivider onPress={()=>navigation.navigate('')}>
                                <Avatar source={{ uri: "https://previews.123rf.com/images/aurora72/aurora721606/aurora72160600004/59282566-avatar-girls-icon-woman-icon-illustration-face-of-female-icons-cartoon-style-isolated-woman-avatar-f.jpg" }} />
                                <ListItem.Content>
                                    <ListItem.Title>{l.nome}</ListItem.Title>
                                    <ListItem.Subtitle>{l.capacidade}</ListItem.Subtitle>
                                    <ListItem.Subtitle>{l.valor}</ListItem.Subtitle>
                                </ListItem.Content>
                            </ListItem>
                        ))
                    }
                    </ScrollView> 
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










