import React, { useState, useContext } from "react";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { Button, Paper, Box } from "@material-ui/core";
import { dataContext } from "../context/dataContext.js";
import moment from 'moment';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const EntryList = () => {
  var { entries, setEntries } = useContext(dataContext);
  const reversed = entries.reverse();

  return (
    <div>
      <Stack spacing={10}>
        {reversed.map((item) => {
          return (
            <Box
              component="span"
              sx={{
                display: "flex",
                flexWrap: "wrap",
                "& > :not(style)": {
                  m: 1,
                  width: "50rem"
                },
              }}
            >
              <Item onClick={() => console.log("clicked")}>
                <Typography variant="subtitle1" gutterBottom component="div">
                    {moment(item.date).format("dddd, MMMM Do YYYY, h:mm:ss a")}
                </Typography>
                <Typography variant="h5" gutterBottom component="div">
                  {item.name}
                </Typography>
                <Typography variant="body1">{item.entry}</Typography>
              </Item>
            </Box>
          );
        })}
      </Stack>
    </div>
  );
};

export default EntryList;
