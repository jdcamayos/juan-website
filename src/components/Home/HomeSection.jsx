/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function HomeSection() {
	return (
		<section className='home section section__home' id='home'>
			<div className='home__container container grid'>
				<div className='home__blob'>
					<img src="https://res.cloudinary.com/jdcamayos/image/upload/v1650332875/jdcamayos-com/GreetingImage_vlhcb9.png" alt='Greeting Juan' />
				</div>
				<div className='home__data'>
					<span className='home__greeting'>Hi!</span>
					<span className='home__greeting'>I'm,</span>
					<h1 className='home__name'>Juan Camayo</h1>
					<h3 className='home__education'>Software Developer</h3>
				</div>
				<div className='home__buttons'>
					<a href='#' className='button button--ghost'>
						Download CV
					</a>
					<a href='#about' className='button'>
						About me
					</a>
				</div>
				{/* <div className='next__section'>
					<a href='#about'>
						<span className='next__section-icon'>
							<FontAwesomeIcon icon={faArrowDown} />
						</span>
						<span className='next__section-button'>About Me</span>
					</a>
				</div> */}
				{/* Home Buttons */}
				{/* <article className='home__buttons'></article>
				<article className='home__handle'></article>
				<article className='home__social'></article>
				<article className='home__scroll'></article> */}
			</div>
		</section>
	)
}
