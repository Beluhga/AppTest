import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container =styled.View`
    flex: 1;
    margin-top: 90px;

`;

export const Header = styled.View`
    margin-left: 55px ;
`;


export const Title = styled.Text`
    
    font-family: ${({theme}) => theme.fonts.medium};
    font-size: ${RFValue(20)}px;
    margin-bottom: 10px;


`;

export const Form = styled.View`
    flex: 1;
    padding: 0px 50px;

`;

export const Fields = styled.View`
    align-items: flex-end;
    
`;

export const LoadContainer = styled.View`
flex: 1;
justify-content: center;
align-items: center;
`;
