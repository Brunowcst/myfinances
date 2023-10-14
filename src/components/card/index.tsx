import { View, Text } from 'react-native'
import { CardContainer, TitleCard, ValueEntrada, ValueSaida } from './styles';

interface CardProps {
    value: number;
    title: string;
    type: number;
}

export default function Card({value, title, type} : CardProps) {
  return (
    
    <CardContainer>
        <TitleCard>
            {title}:
        </TitleCard>
        {type == 1 ? <ValueEntrada>R${value}</ValueEntrada> : <ValueSaida>R${value}</ValueSaida>}
    </CardContainer>
  )
}