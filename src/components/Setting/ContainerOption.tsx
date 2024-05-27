"use client";
import React from "react";
import {
  Container,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel,
  Typography,
} from "@mui/material";

const ContainerComponent = () => {
  const [value, setValue] = React.useState("box");

  const handleChange = (event: any) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <FormControl component="fieldset">
        <Typography variant="h5" gutterBottom>
          Page Container
        </Typography>

        <hr />
        <RadioGroup
          aria-label="container"
          name="container"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel value="box" control={<Radio />} label="Box" />
          <FormControlLabel
            value="fullWidth"
            control={<Radio />}
            label="Full Width"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default ContainerComponent;
