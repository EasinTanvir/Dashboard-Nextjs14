"use client";
import React, { useState } from "react";
import { Container, Box, Typography } from "@mui/material";
import { HexColorPicker } from "react-colorful";

const ColorPicker = () => {
  const [color, setColor] = useState("#aabbcc");

  return (
    <div>
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          Text Color
        </Typography>
        <HexColorPicker color={color} onChange={setColor} />;
        <Box sx={{ mt: 2 }}>
          <Typography variant="body1">
            Selected Color: <span style={{ color }}>{color}</span>
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default ColorPicker;
