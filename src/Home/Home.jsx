import React from 'react';
import NaveBar from './NaveBar/NaveBar';

import { Grid } from '@chakra-ui/react';
import VideoCard from '../componet/videoCard/VideoCard';
import AddVideo from '../componet/AddVideo/AddVideo';

const Home = () => {
    return (
        <div>
            <Grid marginTop={"20px"} templateColumns="repeat(3, 1fr)" templateRows="repeat(2, 1fr)" gap="6">
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
            </Grid>
           
        </div>
    );
};

export default Home;