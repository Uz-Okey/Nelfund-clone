
import LoanStep from '@/Components/LoanStep'
import Hero from '../Components/Hero'
import Navbar from '../Components/Navbar'
import Faqsection from '../Components/Faqs-section'
import Benefits from '../Components/Benefits'
import DataInsight from '@/Components/DataInsight'
import GetInTouch from '@/Components/GetInTouch';
import Footer from '@/Components/Footer';
const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <LoanStep/>
        <Faqsection/>
        <Benefits/>
        <DataInsight/>
        <GetInTouch/>
        <Footer/>
    </div>
  )
}

export default Home