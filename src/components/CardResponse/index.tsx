import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useRoute } from '@react-navigation/native';


import { 
    Container,
    Header,
    Logo,
    Awesome,
    Icon,
    Molds,
    Main,
    Texto,
    Idade

} from './styles';

import { Title } from '../Title';

export function CardResponse() {

    const route = useRoute();

    const name = route.params?.nome;
    const dia = route.params?.dia;
    const mes = route.params?.mes;
    const ano = route.params?.ano;
    const birthday = route.params?.birthday;
    const birthdayMonth = route.params?.birthdayMonth;
    const birthdayYear = route.params?.birthdayYear;
    const cor = route.params?.cor;


    function idade(ano_aniversario: number, mes_aniversario: number, dia_aniversario: number): number{
        var d= new Date(ano, mes, dia ),

            ano_atual = d.getFullYear(),
            mes_atual = d.getMonth(),
            dia_atual = d.getDate(),

            dia_aniversario = +birthday,
            mes_aniversario = +birthdayMonth,
            ano_aniversario = +birthdayYear,

            quantos_anos = ano_atual - ano_aniversario;

            if(mes_atual < mes_aniversario || mes_atual == mes_aniversario && dia_atual < dia_aniversario) {
                quantos_anos--
            }

            return quantos_anos < 0 ? 0 : quantos_anos;
    }
    
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
        <Main >
            <Texto style={{color: `${cor}`}}>
                    {name}
            </Texto>

            <Idade style={{color: `${cor}`}}>
                tem {idade()} anos
            </Idade>
        
        </Main>

        </Container>
        
    )
}