import React, { useState, useContext } from "react";

import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { Button, Paper, Box } from "@material-ui/core";
import { dataContext } from "../context/dataContext.js";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const EntryList = () => {
  var { entries, setEntries } = useContext(dataContext);

  return (
    <div>
      <Stack spacing={10}>
        {entries.map((item) => {
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
                <Typography variant="h6" gutterBottom component="div">
                  {item.date}
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
