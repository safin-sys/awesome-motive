import { Button, Flex, Text, useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CreatePostModal from "./CreatePostModal";
import Pagination from "./Pagination";
import Post from "./Post";

const PostsList = () => {
    const postPerPage = 5;
    const posts = useSelector((state) => state.posts);
    const [page, setPage] = useState(0);
    const [postList, setPostList] = useState(
        posts.slice(page * postPerPage, page * postPerPage + postPerPage)
    );
    const totalPages = Math.ceil(posts.length / postPerPage);

    const { onOpen, onClose, isOpen } = useDisclosure();

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
                <Button onClick={onOpen}>Create post +</Button>
            </Flex>
            {postList.map((post) => (
                <Post key={post.id} post={post} />
            ))}
            <Pagination
                page={page}
                setPage={setPage}
                postPerPage={postPerPage}
                totalPages={totalPages}
            />
            <CreatePostModal isOpen={isOpen} onClose={onClose} />
        </Flex>
    );
};

export default PostsList;
