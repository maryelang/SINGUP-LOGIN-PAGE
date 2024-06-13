import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Box, Paper, TextField, Button, Typography } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import supabase from '../Service/Supabase';

export default function Login() {
    const paperStyle = { padding: 20, height: '60vh', width: 300, margin: "20px auto" };
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErroMessage] = useState("Something wen't wrong");

    const handleLogin = async () => {
        let { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password
        })
        if (error !== null) {
            setIsError(true);
            setErroMessage(error.message);
            return
        }

        if (data !== null) {
            navigate("/dashboard");
        }
    }

    return (
        <Container>
            <Paper elevation={10} style={paperStyle}>
                <Box align='center'>
                    <h2>Log In</h2>
                    {
                        isError &&
                        <Box>
                            <Typography color="red" align="center">{errorMessage}</Typography>
                        </Box>
                    }
                </Box>
                <Box sx={{ p: 1 }}>
                    <TextField label="Username" variant="standard" fullWidth required onChange={(e) => setEmail(e.target.value)}/>
                </Box>
                <Box sx={{ p: 1 }}>
                    <TextField label="Password" variant="standard" type='password' fullWidth required onChange={(e) => setPassword(e.target.value)}/>
                </Box>
                <Box sx={{ p: 1 }}>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Remember Me" />
                </Box>
                <Box sx={{ p: 1 }}>
                    {/* Wrap the Button inside a Link component */}
                    <Button variant="contained" fullWidth onClick={handleLogin} style={{ textDecoration: 'none'}}>
                        Login
                    </Button>
                </Box>
                <Box sx={{ p: 1 }}>
                    <Typography fontSize={15}><Link to="#">Forgot Password?</Link></Typography>
                </Box>
                <Box sx={{ p: 1 }}>
                    <Typography fontSize={15}>Don't have an account? <Link to="/signup">Sign Up</Link></Typography>
                </Box>
            </Paper>
        </Container>
    )
}
