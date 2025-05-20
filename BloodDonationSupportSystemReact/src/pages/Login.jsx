import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import {
    Button,
    Box,
    TextField,
    Paper,
    Typography
} from '@mui/material';

export default function Login() {

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const { username, password } = data;

        // Simple mock auth logic
        if (username === 'admin' && password === '1234') {
            navigate('/private', { state: { username } });
        } else {
            alert('Invalid username or password');
        }
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 10}}>
            <Paper elevation={3} sx={{ p: 4, width: 300 }}>
                <Typography variant="h5" gutterBottom>Login</Typography>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        label="Username"
                        fullWidth
                        margin="normal"
                        {...register('username', { required: 'Username is required' })}
                        error={!!errors.username}
                        helperText={errors.username?.message}
                    />
                    <TextField
                        label="Password"
                        type="password"
                        fullWidth
                        margin="normal"
                        {...register('password', { required: 'Password is required' })}
                        error={!!errors.password}
                        helperText={errors.password?.message}
                    />
                    <Button variant="contained" type="submit" fullWidth sx={{ mt: 2 }}>
                        Login
                    </Button>
                </form>
            </Paper>
        </Box>
    );
}
