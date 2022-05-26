import { Box, Heading, Text, useColorMode } from "@chakra-ui/react";

const Post = ({ post }) => {
    const { colorMode } = useColorMode();
    return (
        <Box
            bgColor={colorMode === "light" ? "gray.200" : "gray.600"}
            p="1rem"
            borderRadius="lg"
            cursor="pointer"
            _hover={{
                bg: colorMode === "light" ? "gray.300" : "gray.700",
            }}
            transition="all 0.2s"
        >
            <Heading fontSize="1.5rem">{post.title}</Heading>
            <Text whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
                {post.content}
            </Text>
        </Box>
    );
};

export default Post;
