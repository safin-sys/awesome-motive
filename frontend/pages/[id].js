import { Container, Flex, Heading, Skeleton, Text } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddComment from "../src/components/AddComment";
import Comments from "../src/components/Comments";
import Nav from "../src/components/Nav";
import { getPosts } from "../src/redux/slices/postsSlice";

const Post = () => {
    const router = useRouter();
    const { id } = router.query;
    const { title, content, date, comments } = useSelector(state => state.posts.find(post => post.id === id)) || {};

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])
    return (
        <Container>
            <Head>
                <title>{title}</title>
            </Head>
            <Nav />
            <Skeleton isLoaded={title && date && content} minH="300px">
                <Heading mt="4rem">{title}</Heading>
                <Text>{date}</Text>
                <Text mt="2rem">{content}</Text>
            </Skeleton>
            <AddComment id={id} />
            <Flex flexDir="column" gap=".5rem" mb="2rem">
                <Comments comments={comments} />
            </Flex>
        </Container>
    );
}

export default Post;