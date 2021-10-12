import React, { useState, useContext } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Button, Paper } from "@material-ui/core";
import {dataContext} from '../context/dataContext.js';


const Form = () => {

  var { entries, setEntries } = useContext(dataContext);
  const [ textValue, setTextValue ] = useState({});

  console.log('text value:', textValue)

  const addEntry = async (entry) => {
    const entryName = entry.name;
    const entryDate = entry.date;
    const entryText = entry.text;
    await axios
    .post(`/addEntry`, {
      name: entryName,
      date: entryDate,
      entry: entryText
    })
    .then(() => res.status(200).send('submitted'))
    .catch(() => res.status(404).send('error submitting'))
  }

  const onTextChange = (e) => setTextValue(e.target.value);

  const handleSubmit = () => addEntry(textValue);

  const handleReset = () => setTextValue("");

  return (
    <form>
     <TextField onChange={onTextChange} value={textValue} label={"Name"} />
     <TextField onChange={onTextChange} value={textValue} label={"Date"} />
      <TextField
        onChange={onTextChange}
        value={textValue}
        label={"Journal Entry"}
      />
     <Button onClick={handleSubmit}>Submit</Button>
     <Button onClick={handleReset}>Reset</Button>
    </form>


  );
};

export default Form;
