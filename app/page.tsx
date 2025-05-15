import { Box, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { FiLogOut } from "react-icons/fi";

const Home = () => {
  return (
    <Flex h="100vh" gap={4} flexDir="column" bgImage="url(/bg.jpg)">
      <Box bg="rgba(245, 226, 197, 0.8)" w="100%" h="fit-content">
        <Stack
          h="fit-content"
          py={2}
          mx={6}
          gap={4}
          flexDir="row"
          justify="space-between"
          align="center"
        >
          <Image src="/logo.png" boxSize="10" alt="logo" />
          <Link href="/auth/login">
            <Flex gap={2} align="center" cursor="pointer">
              <Box asChild boxSize="6">
                <FiLogOut />
              </Box>
              <Text fontWeight="bold">Login</Text>
            </Flex>
          </Link>
        </Stack>
      </Box>
      <Heading ml="4" textShadow="2xl" color="rgba(245, 226, 197, 1)">
        Welcome home, TechWithTwin
      </Heading>
    </Flex>
  );
};

export default Home;
