import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Textarea,
    useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../redux/slices/postsSlice";

const CreatePostModal = ({ isOpen, onClose }) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [date, setDate] = useState("");
    const toast = useToast();
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        const post = {
            title,
            content,
            date,
        };
        dispatch(addPost(post));
        toast({
            title: "Post created",
            description: "Your post has been created",
            status: "success",
            duration: 5000,
            isClosable: true,
        });
        onClose();
    };
    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Create Post</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody
                        as="form"
                        display="flex"
                        flexDir="column"
                        gap="1rem"
                        onSubmit={handleSubmit}
                    >
                        <FormControl>
                            <FormLabel>Title</FormLabel>
                            <Input
                                required
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Content</FormLabel>
                            <Textarea
                                required
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Date</FormLabel>
                            <Input
                                type="date"
                                required
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </FormControl>
                        <Flex justifyContent="end" gap="1rem">
                            <Button variant="ghost" onClick={onClose}>
                                Close
                            </Button>
                            <Button type="submit">Save</Button>
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};

export default CreatePostModal;
