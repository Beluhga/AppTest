import React from 'react';
import {TextInputProps} from 'react-native';

import { 
    Container,
    Icon,
    Config,
    
 } from './styles';

    type Props = TextInputProps;
 

export function DataInput({...rest}: Props){
    return(
        
        <Config> 
        <Container {...rest} />
        <Icon name="chevron-down" />
        </Config>


    );
}
