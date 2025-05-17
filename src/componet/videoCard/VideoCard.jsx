import {
  Box,
  Image,
  Text,
  Flex,
  Icon,
  Avatar,
} from "@chakra-ui/react";
import { FaCube } from "react-icons/fa";
import thumbnail from "../../assets/alms.jpg";

export default function VideoCard() {
  return (
    <Box maxW="sm" borderRadius="md" overflow="hidden" boxShadow="md">
     
      <Box position="relative">
        <Image
          src={thumbnail}
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
          12:10
        </Text>
      </Box>

      <Flex p={3} gap={3}>
        {/* Icon */}
        <Icon as={FaCube} boxSize={6} color="purple.500" />

        <Box>
          <Text fontWeight="bold" fontSize="sm">
            Video title
          </Text>
          <Text fontSize="sm" color="gray.600">
            Academy Lms
          </Text>
          <Text fontSize="xs" color="gray.500">
            200 views • May 3, 2022
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}
