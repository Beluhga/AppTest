import styled from 'styled-components/native';
import { TouchableOpacity} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';


export const Container = styled(TouchableOpacity)`
    
    background-color: ${({theme}) => theme.colors.primary};
    border-radius: 10px;
    align-items: center;
    padding: 7px 35px;
    
`;

export const Title = styled.Text`
    font-family: ${({theme}) =>theme.fonts.medium};
    font-size: ${RFValue(15)}px;
    color: ${({theme}) =>theme.colors.shape};

`;