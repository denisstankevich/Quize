import {
  Box,
  Container,
  Flex,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import ColorModeToggle from "@/components/ColorModeToggle";

export default function Header() {
  return (
    <Box
      as="header"
      padding={3}
      mb="45px"
      backdropFilter="blur(5px)"
      borderBottom="1px solid"
      borderBottomColor={useColorModeValue("blackAlpha.400", "whiteAlpha.400")}
    >
      <Container maxW="container.xl">
        <Flex as="nav" align="center" justifyContent="space-between">
          <Link
            as={RouterLink}
            to="/"
            fontSize="26px"
            _hover={{ textDecor: "none" }}
            fontWeight="bold"
          >
            Quize
          </Link>
          <ColorModeToggle />
        </Flex>
      </Container>
    </Box>
  );
}
