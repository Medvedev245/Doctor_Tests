import React from 'react';
import Box from '@mui/material/Box';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import { TabPanel } from '@mui/lab';
import { TabComponent } from './Authorization.styled';
import Canals from 'components/Canals/Canals';
import Legislativa from 'components/Legislativa/Legislativa';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';

const Authorization: React.FC = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: {}, newValue: string) => {
    console.log(event);
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: '50%',
        height: '400px',
        typography: 'body1',
        // display: 'flex',
        margin: '0 auto',
      }}
    >
      <TabContext value={value}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: 'divider',
            display: 'flex',
            width: '200px',
            margin: '0 auto',
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
            {/* <TabComponent
              label="Item Three"
              value="3"
              style={{ textTransform: 'none', fontWeight: 'bold' }}
            /> */}
          </TabList>
        </Box>
        <TabPanel
          value="1"
          sx={{
            padding: 0, // Убираем отступы
          }}
        >
          <SignUp />
        </TabPanel>
        <TabPanel
          value="2"
          sx={{
            padding: '15px 0 0 0', // Убираем отступы
          }}
        >
          <SignIn />
        </TabPanel>
        {/* <TabPanel value="3">Item Three</TabPanel> */}
      </TabContext>
    </Box>
  );
};

export default Authorization;
