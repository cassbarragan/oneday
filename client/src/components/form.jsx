import React, { useState, useContext } from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Button, Paper, Box } from "@material-ui/core";
import { dataContext } from "../context/dataContext.js";
import axios from "axios";
import styled from "styled-components";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  margin-bottom: 2rem;
  align-items: center;
  justify-content: center;
`;

const Form = () => {
  var { entries, setEntries, getEntries } = useContext(dataContext);
  const [nameValue, setNameValue] = useState("");
  const [dateValue, setDateValue] = useState("");
  const [textValue, setTextValue] = useState("");

  const onNameChange = (e) => setNameValue(e.target.value);
  const onDateChange = (e) => setDateValue(e.target.value);
  const onTextChange = (e) => setTextValue(e.target.value);




  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`/addentry`, {
        name: nameValue,
        date: dateValue,
        entry: textValue,
      })
      .then(() => console.log("submitted"))
      .then(() => getEntries())
      .catch((err) => console.log("error:", err));
  }


  const handleReset = () => setNameValue("");


  return (
    <FormContainer>
      <TextField
        onChange={onNameChange}
        value={nameValue}
        label={"Name"}
        sx={{ m: 2, width: "35ch" }}
        id="filled-basic"
        variant="filled"
      />
      <TextField
        onChange={onDateChange}
        value={dateValue}
        label={"Date"}
        sx={{ m: 2, width: "35ch" }}
        id="filled-basic"
        variant="filled"
      />
      <TextField
        id="outlined-multiline-static"
        multiline
        rows={10}
        onChange={onTextChange}
        value={textValue}
        label={"Journal Entry"}
        sx={{ m: 2, width: "70ch" }}
        id="filled-basic"
        variant="filled"
      />
      <Box sx={{ '& button': { m: 1 } }} >
      <Button variant="outlined" size="small" onClick={handleSubmit}>
        Submit
      </Button>
      <Button variant="outlined" size="small" onClick={handleReset}>
        Reset
      </Button>
      </Box>
    </FormContainer>
  );
};

export default Form;
