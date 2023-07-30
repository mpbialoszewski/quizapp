import { Button, CircularProgress, Typography } from '@mui/material';
import {Box } from '@mui/system';
import React from 'react';
import useAxios from '../hooks/useAxios';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';

const getRandomInt = (max) =>{
    return Math.floor(Math.random() * Math.floor(max))
}

const Questions = () => {
    const {
        question_category,
        question_difficulty,
        question_type,
        amount_of_question,
        score,
    } = useSelector((state) => state);
    console.log(question_category,question_difficulty , question_type, amount_of_question);


    let apiUrl = `/api.php?amount=${amount_of_question}`
    if(question_category) {
        apiUrl = apiUrl.concat(`&category=${question_category}`);
    }
    if(question_difficulty) {
        apiUrl = apiUrl.concat(`&difficulty=${question_difficulty}`);
    }
    if(question_type) {
        apiUrl = apiUrl.concat(`&type=${question_type}`);
    }
    const { response, loading } = useAxios({ url: apiUrl });
    const [questionIndex, setQuestionIndex] = useState(0);
    const [options, setOptions] = useState([]);

    useEffect(()=>{
        if(response?.results.length){
            const question = response.results[questionIndex]
            let answers = [...question.incorrect_answers]
            answers.splice(
                getRandomInt(question.incorrect_answers.length),
                0, 
                question.correct_answer
            );
            setOptions(answers)
        }
    }, [response, questionIndex]);

    if(loading){
        return(
            <Box mt={20}>
                <CircularProgress/>
            </Box>
        )

    }
    console.log(response)

    const handleClickAnswer =()=>{
        if(questionIndex + 1 < response.result.length){
            setQuestionIndex(questionIndex+1);
        }
    }
    return (
        (<Box>
            <Typography variant='h2'>Question {questionIndex +1}</Typography>
            <Typography mt={5}>{response.results[questionIndex].question} </Typography>
            {options.map((data,id)=>(
                <Box onClick={handleClickAnswer} mt={2} key={id}>
                    <Button variant="contained">{data}</Button>
                </Box>
            ))}
                <Box mt={2}>
                    <Button> {score}/ {response.results.length}</Button>
                </Box>
        </Box>
        )
    );
};

export default Questions;