import React, { useState } from 'react';
import {
  Box,
  Input,
  Textarea,
  Text,
  Button,
  Flex,
  SimpleGrid,
} from '@chakra-ui/react';

const AddVideo = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    description: '',
    videoLink: '',
    thumbnail: '',
    date: '',
    duration: '',
    views: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // You can now send `formData` to a backend API or local state
  };

  return (
    <Box p={6}>
      <Text fontSize="xl" fontWeight="bold" mb={2}>
        Add new video
      </Text>
      <Text mb={4}>Please fill up the form to add new video</Text>

      <SimpleGrid columns={{ base: 1, md: 2 }} gap={5} mb={4}>
        <Box>
          <Text mb={1}>Title</Text>
          <Input
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter title"
          />
        </Box>
        <Box>
          <Text mb={1}>Author</Text>
          <Input
            name="author"
            value={formData.author}
            onChange={handleChange}
            placeholder="Enter author"
          />
        </Box>
      </SimpleGrid>

      <Box mb={4}>
        <Text mb={1}>Description</Text>
        <Textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Brief description for your video"
        />
      </Box>

      <Box mb={4}>
        <Text mb={1}>YouTube Video Link</Text>
        <Input
          name="videoLink"
          value={formData.videoLink}
          onChange={handleChange}
          placeholder="Enter video link"
        />
      </Box>

      <Box mb={4}>
        <Text mb={1}>Thumbnail Link</Text>
        <Input
          name="thumbnail"
          value={formData.thumbnail}
          onChange={handleChange}
          placeholder="Enter thumbnail link"
        />
      </Box>

      <SimpleGrid columns={{ base: 1, md: 3 }} gap={5} mb={6}>
        <Box>
          <Text mb={1}>Date</Text>
          <Input
            name="date"
            value={formData.date}
            onChange={handleChange}
            placeholder="May 3, 2022"
          />
        </Box>
        <Box>
          <Text mb={1}>Duration</Text>
          <Input
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            placeholder="12:10"
          />
        </Box>
        <Box>
          <Text mb={1}>Views</Text>
          <Input
            name="views"
            value={formData.views}
            onChange={handleChange}
            placeholder="200"
          />
        </Box>
      </SimpleGrid>

      <Flex justify="flex-end">
        <Button background={'#5E45F8'} onClick={handleSubmit}>
          Save
        </Button>
      </Flex>
    </Box>
  );
};

export default AddVideo;
