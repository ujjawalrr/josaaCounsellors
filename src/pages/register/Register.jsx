import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import { Alert, AlertTitle, Autocomplete, Box, Button, Grid, Snackbar, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import axios from 'axios';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import DiscountIcon from '@mui/icons-material/Discount';
import CheckIcon from '@mui/icons-material/Check';
import CircularProgress, {
    circularProgressClasses,
  } from '@mui/material/CircularProgress';

const Register = () => {
    const [signupData, setSignupData] = useState({});
    const [errorDiscount, setErrorDiscount] = useState(null);
    const [discountTitle, setDiscountTitle] = useState("Flat Rs.200 discount");
    const [discountDesc, setDiscountDesc] = useState("Pay Rs.799");
    const [inputValueState, setInputValueState] = React.useState('');
    const [inputValueCat, setInputValueCat] = React.useState('');
    const [inputValueHomeState, setInputValueHomeState] = React.useState('');
    const [error, setError] = useState(null);
    const [severity, setSeverity] = useState(null);
    const [background, setBackground] = useState(null);
    const [color, setColor] = useState(null);
    const [applyBtnTxt, setApplyBtnTxt] = useState("Apply");
    const [applyBtnIcon, setApplyBtnIcon] = useState(<DiscountIcon />);
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
            const res = await axios.post(`${process.env.REACT_APP_API_KEY}/auth/register`, signupData)
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

    const handleChange = (event) => {
        setSignupData({
            ...signupData,
            [event.target.name]: event.target.value,
        })
    }
    const handleDiscount = async (e) => {
        e.preventDefault()
        setApplyBtnTxt("Checking");
        setApplyBtnIcon(<>
          <CircularProgress
            variant="indeterminate"
            disableShrink
            sx={{
              color: '#2ABA75',
              animationDuration: '550ms',
              [`& .${circularProgressClasses.circle}`]: {
                strokeLinecap: 'round',
              },
            }}
            size={20}
            thickness={4}
          /></>);
        try {
            const res = await axios.post(`${process.env.REACT_APP_API_KEY}/auth/discount`, signupData)
            setApplyBtnTxt("Applied");
        setApplyBtnIcon(<CheckIcon color="#2ABA75" />);
            setErrorDiscount(null)
            setDiscountTitle(`${res.data.code} applied successfully`)
            setDiscountDesc(`Avail Rs.${res.data.value} discount. Pay Rs.${999 - res.data.value}`)
        }
        catch (error) {
            setApplyBtnTxt("Apply");
        setApplyBtnIcon(<DiscountIcon />);
            setErrorDiscount(error.response.data)

        }
    }
    return (
        <div>
            <Navbar />
            <div className='contentContainer login register'>
                <div className="bg">
                </div>
                <div className="mail">
                    <a href="mailto:josaacounsellors@gmail.com" target="_blank" rel="noopener noreferrer">
                        <img className="mail_img"
                            src={require("../../images/email_icon.png")} />
                    </a>
                </div>
                {/* <div className="telegram">
                    <a href="https://t.me/+JNWP8AHrA3tjN2U9" target="_blank" rel="noopener noreferrer">
                        <img className="telegram_img"
                            src={require("../../images/telegram.png")} />
                        <Alert sx={{ fontSize: '1rem', textAlign: 'justify' }} icon={<AdsClickIcon fontSize="inherit" />} severity="success">
                            <AlertTitle sx={{ fontSize: '1rem' }}>Click here</AlertTitle>
                            <strong>To get access to free Telegram Group</strong>
                        </Alert>
                    </a>
                </div> */}
                <div className="container">
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', pb: '1.1vw' }}>
                        <Typography variant="h4" component="h2" sx={{ color: 'white', fontSize: '2.5rem' }}>
                            Register!
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
                                <label htmlFor="gender">Gender</label>
                            </div>
                            <div className="col-75">
                                <FormControl sx={{ p: 1, color: 'white' }}>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-controlled-radio-buttons-group"
                                        name="gender"
                                        value={signupData.gender}
                                        onChange={handleChange}
                                    >
                                        <FormControlLabel value="Male" control={<Radio color="default" />} label="Male" />
                                        <FormControlLabel value="Female" control={<Radio color="default" />} label="Female" />
                                        <FormControlLabel value="Transgender" control={<Radio color="default" />} label="Transgender" />
                                        <FormControlLabel value="Others" control={<Radio color="default" />} label="Others" />
                                    </RadioGroup>
                                </FormControl>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="state">State</label>
                            </div>
                            <div className="col-75">
                                <Autocomplete
                                    value={signupData.state}
                                    sx={{ width: '100%', backgroundColor: 'white', borderRadius: '10px', py: 0 }}
                                    onChange={(event, newValue) => {
                                        setSignupData({
                                            ...signupData,
                                            state: newValue,
                                        })
                                    }}
                                    inputValue={inputValueState}

                                    onInputChange={(event, newInputValue) => {
                                        setInputValueState(newInputValue);
                                    }}
                                    id="controllable-states-demo"
                                    options={states}
                                    renderInput={(params) => <TextField {...params} placeholder="Choose Your State of Residence" />}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="city">City</label>
                            </div>
                            <div className="col-75">
                                <input onChange={handleChange} type="text" id="city" className='fname' name="city" placeholder="Enter Your City" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="fname">Home State</label>
                            </div>
                            <div className="col-75">
                                <Autocomplete
                                    value={signupData.homeState}
                                    sx={{ width: '100%', backgroundColor: 'white', borderRadius: '10px', py: 0 }}
                                    onChange={(event, newValue) => {
                                        setSignupData({
                                            ...signupData,
                                            homeState: newValue,
                                        })
                                    }}
                                    inputValue={inputValueHomeState}

                                    onInputChange={(event, newInputValue) => {
                                        setInputValueHomeState(newInputValue);
                                    }}
                                    id="controllable-states-demo"
                                    options={states}
                                    renderInput={(params) => <TextField {...params} placeholder="State of passing class XII Examination" />}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="category">Category</label>
                            </div>
                            <div className="col-75">
                                <Autocomplete
                                    value={signupData.category}
                                    sx={{ width: '100%', backgroundColor: 'white', borderRadius: '10px', py: 0 }}
                                    onChange={(event, newValue) => {
                                        setSignupData({
                                            ...signupData,
                                            category: newValue,
                                        })
                                    }}
                                    inputValue={inputValueCat}

                                    onInputChange={(event, newInputValue) => {
                                        setInputValueCat(newInputValue);
                                    }}
                                    id="controllable-states-demo"
                                    options={category}
                                    renderInput={(params) => <TextField {...params} placeholder="Choose your category" />}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="pwd">Whether PWD</label>
                            </div>
                            <div className="col-75">
                                <FormControl sx={{ p: 1, color: 'white' }}>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-controlled-radio-buttons-group"
                                        name="pwd"
                                        value={signupData.pwd}
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
                                <label htmlFor="mainsRank">JEE Mains Rank</label>
                            </div>
                            <div className="col-75">
                                <input onChange={handleChange} type="text" id="mainsRank" className='fname' name="mainsRank" placeholder="Enter Your JEE Mains CRL" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="mainsCategoryRank">Category Rank</label>
                            </div>
                            <div className="col-75">
                                <input onChange={handleChange} type="text" id="mainsCategoryRank" className='fname' name="mainsCategoryRank" placeholder="Enter Your JEE Mains Category Rank" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="advRank">JEE Adv Rank</label>
                            </div>
                            <div className="col-75">
                                <input onChange={handleChange} type="text" id="advRank" className='fname' name="advRank" placeholder="Enter Your JEE Advanced CRL" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="advCategoryRank">Category Rank</label>
                            </div>
                            <div className="col-75">
                                <input onChange={handleChange} type="text" id="advCategoryRank" className='fname' name="advCategoryRank" placeholder="Enter Your JEE Advanced Category Rank" />
                            </div>
                        </div>
                        <Typography component='h1' sx={{ pt: '1rem', color: '#07441A', fontSize: '1.8rem', fontWeight: "500" }}>Have a discount code?</Typography>
                        <Typography component='div' sx={{ py: '0.5rem', color: 'white', fontSize: '1.5rem', fontWeight: "400" }}>
                            <input onChange={handleChange} type="text" id="code" className='fname' name="code" placeholder="Discount Code (Optional)" />
                            <Button onClick={handleDiscount} sx={{ fontSize: '1rem', color: "#2aba75", backgroundColor: "white", py: 0.7, width: '150px', border: 1, borderColor: "white", borderRadius: 2, '&:hover': { backgroundColor: "#1C4733", color: "#ffffff", border: 1, borderColor: "#ffffff" } }} startIcon={applyBtnIcon}>{applyBtnTxt}</Button>
                        </Typography>
                        <Typography component='div' sx={{ color: 'red', fontSize: '1.4rem', fontWeight: "500" }}>
                            {errorDiscount}
                        </Typography>
                        <Alert severity="success" sx={{ my: '0.5rem', fontSize: "1.4rem", textAlign: 'justify', backgroundColor: "rgb(237, 247, 237)", color: "rgb(30, 70, 32)" }}>
                            <AlertTitle>{discountTitle}</AlertTitle>
                            {discountDesc} <span style={{ textDecoration: 'line-through' }}>Rs.999</span> Only
                        </Alert>
                        <Grid container sx={{ py: '1rem' }}>
                            <Grid xs={12} sm={4.8} md={5} lg={4} sx={{ display: "flex", alignItems: 'center', justifyContent: 'center' }}>
                                <img className='qrImg' src={require("../../images/paymentQRcode.jpeg")} alt="" />
                            </Grid>
                            <Grid xs={12} sm={7.2} md={7} lg={8} sx={{ px: '1rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

                                <Typography component='h1' sx={{ color: 'white', fontSize: '1.4rem', fontWeight: "400", textAlign: 'justify' }}>To make payment, scan this QR Code from any UPI App or you can pay directly to our UPI ID josaacounsellors@paytm</Typography>
                                <Typography component='h1' sx={{ color: 'white', fontSize: '1.4rem', fontWeight: "400", textAlign: 'justify' }}>After making the payment, fill your UPI Transaction ID OR UPI Reference Number below and Submit.</Typography>
                            </Grid>
                        </Grid>
                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="paymentID">Payment Details</label>
                            </div>
                            <div className="col-75">
                                <input onChange={handleChange} type="text" id="paymentID" className='fname' name="paymentID" placeholder="Enter UPI Transaction ID/UPI Reference Number" />
                            </div>
                        </div>
                        {/* <FormControlLabel sx={{ color: 'black', py: '0rem', my: '0rem', fontSize: '1.4rem' }} control={<Checkbox
                            sx={{
                                color: '#2ABA75', fontSize: '1.4rem',
                                '&.Mui-checked': {
                                    color: '#2ABA75',
                                },
                            }}
                        />} label="" /> */}
                        <div className="buttons">
                            <Button type='submit' onClick={handleSubmit} sx={{ fontSize: '1.3rem', mt: '1.1rem', color: "#2aba75", backgroundColor: "white", py: 1, width: '200px', border: 1, borderColor: "white", borderRadius: 2, '&:hover': { backgroundColor: "#1C4733", color: "#ffffff", border: 1, borderColor: "#ffffff" } }} startIcon={<HowToRegIcon />}>Submit</Button>
                        </div>
                        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                            <Alert onClose={handleClose} severity={severity} sx={{ width: '90%', fontSize: "1.6rem", textAlign: 'justify', backgroundColor: { background }, color: { color } }}>
                                {error}
                            </Alert>
                        </Snackbar>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register

const category = ["General", "GEN-EWS", "OBC-NCL", "SC", "ST"]
const states = [
    "Andaman and Nicobar Islands",
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chandigarh",
    "Chhattisgarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Ladakh",
    "Lakshadweep",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Puducherry",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
];