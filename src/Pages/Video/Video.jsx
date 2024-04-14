// // import YouTube from 'react-youtube';

// import { Link } from 'react-router-dom';
// import VideoCanals from '../../Files/Video.json';

// const Video = () => {
//   console.log(VideoCanals);
//   return (
//     <div>
//       <ul>
//         {VideoCanals.map(channel => {
//           return (
//             <>
//               <Link to={channel.link} target="_blank" rel="noopener noreferrer">
//                 <li>
//                   <h3>{channel.channel}</h3>
//                   <p>{channel.description}</p>
//                 </li>
//               </Link>
//             </>
//           );
//         })}
//       </ul>
//       <div>
//         {/* <YouTube
//           videoId="GyQ_CFVBiV4"
//           width={640}
//           height={360}
//           opts={{ playerVars: { listType: 'playlist' } }}
//         /> */}
//       </div>
//       {/* <span>Пока ничего нет </span> */}
//     </div>
//   );
// };

// export default Video;

import * as React from 'react';
import Box from '@mui/material/Box';
// import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import { TabPanel } from '@mui/lab';
import { TabComponent } from './Video.styled';
import Canals from 'components/Canals/Canals';
import Legislativa from 'components/Legislativa/Legislativa';

export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
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
            // justifyContent: 'space-around',
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
        <TabPanel value="1">
          <Legislativa />
        </TabPanel>
        <TabPanel value="2">
          <Canals />
        </TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box>
  );
}
