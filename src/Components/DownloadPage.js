// src/components/ProjectsPage.js
import React from 'react';
import { Typography, Container, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const DownloadPage = () => {
  return (
    <Container>
      <Typography variant="h2" align="center" mt={3}>
        Projects
      </Typography>
      {/* Example of using Accordion component */}
      <Accordion mt={3}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5">VLSS Projects</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {/* Add content for VLSS Projects */}
        </AccordionDetails>
      </Accordion>
      <Accordion mt={3}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5">Govt. Projects</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {/* Add content for Government Projects */}
        </AccordionDetails>
      </Accordion>
    </Container>
  );
};

export default DownloadPage;
