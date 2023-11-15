import { Button, Container } from '@mui/material';
import { FieldEl, FormEl } from 'components/ContactForm/ContactForm.styled';
import { Section } from 'components/Section/Section.styled';
import { Formik } from 'formik';
import React from 'react';

export const Register = () => {
  return (
    <main>
      <Section>
        <Container>
          <h1 style={{ marginTop: '40px', textAlign: 'center', color: 'gray' }}>
            Registration
          </h1>
          <Formik>
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
              <label htmlFor="mail">E-mail</label>
              <div>
                <FieldEl
                  // as={TextField}
                  type="mail"
                  id="mail"
                  name="mail"
                  placeholder="Enter e-mail ..."
                  label="mail"
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
