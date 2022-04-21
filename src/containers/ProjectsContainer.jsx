/* eslint-disable @next/next/no-img-element */
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import Footer from '../components/Layout/Footer'
import Header from '../components/Layout/Header'

export default function ProjectsContainer({ projects }) {
	const [projectSelected, setProjectSelected] = useState(projects[0])

	const setScale = (url, width, height) =>
		String(url).replace(
			'upload/',
			`upload/c_scale${width ? `,w_${width ? width : 500}` : ''}${
				height ? `,h_${height ? height : 500}` : ''
			}/`
		)

	const handleProject = project => {
		setProjectSelected(project)
	}
	return (
		<>
			<Header />
			<main className='container projects__container'>
				<h1 className='section__title'>Clients projects</h1>
				<section className='project__section'>
					<div className='project__carousel'>
						<div className='project__carousel-viewport'>
							{projectSelected.img.map((img, i) => (
								<article key={i} className='project__carousel-slide'>
									<img
										src={setScale(img, 800)}
										alt={projectSelected.title}
									/>
								</article>
							))}
						</div>
					</div>
					<div>
						<h2 className='project__title'>{projectSelected.title}</h2>
						<div className='project__complexity'>
							{Array.from({ length: projectSelected.complexity }).map(
								(_, i) => (
									<span key={i}>
										<FontAwesomeIcon icon={faStar} height='1rem' />
									</span>
								)
							)}
						</div>
						<p>{projectSelected.description}</p>
						<ul className='project__technologies'>
							{projectSelected.tags.map((tag, i) => (
								<li key={i} className='project__technology'>
									{tag}
								</li>
							))}
						</ul>
					</div>
				</section>
				<section className='projects__list'>
					<div className='project__list-viewport'>
						{projects.map(p => (
							<article
								key={p.id}
								onClick={() => handleProject(p)}
								className={`projects__list-item ${
									p.id === projectSelected.id ? 'project__item-selected' : ''
								}`}
							>
								<img
									src={setScale(p.img[0], null, 100)}
									alt={p.title}
									className='project__item-img'
								/>
								<p className='project__item-name'>{p.title}</p>
							</article>
						))}
					</div>
				</section>
			</main>
			<Footer />
		</>
	)
}
