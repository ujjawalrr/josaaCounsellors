import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import { Box, Button, Snackbar, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import axios from 'axios';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const ContactUs = () => {
  const [signupData, setSignupData] = useState({});
  const [error, setError] = useState(null);
  const [severity, setSeverity] = useState(null);
  const [background, setBackground] = useState(null);
  const [color, setColor] = useState(null);

  const handleChange = (event) => {
    setSignupData({
      ...signupData,
      [event.target.name]: event.target.value,
    })
  }
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_KEY}/auth/contactUs`, signupData)
      setError(res.data)
      setSeverity("success")
      setBackground("rgb(237, 247, 237)")
      setColor("rgb(30, 70, 32)")
      handleClick()
    }
    catch (error) {
      setError(error.response.data)
      setSeverity("error")
      setBackground("rgb(211, 47, 47)")
      setColor("white")
      handleClick()
    }
  }
  window.onclick = function (event) {
    setOpen(false)
  }
  return (
    <div>
      <Navbar />
      <div className='contentContainer login contactUs'>
        <div className="bg">
        </div>
        <div className="mail">
          <a href="mailto:josaacounsellors@gmail.com" target="_blank" rel="noopener noreferrer">
            <img className="mail_img"
              src={require("../../images/email_icon.png")} alt='' />
          </a>
        </div>
        <div className="container">
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', pb: '1.1vw' }}>
            <Typography variant="h4" component="h2" sx={{ color: 'white', fontSize: '2.5rem' }}>
              Contact Us!
            </Typography>
          </Box>
          <form action="none">
            <div className="row">
              <div className="col-25">
                <label htmlFor="name">Name</label>
              </div>
              <div className="col-75">
                <input onChange={handleChange} type="text" id="name" className='fname' name="name" placeholder="Enter Your Name" />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="email">Email</label>
              </div>
              <div className="col-75">
                <input onChange={handleChange} type="text" id="email" className='fname' name="email" placeholder="Enter Your Email" />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="phone">Phone</label>
              </div>
              <div className="col-75">
                <input onChange={handleChange} type="text" id="phone" className='fname' name="phone" placeholder="Enter Your Phone Number" />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="purchased">Purchased</label>
              </div>
              <div className="col-75">
                <FormControl sx={{ p: 1, color: 'white' }}>
                  <RadioGroup
                    row
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="purchased"
                    value={signupData.purchased}
                    onChange={handleChange}
                  >
                    <FormControlLabel value="Yes" control={<Radio color="default" />} label="Yes" />
                    <FormControlLabel value="No" control={<Radio color="default" />} label="No" />
                  </RadioGroup>
                </FormControl>
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="message">Message</label>
              </div>
              <div className="col-75 messageTxt">
                <TextField
                  id="outlined-multiline-static"
                  multiline
                  rows={4}
                  name='message'
                  onChange={handleChange}
                  placeholder='Your Message'
                  sx={{ width: '100%' }}
                />
              </div>
            </div>
            <div className="buttons">
              <Button type='submit' onClick={handleSubmit} sx={{ fontSize: '1.3rem', mt: '1.1rem', color: "#2aba75", backgroundColor: "white", py: 1, width: '200px', border: 1, borderColor: "white", borderRadius: 2, '&:hover': { backgroundColor: "#1C4733", color: "#ffffff", border: 1, borderColor: "#ffffff" } }} startIcon={<ContactPageIcon />}>Send</Button>
            </div>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert onClose={handleClose} severity={severity} sx={{ width: { xs: '100%', sm: "90%" }, fontSize: "1.6rem", textAlign: 'justify', backgroundColor: { background }, color: { color } }}>
                {error}
              </Alert>
            </Snackbar>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactUs