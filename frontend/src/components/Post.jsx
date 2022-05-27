import {
    Link as ChakraLink,
    Heading,
    Text,
    useColorMode,
} from "@chakra-ui/react";
import Link from "next/link";

const Post = ({ post }) => {
    const { colorMode } = useColorMode();
    return (
        <Link href={`/${post.id}`} passHref>
            <ChakraLink
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
                <Text
                    whiteSpace="nowrap"
                    textOverflow="ellipsis"
                    overflow="hidden"
                >
                    {post.content}
                </Text>
            </ChakraLink>
        </Link>
    );
};

export default Post;
