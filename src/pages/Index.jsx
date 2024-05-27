import { Container, Text, VStack, Heading, Box, Image } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to My Personal Blog</Heading>
        <Text fontSize="lg">A place where I share my thoughts, experiences, and stories.</Text>
        <Box boxSize="sm">
          <Image src="/images/blog-welcome.jpg" alt="Welcome to my blog" />
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;