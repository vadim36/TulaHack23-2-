import React from 'react'
import AppBar from '@mui/material/AppBar';
import { IconButton, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Header({auth}) {
    return (
        <AppBar position='sticky'>
            <Toolbar>
                <Typography variant="h4" sx={{ flexGrow: 1 }}>
                    <Link to='/'>Коллаж</Link>
                </Typography>

                <nav style={{flexGrow: 1.2}}>
                    <ul>
                        <li>
                            <Link to="/chats" style={{fontSize: '2rem'}}>Чаты</Link>
                        </li>
                    </ul>
                </nav>

                {auth 
                    ? <Link to="/account" style={{all: "unset"}}>
                            <Button variant="contained">Ваш аккаунт</Button>
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