import FooterComponent from '../../components/common/footer/Footer.component'
import AboutsectionComponent from '../../components/home/aboutsection/Aboutsection.component'
import HerosectionComponent from '../../components/home/herosection/Herosection.component'
import ReviewsectionComponent from '../../components/home/reviewsection/Reviewsection.component'

function HomePage() {
  return (
    <main>
      <HerosectionComponent />
      <AboutsectionComponent />
      <ReviewsectionComponent />
      <FooterComponent />
    </main>
  )
}

export default HomePage
