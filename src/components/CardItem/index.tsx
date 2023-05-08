import { Box, Card, CardBody, Image, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import basketball from "../../assets/images/basketball.png";

export default function CardItem() {
  return (
    <Card
      variant="filled"
      as={RouterLink}
      to="/"
      minHeight="155px"
      borderRadius={14}
      _hover={{
        textDecor: "none",
        "@media(hover:hover)": {
          boxShadow: "lg",
        },
      }}
    >
      <CardBody
        display="flex"
        gap={5}
        p="15px"
        flexDirection={["column", null, "row"]}
        alignItems="center"
        justifyContent={[null, null, "space-around"]}
      >
        <Image
          draggable="false"
          srcSet={basketball}
          boxSize="96px"
          objectFit="cover"
          borderRadius="50%"
          filter="drop-shadow(0px 5px 3px rgba(0, 0, 0, 0.3))"
          userSelect="none"
        />
        <Box textAlign="center">
          <Text fontSize={[18, 23]} fontWeight="500">
            Sport
          </Text>
          <Text fontSize={[14, 14]} fontWeight="400">
            50 questions
          </Text>
        </Box>
      </CardBody>
    </Card>
  );
}
