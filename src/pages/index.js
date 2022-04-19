import Head from 'next/head'
import HomeContainer from '../containers/HomeContainer'

export default function Home() {
	return (
		<>
			<Head>
				<title>Juan Camayo - Software Developer</title>
				<meta name='description' content='Juan Camayo - Software Developer' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<HomeContainer />
		</>
	)
}
