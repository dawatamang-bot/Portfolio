import Header from "../../components/Header";
import LeftSider from "../LeftSider";
import About from "./About";
import Certification from "./Certification";
import Experiences from "./Experiences";
import Footer from "./Footer";
import Intro from "./Intro";
import Projects from "./Projects";
const Home = () => {
  return (
    <div>
      <Header />
      <div className="bg-primary px-40 sm:px-5 ">
        <Intro />
        <About />
        <Experiences />
        <Projects />
        <Certification />
        <Footer />
        <LeftSider />
      </div>
    </div>
  );
};
export default Home;
