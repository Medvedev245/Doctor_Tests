import styled from 'styled-components';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Tab';
import TabList from '@mui/lab/TabList';

export const BoxComponent = styled(Box)`
  width: 50%;
  height: 600px;
  typography: body1;
  // display: 'flex',
  margin: 0 auto;
  //tablet
  @media screen and (max-width: 1200px) {
  }
  // Mobil
  @media screen and (max-width: 767px) {
  }
`;

export const TabComponent = styled(Tab)`
  width: 100px;

  //tablet
  @media screen and (max-width: 1200px) {
    font-weight: bold;
    font-size: var(--font-size-tablet);
    width: 150px;
  }
  // Mobil
  @media screen and (max-width: 767px) {
    font-size: var(--font-size-mobile);
    width: 100px;
  }
`;

export const TabListComponent = styled(TabList)`
  display: flex;
  justify-content: space-around;
  align-items: center;

  //tablet
  @media screen and (max-width: 1200px) {
  }
  // Mobil
  @media screen and (max-width: 767px) {
  }
`;
