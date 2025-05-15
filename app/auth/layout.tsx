import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const AuthLayout = ({ children }: Props) => {
  return (
    <Box
      bgImage="url('/bg.jpg')"
      bgSize="cover"
      bgRepeat="no-repeat"
      minH="100vh"
    >
      {children}
    </Box>
  );
};

export default AuthLayout;
