// import YouTube from 'react-youtube';

import { Link } from 'react-router-dom';
import VideoCanals from '../../Files/VideoCanals.json';
import { CanalLisl, CanalElement, MainText, SmallText } from './Canals.styled';
import icon from '../../Files/img/youtube-svgrepo-com.png';

const Canals = () => {
  console.log(VideoCanals);
  return (
    <>
      <CanalLisl>
        {VideoCanals.map((channel, idx) => {
          return (
            <>
              <Link
                to={channel.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <CanalElement
                  style={{
                    textDecoration: 'none',
                  }}
                >
                  <img src={icon} alt="Youtube-icon)" width={40} />

                  <MainText>
                    YouTube Cannel: <br />
                    {channel.channel}
                  </MainText>
                  <SmallText>
                    <p style={{ fontWeight: '700' }}>Description: </p>
                    <span>{channel.smallDescr}</span>
                  </SmallText>
                </CanalElement>
              </Link>
            </>
          );
        })}
      </CanalLisl>
      <div>
        {/* <YouTube
          videoId="GyQ_CFVBiV4"
          width={640}
          height={360}
          opts={{ playerVars: { listType: 'playlist' } }}
        /> */}
      </div>
      {/* <span>Пока ничего нет </span> */}
    </>
  );
};

export default Canals;
