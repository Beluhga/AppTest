import styled from "styled-components/native";
import { Entypo } from '@expo/vector-icons';
import { RFValue } from "react-native-responsive-fontsize";
import { TextInput } from "react-native";


export const Container = styled(TextInput)`
    background-color: ${({theme}) => theme.colors.input};
    border-top-left-radius: 10px;
    border-top-right-radius: 0px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 0px;
    font-size: ${RFValue(14)}px;
    margin-left: ${RFValue(20)}px;
    padding: 5px ;

`;

export const Icon = styled(Entypo)`
    align-items: center;
    padding: 10px ;
    border-top-left-radius: 0px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 10px;
    font-size: ${RFValue(20)}px;
    color: ${({theme}) => theme.colors.primary};
    background-color: ${({theme}) => theme.colors.input};


`;

export const Config = styled.View`
flex-direction: row;
margin-bottom: 10px;

`;
