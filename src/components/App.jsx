import React, { useEffect } from 'react';
import { TitlePhonebook } from './TitlePhonebook/TitlePhonebook';
import { TitleContacts } from './TitleContacts/TitleContacts';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Container } from './Container/Container.styled';
import { Section } from './Section/Section.styled';
import { Loader } from './Loader/loader';
import { selectContactError, selectContactIsLoading } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import ErrMessage from './ErrMessage/ErrMessage';
import { fetchContacts } from '../redux/operations';
import { Box, Button, Stack, TextField } from '@mui/material';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectContactIsLoading);
  const error = useSelector(selectContactError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Section>
        <TitlePhonebook title="Phonebook" />
        <ContactForm />
      </Section>
      <Section>
        <TitleContacts title="Contacts" />
        <Filter />
        <ContactList />
        {/* <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    > */}
      {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
    {/* </Box> */}
        {isLoading && <Loader />}
        {error && <ErrMessage />}
      </Section>
    </Container>
  );
};