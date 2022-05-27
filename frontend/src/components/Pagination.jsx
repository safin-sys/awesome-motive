import { Button, Flex, Heading } from "@chakra-ui/react";

const Pagination = ({ page, setPage, postPerPage, totalPages }) => {
    return (
        <Flex flexDir="column">
            <Flex
                justifyContent="center"
                mt="2rem"
                gap="1rem"
                alignItems="center"
            >
                <Button onClick={() => setPage(page - 1)} disabled={page === 0}>
                    Prev
                </Button>
                <Heading fontSize="1rem">
                    {page + 1} of {totalPages}
                </Heading>
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

export default Pagination;
