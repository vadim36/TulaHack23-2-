import { Typography, Card, CardMedia, CardContent } from '@mui/material'
import React from 'react'

export default function AccountPage() {
    return (
        <article aria-label='for user account' style={{ display: 'flex', 
            flexDirection: 'column', alignItems: 'center', gap: '.7rem'}}
        >
            <Typography variant='h2' sx={{textAlign: 'center', padding: '.5rem'}}>Ваш Аккаунт</Typography>
            <Card sx={{ width: 545 }}>
              <CardMedia
                sx={{ maxHeight: 140 }}
                image=""
                title="user profile image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  User name
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  User info body
                </Typography>
              </CardContent>
            </Card>
        </article>
    )
}