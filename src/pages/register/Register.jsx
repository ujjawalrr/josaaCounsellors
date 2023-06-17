import React, { useContext, useState } from 'react'
import Navbar from './Navbar'
import { Autocomplete, Box, Button, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Link, useNavigate } from "react-router-dom";
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import axios from 'axios';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const Register = () => {
    const [signupData, setSignupData] = useState({});
    const [error, setError] = useState(null);
    const [inputValueState, setInputValueState] = React.useState('');
    const [inputValueCat, setInputValueCat] = React.useState('');
    const [inputValueHomeState, setInputValueHomeState] = React.useState('');

    const handleChange = (event) => {
        setSignupData({
            ...signupData,
            [event.target.name]: event.target.value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post(`${process.env.REACT_APP_API_KEY}/auth/register`, signupData)
            setError(res.data)
            // openForm()
        }
        catch (error) {
            setError(error.response.data)
            // openForm()
        }

    }
    return (
        <div>
            <Navbar />
            <div className='contentContainer login register'>
                <div className="bg">
                </div>
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
                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="code">Coupon Code</label>
                            </div>
                            <div className="col-75">
                                <input onChange={handleChange} type="text" id="code" className='fname' name="code" placeholder="(optional) Enter the code to get exciting discount" />
                            </div>
                        </div>
                        <div className="buttons">
                            <Button type='submit' onClick={handleSubmit} sx={{ fontSize: '1.3rem', mt: '1.1rem', color: "#2aba75", backgroundColor: "white", py: 1, width: '200px', border: 1, borderColor: "white", borderRadius: 2, '&:hover': { backgroundColor: "#1C4733", color: "#ffffff", border: 1, borderColor: "#ffffff" } }} startIcon={<AppRegistrationIcon />}>Pay Now</Button>
                        </div>
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