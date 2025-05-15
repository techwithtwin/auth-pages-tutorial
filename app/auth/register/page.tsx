"use client";
import {
  Box,
  Button,
  Container,
  Field,
  Flex,
  Heading,
  Image,
  Input,
  InputGroup,
  Stack,
  Text,
} from "@chakra-ui/react";

import Link from "next/link";

const Register = () => {
  return (
    <Container
      maxW={{ base: "100%", md: "2xl" }}
      py={{ base: "0", md: "12" }}
      px={{ base: "0", sm: "8" }}
      minH="100vh"
    >
      <Stack
        pt={{ base: "0", sm: "4" }}
        bg="white"
        boxShadow={{ base: "none", sm: "md" }}
        borderRadius={{ base: "none", sm: "xl" }}
      >
        <Stack gap="4">
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
              Register for an account today
            </Heading>
            <Stack direction="row" align="center" justify="center">
              <Text color="fg.muted">Already have an account?</Text>
              <Link href="/auth/login">
                <Button
                  variant="plain"
                  size="lg"
                  color="#9E8625"
                  textDecor="underline"
                >
                  Login
                </Button>
              </Link>
            </Stack>
          </Stack>
        </Stack>
        <Box
          py={{ base: "2", sm: "5" }}
          px={{ base: "4", sm: "10" }}
          bg={{ base: "transparent", sm: "bg.surface" }}
        >
          <Stack gap="3">
            <Stack gap="2">
              <Field.Root required>
                <Field.Label fontWeight="bold">Username</Field.Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="Enter your preffered username"
                />
              </Field.Root>

              <Field.Root required>
                <Field.Label fontWeight="bold">Email</Field.Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </Field.Root>

              <Field.Root required>
                <Field.Label htmlFor="password" fontWeight="bold">
                  Password
                </Field.Label>
                <InputGroup>
                  <Input
                    id="password"
                    name="password"
                    placeholder="********"
                    type="password"
                    autoComplete="current-password"
                  />
                </InputGroup>{" "}
              </Field.Root>
              <Field.Root required>
                <Field.Label htmlFor="passwordConfirm" fontWeight="bold">
                  Confirm Password
                </Field.Label>
                <InputGroup>
                  <Input
                    id="passwordConfirm"
                    name="passwordConfirm"
                    placeholder="********"
                    type="password"
                    autoComplete="current-password"
                    required
                  />
                </InputGroup>
              </Field.Root>
            </Stack>
            <Stack gap="4">
              <Button
                bg="#9E8625"
                type="submit"
                _hover={{
                  bg: "#9E8625",
                }}
                color="white"
              >
                Sign up
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};
export default Register;
