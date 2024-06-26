import About from 'components/about';
import Contact from 'components/contact';
import Experience from 'components/experience';
import Footer from 'components/footer';
import Hero from 'components/hero';
import Navbar from 'components/navbar';
import Projects from 'components/projects';

const Home = () => (
  <>
    <Navbar />
    <Hero />
    <About />
    <Experience />
    <Projects />
    <Contact />
    <Footer />
  </>
);

export default Home;
