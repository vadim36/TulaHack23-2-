import React from 'react'
import { Container } from '@mui/material';
import { TextField } from '@mui/material';

export default function LoginPage() {
    return (
        <Container>
            <h1>Вход в Аккаунт:</h1>
            <hr />
            <TextField>Введите пароль...</TextField>
        </Container>
    );
}