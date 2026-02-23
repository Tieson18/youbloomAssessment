import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchUserById } from '../services/helper';
import useFetch from '../hooks/useFetcher';
import { Box, Container, Stack, Typography } from '@mui/material';
import UserCard from '../components/UserCard';

export default function Detail() {
    const { id } = useParams();
    const { data: user, loading, error } = useFetch(() => fetchUserById(id), [id]);

    if (loading) return <div className="p-6">Loading...</div>;
    if (error) return <div className="p-6 text-red-600">Error loading details.</div>;
    if (!user) return <div className="p-6">User not found</div>;

    return (
        <Box component={'main'} className="p-6!">
            <Container maxWidth='lg'>
                <UserCard user={user} detail />
                <Link to="/main" className="text-blue-600 underline">Back to list</Link>
            </Container>
        </Box>
    );
}