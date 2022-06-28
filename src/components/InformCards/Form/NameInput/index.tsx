import React from 'react';
import {TextInputProps} from 'react-native';

import { 
    Container,
    Config
  
    
 } from './styles';

 type Props = TextInputProps;
 

export function NameInput({...rest}: Props){
    return(
        
        <Config> 
        <Container {...rest} />
        </Config>

    );
}