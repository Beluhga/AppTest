import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { TextInputProps } from 'react-native';

import { NameInput } from '../NameInput';

import {Container} from './styles';

interface Props extends TextInputProps {
    control: Control;
    name: string;

}

export function InputNameForm({
    control,
    name,
    ...rest

}: Props){
    return(
        <Container >
        <Controller
            control={control}
            render={({field: {onChange, value}}) => (
                <NameInput 
                onChangeText={onChange}
                value={value}
                {...rest}
                />
                )}
                name={name}

        />
        </Container>
    )
}