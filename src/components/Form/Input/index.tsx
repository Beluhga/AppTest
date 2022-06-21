import React from 'react';
import {TextInputProps} from 'react-native';

import { 
    Container,
    Icon,
    Config
  
    
 } from './style';

 type Props = TextInputProps;
 

export function Input({...rest}: Props){
    return(
        
        <Config> 
        <Container {...rest} />
        <Icon name="chevron-down" />
        </Config>

    );
}



