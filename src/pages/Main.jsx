import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import UserCard from '../components/UserCard';
import { fetchUsers } from '../services/helper';
import useFetch from '../hooks/useFetcher';
import { Box, Container, Grid, Typography } from '@mui/material';

export default function Main() {
    const { data: users, loading, error } = useFetch(fetchUsers, []);
    const [query, setQuery] = useState('');

    const filtered = (users || []).filter((u) =>
        (u.name + u.email + u.username).toLowerCase().includes(query.toLowerCase())
    );

    return (
        <Box component={'main'} className="p-6 mt-4!">
            <Container maxWidth='lg'>
                <SearchBar value={query} onChange={setQuery} placeholder="Search users..." />
                {loading && <p className="mt-4">Loading...</p>}
                {error && <p className="mt-4 text-red-600">Failed to load users.</p>}
                <Grid component={'section'} container spacing={2} className="mt-4!">
                    {filtered.map((user) => (
                        <Grid key={user.id} size={{ xs: 12, sm: 6, md: 4 }}>
                            <UserCard user={user} detailLink={`/detail/${user.id}`} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}