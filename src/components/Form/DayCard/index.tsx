import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { Button } from '../Button'

import { days } from '../../../utils/Date';

import { 
    Container,
    Header,
    Title,
    Data,
    Date,
    Separator,
    Footer,

 } from './styles';

interface Date {
    key: string;
    number: number;
}

interface Props {
    date: Date;
    setCategoryDate: (date: Date) => void;
    closeSelectDate: () => void;
}

export function DayCard({
    date,
    setCategoryDate,
    closeSelectDate

}: Props) {

    return (
        <Container>
            <Header>

        <Title>Dia</Title>
    
        </Header>

        <FlatList 
        data={days}
        style={{flex: 1, width: '100%'}}
        keyExtractor={(item) => item.key}
        renderItem={({item}) => (
            <Data>
                <Date>{item.number}</Date>
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