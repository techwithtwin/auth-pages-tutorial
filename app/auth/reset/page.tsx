import {
  Box,
  Button,
  Container,
  Field,
  Flex,
  Heading,
  Image,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { RiArrowGoBackFill } from "react-icons/ri";

const PasswordResetEmail = () => {
  return (
    <Container
      maxW="lg"
      py={{ base: "12", md: "12" }}
      px={{ base: "0", sm: "8" }}
      h="100vh"
    >
      <Stack
        gap="2"
        py={{ base: "0", sm: "6" }}
        bg="white"
        boxShadow={{ base: "none", sm: "md" }}
        borderRadius={{ base: "none", sm: "xl" }}
      >
        <Stack gap="6">
          <Flex justify="center">
            <Link href="/">
              <Image
                src="/logo.png"
                height={"150px"}
                transform="scale(0.7)"
                alt="logo"
              />
            </Link>
          </Flex>

          <Stack gap={{ base: "2", md: "3" }} textAlign="center">
            <Heading size={{ base: "xs", md: "md" }} color="#9E8625">
              Enter your Email to reset your Password
            </Heading>
          </Stack>
          <Stack gap="4" justify="center" direction="row">
            <Text>Remembered your password? </Text>

            <Link href="/auth/login">
              <Box asChild color="red" boxSize={6}>
                <RiArrowGoBackFill />
              </Box>
            </Link>
          </Stack>
        </Stack>
        <Box
          py={{ base: "0", sm: "0" }}
          px={{ base: "4", sm: "10" }}
          bg={{ base: "transparent", sm: "bg.surface" }}
        >
          <Stack gap="4">
            <Stack gap="4">
              <Field.Root required>
                <Field.Label>Email</Field.Label>
                <Input required placeholder="Enter your email" type="email" />
              </Field.Root>
            </Stack>

            <Stack gap="4">
              <Button
                bg="#9E8625"
                color="white"
                _disabled={{
                  cursor: "not-allowed",
                  opacity: "0.4",
                }}
                type="submit"
                _hover={{ backgroundColor: "#9E8625" }}
              >
                Reset Password
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};
export default PasswordResetEmail;
