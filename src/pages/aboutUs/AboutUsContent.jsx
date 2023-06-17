import React from 'react'
import { Box, Button, Grid, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const AboutUsContent = () => {
    return (
        <div>
            <div className="banner">
                <img className='bannerImg' src={require("../../images/bannerAllIITs.jpeg")} alt="" srcset="" />
            </div>
            <Box sx={{ my: "2.5rem" }}>
                <Typography component='h1' sx={{ mb: '2.5rem', color: '#07441a', fontSize: '3rem', textAlign: 'center', fontWeight: "500" }}>About Us</Typography>
                <Grid container>
                    <Grid xs={12} sm={0.2} md={0.6} lg={1}></Grid>
                    <Grid xs={12} sm={4.6} md={4.4} lg={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img className='logoImg' src={require("../../images/josaa-logo.jpg")} alt="" srcset="" />
                    </Grid>
                    <Grid xs={12} sm={7} md={6.4} lg={7} sx={{ px: '1rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <Typography component='h1' sx={{ color: '#07441a', pb: '1.1rem', fontSize: '1.8rem', fontWeight: "500" }}>JOSAA Counsellors From IIT</Typography>
                        <Typography component='div' sx={{ color: 'black', fontSize: '1.3rem', textAlign: 'justify', fontWeight: "400" }}>
                            We are students from various IITs and NITs. Our motto is to provide best JOSAA Counselling Helpdesk to our junior younger brothers and sisters. It is often seen that students without doing proper research choose preference on JOSAA portal. They can get better college at the same rank, if they do proper analysis before picking them. We will guide them in choosing the best college at their rank by taking care of their future aspects and interests. We as a senior better know the current scenerio of colleges in India, various branches available and their placement insights. We will guide them to prepare a curated list as per the latest placement index and better performing colleges and branches.
                        </Typography>
                    </Grid>
                    <Grid xs={12} sm={0.2} md={0.6} lg={1}></Grid>
                </Grid>
                <Grid container>
                    <Grid xs={12} sm={0.2} md={0.6} lg={1}></Grid>
                    <Grid xs={12} sm={4.6} md={4.4} lg={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {/* <img className='logoImg' src={require("../../images/josaa-logo.jpg")} alt="" srcset="" /> */}
                    </Grid>
                    <Grid xs={12} sm={7} md={6.4} lg={7} sx={{ px: '1rem' }}>
                        <Typography component='div' sx={{ py: '0.8rem', color: 'black', fontSize: '1.3rem', textAlign: 'justify', fontWeight: "400" }}>
                            Want to get best counselling experience?
                        </Typography>
                        <div className='btns'>
                            <Button className='btns1' sx={{ background: "#2ABA75", p: 0, borderRadius: '2.2rem', border: 1, borderColor: "#2ABA75", '&:hover': { backgroundColor: "white" } }}>
                                <Link className='link' to='/register'>Get Counselling</Link>
                            </Button>
                            <Button sx={{ background: "white", p: 0, borderRadius: '2.2rem', border: 1, borderColor: "#2ABA75", '&:hover': { backgroundColor: "#2ABA75" } }}>
                                <Link className='link2' to='/contactUs'>Contact Us</Link>
                            </Button>
                        </div>
                    </Grid>
                    <Grid xs={12} sm={0.2} md={0.6} lg={1}></Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default AboutUsContent
