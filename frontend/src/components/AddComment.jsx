import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Textarea,
    useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createComment } from "../redux/slices/postsSlice";

const AddComment = ({ id }) => {
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");
    const dispatch = useDispatch();
    const toast = useToast();

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            name,
            content: comment,
            date: new Date(),
        };
        dispatch(createComment({ id, comment: data }));
        toast({
            title: "Comment created",
            description: "Your comment has been created",
            status: "success",
            duration: 5000,
            isClosable: true,
        });
        setName("");
        setComment("");
    };
    return (
        <Box as="form" my="4rem" onSubmit={handleSubmit}>
            <Heading fontSize="1.5rem">Add a comment</Heading>
            <Flex flexDir="column" gap="1rem" mt="2rem">
                <FormControl>
                    <FormLabel>Name</FormLabel>
                    <Input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </FormControl>
                <FormControl>
                    <FormLabel>Comment</FormLabel>
                    <Textarea
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        required
                    />
                </FormControl>
                <Button alignSelf="end" type="submit">
                    Submit
                </Button>
            </Flex>
        </Box>
    );
};

export default AddComment;
