import { Button, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Post from "./Post";

const PostsList = () => {
    const postPerPage = 5;
    const posts = useSelector((state) => state.posts);
    const [page, setPage] = useState(0);
    const [postList, setPostList] = useState(
        posts.slice(page * postPerPage, page * postPerPage + postPerPage)
    );

    useEffect(() => {
        setPostList(
            posts.slice(page * postPerPage, page * postPerPage + postPerPage)
        );
    }, [page, posts]);

    return (
        <Flex my="4rem" flexDir="column" gap="1rem">
            <Flex justifyContent="space-between" alignItems="center">
                <Text>
                    Showing {postList.length} of {posts.length} posts
                </Text>
                <Button>Create post +</Button>
            </Flex>
            {postList.map((post) => (
                <Post key={post.id} post={post} />
            ))}
            <Pagination
                page={page}
                setPage={setPage}
                postPerPage={postPerPage}
            />
        </Flex>
    );
};

export default PostsList;

const Pagination = ({ page, setPage, postPerPage }) => {
    const totalPages = Math.ceil(100 / postPerPage);
    return (
        <Flex flexDir="column">
            <Flex justifyContent="center" mt="2rem" gap="1rem" flexWrap="wrap">
                {Array.from({ length: totalPages }).map((_, i) => (
                    <Button
                        key={i}
                        onClick={() => setPage(i)}
                        colorScheme={page === i ? "blue" : "gray"}
                    >
                        {i + 1}
                    </Button>
                ))}
            </Flex>
            <Flex justifyContent="center" mt="2rem">
                <Button
                    onClick={() => setPage(page - 1)}
                    disabled={page === 0}
                    mr="1rem"
                >
                    Prev
                </Button>
                <Button
                    onClick={() => setPage(page + 1)}
                    disabled={page === totalPages - 1}
                >
                    Next
                </Button>
            </Flex>
        </Flex>
    );
};
