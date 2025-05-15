"use client";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Flex,
  HStack,
  Heading,
  Image,
  Input,
  InputGroup,
  Stack,
  Text,
  Field,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRef, useState } from "react";
import { HiEyeOff } from "react-icons/hi";

const Login = () => {
  const [open, setOpen] = useState(false);
  const inputRef = useRef(null);
  return (
    <Container
      maxW={{ base: "100%", md: "lg" }}
      py={{ base: "0" }}
      px={{ base: "0" }}
      display="flex"
      alignItems="center"
      justifyContent="center"
      h="100vh"
    >
      <Stack
        height={{ base: "100%", sm: "fit-content" }}
        boxSize={{ base: "100%" }}
        display={{ base: "flex", sm: "block" }}
      >
        <Stack
          height={{ base: "100%", sm: "fit-content" }}
          bg="white"
          gap={{ base: 2, sm: 2 }}
          py={{ base: "6", sm: "8" }}
          boxShadow={{ base: "none", sm: "md" }}
          borderRadius={{ base: "none", sm: "xl" }}
        >
          <Stack gap="6">
            <Flex justify="center">
              <Image
                src="/logo.png"
                height={"150px"}
                transform="scale(0.7)"
                alt="logo"
              />
            </Flex>

            <Stack gap={{ base: "2", md: "3" }} textAlign="center">
              <Heading size={{ base: "sm", md: "md" }} color="brand.blue">
                Log in to your account
              </Heading>
              <Stack
                direction="row"
                align="center"
                gap={{ base: 1, sm: 2 }}
                justify="center"
              >
                <Text color="fg.muted" fontSize={{ base: "sm", sm: "md" }}>
                  Don&apos;t have an account?
                </Text>
                <Link href="/auth/register">
                  <Button
                    variant="plain"
                    size="lg"
                    color="#9E8625"
                    textDecor="underline"
                  >
                    Sign up
                  </Button>
                </Link>
              </Stack>
            </Stack>
          </Stack>
          <Box
            py={{ base: "0", sm: "2" }}
            px={{ base: "4", sm: "10" }}
            bg={{ base: "transparent", sm: "bg.surface" }}
          >
            <Stack gap="4">
              <Stack gap="4">
                <Field.Root required>
                  <Field.Label>Username</Field.Label>
                  <Input
                    placeholder="Enter your username"
                    type="text"
                    name="username"
                  />
                </Field.Root>

                <Field.Root required>
                  <Field.Label>Password</Field.Label>
                  <InputGroup endElement={<HiEyeOff />}>
                    <Input
                      id="password"
                      ref={inputRef}
                      name="password"
                      type={open ? "text" : "password"}
                      autoComplete="current-password"
                      required
                      placeholder="********"
                    />
                  </InputGroup>
                </Field.Root>
              </Stack>
              <HStack justify="space-between">
                <Checkbox.Root>
                  <Checkbox.HiddenInput />
                  <Checkbox.Control />
                  <Checkbox.Label>Remember me</Checkbox.Label>
                </Checkbox.Root>

                <Button
                  fontSize={{ base: "sm", sm: "md" }}
                  size="sm"
                  variant="plain"
                  color="#9E8625"
                  textDecor="underline"
                >
                  Forgot password?
                </Button>
              </HStack>
              <Stack gap="4">
                <Button
                  bg="#9E8625"
                  color="white"
                  type="submit"
                  _hover={{ backgroundColor: "yellow" }}
                >
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Stack>
    </Container>
  );
};
export default Login;
