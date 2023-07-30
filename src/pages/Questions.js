import { Button, Typography } from '@mui/material';
import {Box } from '@mui/system';
import React from 'react';

const Questions = () => {
    return (
        (<Box>
            <Typography variant='h4'>Question 1</Typography>
            <Typography mt={5}> This is the question </Typography>
                <Box mt={2}>
                    <Button variant='contained'>Answer A</Button>
                </Box>
                <Box mt={2}>
                    <Button variant='contained'>Answer B</Button>
                </Box>
                <Box mt={2}>
                    <Button variant='contained'>Answer C</Button>
                </Box>

                <Box mt={2}>
                    <Button>Score  2/6</Button>
                </Box>
        </Box>
        )
    );
};

export default Questions;