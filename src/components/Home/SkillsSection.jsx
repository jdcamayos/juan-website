import { faCircleCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function SkillsSection() {
	const fields = [
		{
			id: 1,
			title: 'Frontend',
			skills: [
				{ id: 1, name: 'HTML', level: 'Intermediate', stars: 7 },
				{ id: 2, name: 'CSS', level: 'Intermediate', stars: 7 },
				{ id: 3, name: 'Javascript', level: 'Advanced', stars: 8 },
				{ id: 4, name: 'React', level: 'Advacend', stars: 8 },
				// { id: 5, name: 'React Native', level: 'Basic', stars: 6 },
				{ id: 5, name: 'Next', level: 'Intermediate', stars: 7 },
				{ id: 6, name: 'Vue', level: 'Basic', stars: 6 },
				{ id: 7, name: 'Angular', level: 'Basic', stars: 4 },
				{ id: 8, name: 'Tailwind', level: 'Advanced', stars: 8 },
				{ id: 9, name: 'Bootstrap', level: 'Advanced', stars: 8 },
				{ id: 10, name: 'MaterialUI', level: 'Basic', stars: 5 },
			],
		},
		{
			id: 2,
			title: 'Backend',
			skills: [
				{ id: 1, name: 'NodeJS', level: 'Advanced', stars: 8 },
				{ id: 2, name: 'NPM', level: 'Advanced', stars: 8 },
				{ id: 3, name: 'SQL', level: 'Advanced', stars: 8 },
				{ id: 4, name: 'NoSQL', level: 'Intermediate', stars: 7 },
				{ id: 5, name: 'Webpack', level: 'Intermediate', stars: 7 },
				{ id: 6, name: 'Docker', level: 'Intermediate', stars: 7 },
				{ id: 7, name: 'AWS', level: 'Intermediate', stars: 7 },
				{ id: 8, name: 'Azure', level: 'Basic', stars: 6 },
				// { id: 8, name: 'Linux', level: 'Intermediate', stars: 7 },
			],
		},
	]
	return (
		<section className='skills section section__skills' id='skills'>
			<span className='section__subtitle'>My abilities</span>
			<h2 className='section__title'>Skills</h2>
			<div className='skills__container container grid'>
				{fields.map(f => (
					<div key={f.id} className='skills__content'>
						<h3 className='skills__title'>{f.title}</h3>

            <div className='skills__box'>
							<div className='skills__group'>
								{f.skills.map(s => (
									<div key={s.id} className='skills__data'>
                    <span className="skill__icon">
                      <FontAwesomeIcon icon={faCircleCheck} />
                    </span>

										<div>
											<h3 className='skills__name'>{s.name}</h3>
											<span className='skills__level'>{s.level}</span>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}
