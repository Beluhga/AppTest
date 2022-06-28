import React, { useState } from 'react';
import { Button } from '../../../Button';
import { InputDateForm } from '../InputNameDateForm';
import { InputNameForm } from '../InputNameDateForm/indexName';
import { CheckBox } from 'react-native-elements'
import { useNavigation, useRoute } from '@react-navigation/native';

import { TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { useForm} from 'react-hook-form';


import {
    Container,
    Header,
    Title,
    Main,
    Footer,
    FormData,
    FormColor,
    Test,
    Color,
    Fields
    
} from './styles';


interface FormData {
    name: string;
    birthday: string;
    birthdayMonth: string;
    birthdayYear: string;
    color: string
 }

export function Register2(){
    const [blue, setBlue] = useState(false);
    const [green, setGreen] = useState(false);
    const [red, setRed] = useState(false);
    const [yellow, setYellow] = useState(false);
    const [corSelected, setCorSelected] = useState('')

    const route = useRoute();
    
    /*const dia = route.params?.day;
    const mes = route.params?.month;
    const ano = route.params?.year;*/

    const colorBlue = () => {
        setBlue(true)
        setGreen(false)
        setRed(false)
        setYellow(false)
        setCorSelected('#0000FF')
    }

    const colorGreen = () => {
        setBlue(false)
        setGreen(true)
        setRed(false)
        setYellow(false)
        setCorSelected('#008000')
    }

    const colorRed = () => {
        setBlue(false)
        setGreen(false)
        setRed(true)
        setYellow(false)
        setCorSelected('#FF0000')
    }

    const colorYellow = () => {
        setBlue(false)
        setGreen(false)
        setRed(false)
        setYellow(true)
        setCorSelected('#FFFF00')
    }

    const navigation = useNavigation();

    const {
        control,
        handleSubmit,
    } = useForm();

    async function handleRegister(form: FormData | any){

        const newName = {
            name: form.name,
            birthday: form.birthday,
            birthdayMonth: form.birthdayMonth,
            birthdayYear: form.birthdayYear,
            type: corSelected
        }

        if(!form.name)
        return Alert.alert('Nome é obrigatorio')

        if(!form.birthday)
        return Alert.alert('Dia é obrigatorio')

        if(!form.birthdayMonth)
        return Alert.alert('Mês é obrigatorio')
       
        if(!form.birthdayYear)
            return Alert.alert('Ano é obrigatorio')

        if(!corSelected)
            return Alert.alert('Cor é obrigatorio')

        
        Alert.alert('Dados enviada com sucesso');
        navigation.navigate('Config', {

            nome: form.name,
            dia: route.params?.day,
            mes: route.params?.month,
            ano: route.params?.year,
            birthday: form.birthday,
            birthdayMonth: form.birthdayMonth,
            birthdayYear: form.birthdayYear,
            cor: corSelected

        })

    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

        <Container>
            <Header>
                <Title>Nome</Title>
                <InputNameForm 
                    name="name"
                    control={control}
                    autoCapitalize="sentences"
                    autoCorrect={false}
            />
            </Header>

            <Main>

            <Title>Data de Nascimento</Title>

            <FormData>
            <InputDateForm
                name="birthday" 
                control={control}
                keyboardType='numeric'
                placeholder='Dia'
             />
            <InputDateForm
                name="birthdayMonth" 
                control={control}
                keyboardType='numeric'
                placeholder='Mês'
             />
            <InputDateForm
                name="birthdayYear" 
                control={control}
                keyboardType='numeric'
                placeholder='Ano'
             />
             </FormData>

            </Main>

            <Footer>
            <Title>Cor Preferida</Title>

            <FormColor>

            <Test>
             <Color source={require('../../../../../assets/images/azul.jpg')}/>
            <CheckBox 
                checkedIcon='dot-circle-o'
                checkedColor='black'
                uncheckedIcon='circle-o'
                checked={blue}
                onPress={colorBlue}
            />
             </Test>

             <Test>
             <Color source={require('../../../../../assets/images/verde.jpg')}/>
            <CheckBox 
                checkedIcon='dot-circle-o'
                checkedColor='black'
                uncheckedIcon='circle-o'
                checked={green}
                onPress={colorGreen}
            />
            
             </Test>

             <Test>
             <Color source={require('../../../../../assets/images/vermelho.jpg')}/>
            <CheckBox 
                checkedIcon='dot-circle-o'
                checkedColor='black'
                uncheckedIcon='circle-o'
                checked={red}
                onPress={colorRed}
            />
             </Test>

             <Test>
             <Color source={require('../../../../../assets/images/amarelo.jpg')}/>
            <CheckBox
                checkedIcon='dot-circle-o'
                checkedColor='black'
                uncheckedIcon='circle-o'
                checked={yellow}
                onPress={colorYellow}

            />
             </Test>



            </FormColor>

            <Fields>
            <Button
                title="OK"
                onPress={handleSubmit(handleRegister)}
                />
            </Fields>

            </Footer>



        </Container>
        </TouchableWithoutFeedback>
    )
}