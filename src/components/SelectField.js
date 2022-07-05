import React, {useState} from 'react';
import {Box, FormControl, InputLabel, Menu, MenuItem, Select} from "@mui/material";


const SelectField = props => {
    const {label} = props
    const [value, setValue] = useState("")

    const handleChange = () => { }
    return (
        <Box mt={3} width={"100%"}>
            <FormControl fullWidth={true}>
                <InputLabel>{label}</InputLabel>

                <Select value={value} label={label} onChange={handleChange}>
                    <MenuItem>Option 1</MenuItem>
                    <MenuItem>Option 2</MenuItem>
                    <MenuItem>Option 3</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
};

export default SelectField;