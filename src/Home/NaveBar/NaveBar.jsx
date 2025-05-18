import { Box, Flex, Icon, Button, Container } from "@chakra-ui/react";
import { FaCube } from "react-icons/fa";
import { Link } from "react-router";
import icon from '../../assets/lms.svg'
export default function Navbar() {
  return (
    <Box bg="gray.100" px={6} py={4}>
      <Flex justify="space-between" maxW="1200px" align="center" mx="auto">
        <Link to="/">
          <img src={icon} alt="Logo" />
        </Link>
        <Link to="/addVideo">
          <Button  background={'#5E45F8'} size="sm">
            + Add Video
          </Button>
        </Link>
      </Flex>
    </Box>
  );
}
