import styled from 'styled-components/native';
import { RFValue } from "react-native-responsive-fontsize";
import { TextInput } from "react-native";


export const Container = styled(TextInput)`
    
    width: 100%;
    background-color: ${({theme}) => theme.colors.input};
    border-radius: 10px;
    font-size: ${RFValue(14)}px;
    padding: 10px ;

`;

export const Config = styled.View`
flex-direction: row;
margin-bottom: 10px;

    
`;
