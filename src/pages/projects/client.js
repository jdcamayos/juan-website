import Head from 'next/head'
import ProjectsContainer from '../../containers/ProjectsContainer'

export default function client() {
	const projects = [
		{
			id: 1,
			title: 'HSRP Billing App',
			description:
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum sint quae, obcaecati voluptatum aliquid nesciunt sunt repellendus adipisci quam blanditiis dolor earum expedita deleniti ullam recusandae, magnam quidem pariatur totam accusamus ad facere. Suscipit commodi delectus, quae laboriosam facilis quidem magnam tempore debitis alias mollitia, incidunt, praesentium repudiandae. Debitis, praesentium?',
			complexity: 4,
			img: [
				'https://res.cloudinary.com/jdcamayos/image/upload/v1650315521/jdcamayos-com/projects/client/billing-app/Home_t0tgki.png',
				'https://res.cloudinary.com/jdcamayos/image/upload/v1650315521/jdcamayos-com/projects/client/billing-app/Home_t0tgki.png',
				'https://res.cloudinary.com/jdcamayos/image/upload/v1650315521/jdcamayos-com/projects/client/billing-app/Home_t0tgki.png',
				'https://res.cloudinary.com/jdcamayos/image/upload/v1650315521/jdcamayos-com/projects/client/billing-app/Home_t0tgki.png',
			],
			tags: [
				'HTML',
				'SCSS',
				'React',
				'Electron',
				'NodeJS',
				'XML',
				'PostgreSQL',
				'Firebird SQL',
			],
		},
		{
			id: 2,
			title: 'Medical History Interoperability',
			description:
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum sint quae, obcaecati voluptatum aliquid nesciunt sunt repellendus adipisci quam blanditiis dolor earum expedita deleniti ullam recusandae, magnam quidem pariatur totam accusamus ad facere. Suscipit commodi delectus, quae laboriosam facilis quidem magnam tempore debitis alias mollitia, incidunt, praesentium repudiandae. Debitis, praesentium?',
			complexity: 4,
			img: [
				'https://res.cloudinary.com/jdcamayos/image/upload/v1650317737/jdcamayos-com/projects/client/interoperability/Image1_jsbltw.png',
				'https://res.cloudinary.com/jdcamayos/image/upload/v1650317737/jdcamayos-com/projects/client/interoperability/Image1_jsbltw.png',
				'https://res.cloudinary.com/jdcamayos/image/upload/v1650317737/jdcamayos-com/projects/client/interoperability/Image1_jsbltw.png',
				'https://res.cloudinary.com/jdcamayos/image/upload/v1650317737/jdcamayos-com/projects/client/interoperability/Image1_jsbltw.png',
			],
			tags: [
				'NodeJS',
				'Webpack',
				'Linux',
				'Microsoft SQL Server',
				'Firebird SQL',
				'PostgreSQL',
			],
		},
		{
			id: 3,
			title: 'BookBox',
			description:
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum sint quae, obcaecati voluptatum aliquid nesciunt sunt repellendus adipisci quam blanditiis dolor earum expedita deleniti ullam recusandae, magnam quidem pariatur totam accusamus ad facere. Suscipit commodi delectus, quae laboriosam facilis quidem magnam tempore debitis alias mollitia, incidunt, praesentium repudiandae. Debitis, praesentium?',
			complexity: 3,
			img: [
				'https://res.cloudinary.com/jdcamayos/image/upload/v1650322347/jdcamayos-com/projects/client/bookbox/Screenshot_2022-04-18_175211_xvmytf.png',
				'https://res.cloudinary.com/jdcamayos/image/upload/v1650322347/jdcamayos-com/projects/client/bookbox/Screenshot_2022-04-18_175211_xvmytf.png',
				'https://res.cloudinary.com/jdcamayos/image/upload/v1650322347/jdcamayos-com/projects/client/bookbox/Screenshot_2022-04-18_175211_xvmytf.png',
				'https://res.cloudinary.com/jdcamayos/image/upload/v1650322347/jdcamayos-com/projects/client/bookbox/Screenshot_2022-04-18_175211_xvmytf.png',
			],
			tags: [
				'HTML',
				'SCSS',
				'React',
				'Bootstrap',
				'NodeJS',
				'ExpressJS',
				'MongoDB',
			],
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
