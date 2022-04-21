import { faMoon, faBurger } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

export default function Header() {
	return (
		<header className='header'>
			<div className='container header__container'>
				<Link href='/'>
					<a className='header__brand'>Juan</a>
				</Link>
				<div className='header__buttons'>
					{/* <button className='header__button'>
						<FontAwesomeIcon icon={faMoon} />
					</button>
					<button className='header__button'>
						<FontAwesomeIcon icon={faBurger} />
					</button> */}
				</div>
			</div>
		</header>
	)
}
