// import YouTube from 'react-youtube';

import { Link } from 'react-router-dom';
import VideoCanals from '../../Files/Video.json';

const Video = () => {
  console.log(VideoCanals);
  return (
    <div>
      <ul>
        {VideoCanals.map(channel => {
          return (
            <>
              <Link to={channel.link} target="_blank" rel="noopener noreferrer">
                <li>
                  <h3>{channel.channel}</h3>
                  <p>{channel.description}</p>
                </li>
              </Link>
            </>
          );
        })}
      </ul>
      <div>
        {/* <YouTube
          videoId="GyQ_CFVBiV4"
          width={640}
          height={360}
          opts={{ playerVars: { listType: 'playlist' } }}
        /> */}
      </div>
      {/* <span>Пока ничего нет </span> */}
    </div>
  );
};

export default Video;
