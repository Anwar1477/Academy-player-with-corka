import {
  Box,
  Image,
  Text,
  Flex,
  Icon,
} from "@chakra-ui/react";
import { FaCube } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function VideoCard({ video }) {
  return (
    <Box
      as={Link}
      to={`/video/${video.id}`}
      maxW="sm"
      borderRadius="md"
      overflow="hidden"
      boxShadow="md"
      _hover={{ boxShadow: 'lg', cursor: 'pointer' }}
    >
      <Box position="relative">
        <Image
          src={video.thumbnail}
          alt="Video Thumbnail"
        />
        <Text
          position="absolute"
          bottom="1"
          right="1"
          bg="blackAlpha.700"
          color="white"
          fontSize="xs"
          px={2}
          py={0.5}
          borderRadius="sm"
        >
          {video.duration}
        </Text>
      </Box>

      <Flex p={3} gap={3}>
        <Icon as={FaCube} boxSize={6} color="purple.500" />
        <Box>
          <Text fontWeight="bold" fontSize="sm">
            {video.title}
          </Text>
          <Text fontSize="sm" color="gray.600">
            {video.author}
          </Text>
          <Text fontSize="xs" color="gray.500">
            {video.views} views • {video.date}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}