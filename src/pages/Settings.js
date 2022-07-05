import React from 'react';
import SelectField from "../components/SelectField";
import {Box, Button, CircularProgress, Typography} from "@mui/material";
import TextFieldComp from "../components/TextFieldComp";
import useAxios from "../hooks/useAxios";

const Settings = () => {
    const { response,error,loading } = useAxios({url: "/api_category.php"})

    if(loading) {
        return(
            <Box mt={20}>
                <CircularProgress />
            </Box>
        )
    }

    if(error){
        return(
            <Typography variant={"h6"} mt={20} color="red">
                Something went wrong
            </Typography>
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <SelectField label={"Category"} />
                <SelectField label={"Difficulty"} />
                <SelectField label={"Type"} />
                <TextFieldComp />
                <Box mt={3} width={"100%"}>
                    <Button fullWidth variant={"contained"} type={"submit"}>
                        Get started!
                    </Button>
                </Box>
            </form>
        </div>
    );
};

export default Settings;