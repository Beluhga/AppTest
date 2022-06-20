import React from 'react';

import { 
    Container,
    Day,
    Icon
    
 } from './style';

 interface Props {
    title: string;
    onPress: () => void;
 }
 

export function Input({
   title,
   onPress
   
}: Props){
    return(
        
        
        <Container onPress={onPress}>
            
        <Day>{title}</Day>
        <Icon name="chevron-down" />
        
            
        </Container>
        
        
        

        

        

    );
}