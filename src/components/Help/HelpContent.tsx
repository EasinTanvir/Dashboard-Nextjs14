import React from "react";
import {
  Container,
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Link,
} from "@mui/material";

const HelpContent = () => {
  return (
    <Container>
      <Box>
        <Typography variant="h5" gutterBottom>
          Frequently Asked Questions (FAQs)
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary="How do I reset my password?"
              secondary="To reset your password, go to the login page and click on 'Forgot Password'. Follow the instructions sent to your email."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="How can I contact support?"
              secondary="You can contact support by emailing support@example.com or calling (123) 456-7890."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Where can I find the user manual?"
              secondary="The user manual can be found under the 'Resources' section of our website or by clicking here."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="How can I contact support?"
              secondary="You can contact support by emailing support@example.com or calling (123) 456-7890."
            />
          </ListItem>
        </List>
      </Box>
    </Container>
  );
};

export default HelpContent;
