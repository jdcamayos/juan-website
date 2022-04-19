import AboutSection from '../components/Home/AboutSection'
import ContactSection from '../components/Home/ContactSection'
import HomeMain from '../components/Home/HomeMain'
import HomeSection from '../components/Home/HomeSection'
import SkillsSection from '../components/Home/SkillsSection'
import WorkSection from '../components/Home/WorkSection'
import Footer from '../components/Layout/Footer'
import Header from '../components/Layout/Header'

export default function HomeContainer() {
	return (
		<>
			<Header />
			<HomeMain>
				<HomeSection />
				<AboutSection />
				<SkillsSection />
				<WorkSection />
				<ContactSection />
			</HomeMain>
			<Footer />
		</>
	)
}
