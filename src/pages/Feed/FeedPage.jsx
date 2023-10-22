import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import styles from './FeedPage.module.scss';
import topWeekImage from './topWeek.jpeg';
import { Container } from '@mui/material';

import {Card, CardContent, Typography, CardActions, Button} from '@mui/material';

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
        <Container className={styles.feedWrapper}>
          <Container sx={{borderLeft: '2px solid #000', borderRight: '2px solid #000'}}>
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
            <section aria-label='for week best' className={styles.weekTopicSection}>
                    <h2 className={styles.title}>Топ недели:</h2>
                    <strong style={{display: 'inline', fontSize: '2rem', float: 'right'}}>Группы</strong>
                    <img src={topWeekImage} className={styles.topWeekImage} alt='best week topic'/>
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
          </Container>
        </Container>
    )
}