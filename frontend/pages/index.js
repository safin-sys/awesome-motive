import { Container } from "@chakra-ui/react";
import Head from "next/head";
import Nav from "../src/components/Nav";
import PostsList from "../src/components/PostsList";

const Home = () => {
	return (
		<Container>
			<Head>
				<title>Awesome Motive Blog</title>
			</Head>
			<Nav />
			<PostsList />
		</Container>
	);
}

export default Home;