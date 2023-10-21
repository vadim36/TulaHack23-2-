import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import styles from './FeedPage.module.scss';

import {Card, CardMedia, CardContent, Typography, CardActions, Button} from '@mui/material'
import axios from 'axios';

export default function FeedPage(props) {

    function getRandomTopics() {
        const randomTopics = [];
        for (let index = 0; index < 2; index++) {
            randomTopics[index] = 
                props.tags[Math.floor(Math.random() * props.tags.length)]
        }
        return randomTopics;
    }

    return (
        <React.Fragment>
            <section aria-label='for best topics'>
             <Swiper
               spaceBetween={60}
               slidesPerView={4}
               style={{borderBottom: '2px solid #000'}}
             >
                {props.tags.map((tag) => 
                    <SwiperSlide className={styles.tag} key={tag.id}>{tag.body}</SwiperSlide>)}
             </Swiper>
            </section>
            <section aria-label='for week best'>
                    <h2 className={styles.title}>Топ недели:</h2>
                    <strong style={{display: 'inline', fontSize: '2rem', float: 'right'}}>Группы</strong>
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={1}
                    >
                        {getRandomTopics().map((topic) => 
                            <SwiperSlide key={topic.id}>
                                <Card variant='outlined'> 
                                  <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                      {topic.body}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                      Увлкательное хобби
                                    </Typography>
                                  </CardContent>
                                  <CardActions>
                                    <Button variant='contained' size="small">Learn More</Button>
                                  </CardActions>
                                </Card>
                            </SwiperSlide>)}
                    </Swiper>
            </section>
        </React.Fragment>
    )
}