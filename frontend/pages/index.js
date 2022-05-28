import { Container } from "@chakra-ui/react";
import Head from "next/head";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Nav from "../src/components/Nav";
import PostsList from "../src/components/PostsList";
import { getPosts } from "../src/redux/slices/postsSlice";

const Home = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getPosts())
	}, [dispatch])
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