import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';


export const Container = styled.View`
    flex: 1;
    margin-top: 70px;
    padding: 10px 40px;
`;

export const Header = styled.View`
`;
export const Title = styled.Text`
    font-family: ${({theme}) => theme.fonts.medium};
    font-size: ${RFValue(14)}px;
    margin-bottom: 5px;
`;

export const Main = styled.View`

`;

export const FormData = styled.View`
    flex-direction: row;
`;

export const Footer = styled.View`
    flex: 1
`;

export const FormColor = styled.View`
    flex: 1;
    flex-direction: row;
    margin-left: 20px;
    
`;

export const Color = styled.Image`
    width:${RFValue(45)}px;
    height:${RFValue(35)}px;
    border-radius: 13px;

`;

export const Test = styled.View`
    flex-direction: column;
    align-items: center;

`;

export const Fields = styled.View`
    align-items: flex-end;
`;


