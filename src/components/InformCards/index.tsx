import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';


import { 
    Container,
    Header,
    Logo,
    Awesome,
    Icon,
    Molds,
    HightlightForm

} from './styles';
import { Title } from '../Title';




export function InformCards() {
    return(
        
        <Container >
         
        <LinearGradient
        start={{x:0, y:0.20}}
        end= {{x:0.5, y:1.0}}
        colors={['#bb48e2', '#79579b']}
         >
         <Icon>
        <Awesome name="navicon"/>
        </Icon>
        <Header>
        
        
        <Molds>
                <Logo source={require('../../../assets/images/react-logo.png')} />
        
                
        </Molds>
        
       
        </Header>
        </LinearGradient>

        <Title />
        <HightlightForm>
        </HightlightForm>
        </Container>
        
    )
}