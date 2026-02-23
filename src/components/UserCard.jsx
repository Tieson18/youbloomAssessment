import { Button, Card, CardActions, CardContent, CardHeader, Stack, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export default function UserCard({ user, detail, detailLink }) {
    return (
        <Card className=" bg-gray-50!">
            <CardHeader title={user.name} subheader={user.email} />
            <CardContent>
                {detail &&
                    <Stack>
                        <Typography variant="body2" className="text-sm text-gray-600">@{user.username} • {user.email}</Typography>
                        <Typography variant="body2" className="text-sm text-gray-600"><strong>Phone:</strong> {user.phone}</Typography>
                        <Typography variant="body2" className="text-sm text-gray-600"><strong>Website :</strong> {user.website}</Typography>
                        <Typography variant="body2" className="text-sm text-gray-600"><strong>Company :</strong> {user.company?.name}</Typography>
                        <Typography variant="body2" className="text-sm text-gray-600"><strong>Address :</strong> {user.address?.street}, {user.address?.city}</Typography>
                    </Stack>
                }
            </CardContent>
            {!detail && (
                <CardActions>
                    <Link to={detailLink}>
                        <Button size="small" >View Details</Button>
                    </Link>
                </CardActions>
            )}
        </Card>
    );
}