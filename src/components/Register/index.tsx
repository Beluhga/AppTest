import React, { useCallback, useEffect, useState } from 'react';
import { Button } from '../Form/Button';
import { useForm} from 'react-hook-form';
import { InputForm } from '../Form/InputForm';
import * as Yup from 'yup';
import { yupResolver} from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage'
import { TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';



import { 
    Container,
    Header,
    Title,
    Form,
    Fields
 } from './styles';

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

    

    const {
        control,
        handleSubmit,
        formState: {errors}
    } = useForm({
        resolver: yupResolver(schema)
    });

async function handleRegister(form: FormData | any){

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

        console.log(data);
        
    }

    const ProximaTela = () => {
        const navigation = useNavigation(); 
        navigation.navigate("Setting")

    }

    const ExecutarOsDois = function(){
        handleSubmit(handleRegister);
        ProximaTela();
    }

    






        /*try {
            const dataKey = '@testapp:transactions'; // para armazenar

            await AsyncStorage.setItem(dataKey, JSON.stringify(data));
            
            Alert.alert('Data enviada com sucesso');
        } catch (error) {
            console.log(error)

        }
      
    }

    useEffect(() => {
        async function loadData(){
        const data = await AsyncStorage.getItem(dataKey);
        console.log(JSON.parse(data!))
        

        }

        loadData();

    },[])*/

    

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
         onPress={ExecutarOsDois}
        />
        </Fields>
        </Form>

        
        </Container>
        </TouchableWithoutFeedback>

    )
}
