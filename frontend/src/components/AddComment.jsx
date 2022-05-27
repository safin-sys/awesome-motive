import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Textarea,
} from "@chakra-ui/react";
import { useState } from "react";

const AddComment = ({ id }) => {
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, comment);
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
