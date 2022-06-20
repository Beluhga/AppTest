import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { Button } from '../Button'

import { years } from '../../../utils/DateYear';

import { 
    Container,
    Header,
    Title,
    Data,
    Date,
    Separator,
    Footer,

 } from './styles';

interface Year {
    key: string;
    day: number;
}

interface Props {
    year: Year;
    setCategoryDate: (year: Year) => void;
    closeSelectDate: () => void;
}

export function YearCard({
    year,
    setCategoryDate,
    closeSelectDate

}: Props) {

    return (
        <Container>
            <Header>

        <Title>Ano</Title>
    
        </Header>

        <FlatList 
        data={years}
        style={{flex: 1, width: '100%'}}
        keyExtractor={(item) => item.key}
        renderItem={({item}) => (
            <Data>
                <Date>{item.year}</Date>
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