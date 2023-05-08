import { Outlet } from "react-router-dom";
import Header from "./Header";
import { Container } from "@chakra-ui/react";

export default function Layout() {
  return (
    <>
      <Header />
      <Container maxW="container.xl">
        <Outlet />
      </Container>
    </>
  );
}
