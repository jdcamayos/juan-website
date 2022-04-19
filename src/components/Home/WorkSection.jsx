/* eslint-disable @next/next/no-img-element */
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function WorkSection() {
	// const works = [
	//   {
	//     id: 1,
	//     title: 'HSRP Billing App',
	//     description: '',
	//     complexity: 4,
	//     img: '',
	//     tags: ['HTML', 'SCSS', 'React', 'Electron', 'NodeJS', 'XML', 'PostgreSQL', 'Firebird SQL']
	//   },
	//   {
	//     id: 2,
	//     title: 'Medical History Interoperability',
	//     description: '',
	//     complexity: 4,
	//     img: '',
	//     tags: ['NodeJS', 'Webpack', 'Linux', 'Microsoft SQL Server', 'Firebird SQL', 'PostgreSQL']
	//   },
	//   {
	//     id: 3,
	//     title: 'BookBox',
	//     description: '',
	//     complexity: 3,
	//     img: '',
	//     tags: ['HTML', 'SCSS', 'React', 'Bootstrap', 'NodeJS', 'ExpressJS', 'MongoDB']
	//   },
	// ]
	const workGroup = [
		{
			id: 1,
			category: 'Client',
			description: '',
			works: [
				{
					id: 1,
					title: 'HSRP Billing App',
					img: 'https://res.cloudinary.com/jdcamayos/image/upload/v1650315521/jdcamayos-com/billing-app/Home_t0tgki.png',
				},
				// {
				// 	id: 2,
				// 	title: 'Medical History Interoperability',
				// 	img: 'https://res.cloudinary.com/jdcamayos/image/upload/v1650317737/jdcamayos-com/interoperability/Image1_jsbltw.png',
				// },
				// {
				// 	id: 3,
				// 	title: 'BookBox',
				// 	img: 'https://res.cloudinary.com/jdcamayos/image/upload/v1650322347/jdcamayos-com/bookbox/Screenshot_2022-04-18_175211_xvmytf.png',
				// },
			],
		},
		{
			id: 2,
			category: 'Personal',
			description: '',
			works: [
				{
					id: 1,
					title: 'CoinMarket',
					img: 'https://res.cloudinary.com/jdcamayos/image/upload/v1650322597/jdcamayos-com/projects/personal/coin-market-react/Screenshot_2022-04-18_175513_usuf5k.png',
				},
				// {
				// 	id: 2,
				// 	title: 'Ninja Notes MUI',
				// 	img: 'https://res.cloudinary.com/jdcamayos/image/upload/v1650323549/jdcamayos-com/projects/personal/ninja-notes-mui/Screenshot_2022-04-18_181157_svtggu.png',
				// },
			],
		},
	]

	return (
		<section className='work section' id='work'>
			<span className='section__subtitle'>Recents works</span>
			<h2 className='section__title'>My Portfolio</h2>

			{/* <div className='work__filters'>
				<span className='work__item active-work'>All</span>
				<span className='work__item '>Client</span>
				<span className='work__item '>Personal</span>
			</div> */}

			<div className='work__container container grid'>
				{workGroup.map(wg => (
					<div key={wg.id} className='work__card'>
						<div className='carousel'>
							{wg.works.map(w => (
								<div key={w.id} className='carousel__slide'>
									<img src={w.img} alt='' className='work__img' />
								</div>
							))}
						</div>
						<h3 className='work__title'>{wg.category}</h3>
						<a href='#' className='work__button'>
							See All
							<FontAwesomeIcon icon={faArrowRight} className='work__icon' />
						</a>
					</div>
				))}
			</div>
		</section>
	)
}
