import React from 'react';
import { useParams } from 'react-router-dom';
import { getVideos } from '../../data/videos';
import {
  Box,
  Text,
  Image,
  Flex,
  Icon,
  AspectRatio,
} from '@chakra-ui/react';
import { FaCube } from 'react-icons/fa';

const VideoDetails = () => {
  const { id } = useParams();
  const videos = getVideos();
  const video = videos.find((v) => v.id === parseInt(id));

  if (!video) {
    return <Box p={6}><Text>Video not found</Text></Box>;
  }

  // Extract YouTube video ID from the link
  const getYouTubeId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const youtubeId = getYouTubeId(video.videoLink);

  return (
    <Box p={6}>
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        {video.title}
      </Text>
      <AspectRatio maxW="800px" ratio={16 / 9} mb={4}>
        {youtubeId ? (
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}`}
            title={video.title}
            allowFullScreen
          />
        ) : (
          <Image src={video.thumbnail} alt="Video Thumbnail" />
        )}
      </AspectRatio>
      <Flex align="center" mb={4}>
        <Icon as={FaCube} boxSize={6} color="purple.500" mr={2} />
        <Box>
          <Text fontWeight="bold">{video.author}</Text>
          <Text fontSize="sm" color="gray.500">
            {video.views} views • {video.date}
          </Text>
        </Box>
      </Flex>
      <Box bg="gray.50" p={4} borderRadius="md">
        <Text fontWeight="bold" mb={2}>Description</Text>
        <Text>{video.description}</Text>
        <Text mt={2} fontSize="sm" color="gray.600">
          Duration: {video.duration}
        </Text>
      </Box>
    </Box>
  );
};

export default VideoDetails;