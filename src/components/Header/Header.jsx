import React from 'react'
import AppBar from '@mui/material/AppBar';
import { IconButton, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Header({auth}) {
    return (
        <AppBar position='sticky'>
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    Коллаж
                </Typography>

                {auth 
                    ? <Button variant="contained">
                        <Link to="/account" style={{all: "unset"}}>Ваш аккаунт</Link>
                    </Button>
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