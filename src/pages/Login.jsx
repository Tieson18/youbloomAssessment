import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
// import { AuthContext } from '../context/AuthContext';

export default function Login() {
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuthContext()
    const navigate = useNavigate();

    const validatePhone = (value) => {
        if (!value) return 'Phone number is required';

        const e164Regex = /^\+[1-9]\d{7,14}$/;

        if (!e164Regex.test(value)) {
            return 'Enter a valid international phone number (e.g., +14155552671)';
        }

        return '';
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const err = validatePhone(phone);
        if (err) {
            setError(err);
            return;
        }
        login();
        navigate('/main');
    };
    return (
        <Box component={"main"} className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
            <Stack component={"section"} className="max-w-md w-full bg-white p-6! rounded shadow items-center justify-center">
                <Typography variant="h5" className="text-2xl font-semibold mb-4">Sign in</Typography>
                <form onSubmit={onSubmit}>
                    <Stack className="w-full flex-row! items-center space-x-1!">
                        <TextField
                            value={phone}
                            label="Phone"
                            variant="outlined"
                            onChange={(e) => { setPhone(e.target.value); setError(''); }}
                            placeholder="+254712345678"
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            className='py-4!'
                        >
                            Login
                        </Button>
                    </Stack>
                    {error && <p className="text-sm text-red-600 mb-2">{error}</p>}
                </form>
            </Stack>
        </Box>
    );
}