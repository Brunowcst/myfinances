import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

import Card from '../../components/card';

import { HeaderContainer, HeaderText ,CardsContainer, CardTotal, CardTotalTitle, CardTotalValue } from './styles'

import IconDollar from 'react-native-vector-icons/Feather'

export default function Home() {
    
    const value = 5500;

  return (
    <View style={{flex:1, backgroundColor: '#222'}}>

        <HeaderContainer>
            <IconDollar name='dollar-sign' size={30} color={'#FFC700'}/>
            <HeaderText>
                MyFinances
            </HeaderText>
        </HeaderContainer>

        <CardsContainer>
        <Card title='Entradas' value={500.01} type={1}/>
        <Card title='Saídas' value={400.5} type={2}/>
        </CardsContainer>

        <CardTotal>
        <CardTotalTitle>
            Resultante total:
        </CardTotalTitle>

        <CardTotalValue style={{color: value > 0 ? '#69BE27' : '#D41818'}}>
            R$ 500.00
        </CardTotalValue>
        </CardTotal>

        <StatusBar style="auto" />
    </View>
  );
}
