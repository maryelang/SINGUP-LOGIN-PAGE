import {useState} from 'react'
import { Link } from 'react-router-dom';
import {Container, Box, Paper, TextField, Button, Typography} from '@mui/material' 
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';



export default function Login() {
    const [isError, setIsError] = useState(false);

    const validate = () => {
        setIsError(true);
    }

    const paperStyle={padding: 20, height: '70vh', width:300, margin: "20px auto"}
    return (
        <Container>
            <Paper elevation={10} style={paperStyle}>
                <Box align='Center'>
                <h2>Log In</h2>
                </Box>
                <Box sx={{p:1}}>
                <TextField error={isError} helperText={isError ? "Invalid Username" : ""} label="Username" variant="standard" fullWidth required/>
                </Box>
               <Box sx={{p:1}}>
               <TextField error={isError} helperText={isError ? "Invalid Password" : ""} label="Password" variant="standard" type='password' fullWidth required/>
               </Box>
               <Box sx={{p:1}}>
               <FormControlLabel control={<Checkbox defaultChecked />} label="Remember Me"/>
               </Box>
               <Box sx={{p:1}}>
               <Button variant="contained" fullWidth onClick={validate}>Login</Button>
               </Box>
               <Box sx={{p:1}}>
                <Typography fontSize={(15)}><Link href="#">Forgot Password?</Link></Typography>
               </Box>
               <Box sx={{p:1}}>
                <Typography fontSize={(15)}>Dont have an account? <Link to="/signup">Sign In</Link></Typography>
               </Box>
           </Paper>
        </Container>
    )
}
