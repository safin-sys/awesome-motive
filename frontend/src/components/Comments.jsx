import {
    Avatar,
    Box,
    Flex,
    Heading,
    Text,
    useColorMode,
} from "@chakra-ui/react";
import React from "react";

const Comments = ({ comments }) => {
    const { colorMode } = useColorMode();
    return (
        <>
            {comments?.map((comment, i) => {
                const { name, content, date, replies } = comment;
                return (
                    <React.Fragment key={i}>
                        <Box
                            as="article"
                            bgColor={
                                colorMode === "dark" ? "gray.700" : "gray.200"
                            }
                            p="1rem"
                        >
                            <Flex as="header" gap=".5rem" alignItems="center">
                                <Avatar name={name} />
                                <Box>
                                    <Heading fontSize="1rem">{name}</Heading>
                                    <Text fontSize="12px">{date}</Text>
                                </Box>
                            </Flex>
                            <Box as="main" mt="1rem">
                                <Text>{content}</Text>
                            </Box>
                            <Box as="footer">
                                {replies?.length > 0 && (
                                    <Heading fontSize="1rem" color={colorMode === "light" ? "blue.600": "blue.200"} mt="1rem">
                                        {replies.length} replies
                                    </Heading>
                                )}
                            </Box>
                        </Box>
                        {replies?.length > 0 && (
                            <Flex
                                ml="2rem"
                                justifyContent="space-between"
                                flexDirection="column"
                                gap=".5rem"
                                pos="relative"
                            >
                                <Box
                                    h="100%"
                                    w="2px"
                                    bgColor={
                                        colorMode === "light"
                                            ? "gray.100"
                                            : "gray.700"
                                    }
                                    pos="absolute"
                                    left="-1rem"
                                />
                                <Comments comments={replies} />
                            </Flex>
                        )}
                    </React.Fragment>
                );
            })}
        </>
    );
};

export default Comments;
