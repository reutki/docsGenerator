// import React from "react";
import { useState } from "react";
import { Button, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";

export const Checks = ({ name, handleNext, step, length }) => {
  const [options, setOptions] = useState([])
  console.log(options)
  const handleChange = (event, value) => {
    setOptions(value);
  };

  return (
    <div>
      <Typography>For the quality standard related to {name} , please select all the mechanisms
        that are required to ensure that this standard is achieved</Typography>
      <ToggleButtonGroup onChange={handleChange} value={options}>
        <ToggleButton value='licensing'>licensing</ToggleButton>
        <ToggleButton value='accreditation'>accreditation</ToggleButton>
        <ToggleButton value="financing">financing</ToggleButton>
        <ToggleButton value="publicizing">publicizing</ToggleButton>
      </ToggleButtonGroup>
      <ToggleButtonGroup onChange={handleChange} value={options}>
        <ToggleButton value="regulations">regulations</ToggleButton>
        <ToggleButton value="case reviews">case reviews</ToggleButton>
        <ToggleButton value="program evaluation">program evaluation</ToggleButton>
        <ToggleButton value="rating">rating</ToggleButton>
      </ToggleButtonGroup>
      <>
      </>
      {step !== length - 1 ? <Button onClick={() => handleNext(options)}>Next</Button> : null}
      {step == length - 1 ? <Button onClick={() => handleNext(options)}>Generate PDF</Button> : null}
    </div>
  );
};
