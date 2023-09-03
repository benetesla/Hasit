import HomeLogo from "../assets/Home.jpg"
import HeroSection from "../components/Hero/HeroSection"
import Navbar from "../components/Navbar/Navbar"

function Projects() {
    return (
        <>
        <Navbar />
        <HeroSection 
                cName="Hero-mid"
                HeroIMG={HomeLogo}
                title={"Nossos Projetos"}
                btnText="" text={""} url={""} btnClass={""}   />
        </>
    )
}

export default Projects
