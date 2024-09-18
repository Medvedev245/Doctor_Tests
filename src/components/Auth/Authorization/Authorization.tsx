import React from 'react';
import Box from '@mui/material/Box';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import { TabPanel } from '@mui/lab';
import { TabComponent } from './Authorization.styled';
// import Canals from 'components/Canals/Canals';
// import Legislativa from 'components/Legislativa/Legislativa';
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
        // width: '50%',
        width: '40vw',
        height: '50vh',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        // justifyContent: 'center',
        typography: 'body1',
        margin: '200px auto',
        backgroundColor: 'var(--iq-primary)',
        borderRadius: '10px',
      }}
    >
      <TabContext value={value}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: 'divider',
            display: 'flex',
            width: '200px',
            marginBottom: '50px',
          }}
        >
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <TabComponent
              label="SignUp"
              value="1"
              style={{
                textTransform: 'none',
                fontWeight: 'bold',
              }}
            />
            <TabComponent
              label="SignIn"
              value="2"
              style={{ textTransform: 'none', fontWeight: 'bold' }}
            />
          </TabList>
        </Box>
        <TabPanel
          value="1"
          sx={{
            padding: 0,
          }}
        >
          <SignUp />
        </TabPanel>
        <TabPanel
          value="2"
          sx={{
            padding: '0 0 0 0',
          }}
        >
          <SignIn />
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default Authorization;
