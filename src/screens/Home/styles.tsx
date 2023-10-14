import { styled } from 'styled-components/native'

export const HeaderContainer = styled.View`
    margin-left: 10px;
    margin-top: 30px;
    flex-direction: row;
    align-items: center;
`
export const HeaderText= styled.Text`
    font-weight: bold;
    font-size: 25px;
    color: #FFFFFF;
`
export const CardsContainer = styled.View`
    align-self: center;
    margin-top: 50px;
    gap: 15px;
    flex-direction: row;
`

export const CardTotal = styled.TouchableOpacity`
    margin-top: 30px;
    align-self: center;
    gap: 15px;
    background-color: #4E4E4E;
    height: 100px;
    width: 70%;
    border-radius: 10px;
`
export const CardTotalTitle = styled.Text`
    margin-top: 10px;
    margin-left: 15px;
    font-weight: bold;
    font-size: 17px;
    color: white;
`;

export const CardTotalValue = styled.Text`
    margin-top: -7px;
    text-align: center;
    font-weight: bold;
    font-size: 20px;
`;