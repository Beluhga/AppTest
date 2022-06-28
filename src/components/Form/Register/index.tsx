import React from 'react';
import { Button } from '../../Button';
import { useForm} from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver} from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';

import { TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';

import { 
    Container,
    Header,
    Title,
    Form,
    Fields,
 } from './styles';
import { InputForm } from '../InputForm';

 interface FormData {
    day: string;
    month: string;
    year: string;
 }

 const schema = Yup.object().shape({
    day:Yup
    .number()
    .typeError('Informe um valor númerico')
    .positive('O Valor nao pode ser negativo')
    .required('O Dia é obrigatorio'),
    month:Yup
    .number()
    .typeError('Informe um valor númerico')
    .positive('O Valor nao pode ser negativo')
    .required('O Mês é obrigatorio'),
    year:Yup
    .number()
    .typeError('Informe um valor númerico')
    .positive('O Valor nao pode ser negativo')
    .required('O Ano é obrigatorio'),
 })

export function Register(){

  const navigation = useNavigation();

    const {
        control,
        handleSubmit,
        formState: {errors}
    } = useForm({
        resolver: yupResolver(schema)
    });

     function handleRegister(form: FormData | any){

       const data = {
        day: form.day,
        month: form.month,
        year: form.year

       }
        if(form.day === new Date().getDate()){
            
        } else { return Alert.alert('Dia Invalido'); }

        if (form.month === new Date().getMonth() + 1){

        } else {return Alert.alert('Mês Invalido'); }

        if(form.year === new Date().getFullYear()){

        } else { return Alert.alert('Ano Invalido'); }

        Alert.alert('Data enviada com sucesso');

        
        navigation.navigate('Setting', {
            day: form.day,
            month: form.month,
            year: form.year
        
        
        });

        }

    return(


        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

        <Container >

      
            <Header>
                <Title> Data de hoje:</Title>
            </Header>

        <Form>
        
    
        <InputForm
        name="day" 
        control={control}
        placeholder="Dia"
        keyboardType='numeric'
        error={errors.day && errors.day.message}
        />
        
        <InputForm 
        name="month"
        control={control}
        placeholder="Mês"
        keyboardType='numeric'
        error={errors.month && errors.month.message}
        /> 

        <InputForm 
        name="year" 
        control={control}
        placeholder="Ano"
        keyboardType='numeric'
        error={errors.year && errors.year.message}
        />
        
        
         <Fields>
        <Button 
         title="OK" 
         onPress={handleSubmit(handleRegister)}
        />
        </Fields>
        </Form>

     

        </Container>
    </TouchableWithoutFeedback>
     
    )
}
