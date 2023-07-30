import {Box, Button, Typography} from "@mui/material";
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { handleAmountChange, handleScoreChange } from '../redux/actions';

const FinalScreen = () => {
    const { score } = useSelector(state => state )
    const dispatch = useDispatch();
    const history = useHistory();

    const handleBackToSettings = () =>{
        dispatch(handleScoreChange(0));
        dispatch(handleAmountChange(10));
        history.push("/")
    }
    return (

        <Box mt={30}>
            <Typography variant="h3" fontWeight="bold" mb={3}>Your final score is {score}</Typography>
            <Button onClick={handleBackToSettings} variant="outlined">Try again!</Button>

        </Box>
    );
};

export default FinalScreen;