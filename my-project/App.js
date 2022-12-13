import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/Login';
import CadastroUsuarioScreen from './screens/CadastroUsuario';
import ListaProdutosScreen from './screens/ListaProdutos';
import CadastroProdutoScreen from './screens/CadastroProduto'
import AlterarExcluirScreen from './screens/AlterarExcluir';


const Stack = createNativeStackNavigator();

function App() {
return (
<NavigationContainer>
<Stack.Navigator initialRouteName="Login">
<Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
<Stack.Screen name="CadastroUsuario" component={CadastroUsuarioScreen} options={{ headerShown: false }} />
<Stack.Screen name="ListaProdutos" component={ListaProdutosScreen} options={{ headerShown: false }}/>
<Stack.Screen name="CadastroProduto" component={CadastroProdutoScreen}/>
<Stack.Screen name="AlterarExcluir" component={AlterarExcluirScreen}/>

</Stack.Navigator>
</NavigationContainer>
);
}

export default App;