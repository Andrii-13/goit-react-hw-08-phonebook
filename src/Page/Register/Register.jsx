import { Button, Container } from '@mui/material';
import { FieldEl, FormEl } from 'components/ContactForm/ContactForm.styled';
import { Section } from 'components/Section/Section.styled';
import { Formik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { createNewUser } from 'redux/auth/auth-operations';

export const Register = () => {

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    console.log(values);
    console.log(actions);

    dispatch(createNewUser(JSON.stringify(values)));
    console.log(createNewUser(values));
  };

  return (
    <main>
      <Section>
        <Container>
          <h1 style={{ marginTop: '40px', textAlign: 'center', color: 'gray' }}>
            Registration
          </h1>
          <Formik
            initialValues={{ name: '', email: '', password: '' }}
            onSubmit={handleSubmit}
          >
            <FormEl autoComplete="off">
              <label htmlFor="name">Name</label>
              <div>
                <FieldEl
                  // as={TextField}
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter name ..."
                  label="Name"
                  variant="outlined"
                />

                {/* <FormError name="name" /> */}
              </div>
              <label htmlFor="email">E-mail</label>
              <div>
                <FieldEl
                  // as={TextField}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter e-mail ..."
                  label="email"
                  variant="outlined"
                />

                {/* <FormError name="name" /> */}
              </div>
              <label htmlFor="password">Password</label>
              <div>
                <FieldEl
                  // as={TextField}
                  type="text"
                  id="password"
                  name="password"
                  placeholder="Enter password ..."
                  label="password"
                  variant="outlined"
                />

                {/* <FormError name="name" /> */}
              </div>
              <Button variant="contained" type="submit">
                registration
              </Button>
            </FormEl>
          </Formik>
        </Container>
      </Section>
    </main>
  );
};
