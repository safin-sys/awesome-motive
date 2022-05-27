import { Container, Flex, Heading, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Comments from "../src/components/Comments";
import Nav from "../src/components/Nav";

const Post = () => {
    const router = useRouter();
    const { id } = router.query;
    const { title, content, date, comments } = useSelector(state => state.posts.find(post => post.id === id)) || {};
    return (
        <Container>
            <Nav />
            <Heading mt="4rem">{title}</Heading>
            <Text>{date}</Text>
            <Text mt="2rem" mb="4rem">{content}</Text>
            <Flex flexDir="column" gap=".5rem" mb="2rem">
                <Comments comments={comments} />
            </Flex>
        </Container>
    );
}

export default Post;