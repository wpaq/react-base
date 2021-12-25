import React from 'react'

import { Container } from '../../styles/GlobalStyles'
import { Title, Paragrafo } from './styled'

import axios from '../../services/axios'

const Login = function Login() {
    return (
        <Container>
            <Title>
                Login
                <small>loren ipsum</small>
            </Title>
            <Paragrafo>text</Paragrafo>
            <button type="button">Enviar</button>
        </Container>
    )
}

export default Login
