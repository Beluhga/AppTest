import styled from 'styled-components/native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize'
import { FontAwesome } from '@expo/vector-icons';


export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme}) => theme.colors.background }
`;

export const Header = styled.View`
    width: 100%;
    height: ${RFPercentage(30)}px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    padding-top: ${RFValue(20)}px;
    padding-bottom: ${RFValue(70)}px;

`;


export const Molds = styled.View`
    flex-direction: row;
    align-items: center;

`;

export const Logo = styled.Image`
    width: ${RFValue(120)}px;
    height: ${RFValue(120)}px;
    border-radius: ${RFValue(140)}px;
`;

export const Awesome = styled(FontAwesome)`
    color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFValue(24)}px; 
`;

export const Icon = styled.View`
    align-items: flex-end;
    margin-top: ${RFValue(30)}px;
    margin-right: ${RFValue(20)}px;

`

export const Main = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;

`;

export const Texto = styled.Text`
    font-size: 40px;
`;

export const Idade = styled.Text`
    font-size: 40px;
`;