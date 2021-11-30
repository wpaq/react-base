import React from 'react'

import { Container } from '../../styles/GlobalStyles';
import { Title, Paragrafo } from './styled';

// eslint-disable-next-line react/function-component-definition
export default function Login() {
    return(
      <Container>
        <Title>
          Login
          <small>loren ipsum</small>
        </Title>
        <Paragrafo>text</Paragrafo>
      </Container>
    )
}
