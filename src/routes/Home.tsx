import HomeLogo from "../assets/Home.jpg";
import HeroSection from "../components/Hero/HeroSection";
import Navbar from "../components/Navbar/Navbar";
import Clients from "../components/Products/Products";


function Home() {
    return (
        <>
        <Navbar />
        <HeroSection 
                cName="Hero"
                HeroIMG={HomeLogo} 
                title={"Venha construir o seu sistema conosco."} 
                text={"Neste ambiente, oferecemos a você a oportunidade  de desenvolver e personalizar o seu próprio sistema de gestão empresarial."}     
                url="/"
                btnClass="show"
                btnText= "Saiba Mais!!"
                />
                <Clients />
        </>
    )
}

export default Home
