import React from 'react';
import { Grid } from '@chakra-ui/react';
import VideoCard from '../componet/videoCard/VideoCard';
import { getVideos } from '../data/videos';

const Home = () => {
    const videos = getVideos();
  return (
    <div>
      <Grid marginTop={"20px"} templateColumns="repeat(3, 1fr)" templateRows="repeat(2, 1fr)" gap="6">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </Grid>
    </div>
  );
};

export default Home;