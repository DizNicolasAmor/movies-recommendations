import React, { FC } from 'react';
import { Container, Typography } from '@mui/material';

export interface Props {}

export const Dashboard: FC<Props> = () => {
  return (
    <Container maxWidth="lg" sx={{ flexGrow: 1 }}>
      <Typography component="h1" variant="h3">
        I am the dashboard
      </Typography>
    </Container>
  );
};
