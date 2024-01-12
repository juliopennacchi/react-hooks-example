import { ReactNode } from "react";
import Navigation from "./Navigation";
import { Box, Center, ChakraProvider } from "@chakra-ui/react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <ChakraProvider>
        <Navigation />
        <Box w="100" p={4} color="white">
          <Center>{children}</Center>
        </Box>
      </ChakraProvider>
    </>
  );
}
