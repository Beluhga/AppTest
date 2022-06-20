import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import { 
    Container,
    Header,
    Logo,
    Awesome,
    Icon,
    Molds

} from './styles';
import { Title } from '../Title';
import { Register } from '../Register';




export function Dashboard() {
    return(
        
      
        <Container>
         
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
        <Register />
        </Container>
        
        
    )
}