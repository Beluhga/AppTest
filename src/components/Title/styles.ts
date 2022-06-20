import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";


export const Container = styled.View`
    background-color: ${({ theme }) => theme.colors.shape};
    border-radius: 20px;
    width: ${RFValue(250)}px;
    align-items: center;
    elevation: 5;
    margin-left: ${RFValue(55)}px;
    position: absolute;
    margin-top: ${RFPercentage(33)}px;
`;

export const Texto = styled.Text`
    font-family: ${({theme }) => theme.fonts.medium};
    font-size: ${RFValue(40)}px;
    color: ${({theme }) => theme.colors.primary};

`;