import { Button, Flex, Heading, Image, useColorMode } from "@chakra-ui/react";
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
                    <Image
                        src="https://awesomemotive.com/wp-content/themes/amthemenew/assets/images/am-logo-dark.svg"
                        alt="logo"
                    />
                </a>
            </Link>
            <Button onClick={toggleColorMode}>
                {colorMode === "dark" ? "Light" : "Dark"}
            </Button>
        </Flex>
    );
};

export default Nav;
