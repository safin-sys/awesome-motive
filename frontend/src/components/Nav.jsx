import { Button, Flex, Heading, useColorMode } from "@chakra-ui/react";
import Link from "next/link";

const Nav = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Flex
            as="nav"
            h="4rem"
            justifyContent="space-between"
            alignItems="center"
        >
            <Link href="/">
                <a>
                    <Heading>AM Blog</Heading>
                </a>
            </Link>
            <Button onClick={toggleColorMode}>
                {colorMode === "dark" ? "Light" : "Dark"}
            </Button>
        </Flex>
    );
};

export default Nav;
