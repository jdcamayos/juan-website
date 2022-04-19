import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
	return (
		<footer className='footer'>
			<div className='footer__container container'>
				<h1 className='footer__title'>Juan</h1>
				<ul className='footer__list'>
					<li className='footer__link'>
						<a href="#home">Home</a>
					</li>
					<li className='footer__link'>
						<a href="#about">About me</a>
					</li>
					<li className='footer__link'>
						<a href="#skills">Skills</a>
					</li>
					<li className='footer__link'>
						<a href="#work">Portfolio</a>
					</li>
					<li className='footer__link'>
						<a href="#contact">Contact me</a>
					</li>
				</ul>
				<ul className='footer__social'>
					<li className='footer__social-link'>
						<a href="https://instagram.com/jdcamayos" rel='noreferrer' target="_blank">
							<FontAwesomeIcon icon={faInstagram} className='social__icon' />
						</a>
					</li>
					<li className='footer__social-link'>
						<a href="https://twitter.com/jdcamayos" rel='noreferrer' target="_blank">
							<FontAwesomeIcon icon={faTwitter} className='social__icon' />
						</a>
					</li>
				</ul>
				<h6 className='footer__copy'>
					Made with{' '}
					<FontAwesomeIcon icon={faHeart} className='footer__heart' />{' '}
					by @jdcamayos
				</h6>
			</div>
		</footer>
	)
}
