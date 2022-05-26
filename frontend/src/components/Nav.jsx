import { Button, Flex, Heading, useColorMode } from "@chakra-ui/react";

const Nav = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Flex as="nav" h="4rem" justifyContent="space-between" alignItems="center">
            <Heading>AM Blog</Heading>
            <Button onClick={toggleColorMode}>
                {colorMode === "dark" ? "Light" : "Dark"}
            </Button>
        </Flex>
    );
};

export default Nav;
