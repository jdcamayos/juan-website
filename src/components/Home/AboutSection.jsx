/* eslint-disable @next/next/no-img-element */
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import {
	// faArrowDown,
	faBriefcase,
	faMedal,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function AboutSection() {
	return (
		<section className='about section' id='about'>
			<span className='section__subtitle'>My Intro</span>
			<h2 className='section__title'>About Me</h2>

			<div className='about__container container grid'>
				<div className='about__image'>
					<img
						src='https://res.cloudinary.com/jdcamayos/image/upload/c_scale,w_500/v1650332904/jdcamayos-com/AboutImage_n1ohep.png'
						alt='About Juan'
					/>
				</div>

				<div className='about__data'>
					<div className='about__info'>
						<div className='about__box'>
							<span className='about__icon'>
								<FontAwesomeIcon icon={faBriefcase} />
							</span>
							<h3 className='about__title'>25+</h3>
							<span className='about__subtitle'>Projects Finished</span>
						</div>
						<div className='about__box'>
							<span className='about__icon'>
								<FontAwesomeIcon icon={faMedal} />
							</span>
							<h3 className='about__title'>2</h3>
							<span className='about__subtitle'>Years Experience</span>
						</div>
						{/* <div className='about__box'>
              <span className='about__icon'>
                <FontAwesomeIcon icon={} />
              </span>
							<h3 className='about__title'>Projects</h3>
							<span className='about__subtitle'>25+</span>
						</div> */}
					</div>
					<div className='about__description'>
						Self-taught software developer. I taught myself to program in 2020,
						since then I have learned different technologies that have allowed
						me to carry out projects for different clients.
					</div>
					<div className='about__social'>
						<a
							href='https://github.com/jdcamayos'
							target='_blank'
							rel='noreferrer'
							className='about__social-icon'
						>
							<FontAwesomeIcon icon={faGithub} />
						</a>
						<a
							href='https://www.linkedin.com/in/jdcamayos/'
							target='_blank'
							rel='noreferrer'
							className='about__social-icon'
						>
							<FontAwesomeIcon icon={faLinkedin} />
						</a>
					</div>
				</div>
			</div>
			{/* <div className='next__section'>
				<a href='#skills'>
					<span className='next__section-icon'>
						<FontAwesomeIcon icon={faArrowDown} />
					</span>
					<span className='next__section-button'>My Skills</span>
				</a>
			</div> */}
		</section>
	)
}
