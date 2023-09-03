import HomeLogo from "../assets/Home.jpg"
import HeroSection from "../components/Hero/HeroSection"
import Navbar from "../components/Navbar/Navbar"



function About() {
    return (
        <>
        <Navbar />
        <HeroSection 
                cName="Hero-mid"
                HeroIMG={HomeLogo}
                title={"Nossa Historia"}
                btnText="" text={""} url={""} btnClass={""}   />
        </>
    )
}

export default About
