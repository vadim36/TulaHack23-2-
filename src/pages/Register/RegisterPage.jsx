import { Container } from '@mui/system';
import React, {useState} from 'react'
import { TextField } from '@mui/material';
import { FormControl } from '@mui/base';
import {InputLabel} from '@mui/material';
import styles from './RegisterPage.module.scss';
import {Button} from '@mui/material';
import {Link} from 'react-router-dom';

export default function RegisterPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    return (
        <Container className={styles.wrapper}>
            <h1 className={styles.mainTitle}>Регистрация:</h1>
            <FormControl className={styles.form}>
                <InputLabel html-for="regFormEmail">
                    Введите вашу электронную почту:
                </InputLabel>
                <TextField id="regFormEmail" 
                    label="Введите вашу почту..." 
                    variant="filled"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)} />
                <InputLabel html-for="regFormEmail">
                    Введите ваш пароль:
                </InputLabel>
                <TextField id="regFormEmail" 
                    label="Введите ваш пароль..." 
                    variant="filled"
                    required
                    value={password}
                    onChange={(event) => setPassword(event.target.value)} />
                <InputLabel html-for="regFormEmail">
                    Повторите ваш пароль:
                </InputLabel>
                <TextField id="regFormEmail" 
                    label="Повторите ваш пароль..." 
                    variant="filled"
                    required
                    value={repeatPassword}
                    onChange={(event) => setRepeatPassword(event.target.value)} />
                <Button className={styles.buttonSubmit} 
                    variant="contained" 
                    color="success"
                    type='submit'>Отправить</Button>
            </FormControl>
            <Container style={{display: 'flex', alignItems: 'center', gap: '.5rem'}}>
                <h3>Уже есть аккаунт?</h3>
                <Button variant="contained">
                    <Link to="/log">Войти</Link>
                </Button>
            </Container>
        </Container>
    );
}