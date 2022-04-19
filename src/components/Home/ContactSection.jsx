import { faTelegram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import {
	faArrowRight,
	faEnvelopeOpenText,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ContactSection() {
	const links = [
		{
			id: 1,
			title: 'Email',
			subtitle: 'jd.camayo@gmail.com',
			link: 'mailto:examplemail@correo.com',
			icon: faEnvelopeOpenText,
		},
		{
			id: 2,
			title: 'WhatsApp',
			subtitle: '318-485-3359',
			link: 'https://api.whatsapp.com/send?phone=573184853359&text=Hey, I come from jdcamayos.com!',
			icon: faWhatsapp,
		},
		{
			id: 3,
			title: 'Telegram',
			subtitle: '318-485-3359',
			link: 'https://t.me/jdcamayos',
			icon: faTelegram,
		},
	]
	return (
		<section className='contact section' id='contact'>
			<span className='section__subtitle'>Get in touch</span>
			<h2 className='section__title'>Contact me</h2>

			<div className='contact__container container grid'>
				<div className='contact__content'>
					<h3 className='contact__title'>Talk to me</h3>

					<div className='contact__info'>
						{links.map(l => (
							<div key={l.id} className='contact__card'>
								<span className='contact__card-icon'>
									<FontAwesomeIcon icon={l.icon} />
								</span>
								<h3 className='contact__card-title'>{l.title}</h3>
								<span className='contact__card-data'>{l.subtitle}</span>

								<a
									href={l.link}
									target='_blank'
									rel='noreferrer'
									className='contact__button'
								>
									Write me{' '}
									<span className='contact__button-icon'>
										<FontAwesomeIcon icon={faArrowRight} />
									</span>
								</a>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
