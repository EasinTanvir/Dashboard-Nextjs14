import React from "react";
import ContainerComponent from "./ContainerOption";

import { TextField, Container, Box, Typography } from "@mui/material";
import ColorPicker from "./ColorPicket";
const SettingOption = () => {
  return (
    <div>
      <div>
        <ContainerComponent />
      </div>
      <div>
        <ColorPicker />
      </div>
      <div className="w-[540px]">
        <Box sx={{ mt: 4, mb: 4 }}>
          <Typography variant="h4" gutterBottom>
            Header Text
          </Typography>
          <Box
            component="form"
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <TextField label="Header Text" variant="outlined" fullWidth />
          </Box>
        </Box>

        <Box sx={{ mt: 4, mb: 4 }}>
          <Typography variant="h4" gutterBottom>
            Footer Text
          </Typography>
          <Box
            component="form"
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <TextField label="Header Text" variant="outlined" fullWidth />
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default SettingOption;
