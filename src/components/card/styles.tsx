import { styled } from 'styled-components/native';

export const CardContainer = styled.TouchableOpacity`
    background-color: #4E4E4E;
    height: 100px;
    width: 45%;
    border-radius: 10px;
`;

export const TitleCard = styled.Text` 
    margin-top: 10px;
    margin-left: 15px;
    font-weight: bold;
    font-size: 17px;
    color: white;
`;

export const ValueEntrada = styled.Text`
    margin-top: 5px;
    text-align: center;
    font-weight: bold;
    font-size: 20px;
    color: #69BE27;
`;

export const ValueSaida = styled.Text`
    margin-top: 5px;
    text-align: center;
    font-weight: bold;
    font-size: 20px;
    color: #D41818;
`;