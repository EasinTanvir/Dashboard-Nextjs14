import React from "react";
import ContainerComponent from "./ContainerOption";

import { TextField, Container, Box, Typography, Tooltip } from "@mui/material";
import ColorPicker from "./ColorPicket";
import Buttons from "../Buttons";
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
          <Typography variant="h5" gutterBottom>
            Header Text
          </Typography>
          <Box
            component="form"
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <TextField label="Enter Header Text" variant="outlined" fullWidth />
          </Box>
        </Box>

        <Box sx={{ mt: 4, mb: 4 }}>
          <Typography variant="h5" gutterBottom>
            Footer Text
          </Typography>
          <Box
            component="form"
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <TextField label="Enter Footer Text" variant="outlined" fullWidth />
          </Box>
        </Box>
        <>
          <Tooltip title="Only Admin and Editor Can Take Action">
            <div className="">
              <Buttons className="bg-rose-700  py-2 px-2 text-white ">
                Action
              </Buttons>
            </div>
          </Tooltip>
        </>
      </div>
    </div>
  );
};

export default SettingOption;
