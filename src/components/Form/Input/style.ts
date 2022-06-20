import styled from "styled-components/native";
import { TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { RFValue } from "react-native-responsive-fontsize";


export const Container = styled(TouchableOpacity).attrs({
    activeOpacity: 0.7
})`
    width: 100%;
    background-color: ${({theme}) => theme.colors.input};
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    padding: 13px 14px;
    margin-bottom: 20px;
`;

export const Day = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(10)}px;
    margin-left: 8px;

`;
export const Icon = styled(Entypo)`
    font-size: ${RFValue(20)}px;
    color: ${({theme}) => theme.colors.primary};



`;