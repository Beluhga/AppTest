import React, {useState} from 'react';
import { Button } from '../Form/Button';
import { Input } from '../Form/Input';
import {Modal} from 'react-native';
import { DayCard } from '../Form/DayCard';
import { MonthCard } from '../Form/MonthCard';
import { YearCard } from '../Form/YearCard';


import { 
    Container,
    Header,
    Title,
    Form,
    Fields
 } from './styles';

export function Register(){
    const [categoryModalDayOpen, setCategoryModalDayOpen] = useState(false)
    const [categoryModalMonthOpen, setCategoryModalMonthOpen] = useState(false)
    const [categoryModalYearOpen, setCategoryModalYearOpen] = useState(false)

    const [ day, setDay] = useState({
        key: 'data',
        number: 'Date',
    });

    const [month, setMonth] = useState({
        key: 'month',
        month: 'Meses',
    });

    const [year, setYear] = useState({
        key: 'year',
        year: 'Anos',
    });

    function handleOpenSelectCategoryModal(){
        setCategoryModalDayOpen(false)
        setCategoryModalMonthOpen(false)
        setCategoryModalYearOpen(false)
    }

    function handleCloseSelectCategoryModal(){
        setCategoryModalDayOpen(true)
        setCategoryModalYearOpen(true)
        setCategoryModalMonthOpen(true)

    }
    

    return(
        <Container>
            <Header>
                <Title> Data de hoje:</Title>
            </Header>

        <Form>
        
    
        <Input title="Dia" />
        
        <Input 
          title="Mês" 
          onPress={handleCloseSelectCategoryModal}
        /> 

        <Input title="Ano" />
        
        
         <Fields>
        <Button title="OK" />
        </Fields>
        </Form>

        <Modal visible={categoryModalDayOpen}>
            <DayCard 
                  date={day}
                  setCategoryDate={setDay}
                  closeSelectDate={setCategoryModalDayOpen}
            />
        </Modal>

        <Modal visible={categoryModalMonthOpen}>
            <MonthCard
                  month={month}
                  setCategoryDate={setMonth}
                  closeSelectDate={setCategoryModalMonthOpen}
            />
        </Modal>

        <Modal visible={categoryModalYearOpen}>
            <YearCard 
              year={year}
              setCategoryDate={setYear}
              closeSelectDate={setCategoryModalYearOpen}
            />
        </Modal>
        
        </Container>
    )
}
