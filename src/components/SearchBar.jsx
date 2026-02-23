import { Box, TextField } from '@mui/material';
import React from 'react';

export default function SearchBar({ value, onChange, placeholder = 'Search...' }) {
    return (
        <Box className="flex items-center">
            <TextField
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full"
                placeholder={placeholder}
                label="USERS"
            />
        </Box>
    );
}