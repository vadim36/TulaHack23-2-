import React from 'react'
import AppBar from '@mui/material/AppBar';
import { Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

export default function Header({auth}) {
    return (
        <AppBar sx={{background: '#F0EEE5', color: '#000'}} position='sticky'>
            <Toolbar>
                <Typography variant="h4" sx={{ flexGrow: 1 }}>
                    <Link to='/' className={styles.mainLogo}>
                        Коллаж
                    </Link>
                </Typography>

                <nav style={{flexGrow: 1.2}}>
                    <ul>
                        <li>
                            <Link to="/chats" className={styles.link}>
                                    Чаты
                            </Link>
                        </li>
                    </ul>
                </nav>

                {auth 
                    ? <Link to="/account" style={{all: "unset"}}>
                            <Button variant="contained">Ваш аккаунт</Button>
                            <Button variant="contained">
                                    Выйти
                            </Button>
                    </Link>
                   : <form name="registerForm">
                        <Button variant="contained">
                            <Link to="/log" style={{all: "unset"}}>Войти</Link>
                        </Button>
                        <Button variant="contained">
                            <Link to="/reg" style={{all: "unset"}}>Зарегистрироваться</Link>
                        </Button>
                     </form>
                }
            </Toolbar>
        </AppBar>
    )
}