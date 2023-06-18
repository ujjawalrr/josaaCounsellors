import React from 'react'
import { Box, Button, Grid, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const WhyUs = () => {
    return (
        <div>
            <Box sx={{ my: { xs: '4rem', sm: "6rem", md: '7rem' } }}>
                <Typography component='h1' sx={{ mb: '3rem', color: '#07441a', fontSize: '3rem', textAlign: 'center', fontWeight: "500" }}>Why Choose Us?</Typography>
                <Grid container sx={{ mb: '1rem' }}>
                    <Grid xs={12} sm={0.2} md={0.6} lg={1}></Grid>
                    <Grid xs={12} sm={7} md={6.4} lg={7} sx={{ px: '1rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <Typography component='h1' sx={{ color: '#07441a', pb: '1.1rem', fontSize: '1.8rem', fontWeight: "500" }}>Experience and Expertise</Typography>
                        <Box sx={{ mb: '12px', display: { xs: "flex", sm: "none" }, alignItems: 'center', justifyContent: 'center' }}>
                            <img className='whyUsImg1' src={require("../../images/expertise.jpg")} alt="" srcset="" />
                        </Box>
                        <Typography component='div' sx={{ color: 'black', fontSize: '1.3rem', textAlign: 'justify', fontWeight: "400" }}>
                            At our JOSAA Counselling Helpdesk, we pride ourselves on our team of highly qualified and experienced counselors. Our experts have in-depth knowledge of the college culture and are well-versed in the latest trends and requirements of industries and markets. With their guidance, you can navigate through the complexities of college selection and make informed decisions.
                        </Typography>
                    </Grid>
                    <Grid xs={12} sm={4.6} md={4.4} lg={3} sx={{ display: { xs: "none", sm: "flex" }, alignItems: 'center', justifyContent: 'center' }}>
                        <img className='whyUsImg1' src={require("../../images/expertise.jpg")} alt="" srcset="" />
                    </Grid>
                    <Grid xs={12} sm={0.2} md={0.6} lg={1}></Grid>
                </Grid>
                <Grid container sx={{ mb: '1rem' }}>
                    <Grid xs={12} sm={0.2} md={0.6} lg={1}></Grid>
                    <Grid xs={12} sm={4.6} md={4.4} lg={3} sx={{ display: { xs: "none", sm: "flex" }, alignItems: 'center', justifyContent: 'center' }}>
                        <img className='whyUsImg' src={require("../../images/personalized_approach.jpg")} alt="" srcset="" />
                    </Grid>
                    <Grid xs={12} sm={7} md={6.4} lg={7} sx={{ px: '1rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <Typography component='h1' sx={{ color: '#07441a', pb: '1.1rem', fontSize: '1.8rem', fontWeight: "500" }}>Personalized Approach</Typography>
                        <Box sx={{ mb: '12px', display: { xs: "flex", sm: "none" }, alignItems: 'center', justifyContent: 'center' }}>
                            <img className='whyUsImg' src={require("../../images/personalized_approach.jpg")} alt="" srcset="" />
                        </Box>
                        <Typography component='div' sx={{ color: 'black', fontSize: '1.3rem', textAlign: 'justify', fontWeight: "400" }}>
                            We understand that every student is unique, with their own aspirations, strengths, and challenges. That's why we take a personalized approach to college counselling. Our counselors work closely with each student, providing one-on-one attention and tailored advice. We take the time to understand your goals, interests, and academic profile to help you find the colleges that are the best fit for you.
                        </Typography>
                    </Grid>
                    <Grid xs={12} sm={0.2} md={0.6} lg={1}></Grid>
                </Grid>
                <Grid container sx={{ mb: '1rem' }}>
                    <Grid xs={12} sm={0.2} md={0.6} lg={1}></Grid>
                    <Grid xs={12} sm={7} md={6.4} lg={7} sx={{ px: '1rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <Typography component='h1' sx={{ color: '#07441a', pb: '1.1rem', fontSize: '1.8rem', fontWeight: "500" }}>Comprehensive Services</Typography>
                        <Box sx={{ display: { xs: "flex", sm: "none" }, alignItems: 'center', justifyContent: 'center' }}>
                            <img className='whyUsImg' src={require("../../images/comprehensive-care.jpg")} alt="" srcset="" />
                        </Box>
                        <Typography component='div' sx={{ color: 'black', fontSize: '1.3rem', textAlign: 'justify', fontWeight: "400" }}>
                            Our JOSAA Counselling helpdesk go beyond just helping you with college selection. We offer a wide range of comprehensive services to support you throughout your counselling journey. From career assessments and major exploration to filling choices, document verification, we provide guidance at every step, ensuring that you have access to all the information you need.
                        </Typography>
                    </Grid>
                    <Grid xs={12} sm={4.6} md={4.4} lg={3} sx={{ display: { xs: "none", sm: "flex" }, alignItems: 'center', justifyContent: 'center' }}>
                        <img className='whyUsImg' src={require("../../images/comprehensive-care.jpg")} alt="" srcset="" />
                    </Grid>
                    <Grid xs={12} sm={0.2} md={0.6} lg={1}></Grid>
                </Grid>
                <Grid container sx={{ mb: '1rem' }}>
                    <Grid xs={12} sm={0.2} md={0.6} lg={1}></Grid>
                    <Grid xs={12} sm={4.6} md={4.4} lg={3} sx={{ display: { xs: "none", sm: "flex" }, alignItems: 'center', justifyContent: 'center' }}>
                        <img className='whyUsImg' src={require("../../images/final_network.jpg")} alt="" srcset="" />
                    </Grid>
                    <Grid xs={12} sm={7} md={6.4} lg={7} sx={{ px: '1rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <Typography component='h1' sx={{ color: '#07441a', pb: '1.1rem', fontSize: '1.8rem', fontWeight: "500" }}>College Network</Typography>
                        <Box sx={{ mb: '12px', display: { xs: "flex", sm: "none" }, alignItems: 'center', justifyContent: 'center' }}>
                            <img className='whyUsImg' src={require("../../images/final_network.jpg")} alt="" srcset="" />
                        </Box>
                        <Typography component='div' sx={{ color: 'black', fontSize: '1.3rem', textAlign: 'justify', fontWeight: "400" }}>
                            Over the years, we have developed strong relationships with numerous students from various colleges. Our extensive network allows us to stay updated on the latest advancement and emerging opportunities in various sector. Through our network, we can provide you with valuable insights and connections to help you stand out among other students.
                        </Typography>
                    </Grid>
                    <Grid xs={12} sm={0.2} md={0.6} lg={1}></Grid>
                </Grid>
                <Grid container sx={{ p: '1rem', backgroundColor: 'rgb(237, 247, 237)' }}>
                    <Grid xs={12} sm={0.8} md={1.4} lg={2}></Grid>
                    <Grid xs={12} sm={10.4} md={9.2} lg={8}>
                        <Typography component='div' sx={{ py: '1rem', color: 'black', fontSize: '1.3rem', textAlign: 'justify', fontWeight: "400" }}>
                            Choosing the right college can make a significant difference in your college journey. At our JOSAA Counselling Helpdesk, we offer expertise, personalized attention, comprehensive services, strong networks and 24 x 7 support. Join us to unlock your potential and achieve your dreams of higher education.
                        </Typography>
                        <Typography component='div' sx={{ py: '1rem', color: 'black', fontSize: '1.3rem', textAlign: 'justify', fontWeight: "400" }}>
                            Take a quick look at the facilities you will be getting :
                        </Typography>
                        <Typography component='div' sx={{ py: '1rem', color: 'black', fontSize: '1.3rem', textAlign: 'justify', fontWeight: "400" }}>
                            1. Enroll Now and make payment.
                        </Typography>
                        <Typography component='div' sx={{ py: '1rem', color: 'black', fontSize: '1.3rem', textAlign: 'justify', fontWeight: "400" }}>
                            2. Based on your input, we will assign you a mentor who will then call you and will ask some more information from you. You tell him your future goals and your choice.
                        </Typography>
                        <Typography component='div' sx={{ py: '1rem', color: 'black', fontSize: '1.3rem', textAlign: 'justify', fontWeight: "400" }}>
                            3. Based on your response on the call, we will analyse the colleges, we think would be suitable at your rank and your choice. Then an online meeting will be arranged with you, where you will be given that preferenced colleges. You can ask as many questions as you want in that meet. After discussing all the things, you can decide the final preference.
                        </Typography>
                        <Typography component='div' sx={{ py: '1rem', color: 'black', fontSize: '1.3rem', textAlign: 'justify', fontWeight: "400" }}>
                            4. Still confused? You can request us to arrange another online meet for you, where all your doubts will be cleared and queries will be answered through proper guidance.
                        </Typography>
                        <Typography component='div' sx={{ py: '1rem', color: 'black', fontSize: '1.3rem', textAlign: 'justify', fontWeight: "400" }}>
                            5. If you think that mentor/counsellor is not guiding you properly, you can contact us on whatsapp to change the counsellor.
                        </Typography>
                        <Typography component='div' sx={{ py: '1rem', color: 'black', fontSize: '1.3rem', textAlign: 'justify', fontWeight: "400" }}>
                            6. Even after the meet, if you need any guidance, we are always available on Whatsapp.
                        </Typography>
                    </Grid>
                    <Grid xs={12} sm={0.8} md={1.4} lg={2}></Grid>
                </Grid>
                <Grid container sx={{ p: '1rem' }}>
                    <Grid xs={12} sm={0.8} md={1.4} lg={2}></Grid>
                    <Grid xs={12} sm={10.4} md={9.2} lg={8}>
                        <Typography component='div' sx={{ borderLeft: 5, my: '2rem', py: '2rem', px: '1rem', backgroundColor: 'rgb(237, 247, 237)', color: 'red', fontSize: '1.3rem', textAlign: 'justify', fontWeight: "400" }}>
                            Note: Never disclose your JOSAA Details to anyone of us. We never ask you for the same.
                        </Typography>
                        <Typography component='div' sx={{ borderLeft: 5, my: '2rem', py: '2rem', px: '1rem', backgroundColor: 'rgb(237, 247, 237)', color: 'red', fontSize: '1.3rem', textAlign: 'justify', fontWeight: "400" }}>
                            Note: We are only responsible for guiding you in selecting the preference. The final call is always yours. Choose the right preference for you.
                        </Typography>
                        <Typography component='div' sx={{ py: '0.8rem', color: 'black', fontSize: '1.3rem', textAlign: 'justify', fontWeight: "400" }}>
                            Enroll now to get the best college at your rank. We offer best counselling helpdesk at the most affordable price. We will be providing our services to first 100 students only. So enroll as early as possible.
                        </Typography>
                        <div className='btns'>
                            <Button className='btns1' sx={{ background: "#2ABA75", p: 0, borderRadius: '2.2rem', border: 1, borderColor: "#2ABA75", '&:hover': { backgroundColor: "white" } }}>
                                <Link className='link' to='/register'>Get Counselling</Link>
                            </Button>
                            <Button sx={{ background: "white", p: 0, borderRadius: '2.2rem', border: 1, borderColor: "#2ABA75", '&:hover': { backgroundColor: "#2ABA75" } }}>
                                <Link className='link2' to='/contactUs'>Contact Us</Link>
                            </Button>
                        </div>
                        <Typography component='div' sx={{ pt: '2.5rem', color: 'black', fontSize: '1.3rem', textAlign: 'justify', fontWeight: "400" }}>
                            You can also reach out to us via mail <b>josaacounsellors@gmail.com</b>
                        </Typography>
                    </Grid>
                    <Grid xs={12} sm={0.8} md={1.4} lg={2}></Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default WhyUs
