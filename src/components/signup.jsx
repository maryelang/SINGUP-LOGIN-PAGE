import {useState} from 'react'
import { Link } from 'react-router-dom';
import {Container, Box, Paper, TextField, Button, Typography} from '@mui/material' 


export default function Signup() {
    const [isError, setIsError] = useState(false);

    const validate = () => {
        setIsError(true);
    }

    const paperStyle={padding: 20, height: '60vh', width:300, margin: "20px auto"}
    return (
        <Container>
            <Paper elevation={10} style={paperStyle}>
                <Box align='Center'>
                <h2>Sign Up</h2>
                </Box>
                <Box sx={{p:1}}>
                <TextField error={isError} helperText={isError ? "Invalid Email" : ""} label="Email" variant="standard" fullWidth required/>
                </Box>

                <Box sx={{p:1}}>
                <TextField error={isError} helperText={isError ? "Invalid Username" : ""} label="Username" variant="standard" fullWidth required/>
                </Box>
                
               <Box sx={{p:1}}>
               <TextField error={isError} helperText={isError ? "Invalid Password" : ""} label="Password" variant="standard" type='password' fullWidth required/>
               </Box>
               
               <Box sx={{p:1}}>
               <Button variant="contained" fullWidth onClick={validate}>Sign Up</Button>
               </Box>
               
               <Box sx={{p:1}}>
                <Typography fontSize={(15)}>Already have an account? <Link to="/">Log In</Link></Typography>
               </Box>
           </Paper>
        </Container>
    )
}
