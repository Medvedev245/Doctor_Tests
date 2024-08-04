import * as React from 'react';
import Box from '@mui/material/Box';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import { TabPanel } from '@mui/lab';
import { TabComponent } from './Video.styled';
import Canals from 'components/Canals/Canals';
import Legislativa from 'components/Legislativa/Legislativa';

export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: {}, newValue: string) => {
    console.log(event);
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: '100%',
        typography: 'body1',
      }}
    >
      <TabContext value={value}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: 'divider',
            display: 'flex',
          }}
        >
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <TabComponent
              label="Legislativa video"
              value="1"
              style={{
                textTransform: 'none',
                fontWeight: 'bold',
              }}
            />
            <TabComponent
              label="YouTube canals"
              value="2"
              style={{ textTransform: 'none', fontWeight: 'bold' }}
            />
            <TabComponent
              label="Item Three"
              value="3"
              style={{ textTransform: 'none', fontWeight: 'bold' }}
            />
          </TabList>
        </Box>
        <TabPanel
          value="1"
          sx={{
            padding: 0, // Убираем отступы
          }}
        >
          <Legislativa />
        </TabPanel>
        <TabPanel
          value="2"
          sx={{
            padding: '15px 0 0 0', // Убираем отступы
          }}
        >
          <Canals />
        </TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box>
  );
}
