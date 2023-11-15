import { Container } from '@mui/material'
import { Section } from 'components/Section/Section.styled'
import React from 'react'

export const Home = () => {
  return (
    <main>
    <Section>
      <Container>
        <h1 style={{marginTop: '40px', textAlign: 'center', color: 'gray' }}>
          Welcome
        </h1>
      </Container>
    </Section>
  </main>
  )
}
