import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Expand from './Expand';
import Collapse from './Collapse';
import AccordionDetailsText from './AccordionDetailsText'

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={expanded ? <Collapse /> : <Expand />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ color: '#1C2B49', fontSize: "22px" }}>What is prio.one?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <AccordionDetailsText />
        </AccordionDetails>
      </Accordion>


      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={expanded ? <Collapse /> : <Expand />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ color: '#1C2B49', fontSize: "22px" }}>How does Femy Club work?</Typography>

        </AccordionSummary>
        <AccordionDetails>
          <AccordionDetailsText />
        </AccordionDetails>
      </Accordion>


      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={expanded ? <Collapse /> : <Expand />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ color: '#1C2B49', fontSize: "22px" }}>Is shipping free?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <AccordionDetailsText />
        </AccordionDetails>
      </Accordion>


      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={expanded ? <Collapse /> : <Expand />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ color: '#1C2B49', fontSize: "22px" }}>Where is Femy Club available?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <AccordionDetailsText />
        </AccordionDetails>
      </Accordion>


      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          expandIcon={expanded ? <Collapse /> : <Expand />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <Typography sx={{ color: '#1C2B49', fontSize: "22px" }}>How much does Femy Club cost?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <AccordionDetailsText />
        </AccordionDetails>
      </Accordion>



      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary
          expandIcon={expanded ? <Collapse /> : <Expand />}
          aria-controls="panel6bh-content"
          id="panel6bh-header"
        >
          <Typography sx={{ color: '#1C2B49', fontSize: "22px" }}>What information does Femy Club need from me?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <AccordionDetailsText />
        </AccordionDetails>
      </Accordion>



      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <AccordionSummary
          expandIcon={expanded ? <Collapse /> : <Expand />}
          aria-controls="panel7bh-content"
          id="panel7bh-header"
        >
          <Typography sx={{ color: '#1C2B49', fontSize: "22px" }}>Does Femy Club accept health insurance plans?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <AccordionDetailsText />
        </AccordionDetails>
      </Accordion>

      {/* ------------------------------------------- */}
      <Accordion sx={{ marginTop: "80px" }} expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
        <AccordionSummary
          expandIcon={expanded ? <Collapse /> : <Expand />}
          aria-controls="panel8bh-content"
          id="panel8bh-header"
        >
          <Typography sx={{ color: '#1C2B49', fontSize: "22px" }}>Versand und Lieferung</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <AccordionDetailsText />
        </AccordionDetails>
      </Accordion>


      <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
        <AccordionSummary
          expandIcon={expanded ? <Collapse /> : <Expand />}
          aria-controls="panel9bh-content"
          id="panel9bh-header"
        >
          <Typography sx={{ color: '#1C2B49', fontSize: "22px" }}>Verschreibungen</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <AccordionDetailsText />
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
        <AccordionSummary
          expandIcon={expanded ? <Collapse /> : <Expand />}
          aria-controls="panel10bh-content"
          id="panel10bh-header"
        >
          <Typography sx={{ color: '#1C2B49', fontSize: "22px" }}>Refills</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <AccordionDetailsText />
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel11'} onChange={handleChange('panel11')}>
        <AccordionSummary
          expandIcon={expanded ? <Collapse /> : <Expand />}
          aria-controls="panel11bh-content"
          id="panel11bh-header"
        >
          <Typography sx={{ color: '#1C2B49', fontSize: "22px" }}>Side Effects</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <AccordionDetailsText />
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel12'} onChange={handleChange('panel12')}>
        <AccordionSummary
          expandIcon={expanded ? <Collapse /> : <Expand />}
          aria-controls="panel12bh-content"
          id="panel12bh-header"
        >
          <Typography sx={{ color: '#1C2B49', fontSize: "22px" }}>Privacy and Security</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <AccordionDetailsText />
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel13'} onChange={handleChange('panel13')}>
        <AccordionSummary
          expandIcon={expanded ? <Collapse /> : <Expand />}
          aria-controls="panel13bh-content"
          id="panel13bh-header"
        >
          <Typography sx={{ color: '#1C2B49', fontSize: "22px" }}>Payments</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <AccordionDetailsText />
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel14'} onChange={handleChange('panel14')}>
        <AccordionSummary
          expandIcon={expanded ? <Collapse /> : <Expand />}
          aria-controls="panel14bh-content"
          id="panel14bh-header"
        >
          <Typography sx={{ color: '#1C2B49', fontSize: "22px" }}>Medication</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <AccordionDetailsText />
        </AccordionDetails>
      </Accordion>

    </div>
  );
}
