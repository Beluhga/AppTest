import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { Button } from '../Button'

import { months } from '../../../utils/DateMonth';

import { 
    Container,
    Header,
    Title,
    Data,
    Date,
    Separator,
    Footer,

 } from './styles';

interface Months {
    key: string;
    month: string;
}

interface Props {
    month: Months;
    setCategoryDate: (month: Months) => void;
    closeSelectDate: () => void;
}

export function MonthCard({
    month,
    setCategoryDate,
    closeSelectDate

}: Props) {

    return (
        <Container>
            <Header>

        <Title>Mes</Title>
    
        </Header>

        <FlatList 
        data={months}
        style={{flex: 1, width: '100%'}}
        keyExtractor={(item) => item.key}
        renderItem={({item}) => (
            <Data>
                <Date>{item.month}</Date>
            </Data>
        )}
        ItemSeparatorComponent={() => <Separator />}
        />

        <Footer>
            <Button title="Selecionar" />
        </Footer>
        </Container>
    )
         
}