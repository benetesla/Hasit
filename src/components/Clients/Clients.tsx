import Empresa01 from "../../assets/Empresa01.jpg";
import Pessoa1 from "../../assets/pessoa.jpg";
import "./ClientsStyle.css";
const Clients = () => {
  return (
    <div className="Clients">
      <h1>Nossos Fiéis Clientes</h1>
      <p>Esta é a aba dedicada aos nossos valiosos clientes,
        onde você pode encontrar informações e detalhes sobre aqueles que confiam em nossos produtos e serviços.
        Nossos clientes são a espinha dorsal de nosso negócio, e esta seção é dedicada a reconhecer
        e valorizar a relação de confiança que construímos com eles ao longo do tempo.
      </p>
      <div className="first-des">
        <div className="desc-text">
          <h2>
            João da Silva
          </h2>
          <p>
            Excelente loja! Produtos de alta qualidade e atendimento ao cliente excepcional. Recomendo a todos!!
          </p>
        </div>
        <div className="desc-img">
          <img src={Pessoa1} alt="João da Silva" />
          <img src={Empresa01} alt="João da Silva" />
        </div>
      </div>
    </div>
  )
}

export default Clients 