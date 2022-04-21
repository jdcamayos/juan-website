import Head from 'next/head'
import ProjectsContainer from '../../containers/ProjectsContainer'

export default function personal() {
	const projects = [
		{
			id: 1,
			title: 'CoinMarket',
			description:
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum sint quae, obcaecati voluptatum aliquid nesciunt sunt repellendus adipisci quam blanditiis dolor earum expedita deleniti ullam recusandae, magnam quidem pariatur totam accusamus ad facere. Suscipit commodi delectus, quae laboriosam facilis quidem magnam tempore debitis alias mollitia, incidunt, praesentium repudiandae. Debitis, praesentium?',
			complexity: 3,
			img: [
				'https://res.cloudinary.com/jdcamayos/image/upload/v1650322597/jdcamayos-com/projects/personal/coin-market-react/Screenshot_2022-04-18_175513_usuf5k.png',
				'https://res.cloudinary.com/jdcamayos/image/upload/v1650322597/jdcamayos-com/projects/personal/coin-market-react/Screenshot_2022-04-18_175513_usuf5k.png',
			],
			tags: [],
		},
		{
			id: 2,
			title: 'Ninja Notes MUI',
			description:
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum sint quae, obcaecati voluptatum aliquid nesciunt sunt repellendus adipisci quam blanditiis dolor earum expedita deleniti ullam recusandae, magnam quidem pariatur totam accusamus ad facere. Suscipit commodi delectus, quae laboriosam facilis quidem magnam tempore debitis alias mollitia, incidunt, praesentium repudiandae. Debitis, praesentium?',
			complexity: 4,
			img: [
				'https://res.cloudinary.com/jdcamayos/image/upload/v1650323549/jdcamayos-com/projects/personal/ninja-notes-mui/Screenshot_2022-04-18_181157_svtggu.png',
				'https://res.cloudinary.com/jdcamayos/image/upload/v1650323549/jdcamayos-com/projects/personal/ninja-notes-mui/Screenshot_2022-04-18_181157_svtggu.png',
			],
			tags: [],
		},
	]
	return (
		<>
			<Head>
				<title> Juan Camayo - Projects - Client</title>
				<meta name='description' content='' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<ProjectsContainer projects={projects} />
		</>
	)
}
